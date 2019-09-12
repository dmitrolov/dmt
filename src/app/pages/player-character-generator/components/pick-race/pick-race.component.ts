import {Component, OnInit} from '@angular/core';
import {PlayerCharacter} from '../../../../../assets/data/character/playerCharacter.model';
import {Store} from '@ngrx/store';
import {StoreInterface} from '../../../../store/store.model';
import {racesList} from '../../../../../assets/data/character/racesList';
import {CharacterRace} from '../../../../../assets/data/character/info/character.race.model';

@Component({
  selector: 'app-pick-race',
  templateUrl: './pick-race.component.html',
  styleUrls: ['./pick-race.component.scss']
})
export class PickRaceComponent implements OnInit {
  private racesList = racesList;
  private generatingCharacter: PlayerCharacter;

  constructor(private store: Store<StoreInterface>) {
    store.subscribe((character) => {
      this.generatingCharacter = character.character;
    });
  }

  ngOnInit() {
  }

  // onRaceInParentComponentSet(value: boolean) {
  //   this.generatingCharacter.characterInfo.mainInfo.race = String(value);
  // }
  // onSubRaceInParentComponentSet(value: boolean) {
  //   this.generatingCharacter.characterInfo.mainInfo.subRace = String(value);
  // }
  // getSubRaceList(value: string) {
  //   this.racesList.map((race) => {
  //     if (race.value === value) {
  //       console.log(race.subRaces);
  //       return race.subRaces;
  //     }
  //   });
  // }

  saveRace() {
    racesList.map((race) => {
      if (race.value === this.generatingCharacter.characterInfo.mainInfo.race) {
        console.log('Character saved');
        this.setRace(this.generatingCharacter, race);
        race.subRaces.map((subRace) => {
          if (subRace.value === this.generatingCharacter.characterInfo.mainInfo.subRace) {
            this.setRace(this.generatingCharacter, subRace);
          }
        });
      }
    });
  }

  setRace(character: PlayerCharacter, race: CharacterRace) {
    this.setAttributes(character, race);   // Set attributes
    this.setStats(character, race);        // Set stats
    this.setProficiency(character, race);  // Set proficiency
    race.abilities.forEach((ability) => {
      character.abilities.push(ability);
    });
  }

  setAttributes(character: PlayerCharacter, race: CharacterRace) {
    character.characterInfo.attributes.strength += race.attributes.strength;
    character.characterInfo.attributes.dexterity += race.attributes.dexterity;
    character.characterInfo.attributes.constitution += race.attributes.constitution;
    character.characterInfo.attributes.intelligence += race.attributes.intelligence;
    character.characterInfo.attributes.wisdom += race.attributes.wisdom;
    character.characterInfo.attributes.charisma += race.attributes.charisma;
  }

  setStats(character: PlayerCharacter, race: CharacterRace) {
    character.characterInfo.stats.size = race.stats.size;
    character.characterInfo.stats.speed += race.stats.speed;
    character.characterInfo.stats.darkVision += race.stats.darkVision;
    character.characterInfo.stats.initiative += race.stats.initiative;

    const effectsAttributes = ['savingThrows', 'resistance', 'immunity'];
    effectsAttributes.forEach((attribute) => {
      race.effects[attribute].forEach((value) => {
        character.characterInfo.effects[attribute].push(value);
      });
    });
  }

  setProficiency(character: PlayerCharacter, race: CharacterRace) {
    const proficiencyAttributes: string[] = [];
    // tslint:disable-next-line:forin
    for (const proficiencyKey in race.proficiency) {
      proficiencyAttributes.push(proficiencyKey);
    }
    proficiencyAttributes.forEach((attribute) => {
      race.proficiency[attribute].forEach((value => {
        character.characterInfo.proficiency[attribute].push(value);
      }));
    });
  }

}
