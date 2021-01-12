import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPlayerRoutingModule } from './video-player-routing.module';
import { PlayerBitmovinComponent } from './player-bitmovin/player-bitmovin.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { AppBootstrapModule } from '../app-bootstrap.module';
import { AppMaterialModule } from '../app-material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'angular-bootstrap-md';
import { PlayerWistiaComponent } from './player-wistia/player-wistia.component';
import { PlayerShakaComponent } from './player-shaka/player-shaka.component';
import { PlayerVideoJsComponent } from './player-video-js/player-video-js.component';

@NgModule({
  declarations: [
    PlayerBitmovinComponent,
    VideoPageComponent,
    PlayerWistiaComponent,
    PlayerShakaComponent,
    PlayerVideoJsComponent,
  ],
  imports: [
    CommonModule,
    VideoPlayerRoutingModule,
    AppCommonModule,
    AppMaterialModule,
    AppBootstrapModule,
    ReactiveFormsModule,
    BreadcrumbModule
  ],
  exports: [
    VideoPageComponent,
    PlayerShakaComponent
  ]
})
export class VideoPlayerModule { }
