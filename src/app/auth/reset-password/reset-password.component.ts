import { Message } from './../../app-common/message';
import { Component, HostBinding, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {
  @HostBinding('class')
  resetPasswordComponentClass = 'app-reset-password';

  user_id: number;
  user_uuid: string;

  form: FormGroup;

  rsMessages: string;

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

  static MatchPassword(password: string, confirm_password: string) {
    return (group: FormGroup) => {
      let ipv = group.controls[password];
      let icpv = group.controls[confirm_password];

      if (ipv.value !== icpv.value) {
        return icpv.setErrors({ notEquivalent: true });
      } else {
        return icpv.setErrors(null);
      }
    };
  }

  constructor(
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _authService: AuthService
  ) // public dialogRef: MatDialogRef<ResetPasswordComponent>
  {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      let total_uuid: any = params['id'];
      // console.log(total_uuid, 'uuid');
      let decoded_uuid = total_uuid.split('ooo');
      this.user_id = parseInt(decoded_uuid[0]);
      this.user_uuid = decoded_uuid[1];
    });

    this.createForm();
  }

  private createForm() {
    this.form = this._fb.group(
      {
        password: new FormControl('', [Validators.required]),
        confirm_password: new FormControl('', [Validators.required])
      },
      {
        validator: [
          ResetPasswordComponent.passwordValidator('password'),
          ResetPasswordComponent.MatchPassword('password', 'confirm_password')
        ]
      }
    );
  }

  resetUserForgotPassword() {
    if (this.user_id && this.user_uuid && this.form.controls.password.valid && this.form.controls.confirm_password.valid) {
      const user: any = {
        user_id: this.user_id,
        user_uuid: this.user_uuid,
        new_password: this.form.value.password,
        new_confirm_password: this.form.value.confirm_password
      };
      this._authService.resetUserPassword(user).subscribe(
        (res: any) => {
          // this.dialogRef.close();
          this.rsMessages = res.message;
        },
        err => {
          this.rsMessages = err.error.message;
        }
      );
    }
  }

  getErrorMessage(choice: string) {
    switch (choice) {
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
      case 'confirm_password': {
        return this.form.controls.confirm_password.hasError('required')
          ? Message.required
          : this.form.controls.confirm_password.hasError('notEquivalent')
            ? Message.confirmPassword.notEquivalent
            : '';
      }
      default: {
        // No error message to display
      }
    }
  }
}
