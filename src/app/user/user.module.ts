import { NgModule              , NO_ERRORS_SCHEMA } from '@angular/core'                            ;
import { CommonModule                             } from '@angular/common'                          ;
import { ReactiveFormsModule                      } from '@angular/forms'                           ;
import { UserRoutingModule                        } from './user-routing.module'                    ;
import { AppMaterialModule                        } from '../app-material-module'                   ;
import { AppCommonModule                          } from './../app-common/app-common.module'        ;
import { AppBootstrapModule                       } from '../app-bootstrap.module'                  ;
import { UserContainerComponent                   } from './user-container/user-container.component';
import { DreamroomDataService                     } from './dreamroom/dreamroom-data.service'       ;
import { VideoViewerComponent                     } from './video-viewer/video-viewer.component'    ;
import { VideoViewerService                       } from './video-viewer/video-viewer.service'      ;
import { ProductRoomModule                        } from './product-room/product-room.module'       ;
import { StarroomDataService                      } from './star-room/star-room-data.service'       ;

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AppBootstrapModule,
    UserRoutingModule,
    AppCommonModule,
    ProductRoomModule
  ],
  declarations: [
    UserContainerComponent,
    VideoViewerComponent
  ],
  exports: [],
  providers: [
    DreamroomDataService,
    VideoViewerService,
    StarroomDataService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UserModule {}
