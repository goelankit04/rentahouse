import { ExampleService } from "./../example.service";
import { ActivatedRoute } from "@angular/router";
import {
  Component,
  OnInit,
  HostBinding,
  HostListener,
  AfterViewInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { BreadCrumbService } from "../../../../../auth/breadcrumb.service";
import * as $ from "jquery";

@Component({
  selector: "app-beginner-example",
  templateUrl: "./beginner-example.component.html",
})
export class BeginnerExampleComponent implements OnInit, AfterViewInit {
  @HostBinding("class") BeginnerExampleComponentClass = "app-beginner-example";

  boardSize = "450px";
  examples: any;
  puzzles: any;
  chessConfig: any;

  puzzleDetail: any;

  player_status_message: string;
  sub_text: string;

  message_success = ["Solved", "Well done!"];
  message_fail = ["You Failed", "Please try again"];
  level: number;
  episode_id: number;

  constructor(
    private _routes: ActivatedRoute,
    private _exampleService: ExampleService,
    public router: Router,
    public breadcrum: BreadCrumbService
  ) { }

  ngOnInit() {
    // console.log(this.router.url, "url");
    this.breadcrum.levelSelectorBreadcrumb(1);
    this.breadcrum.exampleBreadCrumb(1);
    this.breadcrum.episodeBreadCrumb(1);

    // this.breadcrum.puzzleBreadCrumb(1);
    this._routes.parent.params.subscribe(parentparams => {
      this.level = parentparams.level;
      this.episode_id = parentparams.episode_id;
      // console.log(this.level, this.episode_id, "wwwwwwwwweeeee");

      this._routes.params.subscribe((params: any) => {
        // console.log(parentparams.episode_id);
        this.puzzleDetail = this._exampleService.getExampleListById(
          parentparams.episode_id,
          params.puzzleId
        );
        this.chessConfig = this.puzzleDetail.config;
        // console.log(
        //   "puzzle",
        //   parentparams.episode_id,
        //   params.puzzleId,
        //   this.chessConfig
        // );
        this.removeGreySquares();
        $("#board .square-55d63").removeClass("highlight1-32417");
        this.puzzleexample(parentparams.episode_id, params.puzzleId);
      });
    });

    if (window.innerWidth < 370) {
      this.boardSize = "200px";
    } else if (window.innerWidth < 470) {
      this.boardSize = "300px";
    } else if (window.innerWidth < 1100) {
      this.boardSize = "400px";
    } else {
      this.boardSize = "500px";
    }
  }

  removeHighlightedSquares() {
    $("#board .square-55d63").removeClass("highlight1-32417");
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (window.innerWidth < 370) {
      this.boardSize = "200px";
    } else if (window.innerWidth < 470) {
      this.boardSize = "300px";
    } else if (window.innerWidth < 1100) {
      this.boardSize = "400px";
    } else {
      this.boardSize = "500px";
    }
  }

  highlightRow(square) {
    const row = square[1];
    const column = square[0];
    const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
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
    const squareEl = $("#board .square-" + square);

    // let background = '#a9a9a9';
    let background = "#89f36d";

    if (squareEl.hasClass("black-3c85d") === true) {
      // background = '#696969';
      background = "#598d69";
    }
    squareEl.css("background", background);
  }

  yellowSquare(square) {
    const squareEl = $("#board .square-" + square);

    let background = "#FFFF00";

    if (squareEl.hasClass("black-3c85d") === true) {
      background = "#696969";
    }
    squareEl.css("background", background);
  }

  onMouseOverSquare(event: any) {
    /// this.highlightColumn(event.piece);
  }

  onMouseoutSquare(event: any) {
    // this.removeGreySquares();
  }

  removeGreySquares() {
    $("#board .square-55d63").css("background", "");
  }

  puzzleexample(episodeid, puzzleid) {
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
    } else if (episodeid == 2) {
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
    } else if (episodeid == 3) {
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
    } else if (episodeid == 4) {
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
  }

  clickedYes() {
    // Action on 'Yes'
  }

  clickedNo() {
    // Action on 'No'
  }

  onBoardClick(event: any) {
    const boardClickId = event.target.id;

    event.target.className += " highlight1-32417";

    const square = event.target.dataset.square;

    if (this.level === 1) {
      if (parseInt(this.puzzleDetail.id) === 1) {
        let counter = 0;

        if (
          square === "d4" ||
          square === "e4" ||
          square === "d5" ||
          square === "e5"
        ) {
          $("#board .highlight1-32417").each(function (index, element: any) {
            if (element.dataset.square === "d4") {
              counter = counter + 1;
            }
            if (element.dataset.square === "d5") {
              counter = counter + 1;
            }
            if (element.dataset.square === "e4") {
              counter = counter + 1;
            }
            if (element.dataset.square === "e5") {
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
        if (square === "d6") {
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
        if (square === "b3") {
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
        if (square === "g4") {
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
        if (square === "a8") {
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
        if (square === "f6") {
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
        $("#board .highlight1-32417").each(function (index, element: any) {
          const row = element.dataset.square[1];
          const column = element.dataset.square[0];
          counter = counter + 1;
          if (column === "d") {
            rcounter = rcounter + 1;
          }

          if (column === "e") {
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
        $("#board .highlight1-32417").each(function (index, element: any) {
          const row = element.dataset.square[1];
          const column = element.dataset.square[0];
          counter = counter + 1;
          if (column === "f") {
            rcounter = rcounter + 1;
          }

          if (column === "g") {
            rcounter = rcounter + 1;
          }

          if (column === "h") {
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
        $("#board .highlight1-32417").each(function (index, element: any) {
          const row = element.dataset.square[1];
          const column = element.dataset.square[0];
          counter = counter + 1;
          if (column === "a") {
            rcounter = rcounter + 1;
          }

          if (column === "b") {
            rcounter = rcounter + 1;
          }

          if (column === "c") {
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
        $("#board .highlight1-32417").each(function (index, element: any) {
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

  ngAfterViewInit(): void {
    this.puzzleexample(this.episode_id, this.puzzleDetail.id);
  }
}
