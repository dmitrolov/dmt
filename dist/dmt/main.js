(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n  <app-header></app-header>\r\n  <div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-navigation-container\">\r\n  <a class=\"main-navigation-container__link\" routerLink=\"/player-character-generator\" routerLinkActive=\"active\">Char Gen</a>\r\n  <a class=\"main-navigation-container__link\" routerLink=\"/player-character/Оксана_Гремми\" routerLinkActive=\"active\">Гремми</a>\r\n  <a class=\"main-navigation-container__link\" routerLink=\"/player-character/Алексей_Рован\" routerLinkActive=\"active\">Рован</a>\r\n  <a class=\"main-navigation-container__link\" routerLink=\"/player-character/Диана_Скарлет\" routerLinkActive=\"active\">Скарлет</a>\r\n  <a class=\"main-navigation-container__link\" routerLink=\"/player-character/a_a\" routerLinkActive=\"active\">test</a>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/image/image.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/image/image.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div className=\"{{options.class}}\">\r\n  <img\r\n    className=\"{{options.class + '__item'}}\"\r\n    src=\"{{options.src}}\"\r\n    alt=\"{{options.alt}}\"\r\n  >\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/input/input.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/input/input.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{options.className}}\">\r\n  <label for=\"{{options.id}}\">{{options.label}}</label>\r\n  <input\r\n    id=\"{{options.id}}\"\r\n    type=\"{{options.type || 'text'}}\"\r\n    placeholder=\"{{options.placeholder || ''}}\"\r\n  >\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/select/select.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/select/select.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{class}}\">\r\n  <label for=\"{{id}}\">{{labelValue}}</label>\r\n  <select id=\"{{id}}\">\r\n    <option *ngFor=\"let option of options\" value=\"{{option.value}}\">{{option.text}}</option>\r\n  </select>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-generator/components/character-generator-select/character-generator-select.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-generator/components/character-generator-select/character-generator-select.component.html ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3>Выберите рассу персонажа</h3>\r\n  <select id=\"race\" [(ngModel)]=\"switchingAttribute\" (ngModelChange)=\"onChange($event)\">\r\n    <option *ngFor=\"let item of options\" value=\"{{item.value}}\">{{item.title.ru}}</option>\r\n  </select>\r\n  <div [ngSwitch]=\"switchingAttribute\">\r\n    <div *ngFor=\"let item of options\">\r\n      <div *ngSwitchCase=\"item.value\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-generator/components/main-info/main-info.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-generator/components/main-info/main-info.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3>Создание персонажа</h3>\r\n  <label for=\"playerName\">Введите ваше имя</label>\r\n  <br>\r\n  <input type=\"text\" id=\"playerName\" [(ngModel)]=\"generatingCharacter.about.info.playerName\">\r\n  <br>\r\n  <label for=\"characterName\">Введите имя персонажа</label>\r\n  <br>\r\n  <input type=\"text\" id=\"characterName\" [(ngModel)]=\"generatingCharacter.about.info.characterName\">\r\n  <br>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-generator/components/pick-background/pick-background.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-generator/components/pick-background/pick-background.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>pick-background works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-generator/components/pick-class/pick-class.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-generator/components/pick-class/pick-class.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3>Выберите класс персонажа</h3>\r\n  <select id=\"characterClass\" [(ngModel)]=\"generatingCharacter.about.info.classes[0].name\">\r\n    <option *ngFor=\"let charClass of classList\" value=\"{{charClass.value}}\">{{charClass.title.ru}}</option>\r\n  </select>\r\n  <div [ngSwitch]=\"generatingCharacter.about.info.classes[0].name\">\r\n    <div *ngFor=\"let charClass of classList\">\r\n      <div *ngSwitchCase=\"charClass.value\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button (click)=\"saveClass()\">Save class</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-generator/components/pick-race/pick-race.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-generator/components/pick-race/pick-race.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3>Выберите рассу персонажа</h3>\r\n  <select id=\"race\" [(ngModel)]=\"generatingCharacter.about.info.race\">\r\n    <option *ngFor=\"let race of racesList\" value=\"{{race.value}}\">{{race.title.ru}}</option>\r\n  </select>\r\n  <div [ngSwitch]=\"generatingCharacter.about.info.race\">\r\n    <div *ngFor=\"let race of racesList\">\r\n      <div *ngSwitchCase=\"race.value\">\r\n        <h3>Выберите подрассу персонажа</h3>\r\n        <select id=\"subRace\" [(ngModel)]=\"generatingCharacter.about.info.subRace\">\r\n          <option *ngFor=\"let subRace of race.subRaces\" value=\"{{subRace.value}}\">{{subRace.title.ru}}</option>\r\n        </select>\r\n        <div [ngSwitch]=\"generatingCharacter.about.info.subRace\">\r\n          <div *ngFor=\"let subRace of race.subRaces\">\r\n            <div *ngSwitchCase=\"subRace.value\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!--  <app-character-generator-select-->\r\n<!--    (raceInParentComponentSet)=\"onRaceInParentComponentSet($event)\"-->\r\n<!--    [switchingAttribute]=\"generatingCharacter.about.info.race\"-->\r\n<!--    [options]=\"racesList\"-->\r\n<!--  >-->\r\n<!--    <app-character-generator-select-->\r\n<!--      (raceInParentComponentSet)=\"onSubRaceInParentComponentSet($event)\"-->\r\n<!--      [switchingAttribute]=\"generatingCharacter.about.info.subRace\"-->\r\n<!--      [options]=\"getSubRaceList(generatingCharacter.about.info.race)\"-->\r\n<!--    ></app-character-generator-select>-->\r\n<!--  </app-character-generator-select>-->\r\n  <button (click)=\"saveRace()\">Save race</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-generator/player-character-generator.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-generator/player-character-generator.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"switchTab(-1)\"><</button>\r\n<button (click)=\"switchTab(1)\">></button>\r\n<div [ngSwitch]=\"formTabsOptions\">\r\n  <app-main-info    *ngSwitchCase=\"0\"></app-main-info>\r\n  <app-pick-race    *ngSwitchCase=\"1\"></app-pick-race>\r\n  <app-pick-class   *ngSwitchCase=\"2\"></app-pick-class>\r\n\r\n\r\n\r\n<!--  <ng-template ngSwitchCase=\"1\">-->\r\n<!--    <h3>Давайте выберем рассу персонажа</h3>-->\r\n<!--    <div class=\"main-character-generator__item\">-->\r\n<!--      <label for=\"race\">Расса</label>-->\r\n<!--      <select [(ngModel)]=\"playerCharacter.race\" name=\"\" id=\"race\">-->\r\n<!--        <option value=\"gnome\">Гном</option>-->\r\n<!--        <option value=\"human\">Человек</option>-->\r\n<!--      </select>-->\r\n<!--    </div>-->\r\n<!--    <div class=\"main-character-generator__item\">-->\r\n<!--      <label for=\"sex\">Пол</label>-->\r\n<!--      <select name=\"\" id=\"sex\" [(ngModel)]=\"playerCharacter.sex\">-->\r\n<!--        <option value=\"male\">Мужской ♂</option>-->\r\n<!--        <option value=\"female\">Женский ♀</option>-->\r\n<!--      </select>-->\r\n<!--    </div>-->\r\n<!--    <div class=\"main-character-generator__item\">-->\r\n<!--      <label for=\"humanAge\">Возраст (Чел.)</label>-->\r\n<!--      <input type=\"text\" id=\"humanAge\" [(ngModel)]=\"playerCharacter.humanAge\" placeholder=\"\">-->\r\n<!--    </div>-->\r\n<!--    <div class=\"main-character-generator__item\">-->\r\n<!--      <label for=\"height\">Рост</label>-->\r\n<!--      <select [(ngModel)]=\"playerCharacter.height\" name=\"\" id=\"height\">-->\r\n<!--        <option value=\"0.8\">Очень низкий</option>-->\r\n<!--        <option value=\"0.9\">Низкий</option>-->\r\n<!--        <option value=\"1\">Средний</option>-->\r\n<!--        <option value=\"1.1\">Высокий</option>-->\r\n<!--        <option value=\"1.2\">Очень высокий</option>-->\r\n<!--      </select>-->\r\n<!--    </div>-->\r\n<!--    <div class=\"main-character-generator__item\">-->\r\n<!--      <label for=\"weight\">Вес</label>-->\r\n<!--      <select [(ngModel)]=\"playerCharacter.weight\" name=\"\" id=\"weight\">-->\r\n<!--        <option value=\"0.8\">Очень низкий</option>-->\r\n<!--        <option value=\"0.9\">Низкий</option>-->\r\n<!--        <option value=\"1\">Средний</option>-->\r\n<!--        <option value=\"1.1\">Высокий</option>-->\r\n<!--        <option value=\"1.2\">Очень высокий</option>-->\r\n<!--      </select>-->\r\n<!--    </div>-->\r\n<!--  </ng-template>-->\r\n<!--  <ng-template ngSwitchCase=\"2\">-->\r\n<!--    <h3>Выберите клас персонажа</h3>-->\r\n<!--  </ng-template>-->\r\n<!--  <ng-template ngSwitchCase=\"3\">-->\r\n<!--    <h3>Предыстория</h3>-->\r\n<!--  </ng-template>-->\r\n<!--  <ng-template ngSwitchCase=\"4\">-->\r\n<!--    <h3>Теперь ролим атрибуты</h3>-->\r\n<!--  </ng-template>-->\r\n<!--  <ng-template ngSwitchCase=\"5\">-->\r\n<!--    <h3>Стартовая экипировка</h3>-->\r\n<!--  </ng-template>-->\r\n<!--  <ng-template ngSwitchCase=\"6\">-->\r\n<!--    <h3>Последние штрихи</h3>-->\r\n<!--    <div class=\"main-character-generator__item\">-->\r\n<!--      <label for=\"characterName\">Дайте имя своему персонажу</label>-->\r\n<!--      <input-->\r\n<!--        type=\"text\"-->\r\n<!--        id=\"characterName\"-->\r\n<!--        [(ngModel)]=\"playerCharacter.characterName\"-->\r\n<!--        placeholder=\"\"-->\r\n<!--      >-->\r\n<!--    </div>-->\r\n<!--    <div class=\"main-character-generator__item\">-->\r\n<!--      <label for=\"imageUrl\">Как он выглядит?</label>-->\r\n<!--      <input-->\r\n<!--        type=\"text\"-->\r\n<!--        id=\"imageUrl\"-->\r\n<!--        [(ngModel)]=\"playerCharacter.imageUrl\"-->\r\n<!--        placeholder=\"Ссылка на портрет\"-->\r\n<!--      >-->\r\n<!--    </div>-->\r\n<!--    <div [className]=\"'main-character-generator__item'\">-->\r\n<!--      <img-->\r\n<!--        [className]=\"'main-character-generator__image'\"-->\r\n<!--        src=\"{{playerCharacter.imageUrl || 'assets/img/default-user-icon-4.jpg'}}\"-->\r\n<!--        alt=\"Player Character Image\"-->\r\n<!--      >-->\r\n<!--    </div>-->\r\n<!--  </ng-template>-->\r\n<!--</div>-->\r\n\r\n<div class=\"main-character-generator\">\r\n  <button (click)=\"setCharacter()\">Предпросмотр персонажа</button>\r\n  <br>\r\n  <button (click)=\"saveCharacter()\">Save</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/diary/diary.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-page/components/diary/diary.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>diary works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/inventory/inventory.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-page/components/inventory/inventory.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <table border=\"1\" width=\"100%\">\r\n    <thead>\r\n    <tr>\r\n      <td>Name</td>\r\n      <td>Count</td>\r\n      <td>Weight</td>\r\n      <td>Cost</td>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of equipment\">\r\n      <td>{{item.item.title.ru}}</td>\r\n      <td>{{item.count}}</td>\r\n      <td>{{item.item.weight * item.count}}</td>\r\n      <td>{{item.item.cost * item.count}}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n  <button (click)=\"addItems()\">Add items</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/menu/menu.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-page/components/menu/menu.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\r\n  <div\r\n    class=\"menu__item\"\r\n    *ngFor=\"let option of menuOptions.menuItems\"\r\n  >\r\n    <img\r\n      class=\"menu__image\"\r\n      [src]=\"option.src\"\r\n      [alt]=\"option.alt\"\r\n      (click)=\"menuOptions.currentTab = option.tab\"\r\n    >\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/skills/skills.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-page/components/skills/skills.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>skills works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/stats/components/attributes/attributes.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-page/components/stats/components/attributes/attributes.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"attribute-container\">\r\n    <h3>Характеристики</h3>\r\n\r\n    <div class=\"attributeContainer\" *ngFor=\"let option of attributesOptions\">\r\n      <img [src]=\"option.src\" alt=\"\">\r\n      <div class=\"attributeInfo\">\r\n        <span class=\"title\">{{option.text}}</span>\r\n        <span class=\"amount\">{{currentUser.about.attributes[option.attribute]}}</span>\r\n        <span class=\"modifier\">{{getAttributeModifier(currentUser.about.attributes[option.attribute])}}</span>\r\n      </div>\r\n      <ul class=\"skills\">\r\n        <li *ngFor=\"let skill of option.skills\" class=\"\">{{skill.text}}</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/stats/components/description/description.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-page/components/stats/components/description/description.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>description works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/stats/components/general-info/general-info.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-page/components/stats/components/general-info/general-info.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <h2>{{this.currentUser.about.info.playerName}} ({{this.currentUser.about.info.characterName}})</h2>\r\n  <img src=\"{{this.currentUser.about.description.imageUrl}}\" alt=\"\">\r\n  <table>\r\n    <tr>\r\n      <td>{{this.currentUser.about.info.race}}</td>\r\n      <td>{{this.currentUser.about.info.classes[0].name}}</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/stats/components/proficiency/proficiency.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-page/components/stats/components/proficiency/proficiency.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>proficiency works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/stats/stats.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-page/components/stats/stats.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"content\" [ngSwitch]=\"menuOptions.currentTab\">\r\n    <app-general-info *ngSwitchCase=\"menuOptions.menuItems[0].tab\"></app-general-info>\r\n    <app-attributes   *ngSwitchCase=\"menuOptions.menuItems[1].tab\"></app-attributes>\r\n    <app-proficiency  *ngSwitchCase=\"menuOptions.menuItems[2].tab\"></app-proficiency>\r\n    <app-description  *ngSwitchCase=\"menuOptions.menuItems[3].tab\"></app-description>\r\n  </div>\r\n  <app-menu [menuOptions]=\"menuOptions\"></app-menu>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/player-character-page.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/player-character-page/player-character-page.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div [ngSwitch]=\"menuOptions.currentTab\" class=\"content\">\r\n    <app-stats      *ngSwitchCase=\"menuOptions.menuItems[0].tab\"></app-stats>\r\n    <app-inventory  *ngSwitchCase=\"menuOptions.menuItems[1].tab\"></app-inventory>\r\n    <app-skills     *ngSwitchCase=\"menuOptions.menuItems[2].tab\"></app-skills>\r\n    <app-diary      *ngSwitchCase=\"menuOptions.menuItems[3].tab\"></app-diary>\r\n  </div>\r\n  <app-menu [menuOptions]=\"menuOptions\"></app-menu>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n}\r\n.content{\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5jb250ZW50e1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dmt';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_characters_characters_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/characters/characters.reducer */ "./src/app/store/characters/characters.reducer.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_player_character_generator_player_character_generator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/player-character-generator/player-character-generator.component */ "./src/app/pages/player-character-generator/player-character-generator.component.ts");
/* harmony import */ var _pages_player_character_page_player_character_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/player-character-page/player-character-page.component */ "./src/app/pages/player-character-page/player-character-page.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_image_image_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/image/image.component */ "./src/app/components/image/image.component.ts");
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/input/input.component */ "./src/app/components/input/input.component.ts");
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/select/select.component */ "./src/app/components/select/select.component.ts");
/* harmony import */ var _pages_player_character_page_components_stats_stats_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/player-character-page/components/stats/stats.component */ "./src/app/pages/player-character-page/components/stats/stats.component.ts");
/* harmony import */ var _pages_player_character_page_components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/player-character-page/components/inventory/inventory.component */ "./src/app/pages/player-character-page/components/inventory/inventory.component.ts");
/* harmony import */ var _pages_player_character_page_components_diary_diary_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/player-character-page/components/diary/diary.component */ "./src/app/pages/player-character-page/components/diary/diary.component.ts");
/* harmony import */ var _pages_player_character_page_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/player-character-page/components/skills/skills.component */ "./src/app/pages/player-character-page/components/skills/skills.component.ts");
/* harmony import */ var _pages_player_character_page_components_stats_components_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/player-character-page/components/stats/components/general-info/general-info.component */ "./src/app/pages/player-character-page/components/stats/components/general-info/general-info.component.ts");
/* harmony import */ var _pages_player_character_page_components_stats_components_attributes_attributes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/player-character-page/components/stats/components/attributes/attributes.component */ "./src/app/pages/player-character-page/components/stats/components/attributes/attributes.component.ts");
/* harmony import */ var _pages_player_character_page_components_stats_components_proficiency_proficiency_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/player-character-page/components/stats/components/proficiency/proficiency.component */ "./src/app/pages/player-character-page/components/stats/components/proficiency/proficiency.component.ts");
/* harmony import */ var _pages_player_character_page_components_stats_components_description_description_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/player-character-page/components/stats/components/description/description.component */ "./src/app/pages/player-character-page/components/stats/components/description/description.component.ts");
/* harmony import */ var _pages_player_character_page_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/player-character-page/components/menu/menu.component */ "./src/app/pages/player-character-page/components/menu/menu.component.ts");
/* harmony import */ var _pages_player_character_generator_components_pick_race_pick_race_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/player-character-generator/components/pick-race/pick-race.component */ "./src/app/pages/player-character-generator/components/pick-race/pick-race.component.ts");
/* harmony import */ var _pages_player_character_generator_components_pick_class_pick_class_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/player-character-generator/components/pick-class/pick-class.component */ "./src/app/pages/player-character-generator/components/pick-class/pick-class.component.ts");
/* harmony import */ var _pages_player_character_generator_components_pick_background_pick_background_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/player-character-generator/components/pick-background/pick-background.component */ "./src/app/pages/player-character-generator/components/pick-background/pick-background.component.ts");
/* harmony import */ var _pages_player_character_generator_components_main_info_main_info_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/player-character-generator/components/main-info/main-info.component */ "./src/app/pages/player-character-generator/components/main-info/main-info.component.ts");
/* harmony import */ var _pages_player_character_generator_components_character_generator_select_character_generator_select_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/player-character-generator/components/character-generator-select/character-generator-select.component */ "./src/app/pages/player-character-generator/components/character-generator-select/character-generator-select.component.ts");





























