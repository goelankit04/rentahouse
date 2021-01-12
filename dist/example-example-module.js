(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["example-example-module"],{

/***/ "./src/app/user/dreamroom/dr-functionality/example/base-example/base-example.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/example/base-example/base-example.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BaseExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseExampleComponent", function() { return BaseExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chess.js */ "./node_modules/chess.js/chess.js");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chess_js__WEBPACK_IMPORTED_MODULE_1__);



var _c0 = ["board"];
var BaseExampleComponent = /** @class */ (function () {
    function BaseExampleComponent() {
        this.BaseExampleComponentClass = 'app-base-example';
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
    Object.defineProperty(BaseExampleComponent.prototype, "BoardSize", {
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
    BaseExampleComponent.prototype.onResize = function (event) {
        if (this.board) {
            this.board.resize(event);
        }
    };
    BaseExampleComponent.prototype.onClick = function (event) {
        this.boardClick.emit(event);
    };
    Object.defineProperty(BaseExampleComponent.prototype, "position", {
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
    Object.defineProperty(BaseExampleComponent.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (value) {
            this._orientation = value;
            if (this.board) {
                this.board.orientation(value ? 'white' : 'black');
            }
            this.orientationChange.emit(this._orientation);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseExampleComponent.prototype, "showNotation", {
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
    Object.defineProperty(BaseExampleComponent.prototype, "draggable", {
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
    Object.defineProperty(BaseExampleComponent.prototype, "dropOffBoard", {
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
    Object.defineProperty(BaseExampleComponent.prototype, "moveSpeed", {
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
    Object.defineProperty(BaseExampleComponent.prototype, "snapbackSpeed", {
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
    Object.defineProperty(BaseExampleComponent.prototype, "snapSpeed", {
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
    Object.defineProperty(BaseExampleComponent.prototype, "sparePieces", {
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
    BaseExampleComponent.prototype.clear = function () {
        this.board.clear(this.animation);
    };
    BaseExampleComponent.prototype.move = function (notation) {
        this.board.move(notation);
    };
    BaseExampleComponent.prototype.onChangeHandler = function (oldPos, newPos) {
        this.change.emit({ oldPos: oldPos, newPos: newPos });
    };
    BaseExampleComponent.prototype.onDragStart = function (source, piece, position, orientation) {
        this.dragStart.emit({ source: source, piece: piece, position: position, orientation: orientation });
    };
    BaseExampleComponent.prototype.onDragMove = function (newLocation, oldLocation, source, piece, position, orientation) {
        this.dragMove.emit({
            newLocation: newLocation,
            oldLocation: oldLocation,
            source: source,
            piece: piece,
            position: position,
            orientation: orientation,
        });
    };
    BaseExampleComponent.prototype.onDrop = function (source, target, piece, newPos, oldPos, orientation) {
        this._position = newPos;
        this.positionChange.emit(this._position);
        this.drop.emit({ source: source, target: target, piece: piece, newPos: newPos, oldPos: oldPos, orientation: orientation });
    };
    BaseExampleComponent.prototype.onSnapbackEnd = function (piece, square, position, orientation) {
        this.snapbackEnd.emit({ piece: piece, square: square, position: position, orientation: orientation });
    };
    BaseExampleComponent.prototype.onMoveEnd = function (oldPos, newPos) {
        this._position = newPos;
        this.positionChange.emit(this._position);
        this.moveEnd.emit({ oldPos: oldPos, newPos: newPos });
    };
    BaseExampleComponent.prototype.onMouseoverSquare = function (piece, square) {
        this.mouseOverOnBoard.emit({ piece: piece, square: square });
    };
    BaseExampleComponent.prototype.onMouseoutSquare = function (piece, square) {
        this.mouseOutEvent.emit({ piece: piece, square: square });
    };
    BaseExampleComponent.prototype.OnBoardClick = function (event) {
        this.boardClick.emit(event);
    };
    BaseExampleComponent.prototype.load = function () {
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
    BaseExampleComponent.prototype.ngOnInit = function () {
        this.load();
    };
    BaseExampleComponent.ɵfac = function BaseExampleComponent_Factory(t) { return new (t || BaseExampleComponent)(); };
    BaseExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseExampleComponent, selectors: [["app-base-example"]], viewQuery: function BaseExampleComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chessBoard = _t.first);
        } }, hostVars: 2, hostBindings: function BaseExampleComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function BaseExampleComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("click", function BaseExampleComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.BaseExampleComponentClass);
        } }, inputs: { animation: "animation", BoardSize: ["boardSize", "BoardSize"], position: "position", orientation: "orientation", showNotation: "showNotation", draggable: "draggable", dropOffBoard: "dropOffBoard", moveSpeed: "moveSpeed", snapbackSpeed: "snapbackSpeed", snapSpeed: "snapSpeed", sparePieces: "sparePieces" }, outputs: { animationChange: "animationChange", positionChange: "positionChange", orientationChange: "orientationChange", showNotationChange: "showNotationChange", draggableChange: "draggableChange", dropOffBoardChange: "dropOffBoardChange", pieceThemeChange: "pieceThemeChange", moveSpeedChange: "moveSpeedChange", snapbackSpeedChange: "snapbackSpeedChange", snapSpeedChange: "snapSpeedChange", sparePiecesChange: "sparePiecesChange", mouseOverOnBoard: "mouseOverOnBoard", boardClick: "boardClick", mouseOutEvent: "mouseOutEvent", change: "change", dragStart: "dragStart", dragMove: "dragMove", drop: "drop", snapbackEnd: "snapbackEnd", moveEnd: "moveEnd" }, decls: 1, vars: 0, consts: [["id", "board", 3, "click"]], template: function BaseExampleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaseExampleComponent_Template_div_click_0_listener($event) { return ctx.OnBoardClick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return BaseExampleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-base-example',
                templateUrl: './base-example.component.html',
            }]
    }], function () { return []; }, { BaseExampleComponentClass: [{
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

/***/ "./src/app/user/dreamroom/dr-functionality/example/beginner-example/beginner-example.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/example/beginner-example/beginner-example.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: BeginnerExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginnerExampleComponent", function() { return BeginnerExampleComponent; });
/* harmony import */ var _example_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../example.service */ "./src/app/user/dreamroom/dr-functionality/example/example.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_example_base_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-example/base-example.component */ "./src/app/user/dreamroom/dr-functionality/example/base-example/base-example.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function BeginnerExampleComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BeginnerExampleComponent_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.clickedYes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BeginnerExampleComponent_div_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.clickedNo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var BeginnerExampleComponent = /** @class */ (function () {
    function BeginnerExampleComponent(_routes, _exampleService, router, breadcrum) {
        this._routes = _routes;
        this._exampleService = _exampleService;
        this.router = router;
        this.breadcrum = breadcrum;
        this.BeginnerExampleComponentClass = "app-beginner-example";
        this.boardSize = "450px";
        this.message_success = ["Solved", "Well done!"];
        this.message_fail = ["You Failed", "Please try again"];
    }
    BeginnerExampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.router.url, "url");
        this.breadcrum.levelSelectorBreadcrumb(1);
        this.breadcrum.exampleBreadCrumb(1);
        this.breadcrum.episodeBreadCrumb(1);
        // this.breadcrum.puzzleBreadCrumb(1);
        this._routes.parent.params.subscribe(function (parentparams) {
            _this.level = parentparams.level;
            _this.episode_id = parentparams.episode_id;
            // console.log(this.level, this.episode_id, "wwwwwwwwweeeee");
            _this._routes.params.subscribe(function (params) {
                // console.log(parentparams.episode_id);
                _this.puzzleDetail = _this._exampleService.getExampleListById(parentparams.episode_id, params.puzzleId);
                _this.chessConfig = _this.puzzleDetail.config;
                // console.log(
                //   "puzzle",
                //   parentparams.episode_id,
                //   params.puzzleId,
                //   this.chessConfig
                // );
                _this.removeGreySquares();
                jquery__WEBPACK_IMPORTED_MODULE_4__("#board .square-55d63").removeClass("highlight1-32417");
                _this.puzzleexample(parentparams.episode_id, params.puzzleId);
            });
        });
        if (window.innerWidth < 370) {
            this.boardSize = "200px";
        }
        else if (window.innerWidth < 470) {
            this.boardSize = "300px";
        }
        else if (window.innerWidth < 1100) {
            this.boardSize = "400px";
        }
        else {
            this.boardSize = "500px";
        }
    };
    BeginnerExampleComponent.prototype.removeHighlightedSquares = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__("#board .square-55d63").removeClass("highlight1-32417");
    };
    BeginnerExampleComponent.prototype.onResize = function (event) {
        if (window.innerWidth < 370) {
            this.boardSize = "200px";
        }
        else if (window.innerWidth < 470) {
            this.boardSize = "300px";
        }
        else if (window.innerWidth < 1100) {
            this.boardSize = "400px";
        }
        else {
            this.boardSize = "500px";
        }
    };
    BeginnerExampleComponent.prototype.highlightRow = function (square) {
        var row = square[1];
        var column = square[0];
        var arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
        // highlight the possible squares for this piece
        for (var i = 0; i < 8; i++) {
            this.greySquare(arr[i] + row);
        }
    };
    BeginnerExampleComponent.prototype.highlightColumn = function (square) {
        var row = square[1];
        var column = square[0];
        for (var i = 1; i <= 8; i++) {
            this.greySquare(column + i);
        }
    };
    BeginnerExampleComponent.prototype.greySquare = function (square) {
        var squareEl = jquery__WEBPACK_IMPORTED_MODULE_4__("#board .square-" + square);
        // let background = '#a9a9a9';
        var background = "#89f36d";
        if (squareEl.hasClass("black-3c85d") === true) {
            // background = '#696969';
            background = "#598d69";
        }
        squareEl.css("background", background);
    };
    BeginnerExampleComponent.prototype.yellowSquare = function (square) {
        var squareEl = jquery__WEBPACK_IMPORTED_MODULE_4__("#board .square-" + square);
        var background = "#FFFF00";
        if (squareEl.hasClass("black-3c85d") === true) {
            background = "#696969";
        }
        squareEl.css("background", background);
    };
    BeginnerExampleComponent.prototype.onMouseOverSquare = function (event) {
        /// this.highlightColumn(event.piece);
    };
    BeginnerExampleComponent.prototype.onMouseoutSquare = function (event) {
        // this.removeGreySquares();
    };
    BeginnerExampleComponent.prototype.removeGreySquares = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__("#board .square-55d63").css("background", "");
    };
    BeginnerExampleComponent.prototype.puzzleexample = function (episodeid, puzzleid) {
        if (episodeid == 1) {
            if (puzzleid == 1) {
                this.greySquare("c6");
            }
            if (puzzleid == 2) {
                this.greySquare("e4");
            }
            if (puzzleid == 3) {
                // console.log('3rd example');
                this.greySquare("e6");
            }
            if (puzzleid == 4) {
                // console.log('4th example');
                this.greySquare("b3");
            }
            if (puzzleid == 5) {
                this.greySquare("h3");
            }
            if (puzzleid == 6) {
                this.highlightColumn("f1");
                this.highlightColumn("g1");
                this.highlightColumn("h1");
            }
            if (puzzleid == 7) {
                this.highlightColumn("a1");
                this.highlightColumn("b1");
                this.highlightColumn("c1");
            }
            if (puzzleid == 8) {
                this.highlightRow("a3");
            }
            if (puzzleid == 9) {
                this.highlightRow("a6");
            }
        }
        else if (episodeid == 2) {
            if (puzzleid == 1) {
                this.greySquare("d3");
                this.greySquare("d4");
                this.greySquare("d5");
                this.greySquare("e3");
                this.greySquare("e5");
                this.greySquare("f3");
                this.greySquare("f4");
                this.greySquare("f5");
            }
            if (puzzleid == 2) {
                this.greySquare("e6");
                this.greySquare("e5");
                this.greySquare("d5");
                this.greySquare("c5");
                this.greySquare("c6");
                this.greySquare("c7");
                this.greySquare("d7");
                this.greySquare("e7");
            }
            if (puzzleid == 3) {
                this.greySquare("g7");
                this.greySquare("g8");
                this.greySquare("h7");
            }
            if (puzzleid == 4) {
                this.greySquare("f3");
                this.greySquare("h3");
                this.greySquare("e2");
            }
            if (puzzleid == 5) {
                this.greySquare("d6");
                this.greySquare("f6");
                this.greySquare("c5");
                this.greySquare("g5");
                this.greySquare("c3");
                this.greySquare("g3");
                this.greySquare("d2");
                this.greySquare("f2");
            }
            if (puzzleid == 6) {
                this.greySquare("b3");
                this.greySquare("c2");
                // this.highlightColumn('f1');
                // this.highlightColumn('g1');
                // this.highlightColumn('h1');
            }
            if (puzzleid == 7) {
                this.greySquare("g7");
                this.greySquare("f6");
                this.greySquare("f4");
                this.greySquare("g3");
                // this.highlightColumn('a1');
                // this.highlightColumn('b1');
                // this.highlightColumn('c1');
            }
            if (puzzleid == 8) {
                this.greySquare("f7");
                this.greySquare("f3");
                this.greySquare("d7");
                this.greySquare("d3");
                this.greySquare("c6");
                this.greySquare("g6");
                this.greySquare("c4");
                this.greySquare("g4");
                this.yellowSquare("f6");
                this.yellowSquare("f2");
                this.yellowSquare("d6");
                this.yellowSquare("d2");
                this.yellowSquare("c5");
                this.yellowSquare("g3");
                this.yellowSquare("g5");
                this.yellowSquare("c3");
            }
            if (puzzleid == 9) {
                this.greySquare("a6");
                this.greySquare("b5");
                this.greySquare("c4");
                this.greySquare("d3");
                this.greySquare("e2");
                this.greySquare("g2");
                this.greySquare("h3");
                // this.highlightRow('a3');
            }
            if (puzzleid == 10) {
                this.greySquare("e5");
                this.greySquare("f6");
                this.greySquare("g7");
                this.greySquare("h8");
                this.greySquare("e3");
                this.greySquare("f2");
                this.greySquare("g1");
                this.greySquare("c3");
                this.greySquare("b2");
                this.greySquare("a1");
                this.greySquare("c5");
                this.greySquare("b6");
                this.greySquare("a7");
                // this.highlightRow('a2');
                // this.highlightColumn('h1');
            }
            if (puzzleid == 11) {
                this.greySquare("b5");
                this.greySquare("c6");
                this.greySquare("d7");
                this.greySquare("e8");
                this.greySquare("b3");
                this.greySquare("c2");
                this.greySquare("d1");
            }
            if (puzzleid == 12) {
                this.highlightRow("a1");
                this.highlightColumn("a1");
            }
            if (puzzleid == 13) {
                this.highlightRow("e4");
                this.highlightColumn("e1");
            }
            if (puzzleid == 14) {
                this.highlightRow("h2");
                this.highlightColumn("h1");
            }
            if (puzzleid == 15) {
                this.highlightRow("d1");
                this.highlightColumn("d1");
                this.greySquare("c2");
                this.greySquare("b3");
                this.greySquare("a4");
                this.greySquare("e2");
                this.greySquare("f3");
                this.greySquare("g4");
                this.greySquare("h5");
            }
            if (puzzleid == 16) {
                this.highlightRow("h8");
                this.highlightColumn("h1");
                this.greySquare("g7");
                this.greySquare("f6");
                this.greySquare("e5");
                this.greySquare("d4");
                this.greySquare("c3");
                this.greySquare("b2");
                this.greySquare("a1");
            }
            if (puzzleid == 17) {
                this.highlightRow("e4");
                this.highlightColumn("e1");
                this.greySquare("d5");
                this.greySquare("c6");
                this.greySquare("b7");
                this.greySquare("a8");
                this.greySquare("f5");
                this.greySquare("g6");
                this.greySquare("h7");
                this.greySquare("f3");
                this.greySquare("g2");
                this.greySquare("h1");
                this.greySquare("d3");
                this.greySquare("c2");
                this.greySquare("b1");
            }
        }
        else if (episodeid == 3) {
            if (puzzleid == 1) {
                this.greySquare("d3");
                this.greySquare("d4");
            }
            if (puzzleid == 2) {
                this.greySquare("h4");
            }
            if (puzzleid == 3) {
                this.greySquare("d4");
                this.greySquare("f4");
            }
            if (puzzleid == 4) {
                this.greySquare("c8");
            }
            if (puzzleid == 5) {
                this.greySquare("e5");
                this.greySquare("d6");
            }
            if (puzzleid == 6) {
                this.greySquare("b3");
                this.greySquare("c3");
                this.greySquare("d3");
            }
        }
        else if (episodeid == 4) {
            if (puzzleid == 1) {
                this.greySquare("f1");
                this.greySquare("g1");
            }
            if (puzzleid == 2) {
                this.greySquare("c1");
                this.greySquare("d1");
            }
            if (puzzleid == 3) {
                this.greySquare("f8");
                this.greySquare("g8");
            }
        }
    };
    BeginnerExampleComponent.prototype.clickedYes = function () {
        // Action on 'Yes'
    };
    BeginnerExampleComponent.prototype.clickedNo = function () {
        // Action on 'No'
    };
    BeginnerExampleComponent.prototype.onBoardClick = function (event) {
        var boardClickId = event.target.id;
        event.target.className += " highlight1-32417";
        var square = event.target.dataset.square;
        if (this.level === 1) {
            if (parseInt(this.puzzleDetail.id) === 1) {
                var counter_1 = 0;
                if (square === "d4" ||
                    square === "e4" ||
                    square === "d5" ||
                    square === "e5") {
                    jquery__WEBPACK_IMPORTED_MODULE_4__("#board .highlight1-32417").each(function (index, element) {
                        if (element.dataset.square === "d4") {
                            counter_1 = counter_1 + 1;
                        }
                        if (element.dataset.square === "d5") {
                            counter_1 = counter_1 + 1;
                        }
                        if (element.dataset.square === "e4") {
                            counter_1 = counter_1 + 1;
                        }
                        if (element.dataset.square === "e5") {
                            counter_1 = counter_1 + 1;
                        }
                    });
                    if (counter_1 > 3) {
                        // console.log('yes');
                        this.player_status_message = this.message_success[0];
                        this.sub_text = this.message_success[1];
                    }
                    else {
                        // console.log('still in progress');
                    }
                }
                else {
                    // console.log('failed');
                    this.player_status_message = this.message_fail[0];
                    this.sub_text = this.message_fail[1];
                    this.removeHighlightedSquares();
                }
            }
            if (parseInt(this.puzzleDetail.id) === 2 ||
                parseInt(this.puzzleDetail.id) === 3) {
                if (square === "d6") {
                    // console.log('yes');
                    this.player_status_message = this.message_success[0];
                    this.sub_text = this.message_success[1];
                }
                else {
                    // console.log('failed');
                    this.player_status_message = this.message_fail[0];
                    this.sub_text = this.message_fail[1];
                    this.removeHighlightedSquares();
                }
            }
            if (parseInt(this.puzzleDetail.id) === 4 ||
                parseInt(this.puzzleDetail.id) === 5) {
                if (square === "b3") {
                    // console.log('yes');
                    this.player_status_message = this.message_success[0];
                    this.sub_text = this.message_success[1];
                }
                else {
                    // console.log('failed');
                    this.player_status_message = this.message_fail[0];
                    this.sub_text = this.message_fail[1];
                    this.removeHighlightedSquares();
                }
            }
            if (parseInt(this.puzzleDetail.id) === 6 ||
                parseInt(this.puzzleDetail.id) === 7) {
                if (square === "g4") {
                    // console.log('yes');
                    this.player_status_message = this.message_success[0];
                    this.sub_text = this.message_success[1];
                }
                else {
                    // console.log('failed');
                    this.player_status_message = this.message_fail[0];
                    this.sub_text = this.message_fail[1];
                    this.removeHighlightedSquares();
                }
            }
            if (parseInt(this.puzzleDetail.id) === 8 ||
                parseInt(this.puzzleDetail.id) === 9) {
                if (square === "a8") {
                    // console.log('yes');
                    this.player_status_message = this.message_success[0];
                    this.sub_text = this.message_success[1];
                }
                else {
                    // console.log('failed');
                    this.player_status_message = this.message_fail[0];
                    this.sub_text = this.message_fail[1];
                    this.removeHighlightedSquares();
                }
            }
            if (parseInt(this.puzzleDetail.id) === 10 ||
                parseInt(this.puzzleDetail.id) === 11) {
                if (square === "f6") {
                    // console.log('yes');
                    this.player_status_message = this.message_success[0];
                    this.sub_text = this.message_success[1];
                }
                else {
                    // console.log('failed');
                    this.player_status_message = this.message_fail[0];
                    this.sub_text = this.message_fail[1];
                    this.removeHighlightedSquares();
                }
            }
            if (parseInt(this.puzzleDetail.id) === 12 ||
                parseInt(this.puzzleDetail.id) === 13) {
                this.highlightColumn(square);
                var counter_2 = 0, rcounter_1 = 0;
                jquery__WEBPACK_IMPORTED_MODULE_4__("#board .highlight1-32417").each(function (index, element) {
                    var row = element.dataset.square[1];
                    var column = element.dataset.square[0];
                    counter_2 = counter_2 + 1;
                    if (column === "d") {
                        rcounter_1 = rcounter_1 + 1;
                    }
                    if (column === "e") {
                        rcounter_1 = rcounter_1 + 1;
                    }
                });
                if (counter_2 == 2 && rcounter_1 == 2) {
                    // console.log('yes');
                    this.player_status_message = this.message_success[0];
                    this.sub_text = this.message_success[1];
                }
                else {
                    this.player_status_message = this.message_fail[0];
                    this.sub_text = this.message_fail[1];
                }
            }
            if (parseInt(this.puzzleDetail.id) === 14 ||
                parseInt(this.puzzleDetail.id) === 15) {
                this.highlightColumn(square);
                var counter_3 = 0, rcounter_2 = 0;
                jquery__WEBPACK_IMPORTED_MODULE_4__("#board .highlight1-32417").each(function (index, element) {
                    var row = element.dataset.square[1];
                    var column = element.dataset.square[0];
                    counter_3 = counter_3 + 1;
                    if (column === "f") {
                        rcounter_2 = rcounter_2 + 1;
                    }
                    if (column === "g") {
                        rcounter_2 = rcounter_2 + 1;
                    }
                    if (column === "h") {
                        rcounter_2 = rcounter_2 + 1;
                    }
                });
                if (counter_3 == 3 && rcounter_2 == 3) {
                    // console.log('yes');
                    this.player_status_message = this.message_success[0];
                    this.sub_text = this.message_success[1];
                }
                else {
                    this.player_status_message = this.message_fail[0];
                    this.sub_text = this.message_fail[1];
                }
            }
            if (parseInt(this.puzzleDetail.id) === 16 ||
                parseInt(this.puzzleDetail.id) === 17) {
                this.highlightColumn(square);
                var counter_4 = 0, rcounter_3 = 0;
                jquery__WEBPACK_IMPORTED_MODULE_4__("#board .highlight1-32417").each(function (index, element) {
                    var row = element.dataset.square[1];
                    var column = element.dataset.square[0];
                    counter_4 = counter_4 + 1;
                    if (column === "a") {
                        rcounter_3 = rcounter_3 + 1;
                    }
                    if (column === "b") {
                        rcounter_3 = rcounter_3 + 1;
                    }
                    if (column === "c") {
                        rcounter_3 = rcounter_3 + 1;
                    }
                });
                if (counter_4 == 3 && rcounter_3 == 3) {
                    // console.log('yes');
                    this.player_status_message = this.message_success[0];
                    this.sub_text = this.message_success[1];
                }
                else {
                    this.player_status_message = this.message_fail[0];
                    this.sub_text = this.message_fail[1];
                }
            }
            if (parseInt(this.puzzleDetail.id) === 18 ||
                parseInt(this.puzzleDetail.id) === 19) {
                this.highlightRow(square);
                var counter_5 = 0, rcounter_4 = 0;
                jquery__WEBPACK_IMPORTED_MODULE_4__("#board .highlight1-32417").each(function (index, element) {
                    var row = element.dataset.square[1];
                    var column = element.dataset.square[0];
                    counter_5 = counter_5 + 1;
                    if (parseInt(row) === 6) {
                        rcounter_4 = rcounter_4 + 1;
                    }
                });
                if (counter_5 == 1 && rcounter_4 == 1) {
                    // console.log('yes');
                    this.player_status_message = this.message_success[0];
                    this.sub_text = this.message_success[1];
                }
                else {
                    this.player_status_message = this.message_fail[0];
                    this.sub_text = this.message_fail[1];
                }
            }
        }
    };
    BeginnerExampleComponent.prototype.ngAfterViewInit = function () {
        this.puzzleexample(this.episode_id, this.puzzleDetail.id);
    };
    BeginnerExampleComponent.ɵfac = function BeginnerExampleComponent_Factory(t) { return new (t || BeginnerExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_example_service__WEBPACK_IMPORTED_MODULE_0__["ExampleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadCrumbService"])); };
    BeginnerExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BeginnerExampleComponent, selectors: [["app-beginner-example"]], hostVars: 2, hostBindings: function BeginnerExampleComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function BeginnerExampleComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.BeginnerExampleComponentClass);
        } }, decls: 16, vars: 9, consts: [[1, "puzzle_detail_container"], [1, "heading"], [1, "puzzle-col"], [3, "boardSize", "position", "orientation", "mouseOverOnBoard", "mouseOutEvent"], [1, "puzzle_detail"], [1, "display_board"], [1, "about_puzzle"], [1, "about_detail"], ["class", "btn_container", 4, "ngIf"], [1, "puzzle_status"], [1, "well_done"], [1, "btn_container"], [3, "click"]], template: function BeginnerExampleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "app-base-example", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseOverOnBoard", function BeginnerExampleComponent_Template_app_base_example_mouseOverOnBoard_4_listener($event) { return ctx.onMouseOverSquare($event); })("mouseOutEvent", function BeginnerExampleComponent_Template_app_base_example_mouseOutEvent_4_listener($event) { return ctx.onMouseoutSquare($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, BeginnerExampleComponent_div_11_Template, 5, 0, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Example ", ctx.puzzleDetail.id, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("boardSize", ctx.boardSize)("position", ctx.chessConfig.position)("orientation", ctx.chessConfig.orientation);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.puzzleDetail.heading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.puzzleDetail.detail);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.puzzleDetail.question_type === "boolean");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.player_status_message);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.sub_text);
        } }, directives: [_base_example_base_example_component__WEBPACK_IMPORTED_MODULE_5__["BaseExampleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], encapsulation: 2 });
    return BeginnerExampleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BeginnerExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: "app-beginner-example",
                templateUrl: "./beginner-example.component.html",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _example_service__WEBPACK_IMPORTED_MODULE_0__["ExampleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadCrumbService"] }]; }, { BeginnerExampleComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ["class"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ["window:resize", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dr-functionality/example/example-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/example/example-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ExampleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleRoutingModule", function() { return ExampleRoutingModule; });
/* harmony import */ var _beginner_example_beginner_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beginner-example/beginner-example.component */ "./src/app/user/dreamroom/dr-functionality/example/beginner-example/beginner-example.component.ts");
/* harmony import */ var _example_study_example_study_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example-study/example-study.component */ "./src/app/user/dreamroom/dr-functionality/example/example-study/example-study.component.ts");
/* harmony import */ var _example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example.component */ "./src/app/user/dreamroom/dr-functionality/example/example.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







var routes = [
    {
        path: ':productId/:level/:episode_id',
        component: _example_component__WEBPACK_IMPORTED_MODULE_2__["ExampleComponent"],
        children: [
            {
                path: 'example-study/:puzzleId',
                component: _example_study_example_study_component__WEBPACK_IMPORTED_MODULE_1__["ExampleStudyComponent"]
            },
            {
                path: 'beginner/example-study/:puzzleId',
                component: _beginner_example_beginner_example_component__WEBPACK_IMPORTED_MODULE_0__["BeginnerExampleComponent"]
            }
        ]
    }
];
var ExampleRoutingModule = /** @class */ (function () {
    function ExampleRoutingModule() {
    }
    ExampleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ExampleRoutingModule });
    ExampleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ExampleRoutingModule_Factory(t) { return new (t || ExampleRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
    return ExampleRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ExampleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ExampleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dr-functionality/example/example-study/example-study.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/example/example-study/example-study.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ExampleStudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleStudyComponent", function() { return ExampleStudyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../app-common/pre-loader/pre-loader.component */ "./src/app/app-common/pre-loader/pre-loader.component.ts");














function ExampleStudyComponent_app_pre_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-pre-loader");
} }
function ExampleStudyComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Try visualizing all possible solutions and then click to view solution");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExampleStudyComponent_ng_container_4_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.showSolution(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "View Solution");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.detail);
} }
var ExampleStudyComponent = /** @class */ (function () {
    function ExampleStudyComponent(_routes, _authService, router, breadcrum, sanitizer) {
        this._routes = _routes;
        this._authService = _authService;
        this.router = router;
        this.breadcrum = breadcrum;
        this.sanitizer = sanitizer;
        this.ExampleStudyComponentClass = 'app-example-study';
        this.isSolutionActive = false;
        this.pgn = '{***} 27. Bxf5+ g6 (27... Kh8 28. Qe8+) 28. Qf7+ $1 Kh6 (28... Kh8 29. Bxg6 $1 (29. Be6 $1 Qd8 30. Kxf1 $18) 29... Qh6 30. Kxf1 $18) 29. Bd2 $1 (29. Qg8 $4 gxf5 $19) (29. Bxg6 $1 Qxg6 30. Bd2+ $1 Bf4 31. Bxf4+ Nxf4 32. Qxf4+ $18) 29... Bf4 (29... Ne3 30. Bxg6 $18) 30. Qf8+ Kh7 31. Be6 $1 $18 1-0';
    }
    ExampleStudyComponent.prototype.ngOnInit = function () { };
    ExampleStudyComponent.prototype.ngAfterViewInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadScript('assets/pgn-viewer/js/pgnvjs.js')];
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
                                })
                                    .subscribe(function (res) {
                                    // console.log(res, "RESPONSE PGN");
                                    // this.pgnFile = res.data.puzzle.pgn;
                                    // const blob = new Blob([this.pgnFile], {
                                    //   type: "application/octet-stream"
                                    // });
                                    // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
                                    //   window.URL.createObjectURL(blob)
                                    // );
                                    // this.downloadPgn();
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
                                        locale: 'en',
                                        pieceStyle: 'merida',
                                    };
                                    // console.log(this.cfg, "cfggggggggg");
                                    _this.isSolutionActive = true;
                                    _this.onResize();
                                    var board = pgnView('board', _this.cfg);
                                    // loader stopped
                                    _this.isLoading = false;
                                });
                            });
                        });
                        // console.log(this.level, "level")
                        this.breadcrum.levelSelectorBreadcrumb(this.level);
                        //example
                        this.breadcrum.exampleBreadCrumb(1);
                        return [2 /*return*/];
                }
            });
        });
    };
    ExampleStudyComponent.prototype.ngOnDestroy = function () { };
    ExampleStudyComponent.prototype.loadScript = function (scriptUrl) {
        return new Promise(function (resolve, reject) {
            var scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.id = 'example_pgn_viewer';
            scriptElement.type = 'text/javascript';
            scriptElement.onload = resolve;
            scriptElement.onerror = reject;
            document.body.appendChild(scriptElement);
        });
    };
    ExampleStudyComponent.prototype.onResize = function () {
        if (window.innerWidth > 1100) {
            this.cfg.boardSize = '500px';
        }
        else if (window.innerWidth > 800) {
            this.cfg.boardSize = '400px';
        }
        else if (window.innerWidth > 400) {
            this.cfg.boardSize = '300px';
        }
        else if (window.innerWidth > 350) {
            this.cfg.boardSize = '250px';
        }
        else if (window.innerWidth > 300) {
            this.cfg.boardSize = '220px';
        }
        else {
            this.cfg.boardSize = '200px';
        }
    };
    ExampleStudyComponent.prototype.showSolution = function () {
        this.isSolutionActive = false;
        document.getElementById('boardMoves').style.display = 'block';
        document.getElementById('boardButton').style.display = 'block';
    };
    ExampleStudyComponent.prototype.downloadPgn = function () {
        // const blob = new Blob([this.pgnFile], { type: "text/csv" });
        // const url = window.URL.createObjectURL(blob);
        // window.open(url);
    };
    ExampleStudyComponent.ɵfac = function ExampleStudyComponent_Factory(t) { return new (t || ExampleStudyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
    ExampleStudyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ExampleStudyComponent, selectors: [["app-example-study"]], hostVars: 2, hostBindings: function ExampleStudyComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.ExampleStudyComponentClass);
        } }, decls: 5, vars: 2, consts: [[1, "puzzle_item_container"], [4, "ngIf"], ["id", "board", 1, "board"], [1, "hint_option"], [1, "heading"], [1, "sub_heading"], [3, "click"]], template: function ExampleStudyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExampleStudyComponent_app_pre_loader_1_Template, 1, 0, "app-pre-loader", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExampleStudyComponent_ng_container_4_Template, 9, 2, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSolutionActive);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_7__["PreLoaderComponent"]], styles: [".app-example-study[_ngcontent-%COMP%]   .puzzle_item_container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.app-example-study[_ngcontent-%COMP%]   .puzzle_item_container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 20;\n}\n\n.app-example-study[_ngcontent-%COMP%]   .puzzle_item_container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.app-example-study[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-weight: bold;\n  font-size: 1.5em;\n}\n\n.app-example-study[_ngcontent-%COMP%]   .sub_heading[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  margin-bottom: 3em;\n  font-weight: 400;\n}\n\n.app-example-study[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.app-example-study[_ngcontent-%COMP%]   .hint_option[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 100%;\n  text-align: center;\n}\n\n.app-example-study[_ngcontent-%COMP%]   .hint_option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.app-example-study[_ngcontent-%COMP%]   .hint_option[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #A0CC50;\n  padding: 10px 30px;\n  border: 0;\n  margin: 1em auto;\n  border-radius: 6px;\n  margin-bottom: 8px;\n  color: white;\n  cursor: pointer;\n  -webkit-filter: drop-shadow(2px 2px 4px #cccccc);\n          filter: drop-shadow(2px 2px 4px #cccccc);\n}\n\n.app-example-study[_ngcontent-%COMP%]   .hint_option[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #34c2d6;\n}\n\n.app-example-study[_ngcontent-%COMP%]   #boardButton[_ngcontent-%COMP%] {\n  text-align: center;\n  display: none;\n}\n\n.app-example-study[_ngcontent-%COMP%]   #boardButton[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #769455;\n  padding: 10px 18px;\n  margin-top: 1em;\n}\n\n.app-example-study[_ngcontent-%COMP%]   .white-1e1d7[_ngcontent-%COMP%] {\n  background-color: #edeed1;\n  color: #769455;\n}\n\n.app-example-study[_ngcontent-%COMP%]   .black-3c85d[_ngcontent-%COMP%] {\n  background-color: #769455;\n  color: #edeed1;\n}\n\n.app-example-study[_ngcontent-%COMP%]   #boardMoves[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-left: 10px;\n  min-width: 250px;\n  padding: 1em;\n  border: 1px solid #cccccc;\n  background: white;\n  border-radius: 6px;\n  max-height: 500px;\n  overflow-y: scroll;\n  display: none;\n}\n\n@media screen and (min-width: 1260px) {\n  .app-example-study[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n  }\n  .app-example-study[_ngcontent-%COMP%]   #boardMoves[_ngcontent-%COMP%] {\n    margin-left: 1em;\n    height: 560px;\n  }\n}\n\n@media screen and (max-width: 1259px) {\n  .app-example-study[_ngcontent-%COMP%]   .puzzle_item_container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .app-example-study[_ngcontent-%COMP%]   .puzzle_item_container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    margin-top: 1em;\n  }\n  .app-example-study[_ngcontent-%COMP%]   .hint_option[_ngcontent-%COMP%] {\n    position: relative;\n    top: 0;\n    right: 0;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    text-align: center;\n    width: 90%;\n    align-items: center;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9kcmVhbXJvb20vZHItZnVuY3Rpb25hbGl0eS9leGFtcGxlL2V4YW1wbGUtc3R1ZHkvZXhhbXBsZS1zdHVkeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQWE7QUFBakI7O0FBRkE7RUFJTSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFFakI7O0FBUkE7RUFRUSxZQUFZO0FBSXBCOztBQVpBO0VBY0ksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFFcEI7O0FBbEJBO0VBb0JJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBRXBCOztBQXhCQTtFQTBCSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUV2Qjs7QUE5QkE7RUFpQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQUN0Qjs7QUF0Q0E7RUF1Q00sZ0JBQWdCO0FBR3RCOztBQTFDQTtFQTBDTSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdEQUF3QztVQUF4Qyx3Q0FBd0M7QUFJOUM7O0FBdkRBO0VBcURRLHlCQUF5QjtBQU1qQzs7QUEzREE7RUEyREksa0JBQWtCO0VBT2xCLGFBQWE7QUFGakI7O0FBaEVBO0VBOERNLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtBQU1yQjs7QUF0RUE7RUFzRUkseUJBQXlCO0VBQ3pCLGNBQWM7QUFJbEI7O0FBM0VBO0VBMkVJLHlCQUF5QjtFQUN6QixjQUFjO0FBSWxCOztBQWhGQTtFQWdGSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUVoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFFbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0FBRWpCOztBQVVFO0VBdkdGO0lBeUdNLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0VBUHpCO0VBcEdGO0lBZ0hNLGdCQUFnQjtJQUNoQixhQUFhO0VBVGpCO0FBQ0Y7O0FBWUU7RUFySEY7SUF1SE0sYUFBYTtJQUNiLHNCQUFzQjtFQVQxQjtFQS9HRjtJQTJIUSxlQUFlO0VBVHJCO0VBbEhGO0lBK0hNLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7RUFWaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZHJlYW1yb29tL2RyLWZ1bmN0aW9uYWxpdHkvZXhhbXBsZS9leGFtcGxlLXN0dWR5L2V4YW1wbGUtc3R1ZHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWV4YW1wbGUtc3R1ZHkge1xyXG4gIC5wdXp6bGVfaXRlbV9jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5sb2FkZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgbWF0LXNwaW5uZXJ7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVhZGluZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gIH1cclxuXHJcbiAgLnN1Yl9oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuXHJcbiAgLmJvYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIGp1c3RpZnktY29udGVudDogYmFzZWxpbmU7XHJcbiAgfVxyXG5cclxuICAuaGludF9vcHRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBDQzUwO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgbWFyZ2luOiAxZW0gYXV0bztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNHB4ICNjY2NjY2MpO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRjMmQ2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjYm9hcmRCdXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogIzc2OTQ1NTtcclxuICAgICAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLndoaXRlLTFlMWQ3IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVlZDE7XHJcbiAgICBjb2xvcjogIzc2OTQ1NTtcclxuICB9XHJcblxyXG4gIC5ibGFjay0zYzg1ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzY5NDU1O1xyXG4gICAgY29sb3I6ICNlZGVlZDE7XHJcbiAgfVxyXG5cclxuICAjYm9hcmRNb3ZlcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG5cclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgLy8gLm1vdmVDb21tZW50IHtcclxuICAgIC8vICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIC8vICAgcGFkZGluZzogMWVtO1xyXG4gICAgLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAvLyAgIGNvbG9yOiAjYTBjZTRlO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI2MHB4KSB7XHJcbiAgICAuYm9hcmQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICNib2FyZE1vdmVzIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgICAgaGVpZ2h0OiA1NjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTlweCkge1xyXG4gICAgLnB1enpsZV9pdGVtX2NvbnRhaW5lcntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhpbnRfb3B0aW9uIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
    return ExampleStudyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ExampleStudyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-example-study',
                templateUrl: './example-study.component.html',
                styleUrls: ['./example-study.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }]; }, { ExampleStudyComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dr-functionality/example/example.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/example/example.component.ts ***!
  \******************************************************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var _dreamroom_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../dreamroom-data.service */ "./src/app/user/dreamroom/dreamroom-data.service.ts");
/* harmony import */ var _example_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example.service */ "./src/app/user/dreamroom/dr-functionality/example/example.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");
















function ExampleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "No examples are available for this episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ExampleComponent_div_1_mat_select_1_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExampleComponent_div_1_mat_select_1_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); var puzzle_r5 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r7.playPuzzle(puzzle_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var puzzle_r5 = ctx.$implicit;
    var j_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("value", "Example ", puzzle_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Example ", j_r6 + 1, "");
} }
function ExampleComponent_div_1_mat_select_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function ExampleComponent_div_1_mat_select_1_Template_mat_select_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.matSelectPuzzle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExampleComponent_div_1_mat_select_1_mat_option_1_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r2.matSelectPuzzle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.puzzles);
} }
var _c0 = function (a0) { return { "activePuzzle": a0 }; };
function ExampleComponent_div_1_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExampleComponent_div_1_div_2_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); var puzzle_r12 = ctx.$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r14.playPuzzle(puzzle_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var puzzle_r12 = ctx.$implicit;
    var i_r13 = ctx.index;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, puzzle_r12.id === ctx_r11.currentPuzzle));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Example ", i_r13 + 1, " ");
} }
function ExampleComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExampleComponent_div_1_div_2_div_1_Template, 2, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.puzzles);
} }
function ExampleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExampleComponent_div_1_mat_select_1_Template, 2, 2, "mat-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExampleComponent_div_1_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.mobileVersion());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.mobileVersion());
} }
var ExampleComponent = /** @class */ (function () {
    function ExampleComponent(_authService, _router, _routes, _exampleService, _location, _dreamroomService) {
        this._authService = _authService;
        this._router = _router;
        this._routes = _routes;
        this._exampleService = _exampleService;
        this._location = _location;
        this._dreamroomService = _dreamroomService;
        this.ExampleComponentClass = "app-example";
        this.puzzleReceived = true;
        this.puzzles = [];
    }
    ExampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this._routes.params.subscribe(function (params) {
            // now get puzzles based on level and episode id
            var level = params.level;
            var episode_id = params.episode_id;
            _this.productId = parseInt(params.productId);
            _this._location.subscribe(function (data) {
                if (data.url ===
                    "/user/dreamroom/dr-functionality/example/" + params.productId + "/" + level + "/" + episode_id) {
                    _this._location.back();
                }
            });
            if (parseInt(level) === 2 || parseInt(level) === 3) {
                _this._authService
                    .getPuzzleList({
                    level: level,
                    episode_id: episode_id,
                    product_id: _this.productId,
                    puzzle_type: 0,
                })
                    .subscribe(function (res) {
                    if (res.data.list.count > 0) {
                        _this.puzzleReceived = true;
                        _this.puzzles = res.data.list.rows;
                        _this.currentPuzzle = _this.puzzles[0].id;
                        _this.matSelectPuzzle = "Example " + _this.puzzles[0].id;
                        _this._router.navigateByUrl("user/dreamroom/dr-functionality/example/" + params.productId + "/" + level + "/" + episode_id + "/example-study/" + _this.currentPuzzle);
                    }
                    else {
                        _this.puzzleReceived = false;
                    }
                }, function (err) {
                    _this.puzzleReceived = false;
                    // handle error here
                });
            }
            else if (parseInt(level) === 1) {
                if (episode_id < 6) {
                    _this.puzzleReceived = true;
                    _this.puzzles = _this._exampleService.getBeginnerExampleList(episode_id);
                    _this.currentPuzzle = _this.puzzles[0].id;
                    _this.matSelectPuzzle = "Example " + _this.puzzles[0].id;
                    _this._router.navigateByUrl("user/dreamroom/dr-functionality/example/" + params.productId + "/" + level + "/" + episode_id + "/beginner/example-study/" + _this.currentPuzzle);
                }
                else {
                    _this._authService
                        .getPuzzleList({
                        level: level,
                        episode_id: episode_id,
                        product_id: _this.productId,
                    })
                        .subscribe(function (res) {
                        if (res.data.list.count > 0) {
                            _this.puzzleReceived = true;
                            _this.puzzles = res.data.list.rows;
                            _this.currentPuzzle = _this.puzzles[0].id;
                            _this.matSelectPuzzle = "Example " + _this.puzzles[0].id;
                            _this._router.navigateByUrl("user/dreamroom/dr-functionality/example/" + params.productId + "/" + level + "/" + episode_id + "/example-study/" + _this.currentPuzzle);
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
    ExampleComponent.prototype.mobileVersion = function () {
        return window.innerWidth < 800;
    };
    ExampleComponent.prototype.playPuzzle = function (data) {
        var _this = this;
        this.currentPuzzle = data.id;
        this.matSelectPuzzle = "Example " + data.id;
        this._routes.params.subscribe(function (params) {
            if (parseInt(params.level) === 2 || parseInt(params.level) === 3) {
                _this._router.navigateByUrl("user/dreamroom/dr-functionality/example/" + params.productId + "/" + params.level + "/" + params.episode_id + "/example-study/" + data.id);
            }
            else if (parseInt(params.level) === 1) {
                if (params.episode_id < 6) {
                    _this._router.navigateByUrl("user/dreamroom/dr-functionality/example/" + params.productId + "/" + params.level + "/" + params.episode_id + "/beginner/example-study/" + data.id);
                }
                else {
                    _this._authService
                        .getPuzzleList({
                        level: params.level,
                        episode_id: params.episode_id,
                        product_id: _this.productId,
                    })
                        .subscribe(function (res) {
                        if (res.data.list.count > 0) {
                            _this._router.navigateByUrl("user/dreamroom/dr-functionality/example/" + params.productId + "/" + params.level + "/" + params.episode_id + "/example-study/" + data.id);
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
    ExampleComponent.ɵfac = function ExampleComponent_Factory(t) { return new (t || ExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_example_service__WEBPACK_IMPORTED_MODULE_1__["ExampleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dreamroom_data_service__WEBPACK_IMPORTED_MODULE_0__["DreamroomDataService"])); };
    ExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExampleComponent, selectors: [["app-example"]], hostVars: 2, hostBindings: function ExampleComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.ExampleComponentClass);
        } }, decls: 2, vars: 2, consts: [["class", "no_data_received", 4, "ngIf"], ["class", "puzzle_container", 4, "ngIf"], [1, "no_data_received"], [1, "puzzle_container"], [3, "value", "valueChange", 4, "ngIf"], ["class", "puzzle_menu", 4, "ngIf"], [1, "puzzle_play"], [3, "value", "valueChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], [1, "puzzle_menu"], ["class", "puzzle_card", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "puzzle_card", 3, "ngClass", "click"]], template: function ExampleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ExampleComponent_div_0_Template, 5, 0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExampleComponent_div_1_Template, 5, 2, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.puzzleReceived);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.puzzleReceived);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], encapsulation: 2 });
    return ExampleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: "app-example",
                templateUrl: "./example.component.html",
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _example_service__WEBPACK_IMPORTED_MODULE_1__["ExampleService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }, { type: _dreamroom_data_service__WEBPACK_IMPORTED_MODULE_0__["DreamroomDataService"] }]; }, { ExampleComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"],
            args: ["class"]
        }] }); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dr-functionality/example/example.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/example/example.module.ts ***!
  \***************************************************************************/
/*! exports provided: ExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleModule", function() { return ExampleModule; });
/* harmony import */ var _example_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example.service */ "./src/app/user/dreamroom/dr-functionality/example/example.service.ts");
/* harmony import */ var _beginner_example_beginner_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beginner-example/beginner-example.component */ "./src/app/user/dreamroom/dr-functionality/example/beginner-example/beginner-example.component.ts");
/* harmony import */ var _example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example.component */ "./src/app/user/dreamroom/dr-functionality/example/example.component.ts");
/* harmony import */ var _example_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example-routing.module */ "./src/app/user/dreamroom/dr-functionality/example/example-routing.module.ts");
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../app-bootstrap.module */ "./src/app/app-bootstrap.module.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../app-material-module */ "./src/app/app-material-module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _example_study_example_study_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./example-study/example-study.component */ "./src/app/user/dreamroom/dr-functionality/example/example-study/example-study.component.ts");
/* harmony import */ var _base_example_base_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./base-example/base-example.component */ "./src/app/user/dreamroom/dr-functionality/example/base-example/base-example.component.ts");












var ExampleModule = /** @class */ (function () {
    function ExampleModule() {
    }
    ExampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ExampleModule });
    ExampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function ExampleModule_Factory(t) { return new (t || ExampleModule)(); }, providers: [
            _example_service__WEBPACK_IMPORTED_MODULE_0__["ExampleService"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_8__["AppCommonModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["AppBootstrapModule"],
                _example_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExampleRoutingModule"]
            ]] });
    return ExampleModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ExampleModule, { declarations: [_example_component__WEBPACK_IMPORTED_MODULE_2__["ExampleComponent"],
        _example_study_example_study_component__WEBPACK_IMPORTED_MODULE_9__["ExampleStudyComponent"],
        _beginner_example_beginner_example_component__WEBPACK_IMPORTED_MODULE_1__["BeginnerExampleComponent"],
        _base_example_base_example_component__WEBPACK_IMPORTED_MODULE_10__["BaseExampleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_8__["AppCommonModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
        _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["AppBootstrapModule"],
        _example_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExampleRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](ExampleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_8__["AppCommonModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                    _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["AppBootstrapModule"],
                    _example_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExampleRoutingModule"]
                ],
                declarations: [
                    _example_component__WEBPACK_IMPORTED_MODULE_2__["ExampleComponent"],
                    _example_study_example_study_component__WEBPACK_IMPORTED_MODULE_9__["ExampleStudyComponent"],
                    _beginner_example_beginner_example_component__WEBPACK_IMPORTED_MODULE_1__["BeginnerExampleComponent"],
                    _base_example_base_example_component__WEBPACK_IMPORTED_MODULE_10__["BaseExampleComponent"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["NO_ERRORS_SCHEMA"]],
                providers: [
                    _example_service__WEBPACK_IMPORTED_MODULE_0__["ExampleService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dr-functionality/example/example.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/example/example.service.ts ***!
  \****************************************************************************/
/*! exports provided: ExampleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleService", function() { return ExampleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var ExampleService = /** @class */ (function () {
    function ExampleService() {
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
    ExampleService.prototype.getBeginnerExampleList = function (episodeid) {
        return this.exampleList.filter(function (p) { return parseInt(p.episode) === parseInt(episodeid); });
    };
    ExampleService.prototype.getExampleListById = function (episodeid, id) {
        return this.exampleList.filter(function (p) {
            return parseInt(p.id) === parseInt(id) &&
                parseInt(p.episode) === parseInt(episodeid);
        })[0];
    };
    ExampleService.ɵfac = function ExampleService_Factory(t) { return new (t || ExampleService)(); };
    ExampleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExampleService, factory: ExampleService.ɵfac });
    return ExampleService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=example-example-module.js.map