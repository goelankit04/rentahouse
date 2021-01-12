import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'                                 ;
import { CommonModule }               from '@angular/common'                               ;
import { AppCommonModule }            from '../../../../app-common/app-common.module';
import { PuzzleComponent }            from './puzzle.component';
import { PuzzleItemDetailComponent }  from './puzzle-item-detail/puzzle-item-detail.component';
import { BeginnerPuzzleComponent }    from './beginner-puzzle/beginner-puzzle.component';
import { BasePuzzleComponent }        from './base-puzzle/base-puzzle.component';
import { PuzzleService }              from './puzzle.service';
import { DropOffBoardComponent }      from './drop-off-board/drop-off-board.component';
import { ChessElementComponent }      from './chess-element/chess-element.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { StartPuzzleRoutingModule }   from './star-puzzle-routing.module';
import { AppMaterialModule }          from '../../../../app-material-module';
import { AppBootstrapModule }         from '../../../../app-bootstrap.module';
import { OpenBoardComponent } from './open-board/open-board.component';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    AppMaterialModule,
    AppBootstrapModule,
    StartPuzzleRoutingModule
  ],
  declarations: [
    PuzzleComponent,
    PuzzleItemDetailComponent,
    BeginnerPuzzleComponent,
    BasePuzzleComponent,
    DropOffBoardComponent,
    OpenBoardComponent,
    ChessElementComponent,
    OpenBoardComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    PuzzleService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  entryComponents: [
    ChessElementComponent
  ]
})
export class StarPuzzleModule {
}
