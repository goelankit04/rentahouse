(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~profile-profile-module"],{

/***/ "./src/app/user/profile/change-current-password/change-current-password.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/user/profile/change-current-password/change-current-password.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ChangeCurrentPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeCurrentPasswordComponent", function() { return ChangeCurrentPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _app_common_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-common/message */ "./src/app/app-common/message.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















function ChangeCurrentPasswordComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getErrorMessage("current_password"), " ");
} }
function ChangeCurrentPasswordComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangeCurrentPasswordComponent_div_8_div_1_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["current_password"].errors);
} }
function ChangeCurrentPasswordComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.getErrorMessage("new_password"), " ");
} }
function ChangeCurrentPasswordComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hint: abc@123");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChangeCurrentPasswordComponent_div_13_div_3_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["new_password"].errors);
} }
function ChangeCurrentPasswordComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.getErrorMessage("confirm_new_password"), " ");
} }
function ChangeCurrentPasswordComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangeCurrentPasswordComponent_div_18_div_1_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["confirm_new_password"].errors);
} }
var _c0 = function (a0) { return { "alert-success": a0 }; };
function ChangeCurrentPasswordComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r3.rsmessage.is_success));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.rsmessage.message);
} }
var _c1 = function (a0) { return { "button_disabled": a0 }; };
// import { MatDialogRef } from '@angular/material';
var ChangeCurrentPasswordComponent = /** @class */ (function () {
    function ChangeCurrentPasswordComponent(_fb, _userService, _authService, snackbar, _toasterService
    // public dialogRef: MatDialogRef<ChangeCurrentPasswordComponent>
    ) {
        this._fb = _fb;
        this._userService = _userService;
        this._authService = _authService;
        this.snackbar = snackbar;
        this._toasterService = _toasterService;
        this.changeCurrentPasswordComponentClass = 'app-change-current-password';
        this.messageToDisplay = '';
        this.rsmessage = {};
    }
    ChangeCurrentPasswordComponent.passwordValidator = function (password) {
        return function (group) {
            var passwordCopy = group.controls[password];
            var hasAlphabet = /(?=.*[a-zA-z])/.test(passwordCopy.value);
            var hasNumber = /(?=.*[0-9])/.test(passwordCopy.value);
            var hasSpecialChar = /(?=.*[!@#\$%\^&\*])/.test(passwordCopy.value);
            var hasMinimumLength = /(?=.{6,})/.test(passwordCopy.value);
            if (hasAlphabet === false) {
                return passwordCopy.setErrors({ leastAlphabet: true });
            }
            else if (hasNumber === false) {
                return passwordCopy.setErrors({ leastNumber: true });
            }
            else if (hasSpecialChar === false) {
                return passwordCopy.setErrors({ leastSpecialChar: true });
            }
            else if (hasMinimumLength === false) {
                return passwordCopy.setErrors({ minimumLength: true });
            }
            else {
                return passwordCopy.setErrors(null);
            }
        };
    };
    ChangeCurrentPasswordComponent.MatchPassword = function (password, confirm_password) {
        return function (group) {
            var ipv = group.controls[password];
            var icpv = group.controls[confirm_password];
            if (ipv.value !== icpv.value) {
                return icpv.setErrors({ notEquivalent: true });
            }
            else {
                return icpv.setErrors(null);
            }
        };
    };
    ChangeCurrentPasswordComponent.prototype.ngOnInit = function () {
        this.user_id = parseInt(localStorage.getItem('id'));
        this.createForm();
    };
    ChangeCurrentPasswordComponent.prototype.createForm = function () {
        this.form = this._fb.group({
            current_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            confirm_new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        }, {
            validator: [
                ChangeCurrentPasswordComponent.passwordValidator('current_password'),
                ChangeCurrentPasswordComponent.passwordValidator('new_password'),
                ChangeCurrentPasswordComponent.MatchPassword('new_password', 'confirm_new_password')
            ]
        });
    };
    ChangeCurrentPasswordComponent.prototype.changeCurrentPassword = function () {
        var _this = this;
        if (this.user_id) {
            var user = {
                current_password: this.form.value.current_password,
                new_password: this.form.value.new_password,
                confirm_new_password: this.form.value.confirm_new_password
            };
            // console.log(user);
            this._authService.changeCurrentPassword(user).subscribe(function (res) {
                // console.log(res);
                localStorage.removeItem('resetPassword');
                _this._toasterService.pop('success', res.message);
                // this.snackbar.open(res.message, '', { duration: 1000 });
                // this.dialogRef.close();
                _this.form.reset();
            }, function (err) {
                // console.log(err);
                _this.snackbar.open(err.error.message, '', { duration: 1000 });
            });
        }
    };
    ChangeCurrentPasswordComponent.prototype.getErrorMessage = function (choice) {
        switch (choice) {
            case 'current_password': {
                return this.form.controls.current_password.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : this.form.controls.current_password.hasError('leastAlphabet')
                        ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].password.leastAlphabet
                        : this.form.controls.current_password.hasError('leastNumber')
                            ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].password.leastNumber
                            : this.form.controls.current_password.hasError('leastSpecialChar')
                                ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].password.leastSpecialChar
                                : this.form.controls.current_password.hasError('minimumLength')
                                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].password.minimumLength
                                    : '';
            }
            case 'new_password': {
                return this.form.controls.new_password.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : this.form.controls.new_password.hasError('leastAlphabet')
                        ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].password.leastAlphabet
                        : this.form.controls.new_password.hasError('leastNumber')
                            ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].password.leastNumber
                            : this.form.controls.new_password.hasError('leastSpecialChar')
                                ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].password.leastSpecialChar
                                : this.form.controls.new_password.hasError('minimumLength')
                                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].password.minimumLength
                                    : '';
            }
            case 'confirm_new_password': {
                return this.form.controls.confirm_new_password.hasError('required')
                    ? 'This field is required'
                    : this.form.controls.confirm_new_password.hasError('notEquivalent')
                        ? 'password does not match'
                        : '';
            }
            default: {
                // No error message to display
            }
        }
    };
    ChangeCurrentPasswordComponent.ɵfac = function ChangeCurrentPasswordComponent_Factory(t) { return new (t || ChangeCurrentPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"])); };
    ChangeCurrentPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangeCurrentPasswordComponent, selectors: [["app-change-current-password"]], hostVars: 2, hostBindings: function ChangeCurrentPasswordComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.changeCurrentPasswordComponentClass);
        } }, decls: 23, vars: 9, consts: [[1, "user_change_password_container"], [3, "formGroup"], [1, "form_group_container"], [1, "md-form"], ["for", "current_password"], ["mdbActive", "", "type", "password", "id", "current_password", "formControlName", "current_password", "autocomplete", "off", 1, "form-control"], [4, "ngIf"], ["for", "new_password"], ["mdbActive", "", "type", "password", "id", "new_password", "formControlName", "new_password", "autocomplete", "off", "placeholder", "hint: abc@123", 1, "form-control"], ["for", "confirm_new_password"], ["mdbActive", "", "type", "password", "id", "confirm_new_password", "formControlName", "confirm_new_password", "autocomplete", "off", "placeholder", "hint: abc@123", 1, "form-control"], ["class", "alert alert-danger h-50", 3, "ngClass", 4, "ngIf"], [1, "reset_button_group", "text-center"], [3, "disabled", "ngClass", "click"], ["class", "alert alert-danger h-50", 4, "ngIf"], [1, "alert", "alert-danger", "h-50"], [1, "input_hints"], [1, "alert", "alert-danger", "h-50", 3, "ngClass"]], template: function ChangeCurrentPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Current Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChangeCurrentPasswordComponent_div_8_Template, 2, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChangeCurrentPasswordComponent_div_13_Template, 4, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Confirm New Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChangeCurrentPasswordComponent_div_18_Template, 2, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ChangeCurrentPasswordComponent_div_19_Template, 2, 4, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeCurrentPasswordComponent_Template_button_click_21_listener() { return ctx.changeCurrentPassword(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Save Changes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["current_password"].touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["new_password"].touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["confirm_new_password"].touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rsmessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.form.invalid));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], encapsulation: 2 });
    return ChangeCurrentPasswordComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeCurrentPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-current-password',
                templateUrl: './change-current-password.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] }]; }, { changeCurrentPasswordComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/user/profile/profile-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/user/profile/profile-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user/profile/user-profile/user-profile.component.ts");
/* harmony import */ var _change_current_password_change_current_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-current-password/change-current-password.component */ "./src/app/user/profile/change-current-password/change-current-password.component.ts");
/* harmony import */ var _user_wallet_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-wallet/wallet/wallet.component */ "./src/app/user/user-wallet/wallet/wallet.component.ts");
/* harmony import */ var _user_order_order_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-order/order/order.component */ "./src/app/user/user-order/order/order.component.ts");








