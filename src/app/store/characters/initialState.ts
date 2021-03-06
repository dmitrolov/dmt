import {Character} from '../../models/character/character.model';

export const initialState: Character = {
  about: {
    info: {
      playerName: '',
      characterName: '',
      race: '',
      subRace: '',
      classes: [{
        name: '',
        level: 1,
      }],
      background: '',
      feats: [],
    },
    attributes: {
      strength: 15,
      dexterity: 14,
      constitution: 13,
      intelligence: 12,
      wisdom: 10,
      charisma: 8,
    },
    stats: {
      size: 'medium',
      speed: 0,
      darkVision: 0,
      initiative: 0,
    },
    effects: {
      savingThrows: [],
      resistance: [],
      immunity: [],
    },
    action: {
      hitPoints: {
        max: 0,
        temp: 0,
        current: 0,
      },
      deathSaves: {
        failures: 0,
        successes: 0,
      },
      bonus: 0,
      armorClass: 0,
      experience: 0,
      inspiration: false,
    },
    proficiency: {
      languages: [],
      tools: [],
      armor: [],
      skills: [],
      weapons: [],
    },
    description: {
      alignment: '',
      height: 0,
      weight: 0,
      age: {
        human: 0,
        mod: 0,
        total: 0,
      },
      imageUrl: '',
      sex: 'male',
    },
    personalQualities: {
      bonds: [],
      flaws: [],
      ideals: [],
      personalityTraits: [],
    }
  },
  abilities: [],
  equipment: [],
};
