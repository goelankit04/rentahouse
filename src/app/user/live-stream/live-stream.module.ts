import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveStreamComponent } from './live-stream.component';
import { Routes, RouterModule } from '@angular/router';
import { AppCommonModule } from '../../app-common/app-common.module';

const routes: Routes = [
  {
    path: '',
    component: LiveStreamComponent
  }
];

@NgModule({
  declarations: [
    LiveStreamComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LiveStreamModule { }
