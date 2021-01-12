import {
  Component,
  HostBinding,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';
import { BasePuzzleComponent } from '../base-puzzle/base-puzzle.component';

import { PuzzleService } from '../puzzle.service';
import { Router } from '@angular/router';
import { BreadCrumbService } from '../../../../../auth/breadcrumb.service';
@Component({
  selector: 'app-beginner-puzzle',
  templateUrl: './beginner-puzzle.component.html',
})
export class BeginnerPuzzleComponent implements OnInit {
  @HostBinding('class') beginnerPuzzleComponentClass = 'app-beginner-puzzle';

  boardSize = '450px';
  // boardSize: number

  chessConfig: any;

  puzzleDetail: any;

  dropOffBoard: string;

  @ViewChild(BasePuzzleComponent)
  basePuzzleCompoment: BasePuzzleComponent;

  player_status_message: string;
  sub_text: string;

  message_success = ['Solved', 'Well done!'];
  message_fail = [
    'Incorrect',
    'Please try again',
    'Please enter the next move',
    'Not the strongest move',
  ];
  level: number;
  episode_id: number;
  private arrFen = [];
  constructor(
    private _routes: ActivatedRoute,
    private _puzzleService: PuzzleService,
    private router: Router,
    public breadcrum: BreadCrumbService
  ) {}

  ngOnInit() {
    this._routes.parent.params.subscribe((parentparams) => {
      this.level = parentparams.level;
      this.episode_id = parentparams.episode_id;
      this._routes.params.subscribe((params: any) => {
        this.puzzleDetail = this._puzzleService.getPuzzleById(
          this.level,
          parentparams.episode_id,
          params.puzzleId
        );
        this.chessConfig = this.puzzleDetail.config;
        this.arrFen = [];
        this.arrFen.push(this.puzzleDetail.config.position);
        $('#board .square-55d63').removeClass('highlight1-32417');
        this.player_status_message = '';
        this.sub_text = '';
      });
    });
    this.breadcrum.levelSelectorBreadcrumb(1);
    this.breadcrum.puzzleBreadCrumb(1);
    this.breadcrum.episodeBreadCrumb(this.episode_id);
    if (window.innerWidth < 370) {
      this.boardSize = '200px';
    } else if (window.innerWidth < 470) {
      this.boardSize = '300px';
    } else if (window.innerWidth < 1100) {
      this.boardSize = '400px';
    } else {
      this.boardSize = '500px';
    }
  }

  removeHighlightedSquares() {
    $('#board .square-55d63').removeClass('highlight1-32417');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 370) {
      this.boardSize = '200px';
    } else if (window.innerWidth < 470) {
      this.boardSize = '300px';
    } else if (window.innerWidth < 1100) {
      this.boardSize = '400px';
    } else {
      this.boardSize = '500px';
    }
  }

  highlightRow(square) {
    const row = square[1];
    const column = square[0];
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    // highlight the possible squares for this piece
    for (let i = 0; i < 8; i++) {
      this.greySquare(arr[i] + row);
    }
  }

  highlightColumn(square) {
    const row = square[1];
    const column = square[0];
    for (let i = 1; i <= 8; i++) {
      this.greySquare(column + i);
    }
  }

  greySquare(square) {
    const squareEl = $('#board .square-' + square);

    // let background = '#a9a9a9';
    let background = '#89f36d';

    if (squareEl.hasClass('black-3c85d') === true) {
      background = '#696969';
    }
    squareEl.css('background', background);
  }

  onBoardClick(event: any) {
    const boardClickId = event.target.id;

    event.target.className += ' highlight1-32417';

    const square = event.target.dataset.square;
    if (this.level == 1) {
      if (parseInt(this.puzzleDetail.id) === 1) {
        let counter = 0;

        if (
          square === 'd4' ||
          square === 'e4' ||
          square === 'd5' ||
          square === 'e5'
        ) {
          $('#board .highlight1-32417').each(function (index, element: any) {
            if (element.dataset.square === 'd4') {
              counter = counter + 1;
            }
            if (element.dataset.square === 'd5') {
              counter = counter + 1;
            }
            if (element.dataset.square === 'e4') {
              counter = counter + 1;
            }
            if (element.dataset.square === 'e5') {
              counter = counter + 1;
            }
          });

          if (counter > 3) {
            // console.log('yes');
            this.player_status_message = this.message_success[0];
            this.sub_text = this.message_success[1];
          } else {
            // console.log('still in progress');
          }
        } else {
          // console.log('failed');
          this.player_status_message = this.message_fail[0];
          this.sub_text = this.message_fail[1];
          this.removeHighlightedSquares();
        }
      }

      if (
        parseInt(this.puzzleDetail.id) === 2 ||
        parseInt(this.puzzleDetail.id) === 3
      ) {
        if (square === 'd6') {
          // console.log('yes');
          this.player_status_message = this.message_success[0];
          this.sub_text = this.message_success[1];
        } else {
          // console.log('failed');
          this.player_status_message = this.message_fail[0];
          this.sub_text = this.message_fail[1];
          this.removeHighlightedSquares();
        }
      }

      if (
        parseInt(this.puzzleDetail.id) === 4 ||
        parseInt(this.puzzleDetail.id) === 5
      ) {
        if (square === 'b3') {
          // console.log('yes');
          this.player_status_message = this.message_success[0];
          this.sub_text = this.message_success[1];
        } else {
          // console.log('failed');
          this.player_status_message = this.message_fail[0];
          this.sub_text = this.message_fail[1];
          this.removeHighlightedSquares();
        }
      }

      if (
        parseInt(this.puzzleDetail.id) === 6 ||
        parseInt(this.puzzleDetail.id) === 7
      ) {
        if (square === 'g4') {
          // console.log('yes');
          this.player_status_message = this.message_success[0];
          this.sub_text = this.message_success[1];
        } else {
          // console.log('failed');
          this.player_status_message = this.message_fail[0];
          this.sub_text = this.message_fail[1];
          this.removeHighlightedSquares();
        }
      }

      if (
        parseInt(this.puzzleDetail.id) === 8 ||
        parseInt(this.puzzleDetail.id) === 9
      ) {
        if (square === 'a8') {
          // console.log('yes');
          this.player_status_message = this.message_success[0];
          this.sub_text = this.message_success[1];
        } else {
          // console.log('failed');
          this.player_status_message = this.message_fail[0];
          this.sub_text = this.message_fail[1];
          this.removeHighlightedSquares();
        }
      }

      if (
        parseInt(this.puzzleDetail.id) === 10 ||
        parseInt(this.puzzleDetail.id) === 11
      ) {
        if (square === 'f6') {
          // console.log('yes');
          this.player_status_message = this.message_success[0];
          this.sub_text = this.message_success[1];
        } else {
          // console.log('failed');
          this.player_status_message = this.message_fail[0];
          this.sub_text = this.message_fail[1];
          this.removeHighlightedSquares();
        }
      }

      if (
        parseInt(this.puzzleDetail.id) === 12 ||
        parseInt(this.puzzleDetail.id) === 13
      ) {
        this.highlightColumn(square);

        let counter = 0,
          rcounter = 0;
        $('#board .highlight1-32417').each(function (index, element: any) {
          const row = element.dataset.square[1];
          const column = element.dataset.square[0];
          counter = counter + 1;
          if (column === 'd') {
            rcounter = rcounter + 1;
          }

          if (column === 'e') {
            rcounter = rcounter + 1;
          }
        });
        if (counter == 2 && rcounter == 2) {
          // console.log('yes');
          this.player_status_message = this.message_success[0];
          this.sub_text = this.message_success[1];
        } else {
          this.player_status_message = this.message_fail[0];
          this.sub_text = this.message_fail[1];
        }
      }
      if (
        parseInt(this.puzzleDetail.id) === 14 ||
        parseInt(this.puzzleDetail.id) === 15
      ) {
        this.highlightColumn(square);

        let counter = 0,
          rcounter = 0;
        $('#board .highlight1-32417').each(function (index, element: any) {
          const row = element.dataset.square[1];
          const column = element.dataset.square[0];
          counter = counter + 1;
          if (column === 'f') {
            rcounter = rcounter + 1;
          }

          if (column === 'g') {
            rcounter = rcounter + 1;
          }

          if (column === 'h') {
            rcounter = rcounter + 1;
          }
        });
        if (counter == 3 && rcounter == 3) {
          // console.log('yes');
          this.player_status_message = this.message_success[0];
          this.sub_text = this.message_success[1];
        } else {
          this.player_status_message = this.message_fail[0];
          this.sub_text = this.message_fail[1];
        }
      }
      if (
        parseInt(this.puzzleDetail.id) === 16 ||
        parseInt(this.puzzleDetail.id) === 17
      ) {
        this.highlightColumn(square);

        let counter = 0,
          rcounter = 0;
        $('#board .highlight1-32417').each(function (index, element: any) {
          const row = element.dataset.square[1];
          const column = element.dataset.square[0];
          counter = counter + 1;
          if (column === 'a') {
            rcounter = rcounter + 1;
          }

          if (column === 'b') {
            rcounter = rcounter + 1;
          }

          if (column === 'c') {
            rcounter = rcounter + 1;
          }
        });
        if (counter == 3 && rcounter == 3) {
          // console.log('yes');
          this.player_status_message = this.message_success[0];
          this.sub_text = this.message_success[1];
        } else {
          this.player_status_message = this.message_fail[0];
          this.sub_text = this.message_fail[1];
        }
      }

      if (
        parseInt(this.puzzleDetail.id) === 18 ||
        parseInt(this.puzzleDetail.id) === 19
      ) {
        this.highlightRow(square);

        let counter = 0,
          rcounter = 0;
        $('#board .highlight1-32417').each(function (index, element: any) {
          const row = element.dataset.square[1];
          const column = element.dataset.square[0];
          counter = counter + 1;
          if (parseInt(row) === 6) {
            rcounter = rcounter + 1;
          }
        });
        if (counter == 1 && rcounter == 1) {
          // console.log('yes');
          this.player_status_message = this.message_success[0];
          this.sub_text = this.message_success[1];
        } else {
          this.player_status_message = this.message_fail[0];
          this.sub_text = this.message_fail[1];
        }
      }
    }
  }

  onMouseOverSquare(event: any) {
    // this.highlightColumn(event.piece);
  }

  onMouseoutSquare(event: any) {
    // this.removeGreySquares();
  }

  removeGreySquares() {
    $('#board .square-55d63').css('background', '');
  }

  clickedYes() {
    if (this.level == 1 && this.episode_id == 2) {
      if (this.puzzleDetail.id == 1) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 2) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 3) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 4) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 5) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 6) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 7) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 8) {
        this.showOnClickFail();
      }
    }
    if (this.level == 1 && this.episode_id == 3) {
      if (this.puzzleDetail.id == 1) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 2) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 3) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 4) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 5) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 6) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 7) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 8) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 9) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 10) {
        this.showOnClickSuccess();
      }
    }

    if (this.level == 1 && this.episode_id == 4) {
      if (this.puzzleDetail.id == 1) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 2) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 3) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 4) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 5) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 6) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 7) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 8) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 9) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 10) {
        this.showOnClickFail();
      }
    }
  }

  clickedNo() {
    if (this.level == 1 && this.episode_id == 2) {
      if (this.puzzleDetail.id == 1) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 2) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 3) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 4) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 5) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 6) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 7) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 8) {
        this.showOnClickSuccess();
      }
    }
    if (this.level == 1 && this.episode_id == 3) {
      if (this.puzzleDetail.id == 1) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 2) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 3) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 4) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 5) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 6) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 7) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 8) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 9) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 10) {
        this.showOnClickFail();
      }
    }

    if (this.level == 1 && this.episode_id == 4) {
      if (this.puzzleDetail.id == 1) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 2) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 3) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 4) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 5) {
        this.showOnClickFail();
      } else if (this.puzzleDetail.id == 6) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 7) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 8) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 9) {
        this.showOnClickSuccess();
      } else if (this.puzzleDetail.id == 10) {
        this.showOnClickSuccess();
      }
    }
  }

  onDrop(event: any) {
    if (this.level == 2 && this.episode_id == 1) {
      if (this.puzzleDetail.id == 1) {
        if (this.arrFen.length == 2) {
          if (event.piece === 'wR' && event.target === 'e6') {
            this.arrFen.push(event.board.fen());

            this.basePuzzleCompoment.move('d8-d7', event);
            this.player_status_message = this.message_success[1];
          } else {
            this.showFailMessage();
            // console.log('return1');
          }
        }

        if (this.arrFen.length == 1) {
          if (event.piece === 'wB' && event.target === 'd5') {
            this.arrFen.push(event.board.fen());
            this.basePuzzleCompoment.move('d8-d7', event);
            this.showSuccessMessage();
          } else {
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
          } else {
            this.showFailMessage();
            // console.log('return2');
          }
        }

        if (this.arrFen.length == 2) {
          if (event.piece === 'wQ' && event.target === 'c3') {
            this.arrFen.push(event.board.fen());

            this.basePuzzleCompoment.move('h2-g2', event);
            this.showSuccessMessage();
          } else {
            this.showFailMessage();
            // console.log('return1');
          }
        }

        if (this.arrFen.length == 1) {
          if (event.piece === 'wN' && event.target === 'f5') {
            this.arrFen.push(event.board.fen());
            this.basePuzzleCompoment.move('e7-c6', event);
            this.showSuccessMessage();
          } else {
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
          } else {
            this.showFailMessage();
            // console.log('return1');
          }
        }

        if (this.arrFen.length == 1) {
          if (event.piece === 'bP' && event.target === 'b3') {
            this.arrFen.push(event.board.fen());
            this.basePuzzleCompoment.move('a2-b3', event);
            this.showSuccessMessage();
          } else {
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
          } else {
            this.showFailMessage();
            // console.log('return3');
          }
        }
        if (this.arrFen.length == 4) {
          if (event.piece === 'wP' && event.target === 'g8') {
            this.arrFen.push(event.board.fen());
            this.basePuzzleCompoment.move('e8-e7', event);
            this.showSuccessMessage();
          } else {
            this.showFailMessage();
            // console.log('return3');
          }
        }
        if (this.arrFen.length == 3) {
          if (event.piece === 'wP' && event.target === 'g7') {
            this.arrFen.push(event.board.fen());

            this.basePuzzleCompoment.move('e7-e6', event);
            this.showSuccessMessage();
          } else {
            this.showFailMessage();
            // console.log('return2');
          }
        }

        if (this.arrFen.length == 2) {
          if (event.piece === 'wN' && event.target === 'd1') {
            this.arrFen.push(event.board.fen());

            this.basePuzzleCompoment.move('a5-d2', event);
            this.showSuccessMessage();
          } else {
            this.showFailMessage();
            // console.log('return1');
          }
        }

        if (this.arrFen.length == 1) {
          if (event.piece === 'wP' && event.target === 'f6') {
            this.arrFen.push(event.board.fen());
            this.basePuzzleCompoment.move('h1-d1', event);
            this.showSuccessMessage();
          } else {
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
  }

  showSuccessMessage() {
    this.player_status_message = this.message_success[1];
    this.sub_text = this.message_fail[2];
  }

  showOnClickSuccess() {
    this.player_status_message = this.message_success[0];
    this.sub_text = this.message_success[1];
  }

  showOnClickFail() {
    this.player_status_message = this.message_fail[0];
    this.sub_text = this.message_fail[1];
  }

  showFailMessage() {
    this.player_status_message = this.message_fail[3];
    this.sub_text = this.message_fail[1];
    this.basePuzzleCompoment.move(this.arrFen[0], null);
  }
}
