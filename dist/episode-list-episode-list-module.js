(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episode-list-episode-list-module"],{

/***/ "./src/app/user/dreamroom/dr-functionality/flip-book-url/flip-book-url.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/flip-book-url/flip-book-url.service.ts ***!
  \****************************************************************************************/
/*! exports provided: FlipBookUrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipBookUrlService", function() { return FlipBookUrlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var FlipBookUrlService = /** @class */ (function () {
    function FlipBookUrlService() {
        this.flipBookUrl = [
            {
                id: 1,
                url: 'http://flip.nurtr.com/bookcase/tdbyz'
            },
            {
                id: 2,
                url: 'http://flip.nurtr.com/bookcase/tdbyz'
            }
        ];
    }
    FlipBookUrlService.prototype.getUrlById = function (id) {
        return this.flipBookUrl.filter(function (url) { return url.id === id; })[0].url;
    };
    FlipBookUrlService.ɵfac = function FlipBookUrlService_Factory(t) { return new (t || FlipBookUrlService)(); };
    FlipBookUrlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FlipBookUrlService, factory: FlipBookUrlService.ɵfac });
    return FlipBookUrlService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlipBookUrlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dr-landing/episode-list/episode-list-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-landing/episode-list/episode-list-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EpisodeListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeListRoutingModule", function() { return EpisodeListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _episode_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./episode-list.component */ "./src/app/user/dreamroom/dr-landing/episode-list/episode-list.component.ts");





var routes = [
    {
        path: ':slug/:level',
        component: _episode_list_component__WEBPACK_IMPORTED_MODULE_2__["EpisodeListComponent"]
    }
];
var EpisodeListRoutingModule = /** @class */ (function () {
    function EpisodeListRoutingModule() {
    }
    EpisodeListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EpisodeListRoutingModule });
    EpisodeListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EpisodeListRoutingModule_Factory(t) { return new (t || EpisodeListRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return EpisodeListRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EpisodeListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EpisodeListRoutingModule, [{
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

/***/ "./src/app/user/dreamroom/dr-landing/episode-list/episode-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-landing/episode-list/episode-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EpisodeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeListComponent", function() { return EpisodeListComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var _dr_functionality_flip_book_url_flip_book_url_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dr-functionality/flip-book-url/flip-book-url.component */ "./src/app/user/dreamroom/dr-functionality/flip-book-url/flip-book-url.component.ts");
/* harmony import */ var _dreamroom_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dreamroom-data.service */ "./src/app/user/dreamroom/dreamroom-data.service.ts");
/* harmony import */ var _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../amplitude/amplitude.service */ "./src/app/amplitude/amplitude.service.ts");
/* harmony import */ var _amplitude_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../amplitude/events */ "./src/app/amplitude/events.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/progress-spinner.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _app_common_upcoming_events_section_upcoming_events_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../app-common/upcoming-events-section/upcoming-events-section.component */ "./src/app/app-common/upcoming-events-section/upcoming-events-section.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tooltip.js");





















function EpisodeListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EpisodeListComponent_div_2_div_2_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 25);
} }
function EpisodeListComponent_div_2_div_2_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", episode_r4.duration, " min");
} }
var _c0 = function (a0) { return { card_not_active: a0 }; };
var _c1 = function (a0) { return { not_active_icon: a0 }; };
function EpisodeListComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpisodeListComponent_div_2_div_2_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); var episode_r4 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.gotoVideoDetail(episode_r4.episode_id, episode_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpisodeListComponent_div_2_div_2_Template_p_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); var episode_r4 = ctx.$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.gotoVideoDetail(episode_r4.episode_id, episode_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EpisodeListComponent_div_2_div_2_img_8_Template, 1, 0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EpisodeListComponent_div_2_div_2_span_9_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpisodeListComponent_div_2_div_2_Template_img_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); var episode_r4 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.openExample(episode_r4.level, episode_r4.episode_id, episode_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpisodeListComponent_div_2_div_2_Template_img_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); var episode_r4 = ctx.$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.openPuzzle(episode_r4.level, episode_r4.episode_id, episode_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EpisodeListComponent_div_2_div_2_Template_img_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); var episode_r4 = ctx.$implicit; var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.openFlipBook(episode_r4.flipbook_url, episode_r4.episode_id, episode_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r4 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, !(episode_r4.is_available > 0 && episode_r4.hls && episode_r4.dash)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", episode_r4.thumbnail_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Episode ", episode_r4.episode_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", episode_r4.duration !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", episode_r4.duration !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](episode_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r2.getButtonLink(episode_r4.is_example_ready, 3), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c1, episode_r4.is_example_ready === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r2.getButtonLink(episode_r4.is_puzzle_ready, 1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c1, episode_r4.is_puzzle_ready === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r2.getButtonLink(episode_r4.flipbook_url, 4), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c1, episode_r4.flipbook_url === ""));
} }
function EpisodeListComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
var _c2 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
function EpisodeListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EpisodeListComponent_div_2_div_2_Template, 16, 20, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EpisodeListComponent_div_2_div_4_Template, 1, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "pagination-controls", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function EpisodeListComponent_div_2_Template_pagination_controls_pageChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r15.p = $event; return ctx_r15.gotoPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-upcoming-events-section");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.episodeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 2, ctx_r1.pageList, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c2, ctx_r1.p)));
} }
var _c3 = function (a0) { return { full_width_when_no_side_data: a0 }; };
// import { MenuNavListService } from "src/app/user/user-container/menu-nav-list.service";
var EpisodeListComponent = /** @class */ (function () {
    // menuList: any;
    function EpisodeListComponent(router, routes, _authService, _dreamroomData, dialog, _breadCrumb, // public _menuNavList: MenuNavListService
    _amps) {
        var _this = this;
        this.router = router;
        this.routes = routes;
        this._authService = _authService;
        this._dreamroomData = _dreamroomData;
        this.dialog = dialog;
        this._breadCrumb = _breadCrumb;
        this._amps = _amps;
        this.episodeListComponentClass = 'app-episode-list';
        this.episodeReceived = false;
        this.episodeCount = 10;
        this.productType = 1;
        this.categoryId = 1;
        this.currentPage = 1;
        this.pageList = [];
        this.user_level = ['Beginner', 'Intermediate', 'Advance'];
        this.UpComingLiveRoom = [];
        this.UpComingClassRoom = [];
        this.routes.params.subscribe(function (params) {
            if (params.level !== null) {
                _this.productId = Number(params.level) + 99;
                _this.level_difficulty = Number(params.level);
                _this._dreamroomData.setLevel(_this.level_difficulty);
            }
        });
    }
    EpisodeListComponent.prototype.ngOnInit = function () {
        // this.menuList = this._menuNavList.getMenuNavList();
        if (this.productType == 1) {
            this.productTypeName = 'dreamroom';
        }
        if (this.productType == 13) {
            this.productTypeName = 'star-room';
        }
        if (this.productType == 2) {
            this.productTypeName = 'class-room';
        }
        if (this.productType == 3) {
            this.productTypeName = 'live-room';
        }
        if (this.productType == 6) {
            this.productTypeName = 'camp-room';
        }
        if (this.productType == 4) {
            this.productTypeName = '121-room';
        }
        this._breadCrumb.levelSelectorBreadcrumb(this.level_difficulty);
        this.getDataFromServer();
        // Side-display data
        this.getUpcomingEvent();
    };
    EpisodeListComponent.prototype.getButtonLink = function (episodeStatus, buttonId) {
        if (episodeStatus) {
            switch (buttonId) {
                case 1:
                    return 'assets/chess/Dreamroom/episode-list/card/assignment/puzzle_active.svg';
                case 2:
                    return 'assets/chess/Dreamroom/episode-list/card/assignment/assin_active.svg';
                case 3:
                    return 'assets/chess/Dreamroom/episode-list/card/assignment/example_active.svg';
                case 4:
                    return 'assets/chess/Dreamroom/episode-list/card/assignment/flip_book_active.svg';
                case 5:
                    return 'assets/chess/Dreamroom/episode-list/card/assignment/report_active.svg';
            }
        }
        else {
            switch (buttonId) {
                case 1:
                    return 'assets/chess/Dreamroom/episode-list/card/assignment/puzzle_gray.svg';
                case 2:
                    return 'assets/chess/Dreamroom/episode-list/card/assignment/assin_gray.svg';
                case 3:
                    return 'assets/chess/Dreamroom/episode-list/card/assignment/example_gray.svg';
                case 4:
                    return 'assets/chess/Dreamroom/episode-list/card/assignment/flip_book_gray.svg';
                case 5:
                    return 'assets/chess/Dreamroom/episode-list/card/assignment/report_gray.svg';
            }
        }
    };
    EpisodeListComponent.prototype.gotoPage = function (pageNumber) {
        this.currentPage = pageNumber;
        this.episodeReceived = false;
        this.getDataFromServer();
    };
    EpisodeListComponent.prototype.gotoPrevPage = function (pageNumber) {
        if (this.currentPage !== 1) {
            this.episodeList = this._dreamroomData.getEpisodeByPage(--this.currentPage);
        }
    };
    EpisodeListComponent.prototype.gotoNextPage = function (pageNumber) {
        if (this.currentPage === pageNumber) {
        }
        else {
            this.episodeList = this._dreamroomData.getEpisodeByPage(++this.currentPage);
        }
    };
    EpisodeListComponent.prototype.gotoVideoDetail = function (id, upeid) {
        if (this.episodeList[this.getIdIndex(upeid)].is_available) {
            // if (this.episodeList[this.getIdIndex(id)].video_url !== null) {
            this._breadCrumb.episodeBreadCrumb(id);
            // this.router.navigate(['/user/dreamroom/dr-functionality/video', this.categoryId, this.productType, this.productId, id]);
            // New Video Page
            this.router.navigateByUrl("/user/" + this.productTypeName + "/video-content/" + this.categoryId + "/" + this.productType + "/" + this.productId + "/" + id + "/0");
            // }
        }
    };
    EpisodeListComponent.prototype.getPageListPagination = function () {
        this.pageList = [];
        this.pageNumber = Math.ceil(this.totalEpisodes / this.episodeCount);
        for (var i = 1; i <= this.totalEpisodes; i++) {
            this.pageList.push(i);
        }
    };
    EpisodeListComponent.prototype.openFlipBook = function (flipbook_url, episode_id, upeid) {
        if (this.episodeList[this.getIdIndex(upeid)].is_available) {
            if (flipbook_url !== '' && flipbook_url !== null) {
                var dialogRef = this.dialog.open(_dr_functionality_flip_book_url_flip_book_url_component__WEBPACK_IMPORTED_MODULE_5__["FlipBookUrlComponent"], {
                    width: '90%',
                    height: '90%',
                    autoFocus: false,
                    data: {
                        id: flipbook_url
                    }
                });
            }
            this._amps.setAmplitudeEvents(_amplitude_events__WEBPACK_IMPORTED_MODULE_8__["events"].event_15, {
                episode_id: episode_id,
                product_id: this.productId
            });
        }
    };
    EpisodeListComponent.prototype.openPuzzle = function (level, episode_id, upeid) {
        // console.log(level, "levels")
        if (this.episodeList[this.getIdIndex(upeid)].is_available) {
            if (this.episodeList[this.getIdIndex(upeid)].is_puzzle_ready) {
                this._breadCrumb.puzzleBreadCrumb(level);
                this.router.navigateByUrl("/user/dreamroom/dr-functionality/puzzle/" + this.productId + "/" + level + "/" + episode_id);
            }
        }
        this._amps.setAmplitudeEvents(_amplitude_events__WEBPACK_IMPORTED_MODULE_8__["events"].event_14, {
            episode_id: episode_id,
            product_id: this.productId
        });
    };
    EpisodeListComponent.prototype.openExample = function (level, episode_id, upeid) {
        // console.log(level, "level")
        if (this.episodeList[this.getIdIndex(upeid)].is_available) {
            if (this.episodeList[this.getIdIndex(upeid)].is_example_ready) {
                this._breadCrumb.exampleBreadCrumb(level);
                this.router.navigateByUrl("/user/dreamroom/dr-functionality/example/" + this.productId + "/" + level + "/" + episode_id);
            }
        }
        this._amps.setAmplitudeEvents(_amplitude_events__WEBPACK_IMPORTED_MODULE_8__["events"].event_13, {
            episode_id: episode_id,
            product_id: this.productId
        });
    };
    EpisodeListComponent.prototype.getDataFromServer = function () {
        var _this = this;
        this._authService
            .getUserDreamRoomEpisodeList({
            categoryId: this.categoryId,
            productType: this.productType,
            productId: this.productId,
            limit: this.episodeCount,
            offset: this.episodeCount * (this.currentPage - 1)
        })
            .subscribe(function (res) {
            var sampleArray = res.data.episodes;
            _this.totalEpisodes = res.data.count;
            _this.getPageListPagination();
            // console.log(this.totalEpisodes,"total episode")
            for (var _i = 0, sampleArray_1 = sampleArray; _i < sampleArray_1.length; _i++) {
                var data = sampleArray_1[_i];
                if (data.thumbnail_url == null) {
                    data.thumbnail_url =
                        'assets/chess/Dreamroom/episode-list/card/thumbnail.png';
                }
            }
            _this.episodeList = sampleArray;
            _this.episodeReceived = true;
        }, function (error) {
            // console.log(error);
        });
    };
    EpisodeListComponent.prototype.getUpcomingEvent = function () {
        var _this = this;
        this._authService.getUpcomingUserDashboard().subscribe(function (res) {
            _this.UpComingClassRoom = res.data.productList[0].products;
            _this.UpComingLiveRoom = res.data.productList[1].products;
        });
    };
    EpisodeListComponent.prototype.openDashboard = function () {
        this._breadCrumb.levelSelectorBreadcrumb(0);
        this._breadCrumb.episodeBreadCrumb(0);
        this._breadCrumb.puzzleBreadCrumb(0);
        this._breadCrumb.exampleBreadCrumb(0);
        this.router.navigateByUrl("/user/dashboard/" + localStorage.getItem('first_name'));
    };
    EpisodeListComponent.prototype.getIdIndex = function (class_id) {
        for (var i = 0; i < this.episodeList.length; i++) {
            if (this.episodeList[i].id === class_id) {
                return i;
            }
        }
    };
    EpisodeListComponent.ɵfac = function EpisodeListComponent_Factory(t) { return new (t || EpisodeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dreamroom_data_service__WEBPACK_IMPORTED_MODULE_6__["DreamroomDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_7__["AmplitudeService"])); };
    EpisodeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EpisodeListComponent, selectors: [["app-episode-list"]], hostVars: 2, hostBindings: function EpisodeListComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.episodeListComponentClass);
        } }, decls: 3, vars: 5, consts: [[1, "episode-list-container", 3, "ngClass"], ["class", "data_loading", 4, "ngIf"], ["class", "episode-group row", 4, "ngIf"], [1, "data_loading"], [1, "episode-group", "row"], [1, "col-md-8", "col-sm-12", 2, "margin", "0px", "padding", "1px 1px 5px 11px"], ["class", "episode-card", 4, "ngFor", "ngForOf"], [1, "pagination"], [4, "ngFor", "ngForOf"], [3, "pageChange"], [1, "col-md-4", "col-sm-12"], [1, "episode-card"], [1, "card-container", 3, "ngClass"], [1, "header"], [1, "play-icon"], ["draggable", "false", 3, "src", "click"], [1, "header_text"], [1, "number", 3, "click"], ["draggable", "false", "src", "assets/chess/Dreamroom/episode-list/card/stats/video.svg", 4, "ngIf"], [4, "ngIf"], [1, "name"], [1, "icons"], ["draggable", "false", "matTooltip", "Examples", 3, "src", "ngClass", "click"], ["draggable", "false", "matTooltip", "Puzzle", 3, "src", "ngClass", "click"], ["draggable", "false", "matTooltip", "Flip Book", 3, "src", "ngClass", "click"], ["draggable", "false", "src", "assets/chess/Dreamroom/episode-list/card/stats/video.svg"]], template: function EpisodeListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EpisodeListComponent_div_1_Template, 2, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EpisodeListComponent_div_2_Template, 9, 7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c3, !(ctx.UpComingClassRoom.length > 0 || ctx.UpComingLiveRoom.length > 0)));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.episodeReceived);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.episodeReceived);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationControlsComponent"], _app_common_upcoming_events_section_upcoming_events_section_component__WEBPACK_IMPORTED_MODULE_12__["UpcomingEventsSectionComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginatePipe"]], encapsulation: 2 });
    return EpisodeListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EpisodeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-episode-list',
                templateUrl: './episode-list.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _dreamroom_data_service__WEBPACK_IMPORTED_MODULE_6__["DreamroomDataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbService"] }, { type: _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_7__["AmplitudeService"] }]; }, { episodeListComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dr-landing/episode-list/episode-list.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-landing/episode-list/episode-list.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EpisodeListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeListModule", function() { return EpisodeListModule; });
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _episode_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./episode-list.component */ "./src/app/user/dreamroom/dr-landing/episode-list/episode-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _episode_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./episode-list-routing.module */ "./src/app/user/dreamroom/dr-landing/episode-list/episode-list-routing.module.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app-material-module */ "./src/app/app-material-module.ts");
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app-bootstrap.module */ "./src/app/app-bootstrap.module.ts");
/* harmony import */ var _dr_functionality_flip_book_url_flip_book_url_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dr-functionality/flip-book-url/flip-book-url.service */ "./src/app/user/dreamroom/dr-functionality/flip-book-url/flip-book-url.service.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");










