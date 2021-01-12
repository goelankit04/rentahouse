import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessModule } from './chess/chess.module';
import { ChessComponent } from './chess/chess.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { EmailVerificationComponent } from './auth/email-verification/email-verification.component';
import { VideoDemoComponent } from './video-demo/video-demo.component';
import { TwitterCallbackComponent } from './auth/twitter-callback/twitter-callback.component';
// import {ChangeCurentPasswordComponent} from './auth/change'

import { AuthGuard } from './auth/auth.guard';
import { PaymentVerificationComponent } from './payment/payment-verification/payment-verification.component';
import { TypeformResponseComponent } from './typeform-response/typeform-response.component';
import { ProductHighlightComponent } from './product-highlight/product-highlight/product-highlight.component';
import { routerDeactivateGuard } from './router-deactivate.guard';

const routes: Routes = [
  {
    path: 'product-highlight/:product_type/:product_id',
    component: ProductHighlightComponent,
    // canDeactivate:[routerDeactivateGuard]
    // path: 'product-highlight',
    // loadChildren: './product-highlight-2/product-highlight.module#ProductHighlightModule',
  },
  {
    path: '',
    component: ChessComponent,
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule),
  },
  {
    path: 'product-catalog',
    loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule),
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule),
  },
  {
    path: 'reset/forgot/password/:id',
    component: ResetPasswordComponent,
  },
  {
    path: 'verify/user/email/:id',
    component: EmailVerificationComponent,
  },
  {
    path: 'demo/video',
    component: VideoDemoComponent,
  },
  {
    path: 'twitter/authentication/callback',
    component: TwitterCallbackComponent,
  },
  {
    path: 'video-page',
    loadChildren: () => import('./video-player/video-player.module').then(m => m.VideoPlayerModule),
  },
  {
    path: 'cricket',
    loadChildren: () => import('./pages/cricket/cricket.module').then(m => m.CricketModule),
  },
  {
    path: 'chess',
    loadChildren: () => import('./pages/chess/chess.module').then(m => m.ChessModule),
  },
  {
    path:
      'product-purchase/:userId/:orderId/:orderDetailId/:paymentVerificationUuid/:ccForMail/:amount',
    component: PaymentVerificationComponent,
  },
  {
    path: 'sales-promotions',
    component: TypeformResponseComponent,
  },
];

@NgModule({
  imports: [ChessModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
