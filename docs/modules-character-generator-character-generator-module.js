(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-character-generator-character-generator-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/character-generator/character-generator.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/character-generator/character-generator.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"switchTab(-1)\"><</button>\n<button (click)=\"switchTab(1)\">></button>\n<div [ngSwitch]=\"formTabsOptions\">\n  <app-main-info    *ngSwitchCase=\"0\"></app-main-info>\n  <app-pick-race    *ngSwitchCase=\"1\"></app-pick-race>\n  <app-pick-class   *ngSwitchCase=\"2\"></app-pick-class>\n  <div class=\"main-character-generator\">\n    <button (click)=\"setCharacter()\">Предпросмотр персонажа</button>\n    <br>\n    <button (click)=\"saveCharacter()\">Save</button>\n  </div>\n</div>\n\n\n  <!--  <ng-template ngSwitchCase=\"1\">-->\n  <!--    <h3>Давайте выберем рассу персонажа</h3>-->\n  <!--    <div class=\"main-character-generator__item\">-->\n  <!--      <label for=\"race\">Расса</label>-->\n<!--      <select [(ngModel)]=\"playerCharacter.race\" login=\"\" id=\"race\">-->\n  <!--        <option value=\"gnome\">Гном</option>-->\n  <!--        <option value=\"human\">Человек</option>-->\n  <!--      </select>-->\n  <!--    </div>-->\n  <!--    <div class=\"main-character-generator__item\">-->\n  <!--      <label for=\"sex\">Пол</label>-->\n<!--      <select login=\"\" id=\"sex\" [(ngModel)]=\"playerCharacter.sex\">-->\n  <!--        <option value=\"male\">Мужской ♂</option>-->\n  <!--        <option value=\"female\">Женский ♀</option>-->\n  <!--      </select>-->\n  <!--    </div>-->\n  <!--    <div class=\"main-character-generator__item\">-->\n  <!--      <label for=\"humanAge\">Возраст (Чел.)</label>-->\n  <!--      <input type=\"text\" id=\"humanAge\" [(ngModel)]=\"playerCharacter.humanAge\" placeholder=\"\">-->\n  <!--    </div>-->\n  <!--    <div class=\"main-character-generator__item\">-->\n  <!--      <label for=\"height\">Рост</label>-->\n<!--      <select [(ngModel)]=\"playerCharacter.height\" login=\"\" id=\"height\">-->\n  <!--        <option value=\"0.8\">Очень низкий</option>-->\n  <!--        <option value=\"0.9\">Низкий</option>-->\n  <!--        <option value=\"1\">Средний</option>-->\n  <!--        <option value=\"1.1\">Высокий</option>-->\n  <!--        <option value=\"1.2\">Очень высокий</option>-->\n  <!--      </select>-->\n  <!--    </div>-->\n  <!--    <div class=\"main-character-generator__item\">-->\n  <!--      <label for=\"weight\">Вес</label>-->\n<!--      <select [(ngModel)]=\"playerCharacter.weight\" login=\"\" id=\"weight\">-->\n  <!--        <option value=\"0.8\">Очень низкий</option>-->\n  <!--        <option value=\"0.9\">Низкий</option>-->\n  <!--        <option value=\"1\">Средний</option>-->\n  <!--        <option value=\"1.1\">Высокий</option>-->\n  <!--        <option value=\"1.2\">Очень высокий</option>-->\n  <!--      </select>-->\n  <!--    </div>-->\n  <!--  </ng-template>-->\n  <!--  <ng-template ngSwitchCase=\"2\">-->\n  <!--    <h3>Выберите клас персонажа</h3>-->\n  <!--  </ng-template>-->\n  <!--  <ng-template ngSwitchCase=\"3\">-->\n  <!--    <h3>Предыстория</h3>-->\n  <!--  </ng-template>-->\n  <!--  <ng-template ngSwitchCase=\"4\">-->\n  <!--    <h3>Теперь ролим атрибуты</h3>-->\n  <!--  </ng-template>-->\n  <!--  <ng-template ngSwitchCase=\"5\">-->\n  <!--    <h3>Стартовая экипировка</h3>-->\n  <!--  </ng-template>-->\n  <!--  <ng-template ngSwitchCase=\"6\">-->\n  <!--    <h3>Последние штрихи</h3>-->\n  <!--    <div class=\"main-character-generator__item\">-->\n  <!--      <label for=\"characterName\">Дайте имя своему персонажу</label>-->\n  <!--      <input-->\n  <!--        type=\"text\"-->\n  <!--        id=\"characterName\"-->\n  <!--        [(ngModel)]=\"playerCharacter.characterName\"-->\n  <!--        placeholder=\"\"-->\n  <!--      >-->\n  <!--    </div>-->\n  <!--    <div class=\"main-character-generator__item\">-->\n  <!--      <label for=\"imageUrl\">Как он выглядит?</label>-->\n  <!--      <input-->\n  <!--        type=\"text\"-->\n  <!--        id=\"imageUrl\"-->\n  <!--        [(ngModel)]=\"playerCharacter.imageUrl\"-->\n  <!--        placeholder=\"Ссылка на портрет\"-->\n  <!--      >-->\n  <!--    </div>-->\n  <!--    <div [className]=\"'main-character-generator__item'\">-->\n  <!--      <img-->\n  <!--        [className]=\"'main-character-generator__image'\"-->\n  <!--        src=\"{{playerCharacter.imageUrl || 'assets/img/default-user-icon-4.jpg'}}\"-->\n  <!--        alt=\"Player Character Image\"-->\n  <!--      >-->\n  <!--    </div>-->\n  <!--  </ng-template>-->\n  <!--</div>-->\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/character-generator/components/character-generator-select/character-generator-select.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/character-generator/components/character-generator-select/character-generator-select.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3>{{title}}</h3>\r\n  <select [id]=\"'race'\" [(ngModel)]=\"switchingAttribute\" (ngModelChange)=\"onChange()\">\r\n    <option *ngFor=\"let item of options\" [value]=\"item.value\">{{item.title.ru}}</option>\r\n  </select>\r\n  <div [ngSwitch]=\"switchingAttribute\">\r\n    <div *ngFor=\"let item of options\">\r\n      <div *ngSwitchCase=\"item.value\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/character-generator/components/main-info/main-info.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/character-generator/components/main-info/main-info.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3>Создание персонажа</h3>\r\n  <label>\r\n    Введите ваше имя<br>\r\n    <input type=\"text\" [(ngModel)]=\"generatingCharacter.about.info.playerName\">\r\n  </label>\r\n  <br>\r\n  <label for=\"characterName\">\r\n    Введите имя персонажа<br>\r\n    <input type=\"text\" id=\"characterName\" [(ngModel)]=\"generatingCharacter.about.info.characterName\">\r\n  </label>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/character-generator/components/pick-background/pick-background.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/character-generator/components/pick-background/pick-background.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>pick-background works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/character-generator/components/pick-class/pick-class.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/character-generator/components/pick-class/pick-class.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-character-generator-select\r\n    (outputValue)=\"onClassInParentComponentSet($event)\"\r\n    [switchingAttribute]=\"generatingCharacter.about.info.race\"\r\n    [options]=\"classList\"\r\n    [title]=\"'Выберите класс персонажа'\"\r\n  ></app-character-generator-select>\r\n  <button (click)=\"saveClass()\">Save class</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/character-generator/components/pick-race/pick-race.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/character-generator/components/pick-race/pick-race.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-character-generator-select\r\n    (outputValue)=\"onRaceInParentComponentSet($event)\"\r\n    [switchingAttribute]=\"generatingCharacter.about.info.race\"\r\n    [options]=\"racesList\"\r\n    [title]=\"'Выберите рассу персонажа'\"\r\n  >\r\n    <app-character-generator-select\r\n      (outputValue)=\"onSubRaceInParentComponentSet($event)\"\r\n      [switchingAttribute]=\"generatingCharacter.about.info.subRace\"\r\n      [options]=\"getSubRaceList(generatingCharacter.about.info.race)\"\r\n      [title]=\"'Выберите подрассу персонажа'\"\r\n    ></app-character-generator-select>\r\n  </app-character-generator-select>\r\n  <button (click)=\"saveRace()\">Save race</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/models/character/about/character.class.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/models/character/about/character.class.model.ts ***!
  \*****************************************************************/
/*! exports provided: CharacterClassesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterClassesList", function() { return CharacterClassesList; });
var CharacterClassesList = [
    {
        value: 'barbarian',
        title: {
            en: 'Barbarian',
            ru: 'Варвар',
        },
        proficiency: {
            armor: ['light', 'medium', 'shields'],
            weapons: ['martial', 'simple'],
            tools: [],
            languages: [],
            skills: ['Choose two from Anim al Handling, Athletics, Intimidation, Nature, Perception, and Survival']
        },
        effects: {
            savingThrows: ['strength', 'constitution'],
            resistance: [],
            immunity: [],
        },
        equipment: [
            {
                value: 'greatAxe',
                count: 1,
            },
            {
                value: 'handAxe',
                count: 2,
            },
            {
                value: 'explorersPack',
                count: 1,
            },
            {
                value: 'javelin',
                count: 4,
            },
        ],
    }
];


/***/ }),

