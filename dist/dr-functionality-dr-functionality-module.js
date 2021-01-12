(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dr-functionality-dr-functionality-module"],{

/***/ "./src/app/user/dreamroom/dr-functionality/dr-functionality-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/dr-functionality-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: DrFunctionalityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrFunctionalityRoutingModule", function() { return DrFunctionalityRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dr_functionality_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dr-functionality.component */ "./src/app/user/dreamroom/dr-functionality/dr-functionality.component.ts");
/* harmony import */ var _video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-detail/video-detail.component */ "./src/app/user/dreamroom/dr-functionality/video-detail/video-detail.component.ts");






var routes = [
    {
        path: '',
        component: _dr_functionality_component__WEBPACK_IMPORTED_MODULE_2__["DrFunctionalityComponent"],
        children: [
            {
                path: 'puzzle',
                loadChildren: function () { return __webpack_require__.e(/*! import() | puzzle-puzzle-module */ "puzzle-puzzle-module").then(__webpack_require__.bind(null, /*! ./puzzle/puzzle.module */ "./src/app/user/dreamroom/dr-functionality/puzzle/puzzle.module.ts")).then(function (m) { return m.PuzzleModule; }); }
            },
            {
                path: 'video/:categoryId/:productType/:productId/:episodeId',
                component: _video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_3__["VideoDetailComponent"]
            },
            {
                path: 'example',
                loadChildren: function () { return __webpack_require__.e(/*! import() | example-example-module */ "example-example-module").then(__webpack_require__.bind(null, /*! ./example/example.module */ "./src/app/user/dreamroom/dr-functionality/example/example.module.ts")).then(function (m) { return m.ExampleModule; }); }
            }
        ],
    }
];
var DrFunctionalityRoutingModule = /** @class */ (function () {
    function DrFunctionalityRoutingModule() {
    }
    DrFunctionalityRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DrFunctionalityRoutingModule });
    DrFunctionalityRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DrFunctionalityRoutingModule_Factory(t) { return new (t || DrFunctionalityRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return DrFunctionalityRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DrFunctionalityRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrFunctionalityRoutingModule, [{
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

/***/ "./src/app/user/dreamroom/dr-functionality/dr-functionality.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/dr-functionality.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DrFunctionalityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrFunctionalityComponent", function() { return DrFunctionalityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




var DrFunctionalityComponent = /** @class */ (function () {
    function DrFunctionalityComponent() {
        this.DrFunctionalityComponentClass = 'app-dr-functionality';
    }
    DrFunctionalityComponent.prototype.ngOnInit = function () {
        // console.log('I am in dr-functionality');
    };
    DrFunctionalityComponent.ɵfac = function DrFunctionalityComponent_Factory(t) { return new (t || DrFunctionalityComponent)(); };
    DrFunctionalityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrFunctionalityComponent, selectors: [["app-dr-functionality"]], hostVars: 2, hostBindings: function DrFunctionalityComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.DrFunctionalityComponentClass);
        } }, decls: 1, vars: 0, template: function DrFunctionalityComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return DrFunctionalityComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrFunctionalityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dr-functionality',
                templateUrl: './dr-functionality.component.html'
            }]
    }], function () { return []; }, { DrFunctionalityComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dr-functionality/dr-functionality.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/dr-functionality.module.ts ***!
  \****************************************************************************/
/*! exports provided: DrFunctionalityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrFunctionalityModule", function() { return DrFunctionalityModule; });
/* harmony import */ var _dr_functionality_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dr-functionality.component */ "./src/app/user/dreamroom/dr-functionality/dr-functionality.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-material-module */ "./src/app/app-material-module.ts");
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app-bootstrap.module */ "./src/app/app-bootstrap.module.ts");
/* harmony import */ var _dr_functionality_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dr-functionality-routing.module */ "./src/app/user/dreamroom/dr-functionality/dr-functionality-routing.module.ts");
/* harmony import */ var _video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-detail/video-detail.component */ "./src/app/user/dreamroom/dr-functionality/video-detail/video-detail.component.ts");
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");









