(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-work-home-work-module"],{

/***/ "./src/app/user/star-room/landing/home-work/home-work.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user/star-room/landing/home-work/home-work.component.ts ***!
  \*************************************************************************/
/*! exports provided: HomeWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeWorkComponent", function() { return HomeWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _star_room_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../star-room-data.service */ "./src/app/user/star-room/star-room-data.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/__ivy_ngcc__/angular2-toaster.js");
/* harmony import */ var _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../amplitude/amplitude.service */ "./src/app/amplitude/amplitude.service.ts");
/* harmony import */ var _amplitude_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../amplitude/events */ "./src/app/amplitude/events.ts");
/* harmony import */ var _app_common_pop_blocker_message_pop_blocker_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../app-common/pop-blocker-message/pop-blocker-message.component */ "./src/app/app-common/pop-blocker-message/pop-blocker-message.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_common_link_viewer_link_viewer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../app-common/link-viewer/link-viewer.component */ "./src/app/app-common/link-viewer/link-viewer.component.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_common_upcoming_events_section_upcoming_events_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../app-common/upcoming-events-section/upcoming-events-section.component */ "./src/app/app-common/upcoming-events-section/upcoming-events-section.component.ts");
/* harmony import */ var _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../app-common/pre-loader/pre-loader.component */ "./src/app/app-common/pre-loader/pre-loader.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");





























