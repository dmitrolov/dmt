import {CharacterProficiency} from './character.proficiency.model';
import {CharacterAttributes} from './character.attributes.model';
import {CharacterStats} from './character.stats.model';

export interface CharacterInfo {
  mainInfo: {               // Основная и обязательная информация о персонаже
    playerName: string      // Имя игрока
    characterName: string   // Имя персонажа
    race: string            // Расса
    subRace?: string        // Подрасса
    classes: {              // Класс
      name: string          // Название
      level: number         // Уровень
    }[]
    background: string      // Предыстория
    feats?: string[]        // Черты

  };

  stats: CharacterStats;

  action: {
    inspiration: boolean    // Вдохновение
    experience: number      // Опыт
    bonus: number           // Бонус мастерства

    armorClass: number      // Класс брони
    hitPoints: {            // Здоровье
      max: number           // Максимальное
      temp: number          // Временное
      current: number       // Текущее
    }
    deathSaves: {           // Спасброски от смерти
      successes: number     // Успешные
      failures: number      // Провальные
    }
  };

  description: {            // Описание персонажа (опциональная информация)
    alignment: string       // Мировозрение
    imageUrl: string        // Ссылка на портрет персонажа
    sex: 'male' | 'female'  // Пол персонажа
    age: {                  // Возраст персонажа
      human: number         // Возраст персонажа по человеческим меркам
      mod: number           // Модификатор возраста
      total: number         // Реальный возраст персонажа
    }
    height: number          // Рост персонажа
    weight: number          // Вес персонажа
  };
  personalQualities: {
    personalityTraits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
  };

  attributes: CharacterAttributes;
  proficiency: CharacterProficiency;
}
