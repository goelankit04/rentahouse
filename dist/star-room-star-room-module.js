(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["star-room-star-room-module"],{

/***/ "./src/app/user/star-room/dr-functional/flip-book-url/flip-book-url.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/user/star-room/dr-functional/flip-book-url/flip-book-url.component.ts ***!
  \***************************************************************************************/
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

/***/ "./src/app/user/star-room/dr-level-selector/dr-level-selector.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/user/star-room/dr-level-selector/dr-level-selector.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DrLevelSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrLevelSelectorComponent", function() { return DrLevelSelectorComponent; });
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _user_container_menu_nav_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../user-container/menu-nav-list.service */ "./src/app/user/user-container/menu-nav-list.service.ts");
/* harmony import */ var _star_room_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../star-room-data.service */ "./src/app/user/star-room/star-room-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _common_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/ellipsis-pipe */ "./src/app/common/ellipsis-pipe.ts");

















function DrLevelSelectorComponent_div_1_mat_card_1_button_15_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DrLevelSelectorComponent_div_1_mat_card_1_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); var data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.buyNow(data_r3 == null ? null : data_r3.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Buy Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DrLevelSelectorComponent_div_1_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "ellipsis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "mat-card-title", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DrLevelSelectorComponent_div_1_mat_card_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); var data_r3 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r8.gotoSelectedLevel(data_r3.product_id, data_r3.product_type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " View More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, DrLevelSelectorComponent_div_1_mat_card_1_button_15_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", data_r3 == null ? null : data_r3.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r3 == null ? null : data_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 4, data_r3 == null ? null : data_r3.short_description, 220));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (data_r3 == null ? null : data_r3.isUserProduct) !== 1);
} }
function DrLevelSelectorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DrLevelSelectorComponent_div_1_mat_card_1_Template, 16, 7, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.product);
} }
function DrLevelSelectorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "No Star Room found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Why don't you try one?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DrLevelSelectorComponent_div_2_Template_p_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.openPaymentGateway(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Click here to buy our Star Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
var DrLevelSelectorComponent = /** @class */ (function () {
    function DrLevelSelectorComponent(router, _dreamroom, _menuNavList, _authService, _breadcrum, location) {
        this.router = router;
        this._dreamroom = _dreamroom;
        this._menuNavList = _menuNavList;
        this._authService = _authService;
        this._breadcrum = _breadcrum;
        this.DrLevelSelectorComponentClass = "app-dr-level-selector";
        this.showCombo = true;
        this.buyProductId = 35;
        this.buyProductType = 7;
        this.categoryId = 1;
        this.productType = 13;
        this.showVideo = false;
        this.statement = [
            "error",
            "No Dream Room found",
            "Why don't you try one?",
            "Click here to buy our Chess Dream Room",
        ];
        this.levels = [
            {
                id: 1,
                image: "assets/chess/Dreamroom/level_selector/beginner.png",
                name: "Beginners",
                range: "< 1100",
            },
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
                showBuyNow: true,
            },
        ];
        this.comboData = [
            {
                isEnabled: true,
                combo_name: "Dream Room Beginner Module:",
                long_title: false,
                combo_side_image: "/assets/chess/Dreamroom/level_selector/beginner_combo.png",
                price_inr: "3,000",
                base_price: "5,000",
                price_usd: "60",
                redirectLink: "/payment/checkout/1/7/100",
            },
            {
                isEnabled: true,
                combo_name: "Dream Room + Intermediate + Advanced Module:",
                long_title: false,
                combo_side_image: "/assets/chess/Dreamroom/level_selector/intermediate_combo.png",
                price_inr: "8,000",
                base_price: "10,000",
                price_usd: "130",
                redirectLink: "/payment/checkout/1/7/103",
            },
            {
                isEnabled: true,
                combo_name: "Dream Room + 24 Live Room + 12 Class Room Combo",
                long_title: false,
                combo_side_image: "/assets/chess/Dreamroom/level_selector/DR_combo.png",
                price_inr: "10,000",
                base_price: "30,000",
                price_usd: "160",
                redirectLink: "/payment/checkout/1/7/35 ",
            },
        ];
    }
    DrLevelSelectorComponent.prototype.ngOnInit = function () {
        // const data = {
        //   country: "India",
        //   productType: 13,
        //   categoryId: 1,
        // };
        // this._authService.getAllProductByProductType(data).subscribe((res: any) => {
        //   // console.log(res);
        //   this.product = res.data.products;
        // });
        var _this = this;
        var data = {
            categoryId: 1,
            limit: 0,
            offset: 0,
            productType: 13,
        };
        this._authService.getUserProduct(data).subscribe(function (res) {
            _this.product = res.data.products;
            _this.nothingToDisplay = _this.product.length === 0;
        });
        window.scroll(0, 0);
        this.dataReceived = false;
    };
    DrLevelSelectorComponent.prototype.buyNow = function (product_id) {
        this.router.navigateByUrl("/direct?product=" + product_id + "&productType=13");
    };
    DrLevelSelectorComponent.prototype.openPaymentGateway = function () {
        this.router.navigateByUrl("/product-catalog/" + this.categoryId + "/" + this.productType);
    };
    DrLevelSelectorComponent.prototype.gotoSelectedLevel = function (level_id, productType) {
        this.level_ids = level_id;
        localStorage.setItem('productType', productType);
        localStorage.setItem("level_id", this.level_ids);
        this.router.navigateByUrl("/user/star-room/star-landing/star-episode/" + localStorage.getItem("first_name") + "/" + level_id);
    };
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
    DrLevelSelectorComponent.ɵfac = function DrLevelSelectorComponent_Factory(t) { return new (t || DrLevelSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_star_room_data_service__WEBPACK_IMPORTED_MODULE_2__["StarroomDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_user_container_menu_nav_list_service__WEBPACK_IMPORTED_MODULE_1__["MenuNavListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"])); };
    DrLevelSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DrLevelSelectorComponent, selectors: [["app-dr-level-selector"]], hostVars: 2, hostBindings: function DrLevelSelectorComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.DrLevelSelectorComponentClass);
        } }, decls: 3, vars: 2, consts: [[1, "user_star_room"], ["class", "events", 4, "ngIf"], ["class", "nothing_to_display", 4, "ngIf"], [1, "events"], ["class", "card_container", 4, "ngFor", "ngForOf"], [1, "card_container"], ["mat-card-image", "", 1, "image_container_mentor", 3, "src"], [1, "detail_container"], [1, "detail"], [1, "value"], [2, "font-size", "15px", "color", "#666766", "font-weight", "bold"], [1, "main-button"], ["type", "button", 1, "view_btn", 3, "click"], ["type", "button", "class", "register_btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "register_btn", 3, "click"], [1, "nothing_to_display"], [1, "statement"], [1, "offer_to_enroll"], [1, "offer_to_enroll", "offer_link", 3, "click"]], template: function DrLevelSelectorComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DrLevelSelectorComponent_div_1_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DrLevelSelectorComponent_div_2_Template, 9, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nothingToDisplay);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], pipes: [_common_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_9__["EllipsisPipe"]], encapsulation: 2 });
    return DrLevelSelectorComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DrLevelSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: "app-dr-level-selector",
                templateUrl: "./dr-level-selector.component.html",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _star_room_data_service__WEBPACK_IMPORTED_MODULE_2__["StarroomDataService"] }, { type: _user_container_menu_nav_list_service__WEBPACK_IMPORTED_MODULE_1__["MenuNavListService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"] }]; }, { DrLevelSelectorComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
            args: ["class"]
        }] }); })();


