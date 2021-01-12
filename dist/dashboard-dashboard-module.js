(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/user/dashboard/dashboard-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/user/dashboard/dashboard-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user/dashboard/user-dashboard/user-dashboard.component.ts");





var routes = [
    {
        path: ':slug',
        component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["UserDashboardComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
    DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return DashboardRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/dashboard/dashboard.module.ts":
/*!****************************************************!*\
  !*** ./src/app/user/dashboard/dashboard.module.ts ***!
  \****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/user/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user/dashboard/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-material-module */ "./src/app/app-material-module.ts");
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-bootstrap.module */ "./src/app/app-bootstrap.module.ts");
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/profile.module */ "./src/app/user/profile/profile.module.ts");









var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["AppBootstrapModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_6__["AppCommonModule"],
                _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__["ProfileModule"]
            ]] });
    return DashboardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
        _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["AppBootstrapModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_6__["AppCommonModule"],
        _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__["ProfileModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                    _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["AppBootstrapModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_6__["AppCommonModule"],
                    _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__["ProfileModule"]
                ],
                declarations: [
                    _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/dashboard/user-dashboard/user-dashboard.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/user/dashboard/user-dashboard/user-dashboard.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _current_passwords_current_passwords_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../current-passwords/current-passwords.component */ "./src/app/current-passwords/current-passwords.component.ts");
/* harmony import */ var _app_common_puzzle_of_the_day_puzzle_of_the_day_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../app-common/puzzle-of-the-day/puzzle-of-the-day.component */ "./src/app/app-common/puzzle-of-the-day/puzzle-of-the-day.component.ts");
/* harmony import */ var _app_common_mobile_otp_verification_mobile_otp_verification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../app-common/mobile-otp-verification/mobile-otp-verification.component */ "./src/app/app-common/mobile-otp-verification/mobile-otp-verification.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_common_show_interest_show_interest_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../app-common/show-interest/show-interest.component */ "./src/app/app-common/show-interest/show-interest.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/progress-spinner.js");
/* harmony import */ var _app_common_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../app-common/card/card.component */ "./src/app/app-common/card/card.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");




















function UserDashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.imageBoxURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UserDashboardComponent_app_show_interest_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-show-interest", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("userSelectedInterestsEmitter", function UserDashboardComponent_app_show_interest_1_Template_app_show_interest_userSelectedInterestsEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.registerUserInterests($event, ctx_r4.err); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("userInterests", ctx_r1.userInterests);
} }
function UserDashboardComponent_div_2_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var catalog_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Upcoming ", catalog_r6.title, "");
} }
function UserDashboardComponent_div_2_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var catalog_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", catalog_r6.title, " Available");
} }
function UserDashboardComponent_div_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDashboardComponent_div_2_div_1_div_4_app_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-card", 17);
} if (rf & 2) {
    var dashboardCard_r15 = ctx.$implicit;
    var i_r16 = ctx.index;
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cardData", dashboardCard_r15)("mobileView", ctx_r14.mobileVersion())("index", i_r16)("hover", true);
} }
function UserDashboardComponent_div_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserDashboardComponent_div_2_div_1_div_4_app_card_1_Template, 1, 4, "app-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var catalog_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", catalog_r6.products);
} }
function UserDashboardComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserDashboardComponent_div_2_div_1_p_1_Template, 2, 1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserDashboardComponent_div_2_div_1_p_2_Template, 2, 1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserDashboardComponent_div_2_div_1_div_3_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserDashboardComponent_div_2_div_1_div_4_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var catalog_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (catalog_r6 == null ? null : catalog_r6.title) !== "121 Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (catalog_r6 == null ? null : catalog_r6.title) === "121 Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.dataReceived);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.dataReceived || (catalog_r6 == null ? null : catalog_r6.products) > 0);
} }
function UserDashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserDashboardComponent_div_2_div_1_Template, 5, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var catalog_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", catalog_r6.products.length > 0);
} }
function UserDashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No Products found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent(router, _authService, _puzzleOfTheDayContainer, dialog) {
        this.router = router;
        this._authService = _authService;
        this._puzzleOfTheDayContainer = _puzzleOfTheDayContainer;
        this.dialog = dialog;
        this.userDashboardComponentClass = "app-user-dashboard";
        this.stack = null;
        this.imageBoxURL = null;
        this.showInterestPopup = false;
        this.userInterests = [];
        this.showVerifyMobileDialog = false;
        this.isLoading = false;
        this.showErrorDiv = false;
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (document.getElementsByClassName('cdk-overlay-container')[0]) {
            document.getElementsByClassName('cdk-overlay-container')[0].setAttribute('style', 'z-index: 0 !important');
        }
        // first make call to verify if user have to show interest pop up or not
        this._authService.getUserInterest().subscribe(function (interestRes) {
            var tempInterest = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](interestRes);
            if (parseInt(tempInterest.data.count) === 0) {
                tempInterest.data.interests.forEach(function (interest) {
                    interest.isSelected = false;
                });
                _this.userInterests = tempInterest.data.interests;
                _this.showInterestPopup = true;
            }
            else {
                _this.showInterestPopup = false;
                _this.idUserId = localStorage.getItem("id");
                _this.mobileCountryCodeToVerify = localStorage.getItem("mobile_country_code");
                _this.mobileNumberToVerify = _this.removeCountryCodeFromMobile(localStorage.getItem("mobile"), localStorage.getItem("mobile_country_code"));
                if (localStorage.getItem("is_mobile_verified") === "0") {
                    _this.showVerifyMobileDialog = true;
                    var dialogRef_1 = _this.dialog.open(_app_common_mobile_otp_verification_mobile_otp_verification_component__WEBPACK_IMPORTED_MODULE_9__["MobileOtpVerificationComponent"], {
                        width: window.innerWidth < 630 ? '86%' : '36em',
                        height: window.innerHeight < 800 ? '70%' : '30em',
                        autoFocus: false,
                        data: {
                            askForMobileNumber: true,
                            userId: _this.idUserId,
                            mobileNumber: _this.mobileNumberToVerify,
                            mobileCountryCode: _this.mobileCountryCodeToVerify
                        }
                    });
                    dialogRef_1.componentInstance.result.subscribe(function () {
                        dialogRef_1.close();
                    });
                }
                if (localStorage.getItem("resetPassword") === "0") {
                    _this.openResetPasswordModal();
                }
            }
        });
        // this._authService.getRecommendedProduct({
        //   productType: 4
        // }).subscribe(
        //   (res: any) => {
        //     console.log(res);
        //   }
        // );
        var services = [this._authService.getUpcomingUserDashboard()];
        if (this.isSchoolUser()) {
            services.push(this._authService.getSchoolDetails());
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(services).subscribe(function (res) {
            var productList = res[0].data.productList;
            _this.catalogProduct = productList;
            _this.dataReceived = true;
            var flag = 0;
            for (var i = 0; i < _this.catalogProduct.length; i++) {
                if (_this.catalogProduct[i].products.length === 0) {
                    flag++;
                }
            }
            _this.showErrorDiv = flag === _this.catalogProduct.length;
            if (_this.isSchoolUser()) {
                var school = res[1].data.school;
                _this.imageBoxURL = school.banner_image;
            }
        });
        if (!this._authService.isUserLoggedIn()) {
            this.router.navigateByUrl("/");
        }
        this.openPuzzleOfTheDayContainer();
    };
    UserDashboardComponent.prototype.openPuzzleOfTheDayContainer = function () {
        var _this = this;
        if (localStorage.getItem("puzzle_opened") === "true") {
            this._authService
                .getPuzzleOfTheDay({
                userId: localStorage.getItem("id"),
            })
                .subscribe(function (res) {
                localStorage.setItem("puzzle_opened", "false");
                if (res.data.puzzle !== undefined) {
                    var config = {
                        ariaLabel: null,
                        autoFocus: false,
                        panelClass: "bottom__sheet__for__puzzle__of__the__day",
                        disableClose: true,
                        hasBackdrop: false,
                        data: {
                            puzzleResponse: res,
                            showPuzzle: !res.data.puzzle.gameFinished,
                        },
                    };
                    _this._puzzleOfTheDayContainer.open(_app_common_puzzle_of_the_day_puzzle_of_the_day_component__WEBPACK_IMPORTED_MODULE_8__["PuzzleOfTheDayComponent"], config);
                }
                // }
            });
        }
    };
    UserDashboardComponent.prototype.registerUserInterests = function (userInterestIds) {
        var _this = this;
        if (userInterestIds.length > 0) {
            // save these ids to user interest table
            var data = {
                interest_id: userInterestIds,
            };
            this._authService.showInterest(data).subscribe(function (res) {
                // console.log(res);
                _this.showInterestPopup = false;
            });
        }
        else {
            // this.err="minimum 5 interests select";
        }
    };
    UserDashboardComponent.prototype.openResetPasswordModal = function () {
        var config = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        config.height = "auto";
        config.width = window.innerWidth > 750 ? "45%" : "80%";
        config.autoFocus = false;
        var dialogRef = this.dialog.open(_current_passwords_current_passwords_component__WEBPACK_IMPORTED_MODULE_7__["CurrentPasswordsComponent"], config);
        dialogRef.afterClosed().subscribe(function () { });
    };
    UserDashboardComponent.prototype.mobileVersion = function () {
        return window.innerWidth < 700;
    };
    UserDashboardComponent.prototype.isSchoolUser = function () {
        var status = false;
        var schoolId = 15;
        for (var i = 0; i < localStorage.getItem("role_id").split(",").length; i++) {
            status =
                Number(localStorage.getItem("role_id").split(",")[i]) === schoolId;
            if (status) {
                return true;
            }
        }
        return status;
    };
    UserDashboardComponent.prototype.removeCountryCodeFromMobile = function (mobile, code) {
        return mobile.length > 10 ? mobile.slice(code.length, mobile.length) : mobile;
    };
    UserDashboardComponent.ɵfac = function UserDashboardComponent_Factory(t) { return new (t || UserDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
    UserDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserDashboardComponent, selectors: [["app-user-dashboard"]], hostVars: 2, hostBindings: function UserDashboardComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.userDashboardComponentClass);
        } }, decls: 4, vars: 4, consts: [["class", "image-box", 4, "ngIf"], [3, "userInterests", "userSelectedInterestsEmitter", 4, "ngIf"], ["class", "main_container", 4, "ngFor", "ngForOf"], ["class", "no_data_recieved_message", 4, "ngIf"], [1, "image-box"], [3, "src"], [3, "userInterests", "userSelectedInterestsEmitter"], [1, "main_container"], ["class", "user_dashboard_container", 4, "ngIf"], [1, "user_dashboard_container"], ["class", "chip-heading", 4, "ngIf"], ["class", "loader", 4, "ngIf"], ["class", "webinar_cards", 4, "ngIf"], [1, "chip-heading"], [1, "loader"], [1, "webinar_cards"], [3, "cardData", "mobileView", "index", "hover", 4, "ngFor", "ngForOf"], [3, "cardData", "mobileView", "index", "hover"], [1, "no_data_recieved_message"]], template: function UserDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserDashboardComponent_div_0_Template, 2, 1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserDashboardComponent_app_show_interest_1_Template, 1, 1, "app-show-interest", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserDashboardComponent_div_2_Template, 2, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserDashboardComponent_div_3_Template, 5, 0, "div", 3);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageBoxURL);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showInterestPopup);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.catalogProduct);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showErrorDiv);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _app_common_show_interest_show_interest_component__WEBPACK_IMPORTED_MODULE_11__["ShowInterestComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _app_common_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"]], encapsulation: 2 });
    return UserDashboardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-user-dashboard",
                templateUrl: "./user-dashboard.component.html",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheet"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { userDashboardComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ["class"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map