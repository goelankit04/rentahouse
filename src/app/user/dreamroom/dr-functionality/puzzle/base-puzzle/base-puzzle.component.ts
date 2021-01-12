import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import * as Chess from 'chess.js';
import { MatDialog } from '@angular/material/dialog';
import { ChessElementComponent } from '../chess-element/chess-element.component';

@Component({
  selector: 'app-base-puzzle',
  templateUrl: './base-puzzle.component.html',
})
export class BasePuzzleComponent implements OnInit {
  @HostBinding('class') basePuzzleComponentClass = 'app-base-puzzle';

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

  game: any;

  isInitialFenValid = 1;

  @Input() animation = true;

  chessBoardConfig: any;

  @ViewChild('board') chessBoard: ElementRef;

  @Input('boardSize')
  set BoardSize(size: string) {
    this._boardSize = size;
    // this.chessBoard.nativeElement.style.width = size;
    if (document.getElementById('board')) {
      document.getElementById('board').style.width = size;
    }
  }

  @Output()
  animationChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() positionChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  orientationChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  showNotationChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  draggableChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  dropOffBoardChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() pieceThemeChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() moveSpeedChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() snapbackSpeedChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() snapSpeedChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  sparePiecesChange: EventEmitter<boolean> = new EventEmitter<boolean>();
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

  constructor(public dialog: MatDialog) {
    this.game = new Chess();
  }

  // PARAMETERS

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
    this.board.position(notation);
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

  private onDrop(
    source?: string,
    target?: string,
    piece?: string,
    newPos?: any,
    oldPos?: any,
    orientation?: string
  ): any {
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
  }

  onSnapbackEnd(
    piece?: string,
    square?: string,
    position?: any,
    orientation?: string
  ): any {
    this.snapbackEnd.emit({ piece, square, position, orientation });
  }

  private onMoveEnd(oldPos: any, newPos: any): any {
    this._position = newPos;
    this.positionChange.emit(this._position);
    this.moveEnd.emit({ oldPos, newPos });
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
  }

  ngOnInit() {
    this.load();
  }
}
