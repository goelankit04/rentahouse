(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/user/dreamroom/dreamroom-data.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/user/dreamroom/dreamroom-data.service.ts ***!
  \**********************************************************/
/*! exports provided: DreamroomDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DreamroomDataService", function() { return DreamroomDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var DreamroomDataService = /** @class */ (function () {
    function DreamroomDataService() {
        this.episodesPerPage = 10;
        this.episodeList = [
            {
                id: 1,
                name: 'The Introduction',
                additionalText: 'Introduction',
                length: '8',
                views: '18,200',
                likes: '96',
                status: true
            },
            {
                id: 2,
                name: 'Setting up a chess board',
                additionalText: 'Setting up a chess board - Getting ready',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 3,
                name: 'How to move the pieces',
                additionalText: 'How to move the pieces - Marching towards the opponent',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 4,
                name: 'About Pawns',
                additionalText: 'About Pawns - the little ones',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 5,
                name: 'Castling',
                additionalText: 'Castling - Is this about a castle?',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 6,
                name: 'Writing a scoresheet and operating chess clock',
                additionalText: 'Writing a scoresheet and operating chess clock - creating a proof',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 7,
                name: '3 stages of a game',
                additionalText: '3 stages of a game',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 8,
                name: 'Attack',
                additionalText: 'Attack - the real fight',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 9,
                name: 'Check',
                additionalText: 'Check - Questioning the king directly',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 10,
                name: 'Respond to attack by defence',
                additionalText: 'Respond to attack by defence - counter fight',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 11,
                name: 'Capturing',
                additionalText: 'Capturing - Killing',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 12,
                name: 'Checkmate and stalemate',
                additionalText: 'Checkmate and stalemate',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 13,
                name: 'Checkmate - by Queen, 2 rooks, 1 rook',
                additionalText: 'Checkmate - by Queen, 2 rooks, 1 rook - death of the king and the kingdom or The final frontier',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 14,
                name: 'Checkmate - by coordination of different pieces',
                additionalText: 'Checkmate - by coordination of different pieces',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 15,
                name: 'Draw - 5 situations',
                additionalText: 'Draw - The white flag. Let us stop fighting',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 16,
                name: 'Forcing moves',
                additionalText: 'Forcing moves - Do what I want',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 17,
                name: 'Gaining material',
                additionalText: 'Gaining material',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 18,
                name: 'Tactical Theme - Double attack',
                additionalText: 'Tactical Theme - Double attack',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 19,
                name: 'Tactical Theme - Discovered attack and Discovered check',
                additionalText: 'Tactical Theme - Discovered attack and Discovered check - The surprise element',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 20,
                name: 'Tactical Theme - Pin',
                additionalText: 'Tactical Theme - Pin - Is this a safety pin?',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 21,
                name: 'Tactical Theme - Skewer',
                additionalText: 'Tactical Theme - Skewer - May this be for cooking?',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 22,
                name: 'Tactical Theme - Decoy & Deflection',
                additionalText: 'Tactical Theme - Decoy & Deflection',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 23,
                name: 'Tactical Theme - Clearance',
                additionalText: 'Tactical Theme - Clearance - Any traffic to be cleared?',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 24,
                name: 'Tactical Theme - Fork',
                additionalText: 'Tactical Theme - Fork - sure not for noodles.',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 25,
                name: 'Tactical Theme - Piece Overloading',
                additionalText: 'Tactical Theme - Piece Overloading - Is there a donkey that is overloaded in chess other rook and knight?',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 26,
                name: 'Tactical Theme - Backrank Mate',
                additionalText: 'Tactical Theme - Backrank Mate - 1st and last rank I know. Backrank?',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 27,
                name: 'Thematic sacrifice - Bh7',
                additionalText: 'Thematic sacrifice - Bh7 sacrifice for better.',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 28,
                name: 'Thematic sacrifice - Nf7',
                additionalText: 'Thematic sacrifice - Nf7',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 29,
                name: 'Thematic sacrifice - Ne6',
                additionalText: 'Thematic sacrifice - Ne6',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 30,
                name: 'Thematic sacrifice - Bh6',
                additionalText: 'Thematic sacrifice - Bh6',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 31,
                name: 'Attack on uncastled king',
                additionalText: 'Attack on uncastled king',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 32,
                name: 'Attack on castled king',
                additionalText: 'Attack on castled king - is the King really safe?',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 33,
                name: 'Opening principles',
                additionalText: 'Opening principles - Basic discipline',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 34,
                name: 'Punishing when breaking opening principles',
                additionalText: 'Punishing when breaking opening principles',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 35,
                name: 'End game',
                additionalText: 'End game - Less pieces more spaces in the board',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            }
        ];
    }
    // episodeList related functions
    DreamroomDataService.prototype.getEpisodeList = function () {
        return this.episodeList;
    };
    DreamroomDataService.prototype.getEpisodeById = function (id) {
        return this.episodeList.filter(function (episode) { return episode.id === id; })[0];
    };
    DreamroomDataService.prototype.getEpisodeByPage = function (pageNumber) {
        var firstEpisodeIndex = this.episodesPerPage * (pageNumber - 1);
        var episodeChunk = [];
        for (var i = 0; i < this.episodesPerPage; i++) {
            if (firstEpisodeIndex !== this.episodeList.length) {
                episodeChunk[i] = this.episodeList[firstEpisodeIndex++];
            }
            else {
                break;
            }
        }
        return episodeChunk;
    };
    DreamroomDataService.prototype.getNumberOfPages = function () {
        return Math.ceil(this.episodeList.length / this.episodesPerPage);
    };
    DreamroomDataService.prototype.setLevel = function (level_id) {
        this.user_level = level_id;
    };
    DreamroomDataService.prototype.getLevel = function () {
        return this.user_level;
    };
    DreamroomDataService.ɵfac = function DreamroomDataService_Factory(t) { return new (t || DreamroomDataService)(); };
    DreamroomDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DreamroomDataService, factory: DreamroomDataService.ɵfac });
    return DreamroomDataService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DreamroomDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/user/product-room/product-episode-list/product-episode-list.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/user/product-room/product-episode-list/product-episode-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProductEpisodeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEpisodeListComponent", function() { return ProductEpisodeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app-common/pre-loader/pre-loader.component */ "./src/app/app-common/pre-loader/pre-loader.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _app_common_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app-common/card/card.component */ "./src/app/app-common/card/card.component.ts");











