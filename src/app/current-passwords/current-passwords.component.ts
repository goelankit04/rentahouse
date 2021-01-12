import { Component, HostBinding, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { Message } from '../app-common/message';
import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-current-passwords',
  templateUrl: './current-passwords.component.html'
})
export class CurrentPasswordsComponent implements OnInit {
  @HostBinding('class')
  CurrentPasswordsComponentClass = 'app-current-passwords';

  form: FormGroup;
  user_id: number;
  messageToDisplay = '';

  rsmessage: any = {};

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
      const ipv = group.controls[password];
      const icpv = group.controls[confirm_password];

      if (ipv.value !== icpv.value) {
        return icpv.setErrors({ notEquivalent: true });
      } else {
        return icpv.setErrors(null);
      }
    };
  }

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<CurrentPasswordsComponent>
  ) {}

  ngOnInit() {
    this.user_id = parseInt(localStorage.getItem('id'));
    this.createForm();
  }

  private createForm() {
    this.form = this._fb.group(
      {
        current_password: new FormControl('', [Validators.required]),
        new_password: new FormControl('', [Validators.required]),
        confirm_new_password: new FormControl('', [Validators.required])
      },
      {
        validator: [
          CurrentPasswordsComponent.passwordValidator('current_password'),
          CurrentPasswordsComponent.passwordValidator('new_password'),
          CurrentPasswordsComponent.MatchPassword(
            'new_password',
            'confirm_new_password'
          )
        ]
      }
    );
  }

  changeCurrentPassword() {
    if (this.user_id) {
      const user: any = {
        current_password: this.form.value.current_password,
        new_password: this.form.value.new_password,
        confirm_new_password: this.form.value.confirm_new_password
      };
      // console.log(user);

      this._authService.changeCurrentPassword(user).subscribe(
        (res: any) => {
          localStorage.removeItem('resetPassword');
          this.snackbar.open(res.message, '', { duration: 1000 });
          this.dialogRef.close();
          this.form.reset();
        },
        (err: any) => {
          // console.log(err);
          this.snackbar.open(err.message, '', { duration: 1000 });
        }
      );
    }
  }

  getErrorMessage(choice: string) {
    switch (choice) {
      case 'current_password': {
        return this.form.controls.current_password.hasError('required')
          ? Message.required
          : this.form.controls.current_password.hasError('leastAlphabet')
            ? Message.password.leastAlphabet
            : this.form.controls.current_password.hasError('leastNumber')
              ? Message.password.leastNumber
              : this.form.controls.current_password.hasError('leastSpecialChar')
                ? Message.password.leastSpecialChar
                : this.form.controls.current_password.hasError('minimumLength')
                  ? Message.password.minimumLength
                  : '';
      }
      case 'new_password': {
        return this.form.controls.new_password.hasError('required')
          ? Message.required
          : this.form.controls.new_password.hasError('leastAlphabet')
            ? Message.password.leastAlphabet
            : this.form.controls.new_password.hasError('leastNumber')
              ? Message.password.leastNumber
              : this.form.controls.new_password.hasError('leastSpecialChar')
                ? Message.password.leastSpecialChar
                : this.form.controls.new_password.hasError('minimumLength')
                  ? Message.password.minimumLength
                  : '';
      }
      case 'confirm_new_password': {
        return this.form.controls.confirm_new_password.hasError('required')
          ? 'This field is required'
          : this.form.controls.confirm_new_password.hasError('notEquivalent')
            ? 'password does not match'
            : '';
      }
      default: {
        // No error message to display
      }
    }
  }
}
