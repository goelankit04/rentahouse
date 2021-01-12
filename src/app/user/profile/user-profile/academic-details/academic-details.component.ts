import { Message } from './../../../../app-common/message';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { UserService } from './../../../user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-academic-details',
  templateUrl: './academic-details.component.html'
})
export class AcademicDetailsComponent implements OnInit {
  @HostBinding('class') academicDetailsComponentClass = 'app-academic-details';
  form: FormGroup;
  user_id: number;
  successMessages: Array<string> = [];

  errorMessages: Array<string> = [];

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService
  ) {}

  ngOnInit() {
    this.user_id = parseInt(localStorage.getItem('id'));
    this.createForm();
  }

  private createForm() {
    this.form = this._fb.group({
      university: new FormControl('', [Validators.required]),
      high_school: new FormControl('', [Validators.required]),
      primary_school: new FormControl('', [Validators.required])
    });
  }

  updateAcademicProfile() {
    if (this.user_id) {
      const user: any = {
        user_id: this.user_id,
        university: this.form.value.university,
        high_school: this.form.value.high_school,
        primary_school: this.form.value.primary_school
      };

      // console.log(user);

      // this._userService.resetUsersCurrentPassword(user).subscribe(
      //   (res: any) => {
      //     this.successMessages.push(res.message);
      //   },
      //   (err) => {
      //     this.errorMessages.push(err.error.message[0]);
      //   }
      // );
    }
  }

  getErrorMessage(choice: string) {
    switch (choice) {
      case 'university': {
        return this.form.controls.university.hasError('required') ? Message.required : '';
      }
      case 'primary_school': {
        return this.form.controls.primary_school.hasError('required') ? Message.required : '';
      }
      case 'high_school': {
        return this.form.controls.high_school.hasError('required') ? 'This field is required' : '';
      }
      default: {
        // No error message to display
      }
    }
  }
}