var EpisodeListModule = /** @class */ (function () {
    function EpisodeListModule() {
    }
    EpisodeListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EpisodeListModule });
    EpisodeListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function EpisodeListModule_Factory(t) { return new (t || EpisodeListModule)(); }, providers: [_dr_functionality_flip_book_url_flip_book_url_service__WEBPACK_IMPORTED_MODULE_7__["FlipBookUrlService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_0__["AppCommonModule"],
                _episode_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["EpisodeListRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"]
            ]] });
    return EpisodeListModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EpisodeListModule, { declarations: [
        // FlipBookUrlComponent,
        _episode_list_component__WEBPACK_IMPORTED_MODULE_1__["EpisodeListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
        _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_0__["AppCommonModule"],
        _episode_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["EpisodeListRoutingModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EpisodeListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                    _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_0__["AppCommonModule"],
                    _episode_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["EpisodeListRoutingModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"]
                ],
                declarations: [
                    // FlipBookUrlComponent,
                    _episode_list_component__WEBPACK_IMPORTED_MODULE_1__["EpisodeListComponent"],
                ],
                // schemas: [NO_ERRORS_SCHEMA],
                entryComponents: [
                // FlipBookUrlComponent
                ],
                exports: [],
                providers: [_dr_functionality_flip_book_url_flip_book_url_service__WEBPACK_IMPORTED_MODULE_7__["FlipBookUrlService"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=episode-list-episode-list-module.js.map