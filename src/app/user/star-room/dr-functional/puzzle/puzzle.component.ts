import { ActivatedRoute, Router }         from '@angular/router';
import { Component, OnInit, HostBinding } from '@angular/core';

import { AuthService }   from '../../../../auth/auth.service';
import { PuzzleService } from './puzzle.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html'
})
export class PuzzleComponent implements OnInit {
  @HostBinding('class') PuzzleComponentClass = 'app-puzzle';

  currentPuzzle: number;
  puzzleReceived = true;
  matSelectPuzzle: string;
  productId: number;
  pType:any;
  puzzles = [];

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _routes: ActivatedRoute,
    private _puzzleService: PuzzleService,
    private _location: Location
  ) {
  }

  ngOnInit() {

    window.scroll(0, 0);
    this.pType=localStorage.getItem('productType')
    this._routes.params.subscribe(
      params => {
        // now get puzzles based on level and episode id
        const level: any = params.level;
        const episode_id: any = params.episode_id;
        this.productId = parseInt(params.productId);

        // if (parseInt(level) === 13) {

          this._authService.getPuzzleList({
            level: level,
            episode_id: Number(episode_id),
            product_id:Number(this.productId),
            puzzle_type: 1,
            productType: Number(localStorage.getItem('productType')),
            userId: Number(localStorage.getItem('id'))
          }).subscribe(
            res => {
              if (res.data.list.count > 0) {
                this.puzzleReceived = true;
                this.puzzles = res.data.list.rows;
                this.currentPuzzle = this.puzzles[0].id;
                if(this.pType==16){
                  this._router.navigateByUrl(`user/star-room/dr-functionality/puzzle/${this.productId}/${level}/${episode_id}/board/open-puzzle/${this.currentPuzzle}`);

                }else{
                  this._router.navigateByUrl(`user/star-room/dr-functionality/puzzle/${this.productId}/${level}/${episode_id}/board/puzzle-play/${this.currentPuzzle}`);
              }
            } else {
                this.puzzleReceived = false;
              }
            },
            (err) => {
              this.puzzleReceived = false;
              // handle error here
            }
          );
        // }
      });
  }

  mobileVersion() {
    return window.innerWidth < 800;
  }

  playPuzzle(data: any) {
    this.currentPuzzle = data.id;
    this.matSelectPuzzle = 'Puzzle ' + this.puzzles[0].id;
    this._routes.params.subscribe((params: any) => {
      if (parseInt(params.level) === 2 || parseInt(params.level) === 3) {
        this._router.navigateByUrl(`user/dreamroom/dr-functionality/puzzle/${this.productId}/${params.level}/${params.episode_id}/board/puzzle-play/${data.id}`);
      }else if(this.pType==16){
        this._router.navigateByUrl(`user/star-room/dr-functionality/puzzle/${this.productId}/${params.level}/${params.episode_id}/board/open-puzzle/${data.id}`);

      }else if (parseInt(params.level) === 13) {
        this._router.navigateByUrl(`user/star-room/dr-functionality/puzzle/${this.productId}/${params.level}/${params.episode_id}/board/puzzle-play/${data.id}`);
      }
      // else if (parseInt(params.level) === 3) {
      //   this._router.navigateByUrl(`user/dreamroom/dr-functionality/puzzle/${this.productId}/${params.level}/${params.episode_id}/puzzle-play/${data.id}`);
      // }
      else if (parseInt(params.level) === 1) {
        // this._router.navigateByUrl(`user/dreamroom/dr-functionality/puzzle/${params.level}/${params.episode_id}/beginner/puzzle-play/${data.id}`);
        if (params.episode_id < 7) {
          this._router.navigateByUrl(`user/dreamroom/dr-functionality/puzzle/${this.productId}/${params.level}/${params.episode_id}/beginner/puzzle-play/${this.currentPuzzle}`);
        } else {
          this._router.navigateByUrl(`user/dreamroom/dr-functionality/puzzle/${this.productId}/${params.level}/${params.episode_id}/board/puzzle-play/${this.currentPuzzle}`);
        }
      }
    });
  }
}
