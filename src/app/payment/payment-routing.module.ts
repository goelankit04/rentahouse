import { DirectPaymentComponent } from './direct-payment/direct-payment.component';
import { FailureComponent } from './failure/failure.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'checkout/:categoryId/:product_type/:product_id',
        component: CheckoutComponent
      },
      {
        path: 'success',
        component: SuccessComponent
      },
      {
        path: 'failure',
        component: FailureComponent
      },
      {
        path: 'direct',
        component: DirectPaymentComponent
      },
      {
        path: 'status/:orderId/:transactionId',
        component: StatusComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule {
}
