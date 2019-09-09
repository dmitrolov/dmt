export class PlayerCharacter {
  playerName: string;     // Имя игрока
  characterName: string;  // Имя персонажа
  imageUrl: string;       // Ссылка на картинку персонажа
  sex: string;            // Пол персонажа
  humanAge: number;       // Возраст персонажа по человеческим меркам

  race: string;           // Расса персонажа
  height: number;
  weight: number;

  attributes ={};

  skillsProficiency = { 	    // Владение навыками
    Athletics: false,		      // Атлетика

    Acrobatics: false,		    // Акробатика
    SleightOfHand: false,	    // Ловкость рук
    Stealth: false,			      // Скрытность

    Endurance: false,		      // Выносливость

    Investigation: false,	    // Анализ
    History: false,			      // История
    Arcana: false,			      // Магия
    Nature: false,			      // Природа
    Religion: false,	      	// Религия

    Perception: false,	    	// Внимательность
    Survival: false,		      // Выживание
    Medicine: false,	      	// Медицина
    Insight: false,		      	// Проницательность
    AnimalHandling: false,  	// Уход за животными

    Performance: false,		    // Выступление
    Intimidation: false,    	// Запугивание
    Deception: false,	      	// Обман
    Persuasion: false,	    	// Убеждение
  };
}
