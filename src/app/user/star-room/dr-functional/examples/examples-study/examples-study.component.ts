import { AuthService } from "../../../../../auth/auth.service";
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";

import {
  Component,
  OnInit,
  HostBinding,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import { Router } from "@angular/router";
import { BreadCrumbService } from "../../../../../auth/breadcrumb.service";
declare var pgnView;

@Component({
  selector: "app-examples-study",
  templateUrl: "./examples-study.component.html",
  styleUrls: ["./examples-study.component.scss"]
})
export class ExamplesStudyComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding("class") ExamplesStudyComponentClass = "app-examples-study";

  isSolutionActive = false;
  heading: string;
  detail: string;
  isLoading: boolean;
  productId: number;

  pgn =
    "{***} 27. Bxf5+ g6 (27... Kh8 28. Qe8+) 28. Qf7+ $1 Kh6 (28... Kh8 29. Bxg6 $1 (29. Be6 $1 Qd8 30. Kxf1 $18) 29... Qh6 30. Kxf1 $18) 29. Bd2 $1 (29. Qg8 $4 gxf5 $19) (29. Bxg6 $1 Qxg6 30. Bd2+ $1 Bf4 31. Bxf4+ Nxf4 32. Qxf4+ $18) 29... Bf4 (29... Ne3 30. Bxg6 $18) 30. Qf8+ Kh7 31. Be6 $1 $18 1-0";

  cfg: any;
  board: any;
  level: number;
  episode_id: number;
  puzzleId: number;
  pgnFile: any;

  fileUrl;
  constructor(
    private _routes: ActivatedRoute,
    private _authService: AuthService,
    public router: Router,
    public breadcrum: BreadCrumbService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  async ngAfterViewInit() {
    await this.loadScript("assets/pgn-viewer/js/pgnvjs.js");

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
            product_id: this.productId,
            is_quiz: false,
            productType: Number(localStorage.getItem("productType")),
            userId: Number(localStorage.getItem("id"))
          })
          .subscribe((res: any) => {
            this.isSolutionActive = true;
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
            this.heading = res.data.puzzle.heading;
            this.detail = res.data.puzzle.detail;
            // set chessboard and its data now
            this.cfg = {
              // position: '8/6pk/p1pbQ3/1p1n1pq1/3P3p/2P2PP1/PPB4P/4BbK1 w - - 0 27',
              position: `${res.data.puzzle.fen}`,
              pgn: `${res.data.puzzle.pgn}`,
              // pgn: this.pgn,
              locale: "en",
              pieceStyle: "merida"
            };
            // console.log(this.cfg, "cfg");

            this.onResize();

            const board = pgnView("board", this.cfg);

            // loader stopped
            this.isLoading = false;
          });
      });
    });
    // console.log(this.level, "level")
    // this.breadcrum.levelSelectorBreadcrumb(this.level);
    //example
    this.breadcrum.exampleBreadCrumb(1);
    // console.log(this.router.url, "url");
    // console.log(this.episode_id, "epsode id")
    // this.breadcrum.episodeBreadCrumb(this.episode_id);
  }

  ngOnDestroy(): void {}

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement("script");
      scriptElement.src = scriptUrl;
      scriptElement.id = "example_pgn_viewer";
      scriptElement.type = "text/javascript";
      scriptElement.onload = resolve;
      scriptElement.onerror = reject;
      document.body.appendChild(scriptElement);
    });
  }

  onResize() {
    if (window.innerWidth > 1100) {
      this.cfg.boardSize = "500px";
    } else if (window.innerWidth > 800) {
      this.cfg.boardSize = "400px";
    } else if (window.innerWidth > 400) {
      this.cfg.boardSize = "300px";
    } else if (window.innerWidth > 350) {
      this.cfg.boardSize = "250px";
    } else if (window.innerWidth > 300) {
      this.cfg.boardSize = "220px";
    } else {
      this.cfg.boardSize = "200px";
    }
  }

  showSolution() {
    this.isSolutionActive = false;
    document.getElementById("boardMoves").style.display = "block";
    document.getElementById("boardButton").style.display = "block";
  }
}
