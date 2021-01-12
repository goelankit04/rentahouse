import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CountryCodeService } from '../../app-common/country_code.service';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import * as decoder from 'jwt-decode';
import * as moment from 'moment';

import {
  Component,
  OnInit,
  HostBinding,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { IpService } from '../../auth/ip.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserActivityService } from '../../app-common/user-activity.service';
import { AmplitudeService } from '../../amplitude/amplitude.service';
import { events } from '../../amplitude/events';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-direct-payment',
  templateUrl: './direct-payment.component.html',
  styleUrls: ['./direct-payment.component.scss'],
})
export class DirectPaymentComponent implements OnInit, OnDestroy {
  @HostBinding('class') DirectPaymentComponentClass = 'app-direct-payment';

  // SAMPLE LINK
  // https://www.testourwebsite.com/direct?product=26&coupon=aabbcc&country=india&agent=12&isdrr=29

  /* https://www.testourwebsite.com/
       direct?
        product=26 &
        coupon=aabbcc &
        country=india &
        agent=12 &
        isdrr=29
  */

  uspList = [
    {
      id: 1,
      icon: 'assets/payment-footer/advisor.svg',
      title: 'Learn Best from the Best!',
      subtitle:
        '20+ GM coaches, Live interaction, mentoring, and handholding under 1 roof',
    },
    {
      id: 2,
      icon: 'assets/payment-footer/rewards.svg',
      title: 'Opportunities & Rewards',
      subtitle: 'Cashback, rewards, and more on registrations',
    },
    {
      id: 3,
      icon: 'assets/payment-footer/learning.svg',
      title: 'Learn, Practice, Achieve',
      subtitle: 'Online game practice and e-Tournaments ',
    },
    {
      id: 4,
      icon: 'assets/payment-footer/evolving.svg',
      title: 'Always Evolving',
      subtitle: 'More GMs, and top mentors added regularly',
    },
  ];

  form: FormGroup;
  email_form: FormGroup;
  payment: FormGroup;

  id: any;
  final_price: any;
  agent: any;
  userId: any;
  amountToPay: any;
  coupon_message: any;
  product_type: any;
  paramsReceived: any;
  product: any;
  extraProductInfo: any;
  pricing: any;
  selectedPrice: any;
  roleId: any;
  mobileCountryCode: any;
  mobileNumber: any;

  filteredCountries: Observable<any[]>;
  countries: Array<any>;
  productList = [];

  currency: string;
  response_message: string;
  userEmail: string;
  userFirstNameInResponse: string;
  userLastNameInResponse: string;
  sourceValue: string;
  selectedProduct: string;
  country = '';
  newMobileNumber: string;

  productId: number;
  selectedProduct_id: number;
  priceId: number;
  validDRR_Code = 29;

  mobileInputStatus: boolean;
  isUserLoggedIn: boolean;
  disabled = true;
  isLoading = true;
  dataReceived = false;
  payment_coupon = false;
  isInvalidCountry = false;
  isProductOwnedByTheUser = false;
  isdrr = false;
  couponValue = '';
  redeemValue = false;
  intitalCoupon = true;
  couponAllowed = false;
  redeemAllowed = false;
  showChangeEmailMessage = false;
  // registeredUser = false;
  formStatus = true;
  emailVerfied = false;
  isSourceEnabled = false;
  isMobileRequired = false;
  showError = false;
  userAvailable = false;
  emailInput = true;
  token: any;

  specialProductId = 762;

  @ViewChild(MatAutocomplete)
  matAutocomplete: MatAutocomplete;

