import { AppCommonModule      } from './../app-common/app-common.module' ;
import { NgModule             } from '@angular/core'                     ;
import { CommonModule         } from '@angular/common'                   ;
import { ReactiveFormsModule  } from '@angular/forms'                    ;
import { PaymentRoutingModule } from './payment-routing.module'          ;
import { CheckoutComponent    } from './checkout/checkout.component'     ;
import { PaymentService       } from './payment.service'                 ;
import { AppMaterialModule    } from '../app-material-module'            ;
import { ItemComponent        } from './checkout/item/item.component'    ;
import { AppBootstrapModule   } from '../app-bootstrap.module'           ;
import { SuccessComponent     } from './success/success.component'       ;
import { FailureComponent     } from './failure/failure.component';
import { DirectPaymentComponent } from './direct-payment/direct-payment.component'       ;
import { ElementaryComponentModule } from '../app-common/elementary-component/elementary-component.module';
import { StatusComponent } from './status/status.component';
import { PaymentVerificationComponent } from './payment-verification/payment-verification.component';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AppBootstrapModule,
    PaymentRoutingModule,
    ElementaryComponentModule
  ],
  declarations: [
    CheckoutComponent,
    ItemComponent,
    SuccessComponent,
    FailureComponent,
    DirectPaymentComponent,
    StatusComponent,
    PaymentVerificationComponent,
  ],
  providers: [
    PaymentService
  ],
  exports: [
    CheckoutComponent,
    ItemComponent,
    PaymentVerificationComponent
  ]
})
export class PaymentModule {
}