function ProductEpisodeListComponent_app_pre_loader_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pre-loader");
} }
function ProductEpisodeListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No Videos Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductEpisodeListComponent_div_3_app_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var product_r4 = ctx.$implicit;
    var i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardData", product_r4)("index", i_r5)("hover", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("product_id ", product_r4.id, "");
} }
function ProductEpisodeListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductEpisodeListComponent_div_3_app_card_1_Template, 2, 4, "app-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.productList);
} }
var ProductEpisodeListComponent = /** @class */ (function () {
    function ProductEpisodeListComponent(_activateRoute, _authService) {
        this._activateRoute = _activateRoute;
        this._authService = _authService;
        this.ProductEpisodeListComponentClass = "app-product-episode-list";
        this.productList = [];
        this.productMapping = [
            {
                name: "Class Room",
                alias: "class-room",
                productType: 2
            },
            {
                name: "Live Room",
                alias: "live-room",
                productType: 3
            },
            {
                name: "Camp Room",
                alias: "camp-room",
                productType: 6
            },
            {
                name: "121 Room",
                alias: "121-room",
                productType: 4
            }
        ];
    }
    ProductEpisodeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activateRoute.params.subscribe(function (params) {
            _this.categoryId = params.categoryId;
            _this.productType = params.productType;
            _this.productId = params.productId;
        });
        if (this.categoryId && this.productType && this.productId) {
            this.isLoading = true;
            this._authService
                .getProductVideoLink({
                productId: this.productId
            })
                .subscribe(function (res) {
                var product;
                var videoLinks;
                var productToShow;
                _this.isLoading = false;
                product = res.data.product[0];
                if (product.user_video_url === undefined ||
                    product.user_video_url === null) {
                    // for Camp Room - video_url array
                    _this.foundProduct = Boolean(product.video_url.length);
                    videoLinks = res.data.product[0].video_url;
                }
                else {
                    // for 121 Room - user_video_url array
                    _this.foundProduct = Boolean(product.user_video_url.length);
                    videoLinks = res.data.product[0].user_video_url;
                }
                for (var i = 0; i < videoLinks.length; i++) {
                    productToShow = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](product);
                    lodash__WEBPACK_IMPORTED_MODULE_3__["map"](videoLinks[i], function (value, key) {
                        productToShow[key] = value;
                    });
                    productToShow.session_video_id = i;
                    productToShow.is_session_multiple = 0;
                    _this.productList.push(productToShow);
                }
            });
        }
    };
    ProductEpisodeListComponent.ɵfac = function ProductEpisodeListComponent_Factory(t) { return new (t || ProductEpisodeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
    ProductEpisodeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductEpisodeListComponent, selectors: [["app-product-episode-list"]], hostVars: 2, hostBindings: function ProductEpisodeListComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.ProductEpisodeListComponentClass);
        } }, decls: 4, vars: 3, consts: [[4, "ngIf"], [1, "product_episode_list_container"], ["class", "no_product_found", 4, "ngIf"], ["class", "product_container", 4, "ngIf"], [1, "no_product_found"], [1, "product_container"], [3, "cardData", "index", "hover", 4, "ngFor", "ngForOf"], [3, "cardData", "index", "hover"]], template: function ProductEpisodeListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductEpisodeListComponent_app_pre_loader_0_Template, 1, 0, "app-pre-loader", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductEpisodeListComponent_div_2_Template, 5, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductEpisodeListComponent_div_3_Template, 2, 1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.foundProduct && !ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.foundProduct);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_5__["PreLoaderComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _app_common_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"]], styles: [".app-product-episode-list[_ngcontent-%COMP%]   .product_episode_list_container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.app-product-episode-list[_ngcontent-%COMP%]   .product_episode_list_container[_ngcontent-%COMP%]   .no_product_found[_ngcontent-%COMP%] {\n  justify-content: center;\n  text-align: center;\n  margin: 4em 0;\n  font-size: 1em;\n}\n\n.app-product-episode-list[_ngcontent-%COMP%]   .product_episode_list_container[_ngcontent-%COMP%]   .no_product_found[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 4em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.app-product-episode-list[_ngcontent-%COMP%]   .product_episode_list_container[_ngcontent-%COMP%]   .no_product_found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\n.app-product-episode-list[_ngcontent-%COMP%]   .product_episode_list_container[_ngcontent-%COMP%]   .product_container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9kdWN0LXJvb20vcHJvZHVjdC1lcGlzb2RlLWxpc3QvcHJvZHVjdC1lcGlzb2RlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxXQUFXO0VBQ1gsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7QUFEM0I7O0FBSEE7RUFPWSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0FBQTFCOztBQVZBO0VBYWdCLGNBQWM7RUFDZCwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtBQUNuQzs7QUFoQkE7RUFtQmdCLGNBQWM7QUFDOUI7O0FBcEJBO0VBd0JZLFdBQVc7RUFDWCwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFBM0IiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb2R1Y3Qtcm9vbS9wcm9kdWN0LWVwaXNvZGUtbGlzdC9wcm9kdWN0LWVwaXNvZGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtcHJvZHVjdC1lcGlzb2RlLWxpc3Qge1xuXG4gICAgLnByb2R1Y3RfZXBpc29kZV9saXN0X2NvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuXG4gICAgICAgIC5ub19wcm9kdWN0X2ZvdW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiA0ZW0gMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuXG4gICAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3RfY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });
    return ProductEpisodeListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductEpisodeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-product-episode-list",
                templateUrl: "./product-episode-list.component.html",
                styleUrls: ["./product-episode-list.component.scss"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, { ProductEpisodeListComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class"]
        }] }); })();


/***/ }),

/***/ "./src/app/user/product-room/product-room-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/user/product-room/product-room-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ProductRoomRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoomRoutingModule", function() { return ProductRoomRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.component */ "./src/app/user/product-room/product/product.component.ts");
/* harmony import */ var _product_episode_list_product_episode_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-episode-list/product-episode-list.component */ "./src/app/user/product-room/product-episode-list/product-episode-list.component.ts");






var routes = [
    {
        path: ':slug',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]
    },
    {
        path: ':categoryId/:productType/:productId/:slug',
        component: _product_episode_list_product_episode_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductEpisodeListComponent"]
    }
];
var ProductRoomRoutingModule = /** @class */ (function () {
    function ProductRoomRoutingModule() {
    }
    ProductRoomRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductRoomRoutingModule });
    ProductRoomRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductRoomRoutingModule_Factory(t) { return new (t || ProductRoomRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ProductRoomRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductRoomRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRoomRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/product-room/product-room.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/user/product-room/product-room.module.ts ***!
  \**********************************************************/
/*! exports provided: ProductRoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoomModule", function() { return ProductRoomModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.component */ "./src/app/user/product-room/product/product.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app-material-module */ "./src/app/app-material-module.ts");
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _product_room_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-room-routing.module */ "./src/app/user/product-room/product-room-routing.module.ts");
/* harmony import */ var _product_episode_list_product_episode_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-episode-list/product-episode-list.component */ "./src/app/user/product-room/product-episode-list/product-episode-list.component.ts");








var ProductRoomModule = /** @class */ (function () {
    function ProductRoomModule() {
    }
    ProductRoomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductRoomModule });
    ProductRoomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductRoomModule_Factory(t) { return new (t || ProductRoomModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
                _product_room_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductRoomRoutingModule"]
            ]] });
    return ProductRoomModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductRoomModule, { declarations: [_product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"],
        _product_episode_list_product_episode_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductEpisodeListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
        _product_room_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductRoomRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRoomModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
                    _product_room_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductRoomRoutingModule"]
                ],
                declarations: [
                    _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"],
                    _product_episode_list_product_episode_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductEpisodeListComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/product-room/product/product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/user/product-room/product/product.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app-common/pre-loader/pre-loader.component */ "./src/app/app-common/pre-loader/pre-loader.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/progress-spinner.js");
/* harmony import */ var _app_common_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app-common/card/card.component */ "./src/app/app-common/card/card.component.ts");