var DrFunctionalityModule = /** @class */ (function () {
    function DrFunctionalityModule() {
    }
    DrFunctionalityModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DrFunctionalityModule });
    DrFunctionalityModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DrFunctionalityModule_Factory(t) { return new (t || DrFunctionalityModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
                _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["AppBootstrapModule"],
                _dr_functionality_routing_module__WEBPACK_IMPORTED_MODULE_5__["DrFunctionalityRoutingModule"]
            ]] });
    return DrFunctionalityModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DrFunctionalityModule, { declarations: [_dr_functionality_component__WEBPACK_IMPORTED_MODULE_0__["DrFunctionalityComponent"],
        _video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_6__["VideoDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
        _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["AppBootstrapModule"],
        _dr_functionality_routing_module__WEBPACK_IMPORTED_MODULE_5__["DrFunctionalityRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DrFunctionalityModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
                    _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["AppBootstrapModule"],
                    _dr_functionality_routing_module__WEBPACK_IMPORTED_MODULE_5__["DrFunctionalityRoutingModule"]
                ],
                declarations: [
                    _dr_functionality_component__WEBPACK_IMPORTED_MODULE_0__["DrFunctionalityComponent"],
                    _video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_6__["VideoDetailComponent"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
                exports: [],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dr-functionality/video-detail/video-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/video-detail/video-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: VideoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetailComponent", function() { return VideoDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _flip_book_url_flip_book_url_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../flip-book-url/flip-book-url.component */ "./src/app/user/dreamroom/dr-functionality/flip-book-url/flip-book-url.component.ts");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var _auth_ip_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../auth/ip.service */ "./src/app/auth/ip.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_common_user_activity_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../app-common/user-activity.service */ "./src/app/app-common/user-activity.service.ts");
/* harmony import */ var _star_room_star_room_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../star-room/star-room-data.service */ "./src/app/user/star-room/star-room-data.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tooltip.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
/* harmony import */ var _common_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../common/ellipsis-pipe */ "./src/app/common/ellipsis-pipe.ts");

























function VideoDetailComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "We have detected an unusual activity in your system");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Please close your browser and restart again");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VideoDetailComponent_div_1_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var browser_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", browser_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", browser_r7.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", browser_r7.name);
} }
var _c0 = function (a0) { return { "margin_spacing": a0 }; };
function VideoDetailComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please upgrade to any of the following browsers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, VideoDetailComponent_div_1_div_2_img_4_Template, 1, 3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r5.devToolStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.supportedBrowserList);
} }
function VideoDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VideoDetailComponent_div_1_div_1_Template, 7, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, VideoDetailComponent_div_1_div_2_Template, 5, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.devToolStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.verifyUserBrowser());
} }
var _c1 = function (a0) { return { "disabled": a0 }; };
function VideoDetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VideoDetailComponent_div_2_Template_img_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.openExample(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VideoDetailComponent_div_2_Template_img_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.openPuzzle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VideoDetailComponent_div_2_Template_img_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.openFlipBook(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VideoDetailComponent_div_2_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.nextVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Next video");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VideoDetailComponent_div_2_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.previousVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Previous video ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Episode ", ctx_r1.episode_id, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.episode_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r1.getButtonLink(ctx_r1.episode_example, 3), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r1.getButtonLink(ctx_r1.episode_puzzle, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r1.getButtonLink(ctx_r1.episode_flipbook, 4), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.episode_detail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, !ctx_r1.nextEpisode_active));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c1, ctx_r1.episode_id == 1 || !ctx_r1.previousEpisode_active));
} }
var _c2 = function (a0) { return { "remove_bottom_border": a0 }; };
function VideoDetailComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "ellipsis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VideoDetailComponent_div_4_div_4_Template_span_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r16.openDashboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var content_r15 = ctx.$implicit;
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c2, content_r15.id == ctx_r14.UpComingClassRoom.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", content_r15.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](content_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 5, content_r15.description, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 8, content_r15.scheduled_date, "d/M/yy"));
} }
function VideoDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Upcoming Class Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, VideoDetailComponent_div_4_div_4_Template, 14, 13, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.UpComingClassRoom);
} }
function VideoDetailComponent_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "ellipsis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VideoDetailComponent_div_5_div_4_Template_span_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r20.openDashboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var content_r19 = ctx.$implicit;
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c2, content_r19.id == ctx_r18.UpComingLiveRoom.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", content_r19.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](content_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 5, content_r19.description, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 8, content_r19.scheduled_date, "d/M/yy"));
} }
function VideoDetailComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Upcoming Live Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, VideoDetailComponent_div_5_div_4_Template, 14, 13, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.UpComingLiveRoom);
} }
var VideoDetailComponent = /** @class */ (function () {
    function VideoDetailComponent(route, router, dialog, _dreamroomdata, _authService, _ipService, _location, _breadCrumb, _userActivity) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this._dreamroomdata = _dreamroomdata;
        this._authService = _authService;
        this._ipService = _ipService;
        this._location = _location;
        this._breadCrumb = _breadCrumb;
        this._userActivity = _userActivity;
        this.videoDetailComponentClass = "app-video-detail";
        this.currentPage = 1;
        this.UpComingLiveRoom = [];
        this.UpComingClassRoom = [];
        this.devToolStatus = false;
        this.supportedBrowserList = [
            {
                name: "Chrome",
                provider: "Google",
                image_url: "assets/browser/chrome.svg",
            },
            {
                name: "Firefox",
                provider: "Mozilla",
                image_url: "assets/browser/firefox.svg",
            },
            {
                name: "Safari",
                provider: "Apple",
                image_url: "assets/browser/safari.svg",
            },
            {
                name: "Edge",
                provider: "Microsoft",
                image_url: "assets/browser/edge.svg",
            },
            {
                name: "Opera",
                provider: "Otello",
                image_url: "assets/browser/opera.svg",
            },
        ];
        this.conf = {
            key: "",
            source: {
                dash: "",
                hls: "",
                progressive: "",
                poster: "",
                drm: {
                    widevine: {
                        LA_URL: "https://widevine-dash.ezdrm.com/proxy?pX=5197BC",
                    },
                    fairplay: {
                        LA_URL: "https://fps.ezdrm.com/api/licenses/12b27509-7e12-4b8e-97e7-7888b8a950f2",
                        certificateURL: "https://s3-ap-southeast-1.amazonaws.com/chess-video/fairplay.cer",
                        prepareContentId: function (contentId) {
                            var uri = contentId;
                            var uriParts = uri.split("://", 1);
                            var protocol = uriParts[0].slice(-3);
                            uriParts = uri.split(";", 2);
                            contentId = uriParts.length > 1 ? uriParts[1] : "";
                            uriParts = contentId.split("?", 2);
                            contentId = uriParts.length > 1 ? uriParts[0] : contentId;
                            return protocol.toLowerCase() == "skd" ? contentId : "";
                        },
                        prepareLicenseAsync: function (ckc) {
                            return new Promise(function (resolve, reject) {
                                var reader = new FileReader();
                                reader.addEventListener("loadend", function () {
                                    resolve(new Uint8Array(reader.result));
                                });
                                reader.addEventListener("error", function () {
                                    reject(reader.error);
                                });
                                reader.readAsArrayBuffer(ckc);
                            });
                        },
                        prepareMessage: function (event, session) {
                            return new Blob([event.message], {
                                type: "application/octet-binary",
                            });
                        },
                        headers: [
                            {
                                name: "content-type",
                                value: "application/octet-stream",
                            },
                        ],
                        useUint16InitData: true,
                        licenseResponseType: "blob",
                    },
                },
            },
            adaptation: {
                desktop: {
                    preload: false,
                },
                mobile: {
                    preload: false,
                },
            },
            skin: {
                screenLogoImage: "assets/chess/bobby-fischer.png",
            },
            logs: {
                bitmovin: false,
            },
            events: {
                onReady: function () {
                    if (_this.verifyUserBrowser() && !_this.devToolStatus) {
                        var element = document.getElementById("bmpui-id-201");
                        var userInfoElementContainer = _this.createUserInfoContainer();
                        element.appendChild(userInfoElementContainer);
                        _this.setIntervalId = setInterval(function () {
                            var randomPosition = Math.floor(Math.random() * 100 + 1);
                            if (_this.verifyDomStyleChanges()) {
                                location.reload();
                            }
                            else {
                                document.getElementById("user_info_container").style.top = randomPosition + "%";
                                document.getElementById("user_info_container").style.left = 100 - randomPosition + "%";
                            }
                        }, 3000);
                    }
                },
            },
        };
        _location.onPopState(function () {
            _this.player.unload();
            _this.player = undefined;
            clearInterval(_this.refreshIntervalId);
        });
        // added check for verification of chrome dev tool open or not
        window.addEventListener("devtoolschange", function (e) {
            _this.devToolStatus = e.detail.open;
            // refresh page here
            if (!e.detail.open) {
                // console.log('!e.detail.open', !e.detail.open);
                location.reload();
            }
            // if you get value true --> log user activity -- service call
            _this._userActivity.logUserActivity("video-hack", _this.productId, _this.episode_id);
        });
    }
    VideoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.route.params.subscribe(function (params) {
            _this.categoryId = parseInt(params.categoryId);
            _this.productType = parseInt(params.productType);
            _this.productId = parseInt(params.productId);
            _this.episode_id = parseInt(params.episodeId);
            if (_this.episode_id <= 0) {
                _this.router.navigateByUrl("/");
            }
            // logging video detail
            _this._userActivity.logUserActivity("dreamroom-video", _this.productId, _this.episode_id);
        });
        this._ipService.getUserInfo().subscribe(function (info) {
            _this.user_ip = info.query;
            _this.user_ip_country = info.country;
        });
        this._authService.getUserProfileDetail().subscribe(function (res) {
            _this.user_email = res.data.users.user.email;
            _this.user_mobile = res.data.users.user.mobile;
        });
        var pgn_element = document.getElementById("example_pgn_viewer");
        if (pgn_element) {
            // console.log('pgn_element', pgn_element);
            location.reload();
        }
        var localWindow = window;
        this.devToolStatus = localWindow.devtools.open;
        if (this.verifyUserBrowser() && !this.devToolStatus) {
            this.getDataFromServer();
            this.getUpcomingEvent();
            this._breadCrumb.episodeBreadCrumb(this.episode_id);
            this._breadCrumb.levelSelectorBreadcrumb(this.productId - 99);
        }
        else {
            // this is case for unknown browser or dev tools open
            // log user activity here - make service call -->
            window.addEventListener("devtoolschange", function (e) {
                _this.devToolStatus = e.detail.open;
                // if you get value true --> log user activity -- service call
                _this._userActivity.logUserActivity("video-hack", _this.productId, _this.episode_id);
            });
        }
    };
    VideoDetailComponent.prototype.ngAfterViewInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    VideoDetailComponent.prototype.createUserInfoContainer = function () {
        var userInfoElementContainer = document.createElement("div");
        userInfoElementContainer.id = "user_info_container";
        userInfoElementContainer.style.position = "absolute";
        userInfoElementContainer.style.top = "15%";
        userInfoElementContainer.style.left = "5%";
        var userInfoElement = document.createElement("div");
        userInfoElement.id = "user_info_element";
        userInfoElement.style["font-size"] = "1em";
        userInfoElement.style.opacity = this.isVideoOnDesktop() ? "0.6" : "0.9";
        userInfoElement.style.color = "white";
        var elTextNode = document.createTextNode(this.user_email + " " + this.user_mobile);
        userInfoElement.appendChild(elTextNode);
        userInfoElementContainer.appendChild(userInfoElement);
        return userInfoElementContainer;
    };
    VideoDetailComponent.prototype.resetUserInfoContainerStyle = function (el) {
        el.style.removeProperty("top");
        el.style.removeProperty("bottom");
        el.style.removeProperty("left");
        el.style.removeProperty("right");
    };
    VideoDetailComponent.prototype.loadScript = function (scriptUrl) {
        return new Promise(function (resolve, reject) {
            var scriptElement = document.createElement("script");
            scriptElement.src = scriptUrl;
            scriptElement.id = "video_ui_loader";
            scriptElement.onload = resolve;
            scriptElement.onerror = reject;
            document.body.appendChild(scriptElement);
        });
    };
    VideoDetailComponent.prototype.openPuzzle = function () {
        this.episode_ids = this.episode_id;
        // console.log(this.episode_ids,"LINE NO 314");
        localStorage.setItem("example", this.episode_ids);
        // console.log(this.episode_id, 'episode id');
        this._breadCrumb.episodeBreadCrumb(this.episode_id);
        this.player.unload();
        if (this.episode_puzzle) {
            this.router.navigateByUrl("/user/dreamroom/dr-functionality/puzzle/" + this.productId + "/" + (this
                .productId - 99) + "/" + this.episode_id);
        }
    };
    VideoDetailComponent.prototype.openExample = function () {
        this.episode_ids = this.episode_id;
        localStorage.setItem("example", this.episode_ids);
        // console.log(this.episode_ids,"LINE NO 331")
        // console.log(this.episode_id, 'episode id');
        this._breadCrumb.episodeBreadCrumb(this.episode_id);
        this.player.unload();
        if (this.episode_example) {
            this.router.navigateByUrl("/user/dreamroom/dr-functionality/example/" + this.productId + "/" + (this
                .productId - 99) + "/" + this.episode_id);
        }
    };
    VideoDetailComponent.prototype.openFlipBook = function () {
        this.player.pause();
        if (this.episode_flipbook !== "" || this.episode_flipbook !== null) {
            var dialogRef = this.dialog.open(_flip_book_url_flip_book_url_component__WEBPACK_IMPORTED_MODULE_6__["FlipBookUrlComponent"], {
                width: "90%",
                height: "90%",
                autoFocus: false,
                data: {
                    id: this.episode_flipbook,
                },
            });
        }
    };
    VideoDetailComponent.prototype.getDataFromServer = function () {
        var _this = this;
        this._authService
            .getUserDreamRoomVideo({
            categoryId: this.categoryId,
            productType: this.productType,
            productId: this.productId,
            limit: 3,
            offset: Number(this.episode_id) === 1 ? 0 : this.episode_id - 2,
        })
            .subscribe(function (res) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var samplearray1, samplearray2, analytics;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        samplearray1 = res.data.videos[0];
                        this.previousEpisode_active =
                            samplearray1.dash || samplearray1.hls ? true : false;
                        if (Number(this.episode_id) === 1) {
                            this.sampleArray = res.data.videos[0];
                            // console.log("LINE 375");
                        }
                        else {
                            this.sampleArray = res.data.videos[1];
                            // console.log("LINE 379");
                        }
                        samplearray2 = res.data.videos[2];
                        if (samplearray2) {
                            this.nextEpisode_active =
                                samplearray2.dash || samplearray2.hls ? true : false;
                        }
                        this.episode_active = this.sampleArray.episode_id;
                        this.episode_name = this.sampleArray.name;
                        this.episode_detail = this.sampleArray.short_description;
                        this.episode_example = this.sampleArray.is_example_ready;
                        this.episode_puzzle = this.sampleArray.is_puzzle_ready;
                        this.episode_flipbook = this.sampleArray.flipbook_url;
                        this.conf.key = "75339520-6b8d-4f3b-8899-3d2f044240d2";
                        this.conf.source.dash = this.sampleArray.dash;
                        this.conf.source.hls = this.sampleArray.hls;
                        this.conf.source.poster =
                            this.sampleArray.poster === null
                                ? "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg"
                                : this.sampleArray.poster;
                        this.conf.source.progressive =
                            this.sampleArray.progressive === null
                                ? ""
                                : this.sampleArray.progressive;
                        this.sampleArray.image_url =
                            this.sampleArray.image_url === null
                                ? "assets/chess/Dreamroom/episode-list/card/thumbnail.png"
                                : this.sampleArray.image_url;
                        this.episodeList = this.sampleArray;
                        return [4 /*yield*/, this.loadScript("https://bitmovin-a.akamaihd.net/bitmovin-player/stable/7.7/bitmovinplayer.js")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript("https://bitmovin-a.akamaihd.net/bitmovin-analytics/stable/1/bitmovinanalytics.min.js")];
                    case 2:
                        _a.sent();
                        this.player = window["bitmovin"]["player"]("player");
                        analytics = window["bitmovin"].analytics({
                            key: "6f7b352c-fc51-4a99-bdea-fc39e3b4cc90",
                            USER_ID: localStorage.getItem("id"),
                            PROJECT_ENVIRONMENT: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].name,
                            IP_ADDRESS: this.user_ip,
                            VIDEO_ID: this.productId + "-" + this.episode_id,
                        });
                        analytics.register(this.player);
                        this.player.setup(this.conf).then(function (value) {
                            // this.player.play();
                            // Success
                            // console.log('Successfully created bitmovin player instance');
                        }, function (reason) {
                            // Error!
                            // console.log('Error while creating bitmovin player instance');
                        });
                        return [2 /*return*/];
                }
            });
        }); }, function (err) {
            // console.log(err);
        });
    };
    VideoDetailComponent.prototype.getButtonLink = function (episodeStatus, buttonId) {
        if (episodeStatus) {
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
            }
        }
    };
    VideoDetailComponent.prototype.getUpcomingEvent = function () {
        var _this = this;
        this._authService.getUpcomingUserDashboard().subscribe(function (res) {
            _this.UpComingClassRoom = res.data.productList[0].products;
            _this.UpComingLiveRoom = res.data.productList[1].products;
        });
    };
    VideoDetailComponent.prototype.openDashboard = function () {
        this._breadCrumb.levelSelectorBreadcrumb(0);
        this._breadCrumb.episodeBreadCrumb(0);
        this._breadCrumb.puzzleBreadCrumb(0);
        this._breadCrumb.exampleBreadCrumb(0);
        this.router.navigateByUrl("/user/dashboard/" + localStorage.getItem("first_name"));
    };
    VideoDetailComponent.prototype.nextVideo = function () {
        if (this.nextEpisode_active) {
            var temp = Number(this.episode_id);
            this.router.navigateByUrl("user/dreamroom/dr-functionality/video/" + this.categoryId + "/" + this.productType + "/" + this.productId + "/" + ++temp);
            var pgn_element = document.getElementById("example_pgn_viewer");
            this.route.params.subscribe(function (param) {
                location.reload();
            });
        }
    };
    VideoDetailComponent.prototype.previousVideo = function () {
        if (this.previousEpisode_active) {
            var temp = Number(this.episode_id);
            this.router.navigateByUrl("user/dreamroom/dr-functionality/video/" + this.categoryId + "/" + this.productType + "/" + this.productId + "/" + --temp);
            var pgn_element = document.getElementById("example_pgn_viewer");
            this.route.params.subscribe(function (param) {
                location.reload();
            });
        }
    };
    VideoDetailComponent.prototype.ngOnDestroy = function () {
        this.player = undefined;
        clearInterval(this.setIntervalId);
    };
    VideoDetailComponent.prototype.getUserBrowser = function () {
        var localWindow = window;
        var isIE = !!localWindow.documentMode;
        if (!!localWindow.chrome && !!localWindow.chrome.webstore) {
            return "Chrome";
        }
        if (navigator.userAgent.indexOf("Firefox") != -1) {
            return "Mozilla Firefox";
        }
        if (navigator.userAgent.toLowerCase().indexOf("safari") != -1) {
            return "Safari";
        }
        if (!isIE && !!localWindow.StyleMedia) {
            return "Edge";
        }
        if (!!localWindow.opr ||
            !!localWindow.opera ||
            navigator.userAgent.indexOf(" OPR/") >= 0) {
            return "Opera";
        }
        return "Unknown Browser detected";
    };
    VideoDetailComponent.prototype.verifyUserBrowser = function () {
        var localWindow = window;
        var isIE = !!localWindow.documentMode;
        var isChrome = !!localWindow.chrome && !!localWindow.chrome.webstore;
        var isFirefox = navigator.userAgent.indexOf("Firefox") != -1;
        var isSafari = navigator.userAgent.toLowerCase().indexOf("safari") != -1;
        var isEdge = !isIE && !!localWindow.StyleMedia;
        var isOpera = !!localWindow.opr ||
            !!localWindow.opera ||
            navigator.userAgent.indexOf(" OPR/") >= 0;
        return isChrome || isFirefox || isSafari || isEdge || isOpera;
    };
    VideoDetailComponent.prototype.verifyDomStyleChanges = function () {
        /**
    
        console.log(
         'line - 607: ', !document.getElementById('user_info_element')
         ,
         'line -  609: ', ( document.getElementById('user_info_element').innerText !== ( this.user_email + ' ' + this.user_mobile ) )
         ,
         'line -  611: ', ( document.getElementById('user_info_element').style.length > 3 )
         ,
         'line -  613: ', ( document.getElementById('user_info_element').style[ 'font-size' ] !== '1em' )
         ,
         'line -  615: ', ( this.isVideoOnDesktop() ? document.getElementById('user_info_element').style[ 'opacity' ] !== '0.6' : document.getElementById('user_info_element').style[ 'opacity' ] !== '0.9' )
         ,
         'line -  617: ', ( document.getElementById('user_info_element').getAttribute('hidden') !== null )
         ,
         'line -  619: ', ( document.getElementById('user_info_element').children.length !== 0 ),
    
         '========================================================',
    
         'line - 622: ', !document.getElementById('user_info_container')
         ,
         'line - 624: ', ( document.getElementById('user_info_container').style.length !== 3 )
         ,
         'line - 626: ', ( document.getElementById('user_info_container').style[ 'position' ] !== 'absolute' )
         ,
         'line - 628: ', ( !document.getElementById('user_info_container').style[ 'top' ] )
         ,
         'line - 630: ', ( !document.getElementById('user_info_container').style[ 'left' ] )
         ,
         'line - 632: ', ( document.getElementById('user_info_container').getAttribute('hidden') !== null )
         ,
         'line - 634: ', ( document.getElementById('user_info_container').children.length > 1 )
         ,
         'line - 636: ', ( document.getElementById('user_info_container').children[ 0 ].id !== 'user_info_element' ),
    
         '========================================================',
    
          'this.onDesktopStyleValidation()', this.isVideoOnDesktop() ? this.onDesktopStyleValidation() : false,
    
         '========================================================',
    
         'line - : ', ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ])[ 'z-index' ] < 0 )
         ,
         'line - 660: ', ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).position !== 'absolute' )
         ,
        //  'line - 662: ', ( this.isVideoOnDesktop() ? getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).top !== '0' : false)
        //  ,
        //  'line - 664: ', ( this.isVideoOnDesktop() ? getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).left !== '0' : false)
        //  ,
        //  'line - 666: ', ( ( ( navigator.userAgent.indexOf('Firefox') != -1 ) || ( navigator.userAgent.toLowerCase().indexOf('safari') != -1 ) ) ? false : ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).left !== '0' ) )
        //  ,
        //  'line - 668: ', ( ( ( navigator.userAgent.indexOf('Firefox') != -1 ) || ( navigator.userAgent.toLowerCase().indexOf('safari') != -1 ) ) ? false : ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).right !== '0' ) )
        //  ,
         'line - 670: ', ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).display !== 'block' )
         )
         ;
    
         **/
        return (!document.getElementById("user_info_element") ||
            document.getElementById("user_info_element").innerText !==
                this.user_email + " " + this.user_mobile ||
            document.getElementById("user_info_element").style.length > 3 ||
            document.getElementById("user_info_element").style["font-size"] !==
                "1em" ||
            (this.isVideoOnDesktop()
                ? document.getElementById("user_info_element").style["opacity"] !==
                    "0.6"
                : document.getElementById("user_info_element").style["opacity"] !==
                    "0.9") ||
            document.getElementById("user_info_element").getAttribute("hidden") !==
                null ||
            document.getElementById("user_info_element").children.length !== 0 ||
            // user info container
            !document.getElementById("user_info_container") ||
            document.getElementById("user_info_container").style.length !== 3 ||
            document.getElementById("user_info_container").style["position"] !==
                "absolute" ||
            !document.getElementById("user_info_container").style["top"] ||
            !document.getElementById("user_info_container").style["left"] ||
            document.getElementById("user_info_container").getAttribute("hidden") !==
                null ||
            document.getElementById("user_info_container").children.length > 1 ||
            document.getElementById("user_info_container").children[0].id !==
                "user_info_element" ||
            // level 1 - for css  -- bmpui-id-214
            (!this.isVideoOnDesktop() ? this.onDesktopStyleValidation() : false) ||
            // now target 3rd party element
            getComputedStyle(document.getElementsByClassName("bmpui-ui-uicontainer")[0])["z-index"] < 0 ||
            getComputedStyle(document.getElementsByClassName("bmpui-ui-uicontainer")[0]).position !== "absolute" ||
            // ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).top !== '0' )
            // ||
            // ( ( ( navigator.userAgent.indexOf('Firefox') != -1 ) || ( navigator.userAgent.toLowerCase().indexOf('safari') != -1 ) ) ? false : ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).left !== '0' ) )
            // ||
            // ( ( ( navigator.userAgent.indexOf('Firefox') != -1 ) || ( navigator.userAgent.toLowerCase().indexOf('safari') != -1 ) ) ? false : ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).right !== '0' ) )
            //  ||
            // ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).margin < '0px' )
            // ||
            getComputedStyle(document.getElementsByClassName("bmpui-ui-uicontainer")[0]).display !== "block");
    };
    // when screen width changes
    VideoDetailComponent.prototype.onResize = function (event) {
        // location.reload();
    };
    VideoDetailComponent.prototype.isVideoOnDesktop = function () {
        return window.innerWidth > 600;
    };
    VideoDetailComponent.prototype.onDesktopStyleValidation = function () {
        /**
        console.log(
          'line - 639: ', ( document.getElementById('bmpui-id-214').style.length > 0 )
          ,
          'line - 641: ', ( document.getElementById('bmpui-id-214').getAttribute('hidden') !== null ),
    
          '========================================================',
    
          'line - 644: ', ( document.getElementById('bmpui-id-214').children[ 0 ][ 'style' ].length > 0 )
          ,
          'line - 646: ', ( document.getElementById('bmpui-id-214').children[ 0 ].getAttribute('hidden') !== null ),
    
          '=======================================================',
    
          'line - 649: ', ( document.getElementById('bmpui-id-201').style.length > 0 )
          ,
          'line - 651: ', ( document.getElementById('bmpui-id-201').children[ 1 ].id !== 'user_info_container' )
          ,
          'line - 653: ', ( document.getElementById('bmpui-id-214').children[ 0 ].children[ 2 ].id !== 'bmpui-id-201' )
          ,
          'line - 655: ', ( document.getElementById('bmpui-id-214').parentElement.nodeName !== 'FIGURE' )
          ,
          'line - 657: ', ( document.getElementById('bmpui-id-201').getAttribute('hidden') !== null ),
        );
        */
        return (document.getElementById("bmpui-id-214").style.length > 0 ||
            document.getElementById("bmpui-id-214").getAttribute("hidden") !== null ||
            // first children of above id
            document.getElementById("bmpui-id-214").children[0]["style"].length > 0 ||
            document
                .getElementById("bmpui-id-214")
                .children[0].getAttribute("hidden") !== null ||
            // get child of above id -- bmpui-id-201
            document.getElementById("bmpui-id-201").style.length > 0 ||
            document.getElementById("bmpui-id-201").children[1].id !==
                "user_info_container" ||
            document.getElementById("bmpui-id-214").children[0].children[2].id !==
                "bmpui-id-201" ||
            document.getElementById("bmpui-id-214").parentElement.nodeName !==
                "FIGURE" ||
            document.getElementById("bmpui-id-201").getAttribute("hidden") !== null);
    };
    VideoDetailComponent.ɵfac = function VideoDetailComponent_Factory(t) { return new (t || VideoDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_star_room_star_room_data_service__WEBPACK_IMPORTED_MODULE_11__["StarroomDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_ip_service__WEBPACK_IMPORTED_MODULE_8__["IpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_7__["BreadCrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_common_user_activity_service__WEBPACK_IMPORTED_MODULE_10__["UserActivityService"])); };
    VideoDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VideoDetailComponent, selectors: [["app-video-detail"]], hostVars: 2, hostBindings: function VideoDetailComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.videoDetailComponentClass);
        } }, decls: 6, vars: 4, consts: [["oncontextmenu", "return false;", "onmousedown", "return false;", "onkeydown", "return false;", 1, "video_detail_container", 3, "resize"], ["class", "error_state", 4, "ngIf"], ["class", "video_detail", 4, "ngIf"], [1, "side_data_display"], ["class", "side_block1", 4, "ngIf"], [1, "error_state"], ["class", "dev_tool", 4, "ngIf"], ["class", "verify_browser", 3, "ngClass", 4, "ngIf"], [1, "dev_tool"], [1, "verify_browser", 3, "ngClass"], [3, "alt", "src", "matTooltip", 4, "ngFor", "ngForOf"], [3, "alt", "src", "matTooltip"], [1, "video_detail"], ["id", "video_player", 1, "video"], ["id", "player"], [1, "detail"], [1, "icons_container"], [1, "icons"], ["draggable", "false", "matTooltip", "Examples", 3, "src", "click"], ["draggable", "false", "matTooltip", "Puzzle", 3, "src", "click"], ["draggable", "false", "matTooltip", "Flip Book", 3, "src", "click"], [1, "video_navigation"], [3, "ngClass", "click"], [1, "side_block1"], [1, "block_container"], ["class", "block_card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "block_card", 3, "ngClass"], ["draggable", "false", 3, "src"], [1, "block_content"], [1, "heading"], [1, "bottom-section"], [1, "date"], [1, "view_more", 3, "click"]], template: function VideoDetailComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function VideoDetailComponent_Template_div_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VideoDetailComponent_div_1_Template, 3, 2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, VideoDetailComponent_div_2_Template, 21, 12, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, VideoDetailComponent_div_4_Template, 5, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, VideoDetailComponent_div_5_Template, 5, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.devToolStatus || !ctx.verifyUserBrowser());
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.devToolStatus && ctx.verifyUserBrowser());
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.UpComingClassRoom.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.UpComingLiveRoom.length > 0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"]], pipes: [_common_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_15__["EllipsisPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], encapsulation: 2 });
    return VideoDetailComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](VideoDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: "app-video-detail",
                templateUrl: "./video-detail.component.html",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _star_room_star_room_data_service__WEBPACK_IMPORTED_MODULE_11__["StarroomDataService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _auth_ip_service__WEBPACK_IMPORTED_MODULE_8__["IpService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PlatformLocation"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_7__["BreadCrumbService"] }, { type: _app_common_user_activity_service__WEBPACK_IMPORTED_MODULE_10__["UserActivityService"] }]; }, { videoDetailComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ["class"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=dr-functionality-dr-functionality-module.js.map