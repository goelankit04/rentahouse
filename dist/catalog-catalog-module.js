(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalog-catalog-module"],{

/***/ "./src/app/catalog/catalog-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/catalog/catalog-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CatalogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogRoutingModule", function() { return CatalogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog.component */ "./src/app/catalog/catalog.component.ts");





var routes = [
    {
        path: ':catagoryId/:productType',
        component: _catalog_component__WEBPACK_IMPORTED_MODULE_2__["CatalogComponent"]
    }
];
var CatalogRoutingModule = /** @class */ (function () {
    function CatalogRoutingModule() {
    }
    CatalogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CatalogRoutingModule });
    CatalogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CatalogRoutingModule_Factory(t) { return new (t || CatalogRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return CatalogRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CatalogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/catalog/catalog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/catalog/catalog.component.ts ***!
  \**********************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_common_user_activity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-common/user-activity.service */ "./src/app/app-common/user-activity.service.ts");
/* harmony import */ var _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../amplitude/amplitude.service */ "./src/app/amplitude/amplitude.service.ts");
/* harmony import */ var _amplitude_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../amplitude/events */ "./src/app/amplitude/events.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/radio.js");
/* harmony import */ var _app_common_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-common/card/card.component */ "./src/app/app-common/card/card.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
/* harmony import */ var _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app-common/pre-loader/pre-loader.component */ "./src/app/app-common/pre-loader/pre-loader.component.ts");
















