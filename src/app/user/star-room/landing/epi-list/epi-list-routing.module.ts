import { NgModule                        } from '@angular/core'                                            ;
import { RouterModule           , Routes } from '@angular/router'                                          ;
import { EpiListComponent } from './epi-list.component';

const routes: Routes = [
  {
    path: ':slug/:level',
    component: EpiListComponent
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
export class EpiListRoutingModule {

}
