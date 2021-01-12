import { Component, HostBinding, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AuthService } from "../auth.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
})
export class ForgotPasswordComponent implements OnInit {
  @HostBinding("class") forgotPasswordComponentClass = "app-forgot-password";

  form: FormGroup;

  isLoading = false;
  mobileArray: any;

  response: any;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    public dialogRef: MatDialogRef<ForgotPasswordComponent>
  ) {}

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.form = this._fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  setNewMobileNumber (value: any) {
    this.mobileArray = value;
  }

  resetPassword() {
    this.isLoading = true;

    if (this.form.value.email) {

      const requestFormat = {
        isEmail: Boolean(this.form.controls.email.value),
        isMobile: Boolean(this.mobileArray),
        email: this.form.controls.email.value,
        mobile: this.mobileArray ? [`${this.mobileArray.mobile_code.replace('+', '')}${this.mobileArray.mobile_number}`, `${this.mobileArray.mobile_number}`] : [],
      };

      this._authService.sendResetPasswordLink(requestFormat).subscribe(
        (res: any) => {
          this.isLoading = false;
          this.response = res;
        },
        (err: HttpErrorResponse) => {
          this.isLoading = false;
          this.response = err.error;
        }
      );
    }
  }

  getErrorMessage(choice: string) {
    switch (choice) {
      case 'email': {
        return this.form.controls.email.hasError('required')
          ? 'This field is required'
          : this.form.controls.email.hasError('pattern')
          ? 'Invalid email id'
          : '';
      }
      default: {
        // No error message to display
      }
    }
  }
}
