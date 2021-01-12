(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["examples-examples-module"],{

/***/ "./src/app/user/star-room/dr-functional/examples/base-examples/base-examples.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/user/star-room/dr-functional/examples/base-examples/base-examples.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BaseExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseExamplesComponent", function() { return BaseExamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chess.js */ "./node_modules/chess.js/chess.js");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chess_js__WEBPACK_IMPORTED_MODULE_1__);



var _c0 = ["board"];
var BaseExamplesComponent = /** @class */ (function () {
    function BaseExamplesComponent() {
        this.BaseExamplesComponentClass = 'app-base-examples';
        this._orientation = true;
        this._showNotation = true;
        this._draggable = false;
        this._dropOffBoard = 'snapback';
        this._pieceTheme = 'assets/chessboard/img/chesspieces/wikipedia/{piece}.png';
        this._moveSpeed = 200;
        this._snapbackSpeed = 500;
        this._snapSpeed = 100;
        this._sparePieces = false;
        this._boardSize = '400px';
        this.game = new chess_js__WEBPACK_IMPORTED_MODULE_1__();
        this.animation = true;
        this.animationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.orientationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showNotationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.draggableChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropOffBoardChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pieceThemeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moveSpeedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.snapbackSpeedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.snapSpeedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sparePiecesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOverOnBoard = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.boardClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOutEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // EVENTS
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.snapbackEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moveEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(BaseExamplesComponent.prototype, "BoardSize", {
        set: function (size) {
            this._boardSize = size;
            // this.chessBoard.nativeElement.style.width = size;
            if (document.getElementById('board')) {
                document.getElementById('board').style.width = size;
            }
        },
        enumerable: false,
        configurable: true
    });
    // PARAMETERS
    BaseExamplesComponent.prototype.onResize = function (event) {
        if (this.board) {
            this.board.resize(event);
        }
    };
    BaseExamplesComponent.prototype.onClick = function (event) {
        this.boardClick.emit(event);
    };
    Object.defineProperty(BaseExamplesComponent.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value;
            if (this.board) {
                this.board.position(value, this.animation);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseExamplesComponent.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (value) {
            this._orientation = value;
            if (this.board) {
                this.board.orientation(value ? 'white' : 'black');
            }
            this.orientationChange.emit(this._orientation);
            // console.log(this._orientation, "orientation");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseExamplesComponent.prototype, "showNotation", {
        get: function () {
            return this._showNotation;
        },
        set: function (value) {
            this._showNotation = value;
            if (this.board) {
                this.load();
            }
            this.showNotationChange.emit(this._showNotation);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseExamplesComponent.prototype, "draggable", {
        get: function () {
            return this._draggable;
        },
        set: function (value) {
            this._draggable = value;
            if (this.board) {
                this.load();
            }
            this.draggableChange.emit(this._draggable);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseExamplesComponent.prototype, "dropOffBoard", {
        get: function () {
            return this._dropOffBoard;
        },
        set: function (value) {
            this._dropOffBoard = value;
            if (this.board) {
                this.load();
            }
            this.dropOffBoardChange.emit(this._dropOffBoard);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseExamplesComponent.prototype, "moveSpeed", {
        get: function () {
            return this._moveSpeed;
        },
        set: function (value) {
            this._moveSpeed = value;
            if (this.board) {
                this.load();
            }
            this.moveSpeedChange.emit(this._moveSpeed);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseExamplesComponent.prototype, "snapbackSpeed", {
        get: function () {
            return this._snapbackSpeed;
        },
        set: function (value) {
            this._snapbackSpeed = value;
            if (this.board) {
                this.load();
            }
            this.snapbackSpeedChange.emit(this._snapbackSpeed);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseExamplesComponent.prototype, "snapSpeed", {
        get: function () {
            return this._snapSpeed;
        },
        set: function (value) {
            this._snapSpeed = value;
            if (this.board) {
                this.load();
            }
            this.snapSpeedChange.emit(this._snapSpeed);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseExamplesComponent.prototype, "sparePieces", {
        get: function () {
            return this._sparePieces;
        },
        set: function (value) {
            this._sparePieces = value;
            if (this.board) {
                this.load();
            }
            this.sparePiecesChange.emit(this._sparePieces);
        },
        enumerable: false,
        configurable: true
    });
    // METHODS
    BaseExamplesComponent.prototype.clear = function () {
        this.board.clear(this.animation);
    };
    BaseExamplesComponent.prototype.move = function (notation) {
        this.board.move(notation);
    };
    BaseExamplesComponent.prototype.onChangeHandler = function (oldPos, newPos) {
        this.change.emit({ oldPos: oldPos, newPos: newPos });
    };
    BaseExamplesComponent.prototype.onDragStart = function (source, piece, position, orientation) {
        this.dragStart.emit({ source: source, piece: piece, position: position, orientation: orientation });
    };
    BaseExamplesComponent.prototype.onDragMove = function (newLocation, oldLocation, source, piece, position, orientation) {
        this.dragMove.emit({
            newLocation: newLocation,
            oldLocation: oldLocation,
            source: source,
            piece: piece,
            position: position,
            orientation: orientation,
        });
    };
    BaseExamplesComponent.prototype.onDrop = function (source, target, piece, newPos, oldPos, orientation) {
        this._position = newPos;
        this.positionChange.emit(this._position);
        this.drop.emit({ source: source, target: target, piece: piece, newPos: newPos, oldPos: oldPos, orientation: orientation });
    };
    BaseExamplesComponent.prototype.onSnapbackEnd = function (piece, square, position, orientation) {
        this.snapbackEnd.emit({ piece: piece, square: square, position: position, orientation: orientation });
    };
    BaseExamplesComponent.prototype.onMoveEnd = function (oldPos, newPos) {
        this._position = newPos;
        this.positionChange.emit(this._position);
        this.moveEnd.emit({ oldPos: oldPos, newPos: newPos });
    };
    BaseExamplesComponent.prototype.onMouseoverSquare = function (piece, square) {
        this.mouseOverOnBoard.emit({ piece: piece, square: square });
    };
    BaseExamplesComponent.prototype.onMouseoutSquare = function (piece, square) {
        this.mouseOutEvent.emit({ piece: piece, square: square });
    };
    BaseExamplesComponent.prototype.OnBoardClick = function (event) {
        this.boardClick.emit(event);
    };
    BaseExamplesComponent.prototype.load = function () {
        this.chessBoardConfig = {
            position: this._position ? this._position : this.position,
            orientation: this._orientation ? 'white' : 'black',
            showNotation: this._showNotation,
            draggable: this._draggable,
            pieceTheme: this._pieceTheme,
            dropOffBoard: this._dropOffBoard,
            moveSpeed: this._moveSpeed,
            snapbackSpeed: this._snapbackSpeed,
            snapSpeed: this._snapSpeed,
            sparePieces: this._sparePieces,
            onDragStart: this.onDragStart.bind(this),
            onChange: this.onChangeHandler.bind(this),
            onDragMove: this.onDragMove.bind(this),
            onDrop: this.onDrop.bind(this),
            onSnapbackEnd: this.onSnapbackEnd.bind(this),
            onMoveEnd: this.onMoveEnd.bind(this),
            onMouseoverSquare: this.onMouseoverSquare.bind(this),
            onMouseoutSquare: this.onMouseoutSquare.bind(this),
        };
        this.board = ChessBoard('board', this.chessBoardConfig);
    };
    BaseExamplesComponent.prototype.ngOnInit = function () {
        this.load();
    };
    BaseExamplesComponent.ɵfac = function BaseExamplesComponent_Factory(t) { return new (t || BaseExamplesComponent)(); };
    BaseExamplesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseExamplesComponent, selectors: [["app-base-examples"]], viewQuery: function BaseExamplesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chessBoard = _t.first);
        } }, hostVars: 2, hostBindings: function BaseExamplesComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function BaseExamplesComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("click", function BaseExamplesComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.BaseExamplesComponentClass);
        } }, inputs: { animation: "animation", BoardSize: ["boardSize", "BoardSize"], position: "position", orientation: "orientation", showNotation: "showNotation", draggable: "draggable", dropOffBoard: "dropOffBoard", moveSpeed: "moveSpeed", snapbackSpeed: "snapbackSpeed", snapSpeed: "snapSpeed", sparePieces: "sparePieces" }, outputs: { animationChange: "animationChange", positionChange: "positionChange", orientationChange: "orientationChange", showNotationChange: "showNotationChange", draggableChange: "draggableChange", dropOffBoardChange: "dropOffBoardChange", pieceThemeChange: "pieceThemeChange", moveSpeedChange: "moveSpeedChange", snapbackSpeedChange: "snapbackSpeedChange", snapSpeedChange: "snapSpeedChange", sparePiecesChange: "sparePiecesChange", mouseOverOnBoard: "mouseOverOnBoard", boardClick: "boardClick", mouseOutEvent: "mouseOutEvent", change: "change", dragStart: "dragStart", dragMove: "dragMove", drop: "drop", snapbackEnd: "snapbackEnd", moveEnd: "moveEnd" }, decls: 1, vars: 0, consts: [["id", "board", 3, "click"]], template: function BaseExamplesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaseExamplesComponent_Template_div_click_0_listener($event) { return ctx.OnBoardClick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return BaseExamplesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseExamplesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-base-examples',
                templateUrl: './base-examples.component.html',
            }]
    }], function () { return []; }, { BaseExamplesComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chessBoard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['board']
        }], BoardSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['boardSize']
        }], animationChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], positionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], orientationChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showNotationChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], draggableChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dropOffBoardChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pieceThemeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], moveSpeedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], snapbackSpeedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], snapSpeedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], sparePiecesChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mouseOverOnBoard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], boardClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mouseOutEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dragMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], drop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], snapbackEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], moveEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showNotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dropOffBoard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], moveSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], snapbackSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], snapSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sparePieces: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/user/star-room/dr-functional/examples/examples-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/user/star-room/dr-functional/examples/examples-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ExampleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleRoutingModule", function() { return ExampleRoutingModule; });
