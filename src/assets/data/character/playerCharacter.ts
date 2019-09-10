import {ItemStats} from '../items/itemStatsInterface';

export interface PlayerCharacter {
  aboutCharacter: {
    mainInfo: {               // Основная и обязательная информация о персонаже
      playerName: string      // Имя игрока
      characterName: string   // Имя персонажа
      race: string            // Расса
      classes: {                // Класс
        name: string          // Название
        level: number         // Уровень
      }[]
      background: string      // Предыстория
      feats: string[]         // Черты
    };

    adventureInfo: {          // Информация необходимая для приключений и сражений
      inspiration: boolean    // Вдохновение
      experience: number      // Опыт

      speed: number           // Скорость
      initiative: number      // Инициатива
      armorClass: number      // Класс брони
      size: number            // Размер
      darkVision: number      // Тёмное зрение

      hitPoints: {            // Здоровье
        max: number           // Максимальное
        temp: number          // Временное
        current: number       // Текущее
      }
      deathSaves: {           // Спасброски от смерти
        successes: number     // Успешные
        failures: number      // Провальные
      }
      savingThrows: string[]  // Бонус к спас броскам
      resistance: string[]    // Сопротивление (бросок с преимужеством)
      immunity: string[]      // Иммунитет
    };

    description: {            // Описание персонажа (опциональная информация)
      alignment: string       // Мировозрение
      imageUrl: string        // Ссылка на портрет персонажа
      sex: 'male' | 'female'  // Пол персонажа
      humanAge: number        // Возраст персонажа по человеческим меркам
      height: number          // Рост персонажа
      weight: number          // Вес персонажа

      personalityTraits: string[]
      ideals: string[]
      bonds: string[]
      flaws: string[]
    };

    attributes: {             // Атрибуты
      strength: number        // Сила
      dexterity: number       // Ловкость
      constitution: number    // Выносливость
      intelligence: number    // Интеллект
      wisdom: number          // Мудрость
      charisma: number        // Харизма
    };

    proficiency: {
      bonus: number           // Бонус мастерства
      skills: string[]        // Владение атрибутивными навыками

      languages: string[]     // Владение языками
      tools: string[]         // Владение инструментами
      weapons: string[]       // Владение оружием
      armor: string[]         // Владение доспехами
    };
  };
  // inventory: {
  //   weapon: {
  //     type: 'melee' | 'ranged'
  //     stats: ItemStats
  //     description: string
  //
  //     features: string[]
  //     damage: {
  //       type: string
  //       dice: number
  //       count: number
  //     }[]
  //     ammunitionCount: number
  //   }
  //   armor: {
  //     stats: ItemStats
  //     type: string
  //     armorClass: number
  //     shield: boolean
  //     stealthPenalty: boolean
  //     strengthRequirement: number
  //   }
  //   magicFocus: ItemStats
  //   coins: {
  //     bronze: number
  //     silver: number
  //     gold: number
  //     electrum: number
  //     platinum: number
  //     storage: number
  //   }
  //   treasures: ItemStats[]
  // };
}
