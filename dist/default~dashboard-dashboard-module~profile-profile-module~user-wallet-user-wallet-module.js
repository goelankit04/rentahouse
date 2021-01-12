(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~profile-profile-module~user-wallet-user-wallet-module"],{

/***/ "./src/app/user/user-wallet/user-wallet-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/user/user-wallet/user-wallet-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: UserWalletRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWalletRoutingModule", function() { return UserWalletRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/user/user-wallet/wallet/wallet.component.ts");





var routes = [
    {
        path: ":slug",
        component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_2__["WalletComponent"],
    },
];
var UserWalletRoutingModule = /** @class */ (function () {
    function UserWalletRoutingModule() {
    }
    UserWalletRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserWalletRoutingModule });
    UserWalletRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserWalletRoutingModule_Factory(t) { return new (t || UserWalletRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return UserWalletRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserWalletRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserWalletRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/user-wallet/user-wallet.module.ts":
/*!********************************************************!*\
  !*** ./src/app/user/user-wallet/user-wallet.module.ts ***!
  \********************************************************/
/*! exports provided: UserWalletModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWalletModule", function() { return UserWalletModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_wallet_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-wallet-routing.module */ "./src/app/user/user-wallet/user-wallet-routing.module.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/user/user-wallet/wallet/wallet.component.ts");
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet.service */ "./src/app/user/user-wallet/wallet.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/token-interceptor.service */ "./src/app/auth/token-interceptor.service.ts");








var UserWalletModule = /** @class */ (function () {
    function UserWalletModule() {
    }
    UserWalletModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserWalletModule });
    UserWalletModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserWalletModule_Factory(t) { return new (t || UserWalletModule)(); }, providers: [
            _wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["TokenInterceptorService"],
                multi: true,
            },
        ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_wallet_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserWalletRoutingModule"]]] });
    return UserWalletModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserWalletModule, { declarations: [_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_3__["WalletComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_wallet_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserWalletRoutingModule"]], exports: [_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_3__["WalletComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserWalletModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_wallet_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserWalletRoutingModule"]],
                declarations: [_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_3__["WalletComponent"]],
                providers: [
                    _wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["TokenInterceptorService"],
                        multi: true,
                    },
                ],
                exports: [_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_3__["WalletComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/user-wallet/wallet.service.ts":
/*!****************************************************!*\
  !*** ./src/app/user/user-wallet/wallet.service.ts ***!
  \****************************************************/
/*! exports provided: WalletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletService", function() { return WalletService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/token-interceptor.service */ "./src/app/auth/token-interceptor.service.ts");







var WalletService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WalletService, _super);
    function WalletService(_http) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        WalletService.BASE_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auth_target;
        return _this;
    }
    WalletService.prototype.getWalletBalance = function () {
        return this._http.get(WalletService.BASE_API_URL + "/user/wallet/balance");
    };
    WalletService.prototype.getWalletLog = function () {
        return this._http.get(WalletService.BASE_API_URL + "/user/wallet/log");
    };
    WalletService.prototype.setLocalStorage = function (key, value) {
        localStorage.setItem(key, value);
    };
    WalletService.BASE_API_URL = '';
    WalletService.ɵfac = function WalletService_Factory(t) { return new (t || WalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    WalletService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WalletService, factory: WalletService.ɵfac });
    return WalletService;
}(_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptorService"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WalletService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/user-wallet/wallet/wallet.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-wallet/wallet/wallet.component.ts ***!
  \*************************************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");









function WalletComponent_table_11_tr_12_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WalletComponent_table_11_tr_12_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var log_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, log_r5.expiry_date));
} }
var _c0 = function (a0, a1) { return { "positive": a0, "negative": a1 }; };
function WalletComponent_table_11_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WalletComponent_table_11_tr_12_span_8_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, WalletComponent_table_11_tr_12_span_14_Template, 3, 3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var log_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r5.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r5.purpose);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c0, (log_r5 == null ? null : log_r5.tran_wallet_points) > 0, (log_r5 == null ? null : log_r5.tran_wallet_points) < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (log_r5 == null ? null : log_r5.tran_wallet_points) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r5 == null ? null : log_r5.tran_wallet_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 7, log_r5.tran_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", log_r5 == null ? null : log_r5.expiry_date);
} }
function WalletComponent_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Expiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WalletComponent_table_11_tr_12_Template, 15, 12, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.walletLog);
} }
function WalletComponent_table_12_tr_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WalletComponent_table_12_tr_1_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var log_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, log_r10.expiry_date));
} }
function WalletComponent_table_12_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WalletComponent_table_12_tr_1_span_12_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Expiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, WalletComponent_table_12_tr_1_span_17_Template, 3, 3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var log_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 5, log_r10.tran_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (log_r10 == null ? null : log_r10.tran_wallet_points) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r10 == null ? null : log_r10.tran_wallet_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", log_r10 == null ? null : log_r10.expiry_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r10.purpose);
} }
var _c1 = function (a0) { return { "wallet_mobile": a0 }; };
function WalletComponent_table_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WalletComponent_table_12_tr_1_Template, 22, 7, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r1.mobileView));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.walletLog);
} }
function WalletComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No records found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var _c2 = function (a0) { return { "disabled_button": a0 }; };
function WalletComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WalletComponent_div_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WalletComponent_div_14_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.offset == 0)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c2, ctx_r3.offset == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.walletLog.length < 10)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, ctx_r3.walletLog.length < 10));
} }
var WalletComponent = /** @class */ (function () {
    function WalletComponent(_walletService, location, _breadCrumb) {
        this._walletService = _walletService;
        this._breadCrumb = _breadCrumb;
        this.WalletComponentClass = 'app-wallet';
        this.offset = 0;
        this.mobileView = false;
        this.limit = 10;
        this.ex = '';
    }
    WalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this._breadCrumb.puzzleBreadCrumb(0);
        // this._breadCrumb.levelSelectorBreadcrumb(0);
        // this._breadCrumb.exampleBreadCrumb(0);
        // this._breadCrumb.episodeBreadCrumb(0);
        // this._breadCrumb.updatedWallet(0);
        this.mobileView = window.innerWidth < 800;
        var data = {
            offset: this.offset,
            limit: this.limit
        };
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(this._walletService.getWalletBalance(), this._walletService.getWalletLog(data)).subscribe(function (res) {
            _this.walletBalance = res[0].data.wallet_amount ? res[0].data.wallet_amount : 0;
            _this.walletRedeem = res[0].data.wallet_points ? res[0].data.wallet_points : 0;
            _this.walletLog = res[1].data.log.length > 0 ? res[1].data.log : null;
            _this.walletCount = res[1].data.count;
            // console.log(this.walletLog,"walletlog")
        });
        this._walletService.getWalletBalance().subscribe(function (res) {
            // console.log(res)
            _this.walletBalance = res.data.wallet_amount ? res.data.wallet_amount : 0;
            _this.walletRedeem = res.data.wallet_points ? res.data.wallet_points : 0;
        });
        this._walletService.getWalletLog(data).subscribe(function (res) {
            // console.log(res)
        });
    };
    WalletComponent.prototype.getWallet = function () {
        var _this = this;
        var data = {
            offset: this.offset,
            limit: this.limit
        };
        this._walletService.getWalletLog(data).subscribe(function (res) {
            // console.log(res);
            _this.walletLog = res.data.log;
            _this.walletCount = res.data.count;
        });
    };
    WalletComponent.prototype.previous = function () {
        this.offset -= this.limit;
        this.getWallet();
    };
    WalletComponent.prototype.next = function () {
        this.offset += this.limit;
        this.getWallet();
    };
    WalletComponent.prototype.onResize = function (event) {
        this.mobileView = window.innerWidth < 800;
    };
    WalletComponent.ɵfac = function WalletComponent_Factory(t) { return new (t || WalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbService"])); };
    WalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WalletComponent, selectors: [["app-wallet"]], hostVars: 2, hostBindings: function WalletComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function WalletComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.WalletComponentClass);
        } }, decls: 15, vars: 8, consts: [[1, "wallet_container"], [1, "wallet_highlight_section"], [1, "wallet_value"], ["src", "assets/wallet/redeem.svg"], [1, "balance_value"], [1, "balance_sub_text"], [1, "transaction_table_section", 3, "resize"], [4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "no_wallet_record", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "width", "30%"], [2, "padding-bottom", "0px"], [3, "ngClass"], [1, "multi_data_row"], [1, "row_heading"], [1, "row_data"], [1, "no_wallet_record"], [1, "pagination"], ["type", "button", 3, "disabled", "ngClass", "click"]], template: function WalletComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Your Scholarship Points");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function WalletComponent_Template_div_resize_10_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, WalletComponent_table_11_Template, 13, 1, "table", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WalletComponent_table_12_Template, 2, 4, "table", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, WalletComponent_div_13_Template, 3, 0, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, WalletComponent_div_14_Template, 5, 8, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 5, ctx.walletRedeem, ".0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.walletLog && !ctx.mobileView);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.walletLog && ctx.mobileView);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.walletLog);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.walletCount > 10);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 6px;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .wallet_highlight_section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  -webkit-filter: drop-shadow(0 2px 4px #cccccc);\n          filter: drop-shadow(0 2px 4px #cccccc);\n  padding: 1em;\n  margin: 10px 5px;\n  border-radius: 6px;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .wallet_highlight_section[_ngcontent-%COMP%]   .wallet_value[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  justify-content: center;\n  padding-bottom: 2em;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .wallet_highlight_section[_ngcontent-%COMP%]   .wallet_value[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .wallet_highlight_section[_ngcontent-%COMP%]   .wallet_value[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 4em;\n  height: 4em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-right: 0;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .wallet_highlight_section[_ngcontent-%COMP%]   .wallet_value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .balance_value[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #a0ce4e;\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .wallet_highlight_section[_ngcontent-%COMP%]   .wallet_value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .balance_sub_text[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333333;\n  font-weight: 600;\n  font-size: 15px;\n}\n\n@media screen and (min-width: 800px) {\n  .app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .wallet_highlight_section[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n  }\n  .app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .wallet_highlight_section[_ngcontent-%COMP%]   .wallet_value[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    padding-bottom: 0;\n  }\n  .app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .wallet_highlight_section[_ngcontent-%COMP%]   .wallet_value[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-right: 1em;\n  }\n  .app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .wallet_highlight_section[_ngcontent-%COMP%]   .wallet_value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .balance_value[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%] {\n  background-color: white;\n  -webkit-filter: drop-shadow(0 2px 4px #cccccc);\n          filter: drop-shadow(0 2px 4px #cccccc);\n  padding: 0 1em;\n  margin: 10px 5px;\n  border-radius: 6px;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  margin-right: 2%;\n  margin-top: 2%;\n  float: right;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .disabled_button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: grey;\n  border: 1px;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #a0ce4e;\n  color: white;\n  border: 1px solid #a0ce4e;\n  padding: 8px;\n  border-radius: 2px;\n  margin-right: 18px;\n  font-size: 20px;\n  cursor: pointer;\n  width: 136px;\n  font-weight: bold;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #cccccc;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #ececec;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 600;\n  font-size: 22px;\n  padding: 14px 12px;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  padding: 10px 12px;\n  color: #666666;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .negative[_ngcontent-%COMP%] {\n  background: #ef662f;\n  color: white;\n  padding: 4px 16px;\n  border-radius: 3px;\n  width: 82px;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .positive[_ngcontent-%COMP%] {\n  color: white;\n  padding: 4px 16px;\n  border-radius: 3px;\n  background: #a0ce4e;\n  width: 82px;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   .wallet_mobile[_ngcontent-%COMP%]   .multi_data_row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   .wallet_mobile[_ngcontent-%COMP%]   .multi_data_row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   .wallet_mobile[_ngcontent-%COMP%]   .multi_data_row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .row_heading[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 1.25px;\n  font-size: 16px;\n  margin: 0;\n  font-weight: 600;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   .wallet_mobile[_ngcontent-%COMP%]   .multi_data_row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .row_data[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   .wallet_mobile[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid #cccccc;\n  padding: 1em 0;\n  align-items: center;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   .wallet_mobile[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   .wallet_mobile[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  padding-bottom: 0;\n  text-transform: uppercase;\n  letter-spacing: 1.25px;\n  font-size: 16px;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   .wallet_mobile[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  padding: 0 12px;\n  font-size: 14px;\n}\n\n.app-wallet[_ngcontent-%COMP%]   .wallet_container[_ngcontent-%COMP%]   .transaction_table_section[_ngcontent-%COMP%]   .no_wallet_record[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  padding: 1em;\n  margin: 0;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXdhbGxldC93YWxsZXQvd2FsbGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksdUJBQXVCO0VBRXZCLGtCQUFrQjtBQUR0Qjs7QUFIQTtFQU9NLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDhDQUFzQztVQUF0QyxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFBeEI7O0FBYkE7RUFnQlEsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDM0I7O0FBdEJBO0VBd0JVLGlCQUFpQjtBQUUzQjs7QUExQkE7RUE0QlUsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZUFBZTtBQUV6Qjs7QUFqQ0E7RUFvQ1ksU0FBUztFQUNULGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUM5Qjs7QUF6Q0E7RUE0Q1ksU0FBUztFQUNULGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUMzQjs7QUFJTTtFQXBETjtJQXFEUSxhQUFhO0lBQ2IsbUJBQW1CO0VBQXpCO0VBdERGO0lBeURVLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQXpCO0VBM0RGO0lBOERZLGlCQUFpQjtFQUEzQjtFQTlERjtJQW1FYyxnQkFBZ0I7RUFGNUI7QUFDRjs7QUFsRUE7RUEyRU0sdUJBQXVCO0VBQ3ZCLDhDQUFzQztVQUF0QyxzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFMeEI7O0FBMUVBO0VBaUZRLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtBQUhwQjs7QUFoRkE7RUFxRlUsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixXQUFXO0FBRHJCOztBQXRGQTtFQTBGVSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7QUFBM0I7O0FBbkdBO0VBdUdRLFdBQVc7QUFBbkI7O0FBdkdBO0VBMEdVLGdDQUFnQztBQUMxQzs7QUEzR0E7RUE2R1ksZ0JBQWdCO0FBRTVCOztBQS9HQTtFQWtIVSx5QkFBeUI7QUFDbkM7O0FBbkhBO0VBc0hVLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQUM1Qjs7QUExSEE7RUE2SFUsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztBQUN4Qjs7QUFqSUE7RUFvSVUsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDckI7O0FBeklBO0VBMklVLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0FBRXJCOztBQWpKQTtFQXFKVSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFBckI7O0FBdkpBO0VBMEpZLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQzFDOztBQTdKQTtFQStKYyx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixTQUFTO0VBRVQsZ0JBQWdCO0FBQzlCOztBQXJLQTtFQXdLYyxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7QUFDN0I7O0FBM0tBO0VBZ0xVLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxtQkFBbUI7QUFEN0I7O0FBbkxBO0VBdUxZLGdCQUFnQjtBQUE1Qjs7QUF2TEE7RUE0TFUsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFEekI7O0FBL0xBO0VBb01VLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtBQUR6Qjs7QUFyTUE7RUE0TVUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osU0FBUztFQUNULGVBQWU7QUFIekIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItd2FsbGV0L3dhbGxldC93YWxsZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXdhbGxldCB7XG4gIC53YWxsZXRfY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvLyBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcblxuICAgIC53YWxsZXRfaGlnaGxpZ2h0X3NlY3Rpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggNHB4ICNjY2NjY2MpO1xuICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgbWFyZ2luOiAxMHB4IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcblxuICAgICAgLndhbGxldF92YWx1ZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiA0ZW07XG4gICAgICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgLmJhbGFuY2VfdmFsdWUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6ICNhMGNlNGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5iYWxhbmNlX3N1Yl90ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAud2FsbGV0X3ZhbHVlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAuYmFsYW5jZV92YWx1ZSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRyYW5zYWN0aW9uX3RhYmxlX3NlY3Rpb24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDRweCAjY2NjY2NjKTtcbiAgICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgICAgbWFyZ2luOiAxMHB4IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIC5wYWdpbmF0aW9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgLmRpc2FibGVkX2J1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgICAgICAgYm9yZGVyOiAxcHg7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTBjZTRlO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTBjZTRlO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEzNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIHRyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcblxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRyOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgICAgICB9XG5cbiAgICAgICAgdGgge1xuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDE0cHggMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRkIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICAgIH1cblxuICAgICAgICAubmVnYXRpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZjY2MmY7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICB3aWR0aDogODJweDtcbiAgICAgICAgfVxuICAgICAgICAucG9zaXRpdmUge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2EwY2U0ZTtcbiAgICAgICAgICB3aWR0aDogODJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAud2FsbGV0X21vYmlsZSB7XG4gICAgICAgIC5tdWx0aV9kYXRhX3JvdyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgLnJvd19oZWFkaW5nIHtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIC8vIGNvbG9yOiAjYTBjZTRlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucm93X2RhdGEge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0ciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbSAwO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubm9fd2FsbGV0X3JlY29yZCB7XG4gICAgICAgIHAge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return WalletComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-wallet',
                templateUrl: './wallet.component.html',
                styleUrls: ['./wallet.component.scss']
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbService"] }]; }, { WalletComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~profile-profile-module~user-wallet-user-wallet-module.js.map