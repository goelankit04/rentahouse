import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chess-element',
  templateUrl: './chess-element.component.html',
  styleUrls: ['./chess-element.component.scss']
})
export class ChessElementComponent implements OnInit {

  items = [
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

  constructor(
    public dialogRef: MatDialogRef<ChessElementComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
  }

  elementClicked(index: number) {
    this.dialogRef.close({index: index});
  }

}
