import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Chess from 'chess.js';
import * as $ from 'jquery';
import { PuzzleService } from '../puzzle.service';
import { BreadCrumbService } from '../../../../../auth/breadcrumb.service';
import { AuthService } from '../../../../../auth/auth.service';
@Component({
  selector: 'app-open-board',
  templateUrl: './open-board.component.html',
  styleUrls: ['./open-board.component.scss'],
})
export class OpenBoardComponent implements OnInit {
  @HostBinding('class') OpenBoardComponentClass = 'app-open-board';

  board: any;

  private _position: any = 'start';
  private _orientation = true;
  private _showNotation = true;
  private _draggable = false;
  private _dropOffBoard: any = 'snapback';
  private _pieceTheme: any =
    'assets/chessboard/img/chesspieces/wikipedia/{piece}.png';
  private _moveSpeed: any = 200;
  private _snapbackSpeed: any = 500;
  private _snapSpeed: any = 100;
  private _sparePieces = false;
  private _boardSize = '400px';

  puzzleDetail: any;
  product_type: any;
  game: any;

  isInitialFenValid = 1;

  @Input() animation = true;

  chessBoardConfig: any;
  player_status_message: string;
  sub_text: string;
  message_success = ['Solved', 'Well done!'];
  message_fail = [
    'Incorrect',
    'Please try again',
    'Please enter the next move',
    'Not the strongest move',
    'Game Over',
  ];
  level: number;
  episode_id: number;
  productId: any;
  puzzleId: any;
  moves: any = [];
  count = -1;
  Show_pgn: any;
  pgn: any;
  initial_chess_position: any;
  display_moves: any;
  selectedCol: any;
  selectedRow: any;
  selectedMat: any;
  selectedCat: any;
  QuizData: any;
  Show_solutionBtn = true;
  pointerValue = -1;
  positionPointer = -1;
  questionIndex: any = [];
  questionCounter = 0;
  found: false;
  outerPointerCount = 0;
  private arrFen: any = [];

  @ViewChild('board') chessBoard: ElementRef;

  @Input('boardSize')
  set BoardSize(size: string) {
    this._boardSize = size;
    this.chessBoard.nativeElement.style.width = size;
  }

  @Output() animationChange: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() positionChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() orientationChange: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() showNotationChange: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() draggableChange: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() dropOffBoardChange: EventEmitter<string> = new EventEmitter<
    string
  >();
  @Output() pieceThemeChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() moveSpeedChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() snapbackSpeedChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() snapSpeedChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() sparePiecesChange: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() mouseOverOnBoard: EventEmitter<any> = new EventEmitter<any>();
  @Output() boardClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() mouseOutEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() gameMovesResult: EventEmitter<any> = new EventEmitter<any>();

  // EVENTS
  @Output() change: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() dragStart: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() dragMove: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() drop: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() snapbackEnd: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() moveEnd: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(
    private _routes: ActivatedRoute,
    private _puzzleService: PuzzleService,
    public breadCrum: BreadCrumbService,
    public _authService: AuthService
  ) {
    this.game = new Chess();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.board) {
      this.board.resize(event);
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.boardClick.emit(event);
  }

  @Input()
  set position(value: any) {
    this._position = value;
    if (this.board) {
      this.board.position(value, this.animation);
    }
  }

  @Input()
  set orientation(value: boolean) {
    this._orientation = value;
    if (this.board) {
      this.board.orientation(value ? 'white' : 'black');
    }
    this.orientationChange.emit(this._orientation);
  }

  @Input()
  set showNotation(value: boolean) {
    this._showNotation = value;
    if (this.board) {
      this.load();
    }
    this.showNotationChange.emit(this._showNotation);
  }

  @Input()
  set draggable(value: boolean) {
    this._draggable = value;
    if (this.board) {
      this.load();
    }
    this.draggableChange.emit(this._draggable);
  }

  @Input()
  set dropOffBoard(value: string) {
    this._dropOffBoard = value;
    if (this.board) {
      this.load();
    }
    this.dropOffBoardChange.emit(this._dropOffBoard);
  }

  @Input()
  set moveSpeed(value: any) {
    this._moveSpeed = value;
    if (this.board) {
      this.load();
    }
    this.moveSpeedChange.emit(this._moveSpeed);
  }