/***/ "./src/app/models/character/racesList.ts":
/*!***********************************************!*\
  !*** ./src/app/models/character/racesList.ts ***!
  \***********************************************/
/*! exports provided: racesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "racesList", function() { return racesList; });
var racesList = [
    {
        value: 'dwarf',
        title: {
            en: 'Dwarf',
            ru: 'Дварф',
        },
        generatorData: {
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
            image: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/b/b6/Dwarf-5e.png',
        },
        attributes: {
            constitution: 2,
            charisma: 0,
            wisdom: 0,
            intelligence: 0,
            dexterity: 0,
            strength: 0,
        },
        stats: {
            size: 'small',
            speed: 25,
            darkVision: 60,
            initiative: 0,
        },
        effects: {
            savingThrows: ['poison'],
            resistance: ['poison'],
            immunity: [],
        },
        proficiency: {
            weapons: ['battleAxe', 'handAxe', 'throwingHammer', 'warHammer'],
            tools: ['Tool Proficiency. You gain proficiency with the artisan’s ' +
                    'tools of your choice: smith’s tools, brew er’s supplies, or mason’s tools'],
            languages: ['dwarvish', 'common'],
            armor: [],
            skills: [],
        },
        abilities: [],
        subRaces: [
            {
                value: 'dwarfMountain',
                title: {
                    en: 'Mountain Dwarf',
                    ru: 'Горный Дварф'
                },
                attributes: {
                    strength: 2,
                    dexterity: 0,
                    intelligence: 0,
                    wisdom: 0,
                    charisma: 0,
                    constitution: 0,
                },
                proficiency: {
                    armor: ['light', 'medium'],
                    skills: [],
                    weapons: [],
                    tools: [],
                    languages: [],
                },
                abilities: [],
                stats: {
                    initiative: 0,
                    speed: 0,
                    size: 'small',
                    darkVision: 0,
                },
                effects: {
                    resistance: [],
                    savingThrows: [],
                    immunity: [],
                }
            },
            {
                value: 'dwarfHill',
                title: {
                    en: 'Hill Dwarf',
                    ru: 'Холмовой Дварф'
                },
                attributes: {
                    wisdom: 1,
                    constitution: 0,
                    charisma: 0,
                    intelligence: 0,
                    dexterity: 0,
                    strength: 0,
                },
                abilities: ['dwarvenToughness'],
                stats: {
                    darkVision: 0,
                    size: 'small',
                    speed: 0,
                    initiative: 0,
                },
                effects: {
                    resistance: [],
                    savingThrows: [],
                    immunity: [],
                },
                proficiency: {
                    languages: [],
                    tools: [],
                    weapons: [],
                    skills: [],
                    armor: [],
                }
            }
        ]
    },
    {
        value: 'gnome',
        title: {
            en: 'Gnome',
            ru: 'Гном',
        },
        generatorData: {
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
                    en: [
                        'Alston', 'Alvyn', 'Boddynock', 'Brocc', 'Burgell',
                        'Dimble', 'Eldon', 'Erky', 'Fonkin', 'Frug',
                        'Gerbo', 'Gimble', 'Glim', 'Jebeddo', 'Kellen',
                        'Namfoodle', 'Orryn', 'Roondar', 'Seebo', 'Sindri',
                        'Warryn', 'Wrenn', 'Zook'
                    ],
                    ru: [
                        'Алвин', 'Алстон', 'Боддинок', 'Брок', 'Бюргел',
                        'Варрин', 'Вренн', 'Гербо', 'Гимбл', 'Глим',
                        'Джебеддо', 'Димбл', 'Зук', 'Келлен', 'Намфудл',
                        'Оррин', 'Рундар', 'Сибо', 'Синдри', 'Фонкин',
                        'Фрюг', 'Элдон', 'Эрки'
                    ],
                },
                female: {
                    en: [
                        'Bimpnottin', 'Breena', 'Caramip', 'Carlin', 'Donella',
                        'Duvamil', 'Ella', 'Ellyjobell', 'Ellywick', 'Lilli',
                        'Loopmottin', 'Lorilla', 'Mardnab', 'Nissa', 'Nyx',
                        'Oda', 'Orla', 'Roywyn', 'Shamil', 'Tana',
                        'Waywocket', 'Zanna'
                    ],
                    ru: [
                        'Бимпноттин', 'Брина', 'Вейуокет', 'Донелла', 'Дувамил',
                        'Занна', 'Карамип', 'Карлин', 'Лилли', 'Лорилла',
                        'Лупмоттин', 'Маднаб', 'Никс', 'Нисса', 'Ода',
                        'Орла', 'Ройвин', 'Тана', 'Шамил', 'Эливик',
                        'Элиджобелл', 'Элла'
                    ],
                }
            },
            image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/334/420/618/636272671553055253.png'
        },
        stats: {
            size: 'small',
            speed: 25,
            darkVision: 60,
            initiative: 0,
        },
        effects: {
            immunity: [],
            savingThrows: [],
            resistance: [],
        },
        attributes: {
            intelligence: 2,
            strength: 0,
            dexterity: 0,
            wisdom: 0,
            charisma: 0,
            constitution: 0,
        },
        proficiency: {
            languages: ['common', 'gnomish'],
            armor: [],
            skills: [],
            weapons: [],
            tools: [],
        },
        abilities: ['gnomeCunning'],
        subRaces: [
            {
                value: 'gnomeForest',
                title: {
                    en: 'Forest gnome',
                    ru: 'Лесной гном',
                },
                attributes: {
                    dexterity: 1,
                    constitution: 0,
                    charisma: 0,
                    wisdom: 0,
                    strength: 0,
                    intelligence: 0,
                },
                abilities: ['naturalIllusionist', 'speakWithSmallBeasts'],
                proficiency: {
                    tools: [],
                    weapons: [],
                    skills: [],
                    armor: [],
                    languages: [],
                },
                stats: {
                    initiative: 0,
                    speed: 0,
                    size: 'small',
                    darkVision: 0,
                },
                effects: {
                    resistance: [],
                    savingThrows: [],
                    immunity: [],
                },
            },
            {
                value: 'gnomeRock',
                title: {
                    en: 'Rock gnome',
                    ru: 'Скальный гном',
                },
                attributes: {
                    constitution: 1,
                    intelligence: 0,
                    strength: 0,
                    wisdom: 0,
                    charisma: 0,
                    dexterity: 0,
                },
                proficiency: {
                    tools: ['tinsmith'],
                    languages: [],
                    armor: [],
                    skills: [],
                    weapons: [],
                },
                abilities: ['artificersLore', 'tinker'],
                stats: {
                    darkVision: 0,
                    size: 'small',
                    speed: 0,
                    initiative: 0,
                },
                effects: {
                    immunity: [],
                    savingThrows: [],
                    resistance: [],
                },
            }
        ]
    },
];


/***/ }),