function HomeWorkComponent_app_pre_loader_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pre-loader");
} }
function HomeWorkComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeWorkComponent_div_3_div_1_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
} }
function HomeWorkComponent_div_3_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", episode_r6.duration, " min");
} }
function HomeWorkComponent_div_3_div_1_div_12_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeWorkComponent_div_3_div_1_div_12_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.zoomWebinar(episode_r6, episode_r6.episode_id, episode_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Join Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0) { return { not_active_icon: a0 }; };
function HomeWorkComponent_div_3_div_1_div_12_span_2_img_1_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeWorkComponent_div_3_div_1_div_12_span_2_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.openExample(episode_r6.level, episode_r6.episode_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r18.getButtonLink(episode_r6.is_example_ready, 3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, episode_r6.is_example_ready === 0));
} }
function HomeWorkComponent_div_3_div_1_div_12_span_2_img_2_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeWorkComponent_div_3_div_1_div_12_span_2_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.openPuzzle(episode_r6.level, episode_r6.episode_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r19.getButtonLink(episode_r6.is_puzzle_ready, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, episode_r6.is_puzzle_ready === 0));
} }
function HomeWorkComponent_div_3_div_1_div_12_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeWorkComponent_div_3_div_1_div_12_span_2_img_1_Template, 1, 4, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeWorkComponent_div_3_div_1_div_12_span_2_img_2_Template, 1, 4, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeWorkComponent_div_3_div_1_div_12_span_2_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.openFlipBook(episode_r6.flipbook_url, episode_r6.episode_id, episode_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.categoryId !== 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.categoryId !== 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r14.getButtonLink(episode_r6.flipbook_url, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, episode_r6.flipbook_url === ""));
} }
function HomeWorkComponent_div_3_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeWorkComponent_div_3_div_1_div_12_button_1_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeWorkComponent_div_3_div_1_div_12_span_2_Template, 4, 6, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", episode_r6.is_session_live);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !episode_r6.is_session_live);
} }
function HomeWorkComponent_div_3_div_1_div_13_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeWorkComponent_div_3_div_1_div_13_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.zoomWebinar(episode_r6, episode_r6.episode_id, episode_r6, ctx_r35.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Join Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeWorkComponent_div_3_div_1_div_13_span_2_input_5_Template(rf, ctx) { if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeWorkComponent_div_3_div_1_div_13_span_2_input_5_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.fileChange($event, episode_r6.level, episode_r6.episode_id, episode_r6.is_user_puzzle_submission, episode_r6.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeWorkComponent_div_3_div_1_div_13_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeWorkComponent_div_3_div_1_div_13_span_2_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.downloadFiles(episode_r6.question_pgn_url, episode_r6.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeWorkComponent_div_3_div_1_div_13_span_2_input_5_Template, 1, 0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeWorkComponent_div_3_div_1_div_13_span_2_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.downloadFiles(episode_r6.solution_pgn_url, episode_r6.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeWorkComponent_div_3_div_1_div_13_span_2_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.openFlipBook(episode_r6.flipbook_url, episode_r6.episode_id, episode_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r34.getButtonLink(episode_r6.question_pgn_url != null ? 1 : 0, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r34.getButtonLink(!episode_r6.is_user_puzzle_submission && episode_r6.question_pgn_url != null ? 1 : 0, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !episode_r6.is_user_puzzle_submission && episode_r6.question_pgn_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r34.getButtonLink(episode_r6.is_user_puzzle_submission && episode_r6.solution_pgn_url != null ? 1 : 0, 7), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r34.getButtonLink(episode_r6.flipbook_url, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeWorkComponent_div_3_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeWorkComponent_div_3_div_1_div_13_button_1_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeWorkComponent_div_3_div_1_div_13_span_2_Template, 8, 5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", episode_r6.is_session_live);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !episode_r6.is_session_live);
} }
function HomeWorkComponent_div_3_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeWorkComponent_div_3_div_1_div_14_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r51.openPuzzle(episode_r6.level, episode_r6.episode_id, episode_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeWorkComponent_div_3_div_1_div_14_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.openVideo(episode_r6.video1_url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeWorkComponent_div_3_div_1_div_14_Template_img_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.openVideo(episode_r6.video2_url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.getButtonLink(episode_r6.is_puzzle_ready, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, episode_r6.is_puzzle_ready === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wistia_embed ", episode_r6.video1_url, " popover=true popoverAnimateThumbnail=true popoverContent=link videoFoam=true");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.getButtonLink(episode_r6.video1_url, 6), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, !(episode_r6 == null ? null : episode_r6.video1_url)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wistia_embed ", episode_r6.video2_url, " popover=true popoverAnimateThumbnail=true popoverContent=link videoFoam=true");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.getButtonLink(episode_r6.video2_url, 7), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, !(episode_r6 == null ? null : episode_r6.video2_url)));
} }
var _c1 = function (a0) { return { cursor_status: a0 }; };
var _c2 = function (a0) { return { card_not_active: a0 }; };
function HomeWorkComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeWorkComponent_div_3_div_1_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); var episode_r6 = ctx.$implicit; var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r59.gotoVideoDetail(episode_r6.episode_id, episode_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeWorkComponent_div_3_div_1_Template_p_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); var episode_r6 = ctx.$implicit; var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r61.gotoVideoDetail(episode_r6.episode_id, episode_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeWorkComponent_div_3_div_1_img_8_Template, 1, 0, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeWorkComponent_div_3_div_1_span_9_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeWorkComponent_div_3_div_1_div_12_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeWorkComponent_div_3_div_1_div_13_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeWorkComponent_div_3_div_1_div_14_Template, 13, 18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r6 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, !episode_r6.is_session_live && episode_r6.is_available));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, !(episode_r6 == null ? null : episode_r6.is_available)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", episode_r6.thumbnail_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Episode ", episode_r6.episode_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", episode_r6.duration !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", episode_r6.duration !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](episode_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(episode_r6 == null ? null : episode_r6.video1_url) && !(episode_r6 == null ? null : episode_r6.video2_url) && ctx_r4.pType != 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(episode_r6 == null ? null : episode_r6.video1_url) && !(episode_r6 == null ? null : episode_r6.video2_url) && ctx_r4.pType == 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (episode_r6 == null ? null : episode_r6.video1_url) || (episode_r6 == null ? null : episode_r6.video2_url));
} }
var _c3 = function (a0) { return { active_page: a0 }; };
function HomeWorkComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeWorkComponent_div_3_div_3_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); var page_r62 = ctx.$implicit; var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.gotoPage(page_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var page_r62 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", page_r62.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, page_r62 == ctx_r5.currentPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r62);
} }
function HomeWorkComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeWorkComponent_div_3_div_1_Template, 15, 14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeWorkComponent_div_3_div_3_Template, 3, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.episodeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.pageList);
} }
function HomeWorkComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No home work is available for this product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var HomeWorkComponent = /** @class */ (function () {
    function HomeWorkComponent(router, routes, _authService, _dreamroomData, dialog, _breadCrumb, _userService, _toasterService, _amps) {
        var _this = this;
        this.router = router;
        this.routes = routes;
        this._authService = _authService;
        this._dreamroomData = _dreamroomData;
        this.dialog = dialog;
        this._breadCrumb = _breadCrumb;
        this._userService = _userService;
        this._toasterService = _toasterService;
        this._amps = _amps;
        this.HomeWorkComponentClass = "app-home-work";
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
    HomeWorkComponent.prototype.ngOnInit = function () {
        // this.router.navigateByUrl(`/user/star-room/star-landing/star-episode/${this.first_name}/${this.productId}`)
        this.pType = localStorage.getItem("productType");
        switch (this.productType) {
            case 1: {
                this.productTypeName = "dreamroom";
                break;
            }
            case 13: {
                this.productTypeName = "star-room";
                break;
            }
            case 2: {
                this.productTypeName = "class-room";
                break;
            }
            case 3: {
                this.productTypeName = "live-room";
                break;
            }
            case 6: {
                this.productTypeName = "camp-room";
                break;
            }
            case 4: {
                this.productTypeName = "121-room";
                break;
            }
            case 16: {
                this.productTypeName = "Super 64";
                break;
            }
        }
        // this.getDataFromServer();
        this.getUpcomingEvent();
        this.userProduct();
    };
    HomeWorkComponent.prototype.getButtonLink = function (episodeStatus, buttonId) {
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
    HomeWorkComponent.prototype.gotoPage = function (pageNumber) {
        this.currentPage = pageNumber;
        this.episodeReceived = false;
        this.getDataFromServer();
    };
    HomeWorkComponent.prototype.gotoPrevPage = function (pageNumber) {
        if (this.currentPage !== 1) {
            this.episodeList = this._dreamroomData.getEpisodeByPage(--this.currentPage);
        }
    };
    HomeWorkComponent.prototype.userProduct = function () {
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
    HomeWorkComponent.prototype.getPagination = function () {
        this.pageList = [];
        this.pageNumber = Math.ceil(this.totalEpisodes / this.episodeCount);
        // console.log(this.pageNumber,"pageNumber");
        for (var i = 1; i <= this.pageNumber; i++) {
            this.pageList.push(i);
        }
    };
    HomeWorkComponent.prototype.gotoNextPage = function (pageNumber) {
        if (this.currentPage === pageNumber) {
        }
        else {
            this.episodeList = this._dreamroomData.getEpisodeByPage(++this.currentPage);
        }
    };
    HomeWorkComponent.prototype.openVideo = function (video_url) {
        // console.log(episode,video_url)
        // this.openPopup=true;
        this.wistiaUrl = video_url;
    };
    HomeWorkComponent.prototype.gotoVideoDetail = function (episode_id, id) {
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
    HomeWorkComponent.prototype.openFlipBook = function (flipbook_url, episode_id, id) {
        console.log(flipbook_url, "flipbook url");
        if (flipbook_url !== "" && flipbook_url !== null) {
            var dialogRef = this.dialog.open(_app_common_link_viewer_link_viewer_component__WEBPACK_IMPORTED_MODULE_12__["LinkViewerComponent"], {
                width: "90%",
                height: "90%",
                data: {
                    url: flipbook_url
                }
            });
        }
    };
    HomeWorkComponent.prototype.openExample = function (level, episode_id) {
        // console.log(level, "level")
        level = 13;
        if (this.episodeList[this.getIdIndex(episode_id)].is_available) {
            if (this.episodeList[this.getIdIndex(episode_id)].is_example_ready) {
                this._breadCrumb.exampleBreadCrumb(level);
                if (this.pType != 16) {
                    this.router.navigateByUrl("/user/star-room/dr-functionality/example/" + this.productId + "/" + level + "/" + episode_id);
                }
            }
        }
    };
    HomeWorkComponent.prototype.openPuzzle = function (level, episode_id) {
        level = 13;
        if (this.episodeList[this.getIdIndex(episode_id)].is_available) {
            if (this.episodeList[this.getIdIndex(episode_id)].is_puzzle_ready) {
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
    HomeWorkComponent.prototype.downloadFiles = function (url, name) {
        var _this = this;
        console.log(url);
        if (url) {
            file_saver__WEBPACK_IMPORTED_MODULE_13__["saveAs"](url, name);
            setTimeout(function () {
                _this.getDataFromServer();
            }, 1000);
        }
    };
    HomeWorkComponent.prototype.fileChange = function (event, level, episode_id, is_user_puzzle_submission, name) {
        // t = true;
        if (!is_user_puzzle_submission) {
            var submissionFile = event.target.files;
            this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].auth_target + "/product/save/user/puzzle/submission";
            this.makeFileRequest(this.url, [], submissionFile, episode_id, name).then(function (result) { }, function (error) { });
        }
    };
    HomeWorkComponent.prototype.makeFileRequest = function (url, params, files, episode_id, name) {
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
    HomeWorkComponent.prototype.uplaodProblem = function (level, episode_id) { };
    // End for super 64 temp (product type 16)
    HomeWorkComponent.prototype.getDataFromServer = function () {
        var _this = this;
        this._authService
            .getUserDreamRoomEpisodeList({
            categoryId: this.categoryId,
            productType: Number(localStorage.getItem("productType")),
            productId: Number(this.level),
            limit: this.episodeCount,
            offset: this.episodeCount * (this.currentPage - 1),
            isHomework: true
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
            _this.noHomeWork = !(res.data.episodes.length > 0);
        }, function (error) {
            // console.log(error);
        });
    };
    HomeWorkComponent.prototype.getUpcomingEvent = function () {
        var _this = this;
        this._authService.getUpcomingUserDashboard().subscribe(function (res) {
            _this.UpComingClassRoom = res.data.productList[0].products;
            _this.UpComingLiveRoom = res.data.productList[1].products;
        });
    };
    HomeWorkComponent.prototype.openDashboard = function () {
        this._breadCrumb.levelSelectorBreadcrumb(0);
        this._breadCrumb.episodeBreadCrumb(0);
        this._breadCrumb.puzzleBreadCrumb(0);
        this._breadCrumb.exampleBreadCrumb(0);
        this.router.navigateByUrl("/user/dashboard/" + localStorage.getItem("first_name"));
    };
    HomeWorkComponent.prototype.getIdIndex = function (class_id) {
        for (var i = 0; i < this.episodeList.length; i++) {
            if (this.episodeList[i].id === class_id) {
                return i;
            }
        }
    };
    HomeWorkComponent.prototype.zoomWebinar = function (episode, episodeId, id) {
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
                    .open(_app_common_pop_blocker_message_pop_blocker_message_component__WEBPACK_IMPORTED_MODULE_10__["PopBlockerMessageComponent"], {
                    width: "600px",
                    height: "520px"
                })
                    .updatePosition({ top: "6em" });
            }
            else {
                _this._amps.setAmplitudeEvents(_amplitude_events__WEBPACK_IMPORTED_MODULE_9__["events"].event_23, {
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
            _this._amps.setAmplitudeEvents(_amplitude_events__WEBPACK_IMPORTED_MODULE_9__["events"].event_23, {
                productId: _this.productId,
                episodeId: episodeId,
                productName: episode.name,
                duration: episode.duration,
                productType: _this.productTypeName,
                error: error.error.message
            });
            _this._toasterService.pop("error", error.error.message);
        });
    };
    HomeWorkComponent.ɵfac = function HomeWorkComponent_Factory(t) { return new (t || HomeWorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_star_room_data_service__WEBPACK_IMPORTED_MODULE_3__["StarroomDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_8__["AmplitudeService"])); };
    HomeWorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeWorkComponent, selectors: [["app-home-work"]], hostVars: 2, hostBindings: function HomeWorkComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.HomeWorkComponentClass);
        } }, decls: 6, vars: 4, consts: [[4, "ngIf"], [1, "episode-list-container"], ["class", "data_loading", 4, "ngIf"], ["class", "episode-group", 4, "ngIf"], ["class", "no_home_work_view", 4, "ngIf"], [1, "data_loading"], [1, "episode-group"], ["class", "episode-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "pagination"], [4, "ngFor", "ngForOf"], [1, "episode-card", 3, "ngClass"], [1, "card-container", 3, "ngClass"], [1, "header"], [1, "play-icon"], ["draggable", "false", 3, "src", "click"], [1, "header_text"], [1, "number", 3, "click"], ["draggable", "false", "src", "assets/chess/Dreamroom/episode-list/card/stats/video.svg", 4, "ngIf"], [1, "name"], ["class", "icons", 4, "ngIf"], ["draggable", "false", "src", "assets/chess/Dreamroom/episode-list/card/stats/video.svg"], [1, "icons"], ["class", "button_join", 3, "click", 4, "ngIf"], ["style", "width: 100%;display: flex;justify-content: space-between;", 4, "ngIf"], [1, "button_join", 3, "click"], [2, "width", "100%", "display", "flex", "justify-content", "space-between"], ["draggable", "false", "matTooltip", "Examples", 3, "src", "ngClass", "click", 4, "ngIf"], ["draggable", "false", "matTooltip", "Puzzle", 3, "src", "ngClass", "click", 4, "ngIf"], ["draggable", "false", "matTooltip", "Post study material", 3, "src", "ngClass", "click"], ["draggable", "false", "matTooltip", "Examples", 3, "src", "ngClass", "click"], ["draggable", "false", "matTooltip", "Puzzle", 3, "src", "ngClass", "click"], ["draggable", "false", "matTooltip", "Assignment", 3, "src", "click"], [1, "file_upload"], ["draggable", "false", "matTooltip", "Upload", 1, "profile_text", 3, "src"], ["type", "file", "title", "", "matTooltip", "Upload", "id", "file-input", "accept", ".txt, .pgn", 3, "change", 4, "ngIf"], ["draggable", "false", "matTooltip", "Solution", 3, "src", "click"], ["draggable", "false", "matTooltip", "Flipbook", 3, "src", "click"], ["type", "file", "title", "", "matTooltip", "Upload", "id", "file-input", "accept", ".txt, .pgn", 3, "change"], [1, "video_box"], [1, "wistia_responsive_padding"], [1, "wistia_responsive_wrapper", 2, "height", "100%", "left", "0", "position", "relative", "top", "0", "width", "100%"], ["matTooltip", "Hints", 2, "display", "inline", "margin-left", "-1.7em"], ["draggable", "false", 3, "src", "ngClass", "click"], ["matTooltip", "Solutions", 2, "display", "inline", "margin-left", "-1.7em"], ["draggable", "false", 1, "color_solution", 3, "src", "ngClass", "click"], [3, "id", "ngClass", "click"], [1, "no_home_work_view"]], template: function HomeWorkComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeWorkComponent_app_pre_loader_0_Template, 1, 0, "app-pre-loader", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeWorkComponent_div_2_Template, 2, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeWorkComponent_div_3_Template, 4, 2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeWorkComponent_div_4_Template, 5, 0, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-upcoming-events-section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardSpinner);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.episodeReceived);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.episodeReceived && !ctx.noHomeWork);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.episodeReceived && ctx.noHomeWork);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _app_common_upcoming_events_section_upcoming_events_section_component__WEBPACK_IMPORTED_MODULE_15__["UpcomingEventsSectionComponent"], _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_16__["PreLoaderComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"]], styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 20px;\n  height: 8px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #303030;\n  border-radius: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #a0ce4e;\n  border-radius: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #87b633;\n}\n\n.app-home-work[_ngcontent-%COMP%]   app-upcoming-events-section[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .data_loading[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .data_loading[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  padding-top: 40%;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .no_home_work_view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 4em;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .no_home_work_view[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 4em;\n  width: auto;\n  height: auto;\n  margin-bottom: 16px;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .no_episodes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.2em;\n  padding: 0.5em 1em;\n  margin-bottom: 0;\n  text-align: left;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%] {\n  padding-top: 1em;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #cccccc;\n  cursor: default;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  padding: 0 1em;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 60px;\n  border-radius: 6px;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: default;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header_text[_ngcontent-%COMP%] {\n  margin-left: 0.6em;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header_text[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: #a0ce4e;\n  font-size: 1.2em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: default;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header_text[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  margin-left: 8px;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header_text[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: normal;\n  color: grey;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header_text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n  font-size: 1em;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 5em;\n  margin-right: auto;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .file_upload[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .file_upload[_ngcontent-%COMP%]   #file-input[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  width: 35px;\n  opacity: 0;\n  top: 0px;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .video_box[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f4f4f4;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .video_box[_ngcontent-%COMP%]   .wistia_embed[_ngcontent-%COMP%] {\n  position: absolute !important;\n  top: 36%;\n  left: 42%;\n  transition: all 0.9s ease-in-out;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .video_box[_ngcontent-%COMP%]   .wistia_responsive_wrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .video_box[_ngcontent-%COMP%]   .wistia_click_to_play[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .video_box[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .button_join[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border: 0;\n  padding: 6px 12px;\n  background-color: #a0ce4e;\n  color: white;\n  font-size: 16px;\n  border-radius: 6px;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .button_join[_ngcontent-%COMP%]:hover {\n  background-color: #35c2d6;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   .not_active_icon[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n@media screen and (min-width: 480px) {\n  .app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    width: 30%;\n    margin-left: auto;\n    margin-right: 1em;\n  }\n  .app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .color_solution[_ngcontent-%COMP%] {\n    width: 27px;\n    height: 27px;\n    margin-top: 5px;\n  }\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card_not_active[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-filter: grayscale(80%);\n          filter: grayscale(80%);\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card_not_active[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header_text[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card_not_active[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header_text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .detail-icons[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  border-top: 1px solid #cccccc;\n  border-bottom: 1px solid #cccccc;\n  background-color: #f8f8f8;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .detail-icons[_ngcontent-%COMP%]   .icon-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n  width: 75%;\n  justify-content: space-between;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .detail-icons[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .detail-icons[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .detail-icons[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: auto;\n  font-size: 14px;\n  margin-left: 6px;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%] {\n  padding-top: 1em;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #cccccc;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  padding: 0 1em;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 60px;\n  border-radius: 6px;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header_text[_ngcontent-%COMP%] {\n  margin-left: 0.6em;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header_text[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: #a0ce4e;\n  font-size: 1.2em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header_text[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  margin-left: 8px;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header_text[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: normal;\n  color: grey;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header_text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n  font-size: 1em;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 5em;\n  margin-right: auto;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .file_upload[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .file_upload[_ngcontent-%COMP%]   #file-input[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  width: 35px;\n  z-index: 99;\n  opacity: 0;\n  top: 0px;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .button_join[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border: 0;\n  padding: 6px 12px;\n  background-color: #a0ce4e;\n  color: white;\n  font-size: 16px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .button_join[_ngcontent-%COMP%]:hover {\n  background-color: #35c2d6;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]   .not_active_icon[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n@media screen and (min-width: 480px) {\n  .app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    width: 30%;\n    margin-left: auto;\n    margin-right: 1em;\n  }\n  .app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card_not_active[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-filter: grayscale(80%);\n          filter: grayscale(80%);\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card_not_active[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header_text[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .card_not_active[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header_text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .detail-icons[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  border-top: 1px solid #cccccc;\n  border-bottom: 1px solid #cccccc;\n  background-color: #f8f8f8;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .detail-icons[_ngcontent-%COMP%]   .icon-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n  width: 75%;\n  justify-content: space-between;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .detail-icons[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .detail-icons[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .cursor_status[_ngcontent-%COMP%]   .detail-icons[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: auto;\n  font-size: 14px;\n  margin-left: 6px;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-weight: bold;\n  padding: 1em;\n  margin: auto;\n  align-items: center;\n}\n\n@media screen and (max-width: 800px) {\n  .app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: scroll;\n    padding: 1rem 0;\n    width: 90%;\n    margin: 1rem auto;\n  }\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 0 2px;\n  display: flex;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .active_page[_ngcontent-%COMP%] {\n  background-color: #a0ce4e;\n  color: white;\n  border-radius: 6px;\n}\n\n@media screen and (min-width: 1000px) {\n  .app-home-work[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    width: 40% !important;\n    margin-left: auto;\n    margin-right: 1em;\n  }\n  .app-home-work[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 6% !important;\n  }\n  .app-home-work[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 54% !important;\n    margin: auto !important;\n  }\n  .app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n  }\n  .app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    border-right: 1px solid #cccccc;\n  }\n  .app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%] {\n    border-right: 1px solid #cccccc;\n  }\n  .app-home-work[_ngcontent-%COMP%]   .episode-list-container[_ngcontent-%COMP%]   .episode-group[_ngcontent-%COMP%]   .episode-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .app-home-work[_ngcontent-%COMP%]   .full_width_when_no_side_data[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n}\n\n@media screen and (max-width: 480px) and (min-width: 300px) {\n  .icons[_ngcontent-%COMP%]   .video_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 24px !important;\n    height: 22px !important;\n    background-color: white;\n    cursor: pointer;\n    margin-top: -8px !important;\n  }\n}\n\n@media screen and (max-width: 2000px) and (min-width: 480px) {\n  .icons[_ngcontent-%COMP%]   .video_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    background-color: white;\n    cursor: pointer;\n    margin-top: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zdGFyLXJvb20vbGFuZGluZy9ob21lLXdvcmsvaG9tZS13b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDckI7O0FBRVEsVUFBQTs7QUFDQTtFQUNFLGlDQUF5QztFQUN6QyxtQkFBbUI7QUFDN0I7O0FBRVEsV0FBQTs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDN0I7O0FBRVEsb0JBQUE7O0FBQ0E7RUFDRSxtQkFBZ0M7QUFDMUM7O0FBRUE7RUFFSSxXQUFXO0FBQWY7O0FBRkE7RUFNSSxhQUFhO0VBQ2Isc0JBQXNCO0FBQTFCOztBQVBBO0VBVU0sWUFBWTtBQUNsQjs7QUFYQTtFQWFRLGdCQUFnQjtBQUV4Qjs7QUFmQTtFQWtCTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixlQUFlO0FBQ3JCOztBQXZCQTtFQXlCUSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFFM0I7O0FBOUJBO0VBcUNVLGNBQWM7QUFIeEI7O0FBbENBO0VBMENRLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFKeEI7O0FBMUNBO0VBa0RRLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFKdkI7O0FBakRBO0VBd0RVLGNBQWM7QUFIeEI7O0FBckRBO0VBMkRZLGFBQWE7RUFDYixtQkFBbUI7QUFGL0I7O0FBMURBO0VBZ0VnQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUZsQzs7QUFoRUE7RUFxRWtCLGVBQWU7QUFEakM7O0FBcEVBO0VBMkVjLGtCQUFrQjtBQUhoQzs7QUF4RUE7RUE4RWdCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsY0FBYztF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VSwrQkFBK0I7RUE5Q3ZDO0VBdGZGO0lBdWlCWSxhQUFhO0lBQ2IsOEJBQThCO0VBOUN4QztFQTFmRjtJQStpQk0sYUFBYTtJQUNiLDBCQUEwQjtFQWxEOUI7QUFDRjs7QUFzREE7RUFDRTtJQUdNLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZiwyQkFBMkI7RUFyRGpDO0FBQ0Y7O0FBMERBO0VBQ0U7SUFHTSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZUFBZTtFQXpEckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc3Rhci1yb29tL2xhbmRpbmcvaG9tZS13b3JrL2hvbWUtd29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBUcmFjayAqL1xuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYig0OCwgNDgsIDQ4KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogSGFuZGxlICovXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNhMGNlNGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oI2EwY2U0ZSwgIDEwKTtcbiAgICAgICAgfVxuXG4uYXBwLWhvbWUtd29yayB7XG4gIGFwcC11cGNvbWluZy1ldmVudHMtc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAxZW07XG4gIH1cblxuICAuZXBpc29kZS1saXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLmRhdGFfbG9hZGluZyB7XG4gICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgIG1hdC1zcGlubmVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubm9faG9tZV93b3JrX3ZpZXcge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgIG1hcmdpbi10b3A6IDRlbTtcblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZXBpc29kZS1ncm91cCB7XG5cbiAgICAgIC8vIG1hcmdpbjogYXV0bztcbiAgICAgIC5ub19lcGlzb2RlcyB7XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAuZXBpc29kZS1jYXJkIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG5cbiAgICAgICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcblxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgICAgIC5wbGF5LWljb24ge1xuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlcl90ZXh0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xuXG4gICAgICAgICAgICAgIC5udW1iZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYTBjZTRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmljb25zIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIC8vIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVlbTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZmlsZV91cGxvYWQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgI2ZpbGUtaW5wdXQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudmlkZW9fYm94IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuXG4gICAgICAgICAgICAgIC53aXN0aWFfZW1iZWQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRvcDogMzYlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDQyJTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC45cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC53aXN0aWFfcmVzcG9uc2l2ZV93cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC53aXN0aWFfY2xpY2tfdG9fcGxheTpob3ZlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gaW1nIHtcbiAgICAgICAgICAgICAgLy8gICB3aWR0aDogMzJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAvLyAgIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAvLyAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgLy8gICBtYXJnaW4tdG9wOjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgaWZyYW1lIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ1dHRvbl9qb2luIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBjZTRlO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNWMyZDY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgLy8gd2lkdGg6IDMycHg7XG4gICAgICAgICAgICAgIC8vIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcblxuICAgICAgICAgICAgICAubm90X2FjdGl2ZV9pY29uIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcblxuICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG5cbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29sb3Jfc29sdXRpb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyN3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjdweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZF9ub3RfYWN0aXZlIHtcbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIC5wbGF5LWljb24ge1xuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDgwJSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlcl90ZXh0IHtcbiAgICAgICAgICAgICAgLm51bWJlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGV0YWlsLWljb25zIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcblxuICAgICAgICAgIC5pY29uLWdyb3VwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaWNvbi1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmN1cnNvcl9zdGF0dXMge1xuICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XG5cbiAgICAgICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcblxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgICAgIC5wbGF5LWljb24ge1xuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRlcl90ZXh0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xuXG4gICAgICAgICAgICAgIC5udW1iZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYTBjZTRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmljb25zIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIC8vIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVlbTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZmlsZV91cGxvYWQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgI2ZpbGUtaW5wdXQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnV0dG9uX2pvaW4ge1xuICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGNlNGU7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVjMmQ2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIC8vIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG5cbiAgICAgICAgICAgICAgLm5vdF9hY3RpdmVfaWNvbiB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG5cbiAgICAgICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuXG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmRfbm90X2FjdGl2ZSB7XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAucGxheS1pY29uIHtcbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSg4MCUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkZXJfdGV4dCB7XG4gICAgICAgICAgICAgIC5udW1iZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbC1pY29ucyB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG5cbiAgICAgICAgICAuaWNvbi1ncm91cCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmljb24tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wYWdpbmF0aW9uIHtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDJweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZlX3BhZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGNlNGU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgIC5pY29ucyB7XG4gICAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuXG4gICAgICBpbWcge1xuICAgICAgICBtYXJnaW4tbGVmdDogNiUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDU0JSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZXBpc29kZS1saXN0LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuXG4gICAgICAuZXBpc29kZS1ncm91cCB7XG4gICAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVwaXNvZGUtY2FyZCB7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjY2NjYztcblxuICAgICAgICAgIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5mdWxsX3dpZHRoX3doZW5fbm9fc2lkZV9kYXRhIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIGFuZCAobWluLXdpZHRoOiAzMDBweCkge1xuICAuaWNvbnMge1xuICAgIC52aWRlb19ib3gge1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDI0cHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IC04cHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwMHB4KSBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLmljb25zIHtcbiAgICAudmlkZW9fYm94IHtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return HomeWorkComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeWorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-home-work",
                templateUrl: "./home-work.component.html",
                styleUrls: ["./home-work.component.scss"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _star_room_data_service__WEBPACK_IMPORTED_MODULE_3__["StarroomDataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbService"] }, { type: _user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }, { type: _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_8__["AmplitudeService"] }]; }, { HomeWorkComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class"]
        }] }); })();


/***/ }),

/***/ "./src/app/user/star-room/landing/home-work/home-work.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user/star-room/landing/home-work/home-work.module.ts ***!
  \**********************************************************************/
/*! exports provided: HomeWorkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeWorkModule", function() { return HomeWorkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-work.component */ "./src/app/user/star-room/landing/home-work/home-work.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");







var routes = [
    {
        path: ':slug/:level',
        component: _home_work_component__WEBPACK_IMPORTED_MODULE_2__["HomeWorkComponent"]
    }
];
var HomeWorkModule = /** @class */ (function () {
    function HomeWorkModule() {
    }
    HomeWorkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeWorkModule });
    HomeWorkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeWorkModule_Factory(t) { return new (t || HomeWorkModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]] });
    return HomeWorkModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeWorkModule, { declarations: [_home_work_component__WEBPACK_IMPORTED_MODULE_2__["HomeWorkComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeWorkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_work_component__WEBPACK_IMPORTED_MODULE_2__["HomeWorkComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=home-work-home-work-module.js.map