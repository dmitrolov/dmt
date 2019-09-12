import {CharacterProficiency} from './character.proficiency.model';
import {CharacterStats} from './character.stats.model';
import {CharacterEffects} from './character.effects.model';

export interface CharacterClass extends DomItem {
  proficiency: CharacterProficiency;
  effects: CharacterEffects;
  equipment: string[];
}

export const CharacterClassesList: CharacterClass[] = [
  {
    value: 'barbarian',
    title: {
      en: 'Barbarian',
      ru: 'Варвар',
    },
    proficiency: {
      armor: ['light', 'medium', 'shields'],
      weapons: ['martial', 'simple'],
      tools: [],
      languages: [],
      skills: ['Choose two from Anim al Handling, Athletics, Intimidation, Nature, Perception, and Survival']
    },
    effects: {
      savingThrows: ['strength', 'constitution'],
      resistance: [],
      immunity: [],
    },
    equipment: ['greataxe', 'handaxe', 'handaxe', 'explorersPack', 'javelin', 'javelin', 'javelin', 'javelin'],
  }
];
