import { DreamroomDataService } from "./../../dreamroom-data.service";
import { MenuNavListService } from "./../../../user-container/menu-nav-list.service";
import { ExampleService } from "./example.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "./../../../../auth/auth.service";
import { AfterViewInit, HostBinding } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { PlatformLocation, Location } from "@angular/common";

@Component({
  selector: "app-example",
  templateUrl: "./example.component.html",
})
export class ExampleComponent implements OnInit {
  @HostBinding("class") ExampleComponentClass = "app-example";

  currentPuzzle: number;
  matSelectPuzzle: string;
  puzzleReceived = true;
  productId: number;

  puzzles = [];

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _routes: ActivatedRoute,
    private _exampleService: ExampleService,
    private _location: Location,
    private _dreamroomService: DreamroomDataService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    this._routes.params.subscribe(params => {
      // now get puzzles based on level and episode id
      const level: any = params.level;
      const episode_id: any = params.episode_id;
      this.productId = parseInt(params.productId);

      this._location.subscribe(data => {
        if (
          data.url ===
          `/user/dreamroom/dr-functionality/example/${
            params.productId
          }/${level}/${episode_id}`
        ) {
          this._location.back();
        }
      });

      if (parseInt(level) === 2 || parseInt(level) === 3) {
        this._authService
          .getPuzzleList({
            level: level,
            episode_id: episode_id,
            product_id: this.productId,
            puzzle_type: 0,
          })
          .subscribe(
            res => {
              if (res.data.list.count > 0) {
                this.puzzleReceived = true;
                this.puzzles = res.data.list.rows;
                this.currentPuzzle = this.puzzles[0].id;
                this.matSelectPuzzle = "Example " + this.puzzles[0].id;
                this._router.navigateByUrl(
                  `user/dreamroom/dr-functionality/example/${
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
      } else if (parseInt(level) === 1) {
        if (episode_id < 6) {
          this.puzzleReceived = true;
          this.puzzles = this._exampleService.getBeginnerExampleList(
            episode_id
          );
          this.currentPuzzle = this.puzzles[0].id;
          this.matSelectPuzzle = "Example " + this.puzzles[0].id;

          this._router.navigateByUrl(
            `user/dreamroom/dr-functionality/example/${
              params.productId
            }/${level}/${episode_id}/beginner/example-study/${
              this.currentPuzzle
            }`
          );
        } else {
          this._authService
            .getPuzzleList({
              level: level,
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
                    `user/dreamroom/dr-functionality/example/${
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
    this.currentPuzzle = data.id;
    this.matSelectPuzzle = "Example " + data.id;
    this._routes.params.subscribe((params: any) => {
      if (parseInt(params.level) === 2 || parseInt(params.level) === 3) {
        this._router.navigateByUrl(
          `user/dreamroom/dr-functionality/example/${params.productId}/${
            params.level
          }/${params.episode_id}/example-study/${data.id}`
        );
      } else if (parseInt(params.level) === 1) {
        if (params.episode_id < 6) {
          this._router.navigateByUrl(
            `user/dreamroom/dr-functionality/example/${params.productId}/${
              params.level
            }/${params.episode_id}/beginner/example-study/${data.id}`
          );
        } else {
          this._authService
            .getPuzzleList({
              level: params.level,
              episode_id: params.episode_id,
              product_id: this.productId,
            })
            .subscribe(
              res => {
                if (res.data.list.count > 0) {
                  this._router.navigateByUrl(
                    `user/dreamroom/dr-functionality/example/${
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
