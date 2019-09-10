interface RacesListInterface extends SubRace {
  // Description
  height: {
    min: number,
    max: number
  };
  weight: {
    min: number,
    max: number,
  };
  ageModifier: number;
  names: {
    male: DataLocalization,
    female: DataLocalization,
  };
  // Stats
  size: string;
  speed: number;
  darkVision: number;
  // Proficiency
  languages: string[];

  // Skills
  subRaces?: SubRace[];
}
interface SubRace extends DataDom {
  attributesBonus: {
    name: 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma';
    value: number;
  }[];
  abilities: string[];
  toolsProficiency?: string[];
}

export const racesList: RacesListInterface[] = [
  {
    value: 'dwarf',
    title: {
      en: 'Dwarf',
      ru: 'Дварф',
    },
    height: {
      max: 5,
      min: 4,
    },
    weight: {
      max: 170,
      min: 130,
    },
    ageModifier: 4,
    names: {
      male: {
        en: [
          'Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor',
          'Bruenor', 'Dain', 'Darrak', 'Delg', 'Eberk',
          'Einkil', 'Fargrim', 'Flint', 'Gardain', 'Harbek',
          'Kildrak', 'Morgran', 'Orsik', 'Oskar', 'Rangrim',
          'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Tordek',
          'Traubon', 'Travok', 'Ulfgar', 'Veit', 'Vondal',
        ],
        ru: [
          'Адрик', 'Альберих', 'Баренд', 'Баэрн', 'Броттор',
          'Бруенор', 'Вондал', 'Вэйт', 'Гардаин', 'Даин',
          'Даррак', 'Делг', 'Килдрак', 'Моргран', 'Орсик',
          'Оскар', 'Рангрим', 'Рюрик', 'Таклинн', 'Торадин',
          'Тордек', 'Торин', 'Травок', 'Траубон', 'Ульфгар',
          'Фаргрим', 'Флинт', 'Харбек', 'Эберк', 'Эйнкиль',
        ],
      },
      female: {
        en: [
          'Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal',
          'Diesa', 'Eldeth', 'Falkrunn', 'Finellen', 'Gunnloda',
          'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd',
          'Ilde', 'Liftrasa', 'Mardred', 'Riswynn', 'Sannl',
          'Torbera', 'Torgga', 'Vistra'
        ],
        ru: [
          'Артин', 'Бардрин', 'Вистра', 'Гуннлода', 'Гурдис',
          'Дагнал', 'Диеза', 'Илде', 'Катра', 'Кристид',
          'Лифтраса', 'Мардред', 'Одхильд', 'Рисвин', 'Саннл',
          'Торбера', 'Торгга', 'Фалкрунн', 'Финеллен', 'Хельджа',
          'Хлин', 'Эльдет', 'Эмбер',
        ],
      },
    },
    attributesBonus: [{
      name: 'constitution',
      value: 2,
    }],
    size: 'medium'

  },
  {
    value: 'gnome',
    title: {
      en: 'Gnome',
      ru: 'Гном',
    },
    height: {
      min: 3,
      max: 4
    },
    weight: {
      min: 40,
      max: 45,
    },
    ageModifier: 5,
    names: {
      male: {
        en: [],
        ru: [],
      }
      female: [],
    },
    size: 'small',
    attributesBonus: [{
      name: 'intelligence',
      value: 2,
    }],
    speed: 25,
    darkVision: 60,
    languages: ['general', 'gnomish'],
    abilities: ['gnomeCunning'],
    subRaces: [
      {
        value: 'gnomeForest',
        attributesBonus: [{
          value: 1,
          name: 'dexterity',
        }],
        title: {
          en: 'Forest gnome',
          ru: 'Лесной гном',
        },
        abilities: [],
      },
      {
        value: 'gnomeRock',
        title: {
          en: 'Rock gnome',
          ru: 'Скальный гном',
        },
        attributesBonus: [{
          value: 1,
          name: 'constitution',
        }],
        abilities: ['handicraftKnowledge'],
        toolsProficiency: ['tinsmith']
      }
    ]
  },
];
