import { NgModule              , NO_ERRORS_SCHEMA } from '@angular/core'                            ;
import { CommonModule                             } from '@angular/common'                          ;
import { DashboardRoutingModule                   } from './dashboard-routing.module'               ;
import { UserDashboardComponent                   } from './user-dashboard/user-dashboard.component';
import { AppMaterialModule                        } from '../../app-material-module'                ;
import { AppBootstrapModule                       } from '../../app-bootstrap.module'               ;
import { AppCommonModule                          } from '../../app-common/app-common.module'       ;
import { ProfileModule                            } from '../profile/profile.module'                ;

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    AppBootstrapModule,
    DashboardRoutingModule,
    AppCommonModule,
    ProfileModule
  ],
  declarations: [
    UserDashboardComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: []
})
export class DashboardModule {}
