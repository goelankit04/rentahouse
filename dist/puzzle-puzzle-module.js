(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["puzzle-puzzle-module"],{

/***/ "./src/app/user/dreamroom/dr-functionality/puzzle/base-puzzle/base-puzzle.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/puzzle/base-puzzle/base-puzzle.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BasePuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePuzzleComponent", function() { return BasePuzzleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chess.js */ "./node_modules/chess.js/chess.js");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chess_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");





var _c0 = ["board"];
var BasePuzzleComponent = /** @class */ (function () {
    function BasePuzzleComponent(dialog) {
        this.dialog = dialog;
        this.basePuzzleComponentClass = 'app-base-puzzle';
        this._position = 'start';
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
        this.isInitialFenValid = 1;
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
        this.gameMovesResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // EVENTS
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.snapbackEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moveEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.game = new chess_js__WEBPACK_IMPORTED_MODULE_1__();
    }
    Object.defineProperty(BasePuzzleComponent.prototype, "BoardSize", {
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
    BasePuzzleComponent.prototype.onResize = function (event) {
        if (this.board) {
            this.board.resize(event);
        }
    };
    BasePuzzleComponent.prototype.onClick = function (event) {
        this.boardClick.emit(event);
    };
    Object.defineProperty(BasePuzzleComponent.prototype, "position", {
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
    Object.defineProperty(BasePuzzleComponent.prototype, "orientation", {
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
    Object.defineProperty(BasePuzzleComponent.prototype, "showNotation", {
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
    Object.defineProperty(BasePuzzleComponent.prototype, "draggable", {
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
    Object.defineProperty(BasePuzzleComponent.prototype, "dropOffBoard", {
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
    Object.defineProperty(BasePuzzleComponent.prototype, "moveSpeed", {
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
    Object.defineProperty(BasePuzzleComponent.prototype, "snapbackSpeed", {
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
    Object.defineProperty(BasePuzzleComponent.prototype, "snapSpeed", {
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
    Object.defineProperty(BasePuzzleComponent.prototype, "sparePieces", {
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
    BasePuzzleComponent.prototype.clear = function () {
        this.board.clear(this.animation);
    };
    BasePuzzleComponent.prototype.move = function (notation, event) {
        this.board.position(notation);
    };
    BasePuzzleComponent.prototype.moveToOriginalPosition = function (event) {
        return 'snapback';
    };
    BasePuzzleComponent.prototype.onChangeHandler = function (oldPos, newPos) {
        this.change.emit({ oldPos: oldPos, newPos: newPos });
    };
    BasePuzzleComponent.prototype.onDragStart = function (source, piece, position, orientation) {
        this.dragStart.emit({ source: source, piece: piece, position: position, orientation: orientation });
    };
    BasePuzzleComponent.prototype.onDragMove = function (newLocation, oldLocation, source, piece, position, orientation) {
        this.dragMove.emit({
            newLocation: newLocation,
            oldLocation: oldLocation,
            source: source,
            piece: piece,
            position: position,
            orientation: orientation,
        });
    };
    BasePuzzleComponent.prototype.onDrop = function (source, target, piece, newPos, oldPos, orientation) {
        // this._position = newPos;
        // let board = this.board;
        // this.positionChange.emit(this._position);
        // this.drop.emit({source, target, piece, newPos, oldPos, orientation, board});
        // if (piece === 'wP') {
        //   let dialogRef = this.dialog.open(ChessElementComponent, {
        //     width: '211.88px',
        //   });
        //   dialogRef.afterClosed().subscribe(result => {
        //     if (result.index === 0) {
        //       this.board.position('4Q1k1/8/8/8/4K3/8/8/8 b - - 0 1', this.animation);
        //     }else {
        //       return 'snapback';
        //     }
        //   });
        // }
    };
    BasePuzzleComponent.prototype.onSnapbackEnd = function (piece, square, position, orientation) {
        this.snapbackEnd.emit({ piece: piece, square: square, position: position, orientation: orientation });
    };
    BasePuzzleComponent.prototype.onMoveEnd = function (oldPos, newPos) {
        this._position = newPos;
        this.positionChange.emit(this._position);
        this.moveEnd.emit({ oldPos: oldPos, newPos: newPos });
    };
    BasePuzzleComponent.prototype.onMouseoverSquare = function (piece, square) {
        this.mouseOverOnBoard.emit({ piece: piece, square: square });
    };
    BasePuzzleComponent.prototype.onMouseoutSquare = function (piece, square) {
        this.mouseOutEvent.emit({ piece: piece, square: square });
    };
    BasePuzzleComponent.prototype.OnBoardClick = function (event) {
        this.boardClick.emit(event);
    };
    BasePuzzleComponent.prototype.load = function () {
        this.chessBoardConfig = {
            position: this._position ? this._position : this.position,
            orientation: this._orientation ? 'white' : 'black',
            showNotation: this._showNotation,
            draggable: false,
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
    BasePuzzleComponent.prototype.ngOnInit = function () {
        this.load();
    };
    BasePuzzleComponent.ɵfac = function BasePuzzleComponent_Factory(t) { return new (t || BasePuzzleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
    BasePuzzleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasePuzzleComponent, selectors: [["app-base-puzzle"]], viewQuery: function BasePuzzleComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chessBoard = _t.first);
        } }, hostVars: 2, hostBindings: function BasePuzzleComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function BasePuzzleComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("click", function BasePuzzleComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.basePuzzleComponentClass);
        } }, inputs: { animation: "animation", BoardSize: ["boardSize", "BoardSize"], position: "position", orientation: "orientation", showNotation: "showNotation", draggable: "draggable", dropOffBoard: "dropOffBoard", moveSpeed: "moveSpeed", snapbackSpeed: "snapbackSpeed", snapSpeed: "snapSpeed", sparePieces: "sparePieces" }, outputs: { animationChange: "animationChange", positionChange: "positionChange", orientationChange: "orientationChange", showNotationChange: "showNotationChange", draggableChange: "draggableChange", dropOffBoardChange: "dropOffBoardChange", pieceThemeChange: "pieceThemeChange", moveSpeedChange: "moveSpeedChange", snapbackSpeedChange: "snapbackSpeedChange", snapSpeedChange: "snapSpeedChange", sparePiecesChange: "sparePiecesChange", mouseOverOnBoard: "mouseOverOnBoard", boardClick: "boardClick", mouseOutEvent: "mouseOutEvent", gameMovesResult: "gameMovesResult", change: "change", dragStart: "dragStart", dragMove: "dragMove", drop: "drop", snapbackEnd: "snapbackEnd", moveEnd: "moveEnd" }, decls: 1, vars: 0, consts: [["id", "board", 3, "click"]], template: function BasePuzzleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasePuzzleComponent_Template_div_click_0_listener($event) { return ctx.OnBoardClick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return BasePuzzleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasePuzzleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-base-puzzle',
                templateUrl: './base-puzzle.component.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { basePuzzleComponentClass: [{
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
        }], gameMovesResult: [{
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

/***/ "./src/app/user/dreamroom/dr-functionality/puzzle/beginner-puzzle/beginner-puzzle.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/puzzle/beginner-puzzle/beginner-puzzle.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: BeginnerPuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginnerPuzzleComponent", function() { return BeginnerPuzzleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_puzzle_base_puzzle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-puzzle/base-puzzle.component */ "./src/app/user/dreamroom/dr-functionality/puzzle/base-puzzle/base-puzzle.component.ts");
/* harmony import */ var _puzzle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../puzzle.service */ "./src/app/user/dreamroom/dr-functionality/puzzle/puzzle.service.ts");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function BeginnerPuzzleComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BeginnerPuzzleComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.clickedYes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BeginnerPuzzleComponent_div_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.clickedNo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var BeginnerPuzzleComponent = /** @class */ (function () {
    function BeginnerPuzzleComponent(_routes, _puzzleService, router, breadcrum) {
        this._routes = _routes;
        this._puzzleService = _puzzleService;
        this.router = router;
        this.breadcrum = breadcrum;
        this.beginnerPuzzleComponentClass = 'app-beginner-puzzle';
        this.boardSize = '450px';
        this.message_success = ['Solved', 'Well done!'];
        this.message_fail = [
            'Incorrect',
            'Please try again',
            'Please enter the next move',
            'Not the strongest move',
        ];
        this.arrFen = [];
    }
    BeginnerPuzzleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routes.parent.params.subscribe(function (parentparams) {
            _this.level = parentparams.level;
            _this.episode_id = parentparams.episode_id;
            _this._routes.params.subscribe(function (params) {
                _this.puzzleDetail = _this._puzzleService.getPuzzleById(_this.level, parentparams.episode_id, params.puzzleId);
                _this.chessConfig = _this.puzzleDetail.config;
                _this.arrFen = [];
                _this.arrFen.push(_this.puzzleDetail.config.position);
                jquery__WEBPACK_IMPORTED_MODULE_2__('#board .square-55d63').removeClass('highlight1-32417');
                _this.player_status_message = '';
                _this.sub_text = '';
            });
        });
        this.breadcrum.levelSelectorBreadcrumb(1);
        this.breadcrum.puzzleBreadCrumb(1);
        this.breadcrum.episodeBreadCrumb(this.episode_id);
        if (window.innerWidth < 370) {
            this.boardSize = '200px';
        }
        else if (window.innerWidth < 470) {
            this.boardSize = '300px';
        }
        else if (window.innerWidth < 1100) {
            this.boardSize = '400px';
        }
        else {
            this.boardSize = '500px';
        }
    };
    BeginnerPuzzleComponent.prototype.removeHighlightedSquares = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#board .square-55d63').removeClass('highlight1-32417');
    };
    BeginnerPuzzleComponent.prototype.onResize = function (event) {
        if (window.innerWidth < 370) {
            this.boardSize = '200px';
        }
        else if (window.innerWidth < 470) {
            this.boardSize = '300px';
        }
        else if (window.innerWidth < 1100) {
            this.boardSize = '400px';
        }
        else {
            this.boardSize = '500px';
        }
    };
    BeginnerPuzzleComponent.prototype.highlightRow = function (square) {
        var row = square[1];
        var column = square[0];
        var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        // highlight the possible squares for this piece
        for (var i = 0; i < 8; i++) {
            this.greySquare(arr[i] + row);
        }
    };
    BeginnerPuzzleComponent.prototype.highlightColumn = function (square) {
        var row = square[1];
        var column = square[0];
        for (var i = 1; i <= 8; i++) {
            this.greySquare(column + i);
        }
    };
    BeginnerPuzzleComponent.prototype.greySquare = function (square) {
        var squareEl = jquery__WEBPACK_IMPORTED_MODULE_2__('#board .square-' + square);
        // let background = '#a9a9a9';
        var background = '#89f36d';
        if (squareEl.hasClass('black-3c85d') === true) {
            background = '#696969';
        }
        squareEl.css('background', background);
    };
    BeginnerPuzzleComponent.prototype.onBoardClick = function (event) {
        var boardClickId = event.target.id;
        event.target.className += ' highlight1-32417';
        var square = event.target.dataset.square;
        if (this.level == 1) {
            if (parseInt(this.puzzleDetail.id) === 1) {
                var counter_1 = 0;
                if (square === 'd4' ||
                    square === 'e4' ||
                    square === 'd5' ||
                    square === 'e5') {
                    jquery__WEBPACK_IMPORTED_MODULE_2__('#board .highlight1-32417').each(function (index, element) {
                        if (element.dataset.square === 'd4') {
                            counter_1 = counter_1 + 1;
                        }
                        if (element.dataset.square === 'd5') {
                            counter_1 = counter_1 + 1;
                        }
                        if (element.dataset.square === 'e4') {
                            counter_1 = counter_1 + 1;
                        }
                        if (element.dataset.square === 'e5') {
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
                if (square === 'd6') {
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
                if (square === 'b3') {
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
                if (square === 'g4') {
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
                if (square === 'a8') {
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
                if (square === 'f6') {
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
                jquery__WEBPACK_IMPORTED_MODULE_2__('#board .highlight1-32417').each(function (index, element) {
                    var row = element.dataset.square[1];
                    var column = element.dataset.square[0];
                    counter_2 = counter_2 + 1;
                    if (column === 'd') {
                        rcounter_1 = rcounter_1 + 1;
                    }
                    if (column === 'e') {
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
                jquery__WEBPACK_IMPORTED_MODULE_2__('#board .highlight1-32417').each(function (index, element) {
                    var row = element.dataset.square[1];
                    var column = element.dataset.square[0];
                    counter_3 = counter_3 + 1;
                    if (column === 'f') {
                        rcounter_2 = rcounter_2 + 1;
                    }
                    if (column === 'g') {
                        rcounter_2 = rcounter_2 + 1;
                    }
                    if (column === 'h') {
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
                jquery__WEBPACK_IMPORTED_MODULE_2__('#board .highlight1-32417').each(function (index, element) {
                    var row = element.dataset.square[1];
                    var column = element.dataset.square[0];
                    counter_4 = counter_4 + 1;
                    if (column === 'a') {
                        rcounter_3 = rcounter_3 + 1;
                    }
                    if (column === 'b') {
                        rcounter_3 = rcounter_3 + 1;
                    }
                    if (column === 'c') {
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
                jquery__WEBPACK_IMPORTED_MODULE_2__('#board .highlight1-32417').each(function (index, element) {
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
    BeginnerPuzzleComponent.prototype.onMouseOverSquare = function (event) {
        // this.highlightColumn(event.piece);
    };
    BeginnerPuzzleComponent.prototype.onMouseoutSquare = function (event) {
        // this.removeGreySquares();
    };
    BeginnerPuzzleComponent.prototype.removeGreySquares = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#board .square-55d63').css('background', '');
    };
    BeginnerPuzzleComponent.prototype.clickedYes = function () {
        if (this.level == 1 && this.episode_id == 2) {
            if (this.puzzleDetail.id == 1) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 2) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 3) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 4) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 5) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 6) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 7) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 8) {
                this.showOnClickFail();
            }
        }
        if (this.level == 1 && this.episode_id == 3) {
            if (this.puzzleDetail.id == 1) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 2) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 3) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 4) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 5) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 6) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 7) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 8) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 9) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 10) {
                this.showOnClickSuccess();
            }
        }
        if (this.level == 1 && this.episode_id == 4) {
            if (this.puzzleDetail.id == 1) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 2) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 3) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 4) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 5) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 6) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 7) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 8) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 9) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 10) {
                this.showOnClickFail();
            }
        }
    };
    BeginnerPuzzleComponent.prototype.clickedNo = function () {
        if (this.level == 1 && this.episode_id == 2) {
            if (this.puzzleDetail.id == 1) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 2) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 3) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 4) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 5) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 6) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 7) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 8) {
                this.showOnClickSuccess();
            }
        }
        if (this.level == 1 && this.episode_id == 3) {
            if (this.puzzleDetail.id == 1) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 2) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 3) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 4) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 5) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 6) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 7) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 8) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 9) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 10) {
                this.showOnClickFail();
            }
        }
        if (this.level == 1 && this.episode_id == 4) {
            if (this.puzzleDetail.id == 1) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 2) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 3) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 4) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 5) {
                this.showOnClickFail();
            }
            else if (this.puzzleDetail.id == 6) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 7) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 8) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 9) {
                this.showOnClickSuccess();
            }
            else if (this.puzzleDetail.id == 10) {
                this.showOnClickSuccess();
            }
        }
    };
    BeginnerPuzzleComponent.prototype.onDrop = function (event) {
        if (this.level == 2 && this.episode_id == 1) {
            if (this.puzzleDetail.id == 1) {
                if (this.arrFen.length == 2) {
                    if (event.piece === 'wR' && event.target === 'e6') {
                        this.arrFen.push(event.board.fen());
                        this.basePuzzleCompoment.move('d8-d7', event);
                        this.player_status_message = this.message_success[1];
                    }
                    else {
                        this.showFailMessage();
                        // console.log('return1');
                    }
                }
                if (this.arrFen.length == 1) {
                    if (event.piece === 'wB' && event.target === 'd5') {
                        this.arrFen.push(event.board.fen());
                        this.basePuzzleCompoment.move('d8-d7', event);
                        this.showSuccessMessage();
                    }
                    else {
                        if (this.arrFen.length < 2) {
                            this.showFailMessage();
                            // console.log('return0');
                        }
                    }
                }
            }
            if (this.puzzleDetail.id == 2) {
                if (this.arrFen.length == 3) {
                    if (event.piece === 'wR' && event.target === 'g1') {
                        this.arrFen.push(event.board.fen());
                        this.basePuzzleCompoment.move('a7-d7', event);
                        this.player_status_message = this.message_success[1];
                    }
                    else {
                        this.showFailMessage();
                        // console.log('return2');
                    }
                }
                if (this.arrFen.length == 2) {
                    if (event.piece === 'wQ' && event.target === 'c3') {
                        this.arrFen.push(event.board.fen());
                        this.basePuzzleCompoment.move('h2-g2', event);
                        this.showSuccessMessage();
                    }
                    else {
                        this.showFailMessage();
                        // console.log('return1');
                    }
                }
                if (this.arrFen.length == 1) {
                    if (event.piece === 'wN' && event.target === 'f5') {
                        this.arrFen.push(event.board.fen());
                        this.basePuzzleCompoment.move('e7-c6', event);
                        this.showSuccessMessage();
                    }
                    else {
                        if (this.arrFen.length < 2) {
                            this.showFailMessage();
                            // console.log('return0');
                        }
                    }
                }
            }
            if (this.puzzleDetail.id == 3) {
                if (this.arrFen.length == 2) {
                    if (event.piece === 'bQ' && event.target === 'a5') {
                        this.arrFen.push(event.board.fen());
                        this.basePuzzleCompoment.move('c1-d1', event);
                        this.player_status_message = this.message_success[1];
                    }
                    else {
                        this.showFailMessage();
                        // console.log('return1');
                    }
                }
                if (this.arrFen.length == 1) {
                    if (event.piece === 'bP' && event.target === 'b3') {
                        this.arrFen.push(event.board.fen());
                        this.basePuzzleCompoment.move('a2-b3', event);
                        this.showSuccessMessage();
                    }
                    else {
                        if (this.arrFen.length < 2) {
                            this.showFailMessage();
                        }
                    }
                }
            }
            if (this.puzzleDetail.id == 5) {
                if (this.arrFen.length == 5) {
                    if (event.piece === 'wQ' && event.target === 'g7') {
                        this.arrFen.push(event.board.fen());
                        this.player_status_message = this.message_success[1];
                    }
                    else {
                        this.showFailMessage();
                        // console.log('return3');
                    }
                }
                if (this.arrFen.length == 4) {
                    if (event.piece === 'wP' && event.target === 'g8') {
                        this.arrFen.push(event.board.fen());
                        this.basePuzzleCompoment.move('e8-e7', event);
                        this.showSuccessMessage();
                    }
                    else {
                        this.showFailMessage();
                        // console.log('return3');
                    }
                }
                if (this.arrFen.length == 3) {
                    if (event.piece === 'wP' && event.target === 'g7') {
                        this.arrFen.push(event.board.fen());
                        this.basePuzzleCompoment.move('e7-e6', event);
                        this.showSuccessMessage();
                    }
                    else {
                        this.showFailMessage();
                        // console.log('return2');
                    }
                }
                if (this.arrFen.length == 2) {
                    if (event.piece === 'wN' && event.target === 'd1') {
                        this.arrFen.push(event.board.fen());
                        this.basePuzzleCompoment.move('a5-d2', event);
                        this.showSuccessMessage();
                    }
                    else {
                        this.showFailMessage();
                        // console.log('return1');
                    }
                }
                if (this.arrFen.length == 1) {
                    if (event.piece === 'wP' && event.target === 'f6') {
                        this.arrFen.push(event.board.fen());
                        this.basePuzzleCompoment.move('h1-d1', event);
                        this.showSuccessMessage();
                    }
                    else {
                        if (this.arrFen.length < 2) {
                            this.showFailMessage();
                            // console.log('return0');
                        }
                    }
                }
            }
        }
        if (this.level == 1 && this.episode_id === 7) {
            // console.log('testing puzzle for level1')
        }
    };
    BeginnerPuzzleComponent.prototype.showSuccessMessage = function () {
        this.player_status_message = this.message_success[1];
        this.sub_text = this.message_fail[2];
    };
    BeginnerPuzzleComponent.prototype.showOnClickSuccess = function () {
        this.player_status_message = this.message_success[0];
        this.sub_text = this.message_success[1];
    };
    BeginnerPuzzleComponent.prototype.showOnClickFail = function () {
        this.player_status_message = this.message_fail[0];
        this.sub_text = this.message_fail[1];
    };
    BeginnerPuzzleComponent.prototype.showFailMessage = function () {
        this.player_status_message = this.message_fail[3];
        this.sub_text = this.message_fail[1];
        this.basePuzzleCompoment.move(this.arrFen[0], null);
    };
    BeginnerPuzzleComponent.ɵfac = function BeginnerPuzzleComponent_Factory(t) { return new (t || BeginnerPuzzleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_puzzle_service__WEBPACK_IMPORTED_MODULE_4__["PuzzleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbService"])); };
    BeginnerPuzzleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BeginnerPuzzleComponent, selectors: [["app-beginner-puzzle"]], viewQuery: function BeginnerPuzzleComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_base_puzzle_base_puzzle_component__WEBPACK_IMPORTED_MODULE_3__["BasePuzzleComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.basePuzzleCompoment = _t.first);
        } }, hostVars: 2, hostBindings: function BeginnerPuzzleComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function BeginnerPuzzleComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.beginnerPuzzleComponentClass);
        } }, decls: 12, vars: 7, consts: [[1, "puzzle_detail_container"], [1, "puzzle-col"], [3, "boardSize", "position", "orientation", "boardClick", "mouseOverOnBoard", "mouseOutEvent", "drop"], [1, "puzzle_detail"], [1, "display_board"], [1, "about_puzzle"], ["class", "btn_container", 4, "ngIf"], [1, "puzzle_status"], [1, "well_done"], [1, "btn_container"], [3, "click"]], template: function BeginnerPuzzleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-base-puzzle", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("boardClick", function BeginnerPuzzleComponent_Template_app_base_puzzle_boardClick_2_listener($event) { return ctx.onBoardClick($event); })("mouseOverOnBoard", function BeginnerPuzzleComponent_Template_app_base_puzzle_mouseOverOnBoard_2_listener($event) { return ctx.onMouseOverSquare($event); })("mouseOutEvent", function BeginnerPuzzleComponent_Template_app_base_puzzle_mouseOutEvent_2_listener($event) { return ctx.onMouseoutSquare($event); })("drop", function BeginnerPuzzleComponent_Template_app_base_puzzle_drop_2_listener($event) { return ctx.onDrop($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BeginnerPuzzleComponent_div_7_Template, 5, 0, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boardSize", ctx.boardSize)("position", ctx.chessConfig.position)("orientation", ctx.chessConfig.orientation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.puzzleDetail.heading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.puzzleDetail.question_type === "boolean");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player_status_message);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sub_text);
        } }, directives: [_base_puzzle_base_puzzle_component__WEBPACK_IMPORTED_MODULE_3__["BasePuzzleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], encapsulation: 2 });
    return BeginnerPuzzleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BeginnerPuzzleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-beginner-puzzle',
                templateUrl: './beginner-puzzle.component.html',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _puzzle_service__WEBPACK_IMPORTED_MODULE_4__["PuzzleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbService"] }]; }, { beginnerPuzzleComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], basePuzzleCompoment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_base_puzzle_base_puzzle_component__WEBPACK_IMPORTED_MODULE_3__["BasePuzzleComponent"]]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dr-functionality/puzzle/chess-element/chess-element.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/puzzle/chess-element/chess-element.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ChessElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessElementComponent", function() { return ChessElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ChessElementComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChessElementComponent_span_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var i_r2 = ctx.index; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.elementClicked(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var ChessElementComponent = /** @class */ (function () {
    function ChessElementComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.items = [
            {
                name: 'queen',
                url: 'assets/chessboard/img/chesspieces/wikipedia/wQ.png'
            },
            {
                name: 'rook',
                url: 'assets/chessboard/img/chesspieces/wikipedia/wR.png'
            },
            {
                name: 'knight',
                url: 'assets/chessboard/img/chesspieces/wikipedia/wN.png'
            },
            {
                name: 'bishop',
                url: 'assets/chessboard/img/chesspieces/wikipedia/wB.png'
            }
        ];
    }
    ChessElementComponent.prototype.ngOnInit = function () {
    };
    ChessElementComponent.prototype.elementClicked = function (index) {
        this.dialogRef.close({ index: index });
    };
    ChessElementComponent.ɵfac = function ChessElementComponent_Factory(t) { return new (t || ChessElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8)); };
    ChessElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChessElementComponent, selectors: [["app-chess-element"]], decls: 2, vars: 1, consts: [[1, "chess_elements"], [4, "ngFor", "ngForOf"], ["width", "50px", 3, "src", "alt", "click"]], template: function ChessElementComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChessElementComponent_span_1_Template, 2, 2, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["img[_ngcontent-%COMP%]:hover {\n  background-color: #9BCB41;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9kcmVhbXJvb20vZHItZnVuY3Rpb25hbGl0eS9wdXp6bGUvY2hlc3MtZWxlbWVudC9jaGVzcy1lbGVtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQXlCO0VBQ3pCLGVBQWU7QUFBbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2RyZWFtcm9vbS9kci1mdW5jdGlvbmFsaXR5L3B1enpsZS9jaGVzcy1lbGVtZW50L2NoZXNzLWVsZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlCQ0I0MTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"] });
    return ChessElementComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChessElementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chess-element',
                templateUrl: './chess-element.component.html',
                styleUrls: ['./chess-element.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dr-functionality/puzzle/drop-off-board/drop-off-board.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/puzzle/drop-off-board/drop-off-board.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DropOffBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropOffBoardComponent", function() { return DropOffBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chess.js */ "./node_modules/chess.js/chess.js");
/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chess_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _puzzle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../puzzle.service */ "./src/app/user/dreamroom/dr-functionality/puzzle/puzzle.service.ts");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../amplitude/amplitude.service */ "./src/app/amplitude/amplitude.service.ts");
/* harmony import */ var _amplitude_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../amplitude/events */ "./src/app/amplitude/events.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
