/***/ "./src/app/modules/character-generator/character-generator-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/character-generator/character-generator-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CharacterGeneratorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterGeneratorRoutingModule", function() { return CharacterGeneratorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _character_generator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-generator.component */ "./src/app/modules/character-generator/character-generator.component.ts");




var routes = [{ path: '', component: _character_generator_component__WEBPACK_IMPORTED_MODULE_3__["CharacterGeneratorComponent"] }];
var CharacterGeneratorRoutingModule = /** @class */ (function () {
    function CharacterGeneratorRoutingModule() {
    }
    CharacterGeneratorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CharacterGeneratorRoutingModule);
    return CharacterGeneratorRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/character-generator/character-generator.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/character-generator/character-generator.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-character-generator {\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n}\n.main-character-generator__item {\n  display: flex;\n  justify-content: center;\n  padding: 0.2em;\n}\n.main-character-generator__item * {\n  width: 100%;\n}\n.main-character-generator__image {\n  width: 240px;\n  height: 240px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jaGFyYWN0ZXItZ2VuZXJhdG9yL0M6XFxVc2Vyc1xcRG15dHJvX0Zyb2xvdjFcXFdlYnN0b3JtUHJvamVjdHNcXGRtdC9zcmNcXGFwcFxcbW9kdWxlc1xcY2hhcmFjdGVyLWdlbmVyYXRvclxcY2hhcmFjdGVyLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jaGFyYWN0ZXItZ2VuZXJhdG9yL2NoYXJhY3Rlci1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNFSjtBRERJO0VBQ0UsV0FBQTtBQ0dOO0FEQUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hhcmFjdGVyLWdlbmVyYXRvci9jaGFyYWN0ZXItZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY2hhcmFjdGVyLWdlbmVyYXRvcntcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICZfX2l0ZW17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjJlbTtcclxuICAgICp7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgJl9faW1hZ2V7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluLWNoYXJhY3Rlci1nZW5lcmF0b3Ige1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubWFpbi1jaGFyYWN0ZXItZ2VuZXJhdG9yX19pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMmVtO1xufVxuLm1haW4tY2hhcmFjdGVyLWdlbmVyYXRvcl9faXRlbSAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbi1jaGFyYWN0ZXItZ2VuZXJhdG9yX19pbWFnZSB7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/character-generator/character-generator.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/character-generator/character-generator.component.ts ***!
  \******************************************************************************/
/*! exports provided: CharacterGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterGeneratorComponent", function() { return CharacterGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_characters_characters_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/characters/characters.actions */ "./src/app/store/characters/characters.actions.ts");
/* harmony import */ var _core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/firebase/firebase.service */ "./src/app/core/firebase/firebase.service.ts");





