import { NgModule                        } from '@angular/core'                             ;
import { RouterModule           , Routes } from '@angular/router'                           ;
import { CourseDetailComponent           } from './course-detail/course-detail.component'   ;
import { StudyMaterialComponent          } from './study-material/study-material.component' ;
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'star-episode',
        loadChildren: () => import('./epi-list/epi-list.module').then(m => m.EpiListModule)
      },
      {
        path: 'star-home-work',
        loadChildren: () => import('./home-work/home-work.module').then(m => m.HomeWorkModule)
      },
      {
        path: 'course-detail/:slug',
        component: CourseDetailComponent
      },
      {
        path: 'study-material/:slug',
        component: StudyMaterialComponent
      },
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
export class LandingRoutingModule  {
}