var _c0 = ["board"];
function DropOffBoardComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropOffBoardComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.Show_pgn = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View Solution ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DropOffBoardComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropOffBoardComponent_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.clickedYes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropOffBoardComponent_div_19_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.clickedNo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DropOffBoardComponent_div_22_span_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DropOffBoardComponent_div_22_span_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var room_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", room_r9.comment, " ");
} }
function DropOffBoardComponent_div_22_span_1_span_7_span_3_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DropOffBoardComponent_div_22_span_1_span_7_span_3_span_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var mvi_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mvi_r19.comment, " ");
} }
function DropOffBoardComponent_div_22_span_1_span_7_span_3_span_1_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropOffBoardComponent_div_22_span_1_span_7_span_3_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); var k_r20 = ctx.index; var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var j_r17 = ctx_r27.index; var ravs_r16 = ctx_r27.$implicit; var i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.moveFrom_pgn(i_r10, "inner", j_r17, k_r20, ravs_r16.moves); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DropOffBoardComponent_div_22_span_1_span_7_span_3_span_1_span_2_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DropOffBoardComponent_div_22_span_1_span_7_span_3_span_1_span_4_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var mvi_r19 = ctx.$implicit;
    var k_r20 = ctx.index;
    var j_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    var i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", k_r20 == ctx_r18.selectedCol && j_r17 == ctx_r18.selectedMat && i_r10 == ctx_r18.selectedCat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mvi_r19.move_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mvi_r19.move_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mvi_r19.move, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mvi_r19.comment != undefined);
} }
function DropOffBoardComponent_div_22_span_1_span_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropOffBoardComponent_div_22_span_1_span_7_span_3_span_1_Template, 5, 6, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ravs_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ravs_r16.moves);
} }
function DropOffBoardComponent_div_22_span_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DropOffBoardComponent_div_22_span_1_span_7_span_3_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var room_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", room_r9.ravs);
} }
function DropOffBoardComponent_div_22_span_1_Template(rf, ctx) { if (rf & 1) {
    var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropOffBoardComponent_div_22_span_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); var i_r10 = ctx.index; var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.moveFrom_pgn(i_r10, "outer"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DropOffBoardComponent_div_22_span_1_span_4_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DropOffBoardComponent_div_22_span_1_span_6_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DropOffBoardComponent_div_22_span_1_span_7_Template, 6, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var room_r9 = ctx.$implicit;
    var i_r10 = ctx.index;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r10 == ctx_r8.selectedRow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", room_r9.move_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", room_r9.move_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](room_r9.move);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", room_r9.comment != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", room_r9.ravs && room_r9.ravs.length > 0);
} }
function DropOffBoardComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropOffBoardComponent_div_22_span_1_Template, 8, 7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.display_moves);
} }
var DropOffBoardComponent = /** @class */ (function () {
    function DropOffBoardComponent(_routes, _puzzleService, breadCrum, _authService, _amps) {
        this._routes = _routes;
        this._puzzleService = _puzzleService;
        this.breadCrum = breadCrum;
        this._authService = _authService;
        this._amps = _amps;
        this.dropOffBoardComponentClass = 'app-drop-off-board';
        this._position = 'start';
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
        this.totalPuzzleSolveTime = 0;
        this.numberOfHints = 0;
        this.isInitialFenValid = 1;
        this.animation = true;
        this.message_success = ['Solved', 'Well done!'];
        this.message_fail = [
            'Incorrect',
            'Please try again',
            'Please enter the next move',
            'Not the strongest move',
            'Game Over',
        ];
        this.moves = [];
        this.count = -1;
        this.pointerValue = -1;
        this.positionPointer = -1;
        this.questionIndex = [];
        this.questionCounter = 0;
        this.outerPointerCount = 0;
        this.arrFen = [];
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
        this.gameMovesResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // EVENTS
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.snapbackEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moveEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.game = new chess_js__WEBPACK_IMPORTED_MODULE_2__();
        //this.game.load('1r5k/7p/3p4/p2PpB2/1p2Pb2/1K1b3N/PP3R1P/8 b - - 0 35');
    }
    Object.defineProperty(DropOffBoardComponent.prototype, "BoardSize", {
        set: function (size) {
            this._boardSize = size;
            this.chessBoard.nativeElement.style.width = size;
        },
        enumerable: false,
        configurable: true
    });
    // PARAMETERS
    DropOffBoardComponent.prototype.onResize = function (event) {
        if (this.board) {
            this.board.resize(event);
        }
    };
    DropOffBoardComponent.prototype.onClick = function (event) {
        this.boardClick.emit(event);
    };
    Object.defineProperty(DropOffBoardComponent.prototype, "position", {
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
    Object.defineProperty(DropOffBoardComponent.prototype, "orientation", {
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
    Object.defineProperty(DropOffBoardComponent.prototype, "showNotation", {
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
    Object.defineProperty(DropOffBoardComponent.prototype, "draggable", {
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
    Object.defineProperty(DropOffBoardComponent.prototype, "dropOffBoard", {
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
    Object.defineProperty(DropOffBoardComponent.prototype, "moveSpeed", {
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
    Object.defineProperty(DropOffBoardComponent.prototype, "snapbackSpeed", {
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
    Object.defineProperty(DropOffBoardComponent.prototype, "snapSpeed", {
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
    Object.defineProperty(DropOffBoardComponent.prototype, "sparePieces", {
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
    DropOffBoardComponent.prototype.clear = function () {
        this.board.clear(this.animation);
    };
    DropOffBoardComponent.prototype.move = function (notation, event) {
        this.board.move(notation);
    };
    DropOffBoardComponent.prototype.moveToOriginalPosition = function (event) {
        return 'snapback';
    };
    DropOffBoardComponent.prototype.onChangeHandler = function (oldPos, newPos) {
        this.change.emit({ oldPos: oldPos, newPos: newPos });
    };
    DropOffBoardComponent.prototype.onDragStart = function (source, piece, position, orientation) {
        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
        }, false);
        this.dragStart.emit({ source: source, piece: piece, position: position, orientation: orientation });
    };
    DropOffBoardComponent.prototype.onDragMove = function (newLocation, oldLocation, source, piece, position, orientation) {
        this.dragMove.emit({
            newLocation: newLocation,
            oldLocation: oldLocation,
            source: source,
            piece: piece,
            position: position,
            orientation: orientation,
        });
    };
    DropOffBoardComponent.prototype.ReloadQuiz = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__('#board').find('.square-55d63').removeClass('highlight');
        this.player_status_message = '';
        this.sub_text = '';
        this.count = -1;
        this.selectedCol = -1;
        this.selectedRow = -1;
        this.selectedMat = -1;
        this.selectedCat = -1;
        // console.log(this.QuizData, 'linen 276 ...');
        this.moves = this.QuizData.parsed_pgn.moves;
        this.puzzleDetail.heading = this.QuizData.fullInfo.heading;
        this._orientation =
            this.QuizData.fullInfo.heading == 'Black to move' ? false : true;
        this.display_moves = this.QuizData.parsed_pgn.moves;
        this.pgn = this.QuizData.pgn;
        this.pgn = this.pgn
            .replace(/\(/g, '<br>(')
            .replace(/\)/g, ')<br>')
            .replace(/(\{[^}]+\})+?/g, '');
        this.position = this.QuizData.fen;
        this.initial_chess_position = this.QuizData.fen;
        this.game.load(this.QuizData.fen);
        this.pointerValue = -1;
        this.questionIndex = [];
        this.questionCounter = 0;
        if (this.QuizData.parsed_pgn.comment != null)
            this.puzzleDetail.Question = this.QuizData.parsed_pgn.comment.replace('**', '');
        else
            this.puzzleDetail.Question = '';
        this.Show_pgn = false;
        this.Show_solutionBtn = false;
        this.QuizData.parsed_pgn.moves.forEach(function (element, index) {
            if (element.comment && element.comment.indexOf('**') != -1)
                _this.questionIndex.push(index);
        });
        this.load();
    };
    DropOffBoardComponent.prototype.moveFrom_pgn = function (outerIndex, check, middleIndex, innerIndex, innerindex_array) {
        //console.log("outerindex:-", outerIndex, 'check:-', check, 'middleindex:-', middleIndex, 'innerindex:-', innerIndex)
        jquery__WEBPACK_IMPORTED_MODULE_3__('#board').find('.square-55d63').removeClass('highlight');
        this.selectedCol = -1;
        this.selectedRow = -1;
        this.selectedMat = -1;
        this.selectedCat = -1;
        var newchess = new chess_js__WEBPACK_IMPORTED_MODULE_2__();
        var tempArray = [];
        newchess.load(this.initial_chess_position);
        this.game.load(this.initial_chess_position);
        var flag = false;
        if (check == 'outer') {
            this.moves = this.QuizData.parsed_pgn.moves;
            for (var i = 0; i <= outerIndex; i++) {
                var k = newchess.move(this.moves[i].move);
                //tempArray.push(moveArray[i]);
                this.game.move(this.moves[i].move);
            }
            //tempArray = tempArray.concat(moveArray);
            this.selectedCol = -1;
            this.selectedRow = outerIndex;
            this.selectedMat = -1;
            this.selectedCat = -1;
            this.count = outerIndex;
        }
        else {
            for (var j = 0; j < outerIndex; j++) {
                //console.log("j value",j,this.moves[j].move)
                var m = newchess.move(this.moves[j].move);
                this.game.move(this.moves[j].move);
                tempArray.push(this.moves[j]);
                if (j == outerIndex - 1 || (j == outerIndex && outerIndex == 0))
                    flag = true;
            }
            if (flag || outerIndex == 0) {
                for (var i = 0; i <= innerIndex; i++) {
                    var k = newchess.move(innerindex_array[i].move);
                    //tempArray.push(innerindex_array[i]);
                    this.game.move(innerindex_array[i].move);
                }
                tempArray = tempArray.concat(innerindex_array);
                this.moves = tempArray;
                this.selectedCol = innerIndex;
                this.selectedRow = -1;
                this.selectedMat = middleIndex;
                this.selectedCat = outerIndex;
                this.count = outerIndex + innerIndex;
            }
        }
        //  //console.log('selected row ',this.selectedRow);
        //  //console.log('selected cat', this.selectedCat)
        //  //console.log('selected mat',this.selectedMat)
        //  //console.log('selected col',this.selectedCol)
        // if (outerIndex) this.count = outerIndex + index;
        // else this.count = index;
        //this.pointerValue = tempArray.length - 1;
        //this.moves = tempArray;
        this.board.position(newchess.fen());
    };
    DropOffBoardComponent.prototype.moveHint = function () {
        if (this.moves[this.count + 1] && this.moves[this.count + 1].move)
            var moveInfo = this.game.move(this.moves[this.count + 1].move);
        if (moveInfo) {
            this.numberOfHints += 1;
            this.game.undo();
            jquery__WEBPACK_IMPORTED_MODULE_3__('#board')
                .find('.square-' + moveInfo.from)
                .addClass('highlight');
        }
    };
    DropOffBoardComponent.prototype.nextMove = function () {
        if (this.Show_pgn && this.moves[this.count + 1]) {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#board').find('.square-55d63').removeClass('highlight');
            var moveCheck;
            // console.log('selected row ', this.selectedRow);
            // console.log('selected cat', this.selectedCat);
            // console.log('selected mat', this.selectedMat);
            // console.log('selected col', this.selectedCol);
            // console.log("count value",this.count,this.moves[this.count + 1].move)
            moveCheck = this.game.move(this.moves[this.count + 1].move);
            if (moveCheck) {
                if (this.count < this.moves.length - 1) {
                    this.count++;
                }
                this.board.position(this.game.fen());
                if (this.selectedCol == -1 &&
                    this.selectedRow != -2 &&
                    this.selectedMat == -1 &&
                    this.selectedCat == -1) {
                    this.selectedRow = this.count;
                }
                if (this.selectedRow == -1) {
                    if (this.selectedCol > -1)
                        this.selectedCol++;
                    else {
                        this.selectedCol = -1;
                        this.selectedRow = 0;
                        this.selectedMat = -1;
                        this.selectedCat = -1;
                        this.count = -1;
                        //this.pointerValue = this.QuizData.parsed_pgn.moves.length - 1;
                        //this.moves = this.QuizData.parsed_pgn.moves;
                        //this.position = this.QuizData.fen;
                        //this.game.load(this.QuizData.fen);
                    }
                }
            }
        }
    };
    DropOffBoardComponent.prototype.previousMove = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__('#board').find('.square-55d63').removeClass('highlight');
        var moveCheck = this.game.undo();
        if (moveCheck) {
            //if(this.count == 0) this.count = -1;
            //else this.count = this.count -1;
            if (this.count > -1)
                this.count--;
            this.board.position(this.game.fen());
            //console.log('selected row ', this.selectedRow);
            //console.log('selected cat', this.selectedCat)
            //console.log('selected mat', this.selectedMat)
            //console.log('selected col', this.selectedCol)
            if (this.selectedCol == -1 &&
                this.selectedRow != -1 &&
                this.selectedMat == -1 &&
                this.selectedCat == -1) {
                //console.log("efefrfrfrfrfrfrfr", this.count)
                this.selectedRow = this.count;
            }
            if (this.selectedRow == -1) {
                if (this.selectedCol == 0)
                    this.selectedCol = -1;
                if (this.selectedCol > 0)
                    this.selectedCol--;
                else {
                    if (this.selectedCat != -1) {
                        this.selectedRow = this.selectedCat - 1;
                        this.selectedCat = -1;
                        this.selectedCol = -1;
                        this.selectedMat = -1;
                        this.count = this.selectedRow;
                        this.moves = this.QuizData.parsed_pgn.moves;
                    }
                    // else if (this.selectedRow == 0) {
                    //   //console.log('selected row in', this.selectedRow);
                    //   //console.log('selected cat in', this.selectedCat)
                    //   //console.log('selected mat in', this.selectedMat)
                    //   //console.log('selected col in', this.selectedCol)
                    //   this.selectedCol = -1;
                    //   this.selectedRow = -1;
                    //   this.selectedMat = -1;
                    //   this.selectedCat = -1;
                    //   this.count = -1;
                    //   //this.pointerValue = this.QuizData.parsed_pgn.moves.length - 1;
                    //   this.moves = this.QuizData.parsed_pgn.moves;
                    //   this.position = this.QuizData.fen;
                    //   this.game.load(this.QuizData.fen);
                    // }
                }
            }
            else {
                this.moves = this.QuizData.parsed_pgn.moves;
            }
            if (this.count == -1) {
                //console.log('selected row in', this.selectedRow);
                //console.log('selected cat in', this.selectedCat)
                //console.log('selected mat in', this.selectedMat)
                //console.log('selected col in', this.selectedCol)
                this.selectedCol = -1;
                this.selectedRow = -1;
                this.selectedMat = -1;
                this.selectedCat = -1;
                this.count = -1;
                //this.pointerValue = this.QuizData.parsed_pgn.moves.length - 1;
                this.moves = this.QuizData.parsed_pgn.moves;
                this.position = this.QuizData.fen;
                this.game.load(this.QuizData.fen);
            }
        }
    };
    DropOffBoardComponent.prototype.checkMoveAndPlay = function (source, target, piece, newPos, oldPos) {
        jquery__WEBPACK_IMPORTED_MODULE_3__('#board').find('.square-55d63').removeClass('highlight');
        if (!this.game.game_over()) {
            if (this.count == -1 && this.display_moves.length == 0)
                this.display_moves.push(this.moves[0]);
            if (this.count < this.moves.length - 1) {
                var moveInfo = this.game.move(this.moves[this.count + 1].move);
                if (moveInfo)
                    this.game.undo();
                //if (this.moves[this.count + 1] && this.moves[this.count + 1].comment) this.puzzleDetail.Question = this.moves[this.count + 1].comment;
                var alternateMoveInfo = false;
                if (this.moves[this.count + 1].ravs) {
                    for (var i = 0; i < this.moves[this.count + 1].ravs.length; i++) {
                        var h = this.moves[this.count + 1].ravs[i];
                        var temp = h.moves[0].move;
                        var info = this.game.move(temp);
                        this.game.undo();
                        if (info &&
                            info.color + info.piece == piece.toLowerCase() &&
                            info.to == target) {
                            alternateMoveInfo = true;
                            break;
                        }
                    }
                }
            }
            if (moveInfo &&
                moveInfo.color + moveInfo.piece == piece.toLowerCase() &&
                moveInfo.to == target) {
                this.game.move(this.moves[this.count + 1].move);
                // this.showSuccessMessage();
                if (this.moves[this.count + 1].comment)
                    this.found = false;
                this.count++;
                this.pointerValue++;
                if (this.count == this.moves.length - 1)
                    this.Show_pgn = true;
                this.showSuccessMessage(1, 2); ////console.log("END END in if case ")
                return true;
            }
            else if (alternateMoveInfo) {
                this.game.move(temp);
                this.moves = h.moves;
                this.count = 0;
                if (this.moves[this.count + 1].comment)
                    this.found = false;
                if (this.count == this.moves.length - 1)
                    this.Show_pgn = true;
                this.showSuccessMessage(1, 2); ////console.log("END END in if case")
                // this.showSuccessMessage();
                return true;
            }
            else {
                this.showFailMessage();
                return false;
            }
        }
        else {
            ////console.log("END END")
            this.showSuccessMessage(1, 4);
            this.Show_pgn = true;
        }
    };
    DropOffBoardComponent.prototype.onDrop = function (source, target, piece, newPos, oldPos, orientation) {
        if (this.checkMoveAndPlay(source, target, piece, newPos, oldPos)) {
            this.Show_pgn = true;
            this.board.position(this.game.fen());
            var removePiece = false;
            this.found = false;
            // This is temporary line please remove in next release
            this.puzzleDetail.Question = '';
            if (this.count < this.moves.length - 1) {
                var nextMove = this.game.move(this.moves[this.count + 1].move);
                if (nextMove) {
                    this.count++;
                    this.pointerValue++;
                }
                //if (this.moves[this.count + 1] && this.moves[this.count + 1].comment) this.puzzleDetail.Question = this.moves[this.count + 1].comment.replace("**", '');
                //else this.puzzleDetail.Question = '';
                if (this.count == this.moves.length - 1)
                    this.Show_pgn = true;
                //if (this.moves[this.count] && this.moves[this.count].comment) this.puzzleDetail.Question = this.moves[this.count].comment.replace("**", '');
                if (this.moves[this.count].move.indexOf('x') != -1) {
                    removePiece = true;
                }
                //var t = this.moves[this.count].comment;
                //if (t != undefined) { this.puzzleDetail.Question = t.replace("**", '') }
            }
            else {
                this.showSuccessMessage(1, 4);
                // //console.log("END END in return", this.game.game_over())
            }
            var bb = this.board;
            var ff = this.game.fen();
            setTimeout(function () {
                bb.position(ff);
            }, 300);
            if (this.game.game_over()) {
                ////console.log("END END in return")
                this.showSuccessMessage(1, 4);
                this.Show_pgn = true;
                clearInterval(this.intervalId);
                this._amps.setAmplitudeEvents(_amplitude_events__WEBPACK_IMPORTED_MODULE_8__["events"].event_12, {
                    complete: true,
                    completionTime: this.totalPuzzleSolveTime,
                    numberOfHints: this.numberOfHints,
                    level: this.level,
                    episode_id: this.episode_id,
                    puzzle_id: this.puzzleId,
                });
            }
            if (removePiece)
                return 'trash';
        }
        else {
            this.showFailMessage();
            return 'snapback';
        }
        // if (this.level == 1) {
        //   if (this.episode_id == 7) {
        //     if (this.puzzleDetail.id == 1) {
        //       if (piece === 'bP' && target === 'g5') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 2) {
        //       if (piece === 'wR' && target === 'h7') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 3) {
        //       if (piece === 'bN' && target === 'd6') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 4) {
        //       if (piece === 'bB' && target === 'a4') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 5) {
        //       if (piece === 'wB' && target === 'g5') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 6) {
        //       if (piece === 'wR' && target === 'd6') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 7) {
        //       if (piece === 'wP' && target === 'g4') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 8) {
        //       if (piece === 'wP' && target === 'c4') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 9) {
        //       if (piece === 'wN' && target === 'f5') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 10) {
        //       if (piece === 'wP' && target === 'c3') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 11) {
        //       if (piece === 'wP' && target === 'e5') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 12) {
        //       if (piece === 'wN' && (target === 'e1' || target === 'd2')) {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     }
        //   }
        //   if (this.episode_id == 8) {
        //     if (this.puzzleDetail.id == 1) {
        //       if (piece === 'wQ' && target === 'a4') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 2) {
        //       if (piece === 'bB' && target === 'a3') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 3) {
        //       if (piece === 'wQ' && target === 'c4') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 4) {
        //       if (piece === 'wB' && target === 'd5') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 5) {
        //       if (piece === 'bB' && target === 'c3') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 6) {
        //       if (piece === 'bN' && (target === 'd5' || target === 'f5')) {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 7) {
        //       if (piece === 'wR' && (target === 'e7' || target === 'c1')) {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 8) {
        //       if (piece === 'wP' && (target === 'g5' || target === 'e5')) {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 9) {
        //       if (piece === 'wN' && (target === 'd3' || target === 'e4')) {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     } else if (this.puzzleDetail.id == 10) {
        //       if (piece === 'wB' && target === 'e2') {
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       }
        //       else {
        //         return 'snapback';
        //       }
        //     }
        //   }
        //   //level
        // }
        // if (this.level == 2 && this.episode_id == 1) {
        //   if (this.puzzleDetail.id == 1) {
        //     if (this.arrFen.length == 3) {
        //       if (piece === 'wB' && target === 'e6') {
        //         this.arrFen.push(this.board.fen());
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     } else if (parseInt(this.arrFen.length) > 3) {
        //       return 'snapback';
        //     }
        //     if (this.arrFen.length == 2) {
        //       if (piece === 'wR' && target === 'e6') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('f7-e6', event);
        //         }, 500);
        //         this.showSuccessMessage();
        //         this.sub_text = '';
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 1) {
        //       if (piece === 'wB' && target === 'd5') {
        //         this.arrFen.push(this.board.fen());
        //         this.move('d8-d7', event);
        //         this.showSuccessMessage();
        //       } else {
        //         if (this.arrFen.length < 2) {
        //           this.showFailMessage();
        //           return 'snapback';
        //         }
        //       }
        //     }
        //   }
        //   if (this.puzzleDetail.id == 2) {
        //     if (this.arrFen.length == 3) {
        //       if (piece === 'wR' && target === 'g1') {
        //         this.arrFen.push(this.board.fen());
        //         this.move('a7-d7', event);
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       } else {
        //         this.showFailMessage();
        //         // //////console.log('return2');
        //         return 'snapback';
        //       }
        //     } else if (parseInt(this.arrFen.length) > 3) {
        //       return 'snapback';
        //     }
        //     if (this.arrFen.length == 2) {
        //       if (piece === 'wQ' && target === 'c3') {
        //         this.arrFen.push(this.board.fen());
        //         this.move('h2-g2', event);
        //         this.showSuccessMessage();
        //       } else {
        //         this.showFailMessage();
        //         // //////console.log('return1');
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 1) {
        //       if (piece === 'wN' && target === 'f5') {
        //         this.arrFen.push(this.board.fen());
        //         this.move('e7-c6', event);
        //         this.showSuccessMessage();
        //       } else {
        //         if (this.arrFen.length < 2) {
        //           this.showFailMessage();
        //           // //////console.log('return0');
        //           return 'snapback';
        //         }
        //       }
        //     }
        //   }
        //   if (this.puzzleDetail.id == 3) {
        //     if (this.arrFen.length == 4) {
        //       if (piece === 'bB' && target === 'b2') {
        //         this.arrFen.push(this.board.fen());
        //         this.move('d1-e2', event);
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       } else {
        //         this.showFailMessage();
        //         // //////console.log('return1');
        //         return 'snapback';
        //       }
        //     } else if (parseInt(this.arrFen.length) > 4) {
        //       return 'snapback';
        //     }
        //     if (this.arrFen.length == 3) {
        //       if (piece === 'bQ' && target === 'a1') {
        //         this.arrFen.push(this.board.fen());
        //         this.move('e2-c1', event);
        //         this.showSuccessMessage();
        //       } else {
        //         this.showFailMessage();
        //         // //////console.log('return1');
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 2) {
        //       if (piece === 'bQ' && target === 'a5') {
        //         this.arrFen.push(this.board.fen());
        //         this.move('c1-d1', event);
        //         this.showSuccessMessage();
        //       } else {
        //         this.showFailMessage();
        //         // //////console.log('return1');
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 1) {
        //       if (piece === 'bP' && target === 'b3') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('a2-b3', event);
        //         }, 500);
        //         this.showSuccessMessage();
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //   }
        //   if (this.puzzleDetail.id == 4) {
        //     if (this.arrFen.length == 4) {
        //       if (piece === 'wR' && target === 'g1') {
        //         this.arrFen.push(this.board.fen());
        //         // this.move('d1-e2', event);
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       } else {
        //         this.showFailMessage();
        //         // //////console.log('return1');
        //         return 'snapback';
        //       }
        //     } else if (parseInt(this.arrFen.length) > 4) {
        //       return 'snapback';
        //     }
        //     if (this.arrFen.length == 3) {
        //       if (piece === 'wQ' && target === 'g6') {
        //         this.arrFen.push(this.board.fen());
        //         this.move('g8-h8', event);
        //         this.showSuccessMessage();
        //       } else {
        //         this.showFailMessage();
        //         // //////console.log('return1');
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 2) {
        //       if (piece === 'wN' && target === 'f6') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('g7-f6', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //       } else {
        //         this.showFailMessage();
        //         // //////console.log('return1');
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 1) {
        //       if (piece === 'wQ' && target === 'e8') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('f7-f8', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //   }
        //   if (this.puzzleDetail.id == 5) {
        //     if (this.arrFen.length == 4) {
        //       if (piece === 'wP' && target === 'g8') {
        //         this.arrFen.push(this.board.fen());
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     } else if (parseInt(this.arrFen.length) > 3) {
        //       return 'snapback';
        //     }
        //     if (this.arrFen.length == 3) {
        //       if (piece === 'wP' && target === 'g7') {
        //         this.arrFen.push(this.board.fen());
        //         this.move('e7-e6', event);
        //         this.showSuccessMessage();
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 2) {
        //       if (piece === 'wN' && target === 'd1') {
        //         this.arrFen.push(this.board.fen());
        //         this.move('a5-d2', event);
        //         this.showSuccessMessage();
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 1) {
        //       if (piece === 'wP' && target === 'f6') {
        //         this.arrFen.push(this.board.fen());
        //         this.move('h1-d1', event);
        //         this.showSuccessMessage();
        //       } else {
        //         if (this.arrFen.length < 2) {
        //           this.showFailMessage();
        //           return 'snapback';
        //         }
        //       }
        //     }
        //   }
        // }
        // if (this.level == 2 && this.episode_id == 2) {
        //   if (this.puzzleDetail.id == 1) {
        //     if (this.arrFen.length == 7) {
        //       if (piece === 'wR' && target === 'e8') {
        //         this.arrFen.push(this.board.fen());
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     } else if (parseInt(this.arrFen.length) > 7) {
        //       return 'snapback';
        //     }
        //     if (this.arrFen.length == 6) {
        //       if (piece === 'wQ' && target === 'f6') {
        //         this.arrFen.push(this.board.fen());
        //         this.move('f4-g5', event);
        //         this.showSuccessMessage();
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 5) {
        //       if (piece === 'wK' && target === 'g2') {
        //         this.arrFen.push(this.board.fen());
        //         this.move('h7-h6', event);
        //         this.showSuccessMessage();
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 4) {
        //       if (piece === 'wB' && target === 'g6') {
        //         this.arrFen.push(this.board.fen());
        //         this.move('c7-c5', event);
        //         this.showSuccessMessage();
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 3) {
        //       if (piece === 'wB' && target === 'f4') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('e5-f4', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 2) {
        //       if (piece === 'wP' && target === 'f4') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('f6-f4', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 1) {
        //       if (piece === 'wB' && target === 'e3') {
        //         this.arrFen.push(this.board.fen());
        //         this.move('c5-c7', event);
        //         this.showSuccessMessage();
        //       } else {
        //         if (this.arrFen.length < 2) {
        //           this.showFailMessage();
        //           return 'snapback';
        //         }
        //       }
        //     }
        //   }
        //   if (this.puzzleDetail.id == 2) {
        //     if (this.arrFen.length == 5) {
        //       if (piece === 'wP' && target === 'f6') {
        //         this.arrFen.push(this.board.fen());
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     } else if (parseInt(this.arrFen.length) > 5) {
        //       return 'snapback';
        //     }
        //     if (this.arrFen.length == 4) {
        //       if (piece === 'wP' && target === 'f5') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('e7-f8', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //         this.showSuccessMessage();
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 3) {
        //       if (piece === 'wP' && target === 'e4') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('d5-f4', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 2) {
        //       if (piece === 'wP' && target === 'h6') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('c8-f5', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 1) {
        //       if (piece === 'wN' && target === 'g5') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('h6-g5', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //         this.showSuccessMessage();
        //       } else {
        //         if (this.arrFen.length < 2) {
        //           this.showFailMessage();
        //           return 'snapback';
        //         }
        //       }
        //     }
        //   }
        //   if (this.puzzleDetail.id == 3) {
        //     if (this.arrFen.length == 5) {
        //       if (piece === 'wB' && target === 'h1') {
        //         this.arrFen.push(this.board.fen());
        //         this.player_status_message = this.message_success[1];
        //         this.sub_text = '';
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     } else if (parseInt(this.arrFen.length) > 5) {
        //       return 'snapback';
        //     }
        //     if (this.arrFen.length == 4) {
        //       if (piece === 'wB' && target === 'f3') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('e6-d4', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //         this.showSuccessMessage();
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 3) {
        //       if (piece === 'wR' && target === 'b7') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('a7-a8', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 2) {
        //       if (piece === 'wR' && target === 'b6') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('b8-a7', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 1) {
        //       if (piece === 'wR' && target === 'c6') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('g5-d2', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //         this.showSuccessMessage();
        //       } else {
        //         if (this.arrFen.length < 2) {
        //           this.showFailMessage();
        //           return 'snapback';
        //         }
        //       }
        //     }
        //   }
        //   if (this.puzzleDetail.id == 4) {
        //     if (this.arrFen.length == 6) {
        //       if (piece === 'bR' && target === 'g1') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('h1-g1', event);
        //           this.player_status_message = this.message_success[1];
        //           this.sub_text = '';
        //         }, 500);
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     } else if (parseInt(this.arrFen.length) > 6) {
        //       return 'snapback';
        //     }
        //     if (this.arrFen.length == 5) {
        //       if (piece === 'bR' && target === 'b1') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('e3-g1', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 4) {
        //       if (piece === 'bB' && target === 'e2') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('d3-e3', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 3) {
        //       if (piece === 'bB' && target === 'f8') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('g3-e2', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 2) {
        //       if (piece === 'bQ' && target === 'e2') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('f1-f8', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //       } else {
        //         this.showFailMessage();
        //         return 'snapback';
        //       }
        //     }
        //     if (this.arrFen.length == 1) {
        //       if (piece === 'bB' && target === 'g4') {
        //         this.arrFen.push(this.board.fen());
        //         setTimeout(() => {
        //           this.move('a1-f1', event);
        //           this.showSuccessMessage();
        //         }, 500);
        //         this.showSuccessMessage();
        //       } else {
        //         if (this.arrFen.length < 2) {
        //           this.showFailMessage();
        //           return 'snapback';
        //         }
        //       }
        //     }
        //   }
        // }
    };
    DropOffBoardComponent.prototype.onSnapbackEnd = function (piece, square, position, orientation) {
        this.snapbackEnd.emit({ piece: piece, square: square, position: position, orientation: orientation });
    };
    DropOffBoardComponent.prototype.onMoveEnd = function (movement, oldPos, newPos) {
        this._position = newPos;
        // this.positionChange.emit(this._position);
        // this.moveEnd.emit({oldPos, newPos});
        // this.board.move(movement);
    };
    DropOffBoardComponent.prototype.onMouseoverSquare = function (piece, square) {
        this.mouseOverOnBoard.emit({ piece: piece, square: square });
    };
    DropOffBoardComponent.prototype.onMouseoutSquare = function (piece, square) {
        this.mouseOutEvent.emit({ piece: piece, square: square });
    };
    DropOffBoardComponent.prototype.OnBoardClick = function (event) {
        this.boardClick.emit(event);
    };
    DropOffBoardComponent.prototype.load = function () {
        this.chessBoardConfig = {
            position: this._position ? this._position : this.position,
            orientation: this._orientation ? 'white' : 'black',
            showNotation: this._showNotation,
            draggable: true,
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
        // this.chessBoard.nativeElement.style.width = this._boardSize;
        // console.log(this._boardSize);
        if (document.getElementById('board')) {
            document.getElementById('board').style.width = this._boardSize;
        }
    };
    DropOffBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.load();
        this.puzzleDetail = {};
        // this._routes.parent.params.subscribe(
        //   parentparams => {
        //     this.level = parentparams.level;
        //     this.episode_id = parentparams.episode_id;
        //     this._routes.params.subscribe((params: any) => {
        //       this.puzzleDetail = this._puzzleService.getPuzzleById(this.level, parentparams.episode_id, params.puzzleId);
        //       //this.puzzleDetail.Question = '';
        //       //this.position = this.puzzleDetail.config.position;
        //       this.arrFen = [];
        //       this.arrFen.push(this.puzzleDetail.config.position);
        //       $('#board .square-55d63').removeClass('highlight1-32417');
        //       this.player_status_message = '';
        //       this.sub_text = '';
        //     });
        //   });
        this._routes.parent.params.subscribe(function (params) {
            clearInterval(_this.intervalId);
            _this.level = params.level;
            _this.episode_id = params.episode_id;
            _this.productId = params.productId;
            _this._routes.params.subscribe(function (localParams) {
                _this.puzzleDetail.question_type = 'puzzle';
                _this.puzzleId = localParams.puzzleId;
                // now load the puzzle data based on server data
                _this._authService
                    .getPuzzleById({
                    level: _this.level,
                    episode_id: _this.episode_id,
                    puzzle_id: _this.puzzleId,
                    product_id: _this.productId,
                    is_quiz: true,
                })
                    .subscribe(function (res) {
                    _this._amps.setAmplitudeEvents(_amplitude_events__WEBPACK_IMPORTED_MODULE_8__["events"].event_12, {
                        complete: false,
                        completionTime: _this.totalPuzzleSolveTime,
                        numberOfHints: _this.numberOfHints,
                        level: _this.level,
                        episode_id: _this.episode_id,
                        puzzle_id: _this.puzzleId,
                    });
                    // console.log(res, 'from puzzle');
                    _this.puzzleDetail.question_type = 'puzzle';
                    _this.QuizData = res.data.puzzle;
                    _this.player_status_message = '';
                    _this.sub_text = '';
                    _this.intervalId = setInterval(function () {
                        _this.totalPuzzleSolveTime += 1;
                    }, 1000);
                    // console.log("Puzzle Data", this.QuizData)
                    _this.ReloadQuiz();
                });
            });
        });
        //////console.log("working")
        // this.breadCrum.levelSelectorBreadcrumb(this.level);
        // this.breadCrum.puzzleBreadCrumb(1);
        // this.breadCrum.episodeBreadCrumb(this.episode_id);
        if (window.innerWidth < 370) {
            if (document.getElementById('board')) {
                document.getElementById('board').style.width = '200px';
            }
            // this.chessBoard.nativeElement.style.width = '';
        }
        else if (window.innerWidth < 470) {
            if (document.getElementById('board')) {
                document.getElementById('board').style.width = '300px';
            }
            // this.chessBoard.nativeElement.style.width = '300px';
        }
        else if (window.innerWidth < 1100) {
            if (document.getElementById('board')) {
                document.getElementById('board').style.width = '400px';
            }
            // this.chessBoard.nativeElement.style.width = '400px';
        }
        else {
            // this.chessBoard.nativeElement.style.width = '400px';
            if (document.getElementById('board')) {
                document.getElementById('board').style.width = '400px';
            }
        }
    };
    DropOffBoardComponent.prototype.showSuccessMessage = function (messageNumber, subTextNumber) {
        this.player_status_message = this.message_success[messageNumber];
        this.sub_text = this.message_fail[subTextNumber];
    };
    DropOffBoardComponent.prototype.showFailMessage = function () {
        this.player_status_message = this.message_fail[3];
        this.sub_text = this.message_fail[1];
    };
    DropOffBoardComponent.ɵfac = function DropOffBoardComponent_Factory(t) { return new (t || DropOffBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_puzzle_service__WEBPACK_IMPORTED_MODULE_4__["PuzzleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_7__["AmplitudeService"])); };
    DropOffBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropOffBoardComponent, selectors: [["app-drop-off-board"]], viewQuery: function DropOffBoardComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chessBoard = _t.first);
        } }, hostVars: 2, hostBindings: function DropOffBoardComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DropOffBoardComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("click", function DropOffBoardComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.dropOffBoardComponentClass);
        } }, inputs: { animation: "animation", BoardSize: ["boardSize", "BoardSize"], position: "position", orientation: "orientation", showNotation: "showNotation", draggable: "draggable", dropOffBoard: "dropOffBoard", moveSpeed: "moveSpeed", snapbackSpeed: "snapbackSpeed", snapSpeed: "snapSpeed", sparePieces: "sparePieces" }, outputs: { animationChange: "animationChange", positionChange: "positionChange", orientationChange: "orientationChange", showNotationChange: "showNotationChange", draggableChange: "draggableChange", dropOffBoardChange: "dropOffBoardChange", pieceThemeChange: "pieceThemeChange", moveSpeedChange: "moveSpeedChange", snapbackSpeedChange: "snapbackSpeedChange", snapSpeedChange: "snapSpeedChange", sparePiecesChange: "sparePiecesChange", mouseOverOnBoard: "mouseOverOnBoard", boardClick: "boardClick", mouseOutEvent: "mouseOutEvent", gameMovesResult: "gameMovesResult", change: "change", dragStart: "dragStart", dragMove: "dragMove", drop: "drop", snapbackEnd: "snapbackEnd", moveEnd: "moveEnd" }, decls: 23, vars: 7, consts: [[1, "puzzle_detail_container"], [1, "puzzle-col"], [1, "puzzle_board"], ["id", "board", "touch-action", "none", 3, "click"], [1, "puzle_butons"], ["id", "boardButton", 1, "default", "buttons", 2, "display", "block"], ["id", "boardButtonprev", "title", "Go to previous move", 1, "default", "button", "fa", "fa-step-backward", 3, "click"], ["id", "boardButtonnext", "title", "Go to next move", 1, "default", "button", "fa", "fa-step-forward", 3, "click"], ["id", "boardButtonplay", "title", "Hint", 1, "default", "button", "fa", "fa-question-circle", 3, "click"], ["id", "boardButtonlast", "title", "Reload", 1, "default", "button", "fa", "fa-refresh", 3, "click"], [3, "click", 4, "ngIf"], [1, "puzzle_detail"], [1, "display_board"], [1, "about_puzzle"], [1, "about_puzzle_detail", 2, "font-weight", "normal"], [1, "about_puzzle_detail"], ["class", "btn_container", 4, "ngIf"], [1, "puzzle_status"], ["class", "box", 4, "ngIf"], [3, "click"], [1, "btn_container"], [1, "box"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "active", "click", 4, "ngFor", "ngForOf"]], template: function DropOffBoardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropOffBoardComponent_Template_div_click_3_listener($event) { return ctx.OnBoardClick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropOffBoardComponent_Template_i_click_6_listener() { return ctx.previousMove(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropOffBoardComponent_Template_i_click_7_listener() { return ctx.nextMove(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropOffBoardComponent_Template_i_click_8_listener() { return ctx.moveHint(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropOffBoardComponent_Template_i_click_9_listener() { return ctx.ReloadQuiz(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DropOffBoardComponent_button_10_Template, 2, 0, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DropOffBoardComponent_div_19_Template, 5, 0, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DropOffBoardComponent_div_22_Template, 2, 1, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Show_solutionBtn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.puzzleDetail.heading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.puzzleDetail.Question, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.puzzleDetail.detail);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.puzzleDetail.question_type === "boolean");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player_status_message);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Show_pgn);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], encapsulation: 2 });
    return DropOffBoardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropOffBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drop-off-board',
                templateUrl: './drop-off-board.component.html',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _puzzle_service__WEBPACK_IMPORTED_MODULE_4__["PuzzleService"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _amplitude_amplitude_service__WEBPACK_IMPORTED_MODULE_7__["AmplitudeService"] }]; }, { dropOffBoardComponentClass: [{
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
        }], gameMovesResult: [{
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

/***/ "./src/app/user/dreamroom/dr-functionality/puzzle/puzzle-item-detail/puzzle-item-detail.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/puzzle/puzzle-item-detail/puzzle-item-detail.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PuzzleItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleItemDetailComponent", function() { return PuzzleItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../auth/breadcrumb.service */ "./src/app/auth/breadcrumb.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app-common/pre-loader/pre-loader.component */ "./src/app/app-common/pre-loader/pre-loader.component.ts");










function PuzzleItemDetailComponent_app_pre_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pre-loader");
} }
var PuzzleItemDetailComponent = /** @class */ (function () {
    function PuzzleItemDetailComponent(_routes, _authService, breadCrum) {
        this._routes = _routes;
        this._authService = _authService;
        this.breadCrum = breadCrum;
        this.PuzzleComponentClass = "app-puzzle-item-detail";
        this.pgn = "{***} 27. Bxf5+ g6 (27... Kh8 28. Qe8+) 28. Qf7+ $1 Kh6 (28... Kh8 29. Bxg6 $1 (29. Be6 $1 Qd8 30. Kxf1 $18) 29... Qh6 30. Kxf1 $18) 29. Bd2 $1 (29. Qg8 $4 gxf5 $19) (29. Bxg6 $1 Qxg6 30. Bd2+ $1 Bf4 31. Bxf4+ Nxf4 32. Qxf4+ $18) 29... Bf4 (29... Ne3 30. Bxg6 $18) 30. Qf8+ Kh7 31. Be6 $1 $18 1-0";
    }
    PuzzleItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
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
                    productId: _this.productId,
                })
                    .subscribe(function (res) {
                    // set chessboard and its data now
                    _this.cfg = {
                        // position: '8/6pk/p1pbQ3/1p1n1pq1/3P3p/2P2PP1/PPB4P/4BbK1 w - - 0 27',
                        position: "" + res.data.puzzle.fen,
                        pgn: "" + res.data.puzzle.pgn,
                        // pgn: this.pgn,
                        locale: "en",
                        pieceStyle: "merida",
                    };
                    _this.onResize();
                    var board = pgnView("board", _this.cfg);
                    // loader stopped
                    _this.isLoading = false;
                });
            });
        });
        // console.log("reds")
        this.breadCrum.levelSelectorBreadcrumb(1);
        this.breadCrum.puzzleBreadCrumb(1);
        this.breadCrum.episodeBreadCrumb(this.episode_id);
    };
    PuzzleItemDetailComponent.prototype.onResize = function () {
        if (window.innerWidth > 1100) {
            this.cfg.boardSize = "500px";
        }
        else if (window.innerWidth < 1100 && window.innerWidth > 800) {
            this.cfg.boardSize = "400px";
        }
        else if (window.innerWidth < 400) {
            this.cfg.boardSize = "300px";
        }
        else if (window.innerWidth < 350) {
            this.cfg.boardSize = "250px";
        }
        else if (window.innerWidth < 300) {
            this.cfg.boardSize = "150px";
        }
    };
    PuzzleItemDetailComponent.ɵfac = function PuzzleItemDetailComponent_Factory(t) { return new (t || PuzzleItemDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadCrumbService"])); };
    PuzzleItemDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PuzzleItemDetailComponent, selectors: [["app-puzzle-item-detail"]], hostVars: 2, hostBindings: function PuzzleItemDetailComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.PuzzleComponentClass);
        } }, decls: 3, vars: 1, consts: [[1, "puzzle_item_container"], [4, "ngIf"], ["id", "board", 1, "board"]], template: function PuzzleItemDetailComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PuzzleItemDetailComponent_app_pre_loader_1_Template, 1, 0, "app-pre-loader", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _app_common_pre_loader_pre_loader_component__WEBPACK_IMPORTED_MODULE_5__["PreLoaderComponent"]], encapsulation: 2 });
    return PuzzleItemDetailComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PuzzleItemDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-puzzle-item-detail",
                templateUrl: "./puzzle-item-detail.component.html",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _auth_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadCrumbService"] }]; }, { PuzzleComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class"]
        }] }); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dr-functionality/puzzle/puzzle-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/puzzle/puzzle-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PuzzleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleRoutingModule", function() { return PuzzleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _beginner_puzzle_beginner_puzzle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beginner-puzzle/beginner-puzzle.component */ "./src/app/user/dreamroom/dr-functionality/puzzle/beginner-puzzle/beginner-puzzle.component.ts");
/* harmony import */ var _drop_off_board_drop_off_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drop-off-board/drop-off-board.component */ "./src/app/user/dreamroom/dr-functionality/puzzle/drop-off-board/drop-off-board.component.ts");
/* harmony import */ var _puzzle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./puzzle.component */ "./src/app/user/dreamroom/dr-functionality/puzzle/puzzle.component.ts");







var routes = [
    {
        path: ':productId/:level/:episode_id',
        component: _puzzle_component__WEBPACK_IMPORTED_MODULE_4__["PuzzleComponent"],
        children: [
            // {
            //   path: 'puzzle-play/:puzzleId',
            //   component: PuzzleItemDetailComponent
            // },
            {
                path: 'puzzle-play/:puzzleId',
                component: _beginner_puzzle_beginner_puzzle_component__WEBPACK_IMPORTED_MODULE_2__["BeginnerPuzzleComponent"]
            },
            {
                path: 'beginner/puzzle-play/:puzzleId',
                component: _beginner_puzzle_beginner_puzzle_component__WEBPACK_IMPORTED_MODULE_2__["BeginnerPuzzleComponent"]
            },
            {
                path: 'board/puzzle-play/:puzzleId',
                component: _drop_off_board_drop_off_board_component__WEBPACK_IMPORTED_MODULE_3__["DropOffBoardComponent"]
            }
        ]
    }
];
var PuzzleRoutingModule = /** @class */ (function () {
    function PuzzleRoutingModule() {
    }
    PuzzleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PuzzleRoutingModule });
    PuzzleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PuzzleRoutingModule_Factory(t) { return new (t || PuzzleRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return PuzzleRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PuzzleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PuzzleRoutingModule, [{
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

/***/ "./src/app/user/dreamroom/dr-functionality/puzzle/puzzle.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/puzzle/puzzle.component.ts ***!
  \****************************************************************************/
/*! exports provided: PuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleComponent", function() { return PuzzleComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _puzzle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./puzzle.service */ "./src/app/user/dreamroom/dr-functionality/puzzle/puzzle.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");













function PuzzleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No puzzles are available for this episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PuzzleComponent_div_1_mat_select_1_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleComponent_div_1_mat_select_1_mat_option_1_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var puzzle_r5 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r7.playPuzzle(puzzle_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var puzzle_r5 = ctx.$implicit;
    var j_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("value", "Puzzle ", puzzle_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Puzzle ", j_r6 + 1, "");
} }
function PuzzleComponent_div_1_mat_select_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function PuzzleComponent_div_1_mat_select_1_Template_mat_select_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.matSelectPuzzle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PuzzleComponent_div_1_mat_select_1_mat_option_1_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r2.matSelectPuzzle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.puzzles);
} }
var _c0 = function (a0) { return { "activePuzzle": a0 }; };
function PuzzleComponent_div_1_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PuzzleComponent_div_1_div_2_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); var puzzle_r12 = ctx.$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r14.playPuzzle(puzzle_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var puzzle_r12 = ctx.$implicit;
    var i_r13 = ctx.index;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, puzzle_r12.id === ctx_r11.currentPuzzle));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Puzzle ", i_r13 + 1, " ");
} }
function PuzzleComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PuzzleComponent_div_1_div_2_div_1_Template, 2, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.puzzles);
} }
function PuzzleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PuzzleComponent_div_1_mat_select_1_Template, 2, 2, "mat-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PuzzleComponent_div_1_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.mobileVersion());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.mobileVersion());
} }
var PuzzleComponent = /** @class */ (function () {
    function PuzzleComponent(_authService, _router, _routes, _puzzleService, _location) {
        this._authService = _authService;
        this._router = _router;
        this._routes = _routes;
        this._puzzleService = _puzzleService;
        this._location = _location;
        this.PuzzleComponentClass = 'app-puzzle';
        this.puzzleReceived = true;
        this.puzzles = [];
    }
    PuzzleComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this._routes.params.subscribe(function (params) {
            // now get puzzles based on level and episode id
            var level = params.level;
            var episode_id = params.episode_id;
            _this.productId = parseInt(params.productId);
            _this._location.subscribe(function (data) {
                if (data.url === "/user/dreamroom/dr-functionality/puzzle/" + _this.productId + "/" + level + "/" + episode_id) {
                    _this._location.back();
                }
            });
            if (parseInt(level) === 3 || parseInt(level) === 13) {
                _this._authService.getPuzzleList({
                    level: level,
                    episode_id: episode_id,
                    product_id: _this.productId,
                    puzzle_type: 1
                }).subscribe(function (res) {
                    if (res.data.list.count > 0) {
                        _this.puzzleReceived = true;
                        _this.puzzles = res.data.list.rows;
                        _this.currentPuzzle = _this.puzzles[0].id;
                        _this._router.navigateByUrl("user/dreamroom/dr-functionality/puzzle/" + _this.productId + "/" + level + "/" + episode_id + "/board/puzzle-play/" + _this.currentPuzzle);
                    }
                    else {
                        _this.puzzleReceived = false;
                    }
                }, function (err) {
                    _this.puzzleReceived = false;
                    // handle error here
                });
                // this._authService.getPuzzleList({
                //   level: level,
                //   episode_id: episode_id,
                //   product_id: this.productId
                // }).subscribe(
                //   res => {
                //     if (res.data.list.count > 0) {
                //       this.puzzleReceived = true;
                //       this.puzzles = res.data.list.rows;
                //       this.currentPuzzle = this.puzzles[0].id;
                //       this.matSelectPuzzle = 'Puzzle ' + this.puzzles[0].id;
                //       this._router.navigateByUrl(`user/dreamroom/dr-functionality/puzzle/${this.productId}/${level}/${episode_id}/puzzle-play/${this.currentPuzzle}`);
                //     } else {
                //       this.puzzleReceived = false;
                //     }
                //   },
                //   (err) => {
                //     this.puzzleReceived = false;
                //     // handle error here
                //   }
                // );
            }
            else if (parseInt(level) === 1) {
                _this.puzzleReceived = true;
                _this.puzzles = _this._puzzleService.getPuzzleList(level, episode_id);
                if (_this.puzzles[0]) {
                    _this.currentPuzzle = _this.puzzles[0].id;
                    _this.matSelectPuzzle = 'Puzzle ' + _this.puzzles[0].id;
                }
                if (episode_id < 7) {
                    _this._router.navigateByUrl("user/dreamroom/dr-functionality/puzzle/" + _this.productId + "/" + level + "/" + episode_id + "/beginner/puzzle-play/" + _this.currentPuzzle);
                }
                else {
                    _this._authService.getPuzzleList({
                        level: level,
                        episode_id: episode_id,
                        product_id: _this.productId,
                        puzzle_type: 1
                    }).subscribe(function (res) {
                        if (res.data.list.count > 0) {
                            _this.puzzleReceived = true;
                            _this.puzzles = res.data.list.rows;
                            _this.currentPuzzle = _this.puzzles[0].id;
                            _this._router.navigateByUrl("user/dreamroom/dr-functionality/puzzle/" + _this.productId + "/" + level + "/" + episode_id + "/board/puzzle-play/" + _this.currentPuzzle);
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
            else if (parseInt(level) === 2) {
                // this.puzzleReceived = true;
                // this.puzzles = this._puzzleService.getPuzzleList(level, episode_id);
                // this.currentPuzzle = this.puzzles[0].id;
                // this._router.navigateByUrl(`user/dreamroom/dr-functionality/puzzle/${this.productId}/${level}/${episode_id}/board/puzzle-play/${this.currentPuzzle}`);
                _this._authService.getPuzzleList({
                    level: level,
                    episode_id: episode_id,
                    product_id: _this.productId,
                    puzzle_type: 1
                }).subscribe(function (res) {
                    if (res.data.list.count > 0) {
                        _this.puzzleReceived = true;
                        _this.puzzles = res.data.list.rows;
                        _this.currentPuzzle = _this.puzzles[0].id;
                        _this._router.navigateByUrl("user/dreamroom/dr-functionality/puzzle/" + _this.productId + "/" + level + "/" + episode_id + "/board/puzzle-play/" + _this.currentPuzzle);
                    }
                    else {
                        _this.puzzleReceived = false;
                    }
                }, function (err) {
                    _this.puzzleReceived = false;
                    // handle error here
                });
            }
        });
    };
    PuzzleComponent.prototype.mobileVersion = function () {
        return window.innerWidth < 800;
    };
    PuzzleComponent.prototype.playPuzzle = function (data) {
        var _this = this;
        this.currentPuzzle = data.id;
        this.matSelectPuzzle = 'Puzzle ' + this.puzzles[0].id;
        this._routes.params.subscribe(function (params) {
            if (parseInt(params.level) === 2 || parseInt(params.level) === 3) {
                _this._router.navigateByUrl("user/dreamroom/dr-functionality/puzzle/" + _this.productId + "/" + params.level + "/" + params.episode_id + "/board/puzzle-play/" + data.id);
            }
            else if (parseInt(params.level) === 13) {
                _this._router.navigateByUrl("user/dreamroom/dr-functionality/puzzle/" + _this.productId + "/" + params.level + "/" + params.episode_id + "/board/puzzle-play/" + data.id);
            }
            // else if (parseInt(params.level) === 3) {
            //   this._router.navigateByUrl(`user/dreamroom/dr-functionality/puzzle/${this.productId}/${params.level}/${params.episode_id}/puzzle-play/${data.id}`);
            // }
            else if (parseInt(params.level) === 1) {
                // this._router.navigateByUrl(`user/dreamroom/dr-functionality/puzzle/${params.level}/${params.episode_id}/beginner/puzzle-play/${data.id}`);
                if (params.episode_id < 7) {
                    _this._router.navigateByUrl("user/dreamroom/dr-functionality/puzzle/" + _this.productId + "/" + params.level + "/" + params.episode_id + "/beginner/puzzle-play/" + _this.currentPuzzle);
                }
                else {
                    _this._router.navigateByUrl("user/dreamroom/dr-functionality/puzzle/" + _this.productId + "/" + params.level + "/" + params.episode_id + "/board/puzzle-play/" + _this.currentPuzzle);
                }
            }
        });
    };
    PuzzleComponent.ɵfac = function PuzzleComponent_Factory(t) { return new (t || PuzzleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_puzzle_service__WEBPACK_IMPORTED_MODULE_3__["PuzzleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
    PuzzleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PuzzleComponent, selectors: [["app-puzzle"]], hostVars: 2, hostBindings: function PuzzleComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.PuzzleComponentClass);
        } }, decls: 2, vars: 2, consts: [["class", "no_data_received", 4, "ngIf"], ["class", "puzzle_container", 4, "ngIf"], [1, "no_data_received"], [1, "puzzle_container"], [3, "value", "valueChange", 4, "ngIf"], ["class", "puzzle_menu", 4, "ngIf"], [1, "puzzle_play"], [3, "value", "valueChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], [1, "puzzle_menu"], ["class", "puzzle_card", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "puzzle_card", 3, "ngClass", "click"]], template: function PuzzleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PuzzleComponent_div_0_Template, 5, 0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PuzzleComponent_div_1_Template, 5, 2, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.puzzleReceived);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.puzzleReceived);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], encapsulation: 2 });
    return PuzzleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PuzzleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-puzzle',
                templateUrl: './puzzle.component.html'
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] }, { type: _puzzle_service__WEBPACK_IMPORTED_MODULE_3__["PuzzleService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }]; }, { PuzzleComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dr-functionality/puzzle/puzzle.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/puzzle/puzzle.module.ts ***!
  \*************************************************************************/
/*! exports provided: PuzzleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleModule", function() { return PuzzleModule; });
/* harmony import */ var _puzzle_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./puzzle-routing.module */ "./src/app/user/dreamroom/dr-functionality/puzzle/puzzle-routing.module.ts");
/* harmony import */ var _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../app-bootstrap.module */ "./src/app/app-bootstrap.module.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../app-material-module */ "./src/app/app-material-module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _puzzle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./puzzle.component */ "./src/app/user/dreamroom/dr-functionality/puzzle/puzzle.component.ts");
/* harmony import */ var _puzzle_item_detail_puzzle_item_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./puzzle-item-detail/puzzle-item-detail.component */ "./src/app/user/dreamroom/dr-functionality/puzzle/puzzle-item-detail/puzzle-item-detail.component.ts");
/* harmony import */ var _beginner_puzzle_beginner_puzzle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./beginner-puzzle/beginner-puzzle.component */ "./src/app/user/dreamroom/dr-functionality/puzzle/beginner-puzzle/beginner-puzzle.component.ts");
/* harmony import */ var _base_puzzle_base_puzzle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base-puzzle/base-puzzle.component */ "./src/app/user/dreamroom/dr-functionality/puzzle/base-puzzle/base-puzzle.component.ts");
/* harmony import */ var _puzzle_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./puzzle.service */ "./src/app/user/dreamroom/dr-functionality/puzzle/puzzle.service.ts");
/* harmony import */ var _drop_off_board_drop_off_board_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./drop-off-board/drop-off-board.component */ "./src/app/user/dreamroom/dr-functionality/puzzle/drop-off-board/drop-off-board.component.ts");
/* harmony import */ var _chess_element_chess_element_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chess-element/chess-element.component */ "./src/app/user/dreamroom/dr-functionality/puzzle/chess-element/chess-element.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");