var CharacterGeneratorComponent = /** @class */ (function () {
    function CharacterGeneratorComponent(store, firebaseService) {
        var _this = this;
        this.store = store;
        this.firebaseService = firebaseService;
        this.formTabsOptions = 0;
        this.store.dispatch(new _store_characters_characters_actions__WEBPACK_IMPORTED_MODULE_3__["GetDefaultCharacter"]());
        this.store.subscribe(function (characterStore) {
            _this.generatingCharacter = characterStore.character;
        });
    }
    CharacterGeneratorComponent.prototype.ngOnInit = function () {
    };
    CharacterGeneratorComponent.prototype.setCharacter = function () {
        console.log(this.generatingCharacter);
        // this.store.dispatch(new CharacterActions.SetCharacter(this.generatingCharacter));
    };
    CharacterGeneratorComponent.prototype.saveCharacter = function () {
        this.firebaseService.setPlayerCharacter(this.generatingCharacter);
    };
    CharacterGeneratorComponent.prototype.switchTab = function (i) {
        this.formTabsOptions += i;
        if (this.formTabsOptions < 0) {
            this.formTabsOptions = 0;
        }
        if (this.formTabsOptions > 6) {
            this.formTabsOptions = 6;
        }
        // this.store.dispatch(new CharacterActions.SetCharacter(this.generatingCharacter));
    };
    CharacterGeneratorComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
    ]; };
    CharacterGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-character-generator',
            template: __webpack_require__(/*! raw-loader!./character-generator.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/character-generator/character-generator.component.html"),
            styles: [__webpack_require__(/*! ./character-generator.component.scss */ "./src/app/modules/character-generator/character-generator.component.scss")]
        })
    ], CharacterGeneratorComponent);
    return CharacterGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/modules/character-generator/character-generator.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/character-generator/character-generator.module.ts ***!
  \***************************************************************************/
