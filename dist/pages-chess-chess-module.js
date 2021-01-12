(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chess-chess-module"],{

/***/ "./src/app/pages/chess/chess-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/chess/chess-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessRoutingModule", function() { return ChessRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chess_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chess.component */ "./src/app/pages/chess/chess.component.ts");





var routes = [
    {
        path: '',
        component: _chess_component__WEBPACK_IMPORTED_MODULE_2__["ChessComponent"],
    },
];
var ChessRoutingModule = /** @class */ (function () {
    function ChessRoutingModule() {
    }
    ChessRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChessRoutingModule });
    ChessRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChessRoutingModule_Factory(t) { return new (t || ChessRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ChessRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChessRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChessRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/chess/chess.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/chess/chess.component.ts ***!
  \************************************************/
/*! exports provided: ChessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessComponent", function() { return ChessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_ip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/ip.service */ "./src/app/auth/ip.service.ts");
/* harmony import */ var _components_product_banner_product_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-banner/product-banner.component */ "./src/app/pages/chess/components/product-banner/product-banner.component.ts");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/section/section.component */ "./src/app/pages/chess/components/section/section.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/pages/chess/components/footer/footer.component.ts");











var ChessComponent = /** @class */ (function () {
    function ChessComponent(as, router, _ipService) {
        this.as = as;
        this.router = router;
        this._ipService = _ipService;
        this.courses = [];
        this.popular = [];
        this.arrivals = [];
        this.bannerCardStyles = {
            background: 'linear-gradient(99deg, #2d267b 0%, #a83d3d 100%)',
            height: '328px',
            width: '888px',
        };
        this.cardStyles = {
            background: 'linear-gradient(99deg, #2d267b 0%, #a83d3d 100%)',
            height: '250px',
            width: '440px',
        };
    }
    ChessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ipService.getUserInfo().subscribe(function (result) {
            _this.getCourses(4, result.country); // trending
            _this.getCourses(1, result.country); // popular
        });
    };
    ChessComponent.prototype.getCourses = function (id, country) {
        var _this = this;
        var data = {
            trending_id: id,
            category_id: 1,
            country: localStorage.getItem('country')
                ? localStorage.getItem('country')
                : country,
        };
        this.as.allCourses(data).subscribe(function (res) {
            console.log(res);
            if (id == 1) {
                _this.popular = res;
            }
            else {
                _this.arrivals = res;
            }
        });
    };
    ChessComponent.prototype.sortByPricing = function (product1, product2) {
        if (product1.base_price > product2.base_price) {
            return 1;
        }
        else if (product1.base_price < product2.base_price) {
            return -1;
        }
        else {
            return 0;
        }
    };
    ChessComponent.prototype.contactUs = function () {
        this.router.navigateByUrl('/footer/contact-us');
    };
    ChessComponent.ɵfac = function ChessComponent_Factory(t) { return new (t || ChessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_ip_service__WEBPACK_IMPORTED_MODULE_3__["IpService"])); };
    ChessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChessComponent, selectors: [["app-chess"]], decls: 4, vars: 6, consts: [[3, "title", "cardStyles"]], template: function ChessComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-banner", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer-cricket");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "")("cardStyles", ctx.bannerCardStyles);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Trending Courses")("cardStyles", ctx.cardStyles);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Popular Courses")("cardStyles", ctx.cardStyles);
        } }, directives: [_components_product_banner_product_banner_component__WEBPACK_IMPORTED_MODULE_4__["ProductBannerComponent"], _components_section_section_component__WEBPACK_IMPORTED_MODULE_5__["SectionComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  background-color: black;\n  margin-top: 5em;\n  color: white;\n  padding-top: 2em;\n}\n\n@media screen and (max-width: 830px) {\n  [_nghost-%COMP%] {\n    margin-top: 3em;\n  }\n}\n\n[_nghost-%COMP%]   .contact__sales[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 5em;\n  height: 200px;\n  justify-content: center;\n}\n\n[_nghost-%COMP%]   .contact__sales[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #555555;\n  font-size: 1.3em;\n}\n\n[_nghost-%COMP%]   .contact__sales[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: white;\n  width: 200px;\n  height: 62px;\n  border-radius: 10px;\n  font-size: 0.9em;\n  background-color: #191919;\n  border: none;\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlc3MvY2hlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBTUU7RUFYRjtJQVlJLGVBQWU7RUFGakI7QUFDRjs7QUFYQTtFQWVJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0FBQTNCOztBQXBCQTtFQXVCTSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ3RCOztBQXpCQTtFQTRCTSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGVzcy9jaGVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IDVlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMmVtO1xuICAvLyAubWF0LWRpdmlkZXIge1xuICAvLyAgIGRpc3BsYXk6IGJsb2NrO1xuICAvLyAgIG1hcmdpbjogMDtcbiAgLy8gICBib3JkZXItdG9wLXdpZHRoOiAxcHggc29saWQ7XG4gIC8vICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gIC8vIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODMwcHgpIHtcbiAgICBtYXJnaW4tdG9wOiAzZW07XG4gIH1cbiAgLmNvbnRhY3RfX3NhbGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1ZW07XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGg1IHtcbiAgICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
    return ChessComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chess',
                templateUrl: './chess.component.html',
                styleUrls: ['./chess.component.scss'],
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_ip_service__WEBPACK_IMPORTED_MODULE_3__["IpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/chess/chess.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/chess/chess.module.ts ***!
  \*********************************************/
/*! exports provided: ChessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessModule", function() { return ChessModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _chess_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chess-routing.module */ "./src/app/pages/chess/chess-routing.module.ts");
/* harmony import */ var _chess_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chess.component */ "./src/app/pages/chess/chess.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/pages/chess/components/card/card.component.ts");
/* harmony import */ var _chess_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chess.service */ "./src/app/pages/chess/chess.service.ts");
/* harmony import */ var _product_highlight_product_highlight_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../product-highlight/product-highlight.module */ "./src/app/product-highlight/product-highlight.module.ts");
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/pages/chess/components/footer/footer.component.ts");
/* harmony import */ var ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-scroll-to-el */ "./node_modules/ng2-scroll-to-el/__ivy_ngcc__/index.js");
/* harmony import */ var _components_horizontal_slider_horizontal_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/horizontal-slider/horizontal-slider.component */ "./src/app/pages/chess/components/horizontal-slider/horizontal-slider.component.ts");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/section/section.component */ "./src/app/pages/chess/components/section/section.component.ts");
/* harmony import */ var _components_product_banner_product_banner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/product-banner/product-banner.component */ "./src/app/pages/chess/components/product-banner/product-banner.component.ts");