  @Input()
  set snapbackSpeed(value: any) {
    this._snapbackSpeed = value;
    if (this.board) {
      this.load();
    }
    this.snapbackSpeedChange.emit(this._snapbackSpeed);
  }

  @Input()
  set snapSpeed(value: any) {
    this._snapSpeed = value;
    if (this.board) {
      this.load();
    }
    this.snapSpeedChange.emit(this._snapSpeed);
  }

  @Input()
  set sparePieces(value: boolean) {
    this._sparePieces = value;
    if (this.board) {
      this.load();
    }
    this.sparePiecesChange.emit(this._sparePieces);
  }

  get position(): any {
    return this._position;
  }

  get orientation(): boolean {
    return this._orientation;
  }

  get showNotation(): boolean {
    return this._showNotation;
  }

  get draggable(): boolean {
    return this._draggable;
  }

  get dropOffBoard(): string {
    return this._dropOffBoard;
  }

  get moveSpeed(): any {
    return this._moveSpeed;
  }

  get snapbackSpeed(): any {
    return this._snapbackSpeed;
  }

  get snapSpeed(): any {
    return this._snapSpeed;
  }

  get sparePieces(): boolean {
    return this._sparePieces;
  }

  // METHODS

  public clear() {
    this.board.clear(this.animation);
  }

  public move(notation: string, event: any) {
    this.board.move(notation);
  }

  public moveToOriginalPosition(event?: any) {
    return 'snapback';
  }

  private onChangeHandler(oldPos: any, newPos: any): any {
    this.change.emit({ oldPos, newPos });
  }

  private onDragStart(
    source: string,
    piece: string,
    position: any,
    orientation: string
  ): any {
    document.addEventListener(
      'touchmove',
      (e: any) => {
        e.preventDefault();
      },
      false
    );

    this.dragStart.emit({ source, piece, position, orientation });
  }

  private onDragMove(
    newLocation: any,
    oldLocation: any,
    source: string,
    piece: string,
    position: any,
    orientation: string
  ): any {
    this.dragMove.emit({
      newLocation,
      oldLocation,
      source,
      piece,
      position,
      orientation,
    });
  }

  public ReloadQuiz() {
    $('#board').find('.square-55d63').removeClass('highlight');
    this.player_status_message = '';
    this.sub_text = '';
    this.count = -1;
    this.selectedCol = -1;
    this.selectedRow = -1;
    this.selectedMat = -1;
    this.selectedCat = -1;

    this.moves = this.QuizData.parsed_pgn.moves;
    this._orientation =
      this.QuizData.fullInfo.heading == 'Black to move' ? false : true;
    //console.log("hjhjhjhjhhjhjhjh",this.QuizData.fullInfo.heading,this._orientation)
    this.puzzleDetail.heading = this.QuizData.fullInfo.heading;
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
      this.puzzleDetail.Question = this.QuizData.parsed_pgn.comment.replace(
        '**',
        ''
      );
    else this.puzzleDetail.Question = '';
    this.Show_pgn = false;
    this.Show_solutionBtn = true;
    // this.Show_solutionBtn = false;

    this.QuizData.parsed_pgn.moves.forEach((element, index) => {
      if (element.comment && element.comment.indexOf('**') != -1)
        this.questionIndex.push(index);
    });
    this.load();
  }

  public moveFrom_pgn(
    outerIndex,
    check,
    middleIndex,
    innerIndex,
    innerindex_array
  ) {
    //console.log("outerindex:-", outerIndex, 'check:-', check, 'middleindex:-', middleIndex, 'innerindex:-', innerIndex)
    $('#board').find('.square-55d63').removeClass('highlight');
    this.selectedCol = -1;
    this.selectedRow = -1;
    this.selectedMat = -1;
    this.selectedCat = -1;
    var newchess = new Chess();
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
    } else {
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

    this.board.position(newchess.fen());
  }

  public moveHint() {
    if (this.moves[this.count + 1] && this.moves[this.count + 1].move)
      var moveInfo = this.game.move(this.moves[this.count + 1].move);
    if (moveInfo) {
      this.game.undo();
      $('#board')
        .find('.square-' + moveInfo.from)
        .addClass('highlight');
    }
  }