/* harmony import */ var _examples_study_examples_study_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples-study/examples-study.component */ "./src/app/user/star-room/dr-functional/examples/examples-study/examples-study.component.ts");
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples.component */ "./src/app/user/star-room/dr-functional/examples/examples.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






var routes = [
    {
        path: ":productId/:level/:episode_id",
        component: _examples_component__WEBPACK_IMPORTED_MODULE_1__["ExamplesComponent"],
        children: [
            {
                path: "example-study/:puzzleId",
                component: _examples_study_examples_study_component__WEBPACK_IMPORTED_MODULE_0__["ExamplesStudyComponent"],
            },
        ],
    },
];
var ExampleRoutingModule = /** @class */ (function () {
    function ExampleRoutingModule() {
    }
    ExampleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ExampleRoutingModule });
    ExampleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ExampleRoutingModule_Factory(t) { return new (t || ExampleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
    return ExampleRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ExampleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ExampleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/star-room/dr-functional/examples/examples-study/examples-study.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/user/star-room/dr-functional/examples/examples-study/examples-study.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ExamplesStudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesStudyComponent", function() { return ExamplesStudyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../app-common/pre-loader/pre-loader.component */ "./src/app/app-common/pre-loader/pre-loader.component.ts");














function ExamplesStudyComponent_app_pre_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-pre-loader");
} }
function ExamplesStudyComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Try visualizing all possible solutions and then click to view solution");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamplesStudyComponent_ng_container_5_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.showSolution(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "View Solution");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.detail);
} }
var ExamplesStudyComponent = /** @class */ (function () {
    function ExamplesStudyComponent(_routes, _authService, router, breadcrum, sanitizer) {
        this._routes = _routes;
        this._authService = _authService;
        this.router = router;
        this.breadcrum = breadcrum;
        this.sanitizer = sanitizer;
        this.ExamplesStudyComponentClass = "app-examples-study";
        this.isSolutionActive = false;
        this.pgn = "{***} 27. Bxf5+ g6 (27... Kh8 28. Qe8+) 28. Qf7+ $1 Kh6 (28... Kh8 29. Bxg6 $1 (29. Be6 $1 Qd8 30. Kxf1 $18) 29... Qh6 30. Kxf1 $18) 29. Bd2 $1 (29. Qg8 $4 gxf5 $19) (29. Bxg6 $1 Qxg6 30. Bd2+ $1 Bf4 31. Bxf4+ Nxf4 32. Qxf4+ $18) 29... Bf4 (29... Ne3 30. Bxg6 $18) 30. Qf8+ Kh7 31. Be6 $1 $18 1-0";
    }
    ExamplesStudyComponent.prototype.ngOnInit = function () { };
    ExamplesStudyComponent.prototype.ngAfterViewInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadScript("assets/pgn-viewer/js/pgnvjs.js")];
                    case 1:
                        _a.sent();
                        this._routes.parent.params.subscribe(function (params) {
                            _this.level = params.level;
                            _this.episode_id = params.episode_id;
                            _this.productId = params.productId;
                            _this._routes.params.subscribe(function (localParams) {
                                // loader started
                                _this.isLoading = true;
                                _this.puzzleId = localParams.puzzleId;
                                // now load the puzzle data based on server data
                                _this._authService
                                    .getPuzzleById({
                                    level: _this.level,
                                    episode_id: _this.episode_id,
                                    puzzle_id: _this.puzzleId,
                                    product_id: _this.productId,
                                    is_quiz: false,
                                    productType: Number(localStorage.getItem("productType")),
                                    userId: Number(localStorage.getItem("id"))
                                })
                                    .subscribe(function (res) {
                                    _this.isSolutionActive = true;
                                    // this.pgnFile = res.data.puzzle.pgn;
                                    // const blob = new Blob([this.pgnFile], {
                                    //   type: "application/octet-stream"
                                    // });
                                    // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
                                    //   window.URL.createObjectURL(blob)
                                    // );
                                    // console.log(res, "RESPONSE");
                                    // setting the heading
                                    //console.log('',res.data.puzzle)
                                    _this.heading = res.data.puzzle.heading;
                                    _this.detail = res.data.puzzle.detail;
                                    // set chessboard and its data now
                                    _this.cfg = {
                                        // position: '8/6pk/p1pbQ3/1p1n1pq1/3P3p/2P2PP1/PPB4P/4BbK1 w - - 0 27',
                                        position: "" + res.data.puzzle.fen,
                                        pgn: "" + res.data.puzzle.pgn,
                                        // pgn: this.pgn,
                                        locale: "en",
                                        pieceStyle: "merida"
                                    };
                                    // console.log(this.cfg, "cfg");
                                    _this.onResize();
                                    var board = pgnView("board", _this.cfg);
                                    // loader stopped
                                    _this.isLoading = false;
                                });
                            });
                        });
                        // console.log(this.level, "level")
                        // this.breadcrum.levelSelectorBreadcrumb(this.level);
                        //example
                        this.breadcrum.exampleBreadCrumb(1);
                        return [2 /*return*/];
                }
            });
        });
    };
    ExamplesStudyComponent.prototype.ngOnDestroy = function () { };
    ExamplesStudyComponent.prototype.loadScript = function (scriptUrl) {
        return new Promise(function (resolve, reject) {
            var scriptElement = document.createElement("script");
            scriptElement.src = scriptUrl;
            scriptElement.id = "example_pgn_viewer";
            scriptElement.type = "text/javascript";
            scriptElement.onload = resolve;
            scriptElement.onerror = reject;
            document.body.appendChild(scriptElement);
        });
    };
    ExamplesStudyComponent.prototype.onResize = function () {
        if (window.innerWidth > 1100) {
            this.cfg.boardSize = "500px";
        }
        else if (window.innerWidth > 800) {
            this.cfg.boardSize = "400px";
        }
        else if (window.innerWidth > 400) {
            this.cfg.boardSize = "300px";
        }
        else if (window.innerWidth > 350) {
            this.cfg.boardSize = "250px";
        }
        else if (window.innerWidth > 300) {
            this.cfg.boardSize = "220px";
        }
        else {
            this.cfg.boardSize = "200px";
        }
    };
    ExamplesStudyComponent.prototype.showSolution = function () {
        this.isSolutionActive = false;
        document.getElementById("boardMoves").style.display = "block";
        document.getElementById("boardButton").style.display = "block";
    };
    ExamplesStudyComponent.ɵfac = function ExamplesStudyComponent_Factory(t) { return new (t || ExamplesStudyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
    ExamplesStudyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExamplesStudyComponent, selectors: [["app-examples-study"]], hostVars: 2, hostBindings: function ExamplesStudyComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.ExamplesStudyComponentClass);
        } }, decls: 6, vars: 2, consts: [[1, "puzzle_item_container"], [4, "ngIf"], ["id", "board", 1, "board"], ["board", ""], [1, "hint_option"], [1, "heading"], [1, "sub_heading"], [3, "click"]], template: function ExamplesStudyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamplesStudyComponent_app_pre_loader_1_Template, 1, 0, "app-pre-loader", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamplesStudyComponent_ng_container_5_Template, 9, 2, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSolutionActive);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_7__["PreLoaderComponent"]], styles: [".app-examples-study[_ngcontent-%COMP%]   .puzzle_item_container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.app-examples-study[_ngcontent-%COMP%]   .puzzle_item_container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 20;\n}\n\n.app-examples-study[_ngcontent-%COMP%]   .puzzle_item_container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.app-examples-study[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-weight: bold;\n  font-size: 1.5em;\n}\n\n.app-examples-study[_ngcontent-%COMP%]   .sub_heading[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  margin-bottom: 3em;\n  font-weight: 400;\n}\n\n.app-examples-study[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.app-examples-study[_ngcontent-%COMP%]   .hint_option[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 100%;\n  text-align: center;\n}\n\n.app-examples-study[_ngcontent-%COMP%]   .hint_option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.app-examples-study[_ngcontent-%COMP%]   .hint_option[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #A0CC50;\n  padding: 10px 30px;\n  border: 0;\n  margin: 1em auto;\n  border-radius: 6px;\n  margin-bottom: 8px;\n  color: white;\n  cursor: pointer;\n  -webkit-filter: drop-shadow(2px 2px 4px #cccccc);\n          filter: drop-shadow(2px 2px 4px #cccccc);\n}\n\n.app-examples-study[_ngcontent-%COMP%]   .hint_option[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #34c2d6;\n}\n\n.app-examples-study[_ngcontent-%COMP%]   #boardButton[_ngcontent-%COMP%] {\n  text-align: center;\n  display: none;\n}\n\n.app-examples-study[_ngcontent-%COMP%]   #boardButton[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #769455;\n  padding: 10px 18px;\n  margin-top: 1em;\n}\n\n.app-examples-study[_ngcontent-%COMP%]   .white-1e1d7[_ngcontent-%COMP%] {\n  background-color: #edeed1;\n  color: #769455;\n}\n\n.app-examples-study[_ngcontent-%COMP%]   .black-3c85d[_ngcontent-%COMP%] {\n  background-color: #769455;\n  color: #edeed1;\n}\n\n.app-examples-study[_ngcontent-%COMP%]   #boardMoves[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-left: 10px;\n  min-width: 250px;\n  padding: 1em;\n  border: 1px solid #cccccc;\n  background: white;\n  border-radius: 6px;\n  max-height: 500px;\n  overflow-y: scroll;\n  display: none;\n}\n\n@media screen and (min-width: 1260px) {\n  .app-examples-study[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n  }\n  .app-examples-study[_ngcontent-%COMP%]   #boardMoves[_ngcontent-%COMP%] {\n    margin-left: 1em;\n    height: 560px;\n  }\n}\n\n@media screen and (max-width: 1259px) {\n  .app-examples-study[_ngcontent-%COMP%]   .puzzle_item_container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .app-examples-study[_ngcontent-%COMP%]   .puzzle_item_container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    margin-top: 1em;\n  }\n  .app-examples-study[_ngcontent-%COMP%]   .hint_option[_ngcontent-%COMP%] {\n    position: relative;\n    top: 0;\n    right: 0;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    text-align: center;\n    width: 90%;\n    align-items: center;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zdGFyLXJvb20vZHItZnVuY3Rpb25hbC9leGFtcGxlcy9leGFtcGxlcy1zdHVkeS9leGFtcGxlcy1zdHVkeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQWE7QUFBakI7O0FBRkE7RUFLTSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDakI7O0FBUkE7RUFVUSxZQUFZO0FBRXBCOztBQVpBO0VBZ0JJLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQXBCOztBQWxCQTtFQXNCSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUFwQjs7QUF4QkE7RUE0QkksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFBdkI7O0FBOUJBO0VBbUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7QUFEdEI7O0FBdENBO0VBMENNLGdCQUFnQjtBQUF0Qjs7QUExQ0E7RUE4Q00sMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixnREFBd0M7VUFBeEMsd0NBQXdDO0FBQTlDOztBQXZEQTtFQTBEUSx5QkFBeUI7QUFDakM7O0FBM0RBO0VBZ0VJLGtCQUFrQjtFQVFsQixhQUFhO0FBUmpCOztBQWhFQTtFQW1FTSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDckI7O0FBdEVBO0VBNEVJLHlCQUF5QjtFQUN6QixjQUFjO0FBRmxCOztBQTNFQTtFQWlGSSx5QkFBeUI7RUFDekIsY0FBYztBQUZsQjs7QUFoRkE7RUFzRkksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFFaEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBRWxCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtBQUpqQjs7QUFnQkU7RUE3R0Y7SUErR00sYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7RUFiekI7RUFwR0Y7SUFzSE0sZ0JBQWdCO0lBQ2hCLGFBQWE7RUFmakI7QUFDRjs7QUFrQkU7RUEzSEY7SUE2SE0sYUFBYTtJQUNiLHNCQUFzQjtFQWYxQjtFQS9HRjtJQWlJUSxlQUFlO0VBZnJCO0VBbEhGO0lBc0lNLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7RUFqQmhCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3N0YXItcm9vbS9kci1mdW5jdGlvbmFsL2V4YW1wbGVzL2V4YW1wbGVzLXN0dWR5L2V4YW1wbGVzLXN0dWR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1leGFtcGxlcy1zdHVkeSB7XHJcbiAgLnB1enpsZV9pdGVtX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5sb2FkZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuXHJcbiAgICAgIG1hdC1zcGlubmVyIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkaW5nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG5cclxuICAuc3ViX2hlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG5cclxuICAuYm9hcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcclxuICB9XHJcblxyXG4gIC5oaW50X29wdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0EwQ0M1MDtcclxuICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIG1hcmdpbjogMWVtIGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDRweCAjY2NjY2NjKTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNGMyZDY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICNib2FyZEJ1dHRvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiAjNzY5NDU1O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLndoaXRlLTFlMWQ3IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVlZDE7XHJcbiAgICBjb2xvcjogIzc2OTQ1NTtcclxuICB9XHJcblxyXG4gIC5ibGFjay0zYzg1ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzY5NDU1O1xyXG4gICAgY29sb3I6ICNlZGVlZDE7XHJcbiAgfVxyXG5cclxuICAjYm9hcmRNb3ZlcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG5cclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgLy8gLm1vdmVDb21tZW50IHtcclxuICAgIC8vICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIC8vICAgcGFkZGluZzogMWVtO1xyXG4gICAgLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAvLyAgIGNvbG9yOiAjYTBjZTRlO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI2MHB4KSB7XHJcbiAgICAuYm9hcmQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICNib2FyZE1vdmVzIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgICAgaGVpZ2h0OiA1NjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTlweCkge1xyXG4gICAgLnB1enpsZV9pdGVtX2NvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhpbnRfb3B0aW9uIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
    return ExamplesStudyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ExamplesStudyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: "app-examples-study",
                templateUrl: "./examples-study.component.html",
                styleUrls: ["./examples-study.component.scss"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, { ExamplesStudyComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
            args: ["class"]
        }] }); })();