var PuzzleModule = /** @class */ (function () {
    function PuzzleModule() {
    }
    PuzzleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PuzzleModule });
    PuzzleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function PuzzleModule_Factory(t) { return new (t || PuzzleModule)(); }, providers: [
            _puzzle_service__WEBPACK_IMPORTED_MODULE_10__["PuzzleService"],
            { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: true } }
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_2__["AppMaterialModule"],
                _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_1__["AppBootstrapModule"],
                _puzzle_routing_module__WEBPACK_IMPORTED_MODULE_0__["PuzzleRoutingModule"]
            ]] });
    return PuzzleModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PuzzleModule, { declarations: [_puzzle_component__WEBPACK_IMPORTED_MODULE_6__["PuzzleComponent"],
        _puzzle_item_detail_puzzle_item_detail_component__WEBPACK_IMPORTED_MODULE_7__["PuzzleItemDetailComponent"],
        _beginner_puzzle_beginner_puzzle_component__WEBPACK_IMPORTED_MODULE_8__["BeginnerPuzzleComponent"],
        _base_puzzle_base_puzzle_component__WEBPACK_IMPORTED_MODULE_9__["BasePuzzleComponent"],
        _drop_off_board_drop_off_board_component__WEBPACK_IMPORTED_MODULE_11__["DropOffBoardComponent"],
        _chess_element_chess_element_component__WEBPACK_IMPORTED_MODULE_12__["ChessElementComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_2__["AppMaterialModule"],
        _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_1__["AppBootstrapModule"],
        _puzzle_routing_module__WEBPACK_IMPORTED_MODULE_0__["PuzzleRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PuzzleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_2__["AppMaterialModule"],
                    _app_bootstrap_module__WEBPACK_IMPORTED_MODULE_1__["AppBootstrapModule"],
                    _puzzle_routing_module__WEBPACK_IMPORTED_MODULE_0__["PuzzleRoutingModule"]
                ],
                declarations: [
                    _puzzle_component__WEBPACK_IMPORTED_MODULE_6__["PuzzleComponent"],
                    _puzzle_item_detail_puzzle_item_detail_component__WEBPACK_IMPORTED_MODULE_7__["PuzzleItemDetailComponent"],
                    _beginner_puzzle_beginner_puzzle_component__WEBPACK_IMPORTED_MODULE_8__["BeginnerPuzzleComponent"],
                    _base_puzzle_base_puzzle_component__WEBPACK_IMPORTED_MODULE_9__["BasePuzzleComponent"],
                    _drop_off_board_drop_off_board_component__WEBPACK_IMPORTED_MODULE_11__["DropOffBoardComponent"],
                    _chess_element_chess_element_component__WEBPACK_IMPORTED_MODULE_12__["ChessElementComponent"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NO_ERRORS_SCHEMA"]],
                providers: [
                    _puzzle_service__WEBPACK_IMPORTED_MODULE_10__["PuzzleService"],
                    { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: true } }
                ],
                entryComponents: [
                    _chess_element_chess_element_component__WEBPACK_IMPORTED_MODULE_12__["ChessElementComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user/dreamroom/dr-functionality/puzzle/puzzle.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/user/dreamroom/dr-functionality/puzzle/puzzle.service.ts ***!
  \**************************************************************************/
/*! exports provided: PuzzleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleService", function() { return PuzzleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var PuzzleService = /** @class */ (function () {
    function PuzzleService() {
        this.puzzleList = [
            {
                episode: 1,
                id: 1,
                level: 1,
                heading: "Identify the 4 central squares on the chess board.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: true
                }
            },
            {
                episode: 1,
                id: 2,
                level: 1,
                heading: "Identify the square d6 on the board.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: true
                }
            },
            {
                episode: 1,
                id: 3,
                level: 1,
                heading: "Identify the square d6 on the board.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: false
                }
            },
            {
                episode: 1,
                id: 4,
                level: 1,
                heading: "Identify the square b3 on the board.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: true
                }
            },
            {
                episode: 1,
                id: 5,
                level: 1,
                heading: "Identify the square b3 on the board.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: false
                }
            },
            {
                episode: 1,
                id: 6,
                level: 1,
                heading: "Identify the square g4 on the board.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: true
                }
            },
            {
                episode: 1,
                id: 7,
                level: 1,
                heading: "Identify the square g4 on the board.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: false
                }
            },
            {
                episode: 1,
                id: 8,
                level: 1,
                heading: "Identify the square a8 on the board.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: true
                }
            },
            {
                episode: 1,
                id: 9,
                level: 1,
                heading: "Identify the square a8 on the board.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: false
                }
            },
            {
                episode: 1,
                id: 10,
                level: 1,
                heading: "Identify the square f6.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: true
                }
            },
            {
                episode: 1,
                id: 11,
                level: 1,
                heading: "Identify the square f6.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: false
                }
            },
            {
                episode: 1,
                id: 12,
                level: 1,
                heading: "Identify the central files.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: true
                }
            },
            {
                episode: 1,
                id: 13,
                level: 1,
                heading: "Identify the central files.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: false
                }
            },
            {
                episode: 1,
                id: 14,
                level: 1,
                heading: "Identify the King side files.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: true
                }
            },
            {
                episode: 1,
                id: 15,
                level: 1,
                heading: "Identify the King side files.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: false
                }
            },
            {
                episode: 1,
                id: 16,
                level: 1,
                heading: "Identify the Queen sides files.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: true
                }
            },
            {
                episode: 1,
                id: 17,
                level: 1,
                heading: "Identify the Queen sides files.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: false
                }
            },
            {
                episode: 1,
                id: 18,
                level: 1,
                heading: "Identify the 6th rank.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: true
                }
            },
            {
                episode: 1,
                id: 19,
                level: 1,
                heading: "Identify the 6th rank.",
                detail: "",
                config: {
                    position: 'trash',
                    orientation: false
                },
            },
            {
                episode: 2,
                id: 1,
                level: 1,
                heading: "Question: Can white queen capture black pawn on e5?",
                question_type: 'boolean',
                answer: 'no',
                message: "No, A queen cannot jump over our own material",
                detail: "",
                config: {
                    position: '6k1/5q2/8/4p3/4P3/8/4Q3/6K1 w - - 0 1',
                    orientation: false
                },
            },
            {
                episode: 2,
                id: 2,
                level: 1,
                heading: "Question: Can white knight capture black pawn on b6?",
                question_type: 'boolean',
                answer: 'yes',
                message: "Yes, A knight can jump over opponent material",
                detail: "",
                config: {
                    position: '8/6k1/1pp5/2p5/2N5/8/6K1/8 w - - 0 1',
                    orientation: false
                },
            },
            {
                episode: 2,
                id: 3,
                level: 1,
                heading: "Question: Can white king move to f6 square?",
                question_type: 'boolean',
                answer: 'no',
                message: "No, Both Kings can never come close to each other",
                detail: "",
                config: {
                    position: '8/5k2/8/5K2/8/8/8/8 w - - 0 1',
                    orientation: false
                },
            },
            {
                episode: 2,
                id: 4,
                level: 1,
                heading: "Question: Can white king move to square f4?",
                question_type: 'boolean',
                answer: 'no',
                message: "No, The King cannot go to a square that is under control by an opponent piece or pawn",
                detail: "",
                config: {
                    position: '8/1k6/8/6p1/8/4K3/8/8 w - - 0 1',
                    orientation: false
                },
            },
            {
                episode: 2,
                id: 5,
                level: 1,
                heading: "Question: Can white rook move to square g4?",
                question_type: 'boolean',
                answer: 'no',
                message: "No, The Rook cannot jump over other pieces or pawns",
                detail: "",
                config: {
                    position: '8/6k1/8/8/1p1R1P2/8/6K1/8 w - - 0 1',
                    orientation: false
                },
            },
            {
                episode: 2,
                id: 6,
                level: 1,
                heading: "Question: Can the bishop give a check to black king?",
                question_type: 'boolean',
                answer: 'no',
                message: "No, The bishop can move only in one set of coloured squares. Here, the bishop can only move in light squares.",
                detail: "",
                config: {
                    position: '8/6k1/8/8/8/3B4/6K1/8 w - - 0 1',
                    orientation: false
                },
            },
            {
                episode: 2,
                id: 7,
                level: 1,
                heading: "Question: Can the black bishop go to b8 square in this position?",
                question_type: 'boolean',
                answer: 'yes',
                message: "Yes, A bishop can go forward or backward on the same colour",
                detail: "",
                config: {
                    position: '8/8/4k3/4b3/8/4K3/8/8 b - - 0 1',
                    orientation: false
                },
            },
            {
                episode: 2,
                id: 8,
                level: 1,
                heading: "Question: Can the black knight go to a black square in this position?",
                question_type: 'boolean',
                answer: 'no',
                message: " A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move",
                detail: "",
                config: {
                    position: "8/1k6/8/8/3n2K1/8/8/8 b - - 0 1",
                    orientation: true
                },
            },
            {
                episode: 1,
                id: 1,
                level: 2,
                heading: "White to move and win.",
                question_type: 'puzzle',
                answer: 'no',
                message: " A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move",
                detail: "",
                config: {
                    position: "3r2k1/pb1N1p1p/1p2p1pQ/q2n4/1b1P4/1Br5/P2B1PPP/R3R1K1 w - - 0 23",
                    orientation: true,
                    draggable: true
                },
            },
            {
                episode: 1,
                id: 2,
                level: 2,
                heading: "White to move and win.",
                question_type: 'puzzle',
                answer: 'no',
                message: " A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move",
                detail: "",
                config: {
                    position: "5rk1/r3nppp/p2N4/8/1Q6/8/PPP3Pq/1K1RR3 w - - 0 24",
                    orientation: true,
                    draggable: true
                },
            },
            {
                episode: 1,
                id: 3,
                level: 2,
                heading: "Black to move and win.",
                question_type: 'puzzle',
                answer: 'no',
                message: " A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move",
                detail: "",
                config: {
                    position: "2r2rk1/p4ppp/4pb2/2q5/1p2PP2/5Q2/PPPRN1PP/2K1R3 b - - 0 1",
                    orientation: false,
                    draggable: true
                },
            },
            {
                episode: 1,
                id: 4,
                level: 2,
                heading: "White to move and win.",
                question_type: 'puzzle',
                answer: 'no',
                message: " A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move",
                detail: "",
                config: {
                    position: "rn4k1/p1p1Qrp1/3P2pp/3P4/4Np2/7q/PP5P/R1B1K2R w - - 0 24",
                    orientation: true,
                    draggable: true
                },
            },
            {
                episode: 1,
                id: 5,
                level: 2,
                heading: "White to move and win.",
                question_type: 'puzzle',
                answer: 'no',
                message: " A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move",
                detail: "",
                config: {
                    position: "2r1k3/1p1bppb1/p2p1np1/q3n1P1/3NP3/2N1BP2/PPPQB3/1K1R3r w - - 0 1",
                    orientation: true,
                    draggable: true
                },
            },
            {
                episode: 2,
                id: 1,
                level: 2,
                heading: "White to move and win.",
                question_type: 'puzzle',
                answer: 'no',
                message: " A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move",
                detail: "",
                config: {
                    position: "1r5k/6np/p2p1rpB/1pq1b3/2p1B1PQ/8/PP2RP1P/4R1K1 w - - 0 28",
                    orientation: true,
                    draggable: true
                },
            },
            {
                episode: 2,
                id: 2,
                level: 2,
                heading: "White to move and win.",
                question_type: 'puzzle',
                answer: 'no',
                message: " A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move",
                detail: "",
                config: {
                    position: "2b5/pp2kpR1/2p4p/r2n3P/4NP2/P2P1B2/4PK2/8 w - - 0 34",
                    orientation: true,
                    draggable: true
                },
            },
            {
                episode: 2,
                id: 3,
                level: 2,
                heading: "White to move and win.",
                question_type: 'puzzle',
                answer: 'no',
                message: " A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move",
                detail: "",
                config: {
                    position: "1k3r2/2n3p1/p1pNn3/1p3Pb1/1P6/1P5P/1K1B4/2RB4 w - - 0 49",
                    orientation: true,
                    draggable: true
                },
            },
            {
                episode: 2,
                id: 4,
                level: 2,
                heading: "Black to move and win.",
                question_type: 'puzzle',
                answer: 'no',
                message: " A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move",
                detail: "",
                config: {
                    position: "5r1k/2p3b1/4b1pp/R3p3/4P3/2PQ2N1/1r2BqPP/R6K b - - 0 34",
                    orientation: true,
                    draggable: true
                },
            }, {
                episode: 4,
                id: 1,
                level: 1,
                heading: "Can Black do Queen side castle ?",
                question_type: 'boolean',
                answer: 'yes',
                message: " A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move",
                detail: "",
                config: {
                    position: "r3k3/8/8/8/8/8/8/8 w - - 0 1",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 4,
                id: 2,
                level: 1,
                heading: "White can castle on King side?",
                question_type: 'boolean',
                answer: 'yes',
                message: "on the Queenside. With Bb5 present for black, white cannot castle on the Kingside",
                detail: "",
                config: {
                    position: "8/3k4/8/1b6/8/8/8/R3K2R w KQ - 0 1",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 4,
                id: 3,
                level: 1,
                heading: "White can castle on Queen side?",
                question_type: 'boolean',
                answer: 'no',
                message: "Bf4 prevents white from castling on the queenside",
                detail: "",
                config: {
                    position: "8/8/4k3/8/5b2/8/8/R3K2R w KQ - 0 1",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 4,
                id: 4,
                level: 1,
                heading: "White can castle on Queen side?",
                question_type: 'boolean',
                answer: 'no',
                message: "Nf3 controls d1 square so white cannot castle on the queenside. Even though the Rh1 is under attack, white can still legally castle on the Kingside",
                detail: "",
                config: {
                    position: "8/8/4k3/8/8/8/5n2/R3K2R w KQ - 0 1",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 4,
                id: 5,
                level: 1,
                heading: "Can white castle on the Queenside?",
                question_type: 'boolean',
                answer: 'yes',
                message: "Yes, even though the Ra1 is under attack, he can still castle on the Queenside",
                detail: "",
                config: {
                    position: "8/8/4kb2/8/8/8/8/R3K2R w KQ - 0 1",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 4,
                id: 6,
                level: 1,
                heading: "Can white castle on the King side?",
                question_type: 'boolean',
                answer: 'no',
                message: "He cannot, since the square g1 is\n      under pawn control, the King cannot really go to that square and complete the\n      castling process",
                detail: "",
                config: {
                    position: "4k3/8/8/8/8/8/7p/4K2R w K - 0 1",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 4,
                id: 7,
                level: 1,
                heading: "Can white castle on the King side?",
                question_type: 'boolean',
                answer: 'no',
                message: "No. Since the square\n      g1 is under control by black's Rook, he cannot castle on the King side.",
                detail: "",
                config: {
                    position: "4k1r1/8/8/8/8/8/8/R3K2R w KQ - 0 1",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 4,
                id: 8,
                level: 1,
                heading: " Can white castle on the Queen side?",
                question_type: 'boolean',
                answer: 'no',
                message: "No. Since the square\n      d1 is under control by black Knight, he cannot cross over that square with his\n      King and castle on the queenside",
                detail: "",
                config: {
                    position: "4k3/8/8/8/8/2n5/8/R3K2R w KQ - 0 1",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 4,
                id: 9,
                level: 1,
                heading: " Can white castle on the Queen side?",
                question_type: 'boolean',
                answer: 'no',
                message: "No. Since Nb3 is\n      controlling the c1 square, he cannot castle on the queen side",
                detail: "",
                config: {
                    position: "4k3/8/8/8/8/1n6/8/R3K2R w KQ - 0 1",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 4,
                id: 10,
                level: 1,
                heading: " Can white castle on the Queen side?",
                question_type: 'boolean',
                answer: 'no',
                message: "No. Since pawn on\n      c2 controls the d1 square, the King cannot cross over to the Queenside for\n      castling",
                detail: "",
                config: {
                    position: "4k3/8/8/8/8/8/2p5/R3K2R w KQ - 0 1",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 3,
                id: 1,
                level: 1,
                heading: "White has just played e2 pawn to e4,Can black do enpassant here?",
                question_type: 'boolean',
                answer: 'yes',
                message: "",
                detail: "",
                config: {
                    position: "48/8/8/8/3pP3/8/8/8 w - - 0 1",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 3,
                id: 2,
                level: 1,
                heading: "Black has just moved the pawn from g7 to g5. Can White do an enpassant here?",
                question_type: 'boolean',
                answer: 'yes',
                message: "",
                detail: "",
                config: {
                    position: "5r1k/1n5p/3P1p2/r1pRpPp1/1p2N1P1/8/PP2B2P/1K6 w - - 0 31",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 3,
                id: 3,
                level: 1,
                heading: "Black has just moved the pawn from f7 to f5. Can White do an enpassant\n      here?",
                question_type: 'boolean',
                answer: 'yes',
                message: "",
                detail: "",
                config: {
                    position: "2r1k2r/1q1pb1p1/p3p3/1p2Pp1p/4NPn1/P2Q4/1PPB2PP/R4R1K w k f6 0 18",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 3,
                id: 4,
                level: 1,
                heading: "White just played f2 to f4. Can black do an enpassant here?",
                question_type: 'boolean',
                answer: 'yes',
                message: "",
                detail: "",
                config: {
                    position: "r3r1k1/ppqn1ppp/8/n1pP1b2/2P1pP2/P3P2P/BB1N2P1/R2Q1RK1 b - f3 0 17",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 3,
                id: 5,
                level: 1,
                heading: "Black just played f7 to f5, can white do an enpassant?",
                question_type: 'boolean',
                answer: 'yes',
                message: "",
                detail: "",
                config: {
                    position: "3r2k1/2pqn1p1/p3r2p/1p2Pp2/3P4/4B2P/PPQ2PP1/3RR1K1 w - f6 0 29",
                    orientation: true,
                    draggable: false
                },
            },
            {
                episode: 3,
                id: 6,
                level: 1,
                heading: "Black just played b5, can white do an enpassant?",
                question_type: 'boolean',
                answer: 'yes',
                message: "",
                detail: "",
                config: {
                    position: "1r3rk1/2n1qpb1/p2p1npp/PppP4/R1P1pN1P/1P2P3/1B1QBPP1/4K2R w K b6 0 19",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 3,
                id: 7,
                level: 1,
                heading: "White just played f3 to f4, can black do an enpassant?",
                question_type: 'boolean',
                answer: 'no',
                message: "No. Only when the pawn moves from second rank to 4th rank can an enpassant be made and that too on the same move",
                detail: "",
                config: {
                    position: "3r4/pb5p/1p6/1Pppkpp1/P3pP2/4P1PP/2P1B3/3R1K2 b - - 0 28",
                    orientation: false,
                    draggable: false
                },
            },
            {
                episode: 3,
                id: 8,
                level: 1,
                heading: "Black has just played a7 to a5, Can white do an enpassant?",
                question_type: 'boolean',
                answer: 'yes',
                message: "",
                detail: "",
                config: {
                    position: "r1bq1rk1/7p/1p1p4/pPpPb3/5pB1/R7/1P3PPP/2BQR1K1 w - a6 0 20",
                    orientation: false,
                    draggable: false
                }
            },
            {
                episode: 7,
                id: 1,
                level: 1,
                heading: "Black to move",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Attack the bishop on h4",
                config: {
                    position: "rnbqk2r/ppp2pp1/5n1p/3p4/1b1P3B/2N1P3/PP3PPP/R2QKBNR b KQkq - 0 7",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 7,
                id: 2,
                level: 1,
                heading: "White to move",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Attack the f7 pawn",
                config: {
                    position: "2kr2r1/pp3p2/8/n1pPB1p1/1b2p3/2NbP3/PP2NPP1/2KR3R w - - 0 20",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 7,
                id: 3,
                level: 1,
                heading: "Black to move",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Attack the white Queen",
                config: {
                    position: "r3nrk1/p1q1p1bp/P1p3p1/3P2P1/2QP2b1/2N1BN2/1PP2P2/R3K2R b KQ - 0 20",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 7,
                id: 4,
                level: 1,
                heading: "Black to move",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Attack the white Queen",
                config: {
                    position: "r4rk1/pp1bpp1p/6p1/q1nP4/5B1P/2b1PN2/P3BPP1/2RQ2KR b - - 0 14",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 7,
                id: 5,
                level: 1,
                heading: "White to move",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Attack the black Rook",
                config: {
                    position: "1qrr2k1/1p3pbp/1Pnpp1p1/pB6/4P3/PP2BPP1/2R2QKP/3R4 w - - 0 27",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 7,
                id: 6,
                level: 1,
                heading: "White to move",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Attack the black Queen",
                config: {
                    position: "2r3k1/1r3pbp/QPq3p1/P7/2p2B2/5PP1/4R1KP/3R4 w - - 0 41",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 7,
                id: 7,
                level: 1,
                heading: "White to move",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Attack the black Queen",
                config: {
                    position: "r1b1r1k1/1ppp1ppp/p1n3n1/4P2q/4R3/B1QB1N2/P4PPP/3R2K1 w - - 0 17",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 7,
                id: 8,
                level: 1,
                heading: "White to move",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Attack the black Queen",
                config: {
                    position: "r4k1r/pp3ppp/1bp5/3qN3/3P4/8/P1P2PPP/R2QR1K1 w - - 0 15",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 7,
                id: 9,
                level: 1,
                heading: "White to play",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Attack the black Queen",
                config: {
                    position: "r1b2r1k/pp1p1p1p/n1pN4/b3P1pn/2BP1p1q/2PN4/PP2Q1PP/R1B2RK1 w - - 0 15",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 7,
                id: 10,
                level: 1,
                heading: "White to play",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Attack the black Bishop",
                config: {
                    position: "rnb1k2r/ppppqppp/5n2/8/1bBPPp2/5N2/PPP1Q1PP/RNB1K2R w KQkq - 0 7",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 7,
                id: 11,
                level: 1,
                heading: "White to play",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Attack the black Knight",
                config: {
                    position: "rnb1k2r/ppppqppp/5n2/b7/2BPPp2/2P2N2/PP2Q1PP/RNB1K2R w KQkq - 0 8",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 7,
                id: 12,
                level: 1,
                heading: "White to play",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Attack the black Knight",
                config: {
                    position: "rnb2rk1/ppppqppp/8/b3P2n/2BP1p2/2P2N2/PP2Q1PP/RNB2RK1 w - - 0 10",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 8,
                id: 1,
                level: 1,
                heading: "White to give a check",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Attack the black Knight",
                config: {
                    position: "r1bqk2r/pp3p2/7p/n1pP2p1/1b2p3/1QN1P1B1/PP3PPP/R3K1NR w KQkq - 0 13",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 8,
                id: 2,
                level: 1,
                heading: "Black to play",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Black to give a check",
                config: {
                    position: "2kr4/pp1r1p1R/1n1P3R/6p1/1bp1p3/1PNbP1B1/P3NPP1/2K5 b - - 0 25",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 8,
                id: 3,
                level: 1,
                heading: "White to play",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "White to give a check by capturing material",
                config: {
                    position: "r3nrk1/p1q1p1bp/P1pp2p1/6P1/2pPP1b1/2N1BN2/1PP1QP2/R3K2R w KQ - 0 19",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 8,
                id: 4,
                level: 1,
                heading: "White to play",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "White to give a check black King",
                config: {
                    position: "r1bq1rk1/ppp3pp/2np1b2/4pp2/2PP4/1P4P1/PB1QPPBP/R3NRK1 w - - 0 12",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 8,
                id: 5,
                level: 1,
                heading: "Black to play",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Black to give a check by winning material",
                config: {
                    position: "r1b2rk1/pp1nppbp/6p1/q1PP4/5B2/2P1PN2/P3BPPP/2RQK2R b K - 0 11",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 8,
                id: 6,
                level: 1,
                heading: "Black to play",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Black to give a check with black Knight",
                config: {
                    position: "8/4n3/2k5/8/8/4K3/8/8 b - - 0 1",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 8,
                id: 7,
                level: 1,
                heading: "White to play",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Give all possible check to black King with the Rook",
                config: {
                    position: "8/2k5/8/8/8/8/6K1/4R3 w - - 0 1",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 8,
                id: 8,
                level: 1,
                heading: "White to play",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "Give a check to black King with pawns",
                config: {
                    position: "8/8/5k2/8/4P1P1/8/3K4/8 w - - 0 1",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 8,
                id: 9,
                level: 1,
                heading: "White to play",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "White to give a check to black King",
                config: {
                    position: "8/8/8/2k5/8/8/5N1K/8 w - - 0 1",
                    orientation: true,
                    draggable: true
                }
            },
            {
                episode: 8,
                id: 10,
                level: 1,
                heading: "White to play",
                question_type: 'puzzle',
                answer: 'yes',
                message: "",
                detail: "White to give a check to black King without loosing material",
                config: {
                    position: "8/8/8/8/6k1/8/1K6/5B2 w - - 0 1",
                    orientation: true,
                    draggable: true
                }
            }
        ];
    }
    PuzzleService.prototype.getPuzzleList = function (level, episodeid) {
        return this.puzzleList.filter(function (p) { return parseInt(p.episode) === parseInt(episodeid) && parseInt(p.level) === parseInt(level); });
    };
    PuzzleService.prototype.getPuzzleById = function (level, episodeid, id) {
        return this.puzzleList.filter(function (p) { return parseInt(p.level) === parseInt(level) && parseInt(p.id) === parseInt(id) && parseInt(p.episode) === parseInt(episodeid); })[0];
    };
    PuzzleService.ɵfac = function PuzzleService_Factory(t) { return new (t || PuzzleService)(); };
    PuzzleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PuzzleService, factory: PuzzleService.ɵfac });
    return PuzzleService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PuzzleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=puzzle-puzzle-module.js.map