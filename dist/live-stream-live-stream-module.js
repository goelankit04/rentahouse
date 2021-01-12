(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["live-stream-live-stream-module"],{

/***/ "./src/app/user/live-stream/live-stream.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/live-stream/live-stream.component.ts ***!
  \***********************************************************/
/*! exports provided: LiveStreamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveStreamComponent", function() { return LiveStreamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app-common/pre-loader/pre-loader.component */ "./src/app/app-common/pre-loader/pre-loader.component.ts");






function LiveStreamComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} }
var _c0 = function (a0) { return { "player_styles": a0 }; };
function LiveStreamComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "dplayer_flash_", ctx_r1.videoId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r1.chat));
} }
function LiveStreamComponent_app_pre_loader_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pre-loader");
} }
var LiveStreamComponent = /** @class */ (function () {
    function LiveStreamComponent(_authService) {
        this._authService = _authService;
        this.LiveStreamComponentClass = 'app-live-stream';
        this.videoId = '';
        this.heading = '';
        this.categoryId = 1;
        this.productToSeach = 696;
    }
    LiveStreamComponent.prototype.ngOnInit = function () {
    };
    LiveStreamComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._authService.getUserProduct({
            categoryId: this.categoryId,
            productType: 6,
            limit: 0,
            offset: 0
        }).subscribe(function (res) {
            var currentProduct = res.data.products.filter(function (product) { return (product.product_id === _this.productToSeach); })[0];
            _this.heading = currentProduct ? currentProduct.name : null;
            _this.videoId = currentProduct ? currentProduct.video_url ? currentProduct.video_url[0].video_url : null : null;
            _this.chat = currentProduct ? currentProduct.video_url ? currentProduct.video_url[0].is_chat_enabled : false : false;
            _this.playerSetup();
        }, function (error) {
            _this.videoId = null;
            // console.log(error);
        });
    };
    LiveStreamComponent.prototype.playerSetup = function () {
        var _this = this;
        if (this.videoId) {
            setTimeout(function () {
                if (_this.chat) {
                    var options2 = new VappController({
                        use_div: "dplayer_flash_" + _this.videoId,
                        player_width: '720',
                        player_height: '800'
                    }, {
                        clip_id: '2207789',
                        player_id: '11ADAEB3I5HAF4G',
                        playlist_id: '618',
                        transparent: '1',
                        uk: '5047a681bc240f9a3de7a4a6aa0ad863',
                        live_id: "" + _this.videoId,
                        sel_playlist: '',
                        sel_multiplaylist: '',
                        use_html5: 'true',
                        layout: 'default',
                        theme: 'light',
                        is_responsive: '1',
                        is_inversed: '',
                        is_vertical: '',
                        one_thumb_per_row: '',
                        thumbs_size: 'medium',
                        disable_hash: '',
                        widget_height_behavior: '0',
                        hide_playlist: '1',
                        hide_live_chat: '',
                        hide_description: '1',
                        playlist_position: '',
                        chat_position: '',
                        description_position: ''
                    });
                }
                else {
                    var options = {
                        clip_id: "" + _this.videoId,
                        transparent: 'true',
                        pause: '1',
                        repeat: '',
                        bg_color: '#ffffff',
                        fs_mode: '2',
                        no_controls: '',
                        start_img: '0',
                        start_volume: '100',
                        close_button: '',
                        brand_new_window: '1',
                        auto_hide: '1',
                        stretch_video: '1',
                        player_align: 'NONE',
                        offset_x: '0',
                        offset_y: '0',
                        player_color_ratio: 0.6,
                        skinAlpha: '50',
                        colorBase: '#000000',
                        colorIcon: '#ffffff',
                        colorHighlight: '#5cbbf5',
                        direct: 'false',
                        is_responsive: 'true',
                        viewers_limit: 0,
                        cc_position: 'bottom',
                        cc_positionOffset: 70,
                        cc_multiplier: 0.03,
                        cc_textColor: '#ffffff',
                        cc_textOutlineColor: '#ffffff',
                        cc_bkgColor: '#000000',
                        cc_bkgAlpha: 0.1,
                        aspect_ratio: '16:9'
                    };
                    var svp_player = new SVPDynamicPlayer("dplayer_flash_" + _this.videoId, '', '100%', '100%', {
                        use_div: "dplayer_flash_" + _this.videoId,
                        skin: '3'
                    }, options);
                    svp_player.execute();
                }
            }, 1000);
        }
    };
    LiveStreamComponent.ɵfac = function LiveStreamComponent_Factory(t) { return new (t || LiveStreamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
    LiveStreamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiveStreamComponent, selectors: [["app-live-stream"]], hostVars: 2, hostBindings: function LiveStreamComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.LiveStreamComponentClass);
        } }, decls: 7, vars: 4, consts: [["draggable", "false", "src", "https://s3.ap-south-1.amazonaws.com/nurtr.com/um_vdr_sry.jpg", "class", "error_img", 4, "ngIf"], ["style", "width:720px;height:800px;position:relative;", 3, "id", "ngClass", 4, "ngIf"], [4, "ngIf"], ["draggable", "false", "src", "https://s3.ap-south-1.amazonaws.com/nurtr.com/um_vdr_sry.jpg", 1, "error_img"], [2, "width", "720px", "height", "800px", "position", "relative", 3, "id", "ngClass"]], template: function LiveStreamComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LIVE : ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LiveStreamComponent_img_4_Template, 1, 0, "img", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LiveStreamComponent_div_5_Template, 1, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LiveStreamComponent_app_pre_loader_6_Template, 1, 0, "app-pre-loader", 2);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.heading, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoId === null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoId === "");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_3__["PreLoaderComponent"]], encapsulation: 2 });
    return LiveStreamComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveStreamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-live-stream',
                templateUrl: './live-stream.component.html'
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, { LiveStreamComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/user/live-stream/live-stream.module.ts":
/*!********************************************************!*\
  !*** ./src/app/user/live-stream/live-stream.module.ts ***!
  \********************************************************/
/*! exports provided: LiveStreamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveStreamModule", function() { return LiveStreamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _live_stream_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live-stream.component */ "./src/app/user/live-stream/live-stream.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");







var routes = [
    {
        path: '',
        component: _live_stream_component__WEBPACK_IMPORTED_MODULE_2__["LiveStreamComponent"]
    }
];
var LiveStreamModule = /** @class */ (function () {
    function LiveStreamModule() {
    }
    LiveStreamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LiveStreamModule });
    LiveStreamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LiveStreamModule_Factory(t) { return new (t || LiveStreamModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]] });
    return LiveStreamModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LiveStreamModule, { declarations: [_live_stream_component__WEBPACK_IMPORTED_MODULE_2__["LiveStreamComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveStreamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _live_stream_component__WEBPACK_IMPORTED_MODULE_2__["LiveStreamComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=live-stream-live-stream-module.js.map