var ChessModule = /** @class */ (function () {
    function ChessModule() {
    }
    ChessModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChessModule });
    ChessModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChessModule_Factory(t) { return new (t || ChessModule)(); }, providers: [_chess_service__WEBPACK_IMPORTED_MODULE_5__["ChessService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _chess_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChessRoutingModule"],
                _product_highlight_product_highlight_module__WEBPACK_IMPORTED_MODULE_6__["ProductHighlightModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"],
                ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_9__["ScrollToModule"].forRoot(),
            ]] });
    return ChessModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChessModule, { declarations: [_chess_component__WEBPACK_IMPORTED_MODULE_3__["ChessComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _components_horizontal_slider_horizontal_slider_component__WEBPACK_IMPORTED_MODULE_10__["HorizontalSliderComponent"],
        _components_section_section_component__WEBPACK_IMPORTED_MODULE_11__["SectionComponent"],
        _components_product_banner_product_banner_component__WEBPACK_IMPORTED_MODULE_12__["ProductBannerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _chess_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChessRoutingModule"],
        _product_highlight_product_highlight_module__WEBPACK_IMPORTED_MODULE_6__["ProductHighlightModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"], ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_9__["ScrollToModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChessModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _chess_component__WEBPACK_IMPORTED_MODULE_3__["ChessComponent"],
                    _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _components_horizontal_slider_horizontal_slider_component__WEBPACK_IMPORTED_MODULE_10__["HorizontalSliderComponent"],
                    _components_section_section_component__WEBPACK_IMPORTED_MODULE_11__["SectionComponent"],
                    _components_product_banner_product_banner_component__WEBPACK_IMPORTED_MODULE_12__["ProductBannerComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _chess_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChessRoutingModule"],
                    _product_highlight_product_highlight_module__WEBPACK_IMPORTED_MODULE_6__["ProductHighlightModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"],
                    ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_9__["ScrollToModule"].forRoot(),
                ],
                providers: [_chess_service__WEBPACK_IMPORTED_MODULE_5__["ChessService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/chess/chess.service.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/chess/chess.service.ts ***!
  \**********************************************/
/*! exports provided: ChessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessService", function() { return ChessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _product_highlight_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../product-highlight/verify-email/verify-email.component */ "./src/app/product-highlight/verify-email/verify-email.component.ts");
/* harmony import */ var _amplitude_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../amplitude/events */ "./src/app/amplitude/events.ts");
/* harmony import */ var _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../amplitude/amplitude.service */ "./src/app/amplitude/amplitude.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");








var ChessService = /** @class */ (function () {
    function ChessService(dialog, _amps) {
        this.dialog = dialog;
        this._amps = _amps;
        this.popular_courses = [
            {
                title: 'Power Play',
                author: 'Gary Kirsten',
                backgroundColor: '#AA3D3D',
                imgUrl: 'https://assetv2.nurtr.com/images/cricket-page/gary-feature.webp',
                about: 'Ideal for beginners and amateur players',
            },
            {
                title: 'Dream Room',
                author: 'Gary Kirsten',
                backgroundColor: '#3D73AC',
                imgUrl: 'https://assetv2.nurtr.com/images/cricket-page/gary_krst_fl.webp',
                about: 'Ideal for budding cricketers looking to take their game to the next level',
            },
            {
                title: 'Pro',
                author: 'Gary Kirsten',
                backgroundColor: '#6B3DAC',
                imgUrl: 'https://assetv2.nurtr.com/images/cricket-page/gk_bowl.webp',
                about: 'Ideal for semi-pro cricketers seeking personalised guidance',
            },
            {
                title: 'Super Pro',
                author: 'Gary Kirsten',
                backgroundColor: '#229C6E',
                imgUrl: 'https://assetv2.nurtr.com/images/cricket-page/gk_chr.webp',
                about: 'Ideal for academies, trainers and elite players',
            },
        ];
    }
    ChessService.prototype.getCourses = function () {
        return this.popular_courses;
    };
    ChessService.prototype.getCourseInfo = function (name) {
        return this.popular_courses.filter(function (pp) { return pp.title.includes(name); })[0];
    };
    ChessService.prototype.openPopup = function (res) {
        var product = res.data.productList[0];
        this._amps.setAmplitudeEvents(_amplitude_events__WEBPACK_IMPORTED_MODULE_2__["events"].event_9, {
            success: 'yes',
            email: localStorage.getItem('email'),
            country: localStorage.getItem('country'),
            source: 'cricket-page',
        });
        var dialogRef = this.dialog
            .open(_product_highlight_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_1__["VerifyEmailComponent"], {
            width: window.innerWidth > 800 ? '550px' : '90%',
            height: window.innerWidth > 800 ? '27rem' : '60%',
            // autoFocus: false,
            hasBackdrop: true,
            backdropClass: 'dialog-background',
            disableClose: true,
            data: {
                email: localStorage.getItem('email'),
                category: product.category_id,
                productName: product.name,
                productId: product.id,
                productType: product.product_type,
                currency: product.price_detail[0].currency,
                finalPrice: product.price_detail[0].final_price,
                salePrice: product.price_detail[0].sale_price,
                basePrice: product.price_detail[0].base_price,
                priceId: product.price_detail[0].priceId,
            },
        })
            .afterClosed()
            .subscribe(function (res) {
            // this.banner = true;
        });
    };
    ChessService.ɵfac = function ChessService_Factory(t) { return new (t || ChessService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_3__["AmplitudeService"])); };
    ChessService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChessService, factory: ChessService.ɵfac });
    return ChessService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChessService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_3__["AmplitudeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/chess/components/card/card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/chess/components/card/card.component.ts ***!
  \***************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







var CardComponent = /** @class */ (function () {
    function CardComponent(_route, as) {
        this._route = _route;
        this.as = as;
        this.isLoader = false;
    }
    Object.defineProperty(CardComponent.prototype, "cardStyles", {
        get: function () {
            return this._cardStyles;
        },
        set: function (value) {
            console.log(value);
            if (value) {
                this._cardStyles = value;
            }
            else {
                this._cardStyles = "background: 'darkgrey',\n        height: '250px',\n        width: '440px'";
            }
        },
        enumerable: false,
        configurable: true
    });
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.enrollNow = function () {
        this._route.navigateByUrl("product-highlight/{}/{}?cc={}");
    };
    CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-product-card"]], inputs: { cardStyles: "cardStyles", course: "course" }, decls: 11, vars: 1, consts: [[1, "card-container", 3, "ngStyle"], [1, "container"], [1, "img_container"], ["src", "https://nurtr-v2.s3.ap-south-1.amazonaws.com/images/chess-page/rb-ramesh-card.png"], [1, "about"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Chess Gurukul 52-week Program");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "R B Ramesh");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buy Now");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.cardStyles);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: ["[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  margin-left: 1em;\n  position: relative;\n  overflow: hidden;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0px;\n  justify-content: space-between;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .img_container[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 100%;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .img_container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n  justify-content: center;\n  padding-left: 1rem;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: 'Gilroy';\n  font-size: 18px;\n  line-height: 1.2;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: 'Gilroy-SemiBold';\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 1.2rem;\n  color: #131313;\n  font-size: 15px;\n  font-family: 'Gilroy-ExtraBold';\n  background: white;\n  border: 1px;\n  border-radius: 5px;\n  padding: 6px 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlc3MvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFBcEI7O0FBTEE7RUFPTSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiw4QkFBOEI7RUFFOUIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FBQ2xCOztBQWZBO0VBZ0JRLFlBQVk7RUFDWixZQUFZO0FBR3BCOztBQXBCQTtFQW1CVSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFLM0I7O0FBMUJBO0VBeUJRLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBSzFCOztBQW5DQTtFQWlDVSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtBQU0xQjs7QUF6Q0E7RUFzQ1UsZUFBZTtFQUNmLDhCQUE4QjtBQU94Qzs7QUE5Q0E7RUEwQ1Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQVEzQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZXNzL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuY2FyZC1jb250YWluZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgLmltZ19jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5hYm91dCB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3knO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktU2VtaUJvbGQnO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMS4ycmVtO1xuICAgICAgICAgIGNvbG9yOiAjMTMxMzEzO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveS1FeHRyYUJvbGQnO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogMXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMjJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return CardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, { cardStyles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], course: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/chess/components/footer/footer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/chess/components/footer/footer.component.ts ***!
  \*******************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_common_essentials_v2_lazy_load_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app-common/essentials-v2/lazy-load.directive */ "./src/app/app-common/essentials-v2/lazy-load.directive.ts");






function FooterComponent_img_20_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_img_20_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var social_r2 = ctx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.openSocial(social_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var social_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", social_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FooterComponent_div_22_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_div_22_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var link_r7 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.openPage(link_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var link_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r7.name);
} }
function FooterComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FooterComponent_div_22_a_3_Template, 2, 1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r5.sections);
} }
var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.socialMedia = [
            {
                name: 'Facebook',
                image: 'https://assetv2.nurtr.com/images/webp/social_logos/facebook.webp',
                link: 'https://www.facebook.com/nurtrdotcom/cricket',
            },
            {
                name: 'Twitter',
                image: 'https://assetv2.nurtr.com/images/webp/social_logos/twitter.webp',
                link: 'https://twitter.com/nurtrdotcom',
            },
            {
                name: 'LinkedIn',
                image: 'https://assetv2.nurtr.com/images/webp/social_logos/linkedin.webp',
                link: 'https://www.linkedin.com/company/nurtr/about/',
            },
            {
                name: 'YouTube',
                image: 'https://assetv2.nurtr.com/images/webp/social_logos/youtube.webp',
                link: 'https://www.youtube.com/c/nurtrdotcom',
            },
            {
                name: 'Instagram',
                image: 'https://assetv2.nurtr.com/images/webp/social_logos/instagram.webp',
                link: 'https://www.instagram.com/nurtrdotcom/',
            },
        ];
        this.sites = [
            {
                heading: 'Home',
                sections: [
                    { name: 'Chess', link: '/', externalLink: false },
                    { name: 'Cricket', link: '/cricket', externalLink: false },
                ],
            },
            {
                heading: 'About',
                sections: [
                    {
                        name: 'Privacy Policy',
                        link: '/footer/privacy-policy',
                        externalLink: false,
                    },
                    {
                        name: 'Terms of Use',
                        link: '/footer/terms-of-use',
                        externalLink: false,
                    },
                ],
            },
            {
                heading: 'More',
                sections: [
                    { name: 'FAQ', link: '/faq', externalLink: false },
                    { name: 'Blog', link: 'https://blog.nurtr.com/', externalLink: true },
                    { name: 'Contact Us', link: '/footer/contact-us', externalLink: false },
                ],
            },
        ];
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.prototype.openSocial = function (url) {
        window.open(url.link, '_blank');
    };
    FooterComponent.prototype.openPage = function (link) {
        if (link.externalLink) {
            window.open(link.link, '_blank');
        }
        else {
            this.router.navigateByUrl(link.link);
        }
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer-cricket"]], decls: 26, vars: 2, consts: [[1, "footer-upper"], [1, "company_logo"], [0, "xml", "space", "preserve", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "id", "Layer_1", "version", "1.1", "viewBox", "0 0 595.3 200", "x", "0px", "xmlns", "http://www.w3.org/2000/svg", "y", "0px", 2, "enable-background", "new 0 0 595.3 200"], ["type", "text/css"], ["d", "M244,86.7c0-5.1,0.7-9.9,2.2-14.3s3.7-8.3,6.6-11.5c2.9-3.3,6.5-5.8,10.7-7.7c4.2-1.9,9-2.8,14.4-2.8\n          c5.4,0,10.3,0.9,14.6,2.8c4.3,1.9,8,4.4,11,7.7c3,3.3,5.3,7.3,6.9,11.9c1.6,4.6,2.4,9.7,2.4,15.2v49.3c0,1.1-0.2,2.2-0.6,3.2\n          c-0.4,1-1,1.8-1.8,2.5c-0.8,0.7-1.6,1.3-2.6,1.7c-1,0.4-2,0.6-3.2,0.6s-2.2-0.2-3.2-0.6c-1-0.4-1.8-1-2.6-1.7\n          c-0.7-0.7-1.3-1.6-1.7-2.5s-0.6-2-0.6-3.2V88c0-3.2-0.4-6.2-1.2-8.8c-0.8-2.6-2-4.9-3.6-6.7s-3.5-3.3-5.7-4.3\n          c-2.3-1-4.8-1.5-7.6-1.5c-5.6,0-9.9,1.8-13.1,5.4c-3.2,3.6-4.8,8.9-4.8,15.9v49.4c0,1.1-0.2,2.2-0.6,3.2c-0.4,1-1,1.8-1.7,2.5\n          c-0.7,0.7-1.6,1.3-2.6,1.7c-1,0.4-2.1,0.6-3.2,0.6c-1.1,0-2.2-0.2-3.2-0.6c-1-0.4-1.8-1-2.6-1.7c-0.7-0.7-1.3-1.6-1.7-2.5\n          c-0.4-1-0.6-2-0.6-3.2V86.7z", 1, "st90"], ["d", "M328.6,83.6c0-1.1,0.2-2.1,0.6-3.1c0.4-1,1-1.8,1.7-2.5c0.7-0.7,1.5-1.3,2.5-1.7c1-0.4,2-0.6,3.1-0.6\n          c1.1,0,2.1,0.2,3.1,0.6c1,0.4,1.8,1,2.5,1.7c0.7,0.7,1.3,1.5,1.7,2.5c0.4,1,0.6,2,0.6,3.1v28.3c0,2.5,0.5,4.9,1.4,7\n          c0.9,2.1,2.2,4,3.7,5.6c1.6,1.6,3.5,2.8,5.6,3.7c2.1,0.9,4.5,1.4,7,1.4c2.5,0,4.7-0.5,6.7-1.4c2-0.9,3.7-2.2,5.1-3.8\n          c1.4-1.6,2.5-3.5,3.3-5.6c0.8-2.2,1.1-4.5,1.1-7V83.6c0-1.1,0.2-2.1,0.6-3.1c0.4-1,1-1.8,1.8-2.5c0.8-0.7,1.6-1.3,2.6-1.7\n          c1-0.4,2-0.6,3.1-0.6c1.1,0,2.1,0.2,3.1,0.6c1,0.4,1.8,1,2.5,1.7c0.7,0.7,1.2,1.5,1.6,2.5c0.4,1,0.6,2,0.6,3.1v28.1\n          c0,4.7-0.8,9-2.4,13.1c-1.6,4.1-3.9,7.6-6.7,10.7s-6.2,5.5-10.2,7.2c-3.9,1.8-8.2,2.6-12.8,2.6c-4.7,0-9-0.9-13.1-2.6\n          c-4.1-1.8-7.6-4.2-10.7-7.2c-3-3.1-5.4-6.6-7.2-10.7c-1.7-4.1-2.6-8.4-2.6-13.1V83.6z", 1, "st90"], ["d", "M407,112.3c0-5,1-9.7,2.9-14.2c1.9-4.5,4.5-8.3,7.9-11.7c3.3-3.3,7.2-5.9,11.6-7.9s9.1-2.9,14.1-2.9h0.1\n          c2.6,0,4.6,0.7,6.1,2.2c1.4,1.5,2.1,3.4,2.1,5.7c0,1.1-0.2,2.2-0.6,3.2c-0.4,1-1,1.8-1.7,2.5c-0.7,0.7-1.6,1.2-2.6,1.6\n          c-1,0.4-2.1,0.6-3.2,0.6h-0.4c-2.7,0-5.3,0.6-7.7,1.7c-2.5,1.1-4.6,2.5-6.5,4.4c-1.9,1.8-3.3,4-4.5,6.4c-1.1,2.4-1.7,5-1.8,7.9v25\n          c0,1.1-0.2,2.1-0.6,3.1c-0.4,1-1,1.8-1.6,2.5c-0.7,0.7-1.5,1.3-2.5,1.7c-1,0.4-2,0.6-3,0.6c-1.1,0-2.1-0.2-3.1-0.6\n          c-1-0.4-1.8-1-2.6-1.7c-0.8-0.7-1.4-1.5-1.8-2.5c-0.4-1-0.6-2-0.6-3.1V112.3z", 1, "st90"], ["d", "M459.8,63c0-1.1,0.2-2.2,0.6-3.2c0.4-1,1-1.8,1.8-2.5c0.7-0.7,1.6-1.3,2.5-1.7c1-0.4,2-0.6,3.1-0.6\n          c1.1,0,2.1,0.2,3.1,0.6c1,0.4,1.9,1,2.6,1.7c0.8,0.7,1.4,1.6,1.8,2.6c0.5,1,0.7,2,0.7,3.2v11.5h25.1c1.1,0,2.1,0.2,3.1,0.6\n          c1,0.4,1.8,1,2.5,1.7c0.7,0.7,1.3,1.6,1.7,2.5c0.4,1,0.6,2,0.6,3.1c0,1-0.2,2-0.6,3c-0.4,0.9-1,1.7-1.7,2.4\n          c-0.7,0.7-1.6,1.2-2.5,1.6c-1,0.4-2,0.6-3.1,0.6h-25.1V111c0,2.6,0.5,5.1,1.4,7.3c1,2.3,2.3,4.2,3.9,5.9c1.7,1.7,3.6,3,5.9,4\n          c2.3,1,4.7,1.4,7.4,1.4c2.3,0,4.5-0.3,6.5-1c2-0.7,3.9-1.7,5.6-3.2c1-0.8,1.9-1.5,2.8-2c0.9-0.5,2-0.8,3.2-0.8\n          c0.9,0,1.8,0.2,2.6,0.6c0.9,0.4,1.6,0.9,2.3,1.6c0.7,0.7,1.2,1.5,1.6,2.4c0.4,0.9,0.6,1.9,0.6,3c0,1.2-0.2,2.4-0.7,3.6\n          c-0.5,1.1-1.2,2.2-2.1,3.1c-3,2.9-6.4,5-10.2,6.4s-7.8,2.1-12.2,2.1c-4.9,0-9.4-0.9-13.6-2.7c-4.2-1.8-7.9-4.2-11.1-7.4\n          c-3.1-3.1-5.6-6.8-7.5-11c-1.8-4.2-2.7-8.7-2.7-13.6V63z", 1, "st90"], ["d", "M527.8,112.3c0-5,1-9.7,2.9-14.2c1.9-4.5,4.5-8.3,7.9-11.7c3.3-3.3,7.2-5.9,11.6-7.9s9.1-2.9,14.1-2.9h0.1\n          c2.6,0,4.6,0.7,6.1,2.2c1.4,1.5,2.1,3.4,2.1,5.7c0,1.1-0.2,2.2-0.6,3.2c-0.4,1-1,1.8-1.7,2.5c-0.7,0.7-1.6,1.2-2.6,1.6\n          c-1,0.4-2.1,0.6-3.2,0.6h-0.4c-2.7,0-5.3,0.6-7.7,1.7c-2.5,1.1-4.6,2.5-6.5,4.4c-1.9,1.8-3.3,4-4.5,6.4c-1.1,2.4-1.7,5-1.8,7.9v25\n          c0,1.1-0.2,2.1-0.6,3.1c-0.4,1-1,1.8-1.6,2.5c-0.7,0.7-1.5,1.3-2.5,1.7c-1,0.4-2,0.6-3,0.6c-1.1,0-2.1-0.2-3.1-0.6\n          c-1-0.4-1.8-1-2.6-1.7c-0.8-0.7-1.4-1.5-1.8-2.5c-0.4-1-0.6-2-0.6-3.1V112.3z", 1, "st90"], ["d", "M171.7,111.6c0.2-0.1,0.4-0.3,0.5-0.4", 1, "st90"], ["d", "M187.9,91.7C187.9,91.7,187.8,91.7,187.9,91.7c-0.9-10.1-9.3-18-19.6-18c-2.7,0-5.2,0.5-7.5,1.5\n            c-6.9-14.6-23.2-24.9-42.2-24.9c-19,0-35.3,10.3-42.2,24.9c-2.3-1-4.8-1.5-7.5-1.5c-10.3,0-18.7,7.9-19.5,18c0,0,0,0-0.1,0\n            c-14.7,0-26.6,11.9-26.6,26.6c0,14.8,11.7,26.6,27.5,26.6h45.8c-1.7-0.3-3.4-0.6-5.2-1c-7.9-1.8-15.9-5.1-22-10.2\n            c-3.6-0.9-7.2-2.7-10.8-5.6c-0.6-0.7,0-1.4,0.6-2.1c2,1.7,4.1,3,6.3,3.9l4.5,1.4c5.5,1.2,11.4,0.6,17.2-0.7c0.2,0,0.4-0.1,0.5-0.1\n            c0.3-0.5,0.7-0.9,1-1.4c0.3-0.6,0.7-1.1,0.9-1.7c0.2,0,0.4,0.1,0.7,0.1l0.3,0l0.3,0c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6,0\n            c0.2,0,0.4,0,0.6,0l0.6,0l0.6,0l-0.6,0l-0.6,0c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.5-0.1c-0.2,0-0.4,0-0.5-0.1l-0.3,0l-0.3-0.1\n            c-0.4-0.1-0.7-0.2-1.1-0.3c-0.3-0.1-0.7-0.2-1-0.4c-0.3-0.1-0.7-0.3-1-0.5c-0.3-0.2-0.6-0.4-0.9-0.6c-0.3-0.2-0.6-0.4-0.8-0.7\n            c-0.5-0.5-1-1-1.3-1.7c-0.4-0.6-0.7-1.2-0.9-1.9c-0.2-0.7-0.4-1.4-0.5-2.1c-0.1-0.4-0.1-0.7-0.1-1.1c0,0,0,0,0,0\n            c0.1,0.1,0.3,0.2,0.4,0.3c0.2,0.2,0.4,0.3,0.6,0.5c0.2,0.1,0.5,0.3,0.7,0.4c0.5,0.2,1,0.4,1.5,0.6c0.5,0.1,1,0.2,1.5,0.3\n            c0.3,0,0.5,0,0.8,0c0.3,0,0.5,0,0.8-0.1c0.3,0,0.5-0.1,0.8-0.1c0.1,0,0.3-0.1,0.4-0.1c0.1,0,0.2-0.1,0.4-0.1\n            c0.1,0,0.2-0.1,0.4-0.1c0.1,0,0.2-0.1,0.4-0.1c0.2-0.1,0.5-0.2,0.7-0.3c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2l0.3-0.2\n            l0.3-0.2l-0.4,0.1l-0.4,0.1l-0.4,0.1c-0.1,0-0.2,0.1-0.4,0.1c-0.2,0.1-0.4,0.1-0.6,0.2c0-0.4,0.1-0.8,0.2-1.3\n            c0.1-0.6,0.3-1.2,0.5-1.8c0.2-0.6,0.6-1.1,1-1.4c0.4-0.4,1-0.6,1.6-0.8c0.6-0.1,1.2-0.2,1.8-0.1c0.6,0,1.3,0.1,1.9,0.2\n            c0.3,0.1,0.6,0.1,0.9,0.2c-0.2,0.1-0.3,0.3-0.5,0.4c-0.4,0.4-0.7,0.9-0.9,1.4c-0.2,0.5-0.3,1.1-0.2,1.7c0.1,0.6,0.2,1.1,0.4,1.6\n            l0.1,0.2c0,0.1,0,0.1,0.1,0.2c0,0.1,0.1,0.2,0.1,0.3c0.1,0.2,0.1,0.5,0.2,0.7c0.1,0.5,0.1,1,0.1,1.4c0,0.5-0.1,1-0.2,1.4\n            c-0.1,0.2-0.1,0.5-0.2,0.7c-0.1,0.2-0.2,0.5-0.3,0.7c-0.1,0.2-0.2,0.4-0.3,0.7c-0.1,0.2-0.2,0.4-0.4,0.6c-0.3,0.4-0.6,0.8-0.9,1.2\n            c-0.3,0.4-0.7,0.7-1.1,1c-0.2,0.2-0.4,0.4-0.7,0.5c4.3-0.8,8.3-2.7,12.3-4.4l0,0c-0.2-0.1-0.3-0.2-0.5-0.3\n            c-0.2-0.1-0.3-0.2-0.5-0.3c-0.2-0.1-0.3-0.2-0.5-0.3l-0.2-0.2l-0.2-0.2c-0.3-0.2-0.6-0.4-0.9-0.7c-0.3-0.2-0.5-0.5-0.8-0.8\n            c-0.2-0.3-0.5-0.5-0.7-0.8c-0.2-0.3-0.4-0.6-0.6-0.9c-0.2-0.3-0.3-0.6-0.5-1c-0.3-0.7-0.5-1.4-0.6-2.1c-0.1-0.7-0.1-1.4-0.1-2.2\n            c0.1-0.7,0.2-1.4,0.4-2.1c0.1-0.4,0.2-0.7,0.3-1c0,0,0,0,0,0c0.1,0.2,0.1,0.3,0.2,0.5c0.1,0.2,0.3,0.5,0.4,0.7\n            c0.2,0.2,0.3,0.4,0.5,0.6c0.3,0.4,0.7,0.8,1.1,1.1c0.4,0.3,0.9,0.6,1.3,0.9c0.2,0.1,0.5,0.2,0.7,0.3c0.2,0.1,0.5,0.2,0.7,0.3\n            c0.2,0.1,0.5,0.1,0.8,0.2c0.1,0,0.3,0.1,0.4,0.1c0.1,0,0.3,0,0.4,0.1c0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4,0c0.3,0,0.5,0,0.8,0\n            c0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4,0l0.4,0l0.4,0l-0.4,0l-0.4,0l-0.4,0c-0.1,0-0.3,0-0.4,0c-0.2,0-0.5-0.1-0.7-0.1\n            c-0.1,0-0.2,0-0.4-0.1c-0.1,0-0.2-0.1-0.4-0.1c0-0.1,0-0.1,0-0.2c0.1-0.6,0.3-1.3,0.5-1.8c0.2-0.6,0.6-1.1,1-1.5\n            c0.4-0.4,1-0.6,1.6-0.8c0.6-0.1,1.2-0.2,1.9-0.1c0.6,0,1.3,0.1,1.9,0.2c0.3,0.1,0.6,0.1,0.9,0.2c-0.2,0.1-0.3,0.3-0.5,0.4\n            c-0.4,0.4-0.7,0.9-1,1.4c-0.2,0.5-0.3,1.1-0.2,1.7c0.1,0.6,0.2,1.1,0.4,1.6l0.1,0.2c0,0.1,0,0.1,0.1,0.2c0,0.1,0.1,0.2,0.1,0.3\n            c0.1,0.2,0.1,0.5,0.2,0.7c0.1,0.5,0.1,1,0.1,1.5c0,0.5-0.1,1-0.2,1.5c-0.1,0.2-0.1,0.5-0.2,0.7c-0.1,0.2-0.2,0.5-0.3,0.7\n            c-0.1,0.2-0.2,0.5-0.3,0.7c-0.1,0.2-0.2,0.4-0.4,0.6c-0.3,0.4-0.6,0.8-0.9,1.2c-0.3,0.4-0.7,0.7-1.1,1.1c-0.4,0.3-0.8,0.6-1.2,0.9\n            c-0.8,0.6-1.7,1.1-2.7,1.5c-0.5,0.2-1,0.4-1.4,0.5c-0.5,0.2-1,0.3-1.5,0.4l-5.1,3.3c0,0,0,0,0.1,0c0.5-0.4,1-0.8,1.5-1.2\n            c0.5-0.5,0.9-0.9,1.4-1.4c0.9-1,1.7-2,2.4-3.2c-3.8,1.1-7.8,1.8-11.4,3.6c-2,0.6-3.9,1.3-5.9,1.8c-0.7,0.2-1.3,0.4-2,0.5l-2.6,1.7\n            c0,0,0,0,0.1,0c0.5-0.4,1-0.8,1.4-1.2c0.1-0.1,0.1-0.1,0.2-0.2c-3.7,0.8-7.4,1.3-11.1,1c0.8,0.5,1.6,1,2.5,1.5\n            c-0.1-0.3-0.2-0.5-0.1-0.8c2.2,1.4,6.6,4,14.8,4.1c1.5,0,3,0.1,4.5,0.1c11.5,0.5,22-3.4,31.2-10c-2.3-1.1-3.9-2.5-4.9-4.1\n            c-1-0.6-2-1.2-3-2c0.6,0,0.6-0.7,1-0.7c0.3,0.2,0.7,0.4,1,0.5c-0.5-1.7-0.4-3.4,0.3-4.8c1.6-3.5-1.7-4.9-1.7-4.9\n            c7.5-1.9,8.7,1.2,8.8,6.1c-0.1-0.2-0.2-0.4-0.3-0.6c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.2-0.2-0.4-0.3-0.7\n            l-0.1-0.3l-0.1-0.3c0,0.1,0.1,0.2,0.1,0.4l0.1,0.4c0.1,0.2,0.1,0.5,0.2,0.7c0.1,0.2,0.2,0.5,0.3,0.7c0.1,0.2,0.2,0.5,0.3,0.7\n            c0.1,0.2,0.2,0.4,0.4,0.7c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.3c0.3,0.4,0.6,0.8,0.9,1.2c0.2,0.2,0.4,0.4,0.5,0.5\n            c0.2,0.2,0.4,0.3,0.6,0.5c0.4,0.3,0.8,0.6,1.3,0.8c0.2,0.1,0.5,0.2,0.7,0.3c0.1,0,0.2,0.1,0.3,0.1c1.3-1.2,2.6-2.5,3.9-3.8\n            c-1,2-2.2,3.8-3.5,5.4c6,0.1,12.1-1.4,17.7-3.3c1-0.2,2.1-0.5,3.1-0.6c0.2,0,0.3,0.1,0.4,0.2c-1.1,0.8-2.2,1.5-3.3,2\n            c-6,2.3-13,4.3-19.6,3.8c-0.4,0.4-0.8,0.8-1.2,1.2c1.1,1.8,2.3,2.8,2.3,2.8l-2.5-1.4c-0.3-0.1-0.6-0.2-0.9-0.3\n            c-8.7,7.6-20.9,10.2-31.8,10.9c-1.5,0.1-4.5,0.4-6.1,0.4c1.5,0.4,3,0.7,4.5,1c15,3.3,30.7,2.6,45.5-3c1.7-0.5,3.4-1.1,5.1-1.9\n            c11-4.7,21.1-13.6,25.7-26c-18,12.9-33.8,7.2-38.7-2.6c-3.1-6.2-8-6-10.7-5.3c0,0,0,0,0,0c0.2,0.3,0.3,0.8,0.5,1.1\n            c0.2,0.2,0.4,0.4,0.6,0.6c0.2,0.2,0.3,0.6,0.1,0.8c-0.1,0.2-0.4,0.2-0.6,0.1c-0.2-0.1-0.3-0.3-0.4-0.5c0-0.1-0.1-0.2-0.2-0.3\n            c-0.1-0.1-0.2-0.1-0.2-0.2c-0.3-0.2-0.3-0.9-0.6-1.1c-0.1-0.1-0.3-0.1-0.4-0.2c0,0,0,0,0,0c-0.4,0.2-0.7,0.3-0.7,0.3\n            c0.1-0.2,0.2-0.4,0.3-0.6c0,0-0.1,0-0.1,0c-0.2-0.1-0.5-0.1-0.7-0.2c-0.1,0-0.3-0.1-0.3-0.2c-0.2,0-0.4,0.4-0.7,0.3\n            c-0.1,0-0.1-0.1-0.1-0.1c-0.1-0.2-0.2-0.5-0.1-0.7c0-0.3,0.2-0.5,0.4-0.6c0.2-0.1,0.5,0,0.6,0.2c0.1,0.1,0.1,0.1,0.2,0.2\n            c0.1,0,0.2-0.1,0.3-0.1c0.3-0.1,0.6,0.3,0.9,0.5c7.9-16,15.6-14,24.8-7.1c-0.1,0-0.3,0.1-0.4,0.1c-0.6,0.1-1.2,0.2-1.9,0.3\n            c-0.3,0-0.6,0.1-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1c-0.6,0-1.3,0.1-1.9,0.1l-1,0l-1,0c0.3,0.1,0.6,0.1,0.9,0.1l0.9,0.1\n            c0.6,0.1,1.3,0.1,1.9,0.2c0.6,0,1.3,0.1,1.9,0c0.6,0,1.3,0,1.9-0.1c0.6-0.1,1.3-0.1,1.9-0.2c0.3,0,0.6-0.1,1-0.2\n            c0.3-0.1,0.6-0.1,1-0.2c1.3-0.3,2.5-0.7,3.7-1.1c0.6-0.2,1.2-0.5,1.8-0.8c0.6-0.3,1.2-0.6,1.7-0.9c1.1-0.7,2.2-1.4,3.2-2.3\n            c0.5-0.4,1-0.9,1.5-1.3c0.5-0.5,0.9-1,1.3-1.5c0.4-0.5,0.8-1,1.2-1.6c0.1-0.1,0.2-0.3,0.3-0.4c0.1,0.1,0.2,0.3,0.3,0.4\n            c0.3,0.6,0.6,1.2,0.9,1.8c0.3,0.6,0.5,1.2,0.7,1.9c0.2,0.6,0.3,1.3,0.5,1.9c0.2,1.3,0.3,2.6,0.1,3.9c-0.1,0.7-0.2,1.3-0.3,1.9\n            c-0.2,0.6-0.4,1.3-0.6,1.9c-0.2,0.6-0.5,1.2-0.8,1.8c-0.3,0.6-0.7,1.2-1.1,1.7c-0.2,0.3-0.4,0.6-0.6,0.8c-0.2,0.3-0.4,0.5-0.6,0.8\n            l-0.3,0.4c-0.1,0.1-0.2,0.3-0.3,0.4c-0.2,0.3-0.5,0.5-0.7,0.8c-0.2,0.2-0.5,0.5-0.7,0.7l-0.8,0.7c-0.3,0.2-0.5,0.5-0.8,0.7\n            l-0.8,0.7c-0.5,0.4-1.1,0.9-1.6,1.3l-0.8,0.6c-0.3,0.2-0.6,0.4-0.9,0.6c0.3-0.2,0.6-0.3,0.9-0.5c0.3-0.2,0.6-0.3,0.9-0.5\n            c0.6-0.3,1.2-0.7,1.8-1.1c0.6-0.4,1.2-0.8,1.7-1.2l0.8-0.6c0.3-0.2,0.6-0.4,0.8-0.7c0.3-0.2,0.5-0.5,0.8-0.7\n            c0.2-0.1,0.3-0.3,0.5-0.5c9.5,3.3,16.8,1.7,16.8,1.7l-7,2.8c-0.2,0.1-0.4,0.3-0.5,0.4c-2.9,15.5-15.5,24-27.9,28.9\n            c-1.9,0.7-3.7,1.4-5.6,2c-4.5,1.2-9,2.2-13.6,2.9H187c15.8,0,27.5-11.8,27.5-26.6C214.5,103.6,202.6,91.7,187.9,91.7z M90.1,119.2\n            C90.1,119.2,90.1,119.2,90.1,119.2c-0.1,0-0.3,0.1-0.4,0.1c-0.2,0-0.5,0.1-0.7,0.1c-0.2,0-0.5,0-0.7,0c-0.5,0-1,0-1.5-0.1\n            c-0.2,0-0.5-0.1-0.7-0.1c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.6-0.1-1.2-0.1-1.7c0-0.7,0.1-1.4,0.3-2.1c0.1-0.3,0.2-0.7,0.3-1\n            c0,0,0,0,0,0c0.1,0.2,0.2,0.3,0.2,0.4c0.1,0.2,0.3,0.4,0.4,0.7c0.2,0.2,0.3,0.4,0.5,0.6c0.3,0.4,0.7,0.7,1.2,1\n            c0.4,0.3,0.9,0.6,1.3,0.8c0.2,0.1,0.4,0.2,0.5,0.2C90.2,118.3,90.1,118.7,90.1,119.2z M128.1,116.7c0.2,0.1,0.5,0.1,0.7,0.1\n            c0.5,0.1,1,0.1,1.5,0.1c0.3,0,0.5,0,0.8-0.1c0.3,0,0.5-0.1,0.8-0.1c0.2-0.1,0.5-0.1,0.7-0.2c0.1,0,0.1,0,0.2-0.1\n            c0,0.1,0,0.1,0,0.2c0,0.3-0.1,0.5-0.2,0.8c-0.1,0.2-0.1,0.5-0.2,0.7c-0.1,0.2-0.2,0.5-0.3,0.7c-0.2,0.4-0.5,0.9-0.9,1.2\n            c-0.2,0.2-0.4,0.4-0.6,0.5c-0.2,0.2-0.4,0.3-0.6,0.4c-0.2,0.1-0.5,0.2-0.7,0.4c0,0,0,0,0,0c-0.1-0.1-0.3-0.3-0.4-0.4\n            c-0.2-0.2-0.3-0.4-0.5-0.5c-0.1-0.1-0.2-0.2-0.3-0.4c0-0.2,0-0.5,0-0.7c0-0.6,0-1.1-0.1-1.7c0-0.3-0.1-0.6-0.1-1\n            C128.1,116.7,128.1,116.7,128.1,116.7z", 1, "st90"], ["d", "M111.5,113.1c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5\n            C111.3,113.6,111.5,113.4,111.5,113.1z", 1, "st90"], ["d", "M95,115c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C94.8,115.5,95,115.3,95,115z", 1, "st90"], ["d", "M123.2,113.6c-0.2,0.1-0.3,0.4-0.2,0.6c0.1,0.2,0.4,0.3,0.6,0.2c0.2-0.1,0.3-0.4,0.2-0.6\n            C123.6,113.6,123.4,113.5,123.2,113.6z", 1, "st90"], ["d", "M127.7,96.3c-0.1,0.6,0.3,1.2,0.8,1.3c0.6,0.1,1.2-0.3,1.3-0.8c0.1-0.6-0.3-1.2-0.8-1.3\n                  C128.4,95.4,127.9,95.8,127.7,96.3z", 1, "st90"], [1, "socail_media"], ["appLazyLoad", "", 3, "src", "click", 4, "ngFor", "ngForOf"], [1, "site-map-footer"], ["class", "site_section", 4, "ngFor", "ngForOf"], [1, "footer-line"], ["appLazyLoad", "", 3, "src", "click"], [1, "site_section"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "style", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " .st90 { fill: white; } ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FooterComponent_img_20_Template, 1, 1, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FooterComponent_div_22_Template, 4, 2, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00A92019-20 ThoughtRoots India Private Limited. All Rights Reserved");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.socialMedia);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sites);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _app_common_essentials_v2_lazy_load_directive__WEBPACK_IMPORTED_MODULE_3__["LazyLoadDirective"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 1em 0 1em 0;\n}\n\n[_nghost-%COMP%]   .footer-upper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n[_nghost-%COMP%]   .footer-upper[_ngcontent-%COMP%]   .company_logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n}\n\n[_nghost-%COMP%]   .footer-upper[_ngcontent-%COMP%]   .company_logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 10em;\n}\n\n[_nghost-%COMP%]   .footer-upper[_ngcontent-%COMP%]   .company_logo[_ngcontent-%COMP%]   .socail_media[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n[_nghost-%COMP%]   .footer-upper[_ngcontent-%COMP%]   .company_logo[_ngcontent-%COMP%]   .socail_media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 12px;\n  border-radius: 50%;\n  width: 2em;\n  height: 2em;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   .footer-upper[_ngcontent-%COMP%]   .site-map-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 2;\n}\n\n[_nghost-%COMP%]   .footer-upper[_ngcontent-%COMP%]   .site-map-footer[_ngcontent-%COMP%]   .site_section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 2em;\n}\n\n[_nghost-%COMP%]   .footer-upper[_ngcontent-%COMP%]   .site-map-footer[_ngcontent-%COMP%]   .site_section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #4d4c4c;\n  font-size: 1.1em;\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]   .footer-upper[_ngcontent-%COMP%]   .site-map-footer[_ngcontent-%COMP%]   .site_section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  color: #b3b2b2;\n  font-size: 1.2em;\n  font-weight: 400;\n  margin-bottom: 14px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  line-height: 20px;\n}\n\n@media screen and (min-width: 320px) and (max-width: 362px) {\n  [_nghost-%COMP%]   .footer-upper[_ngcontent-%COMP%]   .site-map-footer[_ngcontent-%COMP%]   .site_section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n\n[_nghost-%COMP%]   .footer-line[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n\n[_nghost-%COMP%]   .footer-line[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.2em;\n  opacity: 0.5;\n}\n\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    padding-top: 2em;\n  }\n  [_nghost-%COMP%]   .footer-upper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n  [_nghost-%COMP%]   .footer-upper[_ngcontent-%COMP%]   .site-map-footer[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  [_nghost-%COMP%]   .footer-upper[_ngcontent-%COMP%]   .site-map-footer[_ngcontent-%COMP%]   .site_section[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlc3MvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFEdEI7O0FBRkE7RUFNSSxhQUFhO0VBQ2IsbUJBQW1CO0FBQXZCOztBQVBBO0VBVU0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUN6Qjs7QUFmQTtFQWlCUSxXQUFXO0FBRW5COztBQW5CQTtFQW9CUSxhQUFhO0VBQ2IsbUJBQW1CO0FBRzNCOztBQXhCQTtFQXVCVSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtBQUt6Qjs7QUFoQ0E7RUFpQ00sYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixPQUFPO0FBR2I7O0FBdENBO0VBc0NRLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFJcEI7O0FBN0NBO0VBNENVLHlCQUF5QjtFQUN6QixjQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBSzFCOztBQXBEQTtFQWtEVSwwQkFBMEI7RUFDMUIsY0FBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQU0zQjs7QUFKUTtFQTFEUjtJQTREWSxjQUFjO0VBT3hCO0FBQ0Y7O0FBcEVBO0VBb0VJLGNBQWM7QUFJbEI7O0FBeEVBO0VBc0VNLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtBQU1sQjs7QUFGRTtFQTVFRjtJQTZFSSxnQkFBZ0I7RUFNbEI7RUFuRkY7SUFnRk0sYUFBYTtJQUNiLDhCQUE4QjtFQU1sQztFQXZGRjtJQW9GUSxlQUFlO0VBTXJCO0VBMUZGO0lBdUZVLFVBQVU7RUFNbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZXNzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtb2JpbGU6ICc3NjhweCc7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMWVtIDAgMWVtIDA7XG5cbiAgLmZvb3Rlci11cHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgLmNvbXBhbnlfbG9nbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxMGVtO1xuICAgICAgfVxuICAgICAgLnNvY2FpbF9tZWRpYSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWFyZ2luOiAxMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB3aWR0aDogMmVtO1xuICAgICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zaXRlLW1hcC1mb290ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4OiAyO1xuXG4gICAgICAuc2l0ZV9zZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDJlbTtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBjb2xvcjogbGlnaHRlbigjMDAwMDAwLCAzMCUpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICBjb2xvcjogbGlnaHRlbigjMDAwMDAwLCA3MCUpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzYycHgpIHtcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mb290ZXItbGluZSB7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgcCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xuXG4gICAgLmZvb3Rlci11cHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXG4gICAgICAuc2l0ZS1tYXAtZm9vdGVyIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIC5zaXRlX3NlY3Rpb24ge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-cricket',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/chess/components/horizontal-slider/horizontal-slider.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/chess/components/horizontal-slider/horizontal-slider.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: HorizontalSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalSliderComponent", function() { return HorizontalSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var _c0 = ["*"];
var HorizontalSliderComponent = /** @class */ (function () {
    function HorizontalSliderComponent() {
    }
    HorizontalSliderComponent.prototype.ngOnInit = function () { };
    HorizontalSliderComponent.ɵfac = function HorizontalSliderComponent_Factory(t) { return new (t || HorizontalSliderComponent)(); };
    HorizontalSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HorizontalSliderComponent, selectors: [["app-horizontal-slider"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "slider", "full", "no-scrollbar"]], template: function HorizontalSliderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["[_nghost-%COMP%]   .slider[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 10px;\n  grid-template-rows: minmax(150px, 1fr);\n  grid-auto-flow: column;\n  overflow-x: scroll;\n  -ms-scroll-snap-type: x proximity;\n      scroll-snap-type: x proximity;\n  margin-bottom: calc(-0.25 * 20px);\n  padding-bottom: calc(0.75 * 20px);\n}\n\n[_nghost-%COMP%]   .slider[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .slider[_ngcontent-%COMP%]:after {\n  content: '';\n  width: 10px;\n}\n\n[_nghost-%COMP%]   .slider[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], [_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  scroll-snap-align: center;\n  padding: calc(20px / 2 * 1.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 8px;\n}\n\n[_nghost-%COMP%]   .no-scrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  margin-bottom: 0;\n}\n\n[_nghost-%COMP%]   .no-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlc3MvY29tcG9uZW50cy9ob3Jpem9udGFsLXNsaWRlci9ob3Jpem9udGFsLXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQWE7RUFDYixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLHNDQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlDQUE2QjtNQUE3Qiw2QkFBNkI7RUFDN0IsaUNBQWlDO0VBQ2pDLGlDQUFpQztBQUFyQzs7QUFWQTs7RUFlSSxXQUFXO0VBQ1gsV0FBVztBQUFmOztBQWhCQTs7RUFxQkkseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUF0Qjs7QUE1QkE7RUFnQ0kscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUFwQjs7QUFqQ0E7RUFvQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZXNzL2NvbXBvbmVudHMvaG9yaXpvbnRhbC1zbGlkZXIvaG9yaXpvbnRhbC1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5zbGlkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDE1MHB4LCAxZnIpO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggcHJveGltaXR5O1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGMoLTAuMjUgKiAyMHB4KTtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygwLjc1ICogMjBweCk7XG4gIH1cblxuICAuc2xpZGVyOmJlZm9yZSxcbiAgLnNsaWRlcjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cblxuICAuc2xpZGVyID4gKixcbiAgLml0ZW0ge1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogY2FsYygyMHB4IC8gMiAqIDEuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cblxuICAubm8tc2Nyb2xsYmFyIHtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAubm8tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"] });
    return HorizontalSliderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorizontalSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-horizontal-slider',
                templateUrl: './horizontal-slider.component.html',
                styleUrls: ['./horizontal-slider.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/chess/components/product-banner/product-banner.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/chess/components/product-banner/product-banner.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBannerComponent", function() { return ProductBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _horizontal_slider_horizontal_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../horizontal-slider/horizontal-slider.component */ "./src/app/pages/chess/components/horizontal-slider/horizontal-slider.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




var ProductBannerComponent = /** @class */ (function () {
    function ProductBannerComponent() {
    }
    ProductBannerComponent.prototype.ngOnInit = function () { };
    ProductBannerComponent.ɵfac = function ProductBannerComponent_Factory(t) { return new (t || ProductBannerComponent)(); };
    ProductBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductBannerComponent, selectors: [["app-product-banner"]], inputs: { cardStyles: "cardStyles" }, decls: 21, vars: 1, consts: [[1, "card-container", 3, "ngStyle"], [1, "container"], [1, "img_container"], ["src", "https://nurtr-v2.s3.ap-south-1.amazonaws.com/images/chess-page/rb-ramesh-card.png"], [1, "about"], [1, "main"], [1, "contain"], [1, "pricing"]], template: function ProductBannerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-horizontal-slider");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Chess Gurukul 52-week Training Program");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "GM RB Ramesh");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "16th Feb 2019 to 2nd Feb 2020");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "52 Sessions, 90 minutes/session");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Rs. 14000");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Buy Now");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.cardStyles);
        } }, directives: [_horizontal_slider_horizontal_slider_component__WEBPACK_IMPORTED_MODULE_1__["HorizontalSliderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  margin-left: 1em;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 4rem;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0px;\n  justify-content: space-between;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .img_container[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 100%;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .img_container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n  justify-content: center;\n  padding-left: 1rem;\n  padding-right: 3rem;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: 'Gilroy';\n  width: 350px;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: 'Gilroy-ExtraBold';\n  margin: 1rem 0;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  justify-content: space-between;\n  display: flex;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .contain[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0px;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 1.2rem;\n  color: #131313;\n  font-size: 15px;\n  font-family: 'Gilroy-ExtraBold';\n  background: white;\n  border: 1px;\n  border-radius: 5px;\n  padding: 6px 22px;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  font-size: 28px;\n  font-family: 'Gilroy-SemiBold';\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 35px;\n  font-size: 20px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlc3MvY29tcG9uZW50cy9wcm9kdWN0LWJhbm5lci9wcm9kdWN0LWJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFBdkI7O0FBTkE7RUFRTSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiw4QkFBOEI7RUFFOUIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FBQ2xCOztBQWhCQTtFQWlCUSxZQUFZO0VBQ1osWUFBWTtBQUdwQjs7QUFyQkE7RUFvQlUsV0FBVztFQUNYLFlBQVk7QUFLdEI7O0FBMUJBO0VBeUJRLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUszQjs7QUFwQ0E7RUFpQ1UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0FBT3RCOztBQTFDQTtFQXNDVSwrQkFBK0I7RUFDL0IsY0FBYztBQVF4Qjs7QUEvQ0E7RUEwQ1UscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsV0FBVztBQVNyQjs7QUF0REE7RUFnRGMsa0JBQWtCO0FBVWhDOztBQTFEQTtFQW9EWSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBVTdCOztBQXJFQTtFQStEYyxlQUFlO0VBQ2YsOEJBQThCO0FBVTVDOztBQTFFQTtFQW1FYyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFXN0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGVzcy9jb21wb25lbnRzL3Byb2R1Y3QtYmFubmVyL3Byb2R1Y3QtYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuY2FyZC1jb250YWluZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAuaW1nX2NvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmFib3V0IHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveSc7XG4gICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveS1FeHRyYUJvbGQnO1xuICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgICB9XG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgLmNvbnRhaW4ge1xuICAgICAgICAgICAgcDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS4ycmVtO1xuICAgICAgICAgICAgY29sb3I6ICMxMzEzMTM7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveS1FeHRyYUJvbGQnO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAyMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJpY2luZyB7XG4gICAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveS1TZW1pQm9sZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDM1cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return ProductBannerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-banner',
                templateUrl: './product-banner.component.html',
                styleUrls: ['./product-banner.component.scss'],
            }]
    }], function () { return []; }, { cardStyles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/chess/components/section/section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/chess/components/section/section.component.ts ***!
  \*********************************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _horizontal_slider_horizontal_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../horizontal-slider/horizontal-slider.component */ "./src/app/pages/chess/components/horizontal-slider/horizontal-slider.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/card.component */ "./src/app/pages/chess/components/card/card.component.ts");




var SectionComponent = /** @class */ (function () {
    function SectionComponent() {
        this.title = '';
    }
    SectionComponent.prototype.ngOnInit = function () { };
    SectionComponent.ɵfac = function SectionComponent_Factory(t) { return new (t || SectionComponent)(); };
    SectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionComponent, selectors: [["app-section"]], inputs: { cardStyles: "cardStyles", title: "title" }, decls: 10, vars: 7, consts: [[1, "section-container"], [3, "cardStyles"]], template: function SectionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-horizontal-slider");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-product-card", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-product-card", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-product-card", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-product-card", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-product-card", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-product-card", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardStyles", ctx.cardStyles);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardStyles", ctx.cardStyles);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardStyles", ctx.cardStyles);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardStyles", ctx.cardStyles);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardStyles", ctx.cardStyles);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardStyles", ctx.cardStyles);
        } }, directives: [_horizontal_slider_horizontal_slider_component__WEBPACK_IMPORTED_MODULE_1__["HorizontalSliderComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: ["[_nghost-%COMP%]   .section-container[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n[_nghost-%COMP%]   .section-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-family: 'Gilroy-ExtraBold';\n  padding: 0 0 0.8em 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlc3MvY29tcG9uZW50cy9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBbUI7QUFBdkI7O0FBRkE7RUFJTSxlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLHdCQUF3QjtBQUU5QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZXNzL2NvbXBvbmVudHMvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuc2VjdGlvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktRXh0cmFCb2xkJztcbiAgICAgIHBhZGRpbmc6IDAgMCAwLjhlbSAxLjVlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return SectionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section',
                templateUrl: './section.component.html',
                styleUrls: ['./section.component.scss'],
            }]
    }], function () { return []; }, { cardStyles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-chess-chess-module.js.map