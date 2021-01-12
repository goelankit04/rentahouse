import { VideoViewerComponent } from './video-viewer/video-viewer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContainerComponent } from './user-container/user-container.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'dreamroom',
        loadChildren: () => import('./dreamroom/dreamroom.module').then(m => m.DreamroomModule),
      },
      {
        path: 'star-room',
        loadChildren: () => import('./star-room/star-room.module').then(m => m.StarroomModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'wallet',
        loadChildren: () => import('./user-wallet/user-wallet.module').then(m => m.UserWalletModule),
      },
      {
        path: 'live-stream',
        loadChildren: () => import('./live-stream/live-stream.module').then(m => m.LiveStreamModule),
      },
      {
        path: 'order',
        loadChildren: () => import('./user-order/user-order.module').then(m => m.UserOrderModule),
      },
      {
        path: 'notification',
        loadChildren:
          () => import('./user-notification/user-notification.module').then(m => m.UserNotificationModule),
      },
      {
        path: ':product_type_name/video-content',
        loadChildren: () => import('../video-player/video-player.module').then(m => m.VideoPlayerModule),
      },
      {
        path: 'video-viewer/:product_type/:product_id',
        component: VideoViewerComponent,
      },
      {
        path: 'video-viewer/:product_type/:product_id/:session_id',
        component: VideoViewerComponent,
      },
      {
        path: ':productName',
        loadChildren: () => import('./product-room/product-room.module').then(m => m.ProductRoomModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