// tslint:disable-next-line:max-line-length

var appRoutes = [
    {
        path: 'player-character-generator',
        component: _pages_player_character_generator_player_character_generator_component__WEBPACK_IMPORTED_MODULE_10__["PlayerCharacterGeneratorComponent"],
    },
    {
        path: 'player-character/:id',
        component: _pages_player_character_page_player_character_page_component__WEBPACK_IMPORTED_MODULE_11__["PlayerCharacterPageComponent"],
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _pages_player_character_generator_player_character_generator_component__WEBPACK_IMPORTED_MODULE_10__["PlayerCharacterGeneratorComponent"],
                _pages_player_character_page_player_character_page_component__WEBPACK_IMPORTED_MODULE_11__["PlayerCharacterPageComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _components_image_image_component__WEBPACK_IMPORTED_MODULE_13__["ImageComponent"],
                _components_input_input_component__WEBPACK_IMPORTED_MODULE_14__["InputComponent"],
                _components_select_select_component__WEBPACK_IMPORTED_MODULE_15__["SelectComponent"],
                _pages_player_character_page_components_stats_stats_component__WEBPACK_IMPORTED_MODULE_16__["StatsComponent"],
                _pages_player_character_page_components_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_17__["InventoryComponent"],
                _pages_player_character_page_components_diary_diary_component__WEBPACK_IMPORTED_MODULE_18__["DiaryComponent"],
                _pages_player_character_page_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_19__["SkillsComponent"],
                _pages_player_character_page_components_stats_components_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_20__["GeneralInfoComponent"],
                _pages_player_character_page_components_stats_components_attributes_attributes_component__WEBPACK_IMPORTED_MODULE_21__["AttributesComponent"],
                _pages_player_character_page_components_stats_components_proficiency_proficiency_component__WEBPACK_IMPORTED_MODULE_22__["ProficiencyComponent"],
                _pages_player_character_page_components_stats_components_description_description_component__WEBPACK_IMPORTED_MODULE_23__["DescriptionComponent"],
                _pages_player_character_page_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_24__["MenuComponent"],
                _pages_player_character_generator_components_pick_race_pick_race_component__WEBPACK_IMPORTED_MODULE_25__["PickRaceComponent"],
                _pages_player_character_generator_components_pick_class_pick_class_component__WEBPACK_IMPORTED_MODULE_26__["PickClassComponent"],
                _pages_player_character_generator_components_pick_background_pick_background_component__WEBPACK_IMPORTED_MODULE_27__["PickBackgroundComponent"],
                _pages_player_character_generator_components_main_info_main_info_component__WEBPACK_IMPORTED_MODULE_28__["MainInfoComponent"],
                _pages_player_character_generator_components_character_generator_select_character_generator_select_component__WEBPACK_IMPORTED_MODULE_29__["CharacterGeneratorSelectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({
                    character: _store_characters_characters_reducer__WEBPACK_IMPORTED_MODULE_7__["characterReducer"]
                }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({
                    maxAge: 10
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-navigation-container {\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  background-color: black;\n  padding: 0.5em;\n}\n.main-navigation-container__link, .main-navigation-container__link:visited {\n  color: white;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxEbXl0cm9fRnJvbG92MVxcV2Vic3Rvcm1Qcm9qZWN0c1xcZG10L3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUVBLGNBQUE7QUNBRjtBREVFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1uYXZpZ2F0aW9uLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblxyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG5cclxuICAmX19saW5rLCAmX19saW5rOnZpc2l0ZWR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluLW5hdmlnYXRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cbi5tYWluLW5hdmlnYXRpb24tY29udGFpbmVyX19saW5rLCAubWFpbi1uYXZpZ2F0aW9uLWNvbnRhaW5lcl9fbGluazp2aXNpdGVkIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/image/image.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/image/image.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/image/image.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/image/image.component.ts ***!
  \*****************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
    }
    ImageComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageComponent.prototype, "options", void 0);
    ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! raw-loader!./image.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/image/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.scss */ "./src/app/components/image/image.component.scss")]
        })
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/components/input/input.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/input/input.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.2em;\n}\ndiv * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC9DOlxcVXNlcnNcXERteXRyb19Gcm9sb3YxXFxXZWJzdG9ybVByb2plY3RzXFxkbXQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGlucHV0XFxpbnB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwLjJlbTtcclxuICAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCJkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuMmVtO1xufVxuZGl2ICoge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/input/input.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/input/input.component.ts ***!
  \*****************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputComponent = /** @class */ (function () {
    function InputComponent() {
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], InputComponent.prototype, "options", void 0);
    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.scss */ "./src/app/components/input/input.component.scss")]
        })
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/components/select/select.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/select/select.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.2em;\n}\ndiv * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3QvQzpcXFVzZXJzXFxEbXl0cm9fRnJvbG92MVxcV2Vic3Rvcm1Qcm9qZWN0c1xcZG10L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZWxlY3RcXHNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMC4yZW07XHJcbiAgKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjJlbTtcbn1cbmRpdiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/select/select.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/select/select.component.ts ***!
  \*******************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
    }
    SelectComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SelectComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SelectComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SelectComponent.prototype, "labelValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SelectComponent.prototype, "options", void 0);
    SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(/*! raw-loader!./select.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/select/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.scss */ "./src/app/components/select/select.component.scss")]
        })
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/core/firebase/firebase.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/firebase/firebase.service.ts ***!
  \***************************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


