(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dreamroom-dreamroom-module"],{

/***/ "./src/app/user/dreamroom/dr-functionality/flip-book-url/flip-book-url.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/flip-book-url/flip-book-url.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FlipBookUrlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipBookUrlComponent", function() { return FlipBookUrlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _common_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/safe-pipe */ "./src/app/common/safe-pipe.ts");




var FlipBookUrlComponent = /** @class */ (function () {
    function FlipBookUrlComponent(
    // private _flipBookUrlService: FlipBookUrlService,
    data) {
        this.data = data;
        this.FlipBookUrlComponentClass = 'app-flip-book-url';
    }
    FlipBookUrlComponent.prototype.ngOnInit = function () {
        this.flipBookUrl = this.data.id;
        // console.log(this.flipBookUrl);
    };
    FlipBookUrlComponent.ɵfac = function FlipBookUrlComponent_Factory(t) { return new (t || FlipBookUrlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    FlipBookUrlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlipBookUrlComponent, selectors: [["app-flip-book-url"]], hostVars: 2, hostBindings: function FlipBookUrlComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.FlipBookUrlComponentClass);
        } }, decls: 2, vars: 3, consts: [[1, "iframe_content", 3, "src"]], template: function FlipBookUrlComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safe");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.flipBookUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        } }, pipes: [_common_safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"]], encapsulation: 2 });
    return FlipBookUrlComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlipBookUrlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-flip-book-url',
                templateUrl: './flip-book-url.component.html'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, { FlipBookUrlComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dr-level-selector/dr-level-selector.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-level-selector/dr-level-selector.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DrLevelSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrLevelSelectorComponent", function() { return DrLevelSelectorComponent; });
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _user_container_menu_nav_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../user-container/menu-nav-list.service */ "./src/app/user/user-container/menu-nav-list.service.ts");
/* harmony import */ var _dreamroom_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../dreamroom-data.service */ "./src/app/user/dreamroom/dreamroom-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














