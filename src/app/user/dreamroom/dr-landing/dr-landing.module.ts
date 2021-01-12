import { DrLandingRoutingModule } from './dr-landing-routing.module';
import { NgModule               , NO_ERRORS_SCHEMA } from '@angular/core'                                ;
import { CommonModule                              } from '@angular/common'                              ;
import { Routes                 , RouterModule     } from '@angular/router'                              ;
import { CourseDetailComponent                     } from './course-detail/course-detail.component'      ;
import { StudyMaterialComponent                    } from './study-material/study-material.component'    ;
import { AppMaterialModule } from '../../../app-material-module';
import { AppBootstrapModule } from '../../../app-bootstrap.module';
import { DrLandingComponent } from './dr-landing.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    AppBootstrapModule,
    DrLandingRoutingModule
  ],
  declarations: [
    DrLandingComponent,
    CourseDetailComponent,
    StudyMaterialComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DrLandingModule {
}