// Firebase App (the core Firebase SDK) is always required and must be listed first

// // Add the Firebase products that you want to use
// import 'firebase/auth';


var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
        this.firebaseConfig = {
            apiKey: 'AIzaSyCBJLGUwm3Gudef3OmMpTr4_kuAKojdHKI',
            authDomain: 'dnd-master-tools.firebaseapp.com',
            databaseURL: 'https://dnd-master-tools.firebaseio.com',
            projectId: 'dnd-master-tools',
            storageBucket: '',
            messagingSenderId: '338033505662',
            appId: '1:338033505662:web:ded866bbf17722c7'
        };
        this.collections = {
            playersCharactersUrl: 'playerCharacters',
            items: 'items',
        };
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["initializeApp"](this.firebaseConfig);
        this.db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
    }
    FirebaseService.prototype.setPlayerCharacter = function (character) {
        return this.db
            .collection(this.collections.playersCharactersUrl)
            .doc(character.about.info.playerName + "_" + character.about.info.characterName)
            .set({
            stats: character
        })
            .then(function () {
            console.log('Document successfully written!');
        })
            .catch(function (error) {
            console.error('Error writing document: ', error);
        });
    };
    //
    FirebaseService.prototype.getAllPlayersCharacters = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (subscriber) {
            _this.db
                .collection(_this.collections.playersCharactersUrl)
                // .where('gettable', '==', true)
                .get()
                .then(function (characters) {
                characters.forEach(function (character) {
                    subscriber.next({ id: character.id, character: character.data() });
                });
            })
                .catch(function (error) {
                console.log('Error getting documents: ', error);
            });
        });
    };
    //
    // getPlayerCharacterById(id: string) {
    //   return this.db
    //     .collection(this.collections.playersCharactersUrl)
    //     .doc(id)
    //     // .where('gettable', '==', true)
    //     .get()
    //     .then((character) => {
    //       if (character.exists) {
    //         console.log('Document data:', character.data());
    //         return character.data();
    //       } else {
    //         // doc.data() will be undefined in this case
    //         console.log('No such document!');
    //       }
    //     })
    //     .catch((error) => {
    //       console.log('Error getting documents: ', error);
    //     });
    // }
    //
    // subscribeOnDBChanges() {
    //   return this.db
    //     .collection(this.collections.playersCharactersUrl)
    //     .onSnapshot((characters) => {
    //       characters.forEach((character) => {
    //         console.log(character.id, ' => ', character.data(), new Date().getTime());
    //       });
    //     });
    // }
    //
    // subscribeOnCharacterChanges(id: string) {
    //   return this.db
    //     .collection(this.collections.playersCharactersUrl)
    //     .doc(id);
    // }
    //
    // subscribeOnCharacterChangesTest(id: string) {
    //   return this.db
    //     .collection(this.collections.playersCharactersUrl)
    //     .doc(id)
    //     .onSnapshot((character) => {
    //       return character.data().stats;
    //     });
    // }
    FirebaseService.prototype.onCharacterChanges = function (id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (subscriber) {
            _this.db
                .collection(_this.collections.playersCharactersUrl)
                .doc(id)
                .onSnapshot(function (character) {
                subscriber.next(character.data().stats);
            });
        });
    };
    FirebaseService.prototype.setItem = function (item) {
        this.db
            .collection(this.collections.items)
            .doc(item.value)
            .set(item)
            .then(function () {
            console.log('Item successfully written!');
        })
            .catch(function (error) {
            console.error('Error writing item: ', error);
        });
    };
    FirebaseService.prototype.getItem = function (id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (subscriber) {
            _this.db
                .collection('items')
                .doc(id)
                .get()
                .then(function (item) {
                subscriber.next(item.data());
            });
        });
    };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FirebaseService);
    return FirebaseService;
}());



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

