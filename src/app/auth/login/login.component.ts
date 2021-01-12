import { RegisterComponent } from '../register/register.component';
import { Component, HostBinding, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { Message } from '../../app-common/message';
import { HttpErrorResponse } from '@angular/common/http';
import { IpService } from '../ip.service';
import { countries } from '../../app-common/configuration/countries.config';
import { SocialLoginService } from '../../social-login/social-login.service';
import { UserActivityService } from '../../app-common/user-activity.service';
import { MobileOtpVerificationComponent } from '../../app-common/mobile-otp-verification/mobile-otp-verification.component';
import { AmplitudeService } from '../../amplitude/amplitude.service';
import { events } from '../../amplitude/events';
declare var amplitude: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  static mobileNumber: string = null;
  static emailID: string = null;
  static currentInputType: string;
  public static showAdditionalInput = false;

  @HostBinding('class')
  loginComponentClass = 'app-login';

  form: FormGroup;
  loginCompleter: FormGroup;

  socialLogin = [
    {
      name: 'Facebook',
      provider_key: 'facebook',
      icon: 'assets/facebook.svg',
      className: 'facebook',
    },
    {
      name: 'Google',
      provider_key: 'google',
      icon: 'assets/google.svg',
      className: 'google_plus',
    },
    {
      name: 'Twitter',
      provider_key: 'twitter',
      icon: 'assets/twitter.svg',
      className: 'twitter',
    },
  ];

  mobileNumerArray = [];

  userId: any;
  mobileNumberForVerifyMobile = 0;
  mobileCountryCodeForVerifyMobile = null;

  isLoading = false;
  showVerifyMobileDialog = false;
  isSchoolUser: boolean;

  errorMessages: string;
  categoryId = 1;
  user_city: string;
  user_country: string;
  // date={
  //   time: new Date()
  // }

  static userIdValidator(email: string) {
    return (group: FormGroup) => {
      const userId = group.controls[email];
      const isMobile = /^(\+\d{1,3}[-]?)?\d{10,18}$/.test(userId.value);
      const isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/i.test(
        userId.value
      );

      if (this.isSchoolDomain()) {
        LoginComponent.currentInputType = !LoginComponent.showAdditionalInput
          ? isMobile
            ? 'isMobile'
            : isEmail
            ? 'isEmail'
            : null
          : LoginComponent.currentInputType;

        if (!isMobile && !isEmail) {
          return userId.setErrors({ invalidValue: true });
        } else if (isMobile) {
          LoginComponent.mobileNumber = userId.value;
          return userId.setErrors(null);
        } else if (isEmail) {
          LoginComponent.emailID = userId.value;
          return userId.setErrors(null);
        } else {
          return userId.setErrors(null);
        }
      } else {
        LoginComponent.mobileNumber = null;
        return userId.setErrors(null);
      }
    };
  }

  static isSchoolDomain(): boolean {
    const websiteURL = window.location.href.split('//')[1].split('/')[0];
    const subDomain = websiteURL.split('.')[0];
    let domain = websiteURL.split('.')[1];
    if (domain === undefined) {
      domain = websiteURL.split(':')[0];
    }
    return subDomain === 'students'
      ? true
      : domain === 'testourwebsite' ||
          domain === 'localhost' ||
          domain === 'ngrok' ||
          domain === 'nurtr';
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    public dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog,
    public _ipApi: IpService,
    public _socialAuthService: SocialLoginService,
    private _userActivity: UserActivityService,
    private _amps: AmplitudeService
  ) {
    LoginComponent.showAdditionalInput = false;
    this.isSchoolUser = LoginComponent.isSchoolDomain();
  }

  ngOnInit() {
    this.createLoginForm();
    this._ipApi.getUserInfo().subscribe((res: any) => {
      this.user_city = res.city;
      this.user_country = res.country;
    });
  }

  createLoginForm() {
    this.form = this._fb.group(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ]),
        password: new FormControl('', [Validators.required]),
      },
      {
        validator: [LoginComponent.userIdValidator('email')],
      }
    );

    this.loginCompleter = this._fb.group(
      {
        additionalInput: new FormControl(''),
      },
      {
        validator: [LoginComponent.userIdValidator('additionalInput')],
      }
    );
  }

  getErrorMessage(choice: string) {
    switch (choice) {
      case 'email': {
        return this.form.controls.email.hasError('required')
          ? Message.required
          : LoginComponent.isSchoolDomain()
          ? this.form.controls.email.hasError('invalidValue')
            ? Message.invalid
            : ''
          : this.form.controls.email.hasError('pattern')
          ? Message.email.invalid
          : '';
      }
      case 'additionalInput': {
        return this.loginCompleter.controls.additionalInput.hasError('required')
          ? Message.required
          : this.loginCompleter.controls.additionalInput.hasError(
              'invalidValue'
            )
          ? Message.invalid
          : '';
      }
      default: {
        // No error message to display
      }
    }
  }

  userLogin() {
    if (this.form.controls.email.valid && this.form.value.password) {
      this.isLoading = true;

      if (
        LoginComponent.showAdditionalInput
          ? LoginComponent.currentInputType !== 'isMobile'
          : LoginComponent.currentInputType === 'isMobile'
      ) {
        // removing special character from mobile
        this.removeSpecialCharacterFromMobile();

        // getting user country info
        this._ipApi.getUserInfo().subscribe((res: any) => {
          const currentCountry: Array<any> = countries.filter(
            (country) =>
              country.country_name.toLowerCase() === res.country.toLowerCase()
          );

          LoginComponent.mobileNumber =
            LoginComponent.mobileNumber.length >
            currentCountry[0].country_mobile_length[0] // has country code in the mobile number
              ? LoginComponent.mobileNumber
              : currentCountry[0].mobile_country_code.toString() +
                LoginComponent.mobileNumber; // does not have country code in the mobile number

          // restting mobile number array
          this.mobileNumerArray = [];

          this.mobileNumerArray.push(Number(LoginComponent.mobileNumber));
          this.removeCountryCodeFromMobile(
            currentCountry[0].country_mobile_length[0]
          );
          this.mobileNumerArray.push(Number(LoginComponent.mobileNumber));

          this.sendUserLoginData();
        });
      } else {
        // email users
        this.sendUserLoginData();
      }
    }
  }

  // press enter on submit
  enterPress(event) {
    if (event.keyCode === 13) {
      this.userLogin();
    }
  }

  openForgotPasswordModal() {
    this.dialogRef.close();
    const config = new MatDialogConfig();
    config.height = window.screen.width < 630 ? '60%' : '300px';
    config.width = '350px';
    const forgot_dialogRef = this.dialog.open(ForgotPasswordComponent, config);
  }

  openRegisterForm() {
    this.dialogRef.close();

    const dialogRef = this.dialog.open(RegisterComponent, {
      width: window.innerWidth < 630 ? '90%' : '32em',
      height: window.innerHeight < 800 ? '92%' : '41em',
      autoFocus: false,
      data: {
        product_id: this.data.product_id, // product_type
        gateway: this.data.gateway, // product_id
      },
    });
  }

  removeCountryCodeFromMobile(mobileNumberLength: number) {
    // getting the actual mobile number while removing the country code
    while (
      LoginComponent.mobileNumber.length >= mobileNumberLength
        ? LoginComponent.mobileNumber.length !== mobileNumberLength
        : false
    ) {
      LoginComponent.mobileNumber = LoginComponent.mobileNumber.replace(
        LoginComponent.mobileNumber.charAt(0),
        ''
      );
    }
  }

  removeSpecialCharacterFromMobile() {
    // segregating the numbers
    let i = 0;
    while (i < LoginComponent.mobileNumber.length) {
      if (
        isNaN(Number(LoginComponent.mobileNumber[i])) ||
        LoginComponent.mobileNumber[i] === ' '
      ) {
        LoginComponent.mobileNumber = LoginComponent.mobileNumber.replace(
          LoginComponent.mobileNumber[i],
          ''
        );
      }
      i++;
    }
  }

  sendUserLoginData() {
    // logging in user
    const loginFormat = {
      isEmail:
        LoginComponent.currentInputType === 'isEmail'
          ? true
          : LoginComponent.showAdditionalInput,
      isMobile:
        LoginComponent.currentInputType === 'isMobile'
          ? true
          : LoginComponent.showAdditionalInput,
      email: LoginComponent.emailID,
      mobile: this.mobileNumerArray,
      password: this.form.value.password,
    };

    // console.log(loginFormat, LoginComponent.emailID);

    this._authService.loginUser(loginFormat).subscribe(
      (response: any) => {
        if (parseInt(response.data.is_mobile_verified) === 0) {
          localStorage.setItem(
            'is_mobile_verified',
            response.data.is_mobile_verified
          );
        }

        if (parseInt(response.data.reset_password_status) === 0) {
          localStorage.setItem(
            'resetPassword',
            response.data.reset_password_status
          );
        }

        this.isLoading = false;
        if (
          response.data.isUserMobileUnique !== undefined ||
          response.data.isUserEmailUnique !== undefined
            ? response.data.isUserMobileUnique === false ||
              response.data.isUserEmailUnique === false
            : false
        ) {
          // console.log('showing additional input');
          LoginComponent.showAdditionalInput = true;
          this.errorMessages = `Your ${
            LoginComponent.currentInputType === 'isMobile' ? 'Mobile' : 'Email'
          } is associated with one of another account, please enter your ${
            LoginComponent.currentInputType === 'isMobile'
              ? 'Email Id'
              : 'Mobile'
          } to continue`;
        } else {
          // logging activity on success
          this._userActivity.logUserActivity('user-login');

          this.dialogRef.close();
          if (this.data.gateway > 0) {
            switch (this.data.product_id) {
              case 1: {
                this._router.navigateByUrl(
                  `/user/dashboard/${localStorage.getItem('first_name')}`
                );
                break;
              }
              case 2: {
                this._router.navigateByUrl(
                  `/user/class-room/${localStorage.getItem('first_name')}`
                );
                break;
              }
              case 3: {
                this._router.navigateByUrl(
                  `/user/live-room/${localStorage.getItem('first_name')}`
                );
                break;
              }
              case 6: {
                this._router.navigateByUrl(
                  `/user/camp-room/${localStorage.getItem('first_name')}`
                );
                break;
              }
              default: {
                // this._router.navigate(['/direct'], { queryParams: { product:cardId, productType: this.cardData.product_type } });

                this._router.navigateByUrl(
                  `/payment/checkout/${this.categoryId}/${this.data.product_id}/${this.data.gateway}`
                );
              }
            }
          } else {
            this._router.navigate([
              `/user/dashboard/${localStorage.getItem('first_name')}`,
            ]);
          }
          this._amps.setUserId(LoginComponent.emailID.toLowerCase());
          this._amps.setAmplitudeEvents(events.event_2, {
            success: 'yes',
            login_source: 'Direct',
            email: LoginComponent.emailID,
          });
        }
      },
      (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.errorMessages = err.error.message;
        this._amps.setAmplitudeEvents(events.event_2, {
          success: 'no',
          login_source: 'Direct',
          email: LoginComponent.emailID,
        });
      }
    );

    // this.mobileNumerArray = null;
  }

  getExtraInputPlaceholderText(): String {
    return LoginComponent.currentInputType === 'isEmail'
      ? 'Mobile'
      : LoginComponent.currentInputType === 'isMobile'
      ? 'Email'
      : `can't the detect the input`;
  }

  get showAdditionalInput() {
    return LoginComponent.showAdditionalInput;
  }

  loginSocially(provider: string) {
    this.isLoading = true;
    this._socialAuthService.login(provider).subscribe(
      (data: any) => {
        if (provider !== 'twitter') {
          const socialData = {
            access_token:
              provider === this.socialLogin[0].provider_key
                ? data.token
                : provider === this.socialLogin[1].provider_key
                ? data.idToken
                : provider === this.socialLogin[2].provider_key
                ? data.token
                : null,
            city: this.user_city,
            country: this.user_country,
          };

          // call the social login api
          this._authService.socialLogin(provider, socialData).subscribe(
            (res: any) => {
              this.isLoading = false;

              if (res.data.mobile_verify) {
                this._router.navigateByUrl(
                  `/user/dashboard/${localStorage.getItem('first_name')}`
                );
                this.dialogRef.close();
              } else {
                this.userId = res.data.userId;

                // checking the mobile

                const dialogRef = this.dialog.open(
                  MobileOtpVerificationComponent,
                  {
                    width: window.innerWidth < 630 ? '86%' : '36em',
                    height: window.innerHeight < 800 ? '70%' : '30em',
                    autoFocus: false,
                    data: {
                      askForMobileNumber: true,
                      userId: this.userId,
                      mobileNumber: this.mobileNumberForVerifyMobile,
                      mobileCountryCode: this.mobileCountryCodeForVerifyMobile,
                    },
                  }
                );

                dialogRef.componentInstance.result.subscribe((value: any) => {
                  if (value.verification_status) {
                    this.dialogRef.close();
                    this._router.navigateByUrl(
                      `/user/dashboard/${localStorage.getItem('first_name')}`
                    );
                  }
                  // console.log('OTP verified and dialog is closed now');
                });

                this.showVerifyMobileDialog = true;
                this.mobileNumberForVerifyMobile =
                  res.data.mobile !== undefined
                    ? res.data.mobile !== null
                      ? res.data.mobile
                      : 0
                    : 0;
                this.mobileCountryCodeForVerifyMobile =
                  res.data.mobile_country_code !== undefined
                    ? res.data.mobile_country_code !== null
                      ? res.data.mobile_country_code
                      : 0
                    : 0;
              }
              this._amps.setUserId(localStorage.getItem('email').toLowerCase());
              this._amps.setAmplitudeEvents(events.event_2, {
                success: 'yes',
                login_source: provider,
                email: localStorage.getItem('email'),
              });
            },
            (error: any) => {
              // console.log('Error Occucred');
              this.isLoading = false;
              this.showVerifyMobileDialog = false;
              this._amps.setAmplitudeEvents(events.event_2, {
                success: 'no',
                error: error,
                login_source: provider,
                email: localStorage.getItem('email'),
              });
            }
          );
        }
      },
      (err) => {
        // console.log(err.message);
      }
    );
  }

  getMobileOtpOuput(value: any) {
    if (value.verification_status) {
      this.dialogRef.close();
      this._router.navigateByUrl(
        `/user/dashboard/${localStorage.getItem('first_name')}`
      );
    }
  }
}
