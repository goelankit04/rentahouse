(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["epi-list-epi-list-module"],{

/***/ "./src/app/user/star-room/landing/epi-list/epi-list-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user/star-room/landing/epi-list/epi-list-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: EpiListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpiListRoutingModule", function() { return EpiListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _epi_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./epi-list.component */ "./src/app/user/star-room/landing/epi-list/epi-list.component.ts");





var routes = [
    {
        path: ':slug/:level',
        component: _epi_list_component__WEBPACK_IMPORTED_MODULE_2__["EpiListComponent"]
    }
];
var EpiListRoutingModule = /** @class */ (function () {
    function EpiListRoutingModule() {
    }
    EpiListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EpiListRoutingModule });
    EpiListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EpiListRoutingModule_Factory(t) { return new (t || EpiListRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return EpiListRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EpiListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EpiListRoutingModule, [{
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

/***/ "./src/app/user/star-room/landing/epi-list/epi-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user/star-room/landing/epi-list/epi-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: EpiListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpiListComponent", function() { return EpiListComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var _star_room_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../star-room-data.service */ "./src/app/user/star-room/star-room-data.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _app_common_link_viewer_link_viewer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../app-common/link-viewer/link-viewer.component */ "./src/app/app-common/link-viewer/link-viewer.component.ts");
/* harmony import */ var _app_common_pop_blocker_message_pop_blocker_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../app-common/pop-blocker-message/pop-blocker-message.component */ "./src/app/app-common/pop-blocker-message/pop-blocker-message.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../amplitude/amplitude.service */ "./src/app/amplitude/amplitude.service.ts");
/* harmony import */ var _amplitude_events__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../amplitude/events */ "./src/app/amplitude/events.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_common_upcoming_events_section_upcoming_events_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../app-common/upcoming-events-section/upcoming-events-section.component */ "./src/app/app-common/upcoming-events-section/upcoming-events-section.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/progress-spinner.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");































function EpiListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EpiListComponent_div_4_div_1_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 24);
} }
function EpiListComponent_div_4_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", episode_r5.duration, " min");
} }
function EpiListComponent_div_4_div_1_div_12_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpiListComponent_div_4_div_1_div_12_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.zoomWebinar(episode_r5, episode_r5.episode_id, episode_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Join Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var _c0 = function (a0) { return { not_active_icon: a0 }; };
function EpiListComponent_div_4_div_1_div_12_span_2_img_1_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpiListComponent_div_4_div_1_div_12_span_2_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit; var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.openExample(episode_r5.level, episode_r5.episode_id, episode_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r17.getButtonLink(episode_r5.is_example_ready, 3), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, episode_r5.is_example_ready === 0));
} }
function EpiListComponent_div_4_div_1_div_12_span_2_img_2_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpiListComponent_div_4_div_1_div_12_span_2_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit; var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r23.openPuzzle(episode_r5.level, episode_r5.episode_id, episode_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r18.getButtonLink(episode_r5.is_puzzle_ready, 1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, episode_r5.is_puzzle_ready === 0));
} }
function EpiListComponent_div_4_div_1_div_12_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EpiListComponent_div_4_div_1_div_12_span_2_img_1_Template, 1, 4, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EpiListComponent_div_4_div_1_div_12_span_2_img_2_Template, 1, 4, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpiListComponent_div_4_div_1_div_12_span_2_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r27.openFlipBook(episode_r5.flipbook_url, episode_r5.episode_id, episode_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.categoryId !== 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.categoryId !== 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r13.getButtonLink(episode_r5.flipbook_url, 4), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, episode_r5.flipbook_url === ""));
} }
function EpiListComponent_div_4_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EpiListComponent_div_4_div_1_div_12_button_1_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EpiListComponent_div_4_div_1_div_12_span_2_Template, 4, 6, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", episode_r5.is_session_live);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !episode_r5.is_session_live);
} }
function EpiListComponent_div_4_div_1_div_13_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpiListComponent_div_4_div_1_div_13_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r34.zoomWebinar(episode_r5, episode_r5.episode_id, episode_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Join Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EpiListComponent_div_4_div_1_div_13_span_2_input_5_Template(rf, ctx) { if (rf & 1) {
    var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function EpiListComponent_div_4_div_1_div_13_span_2_input_5_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit; var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r38.fileChange($event, episode_r5.level, episode_r5.episode_id, episode_r5.is_user_puzzle_submission, episode_r5.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EpiListComponent_div_4_div_1_div_13_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpiListComponent_div_4_div_1_div_13_span_2_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43); var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r41.downloadFiles(episode_r5.question_pgn_url, episode_r5.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EpiListComponent_div_4_div_1_div_13_span_2_input_5_Template, 1, 0, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpiListComponent_div_4_div_1_div_13_span_2_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43); var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r44.downloadFiles(episode_r5.solution_pgn_url, episode_r5.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpiListComponent_div_4_div_1_div_13_span_2_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43); var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r46.openFlipBook(episode_r5.flipbook_url, episode_r5.episode_id, episode_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r33.getButtonLink(episode_r5.question_pgn_url != null ? 1 : 0, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r33.getButtonLink(!episode_r5.is_user_puzzle_submission && episode_r5.question_pgn_url != null ? 1 : 0, 9), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !episode_r5.is_user_puzzle_submission && episode_r5.question_pgn_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r33.getButtonLink(episode_r5.is_user_puzzle_submission && episode_r5.solution_pgn_url != null ? 1 : 0, 7), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r33.getButtonLink(episode_r5.flipbook_url, 4), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function EpiListComponent_div_4_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EpiListComponent_div_4_div_1_div_13_button_1_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EpiListComponent_div_4_div_1_div_13_span_2_Template, 8, 5, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", episode_r5.is_session_live);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !episode_r5.is_session_live);
} }
function EpiListComponent_div_4_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpiListComponent_div_4_div_1_div_14_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52); var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r50.openPuzzle(episode_r5.level, episode_r5.episode_id, episode_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpiListComponent_div_4_div_1_div_14_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52); var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r53.openVideo(episode_r5.video1_url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpiListComponent_div_4_div_1_div_14_Template_img_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52); var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r55.openVideo(episode_r5.video2_url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r10.getButtonLink(episode_r5.is_puzzle_ready, 1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, episode_r5.is_puzzle_ready === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("wistia_embed ", episode_r5.video1_url, " popover=true popoverAnimateThumbnail=true popoverContent=link videoFoam=true");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r10.getButtonLink(episode_r5.video1_url, 6), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, !(episode_r5 == null ? null : episode_r5.video1_url)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("wistia_embed ", episode_r5.video2_url, " popover=true popoverAnimateThumbnail=true popoverContent=link videoFoam=true");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r10.getButtonLink(episode_r5.video2_url, 7), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, !(episode_r5 == null ? null : episode_r5.video2_url)));
} }
var _c1 = function (a0) { return { cursor_status: a0 }; };
var _c2 = function (a0) { return { card_not_active: a0 }; };
function EpiListComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpiListComponent_div_4_div_1_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r59); var episode_r5 = ctx.$implicit; var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r58.gotoVideoDetail(episode_r5.episode_id, episode_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpiListComponent_div_4_div_1_Template_p_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r59); var episode_r5 = ctx.$implicit; var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r60.gotoVideoDetail(episode_r5.episode_id, episode_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EpiListComponent_div_4_div_1_img_8_Template, 1, 0, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EpiListComponent_div_4_div_1_span_9_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EpiListComponent_div_4_div_1_div_12_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, EpiListComponent_div_4_div_1_div_13_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, EpiListComponent_div_4_div_1_div_14_Template, 13, 18, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r5 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c1, !episode_r5.is_session_live && episode_r5.is_available));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c2, !(episode_r5 == null ? null : episode_r5.is_available)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", episode_r5.thumbnail_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Episode ", episode_r5.episode_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", episode_r5.duration !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", episode_r5.duration !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](episode_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(episode_r5 == null ? null : episode_r5.video1_url) && !(episode_r5 == null ? null : episode_r5.video2_url) && ctx_r3.pType != 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(episode_r5 == null ? null : episode_r5.video1_url) && !(episode_r5 == null ? null : episode_r5.video2_url) && ctx_r3.pType == 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (episode_r5 == null ? null : episode_r5.video1_url) || (episode_r5 == null ? null : episode_r5.video2_url));
} }
function EpiListComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
var _c3 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
function EpiListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EpiListComponent_div_4_div_1_Template, 15, 14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EpiListComponent_div_4_div_3_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "pagination-controls", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function EpiListComponent_div_4_Template_pagination_controls_pageChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r63); var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r62.p = $event; return ctx_r62.gotoPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.episodeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 2, ctx_r1.pageList, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c3, ctx_r1.p)));
} }
function EpiListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Episodes are not available for this product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var EpiListComponent = /** @class */ (function () {
    function EpiListComponent(router, routes, _authService, _dreamroomData, dialog, _breadCrumb, _userService, _toasterService, sanitizer, _amps) {
        var _this = this;
        this.router = router;
        this.routes = routes;
        this._authService = _authService;
        this._dreamroomData = _dreamroomData;
        this.dialog = dialog;
        this._breadCrumb = _breadCrumb;
        this._userService = _userService;
        this._toasterService = _toasterService;
        this.sanitizer = sanitizer;
        this._amps = _amps;
        this.epiListComponentClass = "app-epi-list";
        this.episodeReceived = false;
        this.totalEpisodes = 22;
        this.episodeCount = 10;
        this.productType = 13;
        this.categoryId = 1;
        this.currentPage = 1;
        this.episodeList = [];
        this.pageList = [];
        this.user_level = ["Beginner", "Intermediate", "Advance"];
        this.UpComingLiveRoom = [];
        this.UpComingClassRoom = [];
        this.openPopup = false;
        this.uplaoder = 1;
        this.first_name = localStorage.getItem("first_name");
        this.routes.params.subscribe(function (params) {
            _this.level = params.level;
            if (params.level !== null) {
                _this.productId = Number(params.level);
                _this.level_difficulty = Number(params.level);
                _this._dreamroomData.setLevel(_this.level_difficulty);
            }
        });
    }
    EpiListComponent.prototype.ngOnInit = function () {
        this.router.navigateByUrl("/user/star-room/star-landing/star-episode/" + this.first_name + "/" + this.productId);
        this.pType = localStorage.getItem("productType");
        if (this.productType == 1) {
            this.productTypeName = "dreamroom";
        }
        if (this.productType == 13) {
            this.productTypeName = "star-room";
        }
        if (this.productType == 2) {
            this.productTypeName = "class-room";
        }
        if (this.productType == 3) {
            this.productTypeName = "live-room";
        }
        if (this.productType == 6) {
            this.productTypeName = "camp-room";
        }
        if (this.productType == 4) {
            this.productTypeName = "121-room";
        }
        if (this.productType == 16) {
            this.productTypeName = "Super 64";
        }
        // this.getDataFromServer();
        this.getUpcomingEvent();
        this.userProduct();
    };
    EpiListComponent.prototype.getButtonLink = function (episodeStatus, buttonId) {
        if (episodeStatus) {
            // console.log(episodeStatus,"142");
            switch (buttonId) {
                case 1:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/puzzle_active.svg";
                case 2:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/assin_active.svg";
                case 3:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/example_active.svg";
                case 4:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/flip_book_active.svg";
                case 5:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/report_active.svg";
                case 6:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/video_active.png";
                case 7:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/solution_active.png";
                case 8:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/download_active.png";
                case 9:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/upload_active.png";
            }
        }
        else {
            switch (buttonId) {
                case 1:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/puzzle_gray.svg";
                case 2:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/assin_gray.svg";
                case 3:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/example_gray.svg";
                case 4:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/flip_book_gray.svg";
                case 5:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/report_gray.svg";
                case 6:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/video_grey.png";
                case 7:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/solution_grey.png";
                case 8:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/download_grey.png";
                case 9:
                    return "assets/chess/Dreamroom/episode-list/card/assignment/upload_grey.png";
            }
        }
    };
    EpiListComponent.prototype.gotoPage = function (pageNumber) {
        this.currentPage = pageNumber;
        this.episodeReceived = false;
        this.getDataFromServer();
    };
    EpiListComponent.prototype.gotoPrevPage = function (pageNumber) {
        if (this.currentPage !== 1) {
            this.episodeList = this._dreamroomData.getEpisodeByPage(--this.currentPage);
        }
    };
    EpiListComponent.prototype.userProduct = function () {
        var _this = this;
        var data = {
            categoryId: this.productId,
            productType: 13
        };
        this._authService.getUserProduct(data).subscribe(function (res) {
            _this.categoryId = res.data.products.filter(function (product) { return product.product_id === _this.productId; })[0].category_id;
            _this.getDataFromServer();
        });
    };
    EpiListComponent.prototype.getPagination = function () {
        this.pageList = [];
        this.pageNumber = Math.ceil(this.totalEpisodes / this.episodeCount);
        // console.log(this.pageNumber,"pageNumber");
        for (var i = 1; i <= this.totalEpisodes; i++) {
            this.pageList.push(i);
        }
    };
    EpiListComponent.prototype.gotoNextPage = function (pageNumber) {
        if (this.currentPage === pageNumber) {
        }
        else {
            this.episodeList = this._dreamroomData.getEpisodeByPage(++this.currentPage);
        }
    };
    EpiListComponent.prototype.openVideo = function (video_url) {
        // console.log(episode,video_url)
        // this.openPopup=true;
        this.wistiaUrl = video_url;
    };
    EpiListComponent.prototype.gotoVideoDetail = function (episode_id, id) {
        if (this.episodeList[this.getIdIndex(id)].is_available &&
            !this.episodeList[this.getIdIndex(id)].is_session_live) {
            // if (this.episodeList[this.getIdIndex(id)].video_url !== null) {
            this._breadCrumb.episodeBreadCrumb(episode_id);
            // New Video Page
            this.router.navigateByUrl("/user/" + this.productTypeName + "/video-content/" + this.categoryId + "/" + localStorage.getItem("productType") + "/" + this.productId + "/" + episode_id + "/0");
            // this.router.navigate([
            //   "/user/star-room/dr-functional/videos",
            //   this.categoryId,
            //   this.productType,
            //   this.productId,
            //   id,
            // ]);
            // }
        }
    };
    EpiListComponent.prototype.openFlipBook = function (flipbook_url, episode_id, id) {
        if (this.episodeList[this.getIdIndex(id)].is_available) {
            if (flipbook_url !== "" && flipbook_url !== null) {
                var dialogRef = this.dialog.open(_app_common_link_viewer_link_viewer_component__WEBPACK_IMPORTED_MODULE_8__["LinkViewerComponent"], {
                    width: "90%",
                    height: "90%",
                    data: {
                        url: flipbook_url
                    }
                });
            }
        }
    };
    EpiListComponent.prototype.openExample = function (level, episode_id, id) {
        // console.log(level, "level")
        level = 13;
        if (this.episodeList[this.getIdIndex(id)].is_available) {
            if (this.episodeList[this.getIdIndex(id)].is_example_ready) {
                this._breadCrumb.exampleBreadCrumb(level);
                if (this.pType != 16) {
                    this.router.navigateByUrl("/user/star-room/dr-functionality/example/" + this.productId + "/" + level + "/" + episode_id);
                }
            }
        }
    };
    EpiListComponent.prototype.openPuzzle = function (level, episode_id, id) {
        level = 13;
        if (this.episodeList[this.getIdIndex(id)].is_available) {
            if (this.episodeList[this.getIdIndex(id)].is_puzzle_ready) {
                this._breadCrumb.puzzleBreadCrumb(level);
                // if(this.pType==16){
                //   this.router.navigateByUrl(
                //     `/user/star-room/dr-functionality/puzzle/${
                //       this.productId
                //     }/${level}/${episode_id}/board/open-puzzle/1`
                //   );
                // }else{
                this.router.navigateByUrl("/user/star-room/dr-functionality/puzzle/" + this.productId + "/" + level + "/" + episode_id + "/board/puzzle-play/1");
                // }
                // this.router.navigateByUrl(
                //   `/user/star-room/dr-functionality/puzzle/${
                //     this.productId
                //   }/${level}/${episode_id}`
                // );
            }
        }
    };
    // Start for super 64 temp (product type 16)
    EpiListComponent.prototype.downloadFiles = function (url, name) {
        var _this = this;
        if (url) {
            file_saver__WEBPACK_IMPORTED_MODULE_12__["saveAs"](url, name);
            setTimeout(function () {
                _this.getDataFromServer();
            }, 1000);
        }
    };
    EpiListComponent.prototype.fileChange = function (event, level, episode_id, is_user_puzzle_submission, name) {
        // t = true;
        if (!is_user_puzzle_submission) {
            var submissionFile = event.target.files;
            this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].auth_target + "/product/save/user/puzzle/submission";
            this.makeFileRequest(this.url, [], submissionFile, episode_id, name).then(function (result) { }, function (error) { });
        }
    };
    EpiListComponent.prototype.makeFileRequest = function (url, params, files, episode_id, name) {
        var _this = this;
        var that = this;
        // that.imageLoader = true;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("episodeName", name);
            formData.append("userId", Number(localStorage.getItem("id")));
            formData.append("productId", Number(_this.productId));
            formData.append("episodeId", episode_id);
            formData.append("file", files[0], files[0].name);
            (xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 ||
                        xhr.status === 201 ||
                        xhr.status === 205 ||
                        xhr.status === 304) {
                        // that.imageLoader = false;
                        var profileImage2 = JSON.parse(xhr.response).data
                            .profile_image_url;
                        // that.profileImage = profileImage2;
                        if (JSON.parse(xhr.response).message === "Please select valid file") {
                        }
                        else {
                            that.getDataFromServer();
                            that._toasterService.pop("success", "File Uploaded Successfully");
                        }
                    }
                    else {
                    }
                }
            }),
                function (error) { };
            xhr.open("POST", url, true);
            xhr.setRequestHeader("enctype", "multipart/form-data");
            xhr.setRequestHeader("accesstoken", localStorage.getItem("access_token"));
            xhr.send(formData);
        });
    };
    EpiListComponent.prototype.uplaodProblem = function (level, episode_id) { };
    // End for super 64 temp (product type 16)
    EpiListComponent.prototype.getDataFromServer = function () {
        var _this = this;
        this._authService
            .getUserDreamRoomEpisodeList({
            categoryId: this.categoryId,
            productType: Number(localStorage.getItem("productType")),
            productId: Number(this.level),
            limit: this.episodeCount,
            offset: this.episodeCount * (this.currentPage - 1),
            isHomework: false
        })
            .subscribe(function (res) {
            _this.productAvailable = res.data.isUserProduct;
            var sampleArray = res.data.episodes;
            _this.totalEpisodes = res.data.count;
            _this.getPagination();
            for (var _i = 0, sampleArray_1 = sampleArray; _i < sampleArray_1.length; _i++) {
                var data = sampleArray_1[_i];
                if (data.thumbnail_url == null) {
                    data.thumbnail_url =
                        "assets/chess/Dreamroom/episode-list/card/thumbnail.png";
                }
            }
            _this.episodeList = sampleArray;
            _this.episodeReceived = true;
            // this.totalEpisodes=res.data.count;
            // console.log(this.totalEpisodes,"total episodes")
        }, function (error) {
            // console.log(error);
        });
    };
    EpiListComponent.prototype.getUpcomingEvent = function () {
        var _this = this;
        this._authService.getUpcomingUserDashboard().subscribe(function (res) {
            _this.UpComingClassRoom = res.data.productList[0].products;
            _this.UpComingLiveRoom = res.data.productList[1].products;
        });
    };
    EpiListComponent.prototype.openDashboard = function () {
        this._breadCrumb.levelSelectorBreadcrumb(0);
        this._breadCrumb.episodeBreadCrumb(0);
        this._breadCrumb.puzzleBreadCrumb(0);
        this._breadCrumb.exampleBreadCrumb(0);
        this.router.navigateByUrl("/user/dashboard/" + localStorage.getItem("first_name"));
    };
    EpiListComponent.prototype.getIdIndex = function (class_id) {
        for (var i = 0; i < this.episodeList.length; i++) {
            if (this.episodeList[i].id === class_id) {
                return i;
            }
        }
    };
    EpiListComponent.prototype.zoomWebinar = function (episode, episodeId, id) {
        var _this = this;
        this.cardSpinner = true;
        this._userService
            .getZoomWebinarLink({
            userId: localStorage.getItem("id"),
            productId: this.productId,
            episodeId: episodeId,
            productType: Number(localStorage.getItem("productType")),
            user_product_episodes_id: id
        })
            .subscribe(function (res) {
            _this.cardSpinner = false;
            var popUp = window.open(res.data.join_url, "_blank");
            if (popUp == null || typeof popUp === "undefined") {
                // now open the modal here to inform user regarding the pop-up blocker
                var dialogRef = _this.dialog
                    .open(_app_common_pop_blocker_message_pop_blocker_message_component__WEBPACK_IMPORTED_MODULE_9__["PopBlockerMessageComponent"], {
                    width: "600px",
                    height: "520px"
                })
                    .updatePosition({ top: "6em" });
            }
            else {
                _this._amps.setAmplitudeEvents(_amplitude_events__WEBPACK_IMPORTED_MODULE_14__["events"].event_23, {
                    productId: _this.productId,
                    episodeId: episodeId,
                    productName: episode.name,
                    duration: episode.duration,
                    productType: _this.productTypeName
                });
                popUp.focus();
            }
        }, function (error) {
            _this.cardSpinner = false;
            _this._amps.setAmplitudeEvents(_amplitude_events__WEBPACK_IMPORTED_MODULE_14__["events"].event_23, {
                productId: _this.productId,
                episodeId: episodeId,
                productName: episode.name,
                duration: episode.duration,
                productType: _this.productTypeName,
                error: error.error.message
            });
            _this._toasterService.pop("errors", error.error.message);
        });
    };
    EpiListComponent.ɵfac = function EpiListComponent_Factory(t) { return new (t || EpiListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_star_room_data_service__WEBPACK_IMPORTED_MODULE_5__["StarroomDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_13__["AmplitudeService"])); };
    EpiListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EpiListComponent, selectors: [["app-epi-list"]], hostVars: 2, hostBindings: function EpiListComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.epiListComponentClass);
        } }, decls: 8, vars: 3, consts: [[1, "episode-list-container", "container-fluid"], [1, "row", "w-100"], [1, "col-md-8"], ["class", "data_loading", 4, "ngIf"], ["class", "episode-group", 4, "ngIf"], ["class", "d-flex flex-column align-items-center no_data", 4, "ngIf"], [1, "col-md-4"], [1, "data_loading"], [1, "episode-group"], ["class", "episode-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "pagination"], [4, "ngFor", "ngForOf"], [3, "pageChange"], [1, "episode-card", 3, "ngClass"], [1, "card-container", 3, "ngClass"], [1, "header"], [1, "play-icon"], ["draggable", "false", 3, "src", "click"], [1, "header_text"], [1, "number", 3, "click"], ["draggable", "false", "src", "assets/chess/Dreamroom/episode-list/card/stats/video.svg", 4, "ngIf"], [4, "ngIf"], [1, "name"], ["class", "icons", 4, "ngIf"], ["draggable", "false", "src", "assets/chess/Dreamroom/episode-list/card/stats/video.svg"], [1, "icons"], ["class", "button_join", 3, "click", 4, "ngIf"], ["style", "width: 100%;display: flex;justify-content: space-between;", 4, "ngIf"], [1, "button_join", 3, "click"], [2, "width", "100%", "display", "flex", "justify-content", "space-between"], ["draggable", "false", "matTooltip", "Examples", 3, "src", "ngClass", "click", 4, "ngIf"], ["draggable", "false", "matTooltip", "Puzzle", 3, "src", "ngClass", "click", 4, "ngIf"], ["draggable", "false", "matTooltip", "Post study material", 3, "src", "ngClass", "click"], ["draggable", "false", "matTooltip", "Examples", 3, "src", "ngClass", "click"], ["draggable", "false", "matTooltip", "Puzzle", 3, "src", "ngClass", "click"], ["draggable", "false", "matTooltip", "Assignment", 3, "src", "click"], [1, "file_upload"], ["draggable", "false", "matTooltip", "Upload", 1, "profile_text", 3, "src"], ["type", "file", "title", "", "matTooltip", "Upload", "id", "file-input", "accept", ".txt, .pgn", 3, "change", 4, "ngIf"], ["draggable", "false", "matTooltip", "Solution", 3, "src", "click"], ["draggable", "false", "matTooltip", "Flipbook", 3, "src", "click"], ["type", "file", "title", "", "matTooltip", "Upload", "id", "file-input", "accept", ".txt, .pgn", 3, "change"], [1, "video_box"], [1, "wistia_responsive_padding"], [1, "wistia_responsive_wrapper", 2, "height", "100%", "left", "0", "position", "relative", "top", "0", "width", "100%"], ["matTooltip", "Hints", 2, "display", "inline", "margin-left", "-1.7em"], ["draggable", "false", 3, "src", "ngClass", "click"], ["matTooltip", "Solutions", 2, "display", "inline", "margin-left", "-1.7em"], ["draggable", "false", 1, "color_solution", 3, "src", "ngClass", "click"], [1, "d-flex", "flex-column", "align-items-center", "no_data"], [1, "err_icon"]], template: function EpiListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EpiListComponent_div_3_Template, 2, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EpiListComponent_div_4_Template, 6, 7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EpiListComponent_div_5_Template, 5, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-upcoming-events-section");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.episodeReceived);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.episodeReceived);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.episodeReceived && ctx.episodeList.length === 0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _app_common_upcoming_events_section_upcoming_events_section_component__WEBPACK_IMPORTED_MODULE_16__["UpcomingEventsSectionComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["PaginatePipe"]], encapsulation: 2 });
    return EpiListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EpiListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: "app-epi-list",
                templateUrl: "./epi-list.component.html"
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _star_room_data_service__WEBPACK_IMPORTED_MODULE_5__["StarroomDataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbService"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] }, { type: _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_13__["AmplitudeService"] }]; }, { epiListComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ["class"]
        }] }); })();