/***/ }),

/***/ "./src/app/user/star-room/star-room-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/user/star-room/star-room-routing.module.ts ***!
  \************************************************************/
/*! exports provided: StarroomRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarroomRoutingModule", function() { return StarroomRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _star_room_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star-room.component */ "./src/app/user/star-room/star-room.component.ts");
/* harmony import */ var _dr_level_selector_dr_level_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dr-level-selector/dr-level-selector.component */ "./src/app/user/star-room/dr-level-selector/dr-level-selector.component.ts");






var routes = [
    {
        path: '',
        component: _star_room_component__WEBPACK_IMPORTED_MODULE_2__["StarroomComponent"],
        children: [
            {
                path: '',
                component: _dr_level_selector_dr_level_selector_component__WEBPACK_IMPORTED_MODULE_3__["DrLevelSelectorComponent"]
            },
            {
                path: 'star-landing',
                loadChildren: function () { return __webpack_require__.e(/*! import() | landing-landing-module */ "landing-landing-module").then(__webpack_require__.bind(null, /*! ./landing/landing.module */ "./src/app/user/star-room/landing/landing.module.ts")).then(function (m) { return m.LandingModule; }); }
            },
            {
                path: 'dr-functionality',
                loadChildren: function () { return __webpack_require__.e(/*! import() | dr-functional-dr-functional-module */ "dr-functional-dr-functional-module").then(__webpack_require__.bind(null, /*! ./dr-functional/dr-functional.module */ "./src/app/user/star-room/dr-functional/dr-functional.module.ts")).then(function (m) { return m.DrFunctionalModule; }); }
            }
        ],
    }
];
var StarroomRoutingModule = /** @class */ (function () {
    function StarroomRoutingModule() {
    }
    StarroomRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StarroomRoutingModule });
    StarroomRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StarroomRoutingModule_Factory(t) { return new (t || StarroomRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return StarroomRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StarroomRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarroomRoutingModule, [{
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

/***/ "./src/app/user/star-room/star-room.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/star-room/star-room.component.ts ***!
  \*******************************************************/
/*! exports provided: StarroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarroomComponent", function() { return StarroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




var StarroomComponent = /** @class */ (function () {
    function StarroomComponent(router) {
        this.router = router;
        this.StarroomComponentClass = 'app-star-room';
    }
    StarroomComponent.prototype.ngOnInit = function () {
    };
    StarroomComponent.ɵfac = function StarroomComponent_Factory(t) { return new (t || StarroomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    StarroomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarroomComponent, selectors: [["app-star-room"]], hostVars: 2, hostBindings: function StarroomComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.StarroomComponentClass);
        } }, decls: 1, vars: 0, template: function StarroomComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return StarroomComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarroomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-star-room',
                templateUrl: './star-room.component.html',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { StarroomComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/user/star-room/star-room.module.ts":
/*!****************************************************!*\
  !*** ./src/app/user/star-room/star-room.module.ts ***!
  \****************************************************/
/*! exports provided: StarroomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarroomModule", function() { return StarroomModule; });
/* harmony import */ var _dr_functional_flip_book_url_flip_book_url_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dr-functional/flip-book-url/flip-book-url.component */ "./src/app/user/star-room/dr-functional/flip-book-url/flip-book-url.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app-material-module */ "./src/app/app-material-module.ts");
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-bootstrap.module */ "./src/app/app-bootstrap.module.ts");
/* harmony import */ var _star_room_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./star-room-routing.module */ "./src/app/user/star-room/star-room-routing.module.ts");
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _dr_level_selector_dr_level_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dr-level-selector/dr-level-selector.component */ "./src/app/user/star-room/dr-level-selector/dr-level-selector.component.ts");
/* harmony import */ var _star_room_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./star-room.component */ "./src/app/user/star-room/star-room.component.ts");






// import { DrFunctionalityComponent                    } from './dr-functionality/dr-functionality.component'            ;




var StarroomModule = /** @class */ (function () {
    function StarroomModule() {
    }
    StarroomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StarroomModule });
    StarroomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function StarroomModule_Factory(t) { return new (t || StarroomModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_6__["AppCommonModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
                _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["AppBootstrapModule"],
                _star_room_routing_module__WEBPACK_IMPORTED_MODULE_5__["StarroomRoutingModule"],
            ]] });
    return StarroomModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StarroomModule, { declarations: [_star_room_component__WEBPACK_IMPORTED_MODULE_8__["StarroomComponent"],
        _dr_level_selector_dr_level_selector_component__WEBPACK_IMPORTED_MODULE_7__["DrLevelSelectorComponent"],
        _dr_functional_flip_book_url_flip_book_url_component__WEBPACK_IMPORTED_MODULE_0__["FlipBookUrlComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_6__["AppCommonModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
        _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["AppBootstrapModule"],
        _star_room_routing_module__WEBPACK_IMPORTED_MODULE_5__["StarroomRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StarroomModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_6__["AppCommonModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
                    _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["AppBootstrapModule"],
                    _star_room_routing_module__WEBPACK_IMPORTED_MODULE_5__["StarroomRoutingModule"],
                ],
                declarations: [
                    _star_room_component__WEBPACK_IMPORTED_MODULE_8__["StarroomComponent"],
                    _dr_level_selector_dr_level_selector_component__WEBPACK_IMPORTED_MODULE_7__["DrLevelSelectorComponent"],
                    _dr_functional_flip_book_url_flip_book_url_component__WEBPACK_IMPORTED_MODULE_0__["FlipBookUrlComponent"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
                entryComponents: [_dr_functional_flip_book_url_flip_book_url_component__WEBPACK_IMPORTED_MODULE_0__["FlipBookUrlComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=star-room-star-room-module.js.map