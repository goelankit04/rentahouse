import { Component, HostBinding, OnInit }     from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService }                    from './register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})

export class RegisterFormComponent implements OnInit {
  @HostBinding('class') registerFormComponentClass = 'app-register-form';
  
  isInvalidCode: boolean = false;
  
  form: FormGroup;
  
  countries = [];
  filteredStates = [];
  
  isInvalidCountry = false;
  
  isLoading: boolean = false;
  
  successToast: any = (config) => {
    return {
      type: 'info',
      title: `Hurray! ${config.name}`,
      body: `Added ${config.balance} to your account. Your current balance is ${config.points} points!`
    };
  };
  
  errorToast: any = (config) => {
    return {
      type: 'error',
      title: `Hi! ${config.name}`,
      body: `We are sorry! There is no scholarships available in your nurtr account.`
    };
  };
  
  constructor(public dialogRef: MatDialogRef<RegisterFormComponent>, private service: RegisterService, public snackBar: MatSnackBar) {
  }
  
  ngOnInit() {
    this.createForm();
  }
  
  filterStates(country_name: string) {
    return this.countries.filter(country => country.country_name.toLowerCase().indexOf(country_name.toLowerCase()) > -1);
  }
  
  
  private createForm() {
    this.form = new FormGroup({
      first_name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]),
      last_name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      mobile: new FormControl('', [Validators.required]),
      school: new FormControl('', [Validators.required]),
      standard: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country_code: new FormControl('', [Validators.required]),
      coupon_code: new FormControl('')
    });
    
    this.onChanges();
  }
  
  onChanges() {
    this.form.get('country_code').valueChanges.subscribe(value => {
      this.filteredStates = this.filterStates(value);
      this.isInvalidCountry = false;
    });
  }
  
  checkIfCountryExists(name: string) {
    return this.countries.filter((country) => country.country_name === name);
  }
  
  getErrorMessage(inputText: string) {
    return this[`${inputText}`].hasError('required') ? 'Invalid Coupon' : '';
  }
  
  isValidCoupon() {
    this.isInvalidCode = false;
  }
  
  registerData() {
    this.isLoading = true;
    
    let data = {
      first_name: this.form.controls.first_name.value,
      last_name: this.form.controls.last_name.value,
      email: this.form.controls.email.value,
      mobile: this.form.controls.mobile.value,
      school: this.form.controls.school.value,
      standard: this.form.controls.standard.value,
      city: this.form.controls.city.value,
      country_code: this.form.controls.country_code.value,
      coupon_code: this.form.controls.coupon_code.value,
    };
    
    this.service.redeemScholarshipPoints(data).subscribe(
      (res) => {
        this.isLoading = false;
        
        if (res.points > 0) {
          this.dialogRef.close(this.successToast({ points: res.points, balance: res.balance, name: this.form.controls.first_name.value }));
        } else {
          this.dialogRef.close(this.errorToast({ points: 0, name: this.form.controls.first_name.value }));
        }
      },
      (error) => {
        this.isLoading = false;
        this.dialogRef.close(this.errorToast({ points: 0, name: this.form.controls.first_name.value }));
      });
  }
  
  closeDialog() {
    this.dialogRef.close();
  }
  
  getErrorString(choice: string) {
    switch (choice) {
      case 'firstName': {
        return this.form.controls.first_name.hasError('required') ? 'This field is required' :
          this.form.controls.first_name.hasError('pattern') ? 'Not a valid first name' : '';
      }
      case 'lastName': {
        return this.form.controls.last_name.hasError('required') ? 'This field is required' :
          this.form.controls.last_name.hasError('pattern') ? 'Not a valid first name' : '';
      }
      case 'email': {
        return this.form.controls.email.hasError('required') ? 'This field is required' :
          this.form.controls.email.hasError('pattern') ? 'Not a valid email' : '';
      }
      case 'mobile': {
        return this.form.controls.mobile.hasError('required') ? 'This field is required' :
          this.form.controls.mobile.hasError('pattern') ? 'Not a valid mobile number' : '';
      }
      case 'school': {
        return this.form.controls.school.hasError('required') ? 'This field is required' : '';
      }
      case 'standard': {
        return this.form.controls.standard.hasError('required') ? 'This field is required' : '';
      }
      case 'city': {
        return this.form.controls.city.hasError('required') ? 'This field is required' :
          this.form.controls.city.hasError('pattern') ? 'Not a valid city number' : '';
      }
      default: {
        // No error message to display
      }
    }
  }
}
