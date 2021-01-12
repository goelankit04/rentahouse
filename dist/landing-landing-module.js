(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./src/app/user/star-room/landing/course-detail/course-detail.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/user/star-room/landing/course-detail/course-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CourseDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailComponent", function() { return CourseDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function CourseDetailComponent_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    var prod_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", prod_r1 == null ? null : prod_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CourseDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CourseDetailComponent_div_1_img_1_Template, 1, 1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var prod_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", prod_r1 == null ? null : prod_r1.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r1 == null ? null : prod_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", prod_r1 == null ? null : prod_r1.desc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
var CourseDetailComponent = /** @class */ (function () {
    function CourseDetailComponent(_authService) {
        this._authService = _authService;
        this.courseDetailComponentClass = "app-course-detail";
        this.toggle = [false, false, false];
        this.heading = ["Approximate Hours of Episode", "Tournament Format"];
        this.beginnerList = [
            "Forcing Moves",
            "Double Attack and Defence",
            "Tactical Themes",
            "Comprehensive discussions with other renowned trainers",
            "Thematic Sacrifices",
            "Attacking of castled & uncastled King",
            "Opening principals for Beginners",
            "Basic Endgames",
        ];
        this.intermediateList = [
            "Forcing the moves on your opponent",
            "Prophylaxis",
            "Pawn Sacrifice",
            "Drawback Principle",
            "Comprehensive psychological issues discussed with parents",
            "Pawn Majority",
            "The Bishop & The Pawn Ending",
            "Double Bishop vs Bishop & Pawn Ending",
            "Improving Pieces",
            "The Knight & The Pawn Endings",
            "Attacking the Kings",
            "Tournament preparations",
            "How champions prepare for their game",
            "common mistakes in calculation studies",
            "Initiatives",
            "Understanding the weak squares",
            "Centralisation",
            "King Activity",
            "Pawn Breaks",
            "Building an opening repertoire",
            "Maintaining tension for the opponent",
            "The Intermediate Moves",
            "Preparation at home(before & after the game)",
            "Handling Pawns",
            "Solving Studies",
            "Comprehensive discussions on psychological and players issues",
            "The maneuver",
            "Playing Bishop Vs Knight",
            "Queen and Pawn Endings",
            "Exchanging Pieces",
            "Playing on colors",
            "Improving & exchanging the pieces",
            "The Bad Bishop",
            "Knight vs Bishop",
            "Rook & Pawn Endings",
            "Bishop & Pawn Endings",
            "Understanding complex calculations",
            "Common mistakes by young players",
            "Positional Play",
        ];
        this.advanceList = [
            "Advanced complex calculations",
            "The principal of two weakness",
            "Knight vs Bishop Endgame",
            "Improving the pieces",
            "Blindfold studies",
            "Understanding psychologies of great players with great coaches",
            "Playing with the isolated queen pawn & isolated pawn",
            "Chess studies with champions",
            "Complex calculations",
            "Passed Pawn",
            "Prophylaxis(Advanced level)",
            "The art of active defense",
            "Endgame(Knight vs Bishop)",
            "Analysing Pragg: World's youngest International Master",
            "Grand Masters game analysis",
            "Rook & Pawn Endings",
            "Deconstruction of puzzles",
            "Advanced Endgame techniques",
        ];
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.level_id = Number(localStorage.getItem("level_id"));
        // console.log(typeof(this.level_id))
        var data = {
            productId: this.level_id,
        };
        this._authService.getStarRoomDescription(data).subscribe(function (res) {
            // console.log(res);
            _this.product = res.data.productDetails.product_cource_faculty;
        });
    };
    CourseDetailComponent.prototype.getInitialList = function (contentList, limit) {
        var shortList = [];
        for (var i = 0; i < limit; i++) {
            shortList[i] = contentList[i];
        }
        return shortList;
    };
    CourseDetailComponent.prototype.getRestList = function (contentList, offset) {
        var restList = [];
        var index = 0;
        for (var i = --offset; i < contentList.length; i++) {
            restList[index++] = contentList[i];
        }
        return restList;
    };
    CourseDetailComponent.ɵfac = function CourseDetailComponent_Factory(t) { return new (t || CourseDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
    CourseDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseDetailComponent, selectors: [["app-course-detail"]], hostVars: 2, hostBindings: function CourseDetailComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.courseDetailComponentClass);
        } }, decls: 2, vars: 1, consts: [[1, "contain"], ["class", "faculty faculty_management", 4, "ngFor", "ngForOf"], [1, "faculty", "faculty_management"], [3, "src", 4, "ngIf"], [1, "column"], [1, "heading"], [3, "innerHTML"], [3, "src"]], template: function CourseDetailComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CourseDetailComponent_div_1_Template, 7, 3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".app-course-detail[_ngcontent-%COMP%]   .faculty[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 30px 60px;\n  display: flex;\n}\n\n.app-course-detail[_ngcontent-%COMP%]   .faculty[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid grey;\n}\n\n.app-course-detail[_ngcontent-%COMP%]   .faculty[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  padding-left: 2em;\n  display: flex;\n  flex-direction: column;\n}\n\n.app-course-detail[_ngcontent-%COMP%]   .faculty_management[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 266px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top;\n     object-position: top;\n}\n\n@media screen and (min-width: 1000px) and (max-width: 1500px) {\n  .app-course-detail[_ngcontent-%COMP%]   .faculty[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n    padding-left: 2em;\n  }\n  .app-course-detail[_ngcontent-%COMP%]   .faculty[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 214px !important;\n    width: 224px !important;\n  }\n}\n\n@media screen and (min-width: 0) and (max-width: 1000px) {\n  .app-course-detail[_ngcontent-%COMP%]   .faculty[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .app-course-detail[_ngcontent-%COMP%]   .faculty[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .app-course-detail[_ngcontent-%COMP%]   .faculty[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 214px !important;\n    width: 224px !important;\n  }\n  .app-course-detail[_ngcontent-%COMP%]   .faculty[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    padding-top: 37px;\n    padding-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zdGFyLXJvb20vbGFuZGluZy9jb3Vyc2UtZGV0YWlsL2NvdXJzZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7QUFEakI7O0FBSkE7RUFRTSxhQUFhO0VBQ2Isc0JBQXNCO0FBQTVCOztBQVRBO0VBYU0saUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7QUFBNUI7O0FBZkE7RUFxQk0sYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsdUJBQW9CO0tBQXBCLG9CQUFvQjtBQUYxQjs7QUFNRTtFQTNCRjtJQThCUSxpQkFBaUI7RUFKdkI7RUExQkY7SUFnQ1Usd0JBQXdCO0lBQ3hCLHVCQUF1QjtFQUgvQjtBQUNGOztBQVFFO0VBdkNGO0lBeUNNLHlCQUF5QjtFQUw3QjtFQXBDRjtJQTRDUSxlQUFlO0VBTHJCO0VBdkNGO0lBOENVLHdCQUF3QjtJQUN4Qix1QkFBdUI7RUFKL0I7RUEzQ0Y7SUFtRFUsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUx6QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zdGFyLXJvb20vbGFuZGluZy9jb3Vyc2UtZGV0YWlsL2NvdXJzZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWNvdXJzZS1kZXRhaWwge1xyXG5cclxuICAuZmFjdWx0eSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMzBweCA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x1bW4ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mYWN1bHR5X21hbmFnZW1lbnQge1xyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAyNjZweDtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogdG9wO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICAuZmFjdWx0eSB7XHJcbiAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMmVtO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB3aWR0aDogMjI0cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDApIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5mYWN1bHR5IHtcclxuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuXHJcbiAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgd2lkdGg6IDIyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5oZWFkaW5nIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAzN3B4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
    return CourseDetailComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-course-detail",
                templateUrl: "./course-detail.component.html",
                styleUrls: ["./course-detail.component.scss"],
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, { courseDetailComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class"]
        }] }); })();