/***/ "./src/app/models/equipment/equipment.data.ts":
/*!****************************************************!*\
  !*** ./src/app/models/equipment/equipment.data.ts ***!
  \****************************************************/
/*! exports provided: EquipmentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentData", function() { return EquipmentData; });
var EquipmentData = [
    {
        value: 'greatAxe',
        title: {
            ru: 'Секира',
            en: 'Great Axe',
        },
        cost: 3000,
        weight: 7,
        rarity: 0,
        type: 'weapon',
        description: {
            ru: '1к12 рубящий Двуручное, тяжёлое',
            en: ''
        }
    },
    {
        value: 'handAxe',
        title: {
            ru: 'Ручной топор',
            en: 'Hand Axe',
        },
        cost: 500,
        weight: 2,
        rarity: 0,
        type: 'weapon',
        description: {
            en: '',
            ru: '1к6 рубящий, Лёгкое, метательное (дис. 20/60)'
        }
    },
    {
        value: 'explorersPack',
        title: {
            ru: 'Набор путешественника',
            en: 'Explorer\'s Pack'
        },
        rarity: 0,
        cost: 1000,
        weight: 5,
        type: 'itemsPack',
        description: {
            en: '',
            ru: 'Набор путешественника (10 зм). Включает рюкзак, спаль' +
                'ник, столовый набор, трутницу, 10 факелов, рационы на 10' +
                'дней и бурдюк. В набор также входит 50-футовая пеньковая ' +
                'верёвка, закреплённая сбоку.'
        }
    },
    {
        value: 'javelin',
        title: {
            ru: 'Метательное копьё',
            en: 'Javelin',
        },
        type: 'weapon',
        weight: 2,
        cost: 50,
        rarity: 0,
        description: {
            en: '',
            ru: '1к6 колющий, Метательное (дис. 30/120)'
        }
    },
];


/***/ }),

