(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-notification-user-notification-module"],{

/***/ "./src/app/user/user-notification/notification.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/user/user-notification/notification.service.ts ***!
  \****************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/token-interceptor.service */ "./src/app/auth/token-interceptor.service.ts");







var NotificationService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NotificationService, _super);
    function NotificationService(_http) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        NotificationService.BASE_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auth_target;
        return _this;
    }
    NotificationService.BASE_API_URL = '';
    NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac });
    return NotificationService;
}(_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptorService"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/user-notification/notification/notification.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/user/user-notification/notification/notification.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function NotificationComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationComponent_p_4_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updateNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mark all as read");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0) { return { "unread": a0 }; };
function NotificationComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " schedule ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var notification_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, (notification_r7 == null ? null : notification_r7.is_seen) == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", notification_r7 == null ? null : notification_r7.img_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r7 == null ? null : notification_r7.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r7 == null ? null : notification_r7.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 6, notification_r7 == null ? null : notification_r7.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 8, notification_r7 == null ? null : notification_r7.created_at, "h:mm aa"));
} }
function NotificationComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationComponent_div_5_div_1_Template, 20, 13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.userNotification);
} }
function NotificationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have no notifications!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c1 = function (a0) { return { "active_page": a0 }; };
function NotificationComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationComponent_div_7_div_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var page_r9 = ctx.$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.gotoPage(page_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var page_r9 = ctx.$implicit;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", page_r9.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, page_r9 == ctx_r8.currentPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r9);
} }
function NotificationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationComponent_div_7_div_1_Template, 3, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.pageList);
} }
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(_activatedRoute, _auth, _breadCrumb, _router) {
        this._activatedRoute = _activatedRoute;
        this._auth = _auth;
        this._breadCrumb = _breadCrumb;
        this._router = _router;
        this.userCountArray = [];
        this.userCounting = [];
        this.pageList = [];
        this.usersCount = 10;
        this.currentPage = 1;
        this.offset = 0;
        this.notificationComponentClass = 'app-notification';
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this._breadCrumb.updatedNotification(0);
        if (this.isUserLoggedIn) {
            this.getNotification();
        }
    };
    NotificationComponent.prototype.getNotification = function () {
        var _this = this;
        var datas = {
            limit: this.usersCount,
            offset: (this.usersCount * (this.currentPage - 1))
        };
        this._auth.getNotification(datas).subscribe(function (res) {
            _this.userNotification = res.data.notification;
            _this.userCount = res.data.count;
            _this.unseenCount = res.data.unseen;
            _this.getPagination();
            for (var i = 0; i < _this.userNotification.length; i++) {
                if (_this.userNotification[i].is_seen == false) {
                    _this.userCounting = _this.userNotification[i]._id;
                    _this.userCountArray.push(_this.userCounting);
                }
            }
        });
    };
    NotificationComponent.prototype.isUserLoggedIn = function () {
        return this._auth.isUserLoggedIn();
    };
    NotificationComponent.prototype.gotoPage = function (pageNumber) {
        this.currentPage = pageNumber;
        this.getNotification();
    };
    NotificationComponent.prototype.updateNotification = function () {
        var _this = this;
        var data = {
            // notificationId: this.userCountArray,
            isMarkAllRead: true
        };
        this._auth.updateNotification(data).subscribe(function (res) {
            _this.unseenCount = res.data.unseen;
        });
        this.getNotification();
    };
    NotificationComponent.prototype.getPagination = function () {
        this.pageList = [];
        this.pageNumber = Math.ceil(this.userCount / this.usersCount);
        for (var i = 1; i <= this.pageNumber; i++) {
            this.pageList.push(i);
        }
    };
    NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadCrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], hostVars: 2, hostBindings: function NotificationComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.notificationComponentClass);
        } }, decls: 8, vars: 4, consts: [[1, "app-notification"], [1, "notification_row"], [1, "recent"], ["class", "markAll", 3, "click", 4, "ngIf"], ["class", "notification_section", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "markAll", 3, "click"], [1, "notification_section"], ["class", "notification_value row", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "notification_value", "row", 3, "ngClass"], [1, "img"], [1, "image", 3, "src"], [1, "notification"], [1, "time"], [1, "material-icons", 2, "font-size", "12px", "line-height", "1", "font-weight", "bold", "padding-right", "4px"], [1, "date"], [2, "font-size", "12px", "padding-left", "20px", "font-weight", "600", "letter-spacing", "1px", "color", "#595959"], [2, "font-size", "20px", "padding", "15px", "text-align", "center"], [1, "pagination"], [4, "ngFor", "ngForOf"], [3, "id", "ngClass", "click"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recent Notifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotificationComponent_p_4_Template, 2, 0, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotificationComponent_div_5_Template, 2, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotificationComponent_div_6_Template, 3, 0, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotificationComponent_div_7_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unseenCount != 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userNotification == null ? null : ctx.userNotification.length) != 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userNotification == null ? null : ctx.userNotification.length) == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userNotification == null ? null : ctx.userNotification.length) != 0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".app-notification[_ngcontent-%COMP%] {\n  margin-bottom: -3px;\n}\n\n.app-notification[_ngcontent-%COMP%]   .notification_row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  height: 73px;\n  border-bottom: 1px solid #d8d7d7;\n}\n\n.app-notification[_ngcontent-%COMP%]   .notification_row[_ngcontent-%COMP%]   .recent[_ngcontent-%COMP%] {\n  width: 84%;\n  font-size: 1.75em;\n  font-weight: 400;\n  color: grey;\n  margin-left: 0em;\n  float: left;\n  text-transform: none;\n  cursor: default;\n  padding: 14px 16px 27px 16px;\n}\n\n.app-notification[_ngcontent-%COMP%]   .notification_row[_ngcontent-%COMP%]   .markAll[_ngcontent-%COMP%] {\n  padding: 20px;\n  float: left;\n  cursor: pointer;\n  color: #415e0d;\n}\n\n.app-notification[_ngcontent-%COMP%]   .notification_row[_ngcontent-%COMP%]   .markAll[_ngcontent-%COMP%]:hover {\n  color: #a0ce4f;\n  text-decoration: underline;\n}\n\n.app-notification[_ngcontent-%COMP%]   .notification_section[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n\n.app-notification[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-weight: bold;\n  padding: 1em;\n  margin: auto;\n  align-items: center;\n}\n\n.app-notification[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.app-notification[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 0 2px;\n  display: flex;\n}\n\n.app-notification[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.app-notification[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .active_page[_ngcontent-%COMP%] {\n  background-color: #a0ce4e;\n  color: white;\n  border-radius: 6px;\n}\n\n.app-notification[_ngcontent-%COMP%]   .unread[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n}\n\n.app-notification[_ngcontent-%COMP%]   .notification_value[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 0px;\n  padding: 13px 0px 13px 0px;\n  margin: auto;\n  border-bottom: 1px solid #d8d7d7;\n}\n\n.app-notification[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 4%;\n  float: left;\n  padding-left: 12px;\n}\n\n.app-notification[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.app-notification[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  width: 81%;\n  float: left;\n}\n\n.app-notification[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.3;\n  margin-bottom: 0px;\n}\n\n.app-notification[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  font-size: 16px;\n}\n\n.app-notification[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #a0ce4e;\n  font-weight: bold;\n}\n\n.app-notification[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  width: 10%;\n  float: left;\n}\n\n.app-notification[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  margin-bottom: 0px;\n  line-height: 1.2;\n  float: right;\n}\n\n@media screen and (min-width: 1050px) and (max-width: 1600px) {\n  .app-notification[_ngcontent-%COMP%]   .notification_row[_ngcontent-%COMP%]   .recent[_ngcontent-%COMP%] {\n    width: 82%;\n    float: left;\n    padding: 20px;\n  }\n  .app-notification[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n    width: 80%;\n    float: left;\n    padding-left: 1%;\n  }\n  .app-notification[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n    width: auto !important;\n  }\n}\n\n@media screen and (min-width: 1500px) and (max-width: 2500px) {\n  .markAll[_ngcontent-%COMP%] {\n    padding: 20px !important;\n    float: right !important;\n    cursor: pointer !important;\n    color: #415e0d !important;\n    margin-right: 44px !important;\n  }\n}\n\n@media screen and (min-width: 800px) and (max-width: 1050px) {\n  .app-notification[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n    width: 15% !important;\n  }\n  .app-notification[_ngcontent-%COMP%]   .notification_row[_ngcontent-%COMP%]   .recent[_ngcontent-%COMP%] {\n    width: 76%;\n    float: left;\n    padding: 20px;\n  }\n  .app-notification[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n    width: 77%;\n    float: left;\n    padding-left: 1%;\n  }\n  .app-notification[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n    width: auto !important;\n  }\n}\n\n@media screen and (min-width: 320px) and (max-width: 800px) {\n  .app-notification[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: bold;\n    width: 100%;\n  }\n  .app-notification[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    margin-bottom: 0px;\n    line-height: 1.5;\n    text-align: right;\n    padding-right: 15px;\n  }\n  .app-notification[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n    padding-left: 4px;\n    font-size: 10px !important;\n  }\n  .app-notification[_ngcontent-%COMP%]   .notification_row[_ngcontent-%COMP%]   .markAll[_ngcontent-%COMP%] {\n    padding: 20px;\n    float: right;\n    cursor: pointer;\n    font-size: 14px;\n  }\n  .app-notification[_ngcontent-%COMP%]   .notification_row[_ngcontent-%COMP%]   .recent[_ngcontent-%COMP%] {\n    width: 50%;\n    float: left;\n    padding: 20px 8px;\n    font-size: 14px;\n  }\n  .app-notification[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n    width: auto;\n    float: left;\n    padding-left: 8px;\n  }\n  .app-notification[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 46px !important;\n    margin-top: 0px !important;\n    height: 40px !important;\n  }\n  .app-notification[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n    padding-left: 2% !important;\n  }\n  .app-notification[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 1.3;\n    margin-bottom: 0px;\n    white-space: initial;\n  }\n  .app-notification[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #a0ce4e;\n    font-weight: bold;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLW5vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUZBO0VBR0ksV0FBVTtFQUNWLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0NBQStCO0FBR25DOztBQVRBO0VBUU0sVUFBUztFQUNULGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw0QkFBNEI7QUFLbEM7O0FBckJBO0VBbUJNLGFBQVk7RUFDWixXQUFVO0VBQ1YsZUFBYztFQUNkLGNBQWE7QUFNbkI7O0FBNUJBO0VBd0JRLGNBQWE7RUFDYiwwQkFBeUI7QUFRakM7O0FBakNBO0VBK0JJLGdCQUFlO0FBTW5COztBQXJDQTtFQW1DSSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFNdkI7O0FBN0NBO0VBMENNLGVBQWU7QUFPckI7O0FBakRBO0VBOENNLGNBQWM7RUFDZCxhQUFhO0FBT25COztBQXREQTtFQWtEUSxpQkFBaUI7RUFDakIsZUFBZTtBQVF2Qjs7QUEzREE7RUF3RE0seUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFPeEI7O0FBakVBO0VBK0RJLG1CQUFtQjtBQU12Qjs7QUFyRUE7RUFrRU0sV0FBVztFQUNYLGdCQUFnQjtFQUVoQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGdDQUFnQztBQU10Qzs7QUE3RUE7RUEwRVEsU0FBUTtFQUNSLFdBQVU7RUFDVixrQkFBaUI7QUFPekI7O0FBbkZBO0VBOEVVLFdBQVc7RUFDWCxZQUFZO0FBU3RCOztBQXhGQTtFQXFGUSxVQUFTO0VBQ1QsV0FBVztBQU9uQjs7QUE3RkE7RUF3RlUsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFTNUI7O0FBbkdBO0VBNEZZLGlCQUFpQjtFQUNqQixlQUFlO0FBVzNCOztBQXhHQTtFQWdHWSxlQUFjO0VBQ2QsY0FBYTtFQUNiLGlCQUFpQjtBQVk3Qjs7QUE5R0E7RUF1R1EsVUFBUztFQUNULFdBQVU7QUFXbEI7O0FBbkhBO0VBMEdVLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFhdEI7O0FBUEE7RUFDRTtJQUdNLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtFQVFuQjtFQWJBO0lBVUksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7RUFNcEI7RUFsQkE7SUFpQkksc0JBQXFCO0VBSXpCO0FBQ0Y7O0FBQ0E7RUFDQTtJQUNFLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7RUFFN0I7QUFDRjs7QUFFQTtFQUNFO0lBRUkscUJBQW9CO0VBQXhCO0VBRkE7SUFNTSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7RUFEbkI7RUFQQTtJQWFJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0VBSHBCO0VBWkE7SUFtQkksc0JBQXFCO0VBSnpCO0FBQ0Y7O0FBU0E7RUFDRTtJQUVJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVTtFQVBkO0VBR0E7SUFNTSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0VBTnpCO0VBSkE7SUFhSSxpQkFBaUI7SUFDakIsMEJBQTBCO0VBTjlCO0VBUkE7SUFzQk0sYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtFQVhyQjtFQWRBO0lBNEJNLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7RUFYckI7RUFwQkE7SUFxQ00sV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7RUFkdkI7RUF6QkE7SUF5Q1Esc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQix1QkFBdUI7RUFiL0I7RUE5QkE7SUFpREksMkJBQTJCO0VBaEIvQjtFQWpDQTtJQW1ETSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFmMUI7RUF2Q0E7SUF3RFEsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7RUFkekI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtbm90aWZpY2F0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogLTNweDtcbiAgLm5vdGlmaWNhdGlvbl9yb3d7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiA3M3B4O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkOGQ3ZDc7XG4gICAgLnJlY2VudHtcbiAgICAgIHdpZHRoOjg0JTtcbiAgICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcbiAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIHBhZGRpbmc6IDE0cHggMTZweCAyN3B4IDE2cHg7XG4gICAgfVxuICAgIC5tYXJrQWxse1xuICAgICAgcGFkZGluZzoyMHB4O1xuICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgY29sb3I6IzQxNWUwZDtcbiAgICAgICY6aG92ZXJ7XG4gICAgICAgIGNvbG9yOiNhMGNlNGY7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5vdGlmaWNhdGlvbl9zZWN0aW9ue1xuICAgIG1hcmdpbi10b3A6LTVweDtcbiAgfVxuXG4gIC5wYWdpbmF0aW9uIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgbWF0LWljb24ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGRpdiB7XG4gICAgICBwYWRkaW5nOiAwIDJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hY3RpdmVfcGFnZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBjZTRlO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbiAgfVxuXG4gIC51bnJlYWR7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgfVxuICAgIC5ub3RpZmljYXRpb25fdmFsdWUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgLy8gYmFja2dyb3VuZDogI2ZhZmJmYjtcbiAgICAgIHBhZGRpbmc6IDEzcHggMHB4IDEzcHggMHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ3ZDc7XG4gIH1cbiAgICAgIC5pbWd7XG4gICAgICAgIHdpZHRoOjQlO1xuICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MTJweDtcbiAgICAgICAgLmltYWdle1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAvLyBtYXJnaW4tdG9wOiA3cHg7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm5vdGlmaWNhdGlvbntcbiAgICAgICAgd2lkdGg6ODElO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgLmRhdGV7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICAgICAgY29sb3I6I2EwY2U0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnRpbWV7XG4gICAgICAgIHdpZHRoOjEwJTtcbiAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgcHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDoxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA1MHB4KSBhbmQgKG1heC13aWR0aDoxNjAwcHgpe1xuICAuYXBwLW5vdGlmaWNhdGlvbntcbiAgICAubm90aWZpY2F0aW9uX3Jvd3tcbiAgICAgIC5yZWNlbnR7XG4gICAgICAgIHdpZHRoOiA4MiU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgfVxuICAgIH0gXG5cbiAgICAubm90aWZpY2F0aW9ue1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgICB9XG5cbiAgICBcbiAgICAuaW1ne1xuICAgICAgd2lkdGg6YXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiAgfSBcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE1MDBweCkgYW5kIChtYXgtd2lkdGg6MjUwMHB4KXtcbi5tYXJrQWxse1xuICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0MTVlMGQgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG59XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MDBweCkgYW5kIChtYXgtd2lkdGg6MTA1MHB4KXtcbiAgLmFwcC1ub3RpZmljYXRpb257XG4gICAgLnRpbWV7XG4gICAgICB3aWR0aDoxNSUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm5vdGlmaWNhdGlvbl9yb3d7XG4gICAgICAucmVjZW50e1xuICAgICAgICB3aWR0aDogNzYlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIH1cbiAgICB9IFxuXG4gICAgLm5vdGlmaWNhdGlvbntcbiAgICAgIHdpZHRoOiA3NyU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHBhZGRpbmctbGVmdDogMSU7XG4gICAgfVxuXG4gICAgLmltZ3tcbiAgICAgIHdpZHRoOmF1dG8gIWltcG9ydGFudDtcbiAgICB9XG4gIH0gXG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDozMjBweCkgYW5kIChtYXgtd2lkdGg6ODAwcHgpe1xuICAuYXBwLW5vdGlmaWNhdGlvbntcbiAgICAudGltZXtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIHB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuXG4gICAgLmRhdGV7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFxuICAgIC5ub3RpZmljYXRpb25fcm93IHtcbiAgICAgIC5tYXJrQWxse1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgICAgLnJlY2VudHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggOHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgICAuaW1ne1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDQ2cHggIWltcG9ydGFudDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLm5vdGlmaWNhdGlvbntcbiAgICAgIHBhZGRpbmctbGVmdDogMiUgIWltcG9ydGFudDtcbiAgICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6ICNhMGNlNGU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IFxuXG4gIH1cbn0iXX0= */"] });
    return NotificationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification',
                templateUrl: './notification.component.html',
                styleUrls: ['./notification.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadCrumbService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { notificationComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/user/user-notification/user-notification-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user/user-notification/user-notification-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: UserNotificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNotificationRoutingModule", function() { return UserNotificationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/user/user-notification/notification/notification.component.ts");





var routes = [
    {
        path: ':slug',
        component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]
    }
];
var UserNotificationRoutingModule = /** @class */ (function () {
    function UserNotificationRoutingModule() {
    }
    UserNotificationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserNotificationRoutingModule });
    UserNotificationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserNotificationRoutingModule_Factory(t) { return new (t || UserNotificationRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return UserNotificationRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserNotificationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserNotificationRoutingModule, [{
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

/***/ "./src/app/user/user-notification/user-notification.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/user/user-notification/user-notification.module.ts ***!
  \********************************************************************/
/*! exports provided: UserNotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNotificationModule", function() { return UserNotificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/user/user-notification/notification/notification.component.ts");
/* harmony import */ var _user_notification_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-notification-routing.module */ "./src/app/user/user-notification/user-notification-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/token-interceptor.service */ "./src/app/auth/token-interceptor.service.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.service */ "./src/app/user/user-notification/notification.service.ts");








var UserNotificationModule = /** @class */ (function () {
    function UserNotificationModule() {
    }
    UserNotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserNotificationModule });
    UserNotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserNotificationModule_Factory(t) { return new (t || UserNotificationModule)(); }, providers: [
            _notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptorService"],
                multi: true
            }
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserNotificationRoutingModule"]
            ]] });
    return UserNotificationModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserNotificationModule, { declarations: [_notification_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _user_notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserNotificationRoutingModule"]], exports: [_notification_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserNotificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _user_notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserNotificationRoutingModule"]
                ],
                declarations: [
                    _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]
                ],
                providers: [
                    _notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptorService"],
                        multi: true
                    }
                ],
                exports: [
                    _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=user-notification-user-notification-module.js.map