/***/ }),

/***/ "./src/app/user/star-room/dr-functional/examples/examples.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/user/star-room/dr-functional/examples/examples.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var _examples_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples.service */ "./src/app/user/star-room/dr-functional/examples/examples.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _star_room_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../star-room-data.service */ "./src/app/user/star-room/star-room-data.service.ts");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");


















function ExamplesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "No examples are available for this episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ExamplesComponent_div_1_mat_select_1_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExamplesComponent_div_1_mat_select_1_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); var puzzle_r5 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r7.playPuzzle(puzzle_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var puzzle_r5 = ctx.$implicit;
    var j_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("value", "Example ", puzzle_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Example ", j_r6 + 1, "");
} }
function ExamplesComponent_div_1_mat_select_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function ExamplesComponent_div_1_mat_select_1_Template_mat_select_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.matSelectPuzzle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamplesComponent_div_1_mat_select_1_mat_option_1_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.matSelectPuzzle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.puzzles);
} }
var _c0 = function (a0) { return { "activePuzzle": a0 }; };
function ExamplesComponent_div_1_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExamplesComponent_div_1_div_2_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); var puzzle_r12 = ctx.$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r14.playPuzzle(puzzle_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var puzzle_r12 = ctx.$implicit;
    var i_r13 = ctx.index;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, puzzle_r12.id === ctx_r11.currentPuzzle));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Example ", i_r13 + 1, " ");
} }
function ExamplesComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamplesComponent_div_1_div_2_div_1_Template, 2, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.puzzles);
} }
function ExamplesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamplesComponent_div_1_mat_select_1_Template, 2, 2, "mat-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ExamplesComponent_div_1_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.mobileVersion());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.mobileVersion());
} }
var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent(_authService, _router, _routes, _exampleService, _location, _dreamroomService, _breadCrumb) {
        this._authService = _authService;
        this._router = _router;
        this._routes = _routes;
        this._exampleService = _exampleService;
        this._location = _location;
        this._dreamroomService = _dreamroomService;
        this._breadCrumb = _breadCrumb;
        this.ExamplesComponentClass = "app-examples";
        this.puzzleReceived = true;
        this.puzzles = [];
    }
    ExamplesComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this._breadCrumb.exampleBreadCrumb(13);
        this._routes.params.subscribe(function (params) {
            // now get puzzles based on level and episode id
            var level = params.level;
            var episode_id = params.episode_id;
            _this.productId = parseInt(params.productId);
            _this.episode_id = episode_id;
            _this._location.subscribe(function (data) {
                if (data.url ===
                    "/user/star-room/dr-functionality/example/" + params.productId + "/" + level + "/" + episode_id) {
                    _this._location.back();
                }
            });
            if (parseInt(level) === 13 || parseInt(level) === 3) {
                _this._authService
                    .getPuzzleList({
                    level: 13,
                    episode_id: episode_id,
                    product_id: _this.productId,
                    puzzle_type: 0,
                    productType: Number(localStorage.getItem('productType')),
                    userId: Number(localStorage.getItem('id'))
                })
                    .subscribe(function (res) {
                    if (res.data.list.count > 0) {
                        _this.puzzleReceived = true;
                        _this.puzzles = res.data.list.rows;
                        _this.currentPuzzle = _this.puzzles[0].id;
                        _this.matSelectPuzzle = "Example " + _this.puzzles[0].id;
                        _this._router.navigateByUrl("user/star-room/dr-functionality/example/" + params.productId + "/" + level + "/" + episode_id + "/example-study/" + _this.currentPuzzle);
                    }
                    else {
                        _this.puzzleReceived = false;
                    }
                }, function (err) {
                    _this.puzzleReceived = false;
                    // handle error here
                });
            }
            else if (parseInt(level) === 13) {
                if (episode_id < 6) {
                    var data = {
                        episode_id: episode_id,
                        is_quiz: false,
                        level: 13,
                        product_id: _this.productId,
                        puzzle_id: _this.currentPuzzle,
                        productType: Number(localStorage.getItem('productType')),
                        userId: Number(localStorage.getItem('id'))
                    };
                    // console.log(data, "DATA");
                    _this.puzzleReceived = true;
                    _this._authService.getPuzzleById(data).subscribe(function (res) {
                        _this.puzzles = res;
                    });
                    _this.currentPuzzle = _this.puzzles[0].id;
                    _this.matSelectPuzzle = "Example " + _this.puzzles[0].id;
                    _this._router.navigateByUrl("user/star-room/dr-functionality/example/" + params.productId + "/" + level + "/" + episode_id + "/example-study/" + _this.currentPuzzle);
                }
                else {
                    _this._authService
                        .getPuzzleList({
                        level: 13,
                        episode_id: episode_id,
                        product_id: _this.productId,
                    })
                        .subscribe(function (res) {
                        if (res.data.list.count > 0) {
                            _this.puzzleReceived = true;
                            _this.puzzles = res.data.list.rows;
                            _this.currentPuzzle = _this.puzzles[0].id;
                            _this.matSelectPuzzle = "Example " + _this.puzzles[0].id;
                            _this._router.navigateByUrl("user/star-room/dr-functionality/example/" + params.productId + "/" + level + "/" + episode_id + "/example-study/" + _this.currentPuzzle);
                        }
                        else {
                            _this.puzzleReceived = false;
                        }
                    }, function (err) {
                        _this.puzzleReceived = false;
                        // handle error here
                    });
                }
            }
        });
    };
    ExamplesComponent.prototype.mobileVersion = function () {
        return window.innerWidth < 800;
    };
    ExamplesComponent.prototype.playPuzzle = function (data) {
        var _this = this;
        var datas = {
            episode_id: this.episode_id,
            is_quiz: false,
            level: 13,
            product_id: this.productId,
            puzzle_id: data.id,
        };
        this._authService.getPuzzleById(datas).subscribe(function (res) {
            // this.puzzles = res.data;
            _this.puzzleReceived = true;
            _this.puzzleDetail = res.data;
            // console.log("DATA", res.data);
        });
        this.currentPuzzle = data.id;
        this.matSelectPuzzle = "Example " + data.id;
        this._routes.params.subscribe(function (params) {
            if (parseInt(params.level) === 2 || parseInt(params.level) === 3) {
                _this._router.navigateByUrl("user/star-room/dr-functionality/example/" + params.productId + "/" + params.level + "/" + params.episode_id + "/example-study/" + data.id);
            }
            else if (parseInt(params.level) === 13) {
                if (params.episode_id < 6) {
                    _this._router.navigateByUrl("user/star-room/dr-functionality/example/" + params.productId + "/" + params.level + "/" + params.episode_id + "/example-study/" + data.id);
                }
                else {
                    _this._authService
                        .getPuzzleList({
                        level: 13,
                        episode_id: params.episode_id,
                        product_id: _this.productId,
                    })
                        .subscribe(function (res) {
                        if (res.data.list.count > 0) {
                            _this._router.navigateByUrl("user/star-room/dr-functionality/example/" + params.productId + "/" + params.level + "/" + params.episode_id + "/example-study/" + data.id);
                        }
                        else {
                            _this.puzzleReceived = false;
                        }
                    }, function (err) {
                        _this.puzzleReceived = false;
                        // handle error here
                    });
                }
            }
        });
    };
    ExamplesComponent.ɵfac = function ExamplesComponent_Factory(t) { return new (t || ExamplesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_examples_service__WEBPACK_IMPORTED_MODULE_0__["ExamplesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_star_room_data_service__WEBPACK_IMPORTED_MODULE_5__["StarroomDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadCrumbService"])); };
    ExamplesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ExamplesComponent, selectors: [["app-examples"]], hostVars: 2, hostBindings: function ExamplesComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.ExamplesComponentClass);
        } }, decls: 2, vars: 2, consts: [["class", "no_data_received", 4, "ngIf"], ["class", "puzzle_container", 4, "ngIf"], [1, "no_data_received"], [1, "puzzle_container"], [3, "value", "valueChange", 4, "ngIf"], ["class", "puzzle_menu", 4, "ngIf"], [1, "puzzle_play"], [3, "value", "valueChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], [1, "puzzle_menu"], ["class", "puzzle_card", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "puzzle_card", 3, "ngClass", "click"]], template: function ExamplesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ExamplesComponent_div_0_Template, 5, 0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamplesComponent_div_1_Template, 5, 2, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.puzzleReceived);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.puzzleReceived);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], encapsulation: 2 });
    return ExamplesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ExamplesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: "app-examples",
                templateUrl: "./examples.component.html",
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _examples_service__WEBPACK_IMPORTED_MODULE_0__["ExamplesService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }, { type: _star_room_data_service__WEBPACK_IMPORTED_MODULE_5__["StarroomDataService"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadCrumbService"] }]; }, { ExamplesComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ["class"]
        }] }); })();