function DrLevelSelectorComponent_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 11);
} }
function DrLevelSelectorComponent_div_1_div_7_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    var level_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", level_r4.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function DrLevelSelectorComponent_div_1_div_7_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    var level_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", level_r4.hover, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function DrLevelSelectorComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DrLevelSelectorComponent_div_1_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); var level_r4 = ctx.$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.gotoSelectedLevel(level_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DrLevelSelectorComponent_div_1_div_7_img_2_Template, 1, 1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DrLevelSelectorComponent_div_1_div_7_img_3_Template, 1, 1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var level_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", level_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !level_r4.is_product_available);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", level_r4.is_product_available);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](level_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("FIDE Rating: ", level_r4.range, "");
} }
function DrLevelSelectorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DrLevelSelectorComponent_div_1_img_5_Template, 1, 0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DrLevelSelectorComponent_div_1_div_7_Template, 8, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.showVideo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.level2);
} }
function DrLevelSelectorComponent_div_2_div_4_span_1_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DrLevelSelectorComponent_div_2_div_4_span_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); var combo_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.buyNow(combo_r12 == null ? null : combo_r12.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var combo_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", combo_r12.combo_side_image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](combo_r12 == null ? null : combo_r12.base_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", combo_r12.price_inr, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", combo_r12.price_usd, " ");
} }
function DrLevelSelectorComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DrLevelSelectorComponent_div_2_div_4_span_1_Template, 15, 4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var combo_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", combo_r12.isEnabled);
} }
function DrLevelSelectorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Dream Rooms");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DrLevelSelectorComponent_div_2_div_4_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.comboData);
} }
var DrLevelSelectorComponent = /** @class */ (function () {
    function DrLevelSelectorComponent(router, _dreamroom, _menuNavList, _authService, _breadcrum, location) {
        this.router = router;
        this._dreamroom = _dreamroom;
        this._menuNavList = _menuNavList;
        this._authService = _authService;
        this._breadcrum = _breadcrum;
        this.DrLevelSelectorComponentClass = "app-dr-level-selector";
        this.nothingToDisplay = true;
        this.isVideoWorking = true;
        this.showCombo = true;
        this.buyProductId = 35;
        this.buyProductType = 7;
        this.categoryId = 1;
        this.productType = 1;
        this.showVideo = false;
        this.statement = [
            "error",
            "No Dream Room found",
            "Why don't you try one?",
            "Click here to buy our Chess Dream Room"
        ];
        this.levels = [
            {
                id: 1,
                image: "assets/chess/Dreamroom/level_selector/beginner.png",
                name: "Beginners",
                range: "< 1100"
            },
            {
                id: 2,
                image: "assets/chess/Dreamroom/level_selector/intermediate.png",
                name: "Intermediate",
                range: "1100 - 2000"
            },
            {
                id: 3,
                image: "assets/chess/Dreamroom/level_selector/advance.png",
                name: "Advance",
                range: "2000+"
            }
        ];
        this.level2 = [
            {
                id: 1,
                image: "assets/chess/Dreamroom/level_selector/DR_1.png",
                img: "assets/chess/Dreamroom/level_selector/not_active.png",
                hover: "assets/chess/Dreamroom/level_selector/active.png",
                name: "Beginner",
                is_product_available: false,
                range: "< 1100",
                price: null,
                showBuyNow: true
            },
            {
                id: 2,
                image: "assets/chess/Dreamroom/level_selector/DR_2.png",
                img: "assets/chess/Dreamroom/level_selector/not_active.png",
                hover: "assets/chess/Dreamroom/level_selector/active.png",
                name: "Intermediate",
                is_product_available: false,
                range: "1100 - 2000",
                price: null,
                showBuyNow: true
            },
            {
                id: 3,
                image: "assets/chess/Dreamroom/level_selector/DR_3.png",
                img: "assets/chess/Dreamroom/level_selector/not_active.png",
                hover: "assets/chess/Dreamroom/level_selector/active.png",
                is_product_available: false,
                name: "Advance",
                range: "2000+",
                price: null,
                showBuyNow: true
            }
        ];
        this.comboData = [
            {
                id: 1,
                isEnabled: true,
                combo_name: "Dream Room Beginner Module:",
                long_title: false,
                combo_side_image: "/assets/chess/Dreamroom/level_selector/beginner_combo.png",
                price_inr: "5,000",
                base_price: "10,000",
                price_usd: "100"
            },
            {
                id: 2,
                isEnabled: true,
                combo_name: "Dream Room + Intermediate + Advanced Module:",
                long_title: false,
                combo_side_image: "/assets/chess/Dreamroom/level_selector/intermediate_combo.png",
                price_inr: "11,000",
                base_price: "15,000",
                price_usd: "220"
            },
            {
                id: 3,
                isEnabled: true,
                combo_name: "Dream Room + 24 Live Room + 12 Class Room Combo",
                long_title: false,
                combo_side_image: "/assets/chess/Dreamroom/level_selector/DR_combo.png",
                price_inr: "15,000",
                base_price: "30,000",
                price_usd: "300"
            }
        ];
    }
    DrLevelSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.dataReceived = false;
        this._authService
            .getUserProduct({
            categoryId: this.categoryId,
            productType: this.productType,
            limit: 0,
            offset: 0
        })
            .subscribe(function (res) {
            _this.dataReceived = true;
            for (var _i = 0, _a = res.data.products; _i < _a.length; _i++) {
                var productData = _a[_i];
                _this.updateLevel(productData);
            }
        }, function (error) {
            _this.dataReceived = true;
        });
    };
    DrLevelSelectorComponent.prototype.gotoSelectedLevel = function (level_id) {
        this.level_ids = level_id;
        localStorage.setItem("level_id", this.level_ids);
        this._breadcrum.levelSelectorBreadcrumb(level_id);
        this._dreamroom.setLevel(level_id);
        this.router.navigateByUrl("/user/dreamroom/dr-landing/episode-list/" + localStorage.getItem("first_name") + "/" + level_id);
    };
    DrLevelSelectorComponent.prototype.openPaymentGateway = function () {
        this.router.navigateByUrl("/payment/checkout/" + this.categoryId + "/" + this.buyProductType + "/" + this.buyProductId);
    };
    DrLevelSelectorComponent.prototype.buyNow = function (id) {
        if (id === 1) {
            this.router.navigateByUrl("/direct?product=100&productType=1");
        }
        else if (id === 2) {
            this.router.navigateByUrl("/direct?product=103&productType=1");
        }
        else if (id === 3) {
            this.router.navigateByUrl("/direct?product=35&productType=7");
        }
    };
    // getCurrencySign() {
    //   return localStorage.getItem('country').toLowerCase() === 'india'
    //     ? 'fa-inr'
    //     : 'fa-usd';
    // }
    DrLevelSelectorComponent.prototype.updateLevel = function (product) {
        for (var _i = 0, _a = this.level2; _i < _a.length; _i++) {
            var level = _a[_i];
            if (product.product_id - 99 === level.id) {
                level.showBuyNow = false;
                level.is_product_available = true;
            }
            switch (product.product_id) {
                case 100: {
                    this.comboData[0].isEnabled = false;
                    break;
                }
                case 102: {
                    this.comboData[1].isEnabled = false;
                    this.comboData[2].isEnabled = false;
                    break;
                }
                default: {
                    // do nothing
                }
            }
            if (!this.comboData[0].isEnabled && !this.comboData[2].isEnabled) {
                this.showCombo = false;
            }
        }
    };
    DrLevelSelectorComponent.ɵfac = function DrLevelSelectorComponent_Factory(t) { return new (t || DrLevelSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dreamroom_data_service__WEBPACK_IMPORTED_MODULE_2__["DreamroomDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_user_container_menu_nav_list_service__WEBPACK_IMPORTED_MODULE_1__["MenuNavListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"])); };
    DrLevelSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DrLevelSelectorComponent, selectors: [["app-dr-level-selector"]], hostVars: 2, hostBindings: function DrLevelSelectorComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.DrLevelSelectorComponentClass);
        } }, decls: 3, vars: 2, consts: [[1, "dreamroom_container2"], ["class", "content_container", 4, "ngIf"], ["class", "dr_combo", 4, "ngIf"], [1, "content_container"], [1, "content"], [1, "video_box"], [1, "wistia_responsive_padding"], [1, "wistia_responsive_wrapper", 2, "height", "100%", "left", "0", "position", "relative", "top", "0", "width", "100%"], ["style", "cursor: default;", "draggable", "false", "src", "assets/chess/Dreamroom/level_selector/DR_video.png", 4, "ngIf"], [1, "level_selector"], ["class", "image_container", 3, "click", 4, "ngFor", "ngForOf"], ["draggable", "false", "src", "assets/chess/Dreamroom/level_selector/DR_video.png", 2, "cursor", "default"], [1, "image_container", 3, "click"], ["draggable", "false", 1, "hover_image", 3, "src"], ["draggable", "false", "class", "hvr_img", 3, "src", 4, "ngIf"], ["id", "text", 1, "name"], ["id", "text", 1, "fide"], ["draggable", "false", 1, "hvr_img", 3, "src"], [1, "dr_combo"], [1, "combo_card_container"], ["class", "combo_card", 4, "ngFor", "ngForOf"], [1, "combo_card"], [4, "ngIf"], [1, "header"], [3, "src"], [1, "price_container"], [1, "fa", "fa-inr"], [1, "line-through"], [1, "fa", "fa-usd"], [1, "footer"], [3, "click"]], template: function DrLevelSelectorComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DrLevelSelectorComponent_div_1_Template, 8, 2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DrLevelSelectorComponent_div_2_Template, 5, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataReceived);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataReceived && ctx.showCombo);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], encapsulation: 2 });
    return DrLevelSelectorComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DrLevelSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: "app-dr-level-selector",
                templateUrl: "./dr-level-selector.component.html"
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _dreamroom_data_service__WEBPACK_IMPORTED_MODULE_2__["DreamroomDataService"] }, { type: _user_container_menu_nav_list_service__WEBPACK_IMPORTED_MODULE_1__["MenuNavListService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"] }]; }, { DrLevelSelectorComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
            args: ["class"]
        }] }); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dreamroom-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/user/dreamroom/dreamroom-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DreamroomRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DreamroomRoutingModule", function() { return DreamroomRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dreamroom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dreamroom.component */ "./src/app/user/dreamroom/dreamroom.component.ts");
