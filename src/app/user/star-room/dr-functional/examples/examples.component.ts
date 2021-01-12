import { MenuNavListService } from "../../../user-container/menu-nav-list.service";
import { ExamplesService } from "./examples.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../../../auth/auth.service";
import { AfterViewInit, HostBinding } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { PlatformLocation, Location } from "@angular/common";
import { StarroomDataService } from "../../star-room-data.service";
import { BreadCrumbService } from "../../../../auth/breadcrumb.service";
@Component({
  selector: "app-examples",
  templateUrl: "./examples.component.html",
})
export class ExamplesComponent implements OnInit {
  @HostBinding("class") ExamplesComponentClass = "app-examples";

  currentPuzzle: number;
  matSelectPuzzle: string;
  puzzleReceived = true;
  productId: number;
  episode_id: any;
  puzzles = [];
  puzzleDetail: any;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _routes: ActivatedRoute,
    private _exampleService: ExamplesService,
    private _location: Location,
    private _dreamroomService: StarroomDataService,
    private _breadCrumb: BreadCrumbService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this._breadCrumb.exampleBreadCrumb(13);
    this._routes.params.subscribe(params => {
      // now get puzzles based on level and episode id
      const level: any = params.level;
      const episode_id: any = params.episode_id;
      this.productId = parseInt(params.productId);
      this.episode_id = episode_id;
      this._location.subscribe(data => {
        if (
          data.url ===
          `/user/star-room/dr-functionality/example/${
          params.productId
          }/${level}/${episode_id}`
        ) {
          this._location.back();
        }
      });

      if (parseInt(level) === 13 || parseInt(level) === 3) {
        this._authService
          .getPuzzleList({
            level: 13,
            episode_id: episode_id,
            product_id: this.productId,
            puzzle_type: 0,
            productType: Number(localStorage.getItem('productType')),
            userId: Number(localStorage.getItem('id'))
          })
          .subscribe(
            res => {
              if (res.data.list.count > 0) {
                this.puzzleReceived = true;
                this.puzzles = res.data.list.rows;
                this.currentPuzzle = this.puzzles[0].id;
                this.matSelectPuzzle = "Example " + this.puzzles[0].id;
                this._router.navigateByUrl(
                  `user/star-room/dr-functionality/example/${
                  params.productId
                  }/${level}/${episode_id}/example-study/${this.currentPuzzle}`
                );
              } else {
                this.puzzleReceived = false;
              }
            },
            err => {
              this.puzzleReceived = false;
              // handle error here
            }
          );
      } else if (parseInt(level) === 13) {
        if (episode_id < 6) {
          let data = {
            episode_id: episode_id,
            is_quiz: false,
            level: 13,
            product_id: this.productId,
            puzzle_id: this.currentPuzzle,
            productType: Number(localStorage.getItem('productType')),
            userId: Number(localStorage.getItem('id'))
          };
          // console.log(data, "DATA");
          this.puzzleReceived = true;
          this._authService.getPuzzleById(data).subscribe((res: any) => {
            this.puzzles = res;
          });
          this.currentPuzzle = this.puzzles[0].id;
          this.matSelectPuzzle = "Example " + this.puzzles[0].id;

          this._router.navigateByUrl(
            `user/star-room/dr-functionality/example/${
            params.productId
            }/${level}/${episode_id}/example-study/${this.currentPuzzle}`
          );
        } else {
          this._authService
            .getPuzzleList({
              level: 13,
              episode_id: episode_id,
              product_id: this.productId,
            })
            .subscribe(
              res => {
                if (res.data.list.count > 0) {
                  this.puzzleReceived = true;
                  this.puzzles = res.data.list.rows;
                  this.currentPuzzle = this.puzzles[0].id;
                  this.matSelectPuzzle = "Example " + this.puzzles[0].id;
                  this._router.navigateByUrl(
                    `user/star-room/dr-functionality/example/${
                    params.productId
                    }/${level}/${episode_id}/example-study/${
                    this.currentPuzzle
                    }`
                  );
                } else {
                  this.puzzleReceived = false;
                }
              },
              err => {
                this.puzzleReceived = false;
                // handle error here
              }
            );
        }
      }
    });
  }

  mobileVersion() {
    return window.innerWidth < 800;
  }

  playPuzzle(data: any) {
    let datas = {
      episode_id: this.episode_id,
      is_quiz: false,
      level: 13,
      product_id: this.productId,
      puzzle_id: data.id,
    };
    this._authService.getPuzzleById(datas).subscribe((res: any) => {
      // this.puzzles = res.data;
      this.puzzleReceived = true;
      this.puzzleDetail = res.data;
      // console.log("DATA", res.data);
    });

    this.currentPuzzle = data.id;
    this.matSelectPuzzle = "Example " + data.id;
    this._routes.params.subscribe((params: any) => {
      if (parseInt(params.level) === 2 || parseInt(params.level) === 3) {
        this._router.navigateByUrl(
          `user/star-room/dr-functionality/example/${params.productId}/${
          params.level
          }/${params.episode_id}/example-study/${data.id}`
        );
      } else if (parseInt(params.level) === 13) {
        if (params.episode_id < 6) {
          this._router.navigateByUrl(
            `user/star-room/dr-functionality/example/${params.productId}/${
            params.level
            }/${params.episode_id}/example-study/${data.id}`
          );
        } else {
          this._authService
            .getPuzzleList({
              level: 13,
              episode_id: params.episode_id,
              product_id: this.productId,
            })
            .subscribe(
              res => {
                if (res.data.list.count > 0) {
                  this._router.navigateByUrl(
                    `user/star-room/dr-functionality/example/${
                    params.productId
                    }/${params.level}/${params.episode_id}/example-study/${
                    data.id
                    }`
                  );
                } else {
                  this.puzzleReceived = false;
                }
              },
              err => {
                this.puzzleReceived = false;
                // handle error here
              }
            );
        }
      }
    });
  }
}