/***/ }),

/***/ "./src/app/user/star-room/dr-functional/examples/examples.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/user/star-room/dr-functional/examples/examples.module.ts ***!
  \**************************************************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var _examples_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples.service */ "./src/app/user/star-room/dr-functional/examples/examples.service.ts");
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples.component */ "./src/app/user/star-room/dr-functional/examples/examples.component.ts");
/* harmony import */ var _examples_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples-routing.module */ "./src/app/user/star-room/dr-functional/examples/examples-routing.module.ts");
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app-bootstrap.module */ "./src/app/app-bootstrap.module.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app-material-module */ "./src/app/app-material-module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _examples_study_examples_study_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples-study/examples-study.component */ "./src/app/user/star-room/dr-functional/examples/examples-study/examples-study.component.ts");
/* harmony import */ var _base_examples_base_examples_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base-examples/base-examples.component */ "./src/app/user/star-room/dr-functional/examples/base-examples/base-examples.component.ts");











var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ExamplesModule });
    ExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function ExamplesModule_Factory(t) { return new (t || ExamplesModule)(); }, providers: [_examples_service__WEBPACK_IMPORTED_MODULE_0__["ExamplesService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["AppBootstrapModule"],
                _examples_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExampleRoutingModule"],
            ]] });
    return ExamplesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ExamplesModule, { declarations: [_examples_component__WEBPACK_IMPORTED_MODULE_1__["ExamplesComponent"],
        _examples_study_examples_study_component__WEBPACK_IMPORTED_MODULE_8__["ExamplesStudyComponent"],
        _base_examples_base_examples_component__WEBPACK_IMPORTED_MODULE_9__["BaseExamplesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
        _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["AppBootstrapModule"],
        _examples_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExampleRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](ExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                    _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["AppBootstrapModule"],
                    _examples_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExampleRoutingModule"],
                ],
                declarations: [
                    _examples_component__WEBPACK_IMPORTED_MODULE_1__["ExamplesComponent"],
                    _examples_study_examples_study_component__WEBPACK_IMPORTED_MODULE_8__["ExamplesStudyComponent"],
                    _base_examples_base_examples_component__WEBPACK_IMPORTED_MODULE_9__["BaseExamplesComponent"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["NO_ERRORS_SCHEMA"]],
                providers: [_examples_service__WEBPACK_IMPORTED_MODULE_0__["ExamplesService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/star-room/dr-functional/examples/examples.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/user/star-room/dr-functional/examples/examples.service.ts ***!
  \***************************************************************************/
/*! exports provided: ExamplesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesService", function() { return ExamplesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var ExamplesService = /** @class */ (function () {
    function ExamplesService() {
        this.exampleList = [
            {
                episode: 1,
                id: 1,
                level: 1,
                heading: "c6 square on the board.",
                detail: "",
                config: {
                    position: "trash",
                    orientation: true,
                },
            },
            {
                episode: 1,
                id: 2,
                level: 1,
                heading: "e4 square on the board.",
                detail: "",
                config: {
                    position: "trash",
                    orientation: true,
                },
            },
            {
                episode: 1,
                id: 3,
                level: 1,
                heading: "e6 square on the board.",
                detail: "",
                config: {
                    position: "trash",
                    orientation: true,
                },
            },
            {
                episode: 1,
                id: 4,
                level: 1,
                heading: "b3 square on the board.",
                detail: "",
                config: {
                    position: "trash",
                    orientation: true,
                },
            },
            {
                episode: 1,
                id: 5,
                level: 1,
                heading: "h3 square on the board.",
                detail: "",
                config: {
                    position: "trash",
                    orientation: true,
                },
            },
            {
                episode: 1,
                id: 6,
                level: 1,
                heading: "The king side files.",
                detail: "",
                config: {
                    position: "trash",
                    orientation: true,
                },
            },
            {
                episode: 1,
                id: 7,
                level: 1,
                heading: "The queen sides files.",
                detail: "",
                config: {
                    position: "trash",
                    orientation: true,
                },
            },
            {
                episode: 1,
                id: 8,
                level: 1,
                heading: "The 3rd rank.",
                detail: "",
                config: {
                    position: "trash",
                    orientation: true,
                },
            },
            {
                episode: 1,
                id: 9,
                level: 1,
                heading: "The 6th rank.",
                detail: "",
                config: {
                    position: "trash",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 1,
                level: 1,
                heading: "King at its best can cover 8 squares at a given time. King in the center is considered a good tool in the endgames.",
                question_type: "example",
                answer: "",
                message: "No, A queen cannot jump over our own material",
                detail: "",
                config: {
                    position: "8/8/8/8/4K3/8/8/8 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 2,
                level: 1,
                heading: "Here the king is around the center but can again move to 8 different squares.",
                question_type: "example",
                answer: "",
                message: "Yes, A knight can jump over opponent material",
                detail: "",
                config: {
                    position: "8/8/3k4/8/8/8/8/8 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 3,
                level: 1,
                heading: "King in the corner has minimal squares to move. Here it can go to only 3 squares.",
                question_type: "example",
                answer: "",
                message: "No, Both Kings can never come close to each other",
                detail: "",
                config: {
                    position: "7k/8/8/8/8/8/8/8 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 4,
                level: 1,
                heading: "This is an initial position of the knight. It can move to 3 different squares.",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/8/8/8/6N1 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 5,
                level: 1,
                heading: "Like every other piece, knight plays best in the center. However, a knight, like king can also cover maximum 8 squares at a given time.",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/4N3/8/8/8 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 6,
                level: 1,
                heading: "Knight is worst placed in the corner. It can only go to 2 squares.",
                question_type: "example",
                answer: "",
                message: "No, The bishop can move only in one set of coloured squares. Here, the bishop can only move in light squares.",
                detail: "",
                config: {
                    position: "8/8/8/8/8/8/8/n7 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 7,
                level: 1,
                heading: "Knight can go to 4 squares from here.",
                question_type: "example",
                answer: "",
                message: "Yes, A bishop can go forward or backward on the same colour",
                detail: "",
                config: {
                    position: "8/8/8/7n/8/8/8/8 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 8,
                level: 1,
                heading: "The white and black knight here cover different squares.\n      {Point to be noted: Knight from a light square can move only to a dark square and knight from a dark square can move only to a light square.}",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/4n3/4N3/8/8/8 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 9,
                level: 1,
                heading: "Bishop from its initial square can cover as many as 7 squares.",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/8/8/8/5B2 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 10,
                level: 1,
                heading: "Bishop can cover 13 squares from the center of the board.",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/3B4/8/8/8 b - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 11,
                level: 1,
                heading: "Bishop from any square covers a minimum of 7 squares.",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/b7/8/8/8 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 12,
                level: 1,
                heading: "Rook at its initial position has control of 14 squares.",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/8/8/8/R7 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 13,
                level: 1,
                heading: "However the fact is, rook can go to only 14 squares no matter where it is positioned on the chess board.",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/4R3/8/8/8 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 14,
                level: 1,
                heading: "Rook on the seventh rank is considered a deadly weapon. Still goes to 14 squares.",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/8/8/7r/8 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 15,
                level: 1,
                heading: "Queen has the widest range among all pieces. It\u2019s basically rook + bishop(s) combined. It can move like a bishop as well as rook from any given position.",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/8/8/8/3Q4 b - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 16,
                level: 1,
                heading: "The minimum reach of the queen is 21 squares from any given square on the board.",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "7Q/8/8/8/8/8/8/8 b - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 2,
                id: 17,
                level: 1,
                heading: "When in the center queen can control up to 27 squares.",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/4q3/8/8/8 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 3,
                id: 1,
                level: 1,
                heading: "A pawn from its initial position can move two squares or one square.",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/8/8/3P4/8 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 3,
                id: 2,
                level: 1,
                heading: "Pawn that has left its initial position cannot move two squares anymore      ",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/8/7P/8/8 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 3,
                id: 3,
                level: 1,
                heading: "The pawn captures diagonally",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/3p1p2/4P3/8/8 w - - 0 11",
                    orientation: true,
                },
            },
            {
                episode: 3,
                id: 4,
                level: 1,
                heading: "The pawn when it moves to the eighth rank can promote to a piece of your choice. This piece can be Q, R, B, or N .... A pawn cannot remain a pawn on eighth rank and it cannot be promoted to a K ",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/2P5/8/8/8/8/8/8 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 3,
                id: 5,
                level: 1,
                heading: "Here is another special power of the pawn. Let's assume black just played his pawn from d7 to d5. White can capture it by playing 'exd6' This is called 'En-Passant'",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/3pP3/8/8/8/8 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 3,
                id: 6,
                level: 1,
                heading: "The possible moves for black in this position",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/2p5/1P1N4/8/8 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 4,
                id: 1,
                level: 1,
                heading: "The King and rook have a special move too! From their initial position they can move simultaneously. This process is called 'Castling' Here is an example of King side Castling O-O The Castling changes the position of both king and rook. The King goes to 'g1' from 'e1' and the rook goes to 'f1' from 'h1' square\n      ",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/8/8/8/4K2R w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 4,
                id: 2,
                level: 1,
                heading: "The other type of castling is on the queen side. Here the King goes to 'c1' and rook comes to 'd1'",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "8/8/8/8/8/8/8/R3K3 w - - 0 1",
                    orientation: true,
                },
            },
            {
                episode: 4,
                id: 3,
                level: 1,
                heading: "Black can castle this position",
                question_type: "example",
                answer: "",
                message: "",
                detail: "",
                config: {
                    position: "4k2r/8/8/8/8/8/8/8 w - - 0 1 ",
                    orientation: true,
                },
            },
        ];
    }
    ExamplesService.prototype.getBeginnerExampleList = function (episodeid) {
        return this.exampleList.filter(function (p) { return parseInt(p.episode) === parseInt(episodeid); });
    };
    ExamplesService.prototype.getExampleListById = function (episodeid, id) {
        return this.exampleList.filter(function (p) {
            return parseInt(p.id) === parseInt(id) &&
                parseInt(p.episode) === parseInt(episodeid);
        })[0];
    };
    ExamplesService.ɵfac = function ExamplesService_Factory(t) { return new (t || ExamplesService)(); };
    ExamplesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExamplesService, factory: ExamplesService.ɵfac });
    return ExamplesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamplesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=examples-examples-module.js.map