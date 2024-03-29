import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeListComponent } from './episode-list.component';


const routes: Routes = [
  {
    path: ':slug/:level',
    component: EpisodeListComponent
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
export class EpisodeListRoutingModule {

}
