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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"mobile-wrap\">\r\n  <div class=\"container\">\r\n    <app-header></app-header>\r\n    <div class=\"content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-navigation-container\">\r\n    <details class=\"menu-lvl-1\">\r\n        <summary>Меню</summary>\r\n      <hr>\r\n      <div [ngStyle]=\"{flexDirection: 'column', display: 'flex'}\">\r\n        <div *ngIf=\"currentUser.signedIn\" [className]=\"'currentUser'\">\r\n          <img [alt]=\"'avatar'\" [className]=\"'currentUser__image'\" [src]=\"currentUser.imageUrl\">\r\n          <span [className]=\"'currentUser__login'\">{{currentUser.login}}</span>\r\n          <button (click)=\"firebaseService.signOut()\">Sign-out</button>\r\n        </div>\r\n        <div *ngIf=\"!currentUser.signedIn\" [className]=\"'currentUser'\"\r\n             [ngStyle]=\"{flexDirection: 'column', display: 'flex'}\">\r\n          <input [(ngModel)]=\"regUser.email\" [className]=\"'currentUser__input'\" placeholder=\"your email\" type=\"text\">\r\n          <input [(ngModel)]=\"regUser.password\" [className]=\"'currentUser__input'\" placeholder=\"your password\"\r\n                 type=\"password\">\r\n          <button (click)=\"signIn()\">Sign-in</button>\r\n        </div>\r\n\r\n      </div>\r\n        <div class=\"link-container\">\r\n          <a class=\"main-navigation-container__link\" routerLink=\"/\">Главная</a>\r\n          <a class=\"main-navigation-container__link\" routerLink=\"/character-generator\">Генератор персонажа</a>\r\n          <a class=\"main-navigation-container__link\" routerLink=\"/sign-up\">Регистрация</a>\r\n        </div>\r\n        <hr>\r\n        <details class=\"menu-lvl-2\">\r\n          <summary>Персонажи</summary>\r\n          <div [ngStyle]=\"{display: 'flex', flexDirection: 'column'}\">\r\n            <a\r\n              *ngFor=\"let character of allCharacters\"\r\n              [className]=\"'main-navigation-container__link'\"\r\n              [routerLink]=\"'/character/' + character.id\">\r\n              {{character.id}}\r\n            </a>\r\n          </div>\r\n        </details>\r\n    </details>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_character_generator_character_generator_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/character-generator/character-generator.guard */ "./src/app/modules/character-generator/character-generator.guard.ts");




var routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'character-generator',
        loadChildren: function () { return __webpack_require__.e(/*! import() | modules-character-generator-character-generator-module */ "modules-character-generator-character-generator-module").then(__webpack_require__.bind(null, /*! ./modules/character-generator/character-generator.module */ "./src/app/modules/character-generator/character-generator.module.ts")).then(function (m) { return m.CharacterGeneratorModule; }); },
        canActivate: [_modules_character_generator_character_generator_guard__WEBPACK_IMPORTED_MODULE_3__["CharacterGeneratorGuard"]]
    },
    {
        path: 'character',
        loadChildren: function () { return __webpack_require__.e(/*! import() | modules-character-character-module */ "modules-character-character-module").then(__webpack_require__.bind(null, /*! ./modules/character/character.module */ "./src/app/modules/character/character.module.ts")).then(function (m) { return m.CharacterModule; }); },
    },
    {
        path: 'sign-up',
        loadChildren: function () { return __webpack_require__.e(/*! import() | modules-sign-up-sign-up-module */ "modules-sign-up-sign-up-module").then(__webpack_require__.bind(null, /*! ./modules/sign-up/sign-up.module */ "./src/app/modules/sign-up/sign-up.module.ts")).then(function (m) { return m.SignUpModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  display: flex;\r\n  flex-direction: column;\r\n  /*height: 100vh;*/\r\n  height: 568px;\r\n  width: 320px;\r\n  border: 1px solid black;\r\n}\r\n.content{\r\n  height: 100%;\r\n}\r\n.mobile-wrap {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n  .container {\r\n    zoom: 150%\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0U7SUFDRTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8qaGVpZ2h0OiAxMDB2aDsqL1xyXG4gIGhlaWdodDogNTY4cHg7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5jb250ZW50e1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1vYmlsZS13cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgem9vbTogMTUwJVxyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _store_characters_characters_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/characters/characters.reducer */ "./src/app/store/characters/characters.reducer.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _modules_character_generator_character_generator_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/character-generator/character-generator.guard */ "./src/app/modules/character-generator/character-generator.guard.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({
                    character: _store_characters_characters_reducer__WEBPACK_IMPORTED_MODULE_8__["characterReducer"]
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ],
            providers: [_modules_character_generator_character_generator_guard__WEBPACK_IMPORTED_MODULE_11__["CharacterGeneratorGuard"]],
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

module.exports = ".main-navigation-container {\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  background-color: black;\n  padding: 0.5em;\n}\n.main-navigation-container__link, .main-navigation-container__link:visited {\n  color: white;\n  text-decoration: none;\n}\n.currentUser {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 0.5em;\n  border-bottom: 1px solid white;\n}\n.currentUser__login {\n  margin-right: 1em;\n}\n.currentUser__image {\n  width: 32px;\n  height: 32px;\n  margin-right: 1em;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\ndetails {\n  color: white;\n  width: 100%;\n  background-color: black;\n}\n.link-container {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxEbXl0cm9fRnJvbG92MVxcV2Vic3Rvcm1Qcm9qZWN0c1xcZG10L3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUVBLGNBQUE7QUNBRjtBREVFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FDQUo7QURJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ0RGO0FER0U7RUFDRSxpQkFBQTtBQ0RKO0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ0ZKO0FEU0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDUEY7QURTQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tbmF2aWdhdGlvbi1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cclxuICBwYWRkaW5nOiAwLjVlbTtcclxuXHJcbiAgJl9fbGluaywgJl9fbGluazp2aXNpdGVke1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmN1cnJlbnRVc2VyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgJl9fbG9naW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgfVxyXG5cclxuICAmX19pbWFnZSB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB9XHJcblxyXG4gICZfX2lucHV0IHtcclxuXHJcbiAgfVxyXG59XHJcbmRldGFpbHMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4ubGluay1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iLCIubWFpbi1uYXZpZ2F0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMC41ZW07XG59XG4ubWFpbi1uYXZpZ2F0aW9uLWNvbnRhaW5lcl9fbGluaywgLm1haW4tbmF2aWdhdGlvbi1jb250YWluZXJfX2xpbms6dmlzaXRlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY3VycmVudFVzZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59XG4uY3VycmVudFVzZXJfX2xvZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG4uY3VycmVudFVzZXJfX2ltYWdlIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5kZXRhaWxzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5saW5rLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"

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
/* harmony import */ var _core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/firebase/firebase.service */ "./src/app/core/firebase/firebase.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(firebaseService) {
        this.firebaseService = firebaseService;
        this.initialUser = {
            login: '%Username%',
            imageUrl: 'https://icon-library.net/images/default-user-icon/default-user-icon-8.jpg',
            signedIn: false,
        };
        this.currentUser = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.initialUser);
        this.regUser = {
            email: '',
            password: '',
        };
        this.allCharacters = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.onAuthStateChanged().subscribe(function (_a) {
            var displayName = _a.displayName, photoURL = _a.photoURL, signedIn = _a.signedIn;
            console.log('[HEADER USER]', displayName);
            if (signedIn) {
                _this.currentUser = { login: displayName, imageUrl: photoURL, signedIn: signedIn };
            }
            else {
                _this.currentUser = _this.initialUser;
            }
        });
        this.firebaseService.getAllPlayersCharacters().subscribe(function (_a) {
            var id = _a.id, character = _a.character;
            console.log(id, character);
            _this.allCharacters.push({ id: id, character: character });
        });
    };
    HeaderComponent.prototype.signIn = function () {
        console.log(this.regUser.email, this.regUser.password);
        this.firebaseService.signInWithEmailAndPassword(this.regUser.email, this.regUser.password).subscribe(function (response) {
            console.log('response', response);
        });
        console.log('done');
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
    ]; };
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
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");


// Firebase App (the core Firebase SDK) is always required and must be listed first

// // Add the Firebase products that you want to use




var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
        this.collections = {
            playersCharactersUrl: 'playerCharacters',
            items: 'items',
            players: 'players',
        };
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseConfig);
        this.db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
    }
    // AUTH
    FirebaseService.prototype.createUserWithEmailAndPassword = function (email, password) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (subscriber) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
                .createUserWithEmailAndPassword(email, password)
                .then(function (response) {
                subscriber.next(response);
            })
                .catch(function (error) {
                console.log('[FIREBASE REGISTRATION ERROR]', error.code, error.message);
            });
        });
    };
    FirebaseService.prototype.signInWithEmailAndPassword = function (email, password) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (subscriber) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
                .signInWithEmailAndPassword(email, password)
                .then(function (response) {
                console.log('User signed in');
                subscriber.next(response);
            })
                .catch(function (error) {
                console.log('AUTH ERROR', error.code, error.message);
            });
        });
    };
    FirebaseService.prototype.updateUserProfile = function (login, imageUrl) {
        if (imageUrl === void 0) { imageUrl = 'https://icon-library.net/images/default-user-icon/default-user-icon-8.jpg'; }
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (subscriber) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser
                .updateProfile({
                displayName: login,
                photoURL: imageUrl,
            })
                .then(function (response) {
                subscriber.next(response);
            })
                .catch(function (error) {
                console.log('[FIREBASE USER PROFILE UPDATE ERROR]', error.code, error.message);
            });
        });
    };
    FirebaseService.prototype.onAuthStateChanged = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (subscriber) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    subscriber.next({
                        displayName: _this.getCurrentUser().displayName,
                        photoURL: _this.getCurrentUser().photoURL,
                        signedIn: true,
                    });
                }
                else {
                    // No user is signed in.
                    console.log('User is not signed in');
                    subscriber.next({
                        displayName: '%Username%',
                        photoURL: 'https://icon-library.net/images/default-user-icon/default-user-icon-8.jpg',
                        signedIn: false,
                    });
                }
            });
        });
    };
    FirebaseService.prototype.getCurrentUser = function () {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
    };
    FirebaseService.prototype.signOut = function () {
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
            .signOut()
            .catch(function (error) {
            console.log('[FIREBASE USER SIGN OUT ERROR]', error.code, error.message);
        });
    };
    // DATABASE
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
    FirebaseService.prototype.getAllPlayersCharacters = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (subscriber) {
            _this.db
                .collection(_this.collections.playersCharactersUrl)
                // .where('gettable', '==', true)
                .onSnapshot(function (characters) {
                characters.forEach(function (character) {
                    subscriber.next({ id: character.id, character: character.data() });
                });
            });
        });
    };
    FirebaseService.prototype.onCharacterChanges = function (id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (subscriber) {
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
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (subscriber) {
            _this.db
                .collection('items')
                .doc(id)
                .get()
                .then(function (item) {
                subscriber.next(item.data());
            });
        });
    };
    FirebaseService.prototype.setPlayer = function (player) {
        this.db
            .collection(this.collections.players)
            .doc(player.login)
            .set(player)
            .then(function () {
            console.log('Player successfully written!');
        })
            .catch(function (error) {
            console.error('Error writing player: ', error);
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

/***/ "./src/app/modules/character-generator/character-generator.guard.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/character-generator/character-generator.guard.ts ***!
  \**************************************************************************/
/*! exports provided: CharacterGeneratorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterGeneratorGuard", function() { return CharacterGeneratorGuard; });
/* harmony import */ var _core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/firebase/firebase.service */ "./src/app/core/firebase/firebase.service.ts");

var CharacterGeneratorGuard = /** @class */ (function () {
    function CharacterGeneratorGuard(firebaseService) {
        this.firebaseService = firebaseService;
    }
    CharacterGeneratorGuard.prototype.canActivate = function (route, state) {
        var loggedIn = !!this.firebaseService.getCurrentUser();
        if (!loggedIn) {
            alert('sign in first');
        }
        return loggedIn;
    };
    CharacterGeneratorGuard.ctorParameters = function () { return [
        { type: _core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_0__["FirebaseService"] }
    ]; };
    return CharacterGeneratorGuard;
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
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialState */ "./src/app/store/characters/initialState.ts");



function characterReducer(state, action) {
    if (state === void 0) { state = _initialState__WEBPACK_IMPORTED_MODULE_2__["initialState"]; }
    console.log('[characterReducer]', action.type, state);
    switch (action.type) {
        case _characters_actions__WEBPACK_IMPORTED_MODULE_1__["GET_CHARACTER"]:
            return state;
        case _characters_actions__WEBPACK_IMPORTED_MODULE_1__["GET_DEFAULT_CHARACTER"]:
            return _initialState__WEBPACK_IMPORTED_MODULE_2__["initialState"];
        case _characters_actions__WEBPACK_IMPORTED_MODULE_1__["SET_CHARACTER"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _initialState__WEBPACK_IMPORTED_MODULE_2__["initialState"], state, action.character);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/store/characters/initialState.ts":
/*!**************************************************!*\
  !*** ./src/app/store/characters/initialState.ts ***!
  \**************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
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
            strength: 15,
            dexterity: 14,
            constitution: 13,
            intelligence: 12,
            wisdom: 10,
            charisma: 8,
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
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCBJLGUwm3Gudef3OmMpTr4_kuAKojdHKI',
        authDomain: 'dnd-master-tools.firebaseapp.com',
        databaseURL: 'https://dnd-master-tools.firebaseio.com',
        projectId: 'dnd-master-tools',
        storageBucket: '',
        messagingSenderId: '338033505662',
        appId: '1:338033505662:web:ded866bbf17722c7'
    },
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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