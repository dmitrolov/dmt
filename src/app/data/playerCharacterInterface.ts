export interface PlayerCharacterInterface {
  playerName: string;     // Имя игрока
  characterName: string;  // Имя персонажа
  imageUrl: string;       // Ссылка на картинку персонажа
  sex: string;            // Пол персонажа
  humanAge: number;       // Возраст персонажа по человеческим меркам

  race: string;           // Расса персонажа
  height: number;
  weight: number;

  attributes: {
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number
  };

  skillsProficiency: { 	        // Владение навыками
    Athletics: boolean,		      // Атлетика

    Acrobatics: boolean,		    // Акробатика
    SleightOfHand: boolean,	    // Ловкость рук
    Stealth: boolean,			      // Скрытность

    Endurance: boolean,		      // Выносливость

    Investigation: boolean,	    // Анализ
    History: boolean,			      // История
    Arcana: boolean,			      // Магия
    Nature: boolean,			      // Природа
    Religion: boolean,	      	// Религия

    Perception: boolean,	    	// Внимательность
    Survival: boolean,		      // Выживание
    Medicine: boolean,	      	// Медицина
    Insight: boolean,		      	// Проницательность
    AnimalHandling: boolean,  	// Уход за животными

    Performance: boolean,		    // Выступление
    Intimidation: boolean,    	// Запугивание
    Deception: boolean,	      	// Обман
    Persuasion: boolean,	    	// Убеждение
  };
}