function CatalogComponent_mat_radio_group_7_mat_radio_button_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var menu_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menu_r6.name, " ");
} }
function CatalogComponent_mat_radio_group_7_mat_radio_button_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var menu_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", menu_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CatalogComponent_mat_radio_group_7_mat_radio_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CatalogComponent_mat_radio_group_7_mat_radio_button_1_Template_mat_radio_button_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var menu_r6 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.showProductType(menu_r6.productType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CatalogComponent_mat_radio_group_7_mat_radio_button_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CatalogComponent_mat_radio_group_7_mat_radio_button_1_ng_container_2_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menu_r6 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r5.selectedFilter.productType === menu_r6.productType)("value", menu_r6.productType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !menu_r6.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menu_r6.image);
} }
function CatalogComponent_mat_radio_group_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CatalogComponent_mat_radio_group_7_mat_radio_button_1_Template, 3, 4, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.filterMenu);
} }
function CatalogComponent_div_14_app_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-card", 16);
} if (rf & 2) {
    var card_r14 = ctx.$implicit;
    var i_r15 = ctx.index;
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cardData", card_r14)("mobileView", ctx_r13.mobileVersion())("index", i_r15)("hover", ctx_r13.getHoverStatus(ctx_r13.selectedFilter.productType));
} }
function CatalogComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CatalogComponent_div_14_app_card_1_Template, 1, 4, "app-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.productData);
} }
function CatalogComponent_div_15_div_1_div_6_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var combo_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa ", combo_r17.currency === "inr" ? "fa-inr" : "fa-usd", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, combo_r17 == null ? null : combo_r17.base_price, ".0"), " ");
} }
function CatalogComponent_div_15_div_1_div_6_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var combo_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa ", combo_r17.currency === "inr" ? "fa-inr" : "fa-usd", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, combo_r17 == null ? null : combo_r17.base_price, ".0"), " ");
} }
function CatalogComponent_div_15_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "For DRR*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CatalogComponent_div_15_div_1_div_6_p_5_Template, 4, 7, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "For Non DRR*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CatalogComponent_div_15_div_1_div_6_p_14_Template, 4, 7, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var combo_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (combo_r17 == null ? null : combo_r17.base_price) != (combo_r17 == null ? null : combo_r17.special_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa ", combo_r17.currency === "inr" ? "fa-inr" : "fa-usd", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 10, combo_r17 == null ? null : combo_r17.special_price, ".0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (combo_r17 == null ? null : combo_r17.base_price) != (combo_r17 == null ? null : combo_r17.sale_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa ", combo_r17.currency === "inr" ? "fa-inr" : "fa-usd", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 13, combo_r17 == null ? null : combo_r17.sale_price, ".0"), " ");
} }
function CatalogComponent_div_15_div_1_div_7_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "small", 43);
} }
function CatalogComponent_div_15_div_1_div_7_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "small", 44);
} }
function CatalogComponent_div_15_div_1_div_7_p_6_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i");
} if (rf & 2) {
    var combo_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa ", combo_r17.currency === "inr" ? "fa-inr" : "fa-usd", " font_awesome");
} }
function CatalogComponent_div_15_div_1_div_7_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CatalogComponent_div_15_div_1_div_7_p_6_i_1_Template, 1, 3, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var combo_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", combo_r17.sale_price > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 2, combo_r17 == null ? null : combo_r17.base_price, ".0"), " ");
} }
function CatalogComponent_div_15_div_1_div_7_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i");
} if (rf & 2) {
    var combo_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa ", combo_r17.currency === "inr" ? "fa-inr" : "fa-usd", " font_awesome");
} }
function CatalogComponent_div_15_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CatalogComponent_div_15_div_1_div_7_small_3_Template, 1, 0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CatalogComponent_div_15_div_1_div_7_small_4_Template, 1, 0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CatalogComponent_div_15_div_1_div_7_p_6_Template, 4, 5, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CatalogComponent_div_15_div_1_div_7_i_8_Template, 1, 3, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var combo_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (combo_r17 == null ? null : combo_r17.base_price) != (combo_r17 == null ? null : combo_r17.sale_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (combo_r17 == null ? null : combo_r17.base_price) == (combo_r17 == null ? null : combo_r17.sale_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (combo_r17 == null ? null : combo_r17.base_price) != (combo_r17 == null ? null : combo_r17.sale_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", combo_r17.sale_price > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 5, combo_r17 == null ? null : combo_r17.sale_price, ".0"), " ");
} }
function CatalogComponent_div_15_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " * Offer valid only for subscribers within India ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var _c0 = function (a0) { return { disabled: a0 }; };
function CatalogComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CatalogComponent_div_15_div_1_div_6_Template, 19, 16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CatalogComponent_div_15_div_1_div_7_Template, 11, 8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CatalogComponent_div_15_div_1_div_8_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CatalogComponent_div_15_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); var combo_r17 = ctx.$implicit; var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r35.enrollNow(combo_r17.product_id, combo_r17.product_type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Buy Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CatalogComponent_div_15_div_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); var combo_r17 = ctx.$implicit; var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r37.enrollNow(combo_r17.product_id, combo_r17.product_type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Buy Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var combo_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", combo_r17 == null ? null : combo_r17.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](combo_r17 == null ? null : combo_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (combo_r17 == null ? null : combo_r17.special_price) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (combo_r17 == null ? null : combo_r17.special_price) == null || (combo_r17 == null ? null : combo_r17.special_price) == 0 || (combo_r17 == null ? null : combo_r17.special_price) == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (combo_r17 == null ? null : combo_r17.sale_price) == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, combo_r17.sale_price == null || combo_r17.sale_price == 0 || combo_r17.sale_price == undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, !(combo_r17 == null ? null : combo_r17.sale_price)));
} }
function CatalogComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CatalogComponent_div_15_div_1_Template, 16, 11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.productData);
} }
var _c1 = function (a0, a1) { return { "background-color": a0, color: a1 }; };
function CatalogComponent_div_16_mat_card_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var event_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, event_r39.background_color, event_r39.text_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r39.text_content);
} }
function CatalogComponent_div_16_mat_card_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var event_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", event_r39 == null ? null : event_r39.author_avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CatalogComponent_div_16_mat_card_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "FIDE RATED-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var event_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", event_r39 == null ? null : event_r39.event_prize_money, " Prize Money ");
} }
function CatalogComponent_div_16_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-content", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CatalogComponent_div_16_mat_card_1_Template_mat_card_content_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); var event_r39 = ctx.$implicit; var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r46.showDetails(event_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CatalogComponent_div_16_mat_card_1_div_3_Template, 3, 5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-header", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CatalogComponent_div_16_mat_card_1_div_7_Template, 2, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-title", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CatalogComponent_div_16_mat_card_1_div_18_Template, 5, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Register Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var event_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", event_r39 == null ? null : event_r39.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", event_r39.background_color !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", event_r39 == null ? null : event_r39.author_avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r39 == null ? null : event_r39.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("", event_r39 == null ? null : event_r39.venue == null ? null : event_r39.venue.location, ", ", event_r39 == null ? null : event_r39.venue == null ? null : event_r39.venue.city, ", ", event_r39 == null ? null : event_r39.venue == null ? null : event_r39.venue.state, ", ", event_r39 == null ? null : event_r39.venue == null ? null : event_r39.venue.country, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", event_r39.duration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", event_r39 == null ? null : event_r39.event_prize_money);
} }
function CatalogComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CatalogComponent_div_16_mat_card_1_Template, 22, 10, "mat-card", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.productData);
} }
function CatalogComponent_app_pre_loader_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-pre-loader");
} }
var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(_authService, _router, _amps, _activatedRoute, _userActivity) {
        this._authService = _authService;
        this._router = _router;
        this._amps = _amps;
        this._activatedRoute = _activatedRoute;
        this._userActivity = _userActivity;
        this.CatalogComponentClass = 'app-catalog';
        this.popStatus = false;
        this.categoryId = 1;
        this.scheduled_date = [];
        this.filterMenu = [];
        this.specialProductId = 694;
        this.selectedFilter = this.filterMenu[0];
    }
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userActivity.logUserActivity('all-products');
        window.scroll(0, 0);
        this.popStatus = false;
        this._authService.getProductType().subscribe(function (res) {
            // console.log(res.data.product_types);
            for (var _i = 0, _a = res.data.product_types; _i < _a.length; _i++) {
                var i = _a[_i];
                _this.filterMenu.push({
                    name: i.display_heading,
                    productType: i.id,
                    image: i.display_image_url
                });
            }
            _this._activatedRoute.params.subscribe(function (params) {
                _this.productType = Number(params.productType);
                for (var i = 0; i < _this.filterMenu.length; i++) {
                    if (_this.productType === _this.filterMenu[i].productType) {
                        _this.selectedFilter = _this.filterMenu[i];
                    }
                }
                _this.getAllProduct(Number(_this.selectedFilter.productType));
            });
        });
    };
    CatalogComponent.prototype.enrollNow = function (productId, product_type) {
        // logging the combo offer
        this._userActivity.logUserActivity('buy-product', productId);
        if (this._authService.isUserLoggedIn()) {
            this.product_type = product_type;
            this._router.navigate(['/direct'], {
                queryParams: { productType: product_type, product: productId }
            });
            // this.gotoCheckout(productId);
        }
        else {
            this._router.navigate(['/direct'], {
                queryParams: { productType: product_type, product: productId }
            });
            // this._router.navigateByUrl(`/direct?product=${productId}&productType=${product_type}`);
        }
    };
    CatalogComponent.prototype.gotoCheckout = function (cardId) {
        this._router.navigateByUrl("payment/checkout/" + this.categoryId + "/" + this.product_type + "/" + cardId);
    };
    CatalogComponent.prototype.getCurrency = function (combo) {
        return this._authService.isUserLoggedIn()
            ? combo !== undefined
                ? combo.currency === 'inr'
                    ? 'fa-inr'
                    : 'fa-usd'
                : localStorage.getItem('country').toLowerCase() === 'india'
                    ? 'fa-inr'
                    : 'fa-usd'
            : localStorage.getItem('country').toLowerCase() === 'india'
                ? 'fa-inr'
                : 'fa-usd';
    };
    CatalogComponent.prototype.showProductType = function (productId) {
        for (var _i = 0, _a = this.filterMenu; _i < _a.length; _i++) {
            var menu = _a[_i];
            if (menu.productType === productId) {
                this.selectedFilter = menu;
                this._router.navigateByUrl("/product-catalog/1/" + menu.productType);
                this.getAllProduct(Number(this.selectedFilter.productType));
                break;
            }
        }
    };
    CatalogComponent.prototype.getAllProduct = function (productType) {
        var _this = this;
        this.loader = true;
        var parmas = {
            categoryId: 1,
            productType: productType,
            country: localStorage.getItem('country') === null
                ? 'India'
                : localStorage.getItem('country')
        };
        this._authService.getAllProductByProductType(parmas).subscribe(function (res) {
            _this.loader = false;
            _this.productData =
                _this.selectedFilter.productType === 11
                    ? res.data.products.reverse()
                    : res.data.products;
            _this._amps.setAmplitudeEvents(_amplitude_events__WEBPACK_IMPORTED_MODULE_5__["events"].event_4, {
                success: 'yes',
                category: 'chess',
                productType: _this.getProductTypeName(productType)
            });
        }, function (err) {
            _this.loader = false;
            _this._amps.setAmplitudeEvents(_amplitude_events__WEBPACK_IMPORTED_MODULE_5__["events"].event_4, {
                success: 'no',
                error: err,
                category: 'chess',
                productType: _this.getProductTypeName(productType)
            });
            // console.log(err);
        });
    };
    CatalogComponent.prototype.getProductTypeName = function (productType) {
        var productTypeName = '';
        switch (productType) {
            case 1:
                productTypeName = 'Dream Room';
                break;
            case 2:
                productTypeName = 'Class Room';
                break;
            case 3:
                productTypeName = 'Live Room';
                break;
            case 4:
                productTypeName = '121 Room';
                break;
            case 6:
                productTypeName = 'Camp Room';
                break;
            case 7:
                productTypeName = 'Special Offers';
                break;
            case 11:
                productTypeName = 'Event Room';
                break;
            case 13:
                productTypeName = 'Star Room';
                break;
        }
        return productTypeName;
    };
    CatalogComponent.prototype.showDetails = function (data) {
        this._router.navigateByUrl("product/1/" + data.product_type + "/" + data.product_id);
    };
    CatalogComponent.prototype.mobileVersion = function () {
        return window.innerWidth < 650;
    };
    CatalogComponent.prototype.getHoverStatus = function (value) {
        var blockedProductType = [13];
        for (var i = 0; i < blockedProductType.length; i++) {
            if (value === blockedProductType[i]) {
                return false;
            }
        }
        return true;
    };
    CatalogComponent.ɵfac = function CatalogComponent_Factory(t) { return new (t || CatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_4__["AmplitudeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_common_user_activity_service__WEBPACK_IMPORTED_MODULE_3__["UserActivityService"])); };
    CatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CatalogComponent, selectors: [["app-catalog"]], hostVars: 2, hostBindings: function CatalogComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.CatalogComponentClass);
        } }, decls: 18, vars: 5, consts: [[1, "drr", 2, "color", "grey", "font-weight", "400", "font-size", "12px", "margin", "0"], [2, "font-size", "14px"], [1, "filter_by"], ["class", "example-radio-group", 4, "ngIf"], [1, "drr1", 2, "color", "grey", "font-weight", "400", "font-size", "12px", "margin", "2% 2%"], ["id", "grid", 1, "product_container"], ["class", "card-container", 4, "ngIf"], ["class", "combo_offers ", 4, "ngIf"], ["class", "events", 4, "ngIf"], [4, "ngIf"], [1, "example-radio-group"], [3, "checked", "value", "change", 4, "ngFor", "ngForOf"], [3, "checked", "value", "change"], [2, "width", "160px", "height", "39px", "border-radius", "5px", 3, "src"], [1, "card-container"], [3, "cardData", "mobileView", "index", "hover", 4, "ngFor", "ngForOf"], [3, "cardData", "mobileView", "index", "hover"], [1, "combo_offers"], ["class", "rows ", 4, "ngFor", "ngForOf"], [1, "rows"], [1, "combo_image"], ["alt", "combo ", 1, "images", 2, "object-fit", "unset", 3, "src"], [1, "combo_data"], [1, "combo_para"], ["class", "pricing ", 4, "ngIf"], ["class", "pricing", 4, "ngIf"], ["class", "only_indian", 4, "ngIf"], [1, "rupees"], [1, "by", 3, "ngClass", "click"], [1, "rupee"], [1, "buy_btn", 3, "ngClass", "click"], [1, "pricing"], [1, "price_container"], [1, "price_type"], [1, "price_box"], ["class", "price_base", 4, "ngIf"], [1, "price_new"], [1, "price_container", "marginal_space"], [1, "price_base"], ["style", "display: flex;align-items: center;margin-top:-18%;margin-right: 4%;color: #a0ce4e;font-size: 16px;font-weight: 500;padding-top: 4%;", 4, "ngIf"], ["style", "display: flex;align-items: center;margin-top:-25%;margin-right: 4%;color: #a0ce4e;font-size: 16px;font-weight: 500;padding-top: 4%;", 4, "ngIf"], ["class", "price_base ", 4, "ngIf"], [3, "class", 4, "ngIf"], [2, "display", "flex", "align-items", "center", "margin-top", "-18%", "margin-right", "4%", "color", "#a0ce4e", "font-size", "16px", "font-weight", "500", "padding-top", "4%"], [2, "display", "flex", "align-items", "center", "margin-top", "-25%", "margin-right", "4%", "color", "#a0ce4e", "font-size", "16px", "font-weight", "500", "padding-top", "4%"], [1, "only_indian"], [2, "font-size", "13px", "font-style", "italic", "padding-top", "2%"], [1, "events"], ["class", "card_container", 4, "ngFor", "ngForOf"], [1, "card_container"], ["mat-card-image", "", 1, "image_container_mentor", 3, "src"], [3, "click"], ["class", "ribbon", 3, "ngStyle", 4, "ngIf"], [1, "detail_container"], [1, "card_header", "mat-card-header"], [1, "mat-card-header-text"], ["style", "width:50px;height:50px;padding-top:5px;", 4, "ngIf"], [1, "header_box"], [1, "header-info"], [1, "title", "mat-card-title", "ng-star-inserted"], [1, "detail"], [1, "value"], ["src", "assets/date.svg"], ["class", "detail", 4, "ngIf"], [1, "main-button"], ["type", "button", 1, "register_btn"], [1, "ribbon", 3, "ngStyle"], [2, "width", "50px", "height", "50px", "padding-top", "5px"], ["alt", "", "draggable", "false", "mat-card-image", "", 1, "author_avatar", "mat-card-image", 3, "src"], [2, "font-size", "15px", "color", "#666766", "font-weight", "bold"]], template: function CatalogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All Products");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "small", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "* DRR - Dream Room Resident ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "(who has already enrolled for nurtr's Chess Dream Room)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CatalogComponent_mat_radio_group_7_Template, 2, 1, "mat-radio-group", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "small", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "* DRR - Dream Room Resident ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "(who has already enrolled for nurtr's Chess Dream Room) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CatalogComponent_div_14_Template, 2, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CatalogComponent_div_15_Template, 2, 1, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CatalogComponent_div_16_Template, 2, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CatalogComponent_app_pre_loader_17_Template, 1, 0, "app-pre-loader", 9);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filterMenu.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedFilter.productType === 2 || ctx.selectedFilter.productType === 3 || ctx.selectedFilter.productType === 4 || ctx.selectedFilter.productType === 6 || ctx.selectedFilter.productType === 13 || ctx.selectedFilter.productType === 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedFilter.productType === 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedFilter.productType === 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loader);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"], _app_common_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_10__["PreLoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], encapsulation: 2 });
    return CatalogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CatalogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-catalog',
                templateUrl: './catalog.component.html'
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_4__["AmplitudeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _app_common_user_activity_service__WEBPACK_IMPORTED_MODULE_3__["UserActivityService"] }]; }, { CatalogComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/catalog/catalog.module.ts":
/*!*******************************************!*\
  !*** ./src/app/catalog/catalog.module.ts ***!
  \*******************************************/
/*! exports provided: CatalogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogModule", function() { return CatalogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog.component */ "./src/app/catalog/catalog.component.ts");
/* harmony import */ var _catalog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog-routing.module */ "./src/app/catalog/catalog-routing.module.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-material-module */ "./src/app/app-material-module.ts");
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");







var CatalogModule = /** @class */ (function () {
    function CatalogModule() {
    }
    CatalogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CatalogModule });
    CatalogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CatalogModule_Factory(t) { return new (t || CatalogModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                _catalog_routing_module__WEBPACK_IMPORTED_MODULE_3__["CatalogRoutingModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"]
            ]] });
    return CatalogModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CatalogModule, { declarations: [_catalog_component__WEBPACK_IMPORTED_MODULE_2__["CatalogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
        _catalog_routing_module__WEBPACK_IMPORTED_MODULE_3__["CatalogRoutingModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                    _catalog_routing_module__WEBPACK_IMPORTED_MODULE_3__["CatalogRoutingModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"]
                ],
                declarations: [
                    _catalog_component__WEBPACK_IMPORTED_MODULE_2__["CatalogComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=catalog-catalog-module.js.map