/*! exports provided: CharacterGeneratorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterGeneratorModule", function() { return CharacterGeneratorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _character_generator_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./character-generator-routing.module */ "./src/app/modules/character-generator/character-generator-routing.module.ts");
/* harmony import */ var _character_generator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./character-generator.component */ "./src/app/modules/character-generator/character-generator.component.ts");
/* harmony import */ var _components_pick_race_pick_race_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pick-race/pick-race.component */ "./src/app/modules/character-generator/components/pick-race/pick-race.component.ts");
/* harmony import */ var _components_pick_class_pick_class_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pick-class/pick-class.component */ "./src/app/modules/character-generator/components/pick-class/pick-class.component.ts");
/* harmony import */ var _components_pick_background_pick_background_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pick-background/pick-background.component */ "./src/app/modules/character-generator/components/pick-background/pick-background.component.ts");
/* harmony import */ var _components_main_info_main_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main-info/main-info.component */ "./src/app/modules/character-generator/components/main-info/main-info.component.ts");
/* harmony import */ var _components_character_generator_select_character_generator_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/character-generator-select/character-generator-select.component */ "./src/app/modules/character-generator/components/character-generator-select/character-generator-select.component.ts");











var CharacterGeneratorModule = /** @class */ (function () {
    function CharacterGeneratorModule() {
    }
    CharacterGeneratorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _character_generator_component__WEBPACK_IMPORTED_MODULE_5__["CharacterGeneratorComponent"],
                _components_pick_race_pick_race_component__WEBPACK_IMPORTED_MODULE_6__["PickRaceComponent"],
                _components_pick_class_pick_class_component__WEBPACK_IMPORTED_MODULE_7__["PickClassComponent"],
                _components_pick_background_pick_background_component__WEBPACK_IMPORTED_MODULE_8__["PickBackgroundComponent"],
                _components_main_info_main_info_component__WEBPACK_IMPORTED_MODULE_9__["MainInfoComponent"],
                _components_character_generator_select_character_generator_select_component__WEBPACK_IMPORTED_MODULE_10__["CharacterGeneratorSelectComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _character_generator_routing_module__WEBPACK_IMPORTED_MODULE_4__["CharacterGeneratorRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [
                _character_generator_component__WEBPACK_IMPORTED_MODULE_5__["CharacterGeneratorComponent"]
            ]
        })
    ], CharacterGeneratorModule);
    return CharacterGeneratorModule;
}());



