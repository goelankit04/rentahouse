import { Component, OnInit, HostBinding, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CountryCodeService } from '../../app-common/country_code.service';
import { AmplitudeService } from '../../amplitude/amplitude.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../auth/auth.service';
import { events } from '../../amplitude/events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html'
})
export class RegisterUserComponent implements OnInit {
  @HostBinding('class') RegisterUserComponentClass = 'app-register-user';

  form: FormGroup;
  payment: FormGroup;

  countries: Array<any>;
  mobileCountryCode: string;
  mobileNumber: string;

  @Input() data: any;

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

  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private _country: CountryCodeService,
    private _amps: AmplitudeService,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.createFrom();
    this.countries = this._country.getCountry();
    // console.log(this.data);
  }

  createFrom() {
    this.form = this._fb.group(
      {
        first_name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z. ]+$/)]),
        last_name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
        city: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z. ]+$/)]),
        country: new FormControl('', [Validators.required])
      },
      {
        validator: [RegisterUserComponent.passwordValidator('password')]
      }
    );
  }

  filterCountries(name: string): any {
    return this.countries.filter(
      country => country.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  }

  getErrorMessage(choice: string) {
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

  getUserMobileNumber(value: any) {
    this.mobileCountryCode = this.removePlusSignFromMobileCode(value.mobile_code);
    this.mobileNumber = value.mobile_number;
  }

  removePlusSignFromMobileCode(code: any) {
    return code.replace('+', '');
  }

  registerUser() {
    const userData = {
      first_name: this.form.controls.first_name.value,
      last_name: this.form.controls.last_name.value,
      email: this.data.email,
      mobile: this.mobileCountryCode + this.mobileNumber,
      mobile_country_code: this.mobileCountryCode,
      password: this.form.controls.password.value,
      priceId: 1525,
      shipping_address: {
        street_address: null,
        landmark: null,
        city: this.form.controls.city.value,
        state: null,
        country: this.form.value.country,
        zip_code: null
      },
      permanent_address: {
        street_address: null,
        landmark: null,
        city: this.form.controls.city.value,
        state: null,
        country: this.form.value.country,
        zip_code: null
      },
      source_id: 2,
      created_by: null,
      categoryId: 1,
      couponCode: null,
      isRedeemedAllowed: null,
      productType: this.data.productType,
      productId: this.data.productId,
      // currency: 'inr'
    };

    this._authService.directRegisterLink(userData).subscribe(
      (res: any) => {

        // this._amps.setAmplitudeEvents(events.event_9, {
        //   success: 'yes',
        //   coupon: this.payment.value.coupon_value,
        //   isRedeemed: this.payment.value.isRedeemed,
        //   email: this.data.email,
        //   category: 'chess',
        //   author_name: this.productList[0].author_name,
        //   product_name: this.productList[0].name,
        //   final_price: this.pricing[0].final_price,
        //   base_price: this.pricing[0].base_price,
        //   sale_price: this.pricing[0].sale_price,
        //   special_price: this.pricing[0].special_price,
        //   currency: this.pricing[0].currency,
        //   productType: this.getProductTypeName(this.productList[0].product_type),
        // });

        // this._amps.setUserId(this.form.value.email.toLowerCase());

        // if (!this.userAvailable) {
        //   this._amps.setAmplitudeEvents(events.event_3, {
        //     success: 'yes'
        //   });
        // }

        //   this._amps.setAmplitudeEvents(events.event_21,{
        //     success: 'yes',
        //     coupon: this.payment.value.coupon_value,
        //     isRedeemed: this.payment.value.isRedeemed,
        //     email: this.userEmail,
        //     category: this.productList[0].category_id === 1 ? 'chess' : 'cricket',
        //     author_name: this.productList[0].author_name,
        //     product_name: this.productList[0].name,
        //     final_price: this.pricing[0].final_price,
        //     base_price: this.pricing[0].base_price,
        //     sale_price: this.pricing[0].sale_price,
        //     special_price: this.pricing[0].special_price,
        //     currency: this.pricing[0].currency,
        //     productType: this.getProductTypeName(this.productList[0].product_type)
        // });

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
        // this.isLoading = false;
        // this._amps.setAmplitudeEvents(events.event_9, {
        //   success: 'no',
        //   error: err,
        //   email: this.userEmail,
        //   coupon: this.payment.value.coupon_value,
        //   isRedeemed: this.payment.value.isRedeemed,
        //   category: this.productList[0].category_id === 1 ? 'chess' : 'cricket',
        //   author_name: this.productList[0].author_name,
        //   product_name: this.productList[0].name,
        //   final_price: this.pricing[0].final_price,
        //   base_price: this.pricing[0].base_price,
        //   sale_price: this.pricing[0].sale_price,
        //   special_price: this.pricing[0].special_price,
        //   currency: this.pricing[0].currency,
        //   productType: this.getProductTypeName(this.productList[0].product_type)
        // });
      }
    );
  }

}
