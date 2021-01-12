import { NgModule                        } from '@angular/core'                             ;
import { RouterModule           , Routes } from '@angular/router'                           ;
import { DreamroomComponent              } from './dreamroom.component'                     ;
import { DrLandingComponent } from './dr-landing/dr-landing.component';
import { DrFunctionalityComponent } from './dr-functionality/dr-functionality.component';
import { DrLevelSelectorComponent } from './dr-level-selector/dr-level-selector.component';

const routes: Routes = [
  {
    path: '',
    component: DreamroomComponent,
    children: [
      {
        path: 'dr-level-selector',
        component: DrLevelSelectorComponent
        // loadChildren: './dr-level-selector/dr-level-selector.module#DrLevelSelectorModule'
      },
      {
        path: 'dr-landing',
        loadChildren: () => import('./dr-landing/dr-landing.module').then(m => m.DrLandingModule)
      },
      {
        path: 'dr-functionality',
        loadChildren: () => import('./dr-functionality/dr-functionality.module').then(m => m.DrFunctionalityModule)
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
export class DreamroomRoutingModule {

}
