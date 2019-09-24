type Size = 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'huge'
  | 'gargantuan';

export interface CharacterStats {  // Информация необходимая для приключений и сражений
  speed: number;                   // Скорость
  initiative: number;              // Бонус инициативы
  size: Size;                 // Размер
  darkVision: number;              // Тёмное зрение
}
