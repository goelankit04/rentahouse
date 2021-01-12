import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-payment-verification',
  templateUrl: './payment-verification.component.html'
})
export class PaymentVerificationComponent implements OnInit {
  @HostBinding('class') paymentVerificationClass = 'app-payment-verification';

  showErrorMessage = false;

  paymentQuery: any = {};

  constructor(
    private _route: ActivatedRoute,
    private _authService: AuthService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this._route.queryParams.subscribe((queryParams) => {
        this.paymentQuery = { ...params, ...queryParams };
        this._authService.paymentVerificationStep(this.paymentQuery).subscribe(
          (purchaseRes) => {
            // and navigate to success or failed page - https://www.nurtr.com/payment/sucess or cancel/orderId and get the product and order detail description
            if (purchaseRes.data.payment_status === true) {
              this._router.navigateByUrl(`/payment/status/${this.paymentQuery.orderId}/${this.paymentQuery.paymentVerificationUuid}`);
            } else {
              this._router.navigateByUrl(`/payment/status/${this.paymentQuery.orderId}/${this.paymentQuery.paymentVerificationUuid}`);
              this.showErrorMessage = true;
            }
          },
          (err: HttpErrorResponse) => {
            this._router.navigateByUrl(`/payment/status/${this.paymentQuery.orderId}/${this.paymentQuery.paymentVerificationUuid}`);
            this.showErrorMessage = true;
          });
      });
    });
  }
}
