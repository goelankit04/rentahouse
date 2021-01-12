(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq-faq-module"],{

/***/ "./src/app/faq/faq-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/faq/faq-routing.module.ts ***!
  \*******************************************/
/*! exports provided: FaqRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqRoutingModule", function() { return FaqRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.component */ "./src/app/faq/faq.component.ts");





var routes = [
    {
        path: "",
        component: _faq_component__WEBPACK_IMPORTED_MODULE_2__["FaqComponent"]
    }
];
var FaqRoutingModule = /** @class */ (function () {
    function FaqRoutingModule() {
    }
    FaqRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FaqRoutingModule });
    FaqRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FaqRoutingModule_Factory(t) { return new (t || FaqRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return FaqRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FaqRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/expansion.js");





var FaqComponent = /** @class */ (function () {
    function FaqComponent(router) {
        this.router = router;
        this.faqComponentClass = 'app-faq';
    }
    FaqComponent.prototype.ngOnInit = function () {
        // if (this.router.url === '/faq') {
        //   localStorage.setItem('background', '#363636');
        // }
    };
    FaqComponent.prototype.s = function () {
        this.router.navigateByUrl('/event');
    };
    FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], hostVars: 2, hostBindings: function FaqComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.faqComponentClass);
        } }, decls: 179, vars: 0, consts: [[1, "faq-container"], [1, "general"], [3, "click"], ["href", "http://nurtr-privacy.s3-website.ap-south-1.amazonaws.com/", "target", "_blank"], ["href", "privacy@nurtr.com", "target", "_top"], ["href", "hello@nurtr.com", "target", "_top"], ["href", "https://www.nurtr.com"], ["href", "mailto:hello@nurtr.com", "target", "_top"], ["href", "mailto:support@nurtr.com"], ["href", "mailto:schools@nurtr.com", "target", "_top"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqComponent_Template_h2_click_2_listener() { return ctx.s(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "General Questions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-accordion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "What is nurtr?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "nurtr is a career discovery platform.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " As we look around ourselves, we find people who feel like complete misfits in their jobs. Data says that a lot of career related decisions even today are being taken based on our perceptions rather than the reality. We are bringing together people, sceintific tools and various other enablers on our platform which allow one to discover, get inspired and be successful in one\u2019s chosen profession(s). ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Who are the people behind nurtr?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " nurtr is being shaped by educationists, technologists and entrepreneurs from IITs, IIMs and INSEAD with decades of experience in transitioning through multiple careers , so we actually felt the pain ourselves and decided to do something about it! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "What is your privacy policy?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Our privacy policy is available at : ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "https://www.nurtr.com/privacy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " . In case you have any questions about our privacy policy, please drop us a mail at ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "privacy@nurtr.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "What if my question has not been answered here, who do I reach out to?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " We are happy to answer any questions that you may have, please drop us a note at ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "hello@nurtr.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "How to earn nurtr's scholarship point and how it can be used?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " nurtr's scholarship point can be earned on select few transaction you make on our website for purchasing any course or for registering in any tournament. Additionally nurtr's scholarship points are also awarded to select few participant upon visiting nurtr's stall setup in the tournament. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "nurtr's scholarship point can be redeemed on our website ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "www.nurtr.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " on the purchase of courses listed inside our Dream Room/Live Room/Class Room/Camp Room and Star Room.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "A maximum of 50% of course value can be redeemed using nurtr's scholarship point. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "What is the validity of nurtr's scholarship point?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " nurtr's scholarship point has a validity of 60 days from the day they are awarded except those which are earned through transaction made for Marathon Room. nurtr's scholarship point earned from Marathon Room transaction has a validity of 1 year from the date they are awarded. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "How to proceed after purchasing 121 room with a mentor?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Once Subscriber has purchased training hours in this Room with a 'Mentor', a mail is sent to the Subscriber to furnish player's details along with the general rules to be observed. Details once received, is shared with the 'Mentor'. If 'Mentor' approves the schedule is fixed for the training as per the mutual comfort of 'Mentor' and 'Player'. If for some reason 'Mentor' is not available to take the classes, nurtr reserve the right to cancel the particular subscription and refund the money.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " *Purchase of training hours does not ensures the training with the mentor ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "What is nurtr's monthly payment policy?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Monthly payment is applicable on selected products. The month's due amount invoice shall be raised by nurtr on the 1st day of every month and the due date for payment shall be the 10th day of the month (\u201CDue Date\u201D). Subscriber shall pay the due-amount as per the invoice raised and mailed to the Subscriber's registered e-mail address. Payment made beyond the Due Date shall incur a late fee. Late fees shall be levied on the monthly due amount only. The late fees shall be applied three times each month; 10% on the 11th day of the month, another 5% on the 18th day of the month and another 5% on 25th day of the month, the late fees shall be applied only on the pending amount. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " In case the subscriber fails to make the payment on or before the 'Due Date', access to the course will be suspended/blocked indefinitely subject to the payment received. Payment once received along with applicable 'late fee', access to the course will be restored for the subscriber with full features. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Who are eligible for nurtr's Moneyback offer?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " The Moneyback offer is available during limited time period and is applicable only on new subscription of Dream Room, Star Room Courses, Live Room, Camp Room & Class Room sessions. The offer is not applicable on EMI/Installment payments, Event Room registrations, 121 Room, & Chessbase/Chess24 combos. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "How is Moneyback calculated and when do I receive my Moneyback?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Moneyback will be calculated as per total money spent on enrolling in various chess courses. It will be credited back to the original source of payment after 15 days of the transaction. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "I am not satisfied with a LIVE course that I have subscribed to. Am I eligible for a refund?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Refund requests for LIVE courses can be raised only if you have not attended more than 2 LIVE sessions (in the case of 52-week programs). For the ChessHour LIVE program, the request can be raised only within 7 days of enrolling in the program. Any refund request beyond this, whatsoever, will not be entertained. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Dream Room");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-accordion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "What is nurtr\u2019s dream room?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " nurtr\u2019s Dream Rooms are skilling courses desiged, developed and run by celebrated professionals. The typical duration of the course would be more than 40 hours. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "What does the dream room course fee include?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " The Dream Room fee includes the fee for lifetime access to the course and other enabling products and services (e.g. books, personalised scholarship eligibility report, access to free skilling webinars, offline workshops etc.) which are getting bundled together\u2013 the enabling tool(s) would vary based on the profession and may be limited by duration. Each successful mentee would also get a specially signed certificate from the mentor. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Will I be able to interact with Dream Room Master Mentor?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " In a typical Dream Room, the celebrity mentors would be taking multiple webinars throughout the year, so yes \u2013 you\u2019d be able to interact with them. If you or your institution would like to invite the mentors to your organization, then please drop us a mail at ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "hello@nurtr.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "What if I don\u2019t like the course content and we are not happy with the process, is there any refund policy?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " In a highly unlikely event of your not liking the course or not finding it relevant, we will be happy to process a refund provided that a written request is received within 7 calendar days of the purchase. Please note that only the requests sent to ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "support@nurtr.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " will be considered for a refund. Telephonic commitment and WhatsApp/SMS requests will not be considered for refunds. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Also, in any case, if you have accessed more than 20% of the course content or received any other enabling tool, we will not be able to process your refund request. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Given that we are a learner-friendly platform & ours is primarily a digital product, we believe our policies are fair to both our consumers as well as our mentors and other eco-system partners. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " There will be no refunds on purchase made during any sale or special offers. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "School");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "mat-accordion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "We would like to invite your team and mentors to our school?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " We hold offline events in various cities in our endeavour to connect with as many mentees as we can while keeping the engagement model scalable. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " We would be happy to hear from you, please drop us a request at ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "hello@nurtr.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Mentors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-accordion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "I want to be a mentor at nurtr, how can I do that?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " We would be happy to receive your request for an invite to be a mentor on nurtr ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " kindly send us your details using the online form: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "https://www.nurtr.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Please note that all our mentors go through a rigorous screening process and signing up is not a guarantee of acceptance. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Education Service Providers / Potential Partners");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "mat-accordion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "I have a product or a service which I believe would be of interest to your students, how can I reach them?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " We would be happy to hear from you, please email us at ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "schools@nurtr.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Prize and Awards");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "mat-accordion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "What is the payment procedure for the winners of nurtr's own Online Tournament and Game Room?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Winners, as selected, as per the existing rules of the tournament are intimated by e-mail and phone call. After, their bank account information is collected in which prize money is to be deposited. Bank account details once furnished by the winners, prize money after deducting taxes and other liabilities will be deposited in the furnished bank account and can take up to a maximum of 4-Week. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"]], encapsulation: 2 });
    return FaqComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { faqComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/faq/faq.module.ts":
/*!***********************************!*\
  !*** ./src/app/faq/faq.module.ts ***!
  \***********************************/
/*! exports provided: FaqModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqModule", function() { return FaqModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq-routing.module */ "./src/app/faq/faq-routing.module.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-material-module */ "./src/app/app-material-module.ts");






var FaqModule = /** @class */ (function () {
    function FaqModule() {
    }
    FaqModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FaqModule });
    FaqModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FaqModule_Factory(t) { return new (t || FaqModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"], _faq_routing_module__WEBPACK_IMPORTED_MODULE_3__["FaqRoutingModule"]]] });
    return FaqModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FaqModule, { declarations: [_faq_component__WEBPACK_IMPORTED_MODULE_2__["FaqComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"], _faq_routing_module__WEBPACK_IMPORTED_MODULE_3__["FaqRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"], _faq_routing_module__WEBPACK_IMPORTED_MODULE_3__["FaqRoutingModule"]],
                declarations: [_faq_component__WEBPACK_IMPORTED_MODULE_2__["FaqComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=faq-faq-module.js.map