/***/ }),

/***/ "./src/app/modules/character-generator/components/character-generator-select/character-generator-select.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/character-generator/components/character-generator-select/character-generator-select.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hhcmFjdGVyLWdlbmVyYXRvci9jb21wb25lbnRzL2NoYXJhY3Rlci1nZW5lcmF0b3Itc2VsZWN0L2NoYXJhY3Rlci1nZW5lcmF0b3Itc2VsZWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/character-generator/components/character-generator-select/character-generator-select.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/character-generator/components/character-generator-select/character-generator-select.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: CharacterGeneratorSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterGeneratorSelectComponent", function() { return CharacterGeneratorSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CharacterGeneratorSelectComponent = /** @class */ (function () {
    function CharacterGeneratorSelectComponent() {
        this.outputValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CharacterGeneratorSelectComponent.prototype.ngOnInit = function () {
    };
    CharacterGeneratorSelectComponent.prototype.onChange = function () {
        this.outputValue.emit(this.switchingAttribute);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CharacterGeneratorSelectComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CharacterGeneratorSelectComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CharacterGeneratorSelectComponent.prototype, "switchingAttribute", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CharacterGeneratorSelectComponent.prototype, "outputValue", void 0);
    CharacterGeneratorSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-character-generator-select',
            template: __webpack_require__(/*! raw-loader!./character-generator-select.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/character-generator/components/character-generator-select/character-generator-select.component.html"),
            styles: [__webpack_require__(/*! ./character-generator-select.component.scss */ "./src/app/modules/character-generator/components/character-generator-select/character-generator-select.component.scss")]
        })
    ], CharacterGeneratorSelectComponent);
    return CharacterGeneratorSelectComponent;
}());



/***/ }),

