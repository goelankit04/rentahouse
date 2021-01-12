import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, ViewChild, Inject } from '@angular/core';

import * as Chess from 'chess.js';
import * as $ from 'jquery';

import { AuthService } from '../../auth/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-puzzle-of-the-day',
  templateUrl: './puzzle-of-the-day.component.html',
})
export class PuzzleOfTheDayComponent implements AfterViewInit {
  @HostBinding('class') puzzleOfTheDayComponentClass = 'app-puzzle-of-the-day';

  constructor(
    private _puzzleOfTheDayRef: MatBottomSheetRef<PuzzleOfTheDayComponent>,
    public _authService: AuthService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.game = new Chess();
  }

  puzzleHeading = new Subject<any>();
  player_status_message = new Subject<any>();

  puzzleSolved = false;
  game: any;
  board: any;
  puzzleDetail = {};
  chessBoardConfig: any;
  private _position: any = 'start';
  private _orientation = true;
  private _showNotation = true;
  private _draggable = true;
  private _dropOffBoard: any = 'snapback';
  private _pieceTheme: any =
    'assets/chessboard/img/chesspieces/wikipedia/{piece}.png';
  private _moveSpeed: any = 200;
  private _snapbackSpeed: any = 500;
  private _snapSpeed: any = 100;
  private _sparePieces = false;
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
  Show_solutionBtn: any;
  pointerValue = -1;
  questionIndex: any = [];
  questionCounter = 0;
  found: false;

  @ViewChild('puzzleOftheDayBoard') chessBoard: ElementRef;

  @Input() animation = true;
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