/***/ }),

/***/ "./src/app/user/star-room/landing/landing-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/user/star-room/landing/landing-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-detail/course-detail.component */ "./src/app/user/star-room/landing/course-detail/course-detail.component.ts");
/* harmony import */ var _study_material_study_material_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./study-material/study-material.component */ "./src/app/user/star-room/landing/study-material/study-material.component.ts");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing.component */ "./src/app/user/star-room/landing/landing.component.ts");







var routes = [
    {
        path: '',
        component: _landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
        children: [
            {
                path: 'star-episode',
                loadChildren: function () { return Promise.all(/*! import() | epi-list-epi-list-module */[__webpack_require__.e("common"), __webpack_require__.e("epi-list-epi-list-module")]).then(__webpack_require__.bind(null, /*! ./epi-list/epi-list.module */ "./src/app/user/star-room/landing/epi-list/epi-list.module.ts")).then(function (m) { return m.EpiListModule; }); }
            },
            {
                path: 'star-home-work',
                loadChildren: function () { return Promise.all(/*! import() | home-work-home-work-module */[__webpack_require__.e("common"), __webpack_require__.e("home-work-home-work-module")]).then(__webpack_require__.bind(null, /*! ./home-work/home-work.module */ "./src/app/user/star-room/landing/home-work/home-work.module.ts")).then(function (m) { return m.HomeWorkModule; }); }
            },
            {
                path: 'course-detail/:slug',
                component: _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_2__["CourseDetailComponent"]
            },
            {
                path: 'study-material/:slug',
                component: _study_material_study_material_component__WEBPACK_IMPORTED_MODULE_3__["StudyMaterialComponent"]
            },
        ]
    }
];
var LandingRoutingModule = /** @class */ (function () {
    function LandingRoutingModule() {
    }
    LandingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingRoutingModule });
    LandingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingRoutingModule_Factory(t) { return new (t || LandingRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return LandingRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingRoutingModule, [{
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

/***/ "./src/app/user/star-room/landing/landing.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/star-room/landing/landing.component.ts ***!
  \*************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _star_room_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../star-room-data.service */ "./src/app/user/star-room/star-room-data.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _chess_about_dreamroom_video_popup_video_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chess/about-dreamroom/video-popup/video-popup.component */ "./src/app/chess/about-dreamroom/video-popup/video-popup.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");

















function LandingComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.product == null ? null : ctx_r0.product.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function LandingComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.product == null ? null : ctx_r1.product.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.product == null ? null : ctx_r1.product.short_description);
} }
function LandingComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r2.product == null ? null : ctx_r2.product.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.product == null ? null : ctx_r2.product.short_description);
} }
function LandingComponent_div_8_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tab_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tab_r6.text);
} }
function LandingComponent_div_8_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tab_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tab_r6.text1);
} }
var _c0 = function (a0) { return { is_tab_active: a0 }; };
function LandingComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_div_8_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); var tab_r6 = ctx.$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r12.gotoTab(tab_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LandingComponent_div_8_div_1_span_1_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LandingComponent_div_8_div_1_span_2_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tab_r6 = ctx.$implicit;
    var i_r7 = ctx.index;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, i_r7 === ctx_r5.activeState));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.level_id !== 255 && ctx_r5.level_id !== 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.level_id === 255 || ctx_r5.level_id === 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tab_r6.sideIcon);
} }
function LandingComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LandingComponent_div_8_div_1_Template, 5, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.tabMenu);
} }
function LandingComponent_div_9_mat_select_2_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_div_9_mat_select_2_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); var tab_r17 = ctx.$implicit; var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r19.gotoTab(tab_r17.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tab_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", tab_r17.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", tab_r17.text, " ");
} }
function LandingComponent_div_9_mat_select_2_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function LandingComponent_div_9_mat_select_2_Template_mat_select_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r21.activePage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LandingComponent_div_9_mat_select_2_mat_option_1_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r14.activePage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r14.tabMenu);
} }
function LandingComponent_div_9_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_div_9_mat_select_3_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); var tab_r24 = ctx.$implicit; var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r26.gotoTab(tab_r24.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tab_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", tab_r24.text1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", tab_r24.text, " ");
} }
function LandingComponent_div_9_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function LandingComponent_div_9_mat_select_3_Template_mat_select_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r28.activePage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LandingComponent_div_9_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r15.activePage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r15.tabMenu);
} }
function LandingComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LandingComponent_div_9_mat_select_2_Template, 2, 2, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, LandingComponent_div_9_mat_select_3_Template, 2, 2, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.level_id !== 255 && ctx_r4.level_id !== 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.level_id === 255 || ctx_r4.level_id === 256);
} }
var LandingComponent = /** @class */ (function () {
    function LandingComponent(router, dialog, _dreamroom, _routes, _authService) {
        this.router = router;
        this.dialog = dialog;
        this._dreamroom = _dreamroom;
        this._routes = _routes;
        this._authService = _authService;
        this.LandingComponentClass = "app-landing";
        this.url = "https://fast.wistia.net/embed/iframe/ynf6iaxhax?seo=false";
        this.about_heading = "About R.B. Ramesh";
        this.activeState = 0;
        this.activePage = "Episodes";
        this.courseFeatures = [
            {
                icon: "assets/chess/Dreamroom/Landing/features/40+_hours.svg",
                text: "22 hours of content",
            },
            {
                icon: "assets/chess/Dreamroom/Landing/features/80_chapters.svg",
                text: "18 topics",
            },
            {
                icon: "assets/chess/Dreamroom/Landing/features/ebook.svg",
                text: "Study Material",
            },
            {
                icon: "assets/chess/Dreamroom/Landing/features/puzzles.svg",
                text: "Videos",
            },
            {
                icon: "assets/chess/Dreamroom/Landing/features/certificate.svg",
                text: "Certificate",
            },
        ];
        this.tabMenu = [
            {
                id: 1,
                text: 'Episodes',
                text1: 'Daywise Session',
                sideIcon: '',
                url: "/user/star-room/star-landing/star-episode/" + localStorage.getItem('first_name') + "/" + localStorage.getItem('level_id'),
            },
            {
                id: 2,
                text: 'Home Work',
                text1: 'Daywise Session',
                sideIcon: '',
                url: "/user/star-room/star-landing/star-home-work/" + localStorage.getItem('first_name') + "/" + localStorage.getItem('level_id'),
            },
            {
                id: 3,
                text: "Course Description",
                text1: "Educarnival' 18",
                sideIcon: '',
                url: "/user/star-room/star-landing/study-material/" + localStorage.getItem('first_name'),
            },
            {
                id: 4,
                text: 'Faculty',
                text1: 'Faculty',
                sideIcon: '',
                url: "/user/star-room/star-landing/course-detail/" + localStorage.getItem('first_name'),
            },
        ];
        this.currentTab = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.tabMenu[this.activeState].text);
    }
    LandingComponent.prototype.onWindowResize = function () {
        if (this.mobileVersion()) {
            document.getElementById('mat-div').style.minHeight = 'fit-content';
        }
    };
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routes.params.subscribe(function (params) {
            // console.log(params, "params");
        });
        this.level_id = Number(localStorage.getItem("level_id"));
        var data = {
            productId: this.level_id,
        };
        this._authService.getStarRoomDescription(data).subscribe(function (res) {
            // console.log(res);
            _this.product = res.data.productDetails;
        });
        this.router.navigateByUrl("/user/star-room/star-landing/star-episode/" + localStorage.getItem("first_name") + "/" + this._dreamroom.getLevel());
    };
    LandingComponent.prototype.mobileVersion = function () {
        return window.innerWidth < 950;
    };
    LandingComponent.prototype.gotoTab = function (id) {
        var item = this.tabMenu.filter(function (item1) { return item1.id === id; });
        this.activeState = item[0].id - 1;
        this.activePage = this.tabMenu[id - 1].text;
        // console.log(this.activePage,"active")
        this.router.navigateByUrl(item[0]["url"]);
    };
    LandingComponent.prototype.activeRoutes = function (e) {
        // console.log("i am in dr landing routes", e.router.url);
    };
    LandingComponent.prototype.openVideo = function () {
        var config = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        config.height = window.screen.width < 630 ? "50%" : "500px";
        config.width = "700px";
        var dialogRef = this.dialog.open(_chess_about_dreamroom_video_popup_video_popup_component__WEBPACK_IMPORTED_MODULE_5__["VideoPopupComponent"], config);
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log("The dialog was closed");
        });
    };
    LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_star_room_data_service__WEBPACK_IMPORTED_MODULE_0__["StarroomDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
    LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], hostVars: 2, hostBindings: function LandingComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function LandingComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.LandingComponentClass);
        } }, decls: 12, vars: 5, consts: [[1, "dreamroom_container"], [1, "card_container"], [1, "about_ramesh", "add_padding"], [3, "src", 4, "ngIf"], [1, "about_text"], [4, "ngIf"], [1, "course_container"], ["class", "tab_menu", 4, "ngIf"], [1, "tab_content"], [3, "src"], [1, "tab_menu"], ["class", "tab", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "tab", 3, "ngClass", "click"], ["placeholder", "Select a page to visit", 3, "value", "valueChange", 4, "ngIf"], ["placeholder", "Select a page to visit", 3, "value", "valueChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, LandingComponent_img_3_Template, 1, 1, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, LandingComponent_div_5_Template, 5, 2, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, LandingComponent_div_6_Template, 5, 2, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, LandingComponent_div_8_Template, 2, 1, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, LandingComponent_div_9_Template, 4, 2, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product == null ? null : ctx.product.image_url);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mobileVersion());
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.mobileVersion());
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.mobileVersion());
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mobileVersion());
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], encapsulation: 2 });
    return LandingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: "app-landing",
                templateUrl: "./landing.component.html",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _star_room_data_service__WEBPACK_IMPORTED_MODULE_0__["StarroomDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, { LandingComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
            args: ["class"]
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
            args: ['window:resize', []]
        }] }); })();