  static passwordValidator(password: string) {
    return (group: FormGroup) => {
      const passwordCopy = group.controls[password];
      const hasAlphabet = /(?=.*[a-zA-z])/.test(passwordCopy.value);
      const hasNumber = /(?=.*[0-9])/.test(passwordCopy.value);
      const hasSpecialChar = /(?=.*[!@#\$%\^&\*])/.test(passwordCopy.value);
      const hasMinimumLength = /(?=.{6,})/.test(passwordCopy.value);

      if (hasAlphabet === false) {
        return passwordCopy.setErrors({ leastAlphabet: true });
      } else if (hasNumber === false) {
        return passwordCopy.setErrors({ leastNumber: true });
      } else if (hasSpecialChar === false) {
        return passwordCopy.setErrors({ leastSpecialChar: true });
      } else if (hasMinimumLength === false) {
        return passwordCopy.setErrors({ minimumLength: true });
      } else {
        return passwordCopy.setErrors(null);
      }
    };
  }

  static mobileValidator(mobile: string) {
    return (group: FormGroup) => {
      const mobileCopy = group.controls[mobile];
      const hasAplhabet = /(?=.*[a-zA-Z])/.test(mobileCopy.value);
      const hasSpecialChar = /(?=.*[`~!@#\$%\^&\*\[\]\{\}'"<>?\\/|,.:;_=])/.test(
        mobileCopy.value
      );
      const hasMinimumLength = /(?=.{5,})/.test(mobileCopy.value);

      if (hasAplhabet === !false) {
        return mobileCopy.setErrors({ leastAlphabet: true });
      } else if (hasSpecialChar === !false) {
        return mobileCopy.setErrors({ leastSpecialChar: true });
      } else if (hasMinimumLength === false) {
        return mobileCopy.setErrors({ minimumLength: true });
      } else {
        return mobileCopy.setErrors(null);
      }
    };
  }

  constructor(
    private _fb: FormBuilder,
    private _country: CountryCodeService,
    private _authService: AuthService,
    private _activatedRoute: ActivatedRoute,
    public snackBar: MatSnackBar,
    private _router: Router,
    private _ipService: IpService,
    private _amps: AmplitudeService,
    private _userActivity: UserActivityService,
    private _seoService: SeoService
  ) {}

  ngOnInit() {
    this._userActivity.logUserActivity('direct-payment');

    this.isUserLoggedIn = Boolean(localStorage.getItem('access_token'));
    this.countries = this._country.getCountry();

    if (this.isUserLoggedIn) {
      this.userEmail = localStorage.getItem('email');
      this.emailVerfied = true;
      this.userAvailable = true;
      this.emailInput = false;
      this.country = localStorage.getItem('country');
    }

    this._activatedRoute.queryParams.subscribe((params: any) => {
      this.product_type = params.productType;
      this.isLoading = true;
      if (params.product) {
        this.paramsReceived = true;

        // detecting user agent
        this.agent = params.agent === undefined ? null : params.agent;

        // detecting country
        const countryTemp =
          params.country === undefined
            ? localStorage.getItem('country')
              ? localStorage.getItem('country')
              : this._ipService.getUserInfo().subscribe((res) => res.country)
            : params.country;

        for (const count of this.filterCountries(countryTemp)) {
          if (count.name.toLowerCase() === countryTemp.toLowerCase()) {
            this.country = String(count.name);
          }
        }

        // detecting coupon value
        this.couponValue = params.coupon === undefined ? '' : params.coupon;

        // detecting isDRR
        this.isdrr = Number(params.isdrr) === this.validDRR_Code;
        // detecting productId
        this.productId = Number(params.product);
        if (this.product_type === 12) {
          this.roleId = 18;
        }

        this.getActiveProduct();
        this.createEmailForm();
        this.createForm();

        if (this.isUserLoggedIn) {
          this.email_form.controls.email.setValue(
            localStorage.getItem('email')
          );
          this.userFirstNameInResponse = localStorage.getItem('first_name');
          this.showChangeEmailMessage = true;
        }
      } else {
        this.paramsReceived = false;
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy() {
    this._seoService.removeMetaTags();
  }

  onChanges() {
    this.form.get('country').valueChanges.subscribe((value) => {
      this.filterCountries(value);
    });
  }

  filterCountries(name: string): any {
    return this.countries.filter(
      (country) => country.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  }

  createEmailForm() {
    this.email_form = this._fb.group({
      email: new FormControl({ value: '', disabled: !this.emailInput }, [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
    });
  }

  createForm() {
    this.formStatus = !this.isUserLoggedIn;

    this.form = this._fb.group(
      {
        first_name: new FormControl(
          { value: '', disabled: !(this.formStatus && this.emailVerfied) },
          [Validators.required, Validators.pattern(/^[A-Za-z. ]+$/)]
        ),
        last_name: new FormControl(
          { value: '', disabled: !(this.formStatus && this.emailVerfied) },
          [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]
        ),
        password: new FormControl(
          { value: '', disabled: !(this.formStatus && this.emailVerfied) },
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
            ),
          ]
        ),
        city: new FormControl(
          { value: '', disabled: !(this.formStatus && this.emailVerfied) },
          [Validators.required, Validators.pattern(/^[A-Za-z. ]+$/)]
        ),
        country: new FormControl(
          { value: '', disabled: !(this.formStatus && this.emailVerfied) },
          [Validators.required]
        ),
      },
      {
        validator: [DirectPaymentComponent.passwordValidator('password')],
      }
    );

    this.mobileInputStatus = !(this.formStatus && this.emailVerfied);

    this.payment = this._fb.group({
      coupon_value: new FormControl(this.couponValue),
      isRedeemed: new FormControl(this.redeemValue),
    });

    this.onChanges();

    this.form.controls['country'].setValue(
      this.country === 'x' || this.country === 'y' ? 'India' : this.country
    );
    this.payment.controls['coupon_value'].setValue(this.couponValue);
    this.payment.controls['isRedeemed'].setValue(this.redeemValue);
  }

  getErrorMessage_newUser(choice: string) {
    switch (choice) {
      case 'first_name': {
        return this.form.controls.first_name.hasError('required')
          ? 'This field is required'
          : this.form.controls.first_name.hasError('pattern')
          ? 'Please enter a valid first name'
          : '';
      }
      case 'last_name': {
        return this.form.controls.last_name.hasError('required')
          ? 'This field is required'
          : this.form.controls.last_name.hasError('pattern')
          ? 'Please enter a valid last name'
          : '';
      }
      case 'email': {
        return this.email_form.controls.email.hasError('required')
          ? 'This field is required'
          : this.email_form.controls.email.hasError('pattern')
          ? 'Please enter a valid email'
          : this.email_form.controls.email.hasError('exists')
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
      case 'password': {
        return this.form.controls.password.hasError('required')
          ? 'This field is required'
          : this.form.controls.password.hasError('leastAlphabet')
          ? 'Must contain one alphabet character'
          : this.form.controls.password.hasError('leastNumber')
          ? 'Must contain one number'
          : this.form.controls.password.hasError('leastSpecialChar')
          ? 'Must contain one special character'
          : this.form.controls.password.hasError('minimumLength')
          ? 'Must contain 6 characters'
          : '';
      }
      case 'city': {
        return this.form.controls.city.hasError('required')
          ? 'This field is required'
          : this.form.controls.city.hasError('pattern')
          ? 'Please enter a valid city'
          : '';
      }
      case 'country': {
        return this.form.controls.country.hasError('required')
          ? 'This field is required'
          : this.form.controls.country.hasError('pattern')
          ? 'Please enter a valid country'
          : '';
      }

      default: {
        // No error message to display
      }
    }
  }

  registerUser() {
    this.isLoading = true;
    // console.log(this.userAvailable, this.isUserLoggedIn);
    const userData =
      this.userAvailable || this.isUserLoggedIn
        ? {
            created_by: this.agent ? this.agent : null,
            categoryId: 1,
            productType: this.product.product_type,
            productId: this.productId,
            couponCode: this.payment.value.coupon_value,
            isRedeemedAllowed: this.payment.value.isRedeemed,
            register_source: 'website',
            priceId: this.priceId,
            user_id: this.userAvailable
              ? this.userId
                ? this.userId
                : localStorage.getItem('id')
              : undefined,
          }
        : {
            first_name: this.form.controls.first_name.value,
            last_name: this.form.controls.last_name.value,
            email: this.email_form.controls.email.value,
            mobile: this.mobileCountryCode + this.mobileNumber,
            mobile_country_code: this.mobileCountryCode,
            password: this.form.controls.password.value,
            priceId: this.priceId,
            shipping_address: {
              street_address: null,
              landmark: null,
              city: this.form.controls.city.value,
              state: null,
              // country:this.country,
              country: this.form.value.country,
              zip_code: null,
            },
            permanent_address: {
              street_address: null,
              landmark: null,
              city: this.form.controls.city.value,
              state: null,
              country: this.country,
              zip_code: null,
            },
            source_id: 2,
            created_by: this.agent,
            categoryId: 1,
            productType: this.product.product_type,
            productId: this.product.id,
            couponCode: this.payment.value.coupon_value,
            isRedeemedAllowed: this.payment.value.isRedeemedAllowed,
            // role_id: this.roleId,
            // user_id: this.userId
          };

    this._authService.directRegisterLink(userData).subscribe(
      (res: any) => {
        this.isLoading = false;
        this._amps.setAmplitudeEvents(events.event_9, {
          success: 'yes',
          coupon: this.payment.value.coupon_value,
          isRedeemed: this.payment.value.isRedeemed,
          email: this.userEmail,
          category: this.productList[0].category_id === 1 ? 'chess' : 'cricket',
          author_name: this.productList[0].author_name,
          product_name: this.productList[0].name,
          final_price: this.pricing[0].final_price,
          base_price: this.pricing[0].final_price,
          sale_price: this.pricing[0].final_price,
          special_price: this.pricing[0].final_price,
          currency: this.pricing[0].currency,
          productType: this.getProductTypeName(
            this.productList[0].product_type
          ),
        });

        this._amps.setUserId(this.email_form.value.email.toLowerCase());

        if (!this.userAvailable) {
          this._amps.setAmplitudeEvents(events.event_3, {
            success: 'yes',
          });
        }

        this._amps.setAmplitudeEvents(events.event_21, {
          success: 'yes',
          coupon: this.payment.value.coupon_value,
          isRedeemed: this.payment.value.isRedeemed,
          email: this.userEmail,
          category: this.productList[0].category_id === 1 ? 'chess' : 'cricket',
          author_name: this.productList[0].author_name,
          product_name: this.productList[0].name,
          final_price: this.pricing[0].final_price,
          base_price: this.pricing[0].base_price,
          sale_price: this.pricing[0].sale_price,
          special_price: this.pricing[0].special_price,
          currency: this.pricing[0].currency,
          productType: this.getProductTypeName(
            this.productList[0].product_type
          ),
        });

        if (res.data.paymentStatus === 1) {
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
      (err: any) => {
        this.isLoading = false;
        this._amps.setAmplitudeEvents(events.event_9, {
          success: 'no',
          error: err,
          email: this.userEmail,
          coupon: this.payment.value.coupon_value,
          isRedeemed: this.payment.value.isRedeemed,
          category: this.productList[0].category_id === 1 ? 'chess' : 'cricket',
          author_name: this.productList[0].author_name,
          product_name: this.productList[0].name,
          final_price: this.pricing[0].final_price,
          base_price: this.pricing[0].base_price,
          sale_price: this.pricing[0].sale_price,
          special_price: this.pricing[0].special_price,
          currency: this.pricing[0].currency,
          productType: this.getProductTypeName(
            this.productList[0].product_type
          ),
        });
      }
    );
  }

  getProductTypeName(productType: Number) {
    let productTypeName = '';
    switch (productType) {
      case 1:
        productTypeName = 'Dream Room';
        break;
      case 2:
        productTypeName = 'Class Room';
        break;
      case 3:
        productTypeName = 'Live Room';
        break;
      case 4:
        productTypeName = '121 Room';
        break;
      case 6:
        productTypeName = 'Camp Room';
        break;
      case 7:
        productTypeName = 'Special Offers';
        break;
      case 11:
        productTypeName = 'Event Room';
        break;
      case 13:
        productTypeName = 'Star Room';
        break;
    }
    return productTypeName;
  }

  verfiyEmailId() {
    this.userEmail = this.email_form.value.email;
    this.isLoading = true;

    const isUserAlreadyExists = {
      email: this.email_form.value.email,
      mobile: this.newMobileNumber ? this.newMobileNumber : undefined,
      productId: this.productId,
      product_type: this.product_type,
    };

    this._authService.isUserExistsWithDreamroom(isUserAlreadyExists).subscribe(
      (res: any) => {
        this.isLoading = false;
        const response = res.data.userStatus;
        if (response.isUserProduct) {
          this.isProductOwnedByTheUser = true;
        } else {
        }
        this.isMobileRequired =
          res.data.userStatus.userExistsWithMultipleAccounts;

        this.userAvailable = response.is_user_available;
        this.userId = response.is_user_available ? response.user.id : undefined;
        this.userFirstNameInResponse =
          response.user !== undefined ? response.user.first_name : '';
        this.userLastNameInResponse =
          response.user !== undefined ? response.user.last_name : '';
        this.country =
          response.user !== undefined
            ? response.user.country === 'x' || response.user.country === 'y'
              ? 'India'
              : response.user.country
            : this.country;
        this.form.value.country = this.country;
        this.emailVerfied = true;

        if (response.is_user_available && !this.isMobileRequired) {
          // this.registeredUser = true;

          if (response.is_user_drr) {
            // user is a DRR
            this.formStatus = false;
            this.showChangeEmailMessage = true;
            this.isdrr = true;

            this.getActiveProduct();
            // this.final_price = '';
          } else {
            // user is not a DRR
            this.formStatus = false;
            this.showChangeEmailMessage = true;
            this.isdrr = false;

            this.getActiveProduct();
            // this.final_price = '';
          }
        } else {
          // user is not a DRR
          this.formStatus = true;
          this.showChangeEmailMessage = false;
          this.isdrr = false;

          this.getActiveProduct();
          // this.final_price = '';

          this.createForm();
        }

        // this.createEmailForm();
      },
      (err: any) => {
        this.isLoading = false;
        // Do Nothing
      }
    );
  }

  // after login
  validateCoupons() {
    this.country = this.form.value.country;
    this.isLoading = true;
    // if (this.canApplyCoupon()) {

    const data = {
      categoryId: 1,
      productType: this.product.product_type,
      productId: this.product.id,
      country: this.country,
      couponCode: this.payment.value.coupon_value,
      isRedeemedAllowed: this.payment.value.isRedeemed,
      isDRR: this.isdrr,
      email: this.email_form.value.email
        ? this.email_form.value.email
        : localStorage.getItem('email'),
      priceId: this.priceId,
      userId: Number(localStorage.getItem('id')),
    };

    // if (parseInt(this.product.product_type) === 12) {
    //   data[ 'priceId' ] = this.priceId;
    // }

    this._authService.getPriceByProductId(data).subscribe(
      (res: any) => {
        if (res.is_success) {
          this.final_price = res.data.price;
          this.amountToPay = res.data.price;
          this.selectedPrice = res.data.price;
          // if (parseInt(this.product_type) === 12) {
          //   this.final_price = res.data.price;
          // }

          this.isLoading = false;
          this._amps.setAmplitudeEvents(events.event_10, {
            success: 'yes',
            coupon: this.payment.value.coupon_value,
            isRedeemed: this.payment.value.isRedeemed,
            email: this.userEmail,
            category:
              this.productList[0].category_id === 1 ? 'chess' : 'cricket',
            author_name: this.productList[0].author_name,
            product_name: this.productList[0].name,
            final_price: this.pricing[0].final_price,
            base_price: this.pricing[0].base_price,
            sale_price: this.pricing[0].sale_price,
            special_price: this.pricing[0].special_price,
            currency: this.pricing[0].currency,
            productType: this.getProductTypeName(
              this.productList[0].product_type
            ),
          });
          // this.productOwnedCheck();
        } else {
          this._amps.setAmplitudeEvents(events.event_10, {
            success: 'no',
            coupon: this.payment.value.coupon_value,
            isRedeemed: this.payment.value.isRedeemed,
            email: this.userEmail,
            category:
              this.productList[0].category_id === 1 ? 'chess' : 'cricket',
            author_name: this.productList[0].author_name,
            product_name: this.productList[0].name,
            final_price: this.pricing[0].final_price,
            base_price: this.pricing[0].base_price,
            sale_price: this.pricing[0].sale_price,
            special_price: this.pricing[0].special_price,
            currency: this.pricing[0].currency,
            productType: this.getProductTypeName(
              this.productList[0].product_type
            ),
          });
        }
      },
      (error: any) => {
        this.amountToPay = this.isdrr
          ? this.product.special_price
          : this.product.final_price;
        this.isLoading = false;
        this._amps.setAmplitudeEvents(events.event_10, {
          success: 'no',
          error: error,
          coupon: this.payment.value.coupon_value,
          isRedeemed: this.payment.value.isRedeemed,
          email: this.userEmail,
          category: this.productList[0].category_id === 1 ? 'chess' : 'cricket',
          author_name: this.productList[0].author_name,
          product_name: this.productList[0].name,
          final_price: this.pricing[0].final_price,
          base_price: this.pricing[0].base_price,
          sale_price: this.pricing[0].sale_price,
          special_price: this.pricing[0].special_price,
          currency: this.pricing[0].currency,
          productType: this.getProductTypeName(
            this.productList[0].product_type
          ),
        });
        // this.productOwnedCheck();
      }
    );
    this.intitalCoupon = false;
    // }
  }

  // before login
  validateCoupon() {
    // this.canApplyCoupon()
    this.country = this.form.value.country;
    this.isLoading = true;
    const data = {
      categoryId: 1,
      productType: this.product.product_type,
      productId: this.product.id,
      country: this.country,
      couponCode: this.payment.value.coupon_value,
      isRedeemedAllowed: this.payment.value.isRedeemed,
      isDRR: this.isdrr,
      email: this.email_form.value.email,
      priceId: this.priceId,
      userId: this.userId,
    };

    // if (parseInt(this.product.product_type) === 12) {
    //   data[ 'priceId' ] = this.priceId;
    // }

    this._authService.getPriceByProductId(data).subscribe(
      (res: any) => {
        if (res.is_success) {
          this.final_price = res.data.price;
          this.amountToPay = res.data.price;
          this.selectedPrice = res.data.price;
          this.isLoading = false;
          // this.productOwnedCheck();
        }
      },
      (error: any) => {
        this.amountToPay = this.isdrr
          ? this.product.special_price
          : this.product.final_price;
        this.isLoading = false;
        // this.productOwnedCheck();
      }
    );

    this.intitalCoupon = false;
  }

  getCurrencySign() {
    return this.product.price_detail[0].currency === 'inr'
      ? 'fa-inr'
      : 'fa-usd';
    // return ( this.form === undefined ? this.country : this.form.value.country ).toLocaleLowerCase().trim() === 'india' ? 'fa-inr' : 'fa-usd';
  }

  selectedPrices(price) {
    this.priceId = price.product_price_id;
    this.couponAllowed = price.is_coupon_allowed;
    this.redeemAllowed = price.is_redeemed_allowed;
    this.id = price.id;
    this.final_price = price.final_price;
    this.selectedPrice = price.final_price;
  }

  getActiveProduct() {
    this.isLoading = true;
    const productParams = {
      country: this.form === undefined ? this.country : this.form.value.country,
      productId: Number(this.productId),
      isDRR: this.isdrr,
      productType: Number(this.product_type),
      user_id: this.userAvailable
        ? Number(this.userId)
          ? Number(this.userId)
          : Number(localStorage.getItem('id'))
        : undefined,
    };

    this._authService.getAllActiveProducts(productParams).subscribe(
      (res: any) => {
        this.productList = res.data.productList;
        this.isProductOwnedByTheUser = res.data.productList[0].isUserProduct;

        this.extraProductInfo = this.productList[0].extra_product_info;
        this.pricing = this.productList[0].price_detail;

        if (this.pricing) {
          this.selectedPrice = this.pricing[0].final_price;
        }
        // this.redeemAllowed=this.pricing[0].is_redeemed_allowed;
        // this.couponAllowed=this.pricing[0].is_coupon_allowed;

        if (this.productList) {
          this.product_type = this.productList[0].product_type;
        }
        this.dataReceived = this.productList.length > 0;
        for (const prod of this.productList) {
          if (Number(prod.id) === Number(this.productId)) {
            this.product = prod;
            this.amountToPay = this.isdrr
              ? this.product.price_detail[0].special_price
              : this.product.price_detail[0].final_price;
            this.final_price = this.amountToPay;
            this.currency = this.getCurrencySign();
            this.redeemAllowed = this.product.is_redeemed_allowed;
            this.couponAllowed = this.product.is_coupon_allowed;

            if (this.couponAllowed || this.redeemAllowed) {
              if (this.couponValue) {
                this.validateCoupon();
              }
            }

            // this.productOwnedCheck();
            break;
          }
        }

        // if (this.product_type === 12) {
        this.redeemAllowed = this.pricing[0].is_redeemed_allowed;
        this.couponAllowed = this.pricing[0].is_coupon_allowed;
        this.priceId = this.pricing[0].product_price_id;
        // }

        this.paramsReceived = true;
        this.isLoading = false;
        this._amps.setAmplitudeEvents(events.event_11, {
          success: 'yes',
          category: this.productList[0].category_id === 1 ? 'chess' : 'cricket',
          author_name: this.productList[0].author_name,
          product_name: this.productList[0].name,
          final_price: this.pricing[0].final_price,
          base_price: this.pricing[0].base_price,
          sale_price: this.pricing[0].sale_price,
          special_price: this.pricing[0].special_price,
          currency: this.pricing[0].currency,
          productType: this.getProductTypeName(
            this.productList[0].product_type
          ),
        });

        this._seoService.addProductDescMetaTag(
          this.product.name,
          this.product.description.substring(0, 101),
          window.location.href,
          this.product.image_url
        );
      },
      (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.dataReceived = false;
        this._amps.setAmplitudeEvents(events.event_11, {
          success: 'no',
          error: err,
          productType: this.getProductTypeName(this.product_type),
        });
      }
    );
  }

  focusOnEmail() {
    this.email_form.reset();
    this.newMobileNumber = '';
    document.getElementById('email_to_verify').focus();
  }

  // productOwnedCheck() {
  //   if (this.isUserLoggedIn) {
  //     this.isProductOwnedByTheUser =
  //       this.amountToPay === 0 && !this.couponAllowed;
  //   }
  // }

  enterPress(event) {
    if (event.keyCode === 13) {
      this.verfiyEmailId();
    }
  }

  canApplyCoupon() {
    return (
      (this.email_form.value.email ? this.showChangeEmailMessage : false) ||
      (this.formStatus ? this.form.valid : false)
    );
  }

  getUserMobileNumber(value: any) {
    this.mobileCountryCode = this.removePlusSignFromMobileCode(
      value.mobile_code
    );
    this.mobileNumber = value.mobile_number;
  }

  removePlusSignFromMobileCode(code: any) {
    return code.replace('+', '');
  }

  setNewMobileNumber(value: any) {
    this.showError = false;
    this.newMobileNumber =
      value.mobile_code.replace('+', '') + '' + value.mobile_number;
  }

  verifyMobileNumber() {
    if (this.newMobileNumber === null || this.newMobileNumber === undefined) {
      this.showError = true;
    } else {
      this.verfiyEmailId();
    }
  }

  RequestProduct() {
    window.open('https://nurtr.typeform.com/to/Qc4Wh7', '_blank');
  }
}
