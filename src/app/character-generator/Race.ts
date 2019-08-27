const raceNames = {
  gnome: {
    eng: 'Gnome',
    ru: 'Гном',
  }
};
const subRaceNames = {
  gnome: {
    forest: {
      eng: 'Forest gnome',
      ru: 'Лесной гном',
    },
    rock: {
      eng: 'Rock gnome',
      ru: 'Скальный гном',
    }
  }
};
const creatureSize = { // Категории размеров
  tiny: {
    eng: 'Tiny',
    ru: 'Крошечный',
    area: 2.5, // 2,5 × 2,5 фута
  },
  small: {
    en: 'Small',
    ru: 'Маленький',
    area: 5,
  },
  medium: {
    en: 'Medium',
    ru: 'Средний',
    area: 5,
  },
  large: {
    en: 'Large',
    ru: 'Большой',
    area: 10,
  },
  huge: {
    en: 'Huge',
    ru: 'Огромный',
    area: 15,
  },
  enormous: {
    en: 'Enormous',
    ru: 'Громадный',
    area: 20, // 20 × 20 футов или больше
  },
};
const gameLanguages = {
  general: {
    eng: 'General',
    ru: 'Общий',
  },
  gnomish: {
    eng: 'Gnomish',
    ru: 'Гномий'
  },
};
const abilities = {
  race: {
    gnome: {
      gnomeCunning: {
        type: 'skill',
        name: {
          eng: '',
          ru: 'Гномья хитрость',
        },
        text: {
          eng: '',
          ru: 'Вы совершаете с преимуществом спасброски Интеллекта, Мудрости и Харизмы против магии.'
        },
      }
    }
  }
};
const racesList = {
  gnome: {
    raceName: raceNames.gnome,
    ageModificator: 5,
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
    abilities: [abilities.race.gnome.gnomeCunning],
    subRace: {
      forest: {
        subRaceName: subRaceNames.gnome.forest,
        dexterity: 1,
        abilities: []
      },
      rock: {
        subRaceName: subRaceNames.gnome.rock,
        constitution: 1,
        abilities: []
      }
    }
  }
};
