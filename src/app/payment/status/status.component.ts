import {
  Component,
  OnInit,
  HostBinding,
  Inject,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { AmplitudeService } from '../../amplitude/amplitude.service';
import { events } from '../../amplitude/events';

interface GTagEvent {
  transaction_id: string;
  affiliation: string;
  value: number;
  currency: string;
  tax: number;
  shipping: number;
  items: any;
}

interface gTagEvents {
  value: string;
  currency: string;
}

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
})
export class StatusComponent implements OnInit, OnDestroy {
  @HostBinding('class') StatusComponentClass = 'app-status';

  producMapping = [
    {
      name: 'Dream Room',
      type: 1,
    },
    {
      name: 'Class Room',
      type: 2,
    },
    {
      name: 'Live Room',
      type: 3,
    },
    {
      name: '121 Room',
      type: 4,
    },
    {
      name: 'Camp Room',
      type: 6,
    },
    {
      name: 'Special Offers',
      type: 7,
    },
    {
      name: 'Event Room',
      type: 11,
    },
    {
      name: 'Star Room',
      type: 13,
    },
  ];

  showText: any;
  productDetail: any;
  isDrr: any;
  showErrorMessage = false;
  isLoading = true;
  verify = false;
  orderStatus: number;
  activeScriptId: any = Math.floor(Math.random() * 1000);
  activeScriptId2: any = Math.floor(Math.random() * 1000);
  activeScriptId3: any = Math.floor(Math.random() * 1000);

  statusText = [
    {
      statusImageUrl: '/assets/payment/group-success.png',
      transactionStatus: 'Your Transaction is successful',
      purchaseText: 'Thank you for purchasing from us!',
      purchaseTagline:
        'An automated payment receipt will be sent to your registered email.',
      endLine: 'For any clarification feel free to reach us',
    },
    {
      statusImageUrl: '/assets/payment/group-fail.png',
      transactionStatus: 'Sorry, your Transaction failed',
      purchaseText: 'Please try back again or contact us for any issues.',
      purchaseTagline: '',
      endLine: 'For any clarification feel free to reach us',
    },
  ];

  constructor(
    private _activateRoute: ActivatedRoute,
    private _authService: AuthService,
    private _route: Router,
    private _amps: AmplitudeService,
    @Inject(DOCUMENT) private doc: any
  ) {}

  ngOnInit() {
    this.getOrderStatus();
  }

  getOrderStatus() {
    this._activateRoute.params.subscribe((param: any) => {
      // console.log(param, "PARAMS")
      this._authService
        .orderStatus({ transaction_id: param.transactionId })
        .subscribe((res: any) => {
          // console.log(res, 'Response');
          this.orderStatus = res.data.transaction.status;

          if (this.orderStatus == 2) {
            this.isLoading = false;
            var i = 0;
            var interval = setInterval(() => {
              i++;
              // console.log(i);
              this.getOrderHistory();
              if (i > 2 && this.orderStatus == 2) {
                // console.log('clearInterval');
                clearInterval(interval);
                this.verify = true;
                // this._route.navigateByUrl('/')
              }
            }, 5000);
          } else {
            this.getOrderHistory();
          }
        });
    });
  }

