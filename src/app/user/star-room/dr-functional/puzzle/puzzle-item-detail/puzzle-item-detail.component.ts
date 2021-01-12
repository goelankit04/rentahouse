import { Component, HostBinding, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../../../../../auth/auth.service";
import { BreadCrumbService } from "../../../../../auth/breadcrumb.service";
declare var pgnView;

@Component({
  selector: "app-puzzle-item-detail",
  templateUrl: "./puzzle-item-detail.component.html",
})
export class PuzzleItemDetailComponent implements OnInit {
  @HostBinding("class") PuzzleComponentClass = "app-puzzle-item-detail";

  isLoading: boolean;

  pgn =
    "{***} 27. Bxf5+ g6 (27... Kh8 28. Qe8+) 28. Qf7+ $1 Kh6 (28... Kh8 29. Bxg6 $1 (29. Be6 $1 Qd8 30. Kxf1 $18) 29... Qh6 30. Kxf1 $18) 29. Bd2 $1 (29. Qg8 $4 gxf5 $19) (29. Bxg6 $1 Qxg6 30. Bd2+ $1 Bf4 31. Bxf4+ Nxf4 32. Qxf4+ $18) 29... Bf4 (29... Ne3 30. Bxg6 $18) 30. Qf8+ Kh7 31. Be6 $1 $18 1-0";

  cfg: any;

  board: any;

  level: number;
  episode_id: number;
  puzzleId: number;
  productId: number;

  constructor(
    private _routes: ActivatedRoute,
    private _authService: AuthService,
    public breadCrum: BreadCrumbService
  ) { }

  ngOnInit() {
    this._routes.parent.params.subscribe(params => {
      this.level = params.level;
      this.episode_id = params.episode_id;
      this.productId = params.productId;

      this._routes.params.subscribe(localParams => {
        // loader started
        this.isLoading = true;

        this.puzzleId = localParams.puzzleId;
        // now load the puzzle data based on server data
        this._authService
          .getPuzzleById({
            level: this.level,
            episode_id: this.episode_id,
            puzzle_id: this.puzzleId,
            productId: this.productId,
          })
          .subscribe(res => {
            // set chessboard and its data now
            this.cfg = {
              // position: '8/6pk/p1pbQ3/1p1n1pq1/3P3p/2P2PP1/PPB4P/4BbK1 w - - 0 27',
              position: `${res.data.puzzle.fen}`,
              pgn: `${res.data.puzzle.pgn}`,
              // pgn: this.pgn,
              locale: "en",
              pieceStyle: "merida",
            };

            this.onResize();

            const board = pgnView("board", this.cfg);

            // loader stopped
            this.isLoading = false;
          });
      });
    });
    // console.log("reds")
    this.breadCrum.levelSelectorBreadcrumb(1);
    this.breadCrum.puzzleBreadCrumb(1);
    this.breadCrum.episodeBreadCrumb(this.episode_id);
  }

  onResize() {
    if (window.innerWidth > 1100) {
      this.cfg.boardSize = "500px";
    } else if (window.innerWidth < 1100 && window.innerWidth > 800) {
      this.cfg.boardSize = "400px";
    } else if (window.innerWidth < 400) {
      this.cfg.boardSize = "300px";
    } else if (window.innerWidth < 350) {
      this.cfg.boardSize = "250px";
    } else if (window.innerWidth < 300) {
      this.cfg.boardSize = "150px";
    }
  }
}