/***/ "./src/app/modules/character-generator/components/main-info/main-info.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/character-generator/components/main-info/main-info.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hhcmFjdGVyLWdlbmVyYXRvci9jb21wb25lbnRzL21haW4taW5mby9tYWluLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/character-generator/components/main-info/main-info.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/character-generator/components/main-info/main-info.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MainInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainInfoComponent", function() { return MainInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var MainInfoComponent = /** @class */ (function () {
    function MainInfoComponent(store) {
        var _this = this;
        this.store = store;
        store.subscribe(function (character) {
            _this.generatingCharacter = character.character;
        });
    }
    MainInfoComponent.prototype.ngOnInit = function () {
    };
    MainInfoComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    MainInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-info',
            template: __webpack_require__(/*! raw-loader!./main-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/character-generator/components/main-info/main-info.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./main-info.component.scss */ "./src/app/modules/character-generator/components/main-info/main-info.component.scss")]
        })
    ], MainInfoComponent);
    return MainInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/character-generator/components/pick-background/pick-background.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/character-generator/components/pick-background/pick-background.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hhcmFjdGVyLWdlbmVyYXRvci9jb21wb25lbnRzL3BpY2stYmFja2dyb3VuZC9waWNrLWJhY2tncm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/character-generator/components/pick-background/pick-background.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/character-generator/components/pick-background/pick-background.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PickBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickBackgroundComponent", function() { return PickBackgroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PickBackgroundComponent = /** @class */ (function () {
    function PickBackgroundComponent() {
    }
    PickBackgroundComponent.prototype.ngOnInit = function () {
    };
    PickBackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pick-background',
            template: __webpack_require__(/*! raw-loader!./pick-background.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/character-generator/components/pick-background/pick-background.component.html"),
            styles: [__webpack_require__(/*! ./pick-background.component.scss */ "./src/app/modules/character-generator/components/pick-background/pick-background.component.scss")]
        })
    ], PickBackgroundComponent);
    return PickBackgroundComponent;
}());



/***/ }),

/***/ "./src/app/modules/character-generator/components/pick-class/pick-class.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/character-generator/components/pick-class/pick-class.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hhcmFjdGVyLWdlbmVyYXRvci9jb21wb25lbnRzL3BpY2stY2xhc3MvcGljay1jbGFzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/character-generator/components/pick-class/pick-class.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/character-generator/components/pick-class/pick-class.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PickClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickClassComponent", function() { return PickClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _models_character_about_character_class_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/character/about/character.class.model */ "./src/app/models/character/about/character.class.model.ts");




var PickClassComponent = /** @class */ (function () {
    function PickClassComponent(store) {
        var _this = this;
        this.store = store;
        this.classList = _models_character_about_character_class_model__WEBPACK_IMPORTED_MODULE_3__["CharacterClassesList"];
        store.subscribe(function (character) {
            _this.generatingCharacter = character.character;
        });
    }
    PickClassComponent.prototype.ngOnInit = function () {
    };
    PickClassComponent.prototype.onClassInParentComponentSet = function (value) {
        this.generatingCharacter.about.info.classes[0].name = String(value);
        this.generatingCharacter.about.info.classes[0].level = 1;
    };
    PickClassComponent.prototype.saveClass = function () {
        var _this = this;
        this.classList.map(function (charClass) {
            if (_this.generatingCharacter.about.info.classes[0].name === charClass.value) {
                console.log('class saved');
                // Save function
                _this.setProficiency(_this.generatingCharacter, charClass.proficiency);
                var effectsAttributes = ['savingThrows', 'resistance', 'immunity'];
                effectsAttributes.forEach(function (attribute) {
                    charClass.effects[attribute].forEach(function (value) {
                        _this.generatingCharacter.about.effects[attribute].push(value);
                    });
                });
                charClass.equipment.forEach(function (item) {
                    _this.generatingCharacter.equipment.push(item);
                });
            }
        });
    };
    PickClassComponent.prototype.setProficiency = function (character, proficiency) {
        var proficiencyAttributes = [];
        // tslint:disable-next-line:forin
        for (var proficiencyKey in proficiency) {
            proficiencyAttributes.push(proficiencyKey);
        }
        proficiencyAttributes.forEach(function (attribute) {
            proficiency[attribute].forEach((function (value) {
                character.about.proficiency[attribute].push(value);
            }));
        });
    };
    PickClassComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    PickClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pick-class',
            template: __webpack_require__(/*! raw-loader!./pick-class.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/character-generator/components/pick-class/pick-class.component.html"),
            styles: [__webpack_require__(/*! ./pick-class.component.scss */ "./src/app/modules/character-generator/components/pick-class/pick-class.component.scss")]
        })
    ], PickClassComponent);
    return PickClassComponent;
}());



/***/ }),

/***/ "./src/app/modules/character-generator/components/pick-race/pick-race.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/character-generator/components/pick-race/pick-race.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hhcmFjdGVyLWdlbmVyYXRvci9jb21wb25lbnRzL3BpY2stcmFjZS9waWNrLXJhY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/character-generator/components/pick-race/pick-race.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/character-generator/components/pick-race/pick-race.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PickRaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickRaceComponent", function() { return PickRaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _models_character_racesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/character/racesList */ "./src/app/models/character/racesList.ts");




