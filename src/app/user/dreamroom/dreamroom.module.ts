import { FlipBookUrlComponent                        } from './dr-functionality/flip-book-url/flip-book-url.component' ;
import { NgModule                 , NO_ERRORS_SCHEMA } from '@angular/core'                                            ;
import { CommonModule                                } from '@angular/common'                                          ;
import { AppMaterialModule                           } from '../../app-material-module'                                ;
import { AppBootstrapModule                          } from '../../app-bootstrap.module'                               ;
import { DreamroomComponent                          } from './dreamroom.component'                                    ;
import { Routes                   , RouterModule     } from '@angular/router'                                          ;
import { DreamroomRoutingModule                      } from './dreamroom-routing.module'                               ;
import { DrLandingComponent                          } from './dr-landing/dr-landing.component'                        ;
import { DrFunctionalityComponent                    } from './dr-functionality/dr-functionality.component'            ;
import { AppCommonModule                             } from '../../app-common/app-common.module'                       ;
import { DrLevelSelectorComponent                    } from './dr-level-selector/dr-level-selector.component'          ;

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    AppMaterialModule,
    AppBootstrapModule,
    DreamroomRoutingModule
  ],
  declarations: [
    DreamroomComponent,
    DrLevelSelectorComponent,
    FlipBookUrlComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [
    FlipBookUrlComponent
  ]
})
export class DreamroomModule {
}