/***/ }),

/***/ "./src/app/user/star-room/landing/landing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/user/star-room/landing/landing.module.ts ***!
  \**********************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/user/star-room/landing/landing-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-detail/course-detail.component */ "./src/app/user/star-room/landing/course-detail/course-detail.component.ts");
/* harmony import */ var _study_material_study_material_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./study-material/study-material.component */ "./src/app/user/star-room/landing/study-material/study-material.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app-material-module */ "./src/app/app-material-module.ts");
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app-bootstrap.module */ "./src/app/app-bootstrap.module.ts");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing.component */ "./src/app/user/star-room/landing/landing.component.ts");









var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LandingModule });
    LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LandingModule_Factory(t) { return new (t || LandingModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"],
                _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__["LandingRoutingModule"]
            ]] });
    return LandingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
        _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_3__["CourseDetailComponent"],
        _study_material_study_material_component__WEBPACK_IMPORTED_MODULE_4__["StudyMaterialComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
        _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"],
        _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__["LandingRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LandingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                    _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"],
                    _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__["LandingRoutingModule"]
                ],
                declarations: [
                    _landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
                    _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_3__["CourseDetailComponent"],
                    _study_material_study_material_component__WEBPACK_IMPORTED_MODULE_4__["StudyMaterialComponent"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/star-room/landing/study-material/study-material.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/user/star-room/landing/study-material/study-material.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StudyMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyMaterialComponent", function() { return StudyMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/expansion.js");
// import { FlipBookUrlComponent } from './../../dr-functionality/flip-book-url/flip-book-url.component';








function StudyMaterialComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var panel_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", panel_r2 == null ? null : panel_r2.Question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", panel_r2 == null ? null : panel_r2.Answer, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function StudyMaterialComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudyMaterialComponent_div_2_div_1_Template, 7, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.extraProductInfo);
} }
var StudyMaterialComponent = /** @class */ (function () {
    // studyFlipBook = [
    //   {
    //     name: 'Chess and Longevity',
    //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/cvuu/index.html'
    //   },
    //   {
    //     name: 'Chess in Antarctica',
    //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/btdh/index.html'
    //   },
    //   {
    //     name: 'Chess Boxing',
    //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/wkho/index.html'
    //   },
    //   // {
    //   //   name: 'Chess in Different Languages',
    //   //   url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/gqjf/index.html'
    //   // },
    //   {
    //     name: 'Facts about RBR',
    //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/syno/index.html'
    //   },
    //   {
    //     name: 'Judit Polgar',
    //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/gqjf/index.html'
    //   },
    //   {
    //     name: 'Some Famous Rated Players',
    //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/ldvm/index.html'
    //   },
    //   {
    //     name: 'Pragg - The Wizard',
    //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/drao/index.html'
    //   },
    //   {
    //     name: 'Magnus Carlsen',
    //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/unfo/index.html'
    //   }
    // ];
    function StudyMaterialComponent(dialog, _authService) {
        this.dialog = dialog;
        this._authService = _authService;
        this.studyMaterialComponentClass = "app-study-material";
    }
    StudyMaterialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.level_id = Number(localStorage.getItem("level_id"));
        var data = {
            productId: this.level_id,
        };
        this._authService.getStarRoomDescription(data).subscribe(function (res) {
            // console.log(res);
            _this.product = res.data.productDetails.product_cource_desc;
            _this.extraProductInfo = res.data.productDetails.extra_product_info;
        });
    };
    StudyMaterialComponent.ɵfac = function StudyMaterialComponent_Factory(t) { return new (t || StudyMaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
    StudyMaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudyMaterialComponent, selectors: [["app-study-material"]], hostVars: 2, hostBindings: function StudyMaterialComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.studyMaterialComponentClass);
        } }, decls: 3, vars: 2, consts: [[1, "main-container", 2, "font-size", "1em"], [2, "font-size", "1em", "margin-bottom", "3%", 3, "innerHTML"], [4, "ngIf"], ["class", "expension", 4, "ngFor", "ngForOf"], [1, "expension"], [3, "innerHTML"]], template: function StudyMaterialComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudyMaterialComponent_div_2_Template, 2, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.product, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.extraProductInfo);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"]], encapsulation: 2 });
    return StudyMaterialComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudyMaterialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-study-material",
                templateUrl: "./study-material.component.html",
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, { studyMaterialComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=landing-landing-module.js.map