/***/ "./src/app/pages/player-character-generator/components/character-generator-select/character-generator-select.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/player-character-generator/components/character-generator-select/character-generator-select.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci1jaGFyYWN0ZXItZ2VuZXJhdG9yL2NvbXBvbmVudHMvY2hhcmFjdGVyLWdlbmVyYXRvci1zZWxlY3QvY2hhcmFjdGVyLWdlbmVyYXRvci1zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/player-character-generator/components/character-generator-select/character-generator-select.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/player-character-generator/components/character-generator-select/character-generator-select.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: CharacterGeneratorSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterGeneratorSelectComponent", function() { return CharacterGeneratorSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CharacterGeneratorSelectComponent = /** @class */ (function () {
    function CharacterGeneratorSelectComponent() {
        this.raceInParentComponentSet = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CharacterGeneratorSelectComponent.prototype.ngOnInit = function () {
    };
    CharacterGeneratorSelectComponent.prototype.onChange = function ($event) {
        console.log('$event', $event);
        console.log('this.switchingAttribute', this.switchingAttribute);
        console.log('this.raceInParentComponentSet', this.raceInParentComponentSet);
        this.raceInParentComponentSet.emit(this.switchingAttribute);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CharacterGeneratorSelectComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CharacterGeneratorSelectComponent.prototype, "switchingAttribute", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CharacterGeneratorSelectComponent.prototype, "raceInParentComponentSet", void 0);
    CharacterGeneratorSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-character-generator-select',
            template: __webpack_require__(/*! raw-loader!./character-generator-select.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-generator/components/character-generator-select/character-generator-select.component.html"),
            styles: [__webpack_require__(/*! ./character-generator-select.component.scss */ "./src/app/pages/player-character-generator/components/character-generator-select/character-generator-select.component.scss")]
        })
    ], CharacterGeneratorSelectComponent);
    return CharacterGeneratorSelectComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-character-generator/components/main-info/main-info.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/player-character-generator/components/main-info/main-info.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci1jaGFyYWN0ZXItZ2VuZXJhdG9yL2NvbXBvbmVudHMvbWFpbi1pbmZvL21haW4taW5mby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/player-character-generator/components/main-info/main-info.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/player-character-generator/components/main-info/main-info.component.ts ***!
  \**********************************************************************************************/
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
            template: __webpack_require__(/*! raw-loader!./main-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-generator/components/main-info/main-info.component.html"),
            styles: [__webpack_require__(/*! ./main-info.component.scss */ "./src/app/pages/player-character-generator/components/main-info/main-info.component.scss")]
        })
    ], MainInfoComponent);
    return MainInfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-character-generator/components/pick-background/pick-background.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/player-character-generator/components/pick-background/pick-background.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci1jaGFyYWN0ZXItZ2VuZXJhdG9yL2NvbXBvbmVudHMvcGljay1iYWNrZ3JvdW5kL3BpY2stYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/player-character-generator/components/pick-background/pick-background.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/player-character-generator/components/pick-background/pick-background.component.ts ***!
  \**********************************************************************************************************/
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
            template: __webpack_require__(/*! raw-loader!./pick-background.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-generator/components/pick-background/pick-background.component.html"),
            styles: [__webpack_require__(/*! ./pick-background.component.scss */ "./src/app/pages/player-character-generator/components/pick-background/pick-background.component.scss")]
        })
    ], PickBackgroundComponent);
    return PickBackgroundComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-character-generator/components/pick-class/pick-class.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/player-character-generator/components/pick-class/pick-class.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci1jaGFyYWN0ZXItZ2VuZXJhdG9yL2NvbXBvbmVudHMvcGljay1jbGFzcy9waWNrLWNsYXNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/player-character-generator/components/pick-class/pick-class.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/player-character-generator/components/pick-class/pick-class.component.ts ***!
  \************************************************************************************************/
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
            template: __webpack_require__(/*! raw-loader!./pick-class.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-generator/components/pick-class/pick-class.component.html"),
            styles: [__webpack_require__(/*! ./pick-class.component.scss */ "./src/app/pages/player-character-generator/components/pick-class/pick-class.component.scss")]
        })
    ], PickClassComponent);
    return PickClassComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-character-generator/components/pick-race/pick-race.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/player-character-generator/components/pick-race/pick-race.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci1jaGFyYWN0ZXItZ2VuZXJhdG9yL2NvbXBvbmVudHMvcGljay1yYWNlL3BpY2stcmFjZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/player-character-generator/components/pick-race/pick-race.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/player-character-generator/components/pick-race/pick-race.component.ts ***!
  \**********************************************************************************************/
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
    // onRaceInParentComponentSet(value: boolean) {
    //   this.generatingCharacter.about.info.race = String(value);
    // }
    // onSubRaceInParentComponentSet(value: boolean) {
    //   this.generatingCharacter.about.info.subRace = String(value);
    // }
    // getSubRaceList(value: string) {
    //   this.racesList.map((race) => {
    //     if (race.value === value) {
    //       console.log(race.subRaces);
    //       return race.subRaces;
    //     }
    //   });
    // }
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
            template: __webpack_require__(/*! raw-loader!./pick-race.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-generator/components/pick-race/pick-race.component.html"),
            styles: [__webpack_require__(/*! ./pick-race.component.scss */ "./src/app/pages/player-character-generator/components/pick-race/pick-race.component.scss")]
        })
    ], PickRaceComponent);
    return PickRaceComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-character-generator/player-character-generator.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/player-character-generator/player-character-generator.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-character-generator {\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n}\n.main-character-generator__item {\n  display: flex;\n  justify-content: center;\n  padding: 0.2em;\n}\n.main-character-generator__item * {\n  width: 100%;\n}\n.main-character-generator__image {\n  width: 240px;\n  height: 240px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyLWNoYXJhY3Rlci1nZW5lcmF0b3IvQzpcXFVzZXJzXFxEbXl0cm9fRnJvbG92MVxcV2Vic3Rvcm1Qcm9qZWN0c1xcZG10L3NyY1xcYXBwXFxwYWdlc1xccGxheWVyLWNoYXJhY3Rlci1nZW5lcmF0b3JcXHBsYXllci1jaGFyYWN0ZXItZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wbGF5ZXItY2hhcmFjdGVyLWdlbmVyYXRvci9wbGF5ZXItY2hhcmFjdGVyLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEREk7RUFDRSxXQUFBO0FDR047QURBRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxheWVyLWNoYXJhY3Rlci1nZW5lcmF0b3IvcGxheWVyLWNoYXJhY3Rlci1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jaGFyYWN0ZXItZ2VuZXJhdG9ye1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgJl9faXRlbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4gICAgKntcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfTtcclxuICAmX19pbWFnZXtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn1cclxuIiwiLm1haW4tY2hhcmFjdGVyLWdlbmVyYXRvciB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5tYWluLWNoYXJhY3Rlci1nZW5lcmF0b3JfX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC4yZW07XG59XG4ubWFpbi1jaGFyYWN0ZXItZ2VuZXJhdG9yX19pdGVtICoge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluLWNoYXJhY3Rlci1nZW5lcmF0b3JfX2ltYWdlIHtcbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDI0MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/player-character-generator/player-character-generator.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/player-character-generator/player-character-generator.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PlayerCharacterGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerCharacterGeneratorComponent", function() { return PlayerCharacterGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_characters_characters_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/characters/characters.actions */ "./src/app/store/characters/characters.actions.ts");
/* harmony import */ var _core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/firebase/firebase.service */ "./src/app/core/firebase/firebase.service.ts");





