import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CricketComponent } from './cricket.component';

const routes: Routes = [
  {
    path: '',
    component: CricketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CricketRoutingModule {}
