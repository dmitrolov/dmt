export interface Item extends DomItem {
  type: string;
  weight: number;               // Вес предмета в фунтах
  cost: number;                 // Стоимость предмета в самых дешевых монетах (прим. медные)
  rarity: number;               // Редкость предмета
  description: Localization;    // Описание предмета
}