var PlayerCharacterGeneratorComponent = /** @class */ (function () {
    function PlayerCharacterGeneratorComponent(store, firebaseService) {
        var _this = this;
        this.store = store;
        this.firebaseService = firebaseService;
        this.formTabsOptions = 0;
        this.store.dispatch(new _store_characters_characters_actions__WEBPACK_IMPORTED_MODULE_3__["GetDefaultCharacter"]());
        this.store.subscribe(function (characterStore) {
            _this.generatingCharacter = characterStore.character;
        });
    }
    PlayerCharacterGeneratorComponent.prototype.ngOnInit = function () {
    };
    PlayerCharacterGeneratorComponent.prototype.setCharacter = function () {
        console.log(this.generatingCharacter);
        // this.store.dispatch(new CharacterActions.SetCharacter(this.generatingCharacter));
    };
    PlayerCharacterGeneratorComponent.prototype.saveCharacter = function () {
        this.firebaseService.setPlayerCharacter(this.generatingCharacter);
    };
    PlayerCharacterGeneratorComponent.prototype.switchTab = function (i) {
        this.formTabsOptions += i;
        if (this.formTabsOptions < 0) {
            this.formTabsOptions = 0;
        }
        if (this.formTabsOptions > 6) {
            this.formTabsOptions = 6;
        }
        // this.store.dispatch(new CharacterActions.SetCharacter(this.generatingCharacter));
    };
    PlayerCharacterGeneratorComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
    ]; };
    PlayerCharacterGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-character-generator',
            template: __webpack_require__(/*! raw-loader!./player-character-generator.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-generator/player-character-generator.component.html"),
            styles: [__webpack_require__(/*! ./player-character-generator.component.scss */ "./src/app/pages/player-character-generator/player-character-generator.component.scss")]
        })
    ], PlayerCharacterGeneratorComponent);
    return PlayerCharacterGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-character-page/components/diary/diary.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/diary/diary.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci1jaGFyYWN0ZXItcGFnZS9jb21wb25lbnRzL2RpYXJ5L2RpYXJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/player-character-page/components/diary/diary.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/diary/diary.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DiaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaryComponent", function() { return DiaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DiaryComponent = /** @class */ (function () {
    function DiaryComponent() {
    }
    DiaryComponent.prototype.ngOnInit = function () {
    };
    DiaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diary',
            template: __webpack_require__(/*! raw-loader!./diary.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/diary/diary.component.html"),
            styles: [__webpack_require__(/*! ./diary.component.scss */ "./src/app/pages/player-character-page/components/diary/diary.component.scss")]
        })
    ], DiaryComponent);
    return DiaryComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-character-page/components/inventory/inventory.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/inventory/inventory.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci1jaGFyYWN0ZXItcGFnZS9jb21wb25lbnRzL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/player-character-page/components/inventory/inventory.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/inventory/inventory.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _models_equipment_equipment_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/equipment/equipment.data */ "./src/app/models/equipment/equipment.data.ts");
/* harmony import */ var _core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/firebase/firebase.service */ "./src/app/core/firebase/firebase.service.ts");





var InventoryComponent = /** @class */ (function () {
    function InventoryComponent(store, db) {
        var _this = this;
        this.store = store;
        this.db = db;
        this.allItems = _models_equipment_equipment_data__WEBPACK_IMPORTED_MODULE_3__["EquipmentData"];
        this.equipment = [];
        this.store.subscribe(function (storeItem) {
            _this.currentUser = storeItem.character;
        });
    }
    InventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser.equipment.forEach(function (characterItem) {
            _this.db.getItem(characterItem.value).subscribe(function (element) {
                _this.equipment.push({ item: element, count: characterItem.count });
            });
        });
        // this.db.getItem();
    };
    InventoryComponent.prototype.addItems = function () {
        var _this = this;
        this.allItems.forEach(function (item) {
            _this.db.setItem(item);
        });
    };
    InventoryComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
    ]; };
    InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! raw-loader!./inventory.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.scss */ "./src/app/pages/player-character-page/components/inventory/inventory.component.scss")]
        })
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-character-page/components/menu/menu.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/menu/menu.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n  display: flex;\n}\n.menu__item {\n  height: 40px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.menu__item:hover {\n  background-color: red;\n}\n.menu__image {\n  width: 40px;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyLWNoYXJhY3Rlci1wYWdlL2NvbXBvbmVudHMvbWVudS9DOlxcVXNlcnNcXERteXRyb19Gcm9sb3YxXFxXZWJzdG9ybVByb2plY3RzXFxkbXQvc3JjXFxhcHBcXHBhZ2VzXFxwbGF5ZXItY2hhcmFjdGVyLXBhZ2VcXGNvbXBvbmVudHNcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BsYXllci1jaGFyYWN0ZXItcGFnZS9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNFSjtBRERJO0VBQ0UscUJBQUE7QUNHTjtBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wbGF5ZXItY2hhcmFjdGVyLXBhZ2UvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICZfX2l0ZW17XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIH1cclxuICB9XHJcbiAgJl9faW1hZ2V7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxufVxyXG4iLCIubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWVudV9faXRlbSB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1lbnVfX2l0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4ubWVudV9faW1hZ2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/player-character-page/components/menu/menu.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/menu/menu.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MenuComponent.prototype, "menuOptions", void 0);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/pages/player-character-page/components/menu/menu.component.scss")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-character-page/components/skills/skills.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/skills/skills.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci1jaGFyYWN0ZXItcGFnZS9jb21wb25lbnRzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/player-character-page/components/skills/skills.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/skills/skills.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/pages/player-character-page/components/skills/skills.component.scss")]
        })
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-character-page/components/stats/components/attributes/attributes.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/stats/components/attributes/attributes.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  height: 100%;\n}\n\n.attribute-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-align: center;\n  height: 100%;\n}\n\n.attributeContainer {\n  display: flex;\n  justify-content: flex-start;\n  height: 50px;\n}\n\n.attributeContainer img {\n  width: 50px;\n  height: 50px;\n}\n\n.attributeInfo {\n  width: 70px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  padding: 0 1em;\n}\n\n.title {\n  border: 1px solid black;\n  font-size: 10px;\n}\n\n.amount {\n  border-left: 1px solid black;\n  border-right: 1px solid black;\n  padding: 0.3em;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.modifier {\n  border: 1px solid black;\n  border-radius: 0 0 100% 100%;\n  font-size: 10px;\n}\n\n.skills {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 110px;\n  font-size: 10px;\n  margin: 5px;\n  padding-left: 1em;\n  list-style-type: circle;\n}\n\n.skills li.proficiency {\n  list-style-type: disc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyLWNoYXJhY3Rlci1wYWdlL2NvbXBvbmVudHMvc3RhdHMvY29tcG9uZW50cy9hdHRyaWJ1dGVzL0M6XFxVc2Vyc1xcRG15dHJvX0Zyb2xvdjFcXFdlYnN0b3JtUHJvamVjdHNcXGRtdC9zcmNcXGFwcFxccGFnZXNcXHBsYXllci1jaGFyYWN0ZXItcGFnZVxcY29tcG9uZW50c1xcc3RhdHNcXGNvbXBvbmVudHNcXGF0dHJpYnV0ZXNcXGF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BsYXllci1jaGFyYWN0ZXItcGFnZS9jb21wb25lbnRzL3N0YXRzL2NvbXBvbmVudHMvYXR0cmlidXRlcy9hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNFRjs7QURERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDR0o7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNHRjs7QUREQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQ0lGOztBREZBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURIQTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDTUY7O0FESkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNPRjs7QURORTtFQUNFLHFCQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wbGF5ZXItY2hhcmFjdGVyLXBhZ2UvY29tcG9uZW50cy9zdGF0cy9jb21wb25lbnRzL2F0dHJpYnV0ZXMvYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmF0dHJpYnV0ZS1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlXHJcbiAgLy9wYWRkaW5nOiAwZW0gMWVtIDFlbSAxZW07XHJcbn1cclxuLmF0dHJpYnV0ZUNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG59XHJcbi5hdHRyaWJ1dGVJbmZve1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuLnRpdGxle1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uYW1vdW50e1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogMC4zZW07XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5tb2RpZmllcntcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTAwJSAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uc2tpbGxze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xyXG4gIGxpLnByb2ZpY2llbmN5e1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iLCIubWFpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hdHRyaWJ1dGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmF0dHJpYnV0ZUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmF0dHJpYnV0ZUNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uYXR0cmlidXRlSW5mbyB7XG4gIHdpZHRoOiA3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDFlbTtcbn1cblxuLnRpdGxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmFtb3VudCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAwLjNlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1vZGlmaWVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMDAlIDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnNraWxscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTEwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbn1cbi5za2lsbHMgbGkucHJvZmljaWVuY3kge1xuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/player-character-page/components/stats/components/attributes/attributes.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/stats/components/attributes/attributes.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: AttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesComponent", function() { return AttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _attributesOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributesOptions */ "./src/app/pages/player-character-page/components/stats/components/attributes/attributesOptions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");




var AttributesComponent = /** @class */ (function () {
    function AttributesComponent(store) {
        var _this = this;
        this.store = store;
        this.attributesOptions = _attributesOptions__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.store.subscribe(function (storeItem) {
            _this.currentUser = storeItem.character;
        });
    }
    AttributesComponent.prototype.ngOnInit = function () {
    };
    AttributesComponent.prototype.getAttributeModifier = function (attribute) {
        var result = Math.floor(attribute / 2) - 5;
        var view = result.toString();
        if (result > 0) {
            view = "+" + result;
        }
        return view;
    };
    AttributesComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    AttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attributes',
            template: __webpack_require__(/*! raw-loader!./attributes.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/stats/components/attributes/attributes.component.html"),
            styles: [__webpack_require__(/*! ./attributes.component.scss */ "./src/app/pages/player-character-page/components/stats/components/attributes/attributes.component.scss")]
        })
    ], AttributesComponent);
    return AttributesComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-character-page/components/stats/components/attributes/attributesOptions.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/stats/components/attributes/attributesOptions.ts ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        src: 'assets/img/character-page/Attributes/strength.jpg',
        text: 'Сила',
        attribute: 'strength',
        skills: [
            { text: 'Атлетика', proficiency: false }
        ]
    },
    {
        src: 'assets/img/character-page/Attributes/dexterity.jpg',
        text: 'Ловкость',
        attribute: 'dexterity',
        skills: [
            { text: 'Акробатика', proficiency: false },
            { text: 'Ловкость рук', proficiency: false },
            { text: 'Скрытность', proficiency: false }
        ]
    },
    {
        src: 'assets/img/character-page/Attributes/constitution.jpg',
        text: 'Телосложение',
        attribute: 'constitution',
        skills: [
            { text: 'Выносливость', proficiency: false }
        ]
    },
    {
        src: 'assets/img/character-page/Attributes/intelligence.jpg',
        text: 'Интеллект',
        attribute: 'intelligence',
        skills: [
            { text: 'Анализ', proficiency: true },
            { text: 'История', proficiency: true },
            { text: 'Магия', proficiency: true },
            { text: 'Природа', proficiency: false },
            { text: 'Религия', proficiency: false }
        ]
    },
    {
        src: 'assets/img/character-page/Attributes/wisdom.jpg',
        text: 'Мудрость',
        attribute: 'wisdom',
        skills: [
            { text: 'Внимательность', proficiency: false },
            { text: 'Выживание', proficiency: false },
            { text: 'Медицина', proficiency: false },
            { text: 'Проницательность', proficiency: true },
            { text: 'Уход за животными', proficiency: false }
        ]
    },
    {
        src: 'assets/img/character-page/Attributes/charisma.jpg',
        text: 'Харизма',
        attribute: 'charisma',
        skills: [
            { text: 'Выступление', proficiency: false },
            { text: 'Запугивание', proficiency: false },
            { text: 'Обман', proficiency: false },
            { text: 'Убеждение', proficiency: false }
        ]
    }
]);


