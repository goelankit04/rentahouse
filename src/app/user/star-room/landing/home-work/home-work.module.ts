import { NgModule                        } from '@angular/core'                       ;
import { CommonModule                    } from '@angular/common'                     ;
import { HomeWorkComponent               } from './home-work.component'               ;
import { Routes           , RouterModule } from '@angular/router'                     ;
import { AppCommonModule                 } from '../../../../app-common/app-common.module';

const routes: Routes = [
  {
    path: ':slug/:level',
    component: HomeWorkComponent
  }
];

@NgModule({
  declarations: [HomeWorkComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeWorkModule { }
