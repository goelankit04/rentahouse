import { LoginComponent } from './../../auth/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './../../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  Component,
  OnInit,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { IpService } from '../../auth/ip.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserActivityService } from '../../app-common/user-activity.service';
import { CountryCodeService } from '../../app-common/country_code.service';
import { countries } from '../../app-common/configuration/countries.config';
import { Message } from './../../../../src/app/app-common/message';
import { DomSanitizer } from '@angular/platform-browser';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { AmplitudeService } from '../../amplitude/amplitude.service';
import { events } from '../../amplitude/events';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailComponent implements OnInit {
  @HostBinding('class') ProductDetailComponentClass = 'app-product-detail';
  maxDate = new Date();

  // add 'agent' as activated param for agent_id

  requisite = '';
  showData = false;
  productId: Number;
  productType: Number;
  pricing: any;
  form: FormGroup;
  priceId: any;
  productData: any;
  categoryId: Number;
  id: any;
  final_price: any;
  parent_product_id: any;
  selectedPrice: any;
  controlValue: any;
  payNow: any;
  successMessages: Array<string> = [];
  errorMessages: Array<string> = [];
  controlVal: any;
  selectedGender: any;
  eventRegistered: any;
  selectedCountry = {
    name: 'India',
    code: 'IN',
    mobile_code: '+91',
    mobile_length: [10],
  };
  showCountrySelector = false;
  showCountryBox = false;
  countryDetail = {
    name: '',
    code: '',
  };
  // price:any;
  getCurrency: any;
  checkBox: any;
  checkBoxes: any;
  controlValueDropdown: any;
  filteredStates = [];
  filteredCountry = [];
  errName: any;
  showAllValidation: boolean;
  errLastname: any;
  mobile: any;
  email: any;
  description: any;
  username: any;
  guardian: any;
  age: any;
  gender: any;
  state: any;
  country: any;
  pincode: any;
  city: any;
  flat: any;
  choice: any;
  price: any;
  tags: any;
  agent: String;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _matDialog: MatDialog,
    private _ipService: IpService,
    private _userActivity: UserActivityService,
    private _fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private _amps: AmplitudeService
  ) {}

  // getAllActiveProducts
  ngOnInit() {
    this._userActivity.logUserActivity('event-register');

    this.filteredStates = countries;
    this.filteredCountry = countries;

    // this._ipService.getUserInfo().subscribe(
    //   (res: any) => {
    //     // finding country
    //     const country_ip = countries.filter((country) => (country.country_name === res.country));
    //     if (country_ip) {
    //       this.selectCountry(country_ip);
    //     }
    //   },
    //   (err: any) => {
    //     // console.log(err);
    //   }
    // );

    this._activatedRoute.params.subscribe((params) => {
      this.categoryId = Number(params.categoryId);
      this.productType = params.productType;
      this.productId = Number(params.productId);
    });

    this._activatedRoute.queryParams.subscribe((params) => {
      this.agent = params ? params.agent : null;
    });

    this._authService
      .getProductDetailById({
        categoryId: 1,
        productType: this.productType,
        productId: this.productId,
        userId: localStorage.getItem('id'),
        country:
          localStorage.getItem('country') !== null
            ? localStorage.getItem('country')
            : 'India',
      })
      .subscribe((res: any) => {
        this.productData = res.data.product;
        this.description = this.sanitizer.bypassSecurityTrustHtml(
          this.productData.description
        );
        // console.log(this.productData, "fetching data ");
        this.tags = this.productData.tags;
        this.parent_product_id = res.data.product.parent_product_id;
        this.pricing = this.productData.price_detail;
        if (this.pricing) {
          this.selectedPrice = this.pricing[0].final_price;
          this.priceId = this.pricing[0].product_price_id;
          this.getCurrency = this.pricing[0].currency;
        }
        this.showData = true;
        this.requisite = this.productData.pre_requisite;
      });

    this.createForm();
    if (this.productType == 11) {
      this.control();
    }
  }

  removePlusSignFromMobileCode(code: any) {
    return code.replace('+', '');
  }

  selectCountryCode(country: any) {
    this.selectedCountry.name = country.country_name;
    this.selectedCountry.code = country.country_code;
    this.selectedCountry.mobile_code = country.mobile_country_code;
    this.selectedCountry.mobile_length =
      country.country_mobile_length[0] === undefined
        ? 10
        : country.country_mobile_length[0];
    this.toggleCountrySelector();
  }

  // show country box in mobile
  toggleCountrySelector() {
    this.showCountrySelector = !this.showCountrySelector;
  }

  // country suggestions for mobile
  getCountrySuggestion(countryInput: string) {
    this.filteredStates = countries.filter(
      (country) =>
        country.country_name.toLowerCase().indexOf(countryInput.toLowerCase()) >
        -1
    );
  }

  // country suggestions for country
  searchCountryForDropDown(countryName: string) {
    this.showCountryBox = true;
    this.filteredCountry = countries.filter(
      (country) =>
        country.country_name.toLowerCase().indexOf(countryName.toLowerCase()) >
        -1
    );
    this.countryDetail.code = null;
  }

  // selecting user country
  selectCountry(country: any) {
    this.countryDetail.name = country.country_name;
    this.countryDetail.code = country.country_code;
    this.form.controls.country.setValue(this.countryDetail.name);
    this.showCountryBox = false;
    this.countrySelectApi();
  }

  countrySelectApi() {
    this._authService
      .getProductDetailById({
        country: this.countryDetail.name,
        isDrr: false,
        productId: this.productId,
        productType: this.productType,
        priceId: this.priceId,
      })
      .subscribe((res: any) => {
        this.productData = res.data.product;
        this.pricing = this.productData.price_detail;
        if (this.pricing) {
          this.final_price = this.pricing[0].final_price;
          this.priceId = this.pricing[0].product_price_id;
          this.getCurrency = this.pricing[0].currency;
          // console.log(this.getCurrency,"cccccccccccccccccc")
        }
      });
  }

  gotoCheckout() {
    // logging in the user activity
    this._userActivity.logUserActivity('product-detail-buy', this.productId);

    if (!this._authService.isUserLoggedIn()) {
      this._router.navigateByUrl(`/direct?product=${this.productId}`);
    } else {
      this._router.navigateByUrl(
        `payment/checkout/${this.categoryId}/${this.productType}/${this.productId}`
      );
    }
  }

  selectedPrices(price) {
    this.id = price.id;
    this.final_price = price.final_price;
    this.priceId = price.product_price_id;
    // this.getCurrency=this.pricing[0].currency;
  }

  getCurrencySign(price: any) {
    return price === undefined
      ? localStorage.getItem('country').toLowerCase() === 'india'
        ? 'fa-inr'
        : 'fa-usd'
      : price.currency === undefined
      ? 'fa-usd'
      : price.currency === 'usd'
      ? 'fa-usd'
      : 'fa-inr';

    // if (!this.countryDetail.name) {
    //   // return ( this.form === undefined ? localStorage.getItem('country') : this.form.value.country ).toLocaleLowerCase().trim() === 'india' ? 'fa-inr' : 'fa-usd';
    //   return localStorage.getItem('country') === null ? 'fa-inr' : localStorage.getItem('country').toLocaleLowerCase().trim() === 'india' ? 'fa-inr' : 'fa-usd';
    // } else if (this.countryDetail.name === 'India') {
    //   return 'fa-inr';
    // } else {
    //   return 'fa-usd';
    // }
  }

  onSelectionChange(gender) {
    // console.log(gender)
    this.selectedGender = gender;
  }

  createForm() {
    this.form = this._fb.group({
      first_name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z. ]+$/),
      ]),

      last_name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z. ]+$/),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      emailId: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      accommodations: new FormControl('', [Validators.required]),
      // accommodation: new FormControl(""),
      mobile_country_code: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[+ 0-9]+$/),
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern(/[0-9]/),
      ]),
      tnsca_id: new FormControl(''),
      tnsca_paid_at: new FormControl(''),
      aicf_id: new FormControl('', [Validators.required]),
      mpca_id: new FormControl('', [Validators.required]),

      alternative_mobile: new FormControl('', [Validators.pattern(/[0-9]/)]),
      whatsapp_number: new FormControl('', [Validators.pattern(/[0-9]/)]),
      fide_rating: new FormControl('', [
        Validators.required,
        Validators.pattern(/[0-9]/),
      ]),
      college: new FormControl(''),
      guardian_name: new FormControl('', [Validators.required]),
      fide_id: new FormControl('', [
        Validators.required,
        Validators.pattern(/[0-9]/),
      ]),
      dob: new FormControl('', [Validators.required]), // gender: new FormControl(''),

      // Shipping Address
      landmark: new FormControl('', [Validators.required]),
      city: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z. ]+$/),
      ]),
      state: new FormControl('', [
        Validators.required,
        ,
        Validators.pattern(/^[A-Za-z. ]+$/),
      ]),
      zipcode: new FormControl('', [
        Validators.maxLength(12),
        Validators.required,
        ,
        Validators.pattern(/[0-9]/),
      ]),
      country: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z. ]+$/),
      ]),
      gender: new FormControl('', [Validators.required]),
      age_category: new FormControl('', [Validators.required]),
      // Billing Address
      // billing_street_address: new FormControl(''),
      // billing_landmark: new FormControl(''),
      // billing_city: new FormControl('', [
      //   Validators.pattern(/^[A-Za-z. ]+$/)
      // ]),
      // billing_state: new FormControl('', [
      //   ,
      //   Validators.pattern(/^[A-Za-z. ]+$/)
      // ]),
      // billing_zipcode: new FormControl('', [Validators.pattern(/[0-9]/)]),
      // billing_country: new FormControl('', [
      //   Validators.pattern(/^[A-Za-z. ]+$/)
      // ]),

      // social media links
      facebook_url: new FormControl(''),
      twitter_url: new FormControl(''),
      linkedin_url: new FormControl(''),
      instagram_url: new FormControl(''),
    });
  }

  control() {
    const data = {
      eventId: this.productId,
    };

    this._authService.controls(data).subscribe((res: any) => {
      this.controlValue = res.data.data;
      // console.log(this.controlValue)
      if (this.controlValue) {
        this.controlValueDropdown = this.controlValue[0].control_values;
        // console.log(this.controlValueDropdown)
        // for (let i=0; i<=this.controlValue.length;i++){
        //  this.controlValue=this.controlValue
        // }
      }
    });
  }

  clickCheckbox(value) {
    // console.log(value,"boolean")

    this.checkBox = value;
    // value=!value
  }

  clickCheckboxes(value) {
    this.checkBoxes = value;
  }

  getErrorMessage(choice: string) {
    this.choice = choice;
    switch (this.choice) {
      case 'first_name': {
        return this.form.controls.first_name.hasError('required')
          ? Message.required
          : this.form.controls.first_name.hasError('pattern')
          ? Message.firstName.invalid
          : '';
      }
      case 'guardian_name': {
        return this.form.controls.guardian_name.hasError('required')
          ? Message.required
          : this.form.controls.guardian_name.hasError('pattern')
          ? Message.guardian_name.invalid
          : '';
      }
      case 'gender': {
        return this.form.controls.gender.hasError('required')
          ? Message.required
          : '';
      }
      case 'last_name': {
        return this.form.controls.last_name.hasError('required')
          ? Message.required
          : this.form.controls.last_name.hasError('pattern')
          ? Message.lastName.invalid
          : '';
      }
      case 'email': {
        return this.form.controls.email.hasError('required')
          ? Message.required
          : this.form.controls.email.hasError('pattern')
          ? Message.email.invalid
          : '';
      }
      case 'emailId': {
        return this.form.controls.email.hasError('required')
          ? Message.required
          : this.form.controls.email.hasError('pattern')
          ? Message.email.invalid
          : '';
      }
      case 'mobile_country_code': {
        return this.form.controls.mobile_country_code.hasError('required')
          ? 'Required'
          : this.form.controls.mobile_country_code.hasError('pattern')
          ? Message.mobileCountryCode.invalid
          : '';
      }
      case 'mobile': {
        return this.form.controls.mobile.hasError('required')
          ? Message.required
          : // : this.form.controls.mobile.hasError('leastAlphabet')
          //   ? Message.mobile.leastAlphabet
          //   : this.form.controls.mobile.hasError('leastSpecialChar')
          //     ? Message.mobile.leastSpecialChar
          this.form.controls.mobile.hasError('minimumLength')
          ? Message.mobile.minimumLength
          : this.form.controls.mobile.hasError('pattern')
          ? Message.mobile.invalid
          : '';
      }
      case 'whatsapp_number': {
        return this.form.controls.whatsapp_number.hasError('required')
          ? Message.required
          : this.form.controls.whatsapp_number.hasError('leastAlphabet')
          ? Message.mobile.leastAlphabet
          : this.form.controls.whatsapp_number.hasError('leastSpecialChar')
          ? Message.mobile.leastSpecialChar
          : this.form.controls.whatsapp_number.hasError('minimumLength')
          ? Message.mobile.minimumLength
          : '';
      }
      case 'fide_rating': {
        return this.form.controls.fide_rating.hasError('required')
          ? Message.required
          : this.form.controls.fide_rating.hasError('pattern')
          ? Message.rating.invalid
          : '';
      }
      case 'fide_id': {
        return this.form.controls.fide_id.hasError('required')
          ? Message.required
          : this.form.controls.fide_id.hasError('pattern')
          ? Message.rating.invalid
          : '';
      }
      case 'aicf_id': {
        return this.form.controls.aicf_id.hasError('required')
          ? Message.required
          : this.form.controls.aicf_id.hasError('pattern')
          ? Message.rating.invalid
          : '';
      }
      case 'mpca_id': {
        return this.form.controls.mpca_id.hasError('required')
          ? Message.required
          : this.form.controls.mpca_id.hasError('pattern')
          ? Message.rating.invalid
          : '';
      }
      // case "college": {
      //   return this.form.controls.college.hasError("required")
      //     ? Message.required
      //     : this.form.controls.college.hasError("pattern")
      //     ? Message.college_name.invalid
      //     : "";
      // }
      case 'dob': {
        return this.form.controls.dob.hasError('required')
          ? Message.required
          : this.form.controls.dob.hasError('pattern')
          ? Message.dateOfBirth.invalid
          : '';
      }

      // Shipping Address

      case 'shipping_street_address': {
        return this.form.controls.shipping_street_address.hasError('required')
          ? Message.required
          : '';
      }
      case 'landmark': {
        return this.form.controls.landmark.hasError('required')
          ? Message.required
          : '';
      }
      case 'city': {
        return this.form.controls.city.hasError('required')
          ? Message.required
          : '';
      }
      case 'state': {
        return this.form.controls.state.hasError('required')
          ? Message.required
          : '';
      }
      case 'zipcode': {
        return this.form.controls.zipcode.hasError('required')
          ? Message.required
          : this.form.controls.zipcode.hasError('pattern')
          ? Message.pincode.invalid
          : '';
      }
      case 'country': {
        return this.form.controls.country.hasError('required')
          ? Message.required
          : '';
      }

      // Billing Address

      case 'billing_street_address': {
        return this.form.controls.billing_street_address.hasError('required')
          ? Message.required
          : '';
      }
      case 'billing_landmark': {
        return this.form.controls.billing_landmark.hasError('required')
          ? Message.required
          : '';
      }
      case 'billing_city': {
        return this.form.controls.billing_city.hasError('required')
          ? Message.required
          : '';
      }
      case 'billing_state': {
        return this.form.controls.billing_state.hasError('required')
          ? Message.required
          : '';
      }
      case 'billing_zipcode': {
        return this.form.controls.billing_zipcode.hasError('required')
          ? Message.required
          : '';
      }
      case 'age_category': {
        return this.form.controls.age_category.hasError('required')
          ? Message.required
          : '';
      }
      case 'billing_country': {
        return this.form.controls.billing_country.hasError('required')
          ? Message.required
          : '';
      }

      default: {
        // No error message to display
      }
    }
  }

  changeControl(event) {
    // console.log(event.target.value,"control")
    this.controlVal = event.target.value;
  }

  verfiyEmailId() {
    // this.userEmail = this.email_form.value.email;
    // this.isLoading = true;

    const data = {
      email: this.form.value.emailId,
      productId: this.productId,
    };

    this._authService.isUserExistsWithEvent(data).subscribe((res: any) => {
      this.payNow = res.data.info;

      this.eventRegistered = res.data.registered;
      if (this.eventRegistered === true) {
        this.username = this.payNow.first_name;
        // send all data to form
        // console.log(this.payNow);
        this.form.controls['first_name'].setValue(this.payNow.first_name);
        this.form.controls['last_name'].setValue(this.payNow.last_name);
        this.form.controls['fide_id'].setValue(this.payNow.fide_id);
        this.form.controls['fide_rating'].setValue(this.payNow.fide_rating);
        this.form.controls['gender'].setValue(this.payNow.gender);
        this.form.controls['dob'].setValue(this.payNow.dob);
        this.form.controls['guardian_name'].setValue(this.payNow.guardian_name);
        this.form.controls['email'].setValue(this.payNow.email);
        this.form.controls['age_category'].setValue(this.payNow.age_category);
        this.form.controls['college'].setValue(this.payNow.college);
        this.form.controls['mobile'].setValue(this.payNow.mobile);
        this.form.controls['aicf_id'].setValue(this.payNow.aicf_id);
        this.form.controls['landmark'].setValue(
          this.payNow.shipping_address.landmark
        );
        this.form.controls['district'].setValue(
          this.payNow.shipping_address.district
        );
        this.form.controls['city'].setValue(this.payNow.shipping_address.city);
        this.form.controls['state'].setValue(
          this.payNow.shipping_address.state
        );
        this.form.controls['country'].setValue(
          this.payNow.shipping_address.country
        );
      } else {
        const temp = this.form.controls['emailId'].value;
        this.form.reset();
        this.form.controls['emailId'].setValue(temp);
      }
    });
  }

  makePayment() {
    if (
      (this.tags === 'chess'
        ? this.form.value.aicf_id &&
          this.form.value.fide_id &&
          this.form.value.first_name &&
          this.form.value.fide_rating
        : this.form.value.first_name) &&
      this.form.value.last_name &&
      this.selectedGender &&
      this.form.value.guardian_name &&
      this.form.value.mobile &&
      this.form.value.email &&
      this.form.value.landmark &&
      this.form.value.state &&
      this.form.value.city &&
      this.form.value.zipcode &&
      this.form.value.country &&
      this.form.value.dob &&
      this.checkBox
    ) {
      this.showData = false;

      // this._userActivity.logUserActivity('pay-now', this.productId);
      const data = {
        categoryId: Number(this.categoryId),
        productType: Number(this.productType),
        productId: this.productId,
        product_id: Number(this.productId),
        parent_product_id: Number(this.parent_product_id),
        couponCode: '',
        isRedeemedAllowed: '',
        register_source: 'website',
        priceId: this.priceId,
        user_id: localStorage.getItem('id'),
        first_name: this.form.value.first_name,
        // accommodation: this.checkBoxes,
        last_name: this.form.value.last_name,
        email: this.form.value.email,
        age_category: this.controlVal,
        mobile:
          this.removePlusSignFromMobileCode(this.selectedCountry.mobile_code) +
          this.form.value.mobile,
        // mobile_country_code: this.form.value.mobile_country_code,
        // mobile: this.form.value.mobile,
        alternative_mobile: this.form.value.alternative_mobile,
        mobile_country_code: this.removePlusSignFromMobileCode(
          this.selectedCountry.mobile_code
        ),
        whatsapp_number: this.form.value.whatsapp_number,
        fide_rating:
          this.form.value.fide_rating === '0'
            ? 'N/A'
            : this.form.value.fide_rating,
        fide_id:
          this.form.value.fide_id === '0' ? 'N/A' : this.form.value.fide_id,
        college: this.form.value.college,
        guardian_name: this.form.value.guardian_name,
        dob: this.form.value.dob,
        tnsca_id: this.form.value.tnsca_id,
        tnsca_paid_at: this.form.value.tnsca_paid_at,
        aicf_id:
          this.form.value.aicf_id === '0' ? 'N/A' : this.form.value.aicf_id,
        mpca_id:
          this.form.value.mpca_id === '0' ? 'N/A' : this.form.value.mpca_id,
        password: 'qaz@123',
        gender: this.selectedGender,
        shipping_address: {
          // street_address: this.form.value.shipping_street_address,
          landmark: this.form.value.landmark,
          city: this.form.value.city,
          country: this.form.value.country,
          state: this.form.value.state,
          zipcode: this.form.value.zipcode,
        },
        created_by: this.agent,
      };

      this._authService.directRegisterLink(data).subscribe(
        (res: any) => {
          this._amps.setUserId(this.form.value.email.toLowerCase());

          this._amps.setAmplitudeEvents(events.event_9, {
            success: 'yes',
            email: this.form.value.email,
            category: this.tags,
            product_name: this.productData.name,
            final_price: this.pricing[0].final_price,
            base_price: this.pricing[0].base_price,
            sale_price: this.pricing[0].sale_price,
            special_price: this.pricing[0].special_price,
            currency: this.pricing[0].currency,
            productType: 'Event Room',
          });

          this._amps.setAmplitudeEvents(events.event_22, {
            categoryId: Number(this.categoryId),
            productType: Number(this.productType),
            productId: Number(this.productId),
            register_source: 'website',
            priceId: this.priceId,
            email: this.form.value.email,
            age_category: this.controlVal,
            fide_rating:
              this.form.value.fide_rating === '0'
                ? 'N/A'
                : this.form.value.fide_rating,
            college: this.form.value.college,
            gender: this.selectedGender,
            landmark: this.form.value.landmark,
            city: this.form.value.city,
            country: this.form.value.country,
            state: this.form.value.state,
            zipcode: this.form.value.zipcode,
            product_name: this.productData.name,
            author_name: this.productData.author_name,
            event_location: this.productData.venue.location,
            event_city: this.productData.venue.city,
            event_state: this.productData.venue.state,
            event_country: this.productData.venue.country,
            duration: this.productData.duration,
          });
          this.showData = true;
          // console.log(res,"response")
          if (res.data.paymentStatus == 1) {
            this._router.navigateByUrl(
              `payment/status/${res.data.orderId}/${res.data.transactionId}`
            );
          } else {
            location.href = res.data.url;
          }
        },
        (error) => {
          this.showData = true;
          // console.log(error);
        }
      );
    } else {
      this.showAllValidation = true;
      window.scrollTo(0, 0);
      this.getErrorMessage(this.choice);
    }
  }
}
