import { NgModule                        } from '@angular/core'                             ;
import { RouterModule           , Routes } from '@angular/router'                           ;
import { CourseDetailComponent           } from './course-detail/course-detail.component'   ;
import { StudyMaterialComponent          } from './study-material/study-material.component' ;
import { DrLandingComponent } from './dr-landing.component';

const routes: Routes = [
  {
    path: '',
    component: DrLandingComponent,
    children: [
      {
        path: 'episode-list',
        loadChildren: () => import('./episode-list/episode-list.module').then(m => m.EpisodeListModule)
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
export class DrLandingRoutingModule  {
}