  public nextMove() {
    if (this.Show_pgn && this.moves[this.count + 1]) {
      $('#board').find('.square-55d63').removeClass('highlight');

      var moveCheck;

      moveCheck = this.game.move(this.moves[this.count + 1].move);

      if (moveCheck) {
        if (this.count < this.moves.length - 1) {
          this.count++;
        }
        this.board.position(this.game.fen());

        if (
          this.selectedCol == -1 &&
          this.selectedRow != -2 &&
          this.selectedMat == -1 &&
          this.selectedCat == -1
        ) {
          this.selectedRow = this.count;
        }

        if (this.selectedRow == -1) {
          if (this.selectedCol > -1) this.selectedCol++;
          else {
            this.selectedCol = -1;
            this.selectedRow = 0;
            this.selectedMat = -1;
            this.selectedCat = -1;
            this.count = -1;
          }
        }
      }
    }
  }

  public previousMove() {
    $('#board').find('.square-55d63').removeClass('highlight');
    var moveCheck = this.game.undo();
    if (moveCheck) {
      if (this.count > -1) this.count--;
      this.board.position(this.game.fen());
      if (
        this.selectedCol == -1 &&
        this.selectedRow != -1 &&
        this.selectedMat == -1 &&
        this.selectedCat == -1
      ) {
        this.selectedRow = this.count;
      }

      if (this.selectedRow == -1) {
        if (this.selectedCol == 0) this.selectedCol = -1;

        if (this.selectedCol > 0) this.selectedCol--;
        else {
          if (this.selectedCat != -1) {
            this.selectedRow = this.selectedCat - 1;
            this.selectedCat = -1;
            this.selectedCol = -1;
            this.selectedMat = -1;
            this.count = this.selectedRow;
            this.moves = this.QuizData.parsed_pgn.moves;
          }
        }
      } else {
        this.moves = this.QuizData.parsed_pgn.moves;
      }
      if (this.count == -1) {
        this.selectedCol = -1;
        this.selectedRow = -1;
        this.selectedMat = -1;
        this.selectedCat = -1;
        this.count = -1;
        this.moves = this.QuizData.parsed_pgn.moves;
        this.position = this.QuizData.fen;
        this.game.load(this.QuizData.fen);
      }
    }
  }

  private checkMoveAndPlay(source, target, piece, newPos, oldPos) {
    $('#board').find('.square-55d63').removeClass('highlight');
    if (!this.game.game_over()) {
      if (this.count == -1 && this.display_moves.length == 0)
        this.display_moves.push(this.moves[0]);
      if (this.count < this.moves.length - 1) {
        var moveInfo = this.game.move(this.moves[this.count + 1].move);
        if (moveInfo) this.game.undo();
        var alternateMoveInfo = false;
        if (this.moves[this.count + 1].ravs) {
          for (let i = 0; i < this.moves[this.count + 1].ravs.length; i++) {
            var h = this.moves[this.count + 1].ravs[i];
            var temp = h.moves[0].move;
            var info = this.game.move(temp);
            this.game.undo();
            if (
              info &&
              info.color + info.piece == piece.toLowerCase() &&
              info.to == target
            ) {
              alternateMoveInfo = true;
              break;
            }
          }
        }
      }

      if (
        moveInfo &&
        moveInfo.color + moveInfo.piece == piece.toLowerCase() &&
        moveInfo.to == target
      ) {
        this.game.move(this.moves[this.count + 1].move);
        // this.showSuccessMessage();

        if (this.moves[this.count + 1].comment) this.found = false;
        this.count++;
        this.pointerValue++;

        if (this.count == this.moves.length - 1) this.Show_pgn = true;
        this.showSuccessMessage(1, 2);
        return true;
      } else if (alternateMoveInfo) {
        this.game.move(temp);
        this.moves = h.moves;
        this.count = 0;
        if (this.moves[this.count + 1].comment) this.found = false;

        if (this.count == this.moves.length - 1) this.Show_pgn = true;
        this.showSuccessMessage(1, 2);
        return true;
      } else {
        this.showFailMessage();
        return false;
      }
    } else {
      this.showSuccessMessage(1, 4);
      this.Show_pgn = true;
    }
  }

