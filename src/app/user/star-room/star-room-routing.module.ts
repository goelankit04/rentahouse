import { NgModule                        } from '@angular/core'                             ;
import { RouterModule           , Routes } from '@angular/router'                           ;
import { StarroomComponent              } from './star-room.component'                     ;
import { DrLevelSelectorComponent } from './dr-level-selector/dr-level-selector.component';

const routes: Routes = [
  {
    path: '',
    component: StarroomComponent,
    children: [
      {
        path: '',
        component: DrLevelSelectorComponent
      },
      {
        path: 'star-landing',
        loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
      },
      {
        path: 'dr-functionality',
        loadChildren: () => import('./dr-functional/dr-functional.module').then(m => m.DrFunctionalModule)
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
export class StarroomRoutingModule {

}
