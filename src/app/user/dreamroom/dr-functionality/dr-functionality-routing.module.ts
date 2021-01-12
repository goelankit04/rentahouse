import { ExampleComponent } from './example/example.component';
import { NgModule }             from '@angular/core'                             ;
import { RouterModule, Routes } from '@angular/router'                           ;

import { DrFunctionalityComponent } from './dr-functionality.component';
import { VideoDetailComponent }     from './video-detail/video-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DrFunctionalityComponent,
    children: [
      {
        path: 'puzzle',
        loadChildren: () => import('./puzzle/puzzle.module').then(m => m.PuzzleModule)
      },
      {
        path: 'video/:categoryId/:productType/:productId/:episodeId',
        component: VideoDetailComponent
      },
      {
        path: 'example',
        loadChildren: () => import('./example/example.module').then(m => m.ExampleModule)
      }
    ],
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
export class DrFunctionalityRoutingModule {

}
