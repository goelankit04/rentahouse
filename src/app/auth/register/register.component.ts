import { ToasterService } from 'angular2-toaster';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  Component,
  HostBinding,
  OnInit,
  Inject,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { UserModel } from '../../user/model/user.model';
import { AuthService } from '../auth.service';
import { Message } from '../../app-common/message';
import { CountryCodeService } from '../../app-common/country_code.service';
import { countries } from '../../app-common/configuration/countries.config';
import { IpService } from '../ip.service';
import { AmplitudeService } from '../../amplitude/amplitude.service';
import { events } from '../../amplitude/events';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  @HostBinding('class') registerComponentClass = 'app-register';

  form: FormGroup;
  userId: any;
  intervalId: any;

  selectedCountry = {
    name: 'India',
    code: 'IN',
    mobile_code: '+91',
    mobile_length: [10]
  };
  countryDetail = {
    name: '',
    code: ''
  };
  socialLogin = [
    {
      name: 'Facebook',
      icon: '',
      className: 'facebook'
    },
    {
      name: 'Google',
      icon: '',
      className: 'google_plus'
    }
  ];

  filteredStates = [];
  filteredCountry = [];

  showCountrySelector = false;
  showCountryBox = false;
  isLoading = false;
  isInvalidCountry = false;
  mobileVerification = false;
  showOTPTimer = false;
  showChangeMobileView = false;
  canSubmitOTP = false;

  error_message: any;
  errMessage: any;
  mobileNumber: any;
  otpRequestMessage = null;
  timer: string;
  product_id = 35;
  categoryId = 1;
  error_message_mobile: string;

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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _ipApi: IpService,
    public dialogRef: MatDialogRef<RegisterComponent>,
    public snackBar: MatSnackBar,
    public country: CountryCodeService,
    public _toasterService: ToasterService,
    private _amps: AmplitudeService
  ) { }

  ngOnInit() {
    this.createForm();
    this.filteredStates = countries;
    this.filteredCountry = countries;

    this._ipApi.getUserInfo().subscribe(
      (res: any) => {
        // finding country
        const country_ip = countries.filter(
          country => country.country_name === res.country
        );
        if (country_ip) {
          this.selectCountry(country_ip);
        }
      },
      (err: any) => {
        // console.log(err);
      }
    );
    // this.register();
  }

  private createForm() {
    this.form = this.fb.group(
      {
        first_name: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[A-Za-z. ]+$/)
        ]),
        last_name: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[A-Za-z]+$/)
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ]),
        mobile: new FormControl('', [
          Validators.required,
          Validators.pattern(/\d{4,18}[0-9]$/)
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
          )
        ]),
        country: new FormControl('', [Validators.required])
      },
      {
        validator: [RegisterComponent.passwordValidator('password')]
      }
    );
  }

  filterStates(country_name: string) {
    return this.country.getFilteredCountry(country_name);
  }

  getErrorMessage(choice: string) {
    // resetting error message
    // this.errMessage = null;

    switch (choice) {
      case 'first_name': {
        return this.form.controls.first_name.hasError('required')
          ? Message.required
          : this.form.controls.first_name.hasError('pattern')
            ? Message.firstName.invalid
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
            : this.form.controls.email.hasError('exists')
              ? Message.email.exists
              : '';
      }
      case 'mobile': {
        return this.form.controls.mobile.hasError('required')
          ? Message.required
          : this.form.controls.mobile.hasError('pattern')
            ? Message.mobile.invalid
            : '';
      }
      case 'password': {
        return this.form.controls.password.hasError('required')
          ? Message.required
          : this.form.controls.password.hasError('leastAlphabet')
            ? Message.password.leastAlphabet
            : this.form.controls.password.hasError('leastNumber')
              ? Message.password.leastNumber
              : this.form.controls.password.hasError('leastSpecialChar')
                ? Message.password.leastSpecialChar
                : this.form.controls.password.hasError('minimumLength')
                  ? Message.password.minimumLength
                  : '';
      }
      default: {
        // No error message to display
      }
    }
  }

  register() {
    if (this.form.status === 'VALID') {
      this.isLoading = true;

      // saving mobile number for OTP verification
      this.mobileNumber = this.form.value.mobile;

      const user = {
        first_name: this.form.value.first_name,
        last_name: this.form.value.last_name,
        email: this.form.value.email.toLowerCase(),
        mobile:
          this.removePlusSignFromMobileCode(this.selectedCountry.mobile_code) +
          this.form.value.mobile,
        mobile_country_code: this.removePlusSignFromMobileCode(
          this.selectedCountry.mobile_code
        ),
        password: this.form.value.password,
        shipping_address: {
          country: this.form.value.country
        },
        permanent_address: {
          country: this.form.value.country
        }
      };

      this._authService.registerUser(user).subscribe(
        (res: any) => {
          this.isLoading = false;
          this.userId = res.data.userId;
          this.canSubmitOTP = true;
          this.errMessage = null;

          // Mobile Verification process starts here
          this.mobileOtpTimer(res);
          this._amps.setUserId(this.form.value.email.toLowerCase());
          this._amps.setAmplitudeEvents(events.event_3, {
            success: 'yes',
            email: this.form.value.email.toLowerCase(),
            country: this.form.value.country
          });
        },
        (err: HttpErrorResponse) => {
          this.isLoading = false;
          this.canSubmitOTP = false;
          this.errMessage = err.error.message;
          this._amps.setAmplitudeEvents(events.event_3, {
            success: 'no',
            error: err.error.message,
            email: this.form.value.email.toLowerCase(),
            country: this.form.value.country
          });
        }
      );
    }
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
      country =>
        country.country_name.toLowerCase().indexOf(countryInput.toLowerCase()) >
        -1
    );
  }

  // country suggestions for country
  searchCountryForDropDown(countryName: string) {
    this.showCountryBox = true;
    this.filteredCountry = countries.filter(
      country =>
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
  }

  // form Validation
  getValidationStatus() {
    return this.form.valid ? this.countryDetail.code !== null : false;
  }

  removePlusSignFromMobileCode(code: any) {
    return code.replace('+', '');
  }

  // verifies OTP
  verifyMobileOTP(enteredOtp: string) {
    this.isLoading = true;
    this._authService
      .verifyMobile({
        otp: enteredOtp,
        userId: this.userId
      })
      .subscribe(
        (res: any) => {
          this.isLoading = false;
          this.dialogRef.close();
          this._router.navigate([
            `/user/dashboard/${localStorage.getItem('first_name')}`
          ]);
          this._toasterService.pop('success', 'User registered successfully');
        },
        (error: any) => {
          this.isLoading = false;
          this.errMessage = error.error.message;
        }
      );
  }

  // Requests OTP again
  requestOtpAgain(typeOfRequest: string) {
    if (this.timer === '00:00') {
      this._authService.resendOTP(this.userId, typeOfRequest).subscribe(
        (res: any) => {
          this.canSubmitOTP = true;
          if (typeOfRequest === 'call') {
            this.otpRequestMessage = `You'll receive a call shortly`;
            this.resetTimer();
            clearInterval(this.intervalId);
            this.showOTPTimer = false;
          } else {
            this.otpRequestMessage = `You'll again receive a one time password shortly`;
            this.mobileOtpTimer(res);
          }
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
        }
      );
    }
  }

  // mobile OTP timer view
  mobileOtpTimer(res: any) {
    this.mobileVerification = true;

    // timer config
    const timerCountDown = res.data.seconds_to_expire;
    const miliSecondsOfCountDown = 1000;
    let minute = Math.floor(timerCountDown / 60);
    let second = Math.floor(timerCountDown - minute * 60);
    this.showOTPTimer = true;
    this.intervalId = setInterval(() => {
      if (this.showOTPTimer) {
        this.timer =
          (minute < 10 ? '0' + minute.toString() : minute.toString()) +
          ':' +
          (second < 10 ? '0' + second.toString() : second.toString());
        minute = second > 0 ? minute : minute > 0 ? --minute : 0;
        second = second > 0 ? --second : 59;
        this.showOTPTimer = this.timer !== '00:00';
        this.canSubmitOTP = true;
      }
    }, miliSecondsOfCountDown);

    // clearing the timer
    // if (this.timer === '00:00') {
    //   this.canSubmitOTP = false;
    //   this.showOTPTimer = false;
    //   clearInterval(this.intervalId);
    // }
  }

  // showing change-mobile view
  showChangeMobile() {
    this.showChangeMobileView = true;
    this.resetTimer();
    clearInterval(this.intervalId);
  }

  changeMobileNumber(change_mobile_number_input: string) {
    this._authService
      .updateMobile({
        mobile:
          this.removePlusSignFromMobileCode(this.selectedCountry.mobile_code) +
          change_mobile_number_input,
        userId: this.userId,
        mobile_country_code: this.removePlusSignFromMobileCode(
          this.selectedCountry.mobile_code
        )
      })
      .subscribe(
        (res: any) => {
          this.showChangeMobileView = false;
          this.canSubmitOTP = true;

          // updating mobile number
          this.mobileNumber = change_mobile_number_input;
          this.error_message_mobile = null;
          this.mobileOtpTimer(res);
        },
        (error: HttpErrorResponse) => {
          this.canSubmitOTP = false;
          this.error_message_mobile = error.error.message;
        }
      );
  }

  resetTimer() {
    this.timer = '00:00';
  }
}
