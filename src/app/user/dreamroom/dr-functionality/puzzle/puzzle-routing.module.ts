import { NgModule }                  from '@angular/core'                             ;
import { RouterModule, Routes }      from '@angular/router'                           ;
import { BeginnerPuzzleComponent }   from './beginner-puzzle/beginner-puzzle.component';
import { DropOffBoardComponent }     from './drop-off-board/drop-off-board.component';
import { PuzzleItemDetailComponent } from './puzzle-item-detail/puzzle-item-detail.component';
import { PuzzleComponent }           from './puzzle.component';

const routes: Routes = [
  {
    path: ':productId/:level/:episode_id',
    component: PuzzleComponent,
    children: [
      // {
      //   path: 'puzzle-play/:puzzleId',
      //   component: PuzzleItemDetailComponent
      // },
      {
        path: 'puzzle-play/:puzzleId',
        component: BeginnerPuzzleComponent
      },
      {
        path: 'beginner/puzzle-play/:puzzleId',
        component: BeginnerPuzzleComponent
      },
      {
        path: 'board/puzzle-play/:puzzleId',
        component: DropOffBoardComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PuzzleRoutingModule {

}
