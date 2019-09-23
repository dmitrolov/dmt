(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/sign-up/sign-up.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/sign-up/sign-up.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\r\n  (ngSubmit)=\"onSubmit(registerForm)\"\r\n  [className]=\"'registration-form'\"\r\n  [formGroup]=\"registerForm\">\r\n  <div [className]=\"'registration-form__item'\">\r\n    <label [className]=\"'registration-form__label'\">\r\n      <span>Your login</span>\r\n      <input formControlName=\"login\" placeholder=\"Your login\" type=\"text\">\r\n    </label>\r\n    <div *ngIf=\"(f.login.dirty || f.login.touched) && f.login.errors\"\r\n         class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.login.errors.required\">Login is required</div>\r\n    </div>\r\n  </div>\r\n  <div [className]=\"'registration-form__item'\">\r\n    <label [className]=\"'registration-form__label'\">\r\n      <span>Your email</span>\r\n      <input formControlName=\"email\" placeholder=\"Your email\" type=\"text\">\r\n    </label>\r\n    <div *ngIf=\"(f.email.dirty || f.email.touched) && f.email.errors\"\r\n         class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n      <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n    </div>\r\n  </div>\r\n  <div [className]=\"'registration-form__item'\">\r\n    <label [className]=\"'registration-form__label'\">\r\n      <span>Your password</span>\r\n      <input formControlName=\"password\" placeholder=\"Your password\" type=\"password\">\r\n    </label>\r\n    <div *ngIf=\"(f.password.dirty || f.password.touched) && f.password.errors\"\r\n         class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n      <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n    </div>\r\n  </div>\r\n  <div [className]=\"'registration-form__item'\">\r\n    <label [className]=\"'registration-form__label'\">\r\n      <span>Confirm password</span>\r\n      <input formControlName=\"passwordConfirm\" placeholder=\"Confirm password\" type=\"password\">\r\n    </label>\r\n    <div *ngIf=\"(f.passwordConfirm.dirty || f.passwordConfirm.touched) && f.passwordConfirm.errors\"\r\n         class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.passwordConfirm.errors.required\">Confirm Password is required</div>\r\n      <div *ngIf=\"f.passwordConfirm.errors.mustMatch\">Passwords must match</div>\r\n    </div>\r\n  </div>\r\n  <button type=\"submit\">Send</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/sign-up/sign-up-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/sign-up/sign-up-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SignUpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpRoutingModule", function() { return SignUpRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up.component */ "./src/app/modules/sign-up/sign-up.component.ts");




var routes = [{ path: '', component: _sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"] }];
var SignUpRoutingModule = /** @class */ (function () {
    function SignUpRoutingModule() {
    }
    SignUpRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SignUpRoutingModule);
    return SignUpRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/sign-up/sign-up.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/sign-up/sign-up.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration-form {\n  display: flex;\n  flex-direction: column;\n  padding: 1em;\n}\n.registration-form__item {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1em;\n  text-align: center;\n}\n.registration-form__label {\n  display: flex;\n  flex-direction: column;\n}\n.ng-invalid.ng-touched:not(form) {\n  border: 1px solid red;\n}\n.invalid-feedback {\n  font-size: 0.7em;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaWduLXVwL0M6XFxVc2Vyc1xcRG15dHJvX0Zyb2xvdjFcXFdlYnN0b3JtUHJvamVjdHNcXGRtdC9zcmNcXGFwcFxcbW9kdWxlc1xcc2lnbi11cFxcc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0FDQUY7QURFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDRko7QURNQTtFQUNFLHFCQUFBO0FDSEY7QURNQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0cmF0aW9uLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgcGFkZGluZzogMWVtO1xyXG5cclxuICAmX19pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxufVxyXG5cclxuLm5nLWludmFsaWQubmctdG91Y2hlZDpub3QoZm9ybSkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZFxyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiIsIi5yZWdpc3RyYXRpb24tZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDFlbTtcbn1cbi5yZWdpc3RyYXRpb24tZm9ybV9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlZ2lzdHJhdGlvbi1mb3JtX19sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGNvbG9yOiByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/sign-up/sign-up.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/sign-up/sign-up.component.ts ***!
  \******************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_utils_must_match_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/must-match.validator */ "./src/app/utils/must-match.validator.ts");
/* harmony import */ var _core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/firebase/firebase.service */ "./src/app/core/firebase/firebase.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(fb, firebaseService) {
        this.fb = fb;
        this.firebaseService = firebaseService;
    }
    Object.defineProperty(SignUpComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SignUpComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            role: 'user',
        }, {
            validator: Object(src_app_utils_must_match_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'passwordConfirm'),
        });
    };
    SignUpComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.markFormGroupTouchedAndDirty(form);
        console.log(form);
        if (form.valid) {
            var player_1 = {
                login: form.controls.login.value,
                email: form.controls.email.value,
                password: form.controls.password.value,
                role: form.controls.role.value
            };
            this.firebaseService.createUserWithEmailAndPassword(player_1.email, player_1.password)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (r1) { return _this.firebaseService.signInWithEmailAndPassword(player_1.email, player_1.password); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (r2) { return _this.firebaseService.updateUserProfile(player_1.login); }))
                .subscribe(function (r1) {
                _this.firebaseService.signOut();
            });
        }
    };
    SignUpComponent.prototype.markFormGroupTouchedAndDirty = function (formGroup) {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(formGroup.controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var field = _c.value;
                formGroup.controls[field].markAsTouched();
                formGroup.controls[field].markAsDirty();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SignUpComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
    ]; };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/modules/sign-up/sign-up.component.scss")]
        })
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/modules/sign-up/sign-up.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/sign-up/sign-up.module.ts ***!
  \***************************************************/
/*! exports provided: SignUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function() { return SignUpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up-routing.module */ "./src/app/modules/sign-up/sign-up-routing.module.ts");
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up.component */ "./src/app/modules/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var SignUpModule = /** @class */ (function () {
    function SignUpModule() {
    }
    SignUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_3__["SignUpRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ],
            exports: [
                _sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
            ]
        })
    ], SignUpModule);
    return SignUpModule;
}());



/***/ }),

/***/ "./src/app/utils/must-match.validator.ts":
/*!***********************************************!*\
  !*** ./src/app/utils/must-match.validator.ts ***!
  \***********************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ })

}]);
//# sourceMappingURL=modules-sign-up-sign-up-module.js.map