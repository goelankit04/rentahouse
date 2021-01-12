import { Component, OnInit, HostBinding, Input, Output, EventEmitter, Inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mobile-otp-verification',
  templateUrl: './mobile-otp-verification.component.html'
})
export class MobileOtpVerificationComponent implements OnInit {
  @HostBinding('class') MobileOtpVerificationComponentClass = 'app-mobile-otp-verification';

  // you must provdie
  @Input() otpTimer;
  @Output() mobileOtpOutput = new EventEmitter<any>();

  userId: any;
  mobileNumber: any;
  askForMobileNumber: any;
  mobileCountryCode: any;

  result = new EventEmitter();

  intervalId: any;
  countryCodeForNewMobileNumber: any;

  canSubmitOTP = false;
  showOTPTimer = false;
  mobileVerification = false;
  exitMobileVerification = false;
  isLoading = false;

  timer: string;
  newMobile: number;
  otpRequestMessage = null;
  errorMessage: string;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {

    // setting up basic values
    this.userId = this.data.userId;
    this.mobileNumber = this.data.mobileNumber;
    this.askForMobileNumber = this.data.askForMobileNumber;
    this.mobileCountryCode = this.data.mobileCountryCode;
    this.otpTimer = this.otpTimer !== undefined ? this.otpTimer !== null ? this.otpTimer : 0 : 0;

    // starting the timer if OTP timer is valid
    if (this.otpTimer > 0) {
      this.mobileOtpTimer(this.otpTimer);
    }
  }

  showChangeMobile() {
    this.askForMobileNumber = true;
    this.resetTimer();
    this.intervalClear();
  }

  resetTimer() {
    this.timer = '00:00';
  }

  requestOtpAgain(typeOfRequest: string) {
    this.isLoading = true;
    if (this.timer === '00:00') {
      this._authService.resendOTP(this.userId, typeOfRequest).subscribe(
        (res: any) => {
          this.canSubmitOTP = true;
          this.isLoading = false;
          if (typeOfRequest === 'call') {
            this.showMessage(`You'll receive a call shortly`);
            this.resetTimer();
            this.showOTPTimer = false;
          } else {
            (<HTMLInputElement>document.getElementById('otp')).value = '';
            this.showMessage(`You'll again receive a one time password shortly`);
            this.mobileOtpTimer(res.data.seconds_to_expire);

          }
          this.intervalClear();
        },
        (error: HttpErrorResponse) => {
        }
      );
    }
  }

  mobileOtpTimer(seconds_to_expire: any) {
    this.mobileVerification = true;

    // timer config
    const timerCountDown = seconds_to_expire;
    const miliSecondsOfCountDown = 1000;
    let minute = Math.floor(timerCountDown / 60);
    let second = Math.floor(timerCountDown - (minute * 60));
    this.showOTPTimer = true;
    this.intervalId = setInterval(() => {
      if (this.showOTPTimer) {
        this.timer = (minute < 10 ? '0' + minute.toString() : minute.toString()) + ':' + (second < 10 ? '0' + second.toString() : second.toString());
        minute = second > 0 ? minute : minute > 0 ? --minute : 0;
        second = second > 0 ? --second : 59;
        this.showOTPTimer = this.timer !== '00:00';
        this.canSubmitOTP = true;
      }
    }, miliSecondsOfCountDown);
  }

  getNewMobile(value: any) {
    this.countryCodeForNewMobileNumber = value.mobile_code;
    this.newMobile = value.mobile_number;
  }

  changeMobileNumber() {
    // updating current mobile number
    this.mobileNumber = this.newMobile;
    this.isLoading = true;

    this._authService.updateMobile({
      mobile: this.removePlusSignFromMobileCode(this.countryCodeForNewMobileNumber) + this.newMobile,
      userId: this.userId,
      mobile_country_code: this.removePlusSignFromMobileCode(this.countryCodeForNewMobileNumber)
    }).subscribe(
      (res: any) => {
        this.isLoading = false;
        this.askForMobileNumber = false;
        this.mobileOtpTimer(res.data.seconds_to_expire);
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.canSubmitOTP = false;
        this.showMessage(error.error.message);
      }
    );
  }

  removePlusSignFromMobileCode(code: any) {
    return code.replace('+', '');
  }

  // verifies OTP
  verifyMobileOTP(enteredOtp: string) {
    this.isLoading = true;
    this.errorMessage = '';

    this._authService.verifyMobile({
      otp: enteredOtp,
      userId: this.userId
    }).subscribe(
      (res: any) => {
        this.isLoading = false;
        localStorage.removeItem('is_mobile_verified');
        this.intervalClear();

        this.exitMobileVerification = true;

        // responsing to dialog
        this.result.emit({
          verification_status: true,
          message: 'OTP Verified'
        });
      },
      (error: any) => {
        this.isLoading = false;
        this.errorMessage = error.error.message;
      }
    );
  }

  intervalClear() {
    clearInterval(this.intervalId);
  }

  showMessage(text: string) {
    const messageDuration = 6000;

    this.otpRequestMessage = text;

    setInterval(() => {
      this.otpRequestMessage = null;
    }, messageDuration);
  }
}