function ProductComponent_app_pre_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pre-loader");
} }
function ProductComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Why don't you try one?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_2_Template_p_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.openPaymentGateway(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No ", ctx_r1.productRoomName, " found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Click here to buy our ", ctx_r1.productRoomName, "");
} }
function ProductComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_div_3_div_2_app_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 14);
} if (rf & 2) {
    var product_r8 = ctx.$implicit;
    var i_r9 = ctx.index;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardData", product_r8)("mobileView", ctx_r7.mobileVersion())("index", i_r9)("hover", true);
} }
function ProductComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductComponent_div_3_div_2_app_card_1_Template, 1, 4, "app-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.productData);
} }
function ProductComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductComponent_div_3_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductComponent_div_3_div_2_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.dataReceived);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.dataReceived);
} }
var ProductComponent = /** @class */ (function () {
    function ProductComponent(_router, _activatedRoute, _authService) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._authService = _authService;
        this.ProductComponentClass = "app-product";
        this.dataReceived = false;
        this.nothingToDisplay = true;
        this.categoryId = 1;
        this.productMapping = [
            {
                name: "Class Room",
                alias: "class-room",
                productType: 2
            },
            {
                name: "Live Room",
                alias: "live-room",
                productType: 3
            },
            {
                name: "Camp Room",
                alias: "camp-room",
                productType: 6
            },
            {
                name: "121 Room",
                alias: "121-room",
                productType: 4
            }
        ];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this._activatedRoute.params.subscribe(function (params) {
            var found_mapped_product = _this.productMapping.find(function (mapped_product) { return mapped_product.alias === params.productName; });
            _this.productRoomName = found_mapped_product.name;
            _this.productType = found_mapped_product.productType;
            _this.isLoading = true;
            _this._authService
                .getUserProduct({
                categoryId: _this.categoryId,
                productType: found_mapped_product.productType,
                limit: 0,
                offset: 0
            })
                .subscribe(function (res) {
                _this.isLoading = false;
                _this.productData = res.data.products;
                _this.nothingToDisplay = !(_this.productData.length > 0);
                _this.dataReceived = true;
            }, function (error) {
                _this.isLoading = false;
                _this.nothingToDisplay = !(_this.productData.length > 0);
                _this.dataReceived = true;
            });
        });
    };
    ProductComponent.prototype.openPaymentGateway = function () {
        this._router.navigateByUrl("/product-catalog/" + this.categoryId + "/" + this.productType);
    };
    ProductComponent.prototype.mobileVersion = function () {
        return window.innerWidth < 700;
    };
    ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
    ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], hostVars: 2, hostBindings: function ProductComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.ProductComponentClass);
        } }, decls: 4, vars: 3, consts: [[1, "user_webinar_container"], [4, "ngIf"], ["class", "nothing_to_display", 4, "ngIf"], ["class", "user_banner_video", 4, "ngIf"], [1, "nothing_to_display"], [1, "statement"], [1, "offer_to_enroll"], [1, "offer_to_enroll", "offer_link", 3, "click"], [1, "user_banner_video"], ["class", "loader", 4, "ngIf"], ["class", "webinar_cards", 4, "ngIf"], [1, "loader"], [1, "webinar_cards"], [3, "cardData", "mobileView", "index", "hover", 4, "ngFor", "ngForOf"], [3, "cardData", "mobileView", "index", "hover"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductComponent_app_pre_loader_1_Template, 1, 0, "app-pre-loader", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductComponent_div_2_Template, 9, 2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductComponent_div_3_Template, 3, 2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nothingToDisplay && !ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nothingToDisplay && !ctx.isLoading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_4__["PreLoaderComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _app_common_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"]], styles: [".app-product[_ngcontent-%COMP%]   .user_webinar_container[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1em 0 2em 0;\n  border-radius: 6px;\n}\n\n.app-product[_ngcontent-%COMP%]   .user_webinar_container[_ngcontent-%COMP%]   .nothing_to_display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin: 1em;\n  padding: 5.6em 0;\n}\n\n.app-product[_ngcontent-%COMP%]   .user_webinar_container[_ngcontent-%COMP%]   .nothing_to_display[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  font-size: 4em;\n}\n\n.app-product[_ngcontent-%COMP%]   .user_webinar_container[_ngcontent-%COMP%]   .nothing_to_display[_ngcontent-%COMP%]   .statement[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-top: 8px;\n  font-size: 2em;\n}\n\n.app-product[_ngcontent-%COMP%]   .user_webinar_container[_ngcontent-%COMP%]   .nothing_to_display[_ngcontent-%COMP%]   .offer_to_enroll[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: 500;\n  margin: 0;\n  margin-top: 2em;\n}\n\n.app-product[_ngcontent-%COMP%]   .user_webinar_container[_ngcontent-%COMP%]   .nothing_to_display[_ngcontent-%COMP%]   .offer_link[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #a0ce4e;\n  padding: 5px 12px;\n  margin-left: 1em;\n  margin-right: 1em;\n  margin-top: 6px;\n  cursor: pointer;\n}\n\n.app-product[_ngcontent-%COMP%]   .user_webinar_container[_ngcontent-%COMP%]   .nothing_to_display[_ngcontent-%COMP%]   .offer_link[_ngcontent-%COMP%]:hover {\n  background-color: #a0ce4e;\n  color: white;\n  border-radius: 6px;\n  padding: 5px 12px;\n}\n\n.app-product[_ngcontent-%COMP%]   .user_webinar_container[_ngcontent-%COMP%]   .user_banner_video[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: auto;\n}\n\n.app-product[_ngcontent-%COMP%]   .user_webinar_container[_ngcontent-%COMP%]   .user_banner_video[_ngcontent-%COMP%]   .chip-heading[_ngcontent-%COMP%] {\n  font-size: 1.75em;\n  font-weight: 400;\n  color: grey;\n  margin-left: 0em;\n  text-transform: none;\n  cursor: default;\n  margin-bottom: 12px;\n}\n\n.app-product[_ngcontent-%COMP%]   .user_webinar_container[_ngcontent-%COMP%]   .user_banner_video[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 4em;\n  margin-bottom: 4em;\n}\n\n.app-product[_ngcontent-%COMP%]   .user_webinar_container[_ngcontent-%COMP%]   .user_banner_video[_ngcontent-%COMP%]   .webinar_cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9kdWN0LXJvb20vcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUksaUJBQWlCO0VBRWpCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFIdEI7O0FBSkE7RUFVTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtBQUZ0Qjs7QUFiQTtFQWtCUSxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7QUFEdEI7O0FBbkJBO0VBd0JRLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYztBQUR0Qjs7QUF6QkE7RUE4QlEsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGVBQWU7QUFEdkI7O0FBakNBO0VBc0NRLFNBQVM7RUFFVCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7QUFGdkI7O0FBM0NBO0VBZ0RVLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUQzQjs7QUFsREE7RUF5RE0sVUFBVTtFQUNWLFlBQVk7QUFIbEI7O0FBdkRBO0VBK0RRLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLG1CQUFtQjtBQUozQjs7QUFqRUE7RUEwRVUsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFMNUI7O0FBdkVBO0VBaUZRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQU52QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcHJvZHVjdC1yb29tL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtcHJvZHVjdCB7XG5cbiAgLnVzZXJfd2ViaW5hcl9jb250YWluZXIge1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAzZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLy8gZmlsdGVyOiBkcm9wLXNoYWRvdyg4cHggOHB4IDEwcHggI2NjY2NjYyk7XG4gICAgcGFkZGluZzogMWVtIDAgMmVtIDA7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICAgLm5vdGhpbmdfdG9fZGlzcGxheSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDFlbTtcbiAgICAgIHBhZGRpbmc6IDUuNmVtIDA7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICB9XG5cbiAgICAgIC5zdGF0ZW1lbnQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICB9XG5cbiAgICAgIC5vZmZlcl90b19lbnJvbGwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgfVxuXG4gICAgICAub2ZmZXJfbGluayB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgY29sb3I6ICNhMGNlNGU7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EwY2U0ZTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnVzZXJfYmFubmVyX3ZpZGVvIHtcbiAgICAgIHdpZHRoOiA5OCU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICAvLyBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAvLyBoZWlnaHQ6IDMyZW07XG5cbiAgICAgIC5jaGlwLWhlYWRpbmcge1xuICAgICAgICBmb250LXNpemU6IDEuNzVlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5sb2FkZXIge1xuICAgICAgICBtYXQtc3Bpbm5lciB7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDRlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0ZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLndlYmluYXJfY2FyZHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
    return ProductComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-product",
                templateUrl: "./product.component.html",
                styleUrls: ["./product.component.scss"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, { ProductComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class"]
        }] }); })();


/***/ }),

/***/ "./src/app/user/star-room/star-room-data.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/user/star-room/star-room-data.service.ts ***!
  \**********************************************************/
/*! exports provided: StarroomDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarroomDataService", function() { return StarroomDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var StarroomDataService = /** @class */ (function () {
    function StarroomDataService() {
        this.episodesPerPage = 10;
        this.episodeList = [
            {
                id: 1,
                name: 'The Introduction',
                additionalText: 'Introduction',
                length: '8',
                views: '18,200',
                likes: '96',
                status: true
            },
            {
                id: 2,
                name: 'Setting up a chess board',
                additionalText: 'Setting up a chess board - Getting ready',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 3,
                name: 'How to move the pieces',
                additionalText: 'How to move the pieces - Marching towards the opponent',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 4,
                name: 'About Pawns',
                additionalText: 'About Pawns - the little ones',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 5,
                name: 'Castling',
                additionalText: 'Castling - Is this about a castle?',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 6,
                name: 'Writing a scoresheet and operating chess clock',
                additionalText: 'Writing a scoresheet and operating chess clock - creating a proof',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 7,
                name: '3 stages of a game',
                additionalText: '3 stages of a game',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 8,
                name: 'Attack',
                additionalText: 'Attack - the real fight',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 9,
                name: 'Check',
                additionalText: 'Check - Questioning the king directly',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 10,
                name: 'Respond to attack by defence',
                additionalText: 'Respond to attack by defence - counter fight',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 11,
                name: 'Capturing',
                additionalText: 'Capturing - Killing',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 12,
                name: 'Checkmate and stalemate',
                additionalText: 'Checkmate and stalemate',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 13,
                name: 'Checkmate - by Queen, 2 rooks, 1 rook',
                additionalText: 'Checkmate - by Queen, 2 rooks, 1 rook - death of the king and the kingdom or The final frontier',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 14,
                name: 'Checkmate - by coordination of different pieces',
                additionalText: 'Checkmate - by coordination of different pieces',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 15,
                name: 'Draw - 5 situations',
                additionalText: 'Draw - The white flag. Let us stop fighting',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 16,
                name: 'Forcing moves',
                additionalText: 'Forcing moves - Do what I want',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 17,
                name: 'Gaining material',
                additionalText: 'Gaining material',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 18,
                name: 'Tactical Theme - Double attack',
                additionalText: 'Tactical Theme - Double attack',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 19,
                name: 'Tactical Theme - Discovered attack and Discovered check',
                additionalText: 'Tactical Theme - Discovered attack and Discovered check - The surprise element',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 20,
                name: 'Tactical Theme - Pin',
                additionalText: 'Tactical Theme - Pin - Is this a safety pin?',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 21,
                name: 'Tactical Theme - Skewer',
                additionalText: 'Tactical Theme - Skewer - May this be for cooking?',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 22,
                name: 'Tactical Theme - Decoy & Deflection',
                additionalText: 'Tactical Theme - Decoy & Deflection',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 23,
                name: 'Tactical Theme - Clearance',
                additionalText: 'Tactical Theme - Clearance - Any traffic to be cleared?',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 24,
                name: 'Tactical Theme - Fork',
                additionalText: 'Tactical Theme - Fork - sure not for noodles.',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 25,
                name: 'Tactical Theme - Piece Overloading',
                additionalText: 'Tactical Theme - Piece Overloading - Is there a donkey that is overloaded in chess other rook and knight?',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 26,
                name: 'Tactical Theme - Backrank Mate',
                additionalText: 'Tactical Theme - Backrank Mate - 1st and last rank I know. Backrank?',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 27,
                name: 'Thematic sacrifice - Bh7',
                additionalText: 'Thematic sacrifice - Bh7 sacrifice for better.',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 28,
                name: 'Thematic sacrifice - Nf7',
                additionalText: 'Thematic sacrifice - Nf7',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 29,
                name: 'Thematic sacrifice - Ne6',
                additionalText: 'Thematic sacrifice - Ne6',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 30,
                name: 'Thematic sacrifice - Bh6',
                additionalText: 'Thematic sacrifice - Bh6',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 31,
                name: 'Attack on uncastled king',
                additionalText: 'Attack on uncastled king',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 32,
                name: 'Attack on castled king',
                additionalText: 'Attack on castled king - is the King really safe?',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 33,
                name: 'Opening principles',
                additionalText: 'Opening principles - Basic discipline',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 34,
                name: 'Punishing when breaking opening principles',
                additionalText: 'Punishing when breaking opening principles',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            },
            {
                id: 35,
                name: 'End game',
                additionalText: 'End game - Less pieces more spaces in the board',
                length: '8',
                views: '18,200',
                likes: '96',
                status: false
            }
        ];
    }
    // episodeList related functions
    StarroomDataService.prototype.getEpisodeList = function () {
        return this.episodeList;
    };
    StarroomDataService.prototype.getEpisodeById = function (id) {
        return this.episodeList.filter(function (episode) { return episode.id === id; })[0];
    };
    StarroomDataService.prototype.getEpisodeByPage = function (pageNumber) {
        var firstEpisodeIndex = this.episodesPerPage * (pageNumber - 1);
        var episodeChunk = [];
        for (var i = 0; i < this.episodesPerPage; i++) {
            if (firstEpisodeIndex !== this.episodeList.length) {
                episodeChunk[i] = this.episodeList[firstEpisodeIndex++];
            }
            else {
                break;
            }
        }
        return episodeChunk;
    };
    StarroomDataService.prototype.getNumberOfPages = function () {
        return Math.ceil(this.episodeList.length / this.episodesPerPage);
    };
    StarroomDataService.prototype.setLevel = function (level_id) {
        this.user_level = level_id;
    };
    StarroomDataService.prototype.getLevel = function () {
        return this.user_level;
    };
    StarroomDataService.ɵfac = function StarroomDataService_Factory(t) { return new (t || StarroomDataService)(); };
    StarroomDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StarroomDataService, factory: StarroomDataService.ɵfac });
    return StarroomDataService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarroomDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/user/user-container/user-container.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-container/user-container.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContainerComponent", function() { return UserContainerComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _menu_nav_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-nav-list.service */ "./src/app/user/user-container/menu-nav-list.service.ts");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_common_user_activity_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app-common/user-activity.service */ "./src/app/app-common/user-activity.service.ts");