/***/ }),

/***/ "./src/app/pages/player-character-page/components/stats/components/description/description.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/stats/components/description/description.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci1jaGFyYWN0ZXItcGFnZS9jb21wb25lbnRzL3N0YXRzL2NvbXBvbmVudHMvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/player-character-page/components/stats/components/description/description.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/stats/components/description/description.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent() {
    }
    DescriptionComponent.prototype.ngOnInit = function () {
    };
    DescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-description',
            template: __webpack_require__(/*! raw-loader!./description.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/stats/components/description/description.component.html"),
            styles: [__webpack_require__(/*! ./description.component.scss */ "./src/app/pages/player-character-page/components/stats/components/description/description.component.scss")]
        })
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-character-page/components/stats/components/general-info/general-info.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/stats/components/general-info/general-info.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nimg {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyLWNoYXJhY3Rlci1wYWdlL2NvbXBvbmVudHMvc3RhdHMvY29tcG9uZW50cy9nZW5lcmFsLWluZm8vQzpcXFVzZXJzXFxEbXl0cm9fRnJvbG92MVxcV2Vic3Rvcm1Qcm9qZWN0c1xcZG10L3NyY1xcYXBwXFxwYWdlc1xccGxheWVyLWNoYXJhY3Rlci1wYWdlXFxjb21wb25lbnRzXFxzdGF0c1xcY29tcG9uZW50c1xcZ2VuZXJhbC1pbmZvXFxnZW5lcmFsLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BsYXllci1jaGFyYWN0ZXItcGFnZS9jb21wb25lbnRzL3N0YXRzL2NvbXBvbmVudHMvZ2VuZXJhbC1pbmZvL2dlbmVyYWwtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci1jaGFyYWN0ZXItcGFnZS9jb21wb25lbnRzL3N0YXRzL2NvbXBvbmVudHMvZ2VuZXJhbC1pbmZvL2dlbmVyYWwtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuIiwiLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/player-character-page/components/stats/components/general-info/general-info.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/stats/components/general-info/general-info.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: GeneralInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoComponent", function() { return GeneralInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var GeneralInfoComponent = /** @class */ (function () {
    function GeneralInfoComponent(store) {
        var _this = this;
        this.store = store;
        this.store.subscribe(function (test) {
            console.log('[General info component store subscribe]', test);
            _this.currentUser = test.character;
        });
    }
    GeneralInfoComponent.prototype.ngOnInit = function () {
    };
    GeneralInfoComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    GeneralInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general-info',
            template: __webpack_require__(/*! raw-loader!./general-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/stats/components/general-info/general-info.component.html"),
            styles: [__webpack_require__(/*! ./general-info.component.scss */ "./src/app/pages/player-character-page/components/stats/components/general-info/general-info.component.scss")]
        })
    ], GeneralInfoComponent);
    return GeneralInfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-character-page/components/stats/components/proficiency/proficiency.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/stats/components/proficiency/proficiency.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci1jaGFyYWN0ZXItcGFnZS9jb21wb25lbnRzL3N0YXRzL2NvbXBvbmVudHMvcHJvZmljaWVuY3kvcHJvZmljaWVuY3kuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/player-character-page/components/stats/components/proficiency/proficiency.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/stats/components/proficiency/proficiency.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ProficiencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProficiencyComponent", function() { return ProficiencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProficiencyComponent = /** @class */ (function () {
    function ProficiencyComponent() {
    }
    ProficiencyComponent.prototype.ngOnInit = function () {
    };
    ProficiencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proficiency',
            template: __webpack_require__(/*! raw-loader!./proficiency.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/stats/components/proficiency/proficiency.component.html"),
            styles: [__webpack_require__(/*! ./proficiency.component.scss */ "./src/app/pages/player-character-page/components/stats/components/proficiency/proficiency.component.scss")]
        })
    ], ProficiencyComponent);
    return ProficiencyComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-character-page/components/stats/stats.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/stats/stats.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.content {\n  flex: 1;\n  padding: 0 1em 1em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyLWNoYXJhY3Rlci1wYWdlL2NvbXBvbmVudHMvc3RhdHMvQzpcXFVzZXJzXFxEbXl0cm9fRnJvbG92MVxcV2Vic3Rvcm1Qcm9qZWN0c1xcZG10L3NyY1xcYXBwXFxwYWdlc1xccGxheWVyLWNoYXJhY3Rlci1wYWdlXFxjb21wb25lbnRzXFxzdGF0c1xcc3RhdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BsYXllci1jaGFyYWN0ZXItcGFnZS9jb21wb25lbnRzL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsT0FBQTtFQUNBLHNCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wbGF5ZXItY2hhcmFjdGVyLXBhZ2UvY29tcG9uZW50cy9zdGF0cy9zdGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uY29udGVudHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmc6IDAgMWVtIDFlbSAxZW07XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAwIDFlbSAxZW0gMWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/player-character-page/components/stats/stats.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/player-character-page/components/stats/stats.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
        this.menuOptions = {
            currentTab: 'general-info',
            menuItems: [
                { tab: 'general-info', src: 'assets/img/character-page/general-info.png', alt: 'menu image' },
                { tab: 'attributes', src: 'assets/img/character-page/attributes.png', alt: 'menu image' },
                { tab: 'proficiency', src: 'assets/img/character-page/proficiency.png', alt: 'menu image' },
                { tab: 'description', src: 'assets/img/character-page/description.png', alt: 'menu image' }
            ]
        };
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! raw-loader!./stats.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/components/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.scss */ "./src/app/pages/player-character-page/components/stats/stats.component.scss")]
        })
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-character-page/player-character-page.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/player-character-page/player-character-page.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.content {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyLWNoYXJhY3Rlci1wYWdlL0M6XFxVc2Vyc1xcRG15dHJvX0Zyb2xvdjFcXFdlYnN0b3JtUHJvamVjdHNcXGRtdC9zcmNcXGFwcFxccGFnZXNcXHBsYXllci1jaGFyYWN0ZXItcGFnZVxccGxheWVyLWNoYXJhY3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wbGF5ZXItY2hhcmFjdGVyLXBhZ2UvcGxheWVyLWNoYXJhY3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsT0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxheWVyLWNoYXJhY3Rlci1wYWdlL3BsYXllci1jaGFyYWN0ZXItcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uY29udGVudHtcclxuICBmbGV4OiAxO1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgZmxleDogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/player-character-page/player-character-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/player-character-page/player-character-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: PlayerCharacterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerCharacterPageComponent", function() { return PlayerCharacterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/firebase/firebase.service */ "./src/app/core/firebase/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_characters_characters_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/characters/characters.actions */ "./src/app/store/characters/characters.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");