/***/ }),

/***/ "./src/app/user/star-room/landing/epi-list/epi-list.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/user/star-room/landing/epi-list/epi-list.module.ts ***!
  \********************************************************************/
/*! exports provided: EpiListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpiListModule", function() { return EpiListModule; });
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _epi_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./epi-list.component */ "./src/app/user/star-room/landing/epi-list/epi-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _epi_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./epi-list-routing.module */ "./src/app/user/star-room/landing/epi-list/epi-list-routing.module.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app-material-module */ "./src/app/app-material-module.ts");
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app-bootstrap.module */ "./src/app/app-bootstrap.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");









var EpiListModule = /** @class */ (function () {
    function EpiListModule() {
    }
    EpiListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EpiListModule });
    EpiListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function EpiListModule_Factory(t) { return new (t || EpiListModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_0__["AppCommonModule"],
                _epi_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["EpiListRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]
            ]] });
    return EpiListModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EpiListModule, { declarations: [_epi_list_component__WEBPACK_IMPORTED_MODULE_1__["EpiListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
        _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_0__["AppCommonModule"],
        _epi_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["EpiListRoutingModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EpiListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                    _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_0__["AppCommonModule"],
                    _epi_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["EpiListRoutingModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"]
                ],
                declarations: [
                    _epi_list_component__WEBPACK_IMPORTED_MODULE_1__["EpiListComponent"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
                entryComponents: [],
                exports: [],
                providers: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=epi-list-epi-list-module.js.map