/* harmony import */ var _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../amplitude/amplitude.service */ "./src/app/amplitude/amplitude.service.ts");
/* harmony import */ var _amplitude_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../amplitude/events */ "./src/app/amplitude/events.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");





















var _c0 = function (a0) { return { "is_list_item_active": a0 }; };
function UserContainerComponent_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserContainerComponent_div_1_div_1_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.gotoItem(item_r6.id); })("mouseenter", function UserContainerComponent_div_1_div_1_div_1_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r12.hoverActive = true; })("mouseleave", function UserContainerComponent_div_1_div_1_div_1_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r13.hoverActive = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var i_r7 = ctx_r14.index;
    var item_r6 = ctx_r14.$implicit;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, i_r7 === ctx_r8.activeState));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r6.svg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.name);
} }
function UserContainerComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserContainerComponent_div_1_div_1_div_1_Template, 4, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r6.id !== 8 && item_r6.id !== 9 && item_r6.id != 10);
} }
function UserContainerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserContainerComponent_div_1_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.menuList);
} }
function UserContainerComponent_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserContainerComponent_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserContainerComponent_mat_icon_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserContainerComponent_mat_icon_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var UserContainerComponent = /** @class */ (function () {
    function UserContainerComponent(router, _routes, _authService, _userService, _menuNavList, _breadCrumb, _userActivity, _amps, location) {
        var _this = this;
        this.router = router;
        this._routes = _routes;
        this._authService = _authService;
        this._userService = _userService;
        this._menuNavList = _menuNavList;
        this._breadCrumb = _breadCrumb;
        this._userActivity = _userActivity;
        this._amps = _amps;
        this.userContainerComponentClass = 'app-user-container';
        this.response = '';
        this.menuList = [];
        this.activeState = 0;
        this.hoverActive = false;
        this.ex = '';
        this.router = router;
        location.onPopState(function () {
            _this.examples = '';
            _this.puzzles = '';
            _this.ex = '';
        });
    }
    UserContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._breadCrumb.levelSelectorBreadSubject.subscribe(function (res) {
            _this.response = res;
        });
        // this._breadCrumb.notificationBreadcrumb.subscribe(res=>{
        //   this.response=res;
        // })
        this._breadCrumb.exampleBreadSubject.subscribe(function (res) {
            _this.examples = res;
        });
        this._breadCrumb.puzzleBreadSubject.subscribe(function (res) {
            _this.puzzles = res;
        });
        this._breadCrumb.episodeBreadSubject.subscribe(function (res) {
            _this.ex = res;
        });
        window.scroll(0, 0);
        this.menuList = this._menuNavList.getMenuNavList();
        this.getProductTypes();
        var activeItem = this.menuList.filter(function (item) { return item.url === _this.router.url; });
        var routeName = this.router.url.split('/')[2];
        var menuName;
        for (var i = 0; i < this.menuList.length - 1; i++) {
            menuName = this.menuList[i].url.split('/')[2];
            if (routeName === menuName) {
                this.activeState = this.menuList[i].id;
            }
        }
    };
    UserContainerComponent.prototype.mobileView = function () {
        return window.innerWidth < 831;
    };
    UserContainerComponent.prototype.checkImage = function (src, good, bad) {
        var img = new Image();
        img.onload = good;
        img.onerror = bad;
        img.src = src;
    };
    UserContainerComponent.prototype.getUserProfilePic = function () {
        return UserContainerComponent.img_url;
    };
    UserContainerComponent.prototype.gotoItem = function (id) {
        this.response = '';
        this.examples = '';
        this.puzzles = '';
        this.ex = '';
        this.activeState = id;
        var item = this.menuList.filter(function (item1) { return item1.id === id; });
        this._amps.setAmplitudeEvents(_amplitude_events__WEBPACK_IMPORTED_MODULE_10__["events"].event_16, {
            item: item[0]['name'],
        });
        if (item[0]['id'] === this.menuList.length - 1) {
            this._userActivity.logUserLogoutActivity('user-logout', 0);
        }
        else {
            this.router.navigateByUrl(item[0]['url']);
        }
    };
    UserContainerComponent.prototype.handleFileSelect = function (evt) {
        this._userService.uploadImage(evt).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])()).subscribe();
    };
    UserContainerComponent.prototype.mobileVersion = function () {
        return window.innerWidth < 600;
    };
    UserContainerComponent.prototype.gotoHomepage = function () {
        this.router.navigateByUrl('/');
    };
    UserContainerComponent.prototype.activeEvents = function (e) {
        if (e.router || e._router) {
            var url_1 = e.router === undefined ? e._router.url : e.router.url;
            var items = this.menuList.filter(function (item1) { return item1.url === url_1; });
            var item = items[0];
            if (item) {
                this.activeState = item.id;
            }
        }
    };
    UserContainerComponent.prototype.getProductTypes = function () {
        var _this = this;
        var product = [];
        this._authService
            .getUserProductType({ user_id: localStorage.getItem('id') })
            .subscribe(function (res) {
            var testArray = res.data.product_types.productTypes;
            for (var i = 0; i < testArray.length; i++) {
                product.push(testArray[i].product_type);
            }
            _this._menuNavList.setValidProductForUser(product);
        }, function (err) { });
    };
    UserContainerComponent.prototype.navigate = function () {
        this.response = '';
        this.examples = '';
        this.puzzles = '';
        this.ex = '';
        if (this.response) {
            this.response = '';
            this.examples = '';
            this.puzzles = '';
            this.ex = '';
            this.router.navigateByUrl('/user/dreamroom/dr-level-selector');
        }
        else {
            if (this.activeState == 0) {
                this.router.navigateByUrl("/user/dashboard/" + localStorage.getItem('first_name'));
            }
            if (this.activeState == 1) {
                this.router.navigateByUrl("/user/dreamroom/dr-level-selector");
            }
            if (this.activeState == 2) {
                this.router.navigateByUrl('/user/star-room');
            }
            if (this.activeState == 3) {
                this.router.navigateByUrl("/user/class-room/" + localStorage.getItem('first_name'));
            }
            if (this.activeState == 4) {
                this.router.navigateByUrl("/user/live-room/" + localStorage.getItem('first_name'));
            }
            if (this.activeState == 5) {
                this.router.navigateByUrl("/user/camp-room/" + localStorage.getItem('first_name'));
            }
            if (this.activeState == 6) {
                this.router.navigateByUrl("/user/121-room/" + localStorage.getItem('first_name'));
            }
        }
    };
    UserContainerComponent.prototype.level = function () {
        this.examples = '';
        this.puzzles = '';
        this.ex = '';
        if (localStorage.getItem('level_id') === '1') {
            this.router.navigateByUrl("/user/dreamroom/dr-landing/episode-list/" + localStorage.getItem('first_name') + "/1");
        }
        else if (localStorage.getItem('level_id') === '2') {
            this.router.navigateByUrl("/user/dreamroom/dr-landing/episode-list/" + localStorage.getItem('first_name') + "/2");
        }
        else if (localStorage.getItem('level_id') === '3') {
            this.router.navigateByUrl("/user/dreamroom/dr-landing/episode-list/" + localStorage.getItem('first_name') + "/3");
        }
    };
    UserContainerComponent.prototype.exampleOpen = function () {
        //   if(this.puzzles){
        //   this.examples = '';
        //   this.puzzles = '';
        //   this.router.navigateByUrl(
        //     `/user/dreamroom/dr-functionality/video/1/${localStorage.getItem(
        //       'example'
        //     )}`
        //   );
        // }
    };
    UserContainerComponent.img_url = '/assets/profile/profile.png';
    UserContainerComponent.ɵfac = function UserContainerComponent_Factory(t) { return new (t || UserContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_menu_nav_list_service__WEBPACK_IMPORTED_MODULE_5__["MenuNavListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadCrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_common_user_activity_service__WEBPACK_IMPORTED_MODULE_8__["UserActivityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_9__["AmplitudeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"])); };
    UserContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserContainerComponent, selectors: [["app-user-container"]], hostVars: 2, hostBindings: function UserContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.userContainerComponentClass);
        } }, decls: 24, vars: 10, consts: [[1, "user_container"], ["class", "menu_container", 4, "ngIf"], [1, "page_container"], [1, "bread_crumb"], [1, "icon_home", 3, "click"], [1, "fonts", 2, "cursor", "pointer", 3, "click"], [4, "ngIf"], [1, "fonts"], [1, "page"], [3, "activate"], [1, "menu_container"], [4, "ngFor", "ngForOf"], ["class", "menu_item", 3, "ngClass", "click", "mouseenter", "mouseleave", 4, "ngIf"], [1, "menu_item", 3, "ngClass", "click", "mouseenter", "mouseleave"], ["draggable", "false", 3, "src"]], template: function UserContainerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserContainerComponent_div_1_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserContainerComponent_Template_mat_icon_click_4_listener() { return ctx.gotoHomepage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "home");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "keyboard_arrow_right");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserContainerComponent_Template_span_click_8_listener() { return ctx.navigate(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserContainerComponent_mat_icon_10_Template, 2, 0, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserContainerComponent_Template_span_click_11_listener() { return ctx.level(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserContainerComponent_mat_icon_13_Template, 2, 0, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserContainerComponent_Template_span_click_14_listener() { return ctx.exampleOpen(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UserContainerComponent_mat_icon_16_Template, 2, 0, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UserContainerComponent_mat_icon_19_Template, 2, 0, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "router-outlet", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function UserContainerComponent_Template_router_outlet_activate_23_listener($event) { return ctx.activeEvents($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobileView());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.menuList[ctx.activeState].BreadCrumbName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.response.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.response);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ex != "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.ex);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.examples == "Examples");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.examples);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.puzzles == "Puzzles");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.puzzles);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], encapsulation: 2 });
    return UserContainerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-container',
                templateUrl: './user-container.component.html',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _menu_nav_list_service__WEBPACK_IMPORTED_MODULE_5__["MenuNavListService"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadCrumbService"] }, { type: _app_common_user_activity_service__WEBPACK_IMPORTED_MODULE_8__["UserActivityService"] }, { type: _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_9__["AmplitudeService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"] }]; }, { userContainerComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _video_viewer_video_viewer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-viewer/video-viewer.component */ "./src/app/user/video-viewer/video-viewer.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_container_user_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-container/user-container.component */ "./src/app/user/user-container/user-container.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");







var routes = [
    {
        path: '',
        component: _user_container_user_container_component__WEBPACK_IMPORTED_MODULE_3__["UserContainerComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: 'dashboard',
                loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~dashboard-dashboard-module~profile-profile-module~user-order-user-order-module"), __webpack_require__.e("default~dashboard-dashboard-module~profile-profile-module~user-wallet-user-wallet-module"), __webpack_require__.e("default~dashboard-dashboard-module~profile-profile-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/user/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); },
            },
            {
                path: 'dreamroom',
                loadChildren: function () { return __webpack_require__.e(/*! import() | dreamroom-dreamroom-module */ "dreamroom-dreamroom-module").then(__webpack_require__.bind(null, /*! ./dreamroom/dreamroom.module */ "./src/app/user/dreamroom/dreamroom.module.ts")).then(function (m) { return m.DreamroomModule; }); },
            },
            {
                path: 'star-room',
                loadChildren: function () { return __webpack_require__.e(/*! import() | star-room-star-room-module */ "star-room-star-room-module").then(__webpack_require__.bind(null, /*! ./star-room/star-room.module */ "./src/app/user/star-room/star-room.module.ts")).then(function (m) { return m.StarroomModule; }); },
            },
            {
                path: 'profile',
                loadChildren: function () { return Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~dashboard-dashboard-module~profile-profile-module~user-order-user-order-module"), __webpack_require__.e("default~dashboard-dashboard-module~profile-profile-module~user-wallet-user-wallet-module"), __webpack_require__.e("default~dashboard-dashboard-module~profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/user/profile/profile.module.ts")).then(function (m) { return m.ProfileModule; }); },
            },
            {
                path: 'wallet',
                loadChildren: function () { return __webpack_require__.e(/*! import() | user-wallet-user-wallet-module */ "default~dashboard-dashboard-module~profile-profile-module~user-wallet-user-wallet-module").then(__webpack_require__.bind(null, /*! ./user-wallet/user-wallet.module */ "./src/app/user/user-wallet/user-wallet.module.ts")).then(function (m) { return m.UserWalletModule; }); },
            },
            {
                path: 'live-stream',
                loadChildren: function () { return __webpack_require__.e(/*! import() | live-stream-live-stream-module */ "live-stream-live-stream-module").then(__webpack_require__.bind(null, /*! ./live-stream/live-stream.module */ "./src/app/user/live-stream/live-stream.module.ts")).then(function (m) { return m.LiveStreamModule; }); },
            },
            {
                path: 'order',
                loadChildren: function () { return __webpack_require__.e(/*! import() | user-order-user-order-module */ "default~dashboard-dashboard-module~profile-profile-module~user-order-user-order-module").then(__webpack_require__.bind(null, /*! ./user-order/user-order.module */ "./src/app/user/user-order/user-order.module.ts")).then(function (m) { return m.UserOrderModule; }); },
            },
            {
                path: 'notification',
                loadChildren: function () { return __webpack_require__.e(/*! import() | user-notification-user-notification-module */ "user-notification-user-notification-module").then(__webpack_require__.bind(null, /*! ./user-notification/user-notification.module */ "./src/app/user/user-notification/user-notification.module.ts")).then(function (m) { return m.UserNotificationModule; }); },
            },
            {
                path: ':product_type_name/video-content',
                loadChildren: function () { return __webpack_require__.e(/*! import() | video-player-video-player-module */ "video-player-video-player-module").then(__webpack_require__.bind(null, /*! ../video-player/video-player.module */ "./src/app/video-player/video-player.module.ts")).then(function (m) { return m.VideoPlayerModule; }); },
            },
            {
                path: 'video-viewer/:product_type/:product_id',
                component: _video_viewer_video_viewer_component__WEBPACK_IMPORTED_MODULE_0__["VideoViewerComponent"],
            },
            {
                path: 'video-viewer/:product_type/:product_id/:session_id',
                component: _video_viewer_video_viewer_component__WEBPACK_IMPORTED_MODULE_0__["VideoViewerComponent"],
            },
            {
                path: ':productName',
                loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./product-room/product-room.module */ "./src/app/user/product-room/product-room.module.ts")).then(function (m) { return m.ProductRoomModule; }); },
            },
        ],
    },
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
    UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return UserRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-material-module */ "./src/app/app-material-module.ts");
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-bootstrap.module */ "./src/app/app-bootstrap.module.ts");
/* harmony import */ var _user_container_user_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-container/user-container.component */ "./src/app/user/user-container/user-container.component.ts");
/* harmony import */ var _dreamroom_dreamroom_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dreamroom/dreamroom-data.service */ "./src/app/user/dreamroom/dreamroom-data.service.ts");
/* harmony import */ var _video_viewer_video_viewer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./video-viewer/video-viewer.component */ "./src/app/user/video-viewer/video-viewer.component.ts");
/* harmony import */ var _video_viewer_video_viewer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./video-viewer/video-viewer.service */ "./src/app/user/video-viewer/video-viewer.service.ts");
/* harmony import */ var _product_room_product_room_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-room/product-room.module */ "./src/app/user/product-room/product-room.module.ts");
/* harmony import */ var _star_room_star_room_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./star-room/star-room-data.service */ "./src/app/user/star-room/star-room-data.service.ts");














