import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup }                from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';
import { AuthService }                           from '../../auth/auth.service';
import { UserActivityService }                   from '../../app-common/user-activity.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  @HostBinding('class') checkoutComponentClass = 'app-checkout';

  @Input() productFromInput;
  @Input() productIdFromInput;

  product: any;

  isCouponAllowed = false;
  isCouponApplied = false;
  isRedeemeed = false;
  isRedeemAllowed = false;
  isLoader = false;
  couponHasValue = false;
  idIndex = 0;
  productId: any;
  form: FormGroup;
  product_price: number;
  you_pay: number;
  you_redeemed = 0;
  pay_amount: number;
  message_coupon: any;
  userData: any;
  message: any = [];
  isRedeemeedAllowedStatus: boolean;
  couponStatus;
  boolean;
  message_apply = `Coupon applied successfully`;
  product_type: number;
  product_type_status: boolean;
  userDetailReceived: boolean;
  pricing: any;
  categoryId: any;
  priceId: any;
  id: any;
  final_price: any;
  selectedPrice: any;
  // couponAllowed=price.is_coupon_allowed;
  // redeemAllowed=price.is_redeemed_allowed;
  // id=price.id;
  // final_price=price.final_price;

  constructor(
    private router: Router,
    public _route: ActivatedRoute,
    private _authService: AuthService,
    private _userActivity: UserActivityService,
  ) {
  }

  ngOnInit() {
    window.scroll(0, 0);
    // assigning values to variables received from params
    this._route.params.subscribe(params => {
      this.categoryId = Number(params.categoryId);
      this.product_type = Number(params.product_type);
      this.productId = Number(params.product_id);

    });

    // console.log(this.categoryId, this.product_type, this.productId, "data")
    // getting detail about product
    this.isLoader = true;
    this._authService.getProductDetailById({
      categoryId: 1,
      productType: this.product_type,
      productId: this.productId,
      userId: localStorage.getItem('id'),
      country: localStorage.getItem('country') !== null ? localStorage.getItem('country') : 'India'
    }).subscribe(
      (res: any) => {
        // console.log(res)
        this.isLoader = false;
        this.product = res.data.product;
        this.pricing = this.product.price_detail;
        if (this.pricing) {
          this.selectedPrice = this.pricing[ 0 ].final_price;
        }

        this.you_pay = this.product.final_price;
        this.product_price = this.product.base_price;
        this.isCouponAllowed = this.product.is_coupon_allowed;
        this.isRedeemAllowed = this.product.is_redeemed_allowed;

        if (this.product_type === 12) {
          this.isRedeemAllowed = this.pricing[ 0 ].is_redeemed_allowed;
          this.isCouponAllowed = this.pricing[ 0 ].is_coupon_allowed;
          this.priceId = this.pricing[ 0 ].product_price_id;
        }

      },
      (error: any) => {
        this.isLoader = false;
        // console.log(error);
      }
    );

    this.createForm();
  }

  private createForm() {
    this.form = new FormGroup({
      coupon: new FormControl(''),
      email: new FormControl(''),
      isRedeemedAllowed: new FormControl(false)
    });
  }

  mobileVersion() {
    return window.innerWidth < 800;
  }

  verifyCoupon() {
    if (!this.form.invalid) {
      this.isLoader = true;

      let data = {
        categoryId: 1,
        productType: this.product_type,
        productId: this.productId,
        userId: localStorage.getItem('id'),
        email: localStorage.getItem('email'),
        country: localStorage.getItem('country'),
        couponCode: this.form.value.coupon,
        isRedeemedAllowed: this.form.value.isRedeemedAllowed
      };

      if (this.product_type === 12) {
        data[ 'priceId' ] = this.priceId;
      }

      this._authService.getPriceByProductId(data
      ).subscribe(
        (res: any) => {
          if (res.is_success) {
            this.you_pay = res.data.price;

            if (this.product_type === 12) {
              this.final_price = res.data.price;
            }

            if (this.form.value.isRedeemedAllowed || this.couponHasValue) {
              this.isRedeemeedAllowedStatus = this.form.value.isRedeemedAllowed;
              this.couponStatus = ( this.form.value.coupon !== '' );
            }
            this.isLoader = false;
          }
        },
        (error: any) => {
          // console.log(error);
        }
      );
    }
  }

  selectedPrices(price) {
    this.priceId = price.product_price_id;
    this.isCouponAllowed = price.is_coupon_allowed;
    this.isRedeemAllowed = price.is_redeemed_allowed;
    this.id = price.id;
    this.final_price = price.final_price;
    if(this.priceId===96){
      this.final_price=2400
    }
    if(this.priceId===94){
      this.final_price=2400
    }
  }

  makePayment() {
    this.isLoader = true;

    this._userActivity.logUserActivity('pay-now', this.productId);

    const data = {
      categoryId: this.categoryId,
      productType: this.product_type,
      productId: this.productId,
      couponCode: this.form.value.coupon,
      isRedeemedAllowed: this.form.value.isRedeemedAllowed,
      register_source: 'website',
      user_id: localStorage.getItem('id'),
      priceId: this.priceId
    };

    this._authService.paymentCheckout(data).subscribe(
      (res: any) => {
        location.href = res.data.url;
        this.isLoader = false;
      },
      error => {
        // console.log(error);
      }
    );
  }

  couponTouched() {
    this.couponHasValue = !( this.form.value.coupon === '' );
  }

  getCurrencySign() {
    if (localStorage.getItem('country') && localStorage.getItem('country').toLowerCase() === 'india') {
      return 'fa-inr';
    } else if (localStorage.getItem('country') && localStorage.getItem('country').toLowerCase() !== 'india') {
      return 'fa-usd';
    } else {
      return 'fa-inr';
    }

  }
}
