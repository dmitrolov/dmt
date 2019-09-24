import {CharacterClass} from './character-class.model';

export const CharacterClassData: CharacterClass[] = [
  {
    id: 'barbarian',
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
    equipment: [
      {
        id: 'greatAxe',
        count: 1,
      },
      {
        id: 'handAxe',
        count: 2,
      },
      {
        id: 'explorersPack',
        count: 1,
      },
      {
        id: 'javelin',
        count: 4,
      },
    ],
  }
]