var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserModule });
    UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserModule_Factory(t) { return new (t || UserModule)(); }, providers: [
            _dreamroom_dreamroom_data_service__WEBPACK_IMPORTED_MODULE_8__["DreamroomDataService"],
            _video_viewer_video_viewer_service__WEBPACK_IMPORTED_MODULE_10__["VideoViewerService"],
            _star_room_star_room_data_service__WEBPACK_IMPORTED_MODULE_12__["StarroomDataService"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
                _product_room_product_room_module__WEBPACK_IMPORTED_MODULE_11__["ProductRoomModule"]
            ]] });
    return UserModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_user_container_user_container_component__WEBPACK_IMPORTED_MODULE_7__["UserContainerComponent"],
        _video_viewer_video_viewer_component__WEBPACK_IMPORTED_MODULE_9__["VideoViewerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
        _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"],
        _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
        _product_room_product_room_module__WEBPACK_IMPORTED_MODULE_11__["ProductRoomModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                    _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"],
                    _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
                    _product_room_product_room_module__WEBPACK_IMPORTED_MODULE_11__["ProductRoomModule"]
                ],
                declarations: [
                    _user_container_user_container_component__WEBPACK_IMPORTED_MODULE_7__["UserContainerComponent"],
                    _video_viewer_video_viewer_component__WEBPACK_IMPORTED_MODULE_9__["VideoViewerComponent"]
                ],
                exports: [],
                providers: [
                    _dreamroom_dreamroom_data_service__WEBPACK_IMPORTED_MODULE_8__["DreamroomDataService"],
                    _video_viewer_video_viewer_service__WEBPACK_IMPORTED_MODULE_10__["VideoViewerService"],
                    _star_room_star_room_data_service__WEBPACK_IMPORTED_MODULE_12__["StarroomDataService"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/video-viewer/video-viewer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/video-viewer/video-viewer.component.ts ***!
  \*************************************************************/
/*! exports provided: VideoViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoViewerComponent", function() { return VideoViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _video_viewer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-viewer.service */ "./src/app/user/video-viewer/video-viewer.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_ip_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/ip.service */ "./src/app/auth/ip.service.ts");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _environments_environment_staging__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment.staging */ "./src/environments/environment.staging.ts");
/* harmony import */ var _app_common_user_activity_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app-common/user-activity.service */ "./src/app/app-common/user-activity.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tooltip.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
/* harmony import */ var _common_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/ellipsis-pipe */ "./src/app/common/ellipsis-pipe.ts");
























function VideoViewerComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "We have detected an unusual activity in your system");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Please close your browser and restart again");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VideoViewerComponent_div_1_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    var browser_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", browser_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", browser_r7.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", browser_r7.name);
} }
var _c0 = function (a0) { return { "margin_spacing": a0 }; };
function VideoViewerComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Please upgrade to any of the following browsers");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, VideoViewerComponent_div_1_div_2_img_4_Template, 1, 3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r5.devToolStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.supportedBrowserList);
} }
function VideoViewerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VideoViewerComponent_div_1_div_1_Template, 7, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VideoViewerComponent_div_1_div_2_Template, 5, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.devToolStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.verifyUserBrowser());
} }
function VideoViewerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.product_type, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.product_description, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
var _c1 = function (a0) { return { "remove_bottom_border": a0 }; };
function VideoViewerComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "ellipsis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VideoViewerComponent_div_4_div_4_Template_span_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r10.openDashboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var content_r9 = ctx.$implicit;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c1, content_r9.id == ctx_r8.UpComingClassRoom.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", content_r9.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](content_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 5, content_r9.description, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 8, content_r9.scheduled_date, "d/M/yy"));
} }
function VideoViewerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Upcoming Class Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, VideoViewerComponent_div_4_div_4_Template, 14, 13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.UpComingClassRoom);
} }
function VideoViewerComponent_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "ellipsis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VideoViewerComponent_div_5_div_4_Template_span_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.openDashboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var content_r13 = ctx.$implicit;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c1, content_r13.id == ctx_r12.UpComingLiveRoom.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", content_r13.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](content_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 5, content_r13.description, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 8, content_r13.scheduled_date, "d/M/yy"));
} }
function VideoViewerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Upcoming Live Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, VideoViewerComponent_div_5_div_4_Template, 14, 13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.UpComingLiveRoom);
} }
var VideoViewerComponent = /** @class */ (function () {
    function VideoViewerComponent(_routes, _videoViewerService, route, router, dialog, _authService, _ipService, _location, breadcrum, _userActivity) {
        var _this = this;
        this._routes = _routes;
        this._videoViewerService = _videoViewerService;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this._authService = _authService;
        this._ipService = _ipService;
        this._location = _location;
        this.breadcrum = breadcrum;
        this._userActivity = _userActivity;
        this.VideoViewerComponentClass = 'app-video-viewer';
        this.currentPage = 1;
        this.UpComingLiveRoom = [];
        this.UpComingClassRoom = [];
        this.devToolStatus = false;
        this.supportedBrowserList = [
            {
                name: 'Chrome',
                provider: 'Google',
                image_url: 'assets/browser/chrome.svg'
            },
            {
                name: 'Firefox',
                provider: 'Mozilla',
                image_url: 'assets/browser/firefox.svg'
            },
            {
                name: 'Safari',
                provider: 'Apple',
                image_url: 'assets/browser/safari.svg'
            },
            {
                name: 'Edge',
                provider: 'Microsoft',
                image_url: 'assets/browser/edge.svg'
            },
            {
                name: 'Opera',
                provider: 'Otello',
                image_url: 'assets/browser/opera.svg'
            }
        ];
        this.conf = {
            key: '',
            source: {
                dash: '',
                hls: '',
                progressive: '',
                poster: '',
                drm: {
                    widevine: {
                        LA_URL: 'https://widevine-dash.ezdrm.com/proxy?pX=5197BC'
                    },
                    fairplay: {
                        LA_URL: 'https://fps.ezdrm.com/api/licenses/12b27509-7e12-4b8e-97e7-7888b8a950f2',
                        certificateURL: 'https://s3-ap-southeast-1.amazonaws.com/chess-video/fairplay.cer',
                        prepareContentId: function (contentId) {
                            var uri = contentId;
                            var uriParts = uri.split('://', 1);
                            var protocol = uriParts[0].slice(-3);
                            uriParts = uri.split(';', 2);
                            contentId = uriParts.length > 1 ? uriParts[1] : '';
                            uriParts = contentId.split('?', 2);
                            contentId = uriParts.length > 1 ? uriParts[0] : contentId;
                            return protocol.toLowerCase() == 'skd' ? contentId : '';
                        },
                        prepareLicenseAsync: function (ckc) {
                            return new Promise(function (resolve, reject) {
                                var reader = new FileReader();
                                reader.addEventListener('loadend', function () {
                                    resolve(new Uint8Array(reader.result));
                                });
                                reader.addEventListener('error', function () {
                                    reject(reader.error);
                                });
                                reader.readAsArrayBuffer(ckc);
                            });
                        },
                        prepareMessage: function (event, session) {
                            return new Blob([event.message], {
                                type: 'application/octet-binary'
                            });
                        },
                        headers: [
                            {
                                name: 'content-type',
                                value: 'application/octet-stream'
                            }
                        ],
                        useUint16InitData: true,
                        licenseResponseType: 'blob'
                    }
                }
            },
            adaptation: {
                desktop: {
                    preload: false
                },
                mobile: {
                    preload: false
                }
            },
            skin: {
                screenLogoImage: 'assets/chess/bobby-fischer.png'
            },
            logs: {
                bitmovin: false
            },
            events: {
                onReady: function () {
                    if (_this.verifyUserBrowser() && !_this.devToolStatus) {
                        var element = document.getElementById('bmpui-id-201');
                        var userInfoElementContainer = _this.createUserInfoContainer();
                        element.appendChild(userInfoElementContainer);
                        _this.setIntervalId = setInterval(function () {
                            var randomPosition = Math.floor((Math.random() * 100) + 1);
                            if (_this.verifyDomStyleChanges()) {
                                location.reload();
                            }
                            else {
                                document.getElementById('user_info_container').style.top = randomPosition + "%";
                                document.getElementById('user_info_container').style.left = 100 - randomPosition + "%";
                            }
                        }, 3000);
                    }
                }
            }
        };
        this.dataArray = [];
        _location.onPopState(function () {
            _this.player.unload();
            _this.player = undefined;
            clearInterval(_this.refreshIntervalId);
        });
        // added check for verification of chrome dev tool open or not
        window.addEventListener('devtoolschange', function (e) {
            _this.devToolStatus = e.detail.open;
            // refresh page here
            if (!e.detail.open) {
                location.reload();
            }
            // if you get value true --> log user activity -- service call
            _this._userActivity.logUserActivity('video-hack', _this.productId);
        });
    }
    VideoViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this._routes.params.subscribe(function (params) {
            _this.productType = Number(params.product_type);
            _this.product_id = Number(params.product_id);
            _this.session_id = params.session_id ? Number(params.session_id) : null;
        });
        // GETTING USER DETAIL
        this._ipService.getUserInfo().subscribe(function (info) {
            _this.user_ip = info.query;
            _this.user_ip_country = info.country;
        });
        this._authService.getUserProfileDetail().subscribe(function (res) {
            _this.user_email = res.data.users.user.email;
            _this.user_mobile = res.data.users.user.mobile;
        });
        // let pgn_element = document.getElementById('example_pgn_viewer');
        // if (pgn_element) {
        // location.reload();
        // }
        var localWindow = window;
        this.devToolStatus = localWindow.devtools.open;
        if (this.verifyUserBrowser() && !this.devToolStatus) {
            this.getDataFromService();
            this.getUpcomingEvent();
            this.breadcrum.episodeBreadCrumb(this.episode_id);
            this.breadcrum.levelSelectorBreadcrumb(this.productId - 99);
        }
        else {
            // this is case for unknown browser or dev tools open
            // log user activity here - make service call -->
            window.addEventListener('devtoolschange', function (e) {
                _this.devToolStatus = e.detail.open;
                // if you get value true --> log user activity -- service call
                _this._userActivity.logUserActivity('video-hack', _this.productId);
            });
        }
        // logging video details
        this._userActivity.logUserActivity(this.productType === 2 ? 'classroom-video' : this.productType === 6 ? 'camproom-video' : 'unknown-video', this.product_id);
    };
    VideoViewerComponent.prototype.ngAfterViewInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    VideoViewerComponent.prototype.createUserInfoContainer = function () {
        var userInfoElementContainer = document.createElement('div');
        userInfoElementContainer.id = 'user_info_container';
        userInfoElementContainer.style.position = 'absolute';
        userInfoElementContainer.style.top = '15%';
        userInfoElementContainer.style.left = '5%';
        var userInfoElement = document.createElement('div');
        userInfoElement.id = 'user_info_element';
        userInfoElement.style['font-size'] = '1em';
        userInfoElement.style.opacity = this.isVideoOnDesktop() ? '0.6' : '0.9';
        userInfoElement.style.color = 'white';
        var elTextNode = document.createTextNode(this.user_email + ' ' + this.user_mobile);
        userInfoElement.appendChild(elTextNode);
        userInfoElementContainer.appendChild(userInfoElement);
        return userInfoElementContainer;
    };
    ;
    VideoViewerComponent.prototype.resetUserInfoContainerStyle = function (el) {
        el.style.removeProperty('top');
        el.style.removeProperty('bottom');
        el.style.removeProperty('left');
        el.style.removeProperty('right');
    };
    ;
    VideoViewerComponent.prototype.loadScript = function (scriptUrl) {
        return new Promise(function (resolve, reject) {
            var scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.id = 'video_ui_loader';
            scriptElement.onload = resolve;
            scriptElement.onerror = reject;
            document.body.appendChild(scriptElement);
        });
    };
    VideoViewerComponent.prototype.getUpcomingEvent = function () {
        var _this = this;
        this._authService.getUpcomingUserDashboard().subscribe(function (res) {
            _this.UpComingClassRoom = res.data.productList[0].products;
            _this.UpComingLiveRoom = res.data.productList[1].products;
        });
    };
    VideoViewerComponent.prototype.openDashboard = function () {
        this.router.navigateByUrl("/user/dashboard/" + localStorage.getItem('first_name'));
    };
    VideoViewerComponent.prototype.getDataFromService = function () {
        var _this = this;
        // this.product_type = this._videoViewerService.getProductType();
        // this.product_name = this._videoViewerService.getProductName();
        this.product_description = this._videoViewerService.getProductdescription();
        if (this.productType === 2) {
            // classroom
            this.product_type = 'Class Room';
        }
        else if (this.productType === 6) {
            this.product_type = 'Camp Room';
        }
        else {
            this.product_type = 'No Detail';
        }
        if (this.product_type === 'Camp Room') {
            this._authService.getCamproomData().subscribe(function (res) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var analytics;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.dataArray = res.data.products.camproom;
                            this.product_name = this.dataArray[this.getIdIndex(this.product_id)].name;
                            this.product_description = this.dataArray[this.getIdIndex(this.product_id)].description;
                            this.conf.key = '75339520-6b8d-4f3b-8899-3d2f044240d2';
                            this.conf.source.dash = this.dataArray[this.getIdIndex(this.product_id)].dash;
                            this.conf.source.hls = this.dataArray[this.getIdIndex(this.product_id)].hls;
                            this.conf.source.poster = this.dataArray[this.getIdIndex(this.product_id)].poster;
                            return [4 /*yield*/, this.loadScript('https://bitmovin-a.akamaihd.net/bitmovin-player/stable/7.7/bitmovinplayer.js')];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.loadScript('https://bitmovin-a.akamaihd.net/bitmovin-analytics/stable/1/bitmovinanalytics.min.js')];
                        case 2:
                            _a.sent();
                            this.player = window['bitmovin']['player']('player');
                            analytics = window['bitmovin'].analytics({
                                key: '6f7b352c-fc51-4a99-bdea-fc39e3b4cc90',
                                USER_ID: localStorage.getItem('id'),
                                PROJECT_ENVIRONMENT: _environments_environment_staging__WEBPACK_IMPORTED_MODULE_9__["environment"].name,
                                IP_ADDRESS: this.user_ip,
                                VIDEO_ID: "" + this.productId
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
            }); }, function (error) {
            });
        }
        else {
            this._authService.getClassroomData().subscribe(function (res) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var analytics;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.dataArray = res.data.products.classroom;
                            this.product_name = this.dataArray[this.getIdIndex(this.product_id)].name;
                            this.product_description = this.dataArray[this.getIdIndex(this.product_id)].description;
                            this.conf.key = '75339520-6b8d-4f3b-8899-3d2f044240d2';
                            this.conf.source.dash = this.dataArray[this.getIdIndex(this.product_id)].dash;
                            this.conf.source.hls = this.dataArray[this.getIdIndex(this.product_id)].hls;
                            this.conf.source.poster = this.dataArray[this.getIdIndex(this.product_id)].poster;
                            return [4 /*yield*/, this.loadScript('https://bitmovin-a.akamaihd.net/bitmovin-player/stable/7.7/bitmovinplayer.js')];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.loadScript('https://bitmovin-a.akamaihd.net/bitmovin-analytics/stable/1/bitmovinanalytics.min.js')];
                        case 2:
                            _a.sent();
                            this.player = window['bitmovin']['player']('player');
                            analytics = window['bitmovin'].analytics({
                                key: '6f7b352c-fc51-4a99-bdea-fc39e3b4cc90',
                                USER_ID: localStorage.getItem('id'),
                                PROJECT_ENVIRONMENT: _environments_environment_staging__WEBPACK_IMPORTED_MODULE_9__["environment"].name,
                                IP_ADDRESS: this.user_ip,
                                VIDEO_ID: "" + this.productId
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
            }); }, function (error) {
            });
        }
    };
    VideoViewerComponent.prototype.getIdIndex = function (class_id) {
        for (var i = 0; i < this.dataArray.length; i++) {
            if (this.dataArray[i].id === class_id) {
                return i;
            }
        }
    };
    VideoViewerComponent.prototype.ngOnDestroy = function () {
        this.player = undefined;
        clearInterval(this.setIntervalId);
    };
    VideoViewerComponent.prototype.getUserBrowser = function () {
        var localWindow = window;
        var isIE = !!localWindow.documentMode;
        if (!!localWindow.chrome && !!localWindow.chrome.webstore) {
            return 'Chrome';
        }
        if (navigator.userAgent.indexOf('Firefox') != -1) {
            return 'Mozilla Firefox';
        }
        if (navigator.userAgent.toLowerCase().indexOf('safari') != -1) {
            return 'Safari';
        }
        if (!isIE && !!localWindow.StyleMedia) {
            return 'Edge';
        }
        if ((!!localWindow.opr) || !!localWindow.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
            return 'Opera';
        }
        return 'Unknown Browser detected';
    };
    ;
    VideoViewerComponent.prototype.verifyUserBrowser = function () {
        var localWindow = window;
        var isIE = !!localWindow.documentMode;
        var isChrome = !!localWindow.chrome && !!localWindow.chrome.webstore;
        var isFirefox = navigator.userAgent.indexOf('Firefox') != -1;
        var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') != -1;
        var isEdge = !isIE && !!localWindow.StyleMedia;
        var isOpera = (!!localWindow.opr) || !!localWindow.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        return isChrome || isFirefox || isSafari || isEdge || isOpera;
    };
    ;
    VideoViewerComponent.prototype.verifyDomStyleChanges = function () {
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
        return !document.getElementById('user_info_element')
            ||
                (document.getElementById('user_info_element').innerText !== (this.user_email + ' ' + this.user_mobile))
            ||
                (document.getElementById('user_info_element').style.length > 3)
            ||
                (document.getElementById('user_info_element').style['font-size'] !== '1em')
            ||
                (this.isVideoOnDesktop() ? document.getElementById('user_info_element').style['opacity'] !== '0.6' : document.getElementById('user_info_element').style['opacity'] !== '0.9')
            ||
                (document.getElementById('user_info_element').getAttribute('hidden') !== null)
            ||
                (document.getElementById('user_info_element').children.length !== 0)
            ||
                // user info container
                !document.getElementById('user_info_container')
            ||
                (document.getElementById('user_info_container').style.length !== 3)
            ||
                (document.getElementById('user_info_container').style['position'] !== 'absolute')
            ||
                (!document.getElementById('user_info_container').style['top'])
            ||
                (!document.getElementById('user_info_container').style['left'])
            ||
                (document.getElementById('user_info_container').getAttribute('hidden') !== null)
            ||
                (document.getElementById('user_info_container').children.length > 1)
            ||
                (document.getElementById('user_info_container').children[0].id !== 'user_info_element')
            ||
                // level 1 - for css  -- bmpui-id-214
                (!this.isVideoOnDesktop() ? this.onDesktopStyleValidation() : false)
            // now target 3rd party element
            ||
                (getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[0])['z-index'] < 0)
            ||
                (getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[0]).position !== 'absolute')
            ||
                // ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).top !== '0' )
                // ||
                // ( ( ( navigator.userAgent.indexOf('Firefox') != -1 ) || ( navigator.userAgent.toLowerCase().indexOf('safari') != -1 ) ) ? false : ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).left !== '0' ) )
                // ||
                // ( ( ( navigator.userAgent.indexOf('Firefox') != -1 ) || ( navigator.userAgent.toLowerCase().indexOf('safari') != -1 ) ) ? false : ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).right !== '0' ) )
                //  ||
                // ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).margin < '0px' )
                // ||
                (getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[0]).display !== 'block');
    };
    // when screen width changes
    VideoViewerComponent.prototype.onResize = function (event) {
        // location.reload();
    };
    VideoViewerComponent.prototype.isVideoOnDesktop = function () {
        return window.innerWidth > 600;
    };
    VideoViewerComponent.prototype.onDesktopStyleValidation = function () {
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
        return (document.getElementById('bmpui-id-214').style.length > 0)
            ||
                (document.getElementById('bmpui-id-214').getAttribute('hidden') !== null)
            ||
                // first children of above id
                (document.getElementById('bmpui-id-214').children[0]['style'].length > 0)
            ||
                (document.getElementById('bmpui-id-214').children[0].getAttribute('hidden') !== null)
            ||
                // get child of above id -- bmpui-id-201
                (document.getElementById('bmpui-id-201').style.length > 0)
            ||
                (document.getElementById('bmpui-id-201').children[1].id !== 'user_info_container')
            ||
                (document.getElementById('bmpui-id-214').children[0].children[2].id !== 'bmpui-id-201')
            ||
                (document.getElementById('bmpui-id-214').parentElement.nodeName !== 'FIGURE')
            ||
                (document.getElementById('bmpui-id-201').getAttribute('hidden') !== null);
    };
    VideoViewerComponent.ɵfac = function VideoViewerComponent_Factory(t) { return new (t || VideoViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_video_viewer_service__WEBPACK_IMPORTED_MODULE_1__["VideoViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_ip_service__WEBPACK_IMPORTED_MODULE_6__["IpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_7__["BreadCrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_common_user_activity_service__WEBPACK_IMPORTED_MODULE_10__["UserActivityService"])); };
    VideoViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VideoViewerComponent, selectors: [["app-video-viewer"]], hostVars: 2, hostBindings: function VideoViewerComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.VideoViewerComponentClass);
        } }, decls: 6, vars: 4, consts: [[1, "video_detail_container", 3, "resize"], ["class", "error_state", 4, "ngIf"], ["class", "video_detail", 4, "ngIf"], [1, "side_data_display"], ["class", "side_block1", 4, "ngIf"], [1, "error_state"], ["class", "dev_tool", 4, "ngIf"], ["class", "verify_browser", 3, "ngClass", 4, "ngIf"], [1, "dev_tool"], [1, "verify_browser", 3, "ngClass"], [3, "alt", "src", "matTooltip", 4, "ngFor", "ngForOf"], [3, "alt", "src", "matTooltip"], [1, "video_detail"], ["id", "video_player", 1, "video"], ["id", "player"], [1, "detail"], [3, "innerHTML"], [1, "side_block1"], [1, "block_container"], ["class", "block_card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "block_card", 3, "ngClass"], ["draggable", "false", 3, "src"], [1, "block_content"], [1, "heading"], [1, "bottom-section"], [1, "date"], [1, "view_more", 3, "click"]], template: function VideoViewerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function VideoViewerComponent_Template_div_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VideoViewerComponent_div_1_Template, 3, 2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VideoViewerComponent_div_2_Template, 10, 3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, VideoViewerComponent_div_4_Template, 5, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, VideoViewerComponent_div_5_Template, 5, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.devToolStatus || !ctx.verifyUserBrowser());
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.devToolStatus && ctx.verifyUserBrowser());
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.UpComingClassRoom.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.UpComingLiveRoom.length > 0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"]], pipes: [_common_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_14__["EllipsisPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], encapsulation: 2 });
    return VideoViewerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](VideoViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'app-video-viewer',
                templateUrl: './video-viewer.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _video_viewer_service__WEBPACK_IMPORTED_MODULE_1__["VideoViewerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _auth_ip_service__WEBPACK_IMPORTED_MODULE_6__["IpService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_7__["BreadCrumbService"] }, { type: _app_common_user_activity_service__WEBPACK_IMPORTED_MODULE_10__["UserActivityService"] }]; }, { VideoViewerComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/user/video-viewer/video-viewer.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/video-viewer/video-viewer.service.ts ***!
  \***********************************************************/
/*! exports provided: VideoViewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoViewerService", function() { return VideoViewerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var VideoViewerService = /** @class */ (function () {
    function VideoViewerService() {
    }
    VideoViewerService.prototype.setProductType = function (product_type) {
        this.product_type = product_type;
    };
    VideoViewerService.prototype.getProductType = function () {
        return this.product_type;
    };
    VideoViewerService.prototype.setProductId = function (id) {
        this.product_id = id;
    };
    VideoViewerService.prototype.getProductId = function () {
        return this.product_id;
    };
    VideoViewerService.prototype.setProductName = function (product_name) {
        this.product_name = product_name;
    };
    VideoViewerService.prototype.getProductName = function () {
        return this.product_name;
    };
    VideoViewerService.prototype.setHls = function (hls) {
        this.product_hls = hls;
    };
    VideoViewerService.prototype.getHls = function () {
        return this.product_hls;
    };
    VideoViewerService.prototype.setDash = function (dash) {
        this.product_dash = dash;
    };
    VideoViewerService.prototype.getDash = function () {
        return this.product_dash;
    };
    VideoViewerService.prototype.setPoster = function (poster) {
        this.product_poster = poster;
    };
    VideoViewerService.prototype.getPoster = function () {
        return this.product_poster;
    };
    VideoViewerService.prototype.setProductdescription = function (description) {
        this.product_description = description;
    };
    VideoViewerService.prototype.getProductdescription = function () {
        return this.product_description;
    };
    VideoViewerService.ɵfac = function VideoViewerService_Factory(t) { return new (t || VideoViewerService)(); };
    VideoViewerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VideoViewerService, factory: VideoViewerService.ɵfac });
    return VideoViewerService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoViewerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.staging.ts":
/*!*************************************************!*\
  !*** ./src/environments/environment.staging.ts ***!
  \*************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// export const environment = {
//   production: false,
//   name: 'staging',
//   auth_target: 'https://auth.testourwebsite.com/v1/api',
//   auth_target_v2: 'https://auth.testourwebsite.com/v2/api',
//   ip_api: 'https://pro.ip-api.com/json/?key=cW93TeK1B7sNLU6',
// };
var environment = {
    production: false,
    name: 'staging',
    auth_target: 'https://auth.nurtr.com/v1/api',
    auth_target_v2: 'https://auth.nurtr.com/v2/api',
    ip_api: 'https://pro.ip-api.com/json/?key=cW93TeK1B7sNLU6',
};


/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map