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
const tools = {
  tool: {
    tinsmith: {
      en: 'Tinsmith Tools',
      ru: 'Инструменты жестянщика 50 зм 10 фнт.',
      cost: 5000,
      weight: 10
    }
  }
};
const abilities = {
  race: {
    gnome: {
      gnomeCunning: {
        name: {
          eng: '',
          ru: 'Гномья хитрость',
        },
        innerHTML: {
          eng: '',
          ru: `<p>Вы совершаете с преимуществом спасброски:
                <ul>
                  <li>Интеллекта</li>
                  <li>Мудрости</li>
                  <li>Харизмы</li>
                </ul>против магии.</p>`
        },
      },
      handicraftKnowledge: {
        name: {
          eng: 'Handicraft knowledge',
          ru: 'Ремесленные знания'
        },
        innerHTML: {
          ru:
            `<p>
            При совершении проверки Интеллекта (История) применительно к:
             <ul>
             <li>магическому</li>
             <li>алхимическому</li>
             <li>технологическому</li>
            </ul>объекту, бонус мастерства удваивается.
            </p>`
        }
      },
      tinsmith: {
        name: {
          en: 'Tinsmith',
          ru: 'Жестянщик'
        },
        innerHTML: {
          ru: `<p>

</p>`
        }
      }
    }
  }
};
const racesList = {
  gnome: {
    raceName: raceNames.gnome,
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
        abilities: [abilities.race.gnome.handicraftKnowledge],
        toolsProficiency: [tools.tool.tinsmith]
      }
    }
  }
};
