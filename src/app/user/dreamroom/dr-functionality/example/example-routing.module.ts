import { BeginnerExampleComponent          } from './beginner-example/beginner-example.component' ;
import { ExampleStudyComponent             } from './example-study/example-study.component'       ;
import { ExampleComponent                  } from './example.component'                           ;
import { NgModule                          } from '@angular/core'                                 ;
import { RouterModule             , Routes } from '@angular/router'                               ;

const routes: Routes = [
  {
    path: ':productId/:level/:episode_id',
    component: ExampleComponent,
    children: [
      {
        path: 'example-study/:puzzleId',
        component: ExampleStudyComponent
      },
      {
        path: 'beginner/example-study/:puzzleId',
        component: BeginnerExampleComponent
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
export class ExampleRoutingModule {

}
