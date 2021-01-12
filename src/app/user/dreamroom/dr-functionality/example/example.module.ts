import { ExampleService } from './example.service';
import { BeginnerExampleComponent } from './beginner-example/beginner-example.component';
import { PuzzleItemDetailComponent } from './../puzzle/puzzle-item-detail/puzzle-item-detail.component';
import { ExampleComponent } from './example.component';
import { ExampleRoutingModule                   } from './example-routing.module'                 ;
import { AppBootstrapModule                     } from './../../../../app-bootstrap.module'       ;
import { AppMaterialModule                      } from './../../../../app-material-module'        ;
import { NgModule            , NO_ERRORS_SCHEMA } from '@angular/core'                            ;
import { CommonModule                           } from '@angular/common'                          ;
import { AppCommonModule                        } from '../../../../app-common/app-common.module';
import { ExampleStudyComponent } from './example-study/example-study.component';
import { BaseExampleComponent } from './base-example/base-example.component' ;

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    AppMaterialModule,
    AppBootstrapModule,
    ExampleRoutingModule
  ],
  declarations: [
    ExampleComponent,
    ExampleStudyComponent,
    BeginnerExampleComponent,
    BaseExampleComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    ExampleService
  ]
})
export class ExampleModule {
}
