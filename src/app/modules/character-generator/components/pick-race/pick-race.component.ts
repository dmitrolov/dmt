import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreInterface} from '../../../../store/store.model';
import {Character} from '../../../../models/character/character.model';
import {CharacterRace} from '../../../../models/mechanics/character-race.model';
import {characterRaceData} from '../../../../models/mechanics/character-race.data';

@Component({
  selector: 'app-pick-race',
  templateUrl: './pick-race.component.html',
  styleUrls: ['./pick-race.component.scss']
})
export class PickRaceComponent implements OnInit {
  public racesList = characterRaceData;
  public generatingCharacter: Character;

  constructor(private store: Store<StoreInterface>) {
    store.subscribe((character) => {
      this.generatingCharacter = character.character;
    });
  }

  ngOnInit() {
  }

  onRaceInParentComponentSet(value: boolean) {
    this.generatingCharacter.about.info.race = String(value);
  }
  onSubRaceInParentComponentSet(value: boolean) {
    this.generatingCharacter.about.info.subRace = String(value);
  }
  getSubRaceList(value: string): CharacterRace[] {
    let subRaceList: CharacterRace[];
    this.racesList.map((race) => {
      if (race.id === value) {
        subRaceList = race.subRaces;
        return race.subRaces;
      }
    });
    return subRaceList;
  }

  saveRace() {
    this.racesList.map((race) => {
      if (race.id === this.generatingCharacter.about.info.race) {
        console.log('Character saved');
        this.generatingCharacter.about.description.imageUrl = race.raceGenerator.image;
        console.log('this.generatingCharacter.about.description.imageUrl',
          this.generatingCharacter.about.description.imageUrl,
          'race.generatorData.image', race.raceGenerator.image);
        this.setRace(this.generatingCharacter, race);
        race.subRaces.map((subRace) => {
          if (subRace.id === this.generatingCharacter.about.info.subRace) {
            this.setRace(this.generatingCharacter, subRace);
          }
        });
      }
    });
  }

  setRace(character: Character, race: CharacterRace) {
    this.setAttributes(character, race);   // Set attributes
    this.setStats(character, race);        // Set stats
    this.setProficiency(character, race);  // Set proficiency
    race.abilities.forEach((ability) => {
      character.abilities.push(ability);
    });
  }

  setAttributes(character: Character, race: CharacterRace) {
    for (const key in character.about.attributes) {
      character.about.attributes[key] += race.attributes[key];
    }
    character.about.attributes.strength += race.attributes.strength;
    character.about.attributes.dexterity += race.attributes.dexterity;
    character.about.attributes.constitution += race.attributes.constitution;
    character.about.attributes.intelligence += race.attributes.intelligence;
    character.about.attributes.wisdom += race.attributes.wisdom;
    character.about.attributes.charisma += race.attributes.charisma;
  }

  setStats(character: Character, race: CharacterRace) {
    character.about.stats.size = race.stats.size;
    character.about.stats.speed += race.stats.speed;
    character.about.stats.darkVision += race.stats.darkVision;
    character.about.stats.initiative += race.stats.initiative;

    const effectsAttributes = ['savingThrows', 'resistance', 'immunity'];
    effectsAttributes.forEach((attribute) => {
      race.effects[attribute].forEach((value) => {
        character.about.effects[attribute].push(value);
      });
    });
  }

  setProficiency(character: Character, race: CharacterRace) {
    const proficiencyAttributes: string[] = [];
    // tslint:disable-next-line:forin
    for (const proficiencyKey of Object.keys(race.proficiency)) {
      proficiencyAttributes.push(proficiencyKey);
    }
    proficiencyAttributes.forEach((attribute) => {
      race.proficiency[attribute].forEach((value => {
        character.about.proficiency[attribute].push(value);
      }));
    });
  }

}