var routes = [
    {
        path: "",
        children: [
            {
                path: ":slug/:tabIndex",
                component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"],
            },
            {
                path: "change/password/:slug",
                component: _change_current_password_change_current_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangeCurrentPasswordComponent"],
            },
            {
                path: "wallet/:slug",
                component: _user_wallet_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__["WalletComponent"],
            },
            {
                path: "order/:slug",
                component: _user_order_order_order_component__WEBPACK_IMPORTED_MODULE_5__["OrderComponent"],
            },
        ],
    },
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
    ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ProfileRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/profile/profile.module.ts":
/*!************************************************!*\
  !*** ./src/app/user/profile/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/user/profile/profile-routing.module.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user/profile/user-profile/user-profile.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-material-module */ "./src/app/app-material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app-bootstrap.module */ "./src/app/app-bootstrap.module.ts");
/* harmony import */ var _user_profile_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile/user-details/user-details.component */ "./src/app/user/profile/user-profile/user-details/user-details.component.ts");
/* harmony import */ var _user_profile_academic_details_academic_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile/academic-details/academic-details.component */ "./src/app/user/profile/user-profile/academic-details/academic-details.component.ts");
/* harmony import */ var _change_current_password_change_current_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./change-current-password/change-current-password.component */ "./src/app/user/profile/change-current-password/change-current-password.component.ts");
/* harmony import */ var _user_wallet_user_wallet_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../user-wallet/user-wallet.module */ "./src/app/user/user-wallet/user-wallet.module.ts");
/* harmony import */ var _user_order_user_order_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../user-order/user-order.module */ "./src/app/user/user-order/user-order.module.ts");