    this.board = ChessBoard('board', this.chessBoardConfig);
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
  }

  private onMouseoverSquare(piece: string, square: string): any {
    this.mouseOverOnBoard.emit({ piece, square });
  }

  private onMouseoutSquare(piece: string, square: string): any {
    this.mouseOutEvent.emit({ piece, square });
  }

  private checkGameMessage() {
    //console.log('** game over function ** ',this.game.game_over());
    //console.log('** count value function ** ',this.count+1);

    if (this.game.game_over() || this.moves.length == this.count + 1) {
      // puzzle solved
      this.puzzleSolved = true;

      this.showSuccessMessage(0, 4);
      this.Show_pgn = true;
    } else {
      this.showSuccessMessage(1, 4);
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
        return true;
      } else if (alternateMoveInfo) {
        if (this.game.game_over() || this.moves.length == this.count + 2) {
          return true;
        } else {
          this.count = 0;
        }
        this.game.move(temp);
        this.moves = h.moves;
        this.count = 0;
        if (this.moves[this.count + 1].comment) this.found = false;

        if (this.count == this.moves.length - 1) this.Show_pgn = true;
        // this.showSuccessMessage();
        return true;
      } else {
        // this.showFailMessage();
        return false;
      }
    } else {
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
      this.checkGameMessage();
      this.Show_pgn = true;
      this.board.position(this.game.fen());
      let removePiece = false;
      this.found = false;

      if (this.count < this.moves.length - 1) {
        const nextMove = this.game.move(this.moves[this.count + 1].move);
        if (nextMove) {
          this.count++;
          this.pointerValue++;
        }

        if (this.count === this.moves.length - 1) {
          this.Show_pgn = true;
        }

        if (this.moves[this.count].move.indexOf('x') !== -1) {
          removePiece = true;
        }
      }

      const bb = this.board;
      const ff = this.game.fen();

      setTimeout(function () {
        bb.position(ff);
      }, 300);

      const saveMoveArray = [];
      for (let i = this.count + 1; i < this.moves.length; i++) {
        saveMoveArray.push(this.moves[i]);
      }

      var isGameOver;
      var isGameInProgress;

      if (this.game.game_over() || this.moves.length == this.count + 1) {
        isGameOver = true;
        isGameInProgress = false;
      } else {
        isGameOver = false;
        isGameInProgress = true;
      }

      this._authService
        .savePuzzleOfTheDay_userResponse({
          userId: localStorage.getItem('id'),
          puzzleId: this.QuizData.fullInfo.puzzle_id,
          fen: ff,
          updatedMoves: saveMoveArray,
          puzzleDate: this.QuizData.fullInfo.scheduled_date,
          inProgress: isGameInProgress,
          puzzleOver: isGameOver,
          snapback: false,
          environment: this._authService.getEnv(),
        })
        .subscribe((res) => {});

      if (this.game.game_over() || this.moves.length == this.count + 1) {
        // puzzle solved
        this.puzzleSolved = true;

        this.showSuccessMessage(0, 4);
        this.Show_pgn = true;
      } else {
        this.showSuccessMessage(1, 4);
      }

      if (removePiece) {
        return 'trash';
      }
    } else {
      this._authService
        .savePuzzleOfTheDay_userResponse({
          userId: localStorage.getItem('id'),
          puzzleId: this.QuizData.fullInfo.puzzle_id,
          fen: this.game.fen(),
          // updatedMoves: saveMoveArray,
          puzzleDate: this.QuizData.fullInfo.scheduled_date,
          inProgress: true,
          puzzleOver: false,
          snapback: true,
          environment: this._authService.getEnv(),
        })
        .subscribe((res) => {});
      if (!this.game.game_over()) this.showFailMessage();
      return 'snapback';
    }
  }

  public ReloadQuiz(quizData: any) {
    $('#board').find('.square-55d63').removeClass('highlight');
    this.player_status_message.next('');
    this.sub_text = '';
    this.count = -1;
    this.selectedCol = -1;
    this.selectedRow = -1;
    this.selectedMat = -1;
    this.selectedCat = -1;
    this.moves = quizData.parsed_pgn.moves;

    this.puzzleHeading.next(quizData.fullInfo.heading);

    this.display_moves = quizData.parsed_pgn.moves;
    this.pgn = quizData.pgn;
    this.pgn = this.pgn
      .replace(/\(/g, '<br>(')
      .replace(/\)/g, ')<br>')
      .replace(/(\{[^}]+\})+?/g, '');
    this.position = quizData.fen;
    this.initial_chess_position = quizData.fen;
    this.game.load(quizData.fen);
    this.pointerValue = -1;
    this.questionIndex = [];
    this.questionCounter = 0;
    if (quizData.parsed_pgn.comment != null) {
      this.puzzleDetail['Question'] = quizData.parsed_pgn.comment.replace(
        '**',
        ''
      );
    } else {
      this.puzzleDetail['Question'] = '';
    }
    this.Show_pgn = false;
    this.Show_solutionBtn = false;

    quizData.parsed_pgn.moves.forEach((element, index) => {
      if (element.comment && element.comment.indexOf('**') !== -1) {
        this.questionIndex.push(index);
      }
    });
  }

  ngAfterViewInit(): void {
    this.puzzleSolved = !this.data.showPuzzle;

    if (!this.puzzleSolved) {
      this.load();
    }

    if (this.data.puzzleResponse) {
      this.puzzleDetail['question_type'] = 'puzzle';
      this.QuizData = this.data.puzzleResponse.data.puzzle.puzzles;
      this.player_status_message.next('');
      this.sub_text = '';
      if (!this.puzzleSolved) {
        this.ReloadQuiz(this.data.puzzleResponse.data.puzzle.puzzles);
      }
    }
  }

  showSuccessMessage(messageNumber, subTextNumber) {
    this.player_status_message.next(this.message_success[messageNumber]);
    this.sub_text = this.message_fail[subTextNumber];

    // this.closePuzzleOfTheDay();

    // code here
    // let interval;
    // let timeLeft = 120;
    // interval = setInterval(() => {
    //   timeLeft === 0 ? this.closePuzzleOfTheDay() : timeLeft--;
    // }, 1000);

    // interval.start();
  }

  showFailMessage() {
    this.player_status_message.next(this.message_fail[3]);
    this.sub_text = this.message_fail[1];
  }

  closePuzzleOfTheDay() {
    localStorage.setItem('puzzle_opened', 'false');
    this._puzzleOfTheDayRef.dismiss();
  }
}
