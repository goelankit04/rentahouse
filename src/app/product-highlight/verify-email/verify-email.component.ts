import {
  Component,
  OnInit,
  HostBinding,
  Inject,
  OnDestroy,
} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterUserComponent } from '../register-user/register-user.component';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CountryCodeService } from '../../app-common/country_code.service';
import { IpService } from '../../auth/ip.service';
import { isNumber } from 'util';
import { AmplitudeService } from '../../amplitude/amplitude.service';
import { events } from '../../amplitude/events';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
})
export class VerifyEmailComponent implements OnInit, OnDestroy {
  @HostBinding('class') VerifyEmailComponentClass = 'app-verify-email';

  form: FormGroup;
  countries: Array<any>;
  userData: any;

  interval: any;

  mobileCountryCode: string;
  mobileNumber = 0;
  askMobile: boolean;
  newUser: boolean;
  enablePayNow = false;
  showCouponContainer: boolean;
  showRemove: boolean;
  valueOff = 0;
  currency: string;
  loader: boolean;
  loading: boolean;
  showOwnedMessage: boolean;
  mobileError = '';
  selectedCountry: string;
  coupon = '';
  userLoggedIn = false;
  errorOnMobile = false;
  showEmailError: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _aR: ActivatedRoute,
    private _country: CountryCodeService,
    private _ipService: IpService,
    private _amps: AmplitudeService
  ) {}

  ngOnInit() {
    this._aR.queryParams.subscribe((qp) => {
      if (qp.cc) {
        this.coupon = qp.cc;
        this.applyCoupon();
      }
    });

    this.createForm();
    this.countries = this._country.getCountry();
    this.currency = this.data.currency;
    this.getActivePricing();

    // if user is already logged in
    if (this.data.email) {
      // setting email
      this.form.controls.email.setValue(this.data.email);

      // setting mobile
      if (this._authService.isUserLoggedIn()) {
        const mobile = localStorage.getItem('mobile');
        this.mobileCountryCode = mobile ? mobile.substring(0, 2) : '91';
        this.form.controls.mobile.setValue(mobile.substring(2, mobile.length));
      }

      // verifying data
      this.verifyEmail();
      this.userLoggedIn = this._authService.isUserLoggedIn();
      if (this.userLoggedIn) {
        this.disableEmailInput();
      }
    }

    // adding checks for key presses

    document.getElementById('email').addEventListener('keydown', (e) => {
      // checks whether the pressed key is "Enter"
      if (e.keyCode === 13) {
        this.verifyEmail();
      }
    });
  }

  ngOnDestroy() {
    window.clearTimeout(this.interval);
  }

  createForm() {
    this.form = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\+\d{1,3}[-]?)?\d{4,12}$/),
      ]),
      country: new FormControl(''),
      coupon: new FormControl(''),
      redeem: new FormControl(false),
    });
  }

  verifyEmail() {
    if (
      this.form.controls.email.value.length > 1 &&
      this.form.controls.email.valid
    ) {
      // console.log(this.form.controls.email.value, this.form.controls.email.value.length, this.form.controls.email.valid, !this.newUser, this.form.controls.mobile.value ? this.form.controls.mobile.valid : true);
      if (
        this.form.controls.email.valid &&
        !this.newUser &&
        (this.form.controls.mobile.value
          ? this.form.controls.mobile.valid
          : true)
      ) {
        this.loading = true;
        this._authService
          .isUserExistsWithDreamroom({
            email: this.form.value.email,
            mobile: this.form.value.mobile
              ? this.mobileCountryCode + this.form.value.mobile
              : undefined,
            productId: this.data.productId,
            product_type: this.data.productType,
          })
          .subscribe(
            (res: any) => {
              this.loader = false;
              if (res.data.userStatus.userExistsWithMultipleAccounts) {
                // user exists with multiple accounts
                this.askMobile = true;
                this.showOwnedMessage = false;
                this.getActivePricing();
              } else {
                // saving response locally
                this.userData = res;
                // setting country
                let city = '';
                if (this.userData.data.userStatus.user !== undefined) {
                  city = this.userData.data.userStatus.user.country;
                } else {
                  // this._ipService.getUserInfo().subscribe((res1: any) => (city = res1.city));
                }
                this.form.controls.country.setValue(city);

                // user in either unique or new
                if (res.data.userStatus.user) {
                  // user is unique and enabling 'Pay Now'
                  this.newUser = false;
                  this.askMobile = false;

                  this.getActivePricing();
                } else {
                  // this is a new user
                  this.askMobile = false;
                  this.newUser = true;
                  this.disableEmailInput();

                  this.showOwnedMessage = false;
                  this.getActivePricing();

                  this.checkNewUserDataForPayNow();
                }
              }

              this.loading = false;
            },
            (err: any) => {
              this.loader = false;
            }
          );
      } else {
        this.loader = false;
      }
    }
  }

  getErrorMessage(choice: string) {
    switch (choice) {
      case 'email': {
        return this.form.controls.email.hasError('required')
          ? 'This field is required'
          : this.form.controls.email.hasError('pattern')
          ? 'Please enter a valid email'
          : this.form.controls.email.hasError('exists')
          ? 'Email already exists'
          : '';
      }
      case 'mobile': {
        return this.form.controls.mobile.hasError('required')
          ? 'This field is required'
          : this.form.controls.mobile.hasError('leastAlphabet')
          ? 'Letters are not allowed'
          : this.form.controls.mobile.hasError('leastSpecialChar')
          ? 'Special charactrers are not allowed'
          : this.form.controls.mobile.hasError('minimumLength')
          ? 'Must contain 5 digits'
          : '';
      }

      default: {
        // No error message to display
      }
    }
  }

  filterCountries(name: string): any {
    return this.countries.filter(
      (country) => country.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  }

  getUserMobileNumber(value: any) {
    this.mobileCountryCode = this.removePlusSignFromMobileCode(
      value.mobile_code
    );
    this.mobileNumber = value.mobile_number;
    this.form.controls.mobile.setValue(this.mobileNumber);

    this.checkNewUserDataForPayNow();
  }

  removePlusSignFromMobileCode(code: any) {
    return code.replace('+', '');
  }

  registerUser(userData: any) {
    // showing final loader
    this.loader = true;

    this._authService.directRegisterLink(userData).subscribe(
      (res: any) => {
        if (this.newUser) {
          // register event
          this._amps.setAmplitudeEvents(events.event_3, {
            success: 'yes',
            email: this.form.value.email.toLowerCase(),
            country: this.form.value.country
              ? this.form.value.country
              : localStorage.getItem('country'),
            source: 'product-highlight-popup',
          });
        }

        // buy now event
        this._amps.setAmplitudeEvents(events.event_9, {
          success: 'yes',
          coupon: this.form.value.coupon,
          isRedeemed: this.form.value.redeem,
          email: this.form.value.email,
          category: this.data.category === 1 ? 'chess' : 'cricket',
          author_name: undefined,
          product_name: this.data.productName,
          final_price: this.data.finalPrice,
          base_price: this.data.basePrice,
          sale_price: this.data.salePrice,
          special_price: undefined,
          currency: this.currency,
          productType: this.data.productType,
          country: this.form.value.country
            ? this.form.value.country
            : localStorage.getItem('country'),
          source: 'product-highlight-popup',
        });

        if (res.data.paymentStatus === 1) {
          this.dialog.closeAll();
          this._router.navigateByUrl(
            `/payment/status/${res.data.orderId}/${res.data.transactionId}`
          );
        } else {
          if (res.data.url) {
            location.href = res.data.url;
          } else {
            this.form.reset();
          }
        }
      },
      (err: any) => {}
    );
  }

  closeDialog() {
    this._amps.setAmplitudeEvents(events.event_25, {
      product_name: this.data.productName ? this.data.productName : null,
      product_id: this.data.productId ? this.data.productId : null,
      product_type: this.data.productType ? this.data.productType : null,
      catergory: this.data.category ? this.data.category : null,
      author: undefined,
      popup_id: undefined,
      target_url: undefined,
      source: 'product-highlight-popup',
    });

    this.dialog.closeAll();
  }

  removeCoupon() {
    this.loading = true;
    this.coupon = '';
    this.form.controls.coupon.setValue('');
    this.validateCoupon();
    this.showRemove = false;
    this.showCouponContainer = true;
    this.loading = false;
  }

  validateCoupon() {
    this.loading = true;

    const data = {
      categoryId: this.data.category,
      productType: this.data.productType,
      productId: this.data.productId,
      country:
        (this.form && this.form.value.country) ||
        localStorage.getItem('country'),
      couponCode: this.coupon,
      isRedeemedAllowed:
        this.form && this.form.value && this.form.value.redeem
          ? this.form.value.redeem
          : false,
      isDRR:
        this.userData && this.userData.data.userStatus.is_user_drr !== undefined
          ? this.userData.data.userStatus.is_user_drr
          : false,
      email:
        this.form && this.form.value && this.form.value.email
          ? this.form.value.email
          : '',
      priceId: this.data.priceId,
      userId:
        this.userData !== undefined
          ? this.userData.data.userStatus.user !== undefined
            ? this.userData.data.userStatus.user.id
            : undefined
          : undefined,
    };

    this._authService.getPriceByProductId(data).subscribe((res: any) => {
      this.loading = false;

      const price = isNumber(this.data.finalPrice)
        ? this.data.finalPrice
        : Number(this.data.finalPrice.replace(',', ''));
      this.valueOff = ((price - Number(res.data.price)) / price) * 100;
      this.data.finalPrice = Number(res.data.price);
      this.currency = res.data.currency;
    });
  }

  applyCoupon() {
    if (this.form && this.form.value) {
      this._amps.setAmplitudeEvents(events.event_10, {
        success: 'yes',
        coupon: this.form.value.coupon,
        isRedeemed: this.form.value.redeem,
        email: this.form.value.email,
        category: this.data.category === 1 ? 'chess' : 'cricket',
        author_name: undefined,
        product_name: this.data.productName,
        final_price: this.data.finalPrice,
        base_price: this.data.base_price,
        sale_price: this.data.salePrice,
        special_price: undefined,
        currency: this.currency,
        productType: this.data.productType,
        source: 'product-highlight-popup',
      });
    }

    this.coupon =
      this.form && this.form.value && this.form.value.coupon
        ? this.form.value.coupon
        : this.coupon;
    this.validateCoupon();
    this.showRemove = true;
    this.showCouponContainer = false;
  }

  redeemScholarship() {
    if (this.enablePayNow) {
      this.form.controls.redeem.setValue(!this.form.value.redeem);
      this.validateCoupon();
    }
  }

  getActivePricing() {
    this._authService
      .getAllActiveProducts({
        country: this.selectedCountry
          ? this.selectedCountry
          : this.userData && this.userData.data.userStatus.user
          ? this.userData.data.userStatus.user.country
          : localStorage.getItem('country'),
        isDRR: false,
        productId: this.data.productId,
        productType: this.data.productType,
        user_id:
          this.userData && this.userData.data.userStatus.user
            ? this.userData.data.userStatus.user.id
            : localStorage.getItem('id'),
      })
      .subscribe((res: any) => {
        let index = 0;
        if (res.data.productList[0].price_detail.length > 1) {
          switch (this.data.propType) {
            case 'reserve': {
              index = 1;
              break;
            }
            default: {
              index = 0;
            }
          }
        }
        this.data.priceId = res.data.productList[0].price_detail[index].id;
        this.data.basePrice =
          res.data.productList[0].price_detail[index].base_price;
        this.data.finalPrice =
          res.data.productList[0].price_detail[index].final_price;
        this.currency = res.data.productList[0].price_detail[index].currency;

        // product is owned check
        if (this.form.value.email) {
          this.showOwnedMessage = this.data.finalPrice === 0;

          if (!this.newUser && !this.askMobile) {
            this.enablePayNow = !this.showOwnedMessage;
          }
        }
      });
  }

  getPricingByCountry(country: string) {
    this.selectedCountry = country;
    this.getActivePricing();
    this.checkNewUserDataForPayNow();
  }

  getButtonDisabledValue() {
    return this.enablePayNow;
  }

  getAlertError(event: any) {
    if (this.mobileError !== event) {
      // this.interval = setTimeout(() => {
      // console.log(this.errorOnMobile, event);
      this.errorOnMobile = event.length > 0;
      this.mobileError = event === '' ? null : event;
      // }, 500);
    }
  }

  disableEmailInput() {
    document.getElementById('email').setAttribute('disabled', 'true');
  }

  checkNewUserDataForPayNow() {
    this.enablePayNow =
      this.form.controls.email.valid &&
      this.form.controls.mobile.valid &&
      this.form.controls.country.value.length > 0;
  }

  isMobileWidth() {
    return window.innerWidth > 800;
  }

  payNow() {
    if (this.enablePayNow) {
      // resetting the email to the verified one
      if (this.userData && this.userData.data.userStatus.user) {
        this.form.controls.email.setValue(
          this.userData.data.userStatus.user.email
        );
      }

      // check if the user is unique or new
      let payload;

      if (this.newUser) {
        if (
          this.form.controls.email.valid &&
          this.form.controls.mobile.valid &&
          this.form.controls.country.valid
        ) {
          // new user has valid data
          let city;
          this._ipService
            .getUserInfo()
            .subscribe((res1: any) => (city = res1.city));
          payload = {
            first_name: 'subscriber',
            last_name: this.form.value.email.split('@')[0].trim(),
            email: this.form.value.email,
            mobile: this.mobileCountryCode + this.mobileNumber,
            mobile_country_code: this.mobileCountryCode,
            password: 'qaz@123',
            campaign: true,
            priceId: this.data.priceId,
            shipping_address: {
              street_address: null,
              landmark: null,
              city: city,
              state: null,
              country: this.form.value.country,
              zip_code: null,
            },
            permanent_address: {
              street_address: null,
              landmark: null,
              city: city,
              state: null,
              country: this.form.value.country,
              zip_code: null,
            },
            source_id: 2,
            created_by: null,
            categoryId: this.data.category,
            couponCode: this.form.value.coupon,
            isRedeemedAllowed: this.form.value.redeem,
            productType: this.data.productType,
            productId: this.data.productId,
          };
        } else {
          // new user data not valid
        }
      } else {
        // this is an existing user
        payload = {
          created_by: null,
          productType: this.data.productType,
          productId: this.data.productId,
          categoryId: this.data.category,
          couponCode: this.form.value.coupon,
          isRedeemedAllowed: this.form.value.redeem,
          register_source: 'website',
          priceId: this.data.priceId,
          user_id:
            this.userData !== undefined
              ? this.userData.data.userStatus.user.id
              : undefined,
        };
      }

      // hitting the API with final data
      this.registerUser(payload);
    }
  }
}