var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProfileModule });
    ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_0__["AppCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_7__["AppBootstrapModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
                _user_wallet_user_wallet_module__WEBPACK_IMPORTED_MODULE_11__["UserWalletModule"],
                _user_order_user_order_module__WEBPACK_IMPORTED_MODULE_12__["UserOrderModule"],
            ]] });
    return ProfileModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"],
        _user_profile_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"],
        _user_profile_academic_details_academic_details_component__WEBPACK_IMPORTED_MODULE_9__["AcademicDetailsComponent"],
        _change_current_password_change_current_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangeCurrentPasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_0__["AppCommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
        _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_7__["AppBootstrapModule"],
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
        _user_wallet_user_wallet_module__WEBPACK_IMPORTED_MODULE_11__["UserWalletModule"],
        _user_order_user_order_module__WEBPACK_IMPORTED_MODULE_12__["UserOrderModule"]], exports: [_change_current_password_change_current_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangeCurrentPasswordComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_0__["AppCommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                    _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_7__["AppBootstrapModule"],
                    _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
                    _user_wallet_user_wallet_module__WEBPACK_IMPORTED_MODULE_11__["UserWalletModule"],
                    _user_order_user_order_module__WEBPACK_IMPORTED_MODULE_12__["UserOrderModule"],
                ],
                declarations: [
                    _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"],
                    _user_profile_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"],
                    _user_profile_academic_details_academic_details_component__WEBPACK_IMPORTED_MODULE_9__["AcademicDetailsComponent"],
                    _change_current_password_change_current_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangeCurrentPasswordComponent"],
                ],
                entryComponents: [_change_current_password_change_current_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangeCurrentPasswordComponent"]],
                exports: [_change_current_password_change_current_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangeCurrentPasswordComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/profile/user-profile/academic-details/academic-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/user/profile/user-profile/academic-details/academic-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AcademicDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicDetailsComponent", function() { return AcademicDetailsComponent; });
/* harmony import */ var _app_common_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../app-common/message */ "./src/app/app-common/message.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");









var AcademicDetailsComponent = /** @class */ (function () {
    function AcademicDetailsComponent(_fb, _userService) {
        this._fb = _fb;
        this._userService = _userService;
        this.academicDetailsComponentClass = 'app-academic-details';
        this.successMessages = [];
        this.errorMessages = [];
    }
    AcademicDetailsComponent.prototype.ngOnInit = function () {
        this.user_id = parseInt(localStorage.getItem('id'));
        this.createForm();
    };
    AcademicDetailsComponent.prototype.createForm = function () {
        this.form = this._fb.group({
            university: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            high_school: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            primary_school: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    };
    AcademicDetailsComponent.prototype.updateAcademicProfile = function () {
        if (this.user_id) {
            var user = {
                user_id: this.user_id,
                university: this.form.value.university,
                high_school: this.form.value.high_school,
                primary_school: this.form.value.primary_school
            };
            // console.log(user);
            // this._userService.resetUsersCurrentPassword(user).subscribe(
            //   (res: any) => {
            //     this.successMessages.push(res.message);
            //   },
            //   (err) => {
            //     this.errorMessages.push(err.error.message[0]);
            //   }
            // );
        }
    };
    AcademicDetailsComponent.prototype.getErrorMessage = function (choice) {
        switch (choice) {
            case 'university': {
                return this.form.controls.university.hasError('required') ? _app_common_message__WEBPACK_IMPORTED_MODULE_0__["Message"].required : '';
            }
            case 'primary_school': {
                return this.form.controls.primary_school.hasError('required') ? _app_common_message__WEBPACK_IMPORTED_MODULE_0__["Message"].required : '';
            }
            case 'high_school': {
                return this.form.controls.high_school.hasError('required') ? 'This field is required' : '';
            }
            default: {
                // No error message to display
            }
        }
    };
    AcademicDetailsComponent.ɵfac = function AcademicDetailsComponent_Factory(t) { return new (t || AcademicDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
    AcademicDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AcademicDetailsComponent, selectors: [["app-academic-details"]], hostVars: 2, hostBindings: function AcademicDetailsComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.academicDetailsComponentClass);
        } }, decls: 0, vars: 0, template: function AcademicDetailsComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return AcademicDetailsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AcademicDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-academic-details',
                templateUrl: './academic-details.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, { academicDetailsComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/user/profile/user-profile/user-details/user-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/user/profile/user-profile/user-details/user-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");
/* harmony import */ var _app_common_country_code_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app-common/country_code.service */ "./src/app/app-common/country_code.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _app_common_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app-common/message */ "./src/app/app-common/message.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _app_common_configuration_countries_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app-common/configuration/countries.config */ "./src/app/app-common/configuration/countries.config.ts");
/* harmony import */ var _auth_ip_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../auth/ip.service */ "./src/app/auth/ip.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../amplitude/amplitude.service */ "./src/app/amplitude/amplitude.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/datepicker.js");
/* harmony import */ var _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../app-common/pre-loader/pre-loader.component */ "./src/app/app-common/pre-loader/pre-loader.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _common_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../common/ellipsis-pipe */ "./src/app/common/ellipsis-pipe.ts");





























function UserDetailsComponent_app_pre_loader_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-pre-loader", 43);
} }
function UserDetailsComponent_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Update Profile Picture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserDetailsComponent_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Upload Profile Picture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserDetailsComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r15.getErrorMessage("first_name"), " ");
} }
function UserDetailsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserDetailsComponent_div_13_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.form.controls["first_name"].errors);
} }
function UserDetailsComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r16.getErrorMessage("last_name"), " ");
} }
function UserDetailsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserDetailsComponent_div_18_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.form.controls["last_name"].errors);
} }
function UserDetailsComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r17.getErrorMessage("email"), " ");
} }
function UserDetailsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserDetailsComponent_div_23_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.form.controls["email"].errors);
} }
function UserDetailsComponent_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r18.getErrorMessage("dob"), " ");
} }
function UserDetailsComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserDetailsComponent_div_45_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.form.controls["dob"].errors);
} }
function UserDetailsComponent_span_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "No such country found");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function UserDetailsComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailsComponent_span_59_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); var country_r19 = ctx.$implicit; var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r20.selectCountryCode(country_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "ellipsis");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var country_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 2, country_r19.country_name, 24));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](country_r19.mobile_country_code);
} }
function UserDetailsComponent_div_64_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r22.getErrorMessage("fide_rating"), " ");
} }
function UserDetailsComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserDetailsComponent_div_64_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.form.controls["fide_rating"].errors);
} }
function UserDetailsComponent_div_69_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r23.getErrorMessage("fide_id"), " ");
} }
function UserDetailsComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserDetailsComponent_div_69_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r11.form.controls["fide_id"].errors);
} }
function UserDetailsComponent_div_74_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r24.getErrorMessage("aicf_id"), " ");
} }
function UserDetailsComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserDetailsComponent_div_74_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r12.form.controls["aicf_id"].errors);
} }
function UserDetailsComponent_div_83_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r25.getErrorMessage("country"), " ");
} }
function UserDetailsComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserDetailsComponent_div_83_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r13.form.controls["country"].errors);
} }
function UserDetailsComponent_app_pre_loader_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-pre-loader");
} }
var _c0 = function (a0) { return { show_selection_container: a0 }; };
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(_userService, _authService, _countryCode, _fb, snackbar, country, _toasterService, _ipApi, _amps) {
        this._userService = _userService;
        this._authService = _authService;
        this._countryCode = _countryCode;
        this._fb = _fb;
        this.snackbar = snackbar;
        this.country = country;
        this._toasterService = _toasterService;
        this._ipApi = _ipApi;
        this._amps = _amps;
        this.userDetailsComponentClass = 'app-user-details';
        this.BASE_API_URL = '';
        this.isLoading = true;
        this.img_url = '/assets/profile/profile.png';
        this.successMessages = [];
        this.errorMessages = [];
        this.checked = false;
        this.successStatus = false;
        this.country_codes = [];
        this.userData = [];
        this.selected = 'invalid';
        this.selectedCountry = {
            name: 'India',
            code: 'IN',
            mobile_code: '+91',
            mobile_length: [10]
        };
        this.isAvailable = true;
        this.placeholder = '/assets/profile/placeholder.png';
        this.statement = [
            "error",
            "User Details not found",
            "Please contact the nurtr team"
        ];
        this.genders = [
            { value: 'male', text: 'Male' },
            { value: 'female', text: 'Female' }
        ];
        this.countryDetail = {
            name: '',
            code: ''
        };
        this.showCountrySelector = false;
        this.showCountryBox = false;
        this.countries = [];
        this.filteredStates = [];
        this.filteredCountry = [];
        this.isInvalidCountry = false;
        // AuthService.BASE_API_URL = environment.auth_target;
    }
    UserDetailsComponent.mobileValidator = function (mobile) {
        return function (group) {
            var mobileCopy = group.controls[mobile];
            var hasAplhabet = /(?=.*[a-zA-Z])/.test(mobileCopy.value);
            var hasSpecialChar = /(?=.*[`~!@#\$%\^&\*\[\]\{\}'"<>?\\/|,.:;_=])/.test(mobileCopy.value);
            var hasMinimumLength = /(?=.{5,})/.test(mobileCopy.value);
            if (hasAplhabet === !false) {
                return mobileCopy.setErrors({ leastAlphabet: true });
            }
            else if (hasSpecialChar === !false) {
                return mobileCopy.setErrors({ leastSpecialChar: true });
            }
            else if (hasMinimumLength === false) {
                return mobileCopy.setErrors({ minimumLength: true });
            }
            else {
                return mobileCopy.setErrors(null);
            }
        };
    };
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredStates = _app_common_configuration_countries_config__WEBPACK_IMPORTED_MODULE_5__["countries"];
        this.filteredCountry = _app_common_configuration_countries_config__WEBPACK_IMPORTED_MODULE_5__["countries"];
        this._ipApi.getUserInfo().subscribe(function (res) {
            // finding country
            var country_ip = _app_common_configuration_countries_config__WEBPACK_IMPORTED_MODULE_5__["countries"].filter(function (country) { return country.country_name === res.country; });
            if (country_ip) {
                _this.selectCountry(country_ip);
            }
        }, function (err) {
            // console.log(err);
        });
        // this.isLoading = true;
        // this.country_codes = this._countryCode.getCountryCode();
        this.createForm();
        this.getProfile();
    };
    UserDetailsComponent.prototype.selectCountry = function (country) {
        this.countryDetail.name = country.country_name;
        this.countryDetail.code = country.country_code;
        // this.form.controls.country.setValue(this.form.value.countryDetail);
        this.showCountryBox = false;
    };
    UserDetailsComponent.prototype.getProfile = function () {
        var _this = this;
        this.isLoading = true;
        this._authService.getUserProfileDetail().subscribe(function (res) {
            _this.isLoading = false;
            _this.userData = res.data.users.user;
            _this.profileImage = _this.userData.img_url;
            _this.updateForm();
            _this.mobile_code = _this.userData.mobile_country_code;
            _this.mobile_number = _this.userData.mobile.replace(_this.mobile_code, '');
            _this.nothingToDisplay = false;
        }, function (error) {
            _this.isLoading = false;
            _this.nothingToDisplay = true;
            // console.log(error);
        });
    };
    UserDetailsComponent.prototype.createForm = function () {
        this.form = this._fb.group({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^[A-Za-z. ]+$/)
            ]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^[A-Za-z. ]+$/)
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ]),
            mobile_country_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^[+ 0-9]+$/)
            ]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/[0-9]/)
            ]),
            whatsapp_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/[0-9]/)]),
            fide_rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/[0-9]/)]),
            aicf_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/[0-9]/)]),
            fide_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/[0-9]/)]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            // Shipping Address
            landmark: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^[A-Za-z. ]+$/)]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^[A-Za-z. ]+$/)]),
            zip_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/[0-9]/)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^[A-Za-z. ]+$/)
            ]),
            // Billing Address
            // billing_street_address: new FormControl(''),
            // billing_landmark: new FormControl(''),
            // billing_city: new FormControl('', [
            //   Validators.pattern(/^[A-Za-z. ]+$/)
            // ]),
            // billing_state: new FormControl('', [
            //   ,
            //   Validators.pattern(/^[A-Za-z. ]+$/)
            // ]),
            // billing_zipcode: new FormControl('', [Validators.pattern(/[0-9]/)]),
            // billing_country: new FormControl('', [
            //   Validators.pattern(/^[A-Za-z. ]+$/)
            // ]),
            // social media links
            facebook_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            twitter_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            linkedin_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            instagram_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        }, {
            validator: [
                UserDetailsComponent.mobileValidator('mobile'),
                UserDetailsComponent.mobileValidator('whatsapp_number')
            ]
        });
        this.onChanges();
    };
    UserDetailsComponent.prototype.onChanges = function () {
        var _this = this;
        this.form.get('country').valueChanges.subscribe(function (value) {
            // this.filteredStates = this.filterStates(value);
            _this.isInvalidCountry = false;
        });
    };
    UserDetailsComponent.prototype.filterStates = function (country_name) {
        // return this.country.getFilteredCountry(country_name);
    };
    UserDetailsComponent.prototype.selectCountryCode = function (country) {
        this.selectedCountry.name = country.country_name;
        this.selectedCountry.code = country.country_code;
        this.selectedCountry.mobile_code = country.mobile_country_code;
        this.selectedCountry.mobile_length =
            country.country_mobile_length[0] === undefined
                ? 10
                : country.country_mobile_length[0];
        // this.toggleCountrySelector();
    };
    // toggleCountrySelector() {
    //   this.showCountrySelector = !this.showCountrySelector;
    // }
    // getCountrySuggestion(countryInput: string) {
    //   this.filteredStates = countries.filter(
    //     country =>
    //       country.country_name.toLowerCase().indexOf(countryInput.toLowerCase()) >
    //       -1
    //   );
    // }
    // searchCountryForDropDown(countryName: string) {
    //   this.showCountryBox = true;
    //   this.filteredCountry = countries.filter(
    //     country =>
    //       country.country_name.toLowerCase().indexOf(countryName.toLowerCase()) >
    //       -1
    //   );
    //   this.countryDetail.code = null;
    //   console.log(this.filteredCountry);
    // }
    UserDetailsComponent.prototype.updateForm = function () {
        this.selected = this.userData.gender;
        this.form.controls['first_name'].setValue(this.userData.first_name);
        this.form.controls['last_name'].setValue(this.userData.last_name);
        this.form.controls['email'].setValue(this.userData.email);
        this.form.controls['mobile_country_code'].setValue(this.userData.mobile_country_code);
        this.form.controls['mobile'].setValue(this.userData.mobile);
        this.form.controls['whatsapp_number'].setValue(this.userData.whatsapp_number);
        this.form.controls['fide_rating'].setValue(this.userData.fide_rating);
        this.form.controls['aicf_id'].setValue(this.userData.aicf_id);
        this.form.controls['fide_id'].setValue(this.userData.fide_id);
        this.form.controls['dob'].setValue(this.userData.dob);
        // this.form.controls['gender'].setValue(this.userData.gender);
        // this.form.controls['shipping_street_address'].setValue(
        //   this.userData.shipping_address.street_address
        // );
        this.form.controls['landmark'].setValue(this.userData.shipping_address.landmark);
        this.form.controls['city'].setValue(this.userData.shipping_address.city);
        this.form.controls['state'].setValue(this.userData.shipping_address.state);
        this.form.controls['zip_code'].setValue(this.userData.shipping_address.zip_code);
        this.form.controls['country'].setValue(this.userData.shipping_address.country);
        // this.form.controls['billing_street_address'].setValue(
        //   this.userData.permanent_address.street_address
        // );
        // this.form.controls['billing_landmark'].setValue(
        //   this.userData.permanent_address.landmark
        // );
        // this.form.controls['billing_city'].setValue(
        //   this.userData.permanent_address.city
        // );
        // this.form.controls['billing_state'].setValue(
        //   this.userData.permanent_address.state
        // );
        // this.form.controls['billing_zipcode'].setValue(
        //   this.userData.permanent_address.zip_code
        // );
        // this.form.controls['billing_country'].setValue(
        //   this.userData.permanent_address.country
        // );
        this.form.controls['facebook_url'].setValue(this.userData.facebook_url);
        this.form.controls['twitter_url'].setValue(this.userData.twitter_url);
        this.form.controls['linkedin_url'].setValue(this.userData.linkedin_url);
        this.form.controls['instagram_url'].setValue(this.userData.instagram_url);
    };
    UserDetailsComponent.prototype.updateUserProfile = function () {
        var _this = this;
        // console.log('updating profile ...');
        // if (this.form.valid) {
        if (this.form.value.first_name && this.form.value.last_name) {
            this.isLoading = true;
            var user = {
                first_name: this.form.value.first_name,
                last_name: this.form.value.last_name,
                email: this.form.value.email,
                mobile: this.form.value.mobile,
                whatsapp_number: this.form.value.whatsapp_number,
                fide_rating: this.form.value.fide_rating,
                aicf_id: this.form.value.aicf_id,
                fide_id: this.form.value.fide_id,
                dob: this.form.value.dob,
                gender: this.gender,
                shipping_address: {
                    landmark: this.form.value.landmark,
                    city: this.form.value.city,
                    country: this.form.value.country,
                    state: this.form.value.state,
                    zip_code: this.form.value.zip_code
                },
                permanent_address: {
                    landmark: this.form.value.landmark,
                    city: this.form.value.city,
                    country: this.form.value.country,
                    state: this.form.value.state,
                    zip_code: this.form.value.zip_code
                },
                facebook_url: this.form.value.facebook_url,
                twitter_url: this.form.value.twitter_url,
                instagram_url: this.form.value.instagram_url,
                linkedin_url: this.form.value.linkedin_url
            };
            this._authService.updateUserDetail(user).subscribe(function (res) {
                _this._amps.setUserProperties({
                    dob: _this.form.value.dob,
                    fide_rating: _this.form.value.fide_rating,
                    gender: _this.gender,
                    city: _this.form.value.city,
                    country: _this.form.value.country,
                    state: _this.form.value.state
                });
                _this.isLoading = false;
                _this.snackbar.open(res.message, '', { duration: 1000 });
            }, function (err) {
                _this.isLoading = false;
            });
            // }
        }
    };
    UserDetailsComponent.prototype.getErrorMessage = function (choice) {
        switch (choice) {
            case 'first_name': {
                return this.form.controls.first_name.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : this.form.controls.first_name.hasError('pattern')
                        ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].firstName.invalid
                        : '';
            }
            case 'last_name': {
                return this.form.controls.last_name.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : this.form.controls.last_name.hasError('pattern')
                        ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].lastName.invalid
                        : '';
            }
            case 'email': {
                return this.form.controls.email.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : this.form.controls.email.hasError('pattern')
                        ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].email.invalid
                        : '';
            }
            case 'mobile_country_code': {
                return this.form.controls.mobile_country_code.hasError('required')
                    ? 'Required'
                    : this.form.controls.mobile_country_code.hasError('pattern')
                        ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].mobileCountryCode.invalid
                        : '';
            }
            case 'mobile': {
                return this.form.controls.mobile.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : this.form.controls.mobile.hasError('leastAlphabet')
                        ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].mobile.leastAlphabet
                        : this.form.controls.mobile.hasError('leastSpecialChar')
                            ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].mobile.leastSpecialChar
                            : this.form.controls.mobile.hasError('minimumLength')
                                ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].mobile.minimumLength
                                : '';
            }
            case 'whatsapp_number': {
                return this.form.controls.whatsapp_number.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : this.form.controls.whatsapp_number.hasError('leastAlphabet')
                        ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].mobile.leastAlphabet
                        : this.form.controls.whatsapp_number.hasError('leastSpecialChar')
                            ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].mobile.leastSpecialChar
                            : this.form.controls.whatsapp_number.hasError('minimumLength')
                                ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].mobile.minimumLength
                                : '';
            }
            case 'fide_rating': {
                return this.form.controls.fide_rating.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : this.form.controls.fide_rating.hasError('pattern')
                        ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].rating.invalid
                        : '';
            }
            case 'aicf_id': {
                return this.form.controls.aicf_id.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : this.form.controls.aicf_id.hasError('pattern')
                        ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].rating.invalid
                        : '';
            }
            case 'fide_id': {
                return this.form.controls.fide_id.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : this.form.controls.fide_id.hasError('pattern')
                        ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].rating.invalid
                        : '';
            }
            case 'dob': {
                return this.form.controls.dob.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : this.form.controls.dob.hasError('pattern')
                        ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].dateOfBirth.invalid
                        : '';
            }
            // Shipping Address
            case 'shipping_street_address': {
                return this.form.controls.shipping_street_address.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : '';
            }
            case 'shipping_landmark': {
                return this.form.controls.shipping_landmark.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : '';
            }
            case 'city': {
                return this.form.controls.city.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : '';
            }
            case 'state': {
                return this.form.controls._state.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : '';
            }
            case 'shipping_zipcode': {
                return this.form.controls.shipping_zipcode.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : '';
            }
            case 'country': {
                return this.form.controls.country.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : '';
            }
            // Billing Address
            case 'billing_street_address': {
                return this.form.controls.billing_street_address.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : '';
            }
            case 'billing_landmark': {
                return this.form.controls.billing_landmark.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : '';
            }
            case 'billing_city': {
                return this.form.controls.billing_city.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : '';
            }
            case 'billing_state': {
                return this.form.controls.billing_state.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : '';
            }
            case 'billing_zipcode': {
                return this.form.controls.billing_zipcode.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : '';
            }
            case 'billing_country': {
                return this.form.controls.billing_country.hasError('required')
                    ? _app_common_message__WEBPACK_IMPORTED_MODULE_3__["Message"].required
                    : '';
            }
            default: {
                // No error message to display
            }
        }
    };
    UserDetailsComponent.prototype.onSelectionChange = function (gender) {
        this.gender = gender;
    };
    UserDetailsComponent.prototype.handleFileSelect = function (event) {
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.onload = function (e) { };
            reader.readAsDataURL(file);
        }
    };
    UserDetailsComponent.prototype.fileChange = function (event) {
        var _this = this;
        // this.loader = true;
        this.isAvailable = false;
        var user_profile_image = event.target.files;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].auth_target + "/aws/profile/image/upload";
        this.makeFileRequest(this.url, [], user_profile_image).then(function (result) {
            _this.isAvailable = true;
            // console.log('bhai result');
        }, function (error) {
            // this.loader = false;
        });
    };
    UserDetailsComponent.prototype.makeFileRequest = function (url, params, files) {
        var that = this;
        that.imageLoader = true;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append('user_profile_image', files[0], files[0].name);
            (xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 ||
                        xhr.status === 201 ||
                        xhr.status === 205 ||
                        xhr.status === 304) {
                        that.imageLoader = false;
                        var profileImage2 = JSON.parse(xhr.response).data
                            .profile_image_url;
                        that.profileImage = profileImage2;
                        if (JSON.parse(xhr.response).message === 'Please select valid file') {
                        }
                        else {
                            that._toasterService.pop('success', 'File Uploaded Successfully !!');
                        }
                    }
                    else {
                    }
                }
            }),
                function (error) { };
            xhr.open('PATCH', url, true);
            xhr.setRequestHeader('enctype', 'multipart/form-data');
            xhr.setRequestHeader('accesstoken', localStorage.getItem('access_token'));
            xhr.send(formData);
        });
    };
    UserDetailsComponent.prototype.copyAddress = function () {
        this.checked = !this.checked;
        if (this.checked) {
            var backUpData = {
                sa: this.form.controls['billing_street_address'].value,
                lm: this.form.controls['billing_landmark'].value,
                ct: this.form.controls['billing_city'].value,
                st: this.form.controls['billing_state'].value,
                zc: this.form.controls['billing_zipcode'].value,
                co: this.form.controls['billing_country'].value
            };
            this.form.controls['billing_street_address'].setValue(this.form.controls['shipping_street_address'].value);
            this.form.controls['billing_landmark'].setValue(this.form.controls['shipping_landmark'].value);
            this.form.controls['billing_city'].setValue(this.form.controls['shipping_city'].value);
            this.form.controls['billing_state'].setValue(this.form.controls['shipping_state'].value);
            this.form.controls['billing_zipcode'].setValue(this.form.controls['shipping_zipcode'].value);
            this.form.controls['billing_country'].setValue(this.form.controls['shipping_country'].value);
        }
        else {
            this.form.controls['billing_street_address'].setValue(this.userData.permanent_address.street_address);
            this.form.controls['billing_landmark'].setValue(this.userData.permanent_address.landmark);
            this.form.controls['billing_city'].setValue(this.userData.permanent_address.city);
            this.form.controls['billing_state'].setValue(this.userData.permanent_address.state);
            this.form.controls['billing_zipcode'].setValue(this.userData.permanent_address.zip_code);
            this.form.controls['billing_country'].setValue(this.userData.permanent_address.country);
        }
    };
    UserDetailsComponent.prototype.copyAddressLive = function () {
        if (this.checked) {
            this.form.controls['billing_street_address'].setValue(this.form.controls['shipping_street_address'].value);
            this.form.controls['billing_landmark'].setValue(this.form.controls['shipping_landmark'].value);
            this.form.controls['billing_city'].setValue(this.form.controls['shipping_city'].value);
            this.form.controls['billing_state'].setValue(this.form.controls['shipping_state'].value);
            this.form.controls['billing_zipcode'].setValue(this.form.controls['shipping_zipcode'].value);
            this.form.controls['billing_country'].setValue(this.form.controls['shipping_country'].value);
        }
    };
    UserDetailsComponent.ɵfac = function UserDetailsComponent_Factory(t) { return new (t || UserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_common_country_code_service__WEBPACK_IMPORTED_MODULE_1__["CountryCodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_common_country_code_service__WEBPACK_IMPORTED_MODULE_1__["CountryCodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_auth_ip_service__WEBPACK_IMPORTED_MODULE_6__["IpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_11__["AmplitudeService"])); };
    UserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: UserDetailsComponent, selectors: [["app-user-details"]], hostVars: 2, hostBindings: function UserDetailsComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.userDetailsComponentClass);
        } }, decls: 88, vars: 36, consts: [[1, "card_div"], [1, "image_section"], [3, "src"], ["class", "imageLoad", 4, "ngIf"], [1, "file_upload"], ["for", "file-input", "class", "profile_text", 4, "ngIf"], ["type", "file", "id", "file-input", "accept", "image/png, image/jpeg, image/svg, image/jpg, image/tiff", 3, "change"], [1, "form_field", 3, "formGroup"], [1, "section"], ["type", "text", "formControlName", "first_name", 3, "value"], [4, "ngIf"], ["type", "text", "formControlName", "last_name", 3, "value"], ["type", "text", "readonly", "", "formControlName", "email", 3, "value"], [1, "section", "gender"], ["type", "radio", "name", "gender", "value", "male", 1, "radio_btn", 3, "checked", "change"], [1, "name"], ["type", "radio", "name", "gender", "value", "female", 1, "radio_btn", 3, "checked", "change"], [1, "section", "dob"], [1, "input_field", "material_angular_component"], [1, "drop-down"], ["matInput", "", "readonly", "", "formControlName", "dob", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], [1, "section", "mobile"], [1, "mobile_number_entry"], [1, "country_code"], ["type", "text", "readonly", "", "placeholder", "Mobile", "formControlName", "mobile", 3, "value"], [1, "selection_container", 3, "ngClass"], [1, "search_bar_container"], [1, "country_suggestion_container"], ["class", "no_country_found", 4, "ngIf"], ["class", "country_with_code", 3, "click", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "fide_rating", 3, "value"], ["type", "number", "formControlName", "fide_id", 3, "value"], ["type", "text", "formControlName", "aicf_id", 3, "value"], [1, "section", "address"], ["type", "text", "formControlName", "landmark", "placeholder", "Flat / House No. / Building / Street / Landmark", 3, "value"], ["type", "text", "formControlName", "city", "placeholder", "City ", 3, "value"], ["type", "text", "formControlName", "state", "placeholder", "State", 3, "value"], ["type", "number", "formControlName", "zip_code", "placeholder", "Zipcode", 3, "value"], ["type", "text", "formControlName", "country", "placeholder", "Country *", "readonly", "", 3, "value"], [1, "section", "submit_btn", "text-center"], ["type", "button", 3, "click"], [1, "imageLoad"], ["for", "file-input", 1, "profile_text"], ["class", "alert alert-danger h-50", 4, "ngIf"], [1, "alert", "alert-danger", "h-50"], [1, "no_country_found"], [1, "country_with_code", 3, "click"]], template: function UserDetailsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, UserDetailsComponent_app_pre_loader_3_Template, 1, 0, "app-pre-loader", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, UserDetailsComponent_label_5_Template, 2, 0, "label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, UserDetailsComponent_label_6_Template, 2, 0, "label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UserDetailsComponent_Template_input_change_7_listener($event) { return ctx.fileChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "First Name *");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, UserDetailsComponent_div_13_Template, 2, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Last Name *");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, UserDetailsComponent_div_18_Template, 2, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Email Address *");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, UserDetailsComponent_div_23_Template, 2, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Gender ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UserDetailsComponent_Template_input_change_29_listener() { return ctx.onSelectionChange("male"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Male");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UserDetailsComponent_Template_input_change_33_listener() { return ctx.onSelectionChange("female"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Female");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Date of Birth");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "mat-form-field", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "mat-datepicker-toggle", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "mat-datepicker", null, 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, UserDetailsComponent_div_45_Template, 2, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Mobile Number *");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](53, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](54, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](56, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, UserDetailsComponent_span_58_Template, 5, 0, "span", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, UserDetailsComponent_span_59_Template, 6, 5, "span", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "Fide rating");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](63, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, UserDetailsComponent_div_64_Template, 2, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Fide ID");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](68, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, UserDetailsComponent_div_69_Template, 2, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "AICF ID");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](73, "input", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, UserDetailsComponent_div_74_Template, 2, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "Personal Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](78, "input", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](79, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](80, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](81, "input", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](82, "input", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](83, UserDetailsComponent_div_83_Template, 2, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "button", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserDetailsComponent_Template_button_click_85_listener() { return ctx.updateUserProfile(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, "Save Changes");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, UserDetailsComponent_app_pre_loader_87_Template, 1, 0, "app-pre-loader", 10);
        } if (rf & 2) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](44);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx.profileImage ? ctx.profileImage : ctx.placeholder, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.imageLoader);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.profileImage);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.profileImage);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.userData == null ? null : ctx.userData.first_name);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.controls["first_name"].enabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.userData == null ? null : ctx.userData.last_name);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.controls["last_name"].enabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.userData == null ? null : ctx.userData.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.controls["email"].enabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx.userData.gender == "male");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx.userData.gender == "female");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.controls["dob"].enabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("+", ctx.mobile_code, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.mobile_number);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](34, _c0, ctx.showCountrySelector));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.filteredStates.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.filteredStates);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.userData == null ? null : ctx.userData.fide_rating);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.controls["fide_rating"].enabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.userData == null ? null : ctx.userData.fide_id);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.controls["fide_id"].enabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.userData == null ? null : ctx.userData.aicf_id);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.controls["aicf_id"].enabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.userData == null ? null : ctx.userData.permanent_address == null ? null : ctx.userData.permanent_address.landmark);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.userData == null ? null : ctx.userData.permanent_address == null ? null : ctx.userData.permanent_address.city);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.userData == null ? null : ctx.userData.permanent_address == null ? null : ctx.userData.permanent_address.state);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.userData == null ? null : ctx.userData.permanent_address == null ? null : ctx.userData.permanent_address.zip_code);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.userData == null ? null : ctx.userData.permanent_address == null ? null : ctx.userData.permanent_address.country);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.controls["country"].enabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_16__["PreLoaderComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"]], pipes: [_common_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_18__["EllipsisPipe"]], styles: [".app-user-details[_ngcontent-%COMP%]   .cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  color: black !important;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%] {\n  width: 92%;\n  margin: auto;\n  margin-top: 3%;\n  display: flex;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_section[_ngcontent-%COMP%] {\n  margin-bottom: 8%;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 10% 0px;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border: 1px solid #ececec;\n  position: relative;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_section[_ngcontent-%COMP%]   .app-pre-loader[_ngcontent-%COMP%]   .spinner-background[_ngcontent-%COMP%] {\n  position: absolute !important;\n  top: 60px !important;\n  left: 60px;\n  width: 2px;\n  height: 20px;\n  right: none;\n  bottom: none;\n  background-color: transparent !important;\n  display: block;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_section[_ngcontent-%COMP%]   .profile_text[_ngcontent-%COMP%] {\n  color: #a0ce4e;\n  border: 1px solid #a0ce4e;\n  padding: 10px 8px;\n  font-weight: 400;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_section[_ngcontent-%COMP%]   .profile_text[_ngcontent-%COMP%]:hover {\n  background: #a0cd4e;\n  color: white;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .form_field[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  width: 50%;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%] {\n  border: 1px solid #bdbdbd;\n  border-radius: 5px;\n  padding: 1.5% 2%;\n  color: black;\n  width: 100%;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]:focus {\n  border: 1px solid white !important;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .alert-danger[_ngcontent-%COMP%] {\n  margin-top: 0px !important;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   input[type='number'][_ngcontent-%COMP%] {\n  border: 1px solid #bdbdbd;\n  border-radius: 5px;\n  padding: 1.5% 2%;\n  color: black;\n  width: 100%;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #666666;\n  font-size: 15px;\n  font-weight: 400;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .dob[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .dob[_ngcontent-%COMP%]   .mat-form-field-suffix[_ngcontent-%COMP%] {\n  font-size: 24px;\n  outline: none;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .dob[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0.7em !important;\n  color: #999999 !important;\n  font-size: 15px !important;\n  padding-top: 10px !important;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .dob[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 60% !important;\n  border: 1px solid #bdbdbd;\n  border-radius: 5px;\n  padding-left: 16px;\n  font-size: 16px;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .dob[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 6px 0px;\n  border-top: 0px;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  margin: auto;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .mobile_number_entry[_ngcontent-%COMP%] {\n  border: 1px solid #cccccc;\n  border-radius: 6px;\n  margin: 0px 0px 30px 0px;\n  padding: 2px 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 52px;\n  width: 100%;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .mobile_number_entry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .mobile_number_entry[_ngcontent-%COMP%]   .country_code[_ngcontent-%COMP%] {\n  border-right: 1px solid #cccccc;\n  padding: 0 12px;\n  display: flex;\n  flex-direction: row;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  align-items: center;\n  cursor: pointer;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .mobile_number_entry[_ngcontent-%COMP%]   .country_code[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .mobile_number_entry[_ngcontent-%COMP%]   .country_code[_ngcontent-%COMP%]   .drop_down_icon[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .mobile_number_entry[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 0;\n  width: 100%;\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  margin-right: 12px;\n  outline: none;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .selection_container[_ngcontent-%COMP%] {\n  display: none;\n  width: 100%;\n  height: 256px;\n  max-width: 350px;\n  max-height: 280px;\n  border-radius: 6px;\n  background-color: white;\n  padding: 0;\n  margin-top: -6px;\n  -webkit-filter: drop-shadow(0 2px 4px #cccccc);\n          filter: drop-shadow(0 2px 4px #cccccc);\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .selection_container[_ngcontent-%COMP%]   .search_bar_container[_ngcontent-%COMP%] {\n  padding: 12px;\n  background-color: #f9f9f9;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .selection_container[_ngcontent-%COMP%]   .search_bar_container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0 6px;\n  margin: 0;\n  width: 95%;\n  border: 1px solid #eaeaea;\n  border-radius: 6px;\n  background-color: white;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .selection_container[_ngcontent-%COMP%]   .country_suggestion_container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .selection_container[_ngcontent-%COMP%]   .country_suggestion_container[_ngcontent-%COMP%]   .no_country_found[_ngcontent-%COMP%] {\n  padding: 24px;\n  font-size: 16px;\n  height: 0;\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .selection_container[_ngcontent-%COMP%]   .country_suggestion_container[_ngcontent-%COMP%]   .no_country_found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-left: 10px;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .selection_container[_ngcontent-%COMP%]   .country_suggestion_container[_ngcontent-%COMP%]   .country_with_code[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 24px;\n  font-size: 16px;\n  height: 0;\n  align-items: center;\n  background-color: white;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .selection_container[_ngcontent-%COMP%]   .country_suggestion_container[_ngcontent-%COMP%]   .country_with_code[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .selection_container[_ngcontent-%COMP%]   .country_suggestion_container[_ngcontent-%COMP%]   .country_with_code[_ngcontent-%COMP%]:hover {\n  background-color: #a0cd4e;\n  color: white;\n  cursor: pointer;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]   .show_selection_container[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  z-index: 1;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%], .app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   input[type='number'][_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 10%;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   input[type='radio'][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  \n  -webkit-appearance: none;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #a0ce4e;\n  border-radius: 50%;\n  outline: none;\n  \n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   input[type='radio'][_ngcontent-%COMP%]:checked {\n  background: #a0ce4e;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .radio_btn[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n  vertical-align: middle;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-left: 4px;\n  color: #666666;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .social_network[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%] {\n  width: 64%;\n  border: none;\n  border-radius: 0px;\n  height: 0px;\n  margin-left: 3%;\n  font-size: 16px;\n  color: #666666;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .social_network[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  margin-bottom: 3%;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .social_network[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .social_network[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .social_network[_ngcontent-%COMP%]   .fa-facebook[_ngcontent-%COMP%] {\n  background-color: #3b5999 !important;\n  padding: 6px 9px;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .social_network[_ngcontent-%COMP%]   .fa-facebook-f[_ngcontent-%COMP%]:before, .app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .social_network[_ngcontent-%COMP%]   .fa-facebook[_ngcontent-%COMP%]:before {\n  content: \"\\f09a\";\n  font-size: 20px;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .social_network[_ngcontent-%COMP%]   .fa-google-plus[_ngcontent-%COMP%] {\n  background-color: #d34836 !important;\n  padding: 8px 6px;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .social_network[_ngcontent-%COMP%]   .fa-google-plus[_ngcontent-%COMP%]:before {\n  content: \"\\f0d5\";\n  font-size: 16px;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .social_network[_ngcontent-%COMP%]   .connected[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid;\n  border-radius: 25px;\n  padding: 5px 20px;\n  font-size: 16px;\n  color: #666;\n  cursor: pointer;\n}\n\n.app-user-details[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .submit_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #a0ce4e;\n  border: 1px solid #a0ce4e;\n  color: white;\n  padding: 10px 30px;\n  text-transform: uppercase;\n  font-size: 16px;\n  margin-top: 5%;\n}\n\n@media screen and (min-width: 320px) and (max-width: 640px) {\n  .card_div[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .form_field[_ngcontent-%COMP%] {\n    width: 85% !important;\n  }\n  .card_div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .image_section[_ngcontent-%COMP%] {\n    margin-bottom: 0%;\n    text-align: center;\n  }\n  .image_section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 6px 0px 0px 0px;\n  }\n  .social_network[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%] {\n    width: 78% !important;\n    border: none !important;\n    border-radius: 0px !important;\n    height: 20px !important;\n    margin-left: 3% !important;\n  }\n}\n\n.disabled[_ngcontent-%COMP%] {\n  background-color: grey;\n  cursor: default;\n}\n\n@media screen and (max-width: 382px) and (min-width: 320px) {\n  .gender[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 4%;\n  }\n  .gender[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media screen and (min-width: 320px) and (max-width: 700px) {\n  .dob[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 103% !important;\n  }\n}\n\n@media screen and (min-width: 640px) and (max-width: 1150px) {\n  .section[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%] {\n    padding: 3.5% 2% !important;\n  }\n}\n\ninput[type='number'][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type='number'][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none !important;\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9maWxlL3VzZXItcHJvZmlsZS91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTROQTtFQUVJLHVCQUFzQjtBQTVOMUI7O0FBME5BO0VBS0ksVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtBQTNOakI7O0FBbU5BO0VBYU0saUJBQWlCO0FBNU52Qjs7QUErTUE7RUFpQlEsZ0JBQWdCO0FBNU54Qjs7QUEyTUE7RUF1QlEsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG9CQUFpQjtLQUFqQixpQkFBaUI7QUE5TnpCOztBQW1NQTtFQWdDUSw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGNBQWM7QUEvTnRCOztBQXVMQTtFQTRDUSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7QUEvTnZCOztBQThLQTtFQW9EVSxtQkFBbUI7RUFDbkIsWUFBWTtBQTlOdEI7O0FBeUtBO0VBMERRLGFBQWE7QUEvTnJCOztBQXFLQTtFQW1FTSxlQUFlO0VBQ2YsVUFBVTtBQXBPaEI7O0FBZ0tBO0VBd0VNLGlCQUFpQjtBQXBPdkI7O0FBNEpBO0VBMkVRLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0FBbk9uQjs7QUFvSkE7RUF1RlEsa0NBQWtDO0FBdk8xQzs7QUFnSkE7RUEyRlEsMEJBQTBCO0FBdk9sQzs7QUE0SUE7RUErRlEseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7QUF2T25COztBQW9JQTtFQXVHUSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQXZPeEI7O0FBOEhBO0VBK0dRLHdDQUF3QztBQXpPaEQ7O0FBMEhBO0VBbUhRLGVBQWU7RUFDZixhQUFhO0FBek9yQjs7QUFxSEE7RUF3SFEsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBek9wQzs7QUE4R0E7RUErSFEscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUF6T3ZCOztBQXNHQTtFQXVJUSxnQkFBZ0I7RUFDaEIsZUFBZTtBQXpPdkI7O0FBaUdBO0VBNklNLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUExT2xCOztBQTBGQTtFQW1KUSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7QUF6T25COztBQThFQTtFQThKVSxTQUFTO0VBQ1QsYUFBYTtBQXhPdkI7O0FBeUVBO0VBbUtVLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQXhPekI7O0FBK0RBO0VBNEtZLFNBQVM7QUF2T3JCOztBQTJEQTtFQWdMWSxlQUFlO0FBdk8zQjs7QUF1REE7RUFxTFUsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBWTtBQXhPdEI7O0FBNkNBO0VBZ01RLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLDhDQUFzQztVQUF0QyxzQ0FBc0M7QUF6TzlDOztBQWdDQTtFQTRNVSxhQUFhO0VBQ2IseUJBQXlCO0FBeE9uQzs7QUEyQkE7RUFnTlksY0FBYztFQUNkLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUF2T25DOztBQWtCQTtFQTBOVSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQXhPNUI7O0FBU0E7RUFrT1ksYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBdk8vQjs7QUFEQTtFQTJPYyxTQUFTO0VBQ1QsaUJBQWlCO0FBdE8vQjs7QUFOQTtFQWlQWSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBdk9uQzs7QUFqQkE7RUEyUGMsU0FBUztBQXRPdkI7O0FBckJBO0VBK1BjLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtBQXRPN0I7O0FBM0JBO0VBd1FRLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtBQXpPbEI7O0FBakNBO0VBZ1JRLGlCQUFpQjtBQTNPekI7O0FBckNBO0VBc1JRLGlCQUFpQjtBQTdPekI7O0FBekNBO0VBMFJVLHNCQUFzQjtFQUN0QixnQkFBQTtFQUNBLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHdDQUFBO0FBNU9WOztBQXREQTtFQXNTVSxtQkFBbUI7QUE1TzdCOztBQTFEQTtFQWtUVSxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtBQXBQaEM7O0FBaEVBO0VBd1RVLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQXBQeEI7O0FBdEVBO0VBaVVRLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7QUF2UHRCOztBQWhGQTtFQTJVUSxjQUFjO0VBQ2QsaUJBQWlCO0FBdlB6Qjs7QUFyRkE7RUFnVlEsaUJBQWlCO0FBdlB6Qjs7QUF6RkE7RUFvVlEsWUFBWTtBQXZQcEI7O0FBN0ZBO0VBd1ZRLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBdlBuQjs7QUFyR0E7O0VBaVdRLGdCQUFnQjtFQUNoQixlQUFlO0FBdlB2Qjs7QUEzR0E7RUFzV1Esb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUF2UG5COztBQW5IQTtFQThXUSxnQkFBZ0I7RUFDaEIsZUFBZTtBQXZQdkI7O0FBeEhBO0VBbVhRLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7QUF2UHZCOztBQWxJQTtFQXFaUSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixjQUFjO0FBL1F0Qjs7QUFxUkE7RUFDRTtJQUNFLGNBQWM7RUFsUmhCO0VBcVJBO0lBQ0UscUJBQXFCO0VBblJ2QjtFQXNSQTtJQUNFLFdBQVc7RUFwUmI7RUF1UkE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBclJwQjtFQW1SQTtJQUtJLHdCQUF3QjtFQXJSNUI7RUF5UkE7SUFFSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0VBeFI5QjtBQUNGOztBQTRSQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0FBelJqQjs7QUE0UkE7RUFDRTtJQUVJLGdCQUFnQjtFQTFScEI7RUF3UkE7SUFNSSxlQUFlO0VBM1JuQjtBQUNGOztBQStSQTtFQUNFO0lBRUksc0JBQXNCO0VBN1IxQjtBQUNGOztBQWlTQTtFQUNFO0lBRUksMkJBQTJCO0VBL1IvQjtBQUNGOztBQW1TQTs7RUFFRSxtQ0FBbUM7RUFDbkMsb0JBQW9CO0FBaFN0QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcHJvZmlsZS91c2VyLXByb2ZpbGUvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5hcHAtdXNlci1kZXRhaWxzIHtcclxuLy8gICAuY2FyZF9kaXYge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMS42ZW07XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4vLyAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAwO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuLy8gICAgIC5ub3RoaW5nX3RvX2Rpc3BsYXkge1xyXG4vLyAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICAgIG1hcmdpbjogMWVtO1xyXG4vLyAgICAgICBwYWRkaW5nOiA1LjZlbSAwO1xyXG5cclxuLy8gICAgICAgbWF0LWljb24ge1xyXG4vLyAgICAgICAgIGhlaWdodDogYXV0bztcclxuLy8gICAgICAgICB3aWR0aDogYXV0bztcclxuLy8gICAgICAgICBmb250LXNpemU6IDRlbTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAuc3RhdGVtZW50IHtcclxuLy8gICAgICAgICBtYXJnaW46IDA7XHJcbi8vICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIC5vZmZlcl90b19lbnJvbGwge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAub2ZmZXJfbGluayB7XHJcbi8vICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgIGNvbG9yOiAjYTBjZTRlO1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbi8vICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4vLyAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbi8vICAgICAgICAgJjpob3ZlciB7XHJcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBjZTRlO1xyXG4vLyAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4vLyAgICAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLnJlc2V0X2J1dHRvbl9ncm91cCB7XHJcbi8vICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbi8vICAgICAgIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbi8vICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhlbTtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBjZTRlO1xyXG4vLyAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAuc3VjY2Vzc19tZXNzYWdlIHtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbi8vICAgICAgICAgY29sb3I6IHJlZDtcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAuZGlzYWJsZWQge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbi8vICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAuaW1hZ2VfY29udGFpbmVyIHtcclxuLy8gICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgaW1nIHtcclxuLy8gICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgLmZpbGVfdXBsb2FkZXIge1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICBib3R0b206IDEwJTtcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4vLyAgICAgICAgIGxhYmVsIHtcclxuLy8gICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgICAgICAgIC5tYXQtaWNvbiB7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiBsaWdodGNvcmFsO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpbnB1dCB7XHJcbi8vICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgLmRldGFpbF9jb250YWluZXIge1xyXG4vLyAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4vLyAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbi8vICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogZml0LWNvbnRlbnQ7XHJcbi8vICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG5cclxuLy8gICAgICAgLm1vYmlsZV9mb3JtIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuLy8gICAgICAgICAuY291bnRyeV9jb2RlIHtcclxuLy8gICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbi8vICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC5tb2JpbGVfbnVtYmVyIHtcclxuLy8gICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgLmlucHV0X2ZpZWxkIHtcclxuLy8gICAgICAgICBwYWRkaW5nOiAwIDFlbTtcclxuLy8gICAgICAgICAuZHJvcC1kb3duIHtcclxuLy8gICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuLy8gICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNGVtO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbi8vICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgc3BhbiB7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuLy8gICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcclxuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAuYWRkcmVzc19ibG9jayB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbi8vICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbi8vICAgICAgICAgaDEge1xyXG4vLyAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EwY2U0ZTtcclxuLy8gICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbi8vICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuLy8gICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgcGFkZGluZzogMC44ZW07XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5zdWJfZGl2IHtcclxuLy8gICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IzZGU2NTtcclxuLy8gICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuLy8gICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuLy8gICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBtYXQtY2hlY2tib3gge1xyXG4vLyAgICAgICAgICAgLm1hdC1jaGVja2JveC1sYXlvdXQge1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4vLyAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgLm1hdC1jaGVja2JveC1sYWJlbCB7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAuc29jaWFsX2NvbnRhaW5lciB7XHJcbi8vICAgICAgIHdpZHRoOiA1MCU7XHJcbi8vICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICAgIC5kaXNjb25uZWN0X3RleHQge1xyXG4vLyAgICAgICAgIGNvbG9yOiAjZjY1ZTczO1xyXG4vLyAgICAgICAgIGZsb2F0OiByaWdodDtcclxuLy8gICAgICAgICBtYXJnaW46IDBweCAxNXB4IDEwcHggMHB4O1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICAgICAgICB3aWR0aDogOTUlO1xyXG4vLyAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIC5kaXNjb25uZWN0X3RleHQ6aG92ZXIge1xyXG4vLyAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgLm5ld19kaXYge1xyXG4vLyAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLml0ZW1faGVhZCB7XHJcbi8vICAgICAgIGNvbG9yOiAjOGM4ZjkyO1xyXG4vLyAgICAgICBtYXJnaW46IDEwcHggMTBweCA1cHggMTBweDtcclxuLy8gICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLml0ZW1faW5wdXQge1xyXG4vLyAgICAgICB3aWR0aDogOTAlO1xyXG4vLyAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbi8vICAgICAgIG1hcmdpbjogMHB4IDEwcHggNXB4IDEwcHg7XHJcbi8vICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4vLyAgICAgICBib3JkZXItY29sb3I6ICNjY2NjY2M7XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5tZW51X2hlYWRpbmcge1xyXG4vLyAgICAgICBtYXJnaW46IDVweCAwcHggNXB4IDEwcHg7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICAgICAgY29sb3I6ICM0MmM2ZDk7XHJcbi8vICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbi8vICAgICAgIC5kZXRhaWxfY29udGFpbmVyIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4vLyAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4vLyAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogZml0LWNvbnRlbnQ7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgLnNvY2lhbF9jb250YWluZXIge1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4uYXBwLXVzZXItZGV0YWlscyB7XHJcbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcclxuICAgIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jYXJkX2RpdiB7XHJcbiAgICB3aWR0aDogOTIlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHJcbiAgICAuaW1hZ2Vfc2VjdGlvbiB7XHJcbiAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG5cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwJSAwcHg7XHJcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlY2VjZWM7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFwcC1wcmUtbG9hZGVyIC5zcGlubmVyLWJhY2tncm91bmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDYwcHg7XHJcbiAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm90dG9tOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcm9maWxlX3RleHQge1xyXG4gICAgICAgIGNvbG9yOiAjYTBjZTRlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMGNlNGU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNhMGNkNGU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcCB7XHJcbiAgICAgIC8vICAgcGFkZGluZzogMyU7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybV9maWVsZCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG5cclxuICAgICAgaW5wdXRbdHlwZT0ndGV4dCddIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxLjUlIDIlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaW5wdXQ6cmVhZC1vbmx5IHsgXHJcbiAgICAgIC8vICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgIC8vIH1cclxuICAgICAgXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbGVydC1kYW5nZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dFt0eXBlPSdudW1iZXInXSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMS41JSAyJTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kb2Ige1xyXG4gICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjdlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjOTk5OTk5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tb2JpbGUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgIC5tb2JpbGVfbnVtYmVyX2VudHJ5IHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggMzBweCAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY291bnRyeV9jb2RlIHtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZHJvcF9kb3duX2ljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlbGVjdGlvbl9jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTZweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCA0cHggI2NjY2NjYyk7XHJcblxyXG4gICAgICAgIC5zZWFyY2hfYmFyX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY291bnRyeV9zdWdnZXN0aW9uX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgICAgICAgLm5vX2NvdW50cnlfZm91bmQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY291bnRyeV93aXRoX2NvZGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EwY2Q0ZTtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2hvd19zZWxlY3Rpb25fY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hZGRyZXNzIHtcclxuICAgICAgaW5wdXRbdHlwZT0ndGV4dCddLGlucHV0W3R5cGU9J251bWJlciddICB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZ2VuZGVyIHtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9J3JhZGlvJ10ge1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIC8qIHBhZGRpbmc6IDA7ICovXHJcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNhMGNlNGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgLyogYm94LXNoYWRvdzogMCAwIDVweCAwcHggZ3JleSBpbnNldDsgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTBjZTRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaW5wdXRbdHlwZT0ncmFkaW8nXTphZnRlciB7XHJcbiAgICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBjZTRlO1xyXG4gICAgICAgIC8vICAgLy8gY29udGVudDogJyc7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZDphZnRlciB7XHJcbiAgICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNTAwO1xyXG4gICAgICAgIC8vICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC5yYWRpb19idG4ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFsX25ldHdvcmsge1xyXG4gICAgICBpbnB1dFt0eXBlPSd0ZXh0J10ge1xyXG4gICAgICAgIHdpZHRoOiA2NCU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZmEge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZhLWZhY2Vib29rIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDlweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZmEtZmFjZWJvb2stZjpiZWZvcmUsXHJcbiAgICAgIC5mYS1mYWNlYm9vazpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMDlhXCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZmEtZ29vZ2xlLXBsdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzQ4MzYgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mYS1nb29nbGUtcGx1czpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMGQ1XCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29ubmVjdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5mYS10d2l0dGVyIHtcclxuICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgcGFkZGluZzogNnB4IDZweDtcclxuICAgICAgLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC8vICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAvLyAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIC5mYS1saW5rZWRpbiB7XHJcbiAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdiNSAhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgIHBhZGRpbmc6IDZweCA2cHg7XHJcbiAgICAgIC8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAvLyAgIGhlaWdodDogMjRweDtcclxuICAgICAgLy8gICB3aWR0aDogMjRweDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyAuZmEtaW5zdGFncmFtIHtcclxuICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ0MDVmICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgcGFkZGluZzogNnB4IDZweDtcclxuICAgICAgLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC8vICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAvLyAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Ym1pdF9idG4ge1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNhMGNlNGU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2EwY2U0ZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLmNhcmRfZGl2IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmZvcm1fZmllbGQge1xyXG4gICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNhcmRfZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlX3NlY3Rpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAwcHggMHB4IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zb2NpYWxfbmV0d29yayB7XHJcbiAgICBpbnB1dFt0eXBlPSd0ZXh0J10ge1xyXG4gICAgICB3aWR0aDogNzglICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgycHgpIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xyXG4gIC5nZW5kZXIge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLmRvYiB7XHJcbiAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICB3aWR0aDogMTAzJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTUwcHgpIHtcclxuICAuc2VjdGlvbiB7XHJcbiAgICBpbnB1dFt0eXBlPSd0ZXh0J10ge1xyXG4gICAgICBwYWRkaW5nOiAzLjUlIDIlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
    return UserDetailsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](UserDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
        args: [{
                selector: 'app-user-details',
                templateUrl: './user-details.component.html',
                styleUrls: ['./user-details.component.scss']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] }, { type: _app_common_country_code_service__WEBPACK_IMPORTED_MODULE_1__["CountryCodeService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"] }, { type: _app_common_country_code_service__WEBPACK_IMPORTED_MODULE_1__["CountryCodeService"] }, { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }, { type: _auth_ip_service__WEBPACK_IMPORTED_MODULE_6__["IpService"] }, { type: _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_11__["AmplitudeService"] }]; }, { userDetailsComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/user/profile/user-profile/user-profile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user/profile/user-profile/user-profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tabs.js");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user/profile/user-profile/user-details/user-details.component.ts");
/* harmony import */ var _change_current_password_change_current_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../change-current-password/change-current-password.component */ "./src/app/user/profile/change-current-password/change-current-password.component.ts");
/* harmony import */ var _user_wallet_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user-wallet/wallet/wallet.component */ "./src/app/user/user-wallet/wallet/wallet.component.ts");
/* harmony import */ var _user_order_order_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../user-order/order/order.component */ "./src/app/user/user-order/order/order.component.ts");










var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(router, route) {
        this.router = router;
        this.route = route;
        this.userProfileComponentClass = "app-user-profile";
        this.selectedTab = 0;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // console.log(params, "param data");
            if (Number(params.tabIndex) > 0) {
                _this.selectedTab = params.tabIndex;
                // console.log(this.selectedTab, "tab");
            }
        });
    };
    UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], hostVars: 2, hostBindings: function UserProfileComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.userProfileComponentClass);
        } }, decls: 16, vars: 2, consts: [[1, "user_profile_container"], [1, "tab-group", 3, "selectedIndex", "selectedIndexChange"], ["label", "User Details"], [1, "tab-content"], ["label", "Password"], ["label", "Wallet"], ["label", "Orders"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function UserProfileComponent_Template_mat_tab_group_selectedIndexChange_3_listener($event) { return ctx.selectedTab = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-user-details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-change-current-password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-wallet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-tab", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-order");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@.disabled", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedTab);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailsComponent"], _change_current_password_change_current_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangeCurrentPasswordComponent"], _user_wallet_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_6__["WalletComponent"], _user_order_order_order_component__WEBPACK_IMPORTED_MODULE_7__["OrderComponent"]], encapsulation: 2 });
    return UserProfileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-user-profile",
                templateUrl: "./user-profile.component.html",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { userProfileComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~profile-profile-module.js.map