var PickRaceComponent = /** @class */ (function () {
    function PickRaceComponent(store) {
        var _this = this;
        this.store = store;
        this.racesList = _models_character_racesList__WEBPACK_IMPORTED_MODULE_3__["racesList"];
        store.subscribe(function (character) {
            _this.generatingCharacter = character.character;
        });
    }
    PickRaceComponent.prototype.ngOnInit = function () {
    };
    PickRaceComponent.prototype.onRaceInParentComponentSet = function (value) {
        this.generatingCharacter.about.info.race = String(value);
    };
    PickRaceComponent.prototype.onSubRaceInParentComponentSet = function (value) {
        this.generatingCharacter.about.info.subRace = String(value);
    };
    PickRaceComponent.prototype.getSubRaceList = function (value) {
        var subRaceList;
        this.racesList.map(function (race) {
            if (race.value === value) {
                subRaceList = race.subRaces;
                return race.subRaces;
            }
        });
        return subRaceList;
    };
    PickRaceComponent.prototype.saveRace = function () {
        var _this = this;
        _models_character_racesList__WEBPACK_IMPORTED_MODULE_3__["racesList"].map(function (race) {
            if (race.value === _this.generatingCharacter.about.info.race) {
                console.log('Character saved');
                _this.generatingCharacter.about.description.imageUrl = race.generatorData.image;
                console.log('this.generatingCharacter.about.description.imageUrl', _this.generatingCharacter.about.description.imageUrl, 'race.generatorData.image', race.generatorData.image);
                _this.setRace(_this.generatingCharacter, race);
                race.subRaces.map(function (subRace) {
                    if (subRace.value === _this.generatingCharacter.about.info.subRace) {
                        _this.setRace(_this.generatingCharacter, subRace);
                    }
                });
            }
        });
    };
    PickRaceComponent.prototype.setRace = function (character, race) {
        this.setAttributes(character, race); // Set attributes
        this.setStats(character, race); // Set stats
        this.setProficiency(character, race); // Set proficiency
        race.abilities.forEach(function (ability) {
            character.abilities.push(ability);
        });
    };
    PickRaceComponent.prototype.setAttributes = function (character, race) {
        for (var key in character.about.attributes) {
            character.about.attributes[key] += race.attributes[key];
        }
        character.about.attributes.strength += race.attributes.strength;
        character.about.attributes.dexterity += race.attributes.dexterity;
        character.about.attributes.constitution += race.attributes.constitution;
        character.about.attributes.intelligence += race.attributes.intelligence;
        character.about.attributes.wisdom += race.attributes.wisdom;
        character.about.attributes.charisma += race.attributes.charisma;
    };
    PickRaceComponent.prototype.setStats = function (character, race) {
        character.about.stats.size = race.stats.size;
        character.about.stats.speed += race.stats.speed;
        character.about.stats.darkVision += race.stats.darkVision;
        character.about.stats.initiative += race.stats.initiative;
        var effectsAttributes = ['savingThrows', 'resistance', 'immunity'];
        effectsAttributes.forEach(function (attribute) {
            race.effects[attribute].forEach(function (value) {
                character.about.effects[attribute].push(value);
            });
        });
    };
    PickRaceComponent.prototype.setProficiency = function (character, race) {
        var proficiencyAttributes = [];
        // tslint:disable-next-line:forin
        for (var proficiencyKey in race.proficiency) {
            proficiencyAttributes.push(proficiencyKey);
        }
        proficiencyAttributes.forEach(function (attribute) {
            race.proficiency[attribute].forEach((function (value) {
                character.about.proficiency[attribute].push(value);
            }));
        });
    };
    PickRaceComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    PickRaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pick-race',
            template: __webpack_require__(/*! raw-loader!./pick-race.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/character-generator/components/pick-race/pick-race.component.html"),
            styles: [__webpack_require__(/*! ./pick-race.component.scss */ "./src/app/modules/character-generator/components/pick-race/pick-race.component.scss")]
        })
    ], PickRaceComponent);
    return PickRaceComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-character-generator-character-generator-module.js.map