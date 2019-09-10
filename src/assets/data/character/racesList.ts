import creatureSize from '../gameMechanics/creatureSize';
import gameLanguages from '../gameMechanics/gameLanguages';
import tools from '../items/tools';
import raceAbilities from '../skills/raceAbilities';

export default {
  gnome: {
    title: {
      eng: 'Gnome',
      ru: 'Гном',
    },
    ageModifier: 5,
    height: {
      min: 3,
      max: 4
    },
    weight: {
      min: 40,
      max: 45,
    },
    size: creatureSize.small,
    intelligence: 2,
    speed: 25,
    darkVision: 60,
    languages: [gameLanguages.general, gameLanguages.gnomish],
    abilities: [raceAbilities.race.gnome.gnomeCunning],
    subRace: {
      forest: {
        title: {
          eng: 'Forest gnome',
          ru: 'Лесной гном',
        },
        dexterity: 1,
        abilities: []
      },
      rock: {
        title: {
          eng: 'Rock gnome',
          ru: 'Скальный гном',
        },
        constitution: 1,
        abilities: [raceAbilities.race.gnome.handicraftKnowledge],
        toolsProficiency: [tools.tool.tinsmith]
      }
    }
  }
};