/* harmony import */ var _dr_level_selector_dr_level_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dr-level-selector/dr-level-selector.component */ "./src/app/user/dreamroom/dr-level-selector/dr-level-selector.component.ts");






var routes = [
    {
        path: '',
        component: _dreamroom_component__WEBPACK_IMPORTED_MODULE_2__["DreamroomComponent"],
        children: [
            {
                path: 'dr-level-selector',
                component: _dr_level_selector_dr_level_selector_component__WEBPACK_IMPORTED_MODULE_3__["DrLevelSelectorComponent"]
                // loadChildren: './dr-level-selector/dr-level-selector.module#DrLevelSelectorModule'
            },
            {
                path: 'dr-landing',
                loadChildren: function () { return __webpack_require__.e(/*! import() | dr-landing-dr-landing-module */ "dr-landing-dr-landing-module").then(__webpack_require__.bind(null, /*! ./dr-landing/dr-landing.module */ "./src/app/user/dreamroom/dr-landing/dr-landing.module.ts")).then(function (m) { return m.DrLandingModule; }); }
            },
            {
                path: 'dr-functionality',
                loadChildren: function () { return __webpack_require__.e(/*! import() | dr-functionality-dr-functionality-module */ "dr-functionality-dr-functionality-module").then(__webpack_require__.bind(null, /*! ./dr-functionality/dr-functionality.module */ "./src/app/user/dreamroom/dr-functionality/dr-functionality.module.ts")).then(function (m) { return m.DrFunctionalityModule; }); }
            }
        ],
    }
];
var DreamroomRoutingModule = /** @class */ (function () {
    function DreamroomRoutingModule() {
    }
    DreamroomRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DreamroomRoutingModule });
    DreamroomRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DreamroomRoutingModule_Factory(t) { return new (t || DreamroomRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return DreamroomRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DreamroomRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DreamroomRoutingModule, [{
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

/***/ "./src/app/user/dreamroom/dreamroom.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/dreamroom/dreamroom.component.ts ***!
  \*******************************************************/
/*! exports provided: DreamroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DreamroomComponent", function() { return DreamroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





var DreamroomComponent = /** @class */ (function () {
    function DreamroomComponent(router) {
        this.router = router;
        this.DreamroomComponentClass = 'app-dreamroom';
    }
    DreamroomComponent.prototype.ngOnInit = function () {
    };
    DreamroomComponent.ɵfac = function DreamroomComponent_Factory(t) { return new (t || DreamroomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    DreamroomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DreamroomComponent, selectors: [["app-dreamroom"]], hostVars: 2, hostBindings: function DreamroomComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.DreamroomComponentClass);
        } }, decls: 1, vars: 0, template: function DreamroomComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return DreamroomComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DreamroomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dreamroom',
                templateUrl: './dreamroom.component.html',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { DreamroomComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dreamroom.module.ts":
/*!****************************************************!*\
  !*** ./src/app/user/dreamroom/dreamroom.module.ts ***!
  \****************************************************/
/*! exports provided: DreamroomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DreamroomModule", function() { return DreamroomModule; });
/* harmony import */ var _dr_functionality_flip_book_url_flip_book_url_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dr-functionality/flip-book-url/flip-book-url.component */ "./src/app/user/dreamroom/dr-functionality/flip-book-url/flip-book-url.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app-material-module */ "./src/app/app-material-module.ts");
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-bootstrap.module */ "./src/app/app-bootstrap.module.ts");
/* harmony import */ var _dreamroom_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dreamroom.component */ "./src/app/user/dreamroom/dreamroom.component.ts");
/* harmony import */ var _dreamroom_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dreamroom-routing.module */ "./src/app/user/dreamroom/dreamroom-routing.module.ts");
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _dr_level_selector_dr_level_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dr-level-selector/dr-level-selector.component */ "./src/app/user/dreamroom/dr-level-selector/dr-level-selector.component.ts");










var DreamroomModule = /** @class */ (function () {
    function DreamroomModule() {
    }
    DreamroomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DreamroomModule });
    DreamroomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DreamroomModule_Factory(t) { return new (t || DreamroomModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
                _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["AppBootstrapModule"],
                _dreamroom_routing_module__WEBPACK_IMPORTED_MODULE_6__["DreamroomRoutingModule"]
            ]] });
    return DreamroomModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DreamroomModule, { declarations: [_dreamroom_component__WEBPACK_IMPORTED_MODULE_5__["DreamroomComponent"],
        _dr_level_selector_dr_level_selector_component__WEBPACK_IMPORTED_MODULE_8__["DrLevelSelectorComponent"],
        _dr_functionality_flip_book_url_flip_book_url_component__WEBPACK_IMPORTED_MODULE_0__["FlipBookUrlComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
        _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["AppBootstrapModule"],
        _dreamroom_routing_module__WEBPACK_IMPORTED_MODULE_6__["DreamroomRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DreamroomModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
                    _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["AppBootstrapModule"],
                    _dreamroom_routing_module__WEBPACK_IMPORTED_MODULE_6__["DreamroomRoutingModule"]
                ],
                declarations: [
                    _dreamroom_component__WEBPACK_IMPORTED_MODULE_5__["DreamroomComponent"],
                    _dr_level_selector_dr_level_selector_component__WEBPACK_IMPORTED_MODULE_8__["DrLevelSelectorComponent"],
                    _dr_functionality_flip_book_url_flip_book_url_component__WEBPACK_IMPORTED_MODULE_0__["FlipBookUrlComponent"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
                entryComponents: [
                    _dr_functionality_flip_book_url_flip_book_url_component__WEBPACK_IMPORTED_MODULE_0__["FlipBookUrlComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=dreamroom-dreamroom-module.js.map