  private onDrop(
    source?: string,
    target?: string,
    piece?: string,
    newPos?: any,
    oldPos?: any,
    orientation?: string
  ): any {
    if (this.checkMoveAndPlay(source, target, piece, newPos, oldPos)) {
      this.Show_pgn = true;
      this.board.position(this.game.fen());
      var removePiece = false;
      this.found = false;
      this.puzzleDetail.Question = '';

      if (this.count < this.moves.length - 1) {
        var nextMove = this.game.move(this.moves[this.count + 1].move);
        if (nextMove) {
          this.count++;
          this.pointerValue++;
        }

        if (this.count == this.moves.length - 1) this.Show_pgn = true;

        if (this.moves[this.count].move.indexOf('x') != -1) {
          removePiece = true;
        }
      } else {
        this.showSuccessMessage(1, 4);
      }
      var bb = this.board;
      var ff = this.game.fen();
      setTimeout(function () {
        bb.position(ff);
      }, 300);

      if (this.game.game_over()) {
        this.showSuccessMessage(1, 4);
        this.Show_pgn = true;
      }

      if (removePiece) return 'trash';
    } else {
      this.showFailMessage();
      return 'snapback';
    }
  }

  onSnapbackEnd(
    piece?: string,
    square?: string,
    position?: any,
    orientation?: string
  ): any {
    this.snapbackEnd.emit({ piece, square, position, orientation });
  }

  onMoveEnd(movement?: any, oldPos?: any, newPos?: any): any {
    this._position = newPos;
    // this.positionChange.emit(this._position);
    // this.moveEnd.emit({oldPos, newPos});

    // this.board.move(movement);
  }

  private onMouseoverSquare(piece: string, square: string): any {
    this.mouseOverOnBoard.emit({ piece, square });
  }

  private onMouseoutSquare(piece: string, square: string): any {
    this.mouseOutEvent.emit({ piece, square });
  }

  OnBoardClick(event) {
    this.boardClick.emit(event);
  }

  private load() {
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

    this.chessBoard.nativeElement.style.width = this._boardSize;
    //console.log("** hello its working ** ",this.chessBoardConfig)
    this.board = ChessBoard('board', this.chessBoardConfig);
  }

  ngOnInit() {
    this.product_type = localStorage.getItem('productType');
    this.breadCrum.puzzleBreadCrumb(13);
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

    this._routes.parent.params.subscribe((params) => {
      this.level = params.level;
      this.episode_id = params.episode_id;
      this.productId = params.productId;

      this._routes.params.subscribe((localParams) => {
        this.puzzleDetail.question_type = 'puzzle';
        this.puzzleId = localParams.puzzleId;
        // now load the puzzle data based on server data
        this._authService
          .getPuzzleById({
            level: this.level,
            episode_id: Number(this.episode_id),
            puzzle_id: Number(this.puzzleId),
            product_id: Number(this.productId),
            is_quiz: true,
            productType: Number(localStorage.getItem('productType')),
            userId: Number(localStorage.getItem('id')),
          })

          .subscribe((res) => {
            this.Show_solutionBtn = true;
            this.puzzleDetail.question_type = 'puzzle';
            this.QuizData = res.data.puzzle;
            this.player_status_message = '';
            this.sub_text = '';

            // console.log("Puzzle Data", this.QuizData)
            this.ReloadQuiz();
          });
      });
    });
    //////console.log("working")
    // this.breadCrum.levelSelectorBreadcrumb(this.level);
    // this.breadCrum.puzzleBreadCrumb(1);
    // this.breadCrum.episodeBreadCrumb(this.episode_id);
    if (window.innerWidth < 370) {
      this.chessBoard.nativeElement.style.width = '200px';
    } else if (window.innerWidth < 470) {
      this.chessBoard.nativeElement.style.width = '300px';
    } else if (window.innerWidth < 1100) {
      this.chessBoard.nativeElement.style.width = '400px';
    } else {
      this.chessBoard.nativeElement.style.width = '400px';
    }
  }

  submitSolution() {}

  showSuccessMessage(messageNumber, subTextNumber) {
    this.player_status_message = this.message_success[messageNumber];
    this.sub_text = this.message_fail[subTextNumber];
  }

  showFailMessage() {
    this.player_status_message = this.message_fail[3];
    this.sub_text = this.message_fail[1];
  }
}
