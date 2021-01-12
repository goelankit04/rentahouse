import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoPageComponent } from './video-page/video-page.component';
import { PlayerShakaComponent } from './player-shaka/player-shaka.component';

const routes: Routes = [
  {
    path: ':categoryId/:productType/:productId/:episodeId/:isHomework',
    component: VideoPageComponent,
  },
  {
    path: ':categoryId/:productType/:productId/:isHomework',
    component: VideoPageComponent
  },
  {
    path: 'shaka-player',
    component: PlayerShakaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoPlayerRoutingModule { }
