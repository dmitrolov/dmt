export interface CharacterStats {  // Информация необходимая для приключений и сражений
  speed?: number;                   // Скорость
  initiative?: number;              // Бонус инициативы
  size?: 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'huge'
    | 'gargantuan';                // Размер
  darkVision?: number;              // Тёмное зрение
  savingThrows?: string[];          // Бонус к спас броскам
  resistance?: string[];            // Сопротивление (Уменьшение урона х2, считается после всех модификаторов)
  immunity?: string[];              // Иммунитет
}
