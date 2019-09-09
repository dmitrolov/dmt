import {PlayerCharacterInterface} from './playerCharacterInterface';

export class Gremmy implements PlayerCharacterInterface {
  attributes: {
    strength: 8;
    dexterity: 12;
    constitution: 15;
    intelligence: 17;
    wisdom: 13;
    charisma: 10;
  };
  characterName: 'Гремми';
  height: 1.2;
  humanAge: 20;
  imageUrl: 'https://vignette.wikia.nocookie.net/wow/images/1/18/ChromieTCG.JPG/revision/latest?cb=20140219143258&path-prefix=ru';
  playerName: 'Оксана';
  race: 'gnome';
  sex: 'female';
  skillsProficiency: {
    Athletics: false;
    Acrobatics: false;
    SleightOfHand: false;
    Stealth: false;
    Endurance: false;
    Investigation: true;
    History: true;
    Arcana: true;
    Nature: false;
    Religion: false;
    Perception: false;
    Survival: false;
    Medicine: false;
    Insight: true;
    AnimalHandling: false;
    Performance: false;
    Intimidation: false;
    Deception: false;
    Persuasion: false
  };
  weight: 1;

}