  getOrderHistory() {
    this._activateRoute.params.subscribe((param: any) => {
      this._authService
        .getOrderHistory({
          orderId: param.orderId,
          transaction_id: param.transactionId,
        })
        .subscribe(
          (res: any) => {
            // console.log(res, 'STATUS');
            this.isLoading = false;
            this.productDetail = res.data.orderDetails[0];
            this.orderStatus = this.productDetail.payment_status;
            this.showText = this.productDetail.payment_status
              ? this.statusText[0]
              : this.statusText[1];
            this.isDrr = this.productDetail.isDrr ? 'YDRR' : 'NonDRR';
            this.showErrorMessage = false;
            if (this.productDetail.payment_status === 1) {
              if (localStorage.getItem('flag') != '1') {
                localStorage.setItem('flag', '1');
                this._amps.revenue(
                  this.productDetail.product_id,
                  this.productDetail.final_price,
                  1
                );
              }
              this._amps.setUserId(res.data.user[0].email.toLowerCase());
              this._amps.setAmountSpent(this.productDetail.final_price);

              //payment confirm
              this._amps.setAmplitudeEvents(events.event_35, {
                product_name: this.productDetail.name,
                duration: this.productDetail.duration,
                author_name: this.productDetail.author_name,
                final_price: this.productDetail.final_price,
                product_id: this.productDetail.product_id,
                order_id: param.orderId,
                transaction_id: param.transactionId,
              });
            }
            // if (environment.production) {
            // if (!this.productDetail.success_page_valid_attempt) {
            if (!this.productDetail.success_page_valid_attempt) {
              const gTagEvent: GTagEvent = {
                // transaction_id: this.activeScriptId, // this is just for testing
                transaction_id: `${
                  this.productDetail.payment_id
                    ? this.productDetail.payment_id
                    : param.orderId
                }`,
                affiliation: 'Nurtr',
                value: this.productDetail.final_price,
                currency: this.productDetail.currency,
                tax: 0,
                shipping: 0,
                items: [
                  {
                    id: `${this.productDetail.id}`,
                    name:
                      (
                        this.productDetail.name +
                        '-' +
                        this.productDetail.duration
                      ).toString() +
                      '-Room ' +
                      this.productDetail.product_type +
                      '-' +
                      this.isDrr,
                    // list_name
                    brand: 'Nurtr',
                    category: this.producMapping.filter(
                      (product) =>
                        product.type === this.productDetail.product_type
                    )[0].name,
                    variant: this.productDetail.isDrr.toString(),
                    // lsit_position
                    quantity: 1,
                    price: this.productDetail.final_price.toString(),
                    value: 0,
                  },
                ],
              };
              this.setGTagManager(gTagEvent);
              this.adConversionCode(gTagEvent);
              this.FacebookConversionCode(gTagEvent);
            }
            // }
          },
          (err: HttpErrorResponse) => {
            // console.log(err, 'ERROR');
            this.isLoading = false;
            this.showErrorMessage = true;
            this.showText = null;
          }
        );
    });
  }

  private setGTagManager(gTagEvent: GTagEvent) {
    const s = this.doc.createElement('script');
    s.type = 'text/javascript';
    s.id = this.activeScriptId;
    s.innerHTML = `gtag('event', 'purchase', ${JSON.stringify(gTagEvent)});`;
    const head = this.doc.getElementsByTagName('head')[0];
    head.appendChild(s);
  }

  private adConversionCode(gTagEvent: GTagEvent) {
    const s = this.doc.createElement('script');
    s.type = 'text/javascript';
    s.id = this.activeScriptId2;
    s.innerHTML = `gtag('event', 'conversion', {
      'send_to': 'AW-739843790/EHocCPSf9KIBEM695OAC',
      'value': ${gTagEvent.value},
      'currency': '${gTagEvent.currency}',
      'transaction_id': '${gTagEvent.transaction_id}'
    });`;
    const head = this.doc.getElementsByTagName('head')[0];
    head.appendChild(s);
  }

  private FacebookConversionCode(gTagEvent: GTagEvent) {
    const s = this.doc.createElement('script');
    s.type = 'text/javascript';
    s.id = this.activeScriptId3;
    s.innerHTML = `fbq('track', 'Purchase', {
      value: ${gTagEvent.value},
      currency: '${gTagEvent.currency}',
    })`;
    const head = this.doc.getElementsByTagName('head')[0];
    head.appendChild(s);
  }

  navigateToHome() {
    this._route.navigateByUrl('/');
  }
  ngOnDestroy(): void {
    localStorage.setItem('flag', '0');
    if (document.getElementById(this.activeScriptId)) {
      document.getElementById(this.activeScriptId).remove();
    }
    if (document.getElementById(this.activeScriptId2)) {
      document.getElementById(this.activeScriptId2).remove();
    }
    if (document.getElementById(this.activeScriptId3)) {
      document.getElementById(this.activeScriptId3).remove();
    }
  }
}
