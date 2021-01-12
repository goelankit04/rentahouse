import { DrFunctionalityComponent                        } from './dr-functionality.component'          ;
import { NgModule                     , NO_ERRORS_SCHEMA } from '@angular/core'                         ;
import { CommonModule                                    } from '@angular/common'                       ;
import { AppMaterialModule                               } from '../../../app-material-module'          ;
import { AppBootstrapModule                              } from '../../../app-bootstrap.module'         ;
import { DrFunctionalityRoutingModule                    } from './dr-functionality-routing.module'     ;
import { VideoDetailComponent                            } from './video-detail/video-detail.component' ;
import { AppCommonModule                                 } from '../../../app-common/app-common.module' ;

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    AppMaterialModule,
    AppBootstrapModule,
    DrFunctionalityRoutingModule
  ],
  declarations: [
    DrFunctionalityComponent,
    VideoDetailComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [],
  entryComponents: [
 ]
})
export class DrFunctionalityModule {
}