var PlayerCharacterPageComponent = /** @class */ (function () {
    function PlayerCharacterPageComponent(firebaseService, route, store) {
        this.firebaseService = firebaseService;
        this.route = route;
        this.store = store;
        this.menuOptions = {
            currentTab: 'stats',
            menuItems: [
                { tab: 'stats', src: 'assets/img/character-page/stats.png', alt: 'menu image' },
                { tab: 'equipment', src: 'assets/img/character-page/equipment.png', alt: 'menu image' },
                { tab: 'skills', src: 'assets/img/character-page/magic.png', alt: 'menu image' },
                { tab: 'diary', src: 'assets/img/character-page/localMap.png', alt: 'menu image' },
                { tab: 'combat', src: 'assets/img/character-page/combat.png', alt: 'menu image' }
            ]
        };
    }
    PlayerCharacterPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url
            .subscribe(function (url) {
            var currentUserId = url[url.length - 1].path;
            _this.firebaseService
                .onCharacterChanges(currentUserId)
                .subscribe(function (item) {
                _this.currentUser = item;
                _this.store.dispatch(new _store_characters_characters_actions__WEBPACK_IMPORTED_MODULE_4__["SetCharacter"](item));
            });
        });
    };
    PlayerCharacterPageComponent.ctorParameters = function () { return [
        { type: _core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
    ]; };
    PlayerCharacterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-character-page',
            template: __webpack_require__(/*! raw-loader!./player-character-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/player-character-page/player-character-page.component.html"),
            styles: [__webpack_require__(/*! ./player-character-page.component.scss */ "./src/app/pages/player-character-page/player-character-page.component.scss")]
        })
    ], PlayerCharacterPageComponent);
    return PlayerCharacterPageComponent;
}());



/***/ }),

/***/ "./src/app/store/characters/characters.actions.ts":
/*!********************************************************!*\
  !*** ./src/app/store/characters/characters.actions.ts ***!
  \********************************************************/
/*! exports provided: GET_CHARACTER, GET_DEFAULT_CHARACTER, ADD_CHARACTER, SET_CHARACTER, DELETE_CHARACTER, GetCharacter, GetDefaultCharacter, SetCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHARACTER", function() { return GET_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DEFAULT_CHARACTER", function() { return GET_DEFAULT_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHARACTER", function() { return ADD_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHARACTER", function() { return SET_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CHARACTER", function() { return DELETE_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCharacter", function() { return GetCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDefaultCharacter", function() { return GetDefaultCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCharacter", function() { return SetCharacter; });
var GET_CHARACTER = '[Character] Get';
var GET_DEFAULT_CHARACTER = '[Character] Get Default';
var ADD_CHARACTER = '[Character] Add';
var SET_CHARACTER = '[Character] Set';
var DELETE_CHARACTER = '[Character] Delete';
var GetCharacter = /** @class */ (function () {
    function GetCharacter() {
        this.type = GET_CHARACTER;
    }
    return GetCharacter;
}());

var GetDefaultCharacter = /** @class */ (function () {
    function GetDefaultCharacter() {
        this.type = GET_DEFAULT_CHARACTER;
    }
    return GetDefaultCharacter;
}());

var SetCharacter = /** @class */ (function () {
    function SetCharacter(character) {
        this.character = character;
        this.type = SET_CHARACTER;
    }
    SetCharacter.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SetCharacter;
}());



/***/ }),

/***/ "./src/app/store/characters/characters.reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/store/characters/characters.reducer.ts ***!
  \********************************************************/
/*! exports provided: characterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characterReducer", function() { return characterReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _characters_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./characters.actions */ "./src/app/store/characters/characters.actions.ts");


var defaultState = {
    about: {
        info: {
            playerName: '',
            characterName: '',
            race: '',
            subRace: '',
            classes: [{
                    name: '',
                    level: 1,
                }],
            background: '',
            feats: [],
        },
        attributes: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        },
        stats: {
            size: 'medium',
            speed: 0,
            darkVision: 0,
            initiative: 0,
        },
        effects: {
            savingThrows: [],
            resistance: [],
            immunity: [],
        },
        action: {
            hitPoints: {
                max: 0,
                temp: 0,
                current: 0,
            },
            deathSaves: {
                failures: 0,
                successes: 0,
            },
            bonus: 0,
            armorClass: 0,
            experience: 0,
            inspiration: false,
        },
        proficiency: {
            languages: [],
            tools: [],
            armor: [],
            skills: [],
            weapons: [],
        },
        description: {
            alignment: '',
            height: 0,
            weight: 0,
            age: {
                human: 0,
                mod: 0,
                total: 0,
            },
            imageUrl: '',
            sex: 'male',
        },
        personalQualities: {
            bonds: [],
            flaws: [],
            ideals: [],
            personalityTraits: [],
        }
    },
    abilities: [],
    equipment: [],
};
function characterReducer(state, action) {
    if (state === void 0) { state = defaultState; }
    console.log('[characterReducer]', action.type, state);
    switch (action.type) {
        case _characters_actions__WEBPACK_IMPORTED_MODULE_1__["GET_CHARACTER"]:
            return state;
        case _characters_actions__WEBPACK_IMPORTED_MODULE_1__["GET_DEFAULT_CHARACTER"]:
            return defaultState;
        case _characters_actions__WEBPACK_IMPORTED_MODULE_1__["SET_CHARACTER"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, defaultState, state, action.character);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dmytro_Frolov1\WebstormProjects\dmt\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map