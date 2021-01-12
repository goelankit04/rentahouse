import { MatSnackBar } from '@angular/material/snack-bar';
import { CountryCodeService } from '../../../../app-common/country_code.service';
import { UserService } from '../../../user.service';
import { Message } from '../../../../app-common/message';
import { ToasterService } from 'angular2-toaster';
import { countries } from '../../../../app-common/configuration/countries.config';
import { IpService } from '../../../../auth/ip.service';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { HostBinding } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../auth/auth.service';
import { AmplitudeService } from '../../../../amplitude/amplitude.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @HostBinding('class') userDetailsComponentClass = 'app-user-details';

  BASE_API_URL = '';
  isLoading = true;
  imageLoader: boolean;
  gender: any;
  img_url = '/assets/profile/profile.png';
  profileImage: any;
  form: FormGroup;
  user_id: number;
  successMessages: Array<string> = [];
  errorMessages: Array<string> = [];
  checked = false;
  successStatus = false;
  url: any;
  country_codes: any = [];
  userData: any = [];
  selected = 'invalid';
  selectedCountry = {
    name: 'India',
    code: 'IN',
    mobile_code: '+91',
    mobile_length: [10]
  };
  isAvailable = true;
  nothingToDisplay: boolean;
  placeholder = '/assets/profile/placeholder.png';
  statement = [
    `error`,
    `User Details not found`,
    `Please contact the nurtr team`
  ];

  genders = [
    { value: 'male', text: 'Male' },
    { value: 'female', text: 'Female' }
  ];

  countryDetail = {
    name: '',
    code: ''
  };
  mobile_number: number;
  mobile_code: any;
  showCountrySelector = false;
  showCountryBox = false;
  countries = [];
  filteredStates = [];
  filteredCountry = [];
  isInvalidCountry = false;

  static mobileValidator(mobile: string) {
    return (group: FormGroup) => {
      const mobileCopy = group.controls[mobile];
      const hasAplhabet = /(?=.*[a-zA-Z])/.test(mobileCopy.value);
      const hasSpecialChar = /(?=.*[`~!@#\$%\^&\*\[\]\{\}'"<>?\\/|,.:;_=])/.test(
        mobileCopy.value
      );
      const hasMinimumLength = /(?=.{5,})/.test(mobileCopy.value);

      if (hasAplhabet === !false) {
        return mobileCopy.setErrors({ leastAlphabet: true });
      } else if (hasSpecialChar === !false) {
        return mobileCopy.setErrors({ leastSpecialChar: true });
      } else if (hasMinimumLength === false) {
        return mobileCopy.setErrors({ minimumLength: true });
      } else {
        return mobileCopy.setErrors(null);
      }
    };
  }

  constructor(
    private _userService: UserService,
    private _authService: AuthService,
    private _countryCode: CountryCodeService,
    private _fb: FormBuilder,
    private snackbar: MatSnackBar,
    public country: CountryCodeService,
    private _toasterService: ToasterService,
    private _ipApi: IpService,
    private _amps: AmplitudeService
  ) {
    // AuthService.BASE_API_URL = environment.auth_target;
  }

  ngOnInit() {
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
    // this.isLoading = true;
    // this.country_codes = this._countryCode.getCountryCode();
    this.createForm();
    this.getProfile();
  }

  selectCountry(country: any) {
    this.countryDetail.name = country.country_name;
    this.countryDetail.code = country.country_code;
    // this.form.controls.country.setValue(this.form.value.countryDetail);
    this.showCountryBox = false;
  }

  getProfile() {
    this.isLoading = true;
    this._authService.getUserProfileDetail().subscribe(
      (res: any) => {
        this.isLoading = false;
        this.userData = res.data.users.user;
        this.profileImage = this.userData.img_url;
        this.updateForm();
        this.mobile_code = this.userData.mobile_country_code;
        this.mobile_number = this.userData.mobile.replace(this.mobile_code, '');
        this.nothingToDisplay = false;
      },
      error => {
        this.isLoading = false;
        this.nothingToDisplay = true;
        // console.log(error);
      }
    );
  }

  private createForm() {
    this.form = this._fb.group(
      {
        first_name: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[A-Za-z. ]+$/)
        ]),
        last_name: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[A-Za-z. ]+$/)
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ]),
        mobile_country_code: new FormControl('', [
          Validators.pattern(/^[+ 0-9]+$/)
        ]),
        mobile: new FormControl('', [
          Validators.required,
          Validators.pattern(/[0-9]/)
        ]),
        whatsapp_number: new FormControl('', [Validators.pattern(/[0-9]/)]),
        fide_rating: new FormControl('', [Validators.pattern(/[0-9]/)]),
        aicf_id: new FormControl('', [Validators.pattern(/[0-9]/)]),
        fide_id: new FormControl('', [Validators.pattern(/[0-9]/)]),
        dob: new FormControl(''), // gender: new FormControl(''),

        // Shipping Address
        landmark: new FormControl(''),
        city: new FormControl('', [Validators.pattern(/^[A-Za-z. ]+$/)]),
        state: new FormControl('', [Validators.pattern(/^[A-Za-z. ]+$/)]),
        zip_code: new FormControl('', [Validators.pattern(/[0-9]/)]),
        country: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[A-Za-z. ]+$/)
        ]),
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
        instagram_url: new FormControl('')
      },
      {
        validator: [
          UserDetailsComponent.mobileValidator('mobile'),
          UserDetailsComponent.mobileValidator('whatsapp_number')
        ]
      }
    );

    this.onChanges();
  }

  onChanges() {
    this.form.get('country').valueChanges.subscribe(value => {
      // this.filteredStates = this.filterStates(value);
      this.isInvalidCountry = false;
    });
  }

  filterStates(country_name: string) {
    // return this.country.getFilteredCountry(country_name);
  }

  selectCountryCode(country: any) {
    this.selectedCountry.name = country.country_name;
    this.selectedCountry.code = country.country_code;
    this.selectedCountry.mobile_code = country.mobile_country_code;
    this.selectedCountry.mobile_length =
      country.country_mobile_length[0] === undefined
        ? 10
        : country.country_mobile_length[0];
    // this.toggleCountrySelector();
  }

  // toggleCountrySelector() {
  //   this.showCountrySelector = !this.showCountrySelector;
  // }

  // getCountrySuggestion(countryInput: string) {
  //   this.filteredStates = countries.filter(
  //     country =>
  //       country.country_name.toLowerCase().indexOf(countryInput.toLowerCase()) >
  //       -1
  //   );
  // }

  // searchCountryForDropDown(countryName: string) {
  //   this.showCountryBox = true;
  //   this.filteredCountry = countries.filter(
  //     country =>
  //       country.country_name.toLowerCase().indexOf(countryName.toLowerCase()) >
  //       -1
  //   );
  //   this.countryDetail.code = null;

  //   console.log(this.filteredCountry);
  // }

  updateForm() {
    this.selected = this.userData.gender;
    this.form.controls['first_name'].setValue(this.userData.first_name);
    this.form.controls['last_name'].setValue(this.userData.last_name);
    this.form.controls['email'].setValue(this.userData.email);
    this.form.controls['mobile_country_code'].setValue(
      this.userData.mobile_country_code
    );

    this.form.controls['mobile'].setValue(this.userData.mobile);
    this.form.controls['whatsapp_number'].setValue(
      this.userData.whatsapp_number
    );
    this.form.controls['fide_rating'].setValue(this.userData.fide_rating);
    this.form.controls['aicf_id'].setValue(this.userData.aicf_id);

    this.form.controls['fide_id'].setValue(this.userData.fide_id);
    this.form.controls['dob'].setValue(this.userData.dob);

    // this.form.controls['gender'].setValue(this.userData.gender);

    // this.form.controls['shipping_street_address'].setValue(
    //   this.userData.shipping_address.street_address
    // );
    this.form.controls['landmark'].setValue(
      this.userData.shipping_address.landmark
    );
    this.form.controls['city'].setValue(this.userData.shipping_address.city);
    this.form.controls['state'].setValue(this.userData.shipping_address.state);
    this.form.controls['zip_code'].setValue(
      this.userData.shipping_address.zip_code
    );
    this.form.controls['country'].setValue(
      this.userData.shipping_address.country
    );

    // this.form.controls['billing_street_address'].setValue(
    //   this.userData.permanent_address.street_address
    // );
    // this.form.controls['billing_landmark'].setValue(
    //   this.userData.permanent_address.landmark
    // );
    // this.form.controls['billing_city'].setValue(
    //   this.userData.permanent_address.city
    // );
    // this.form.controls['billing_state'].setValue(
    //   this.userData.permanent_address.state
    // );
    // this.form.controls['billing_zipcode'].setValue(
    //   this.userData.permanent_address.zip_code
    // );
    // this.form.controls['billing_country'].setValue(
    //   this.userData.permanent_address.country
    // );

    this.form.controls['facebook_url'].setValue(this.userData.facebook_url);
    this.form.controls['twitter_url'].setValue(this.userData.twitter_url);
    this.form.controls['linkedin_url'].setValue(this.userData.linkedin_url);
    this.form.controls['instagram_url'].setValue(this.userData.instagram_url);
  }

  updateUserProfile() {
    // console.log('updating profile ...');
    // if (this.form.valid) {
    if (this.form.value.first_name && this.form.value.last_name) {
      this.isLoading = true;
      const user: any = {
        first_name: this.form.value.first_name,
        last_name: this.form.value.last_name,
        email: this.form.value.email,
        mobile: this.form.value.mobile,
        whatsapp_number: this.form.value.whatsapp_number,
        fide_rating: this.form.value.fide_rating,
        aicf_id: this.form.value.aicf_id,
        fide_id: this.form.value.fide_id,
        dob: this.form.value.dob,
        gender: this.gender,
        shipping_address: {
          landmark: this.form.value.landmark,
          city: this.form.value.city,
          country: this.form.value.country,
          state: this.form.value.state,
          zip_code: this.form.value.zip_code
        },
        permanent_address: {
          landmark: this.form.value.landmark,
          city: this.form.value.city,
          country: this.form.value.country,
          state: this.form.value.state,
          zip_code: this.form.value.zip_code
        },
        facebook_url: this.form.value.facebook_url,
        twitter_url: this.form.value.twitter_url,
        instagram_url: this.form.value.instagram_url,
        linkedin_url: this.form.value.linkedin_url
      };

      this._authService.updateUserDetail(user).subscribe(
        (res: any) => {
          this._amps.setUserProperties({
            dob: this.form.value.dob,
            fide_rating: this.form.value.fide_rating,
            gender: this.gender,
            city: this.form.value.city,
            country: this.form.value.country,
            state: this.form.value.state
          });
          this.isLoading = false;
          this.snackbar.open(res.message, '', { duration: 1000 });
        },
        err => {
          this.isLoading = false;
        }
      );
      // }
    }
  }

  getErrorMessage(choice: string) {
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
          : this.form.controls.mobile.hasError('leastAlphabet')
            ? Message.mobile.leastAlphabet
            : this.form.controls.mobile.hasError('leastSpecialChar')
              ? Message.mobile.leastSpecialChar
              : this.form.controls.mobile.hasError('minimumLength')
                ? Message.mobile.minimumLength
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
      case 'aicf_id': {
        return this.form.controls.aicf_id.hasError('required')
          ? Message.required
          : this.form.controls.aicf_id.hasError('pattern')
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
      case 'shipping_landmark': {
        return this.form.controls.shipping_landmark.hasError('required')
          ? Message.required
          : '';
      }
      case 'city': {
        return this.form.controls.city.hasError('required')
          ? Message.required
          : '';
      }
      case 'state': {
        return this.form.controls._state.hasError('required')
          ? Message.required
          : '';
      }
      case 'shipping_zipcode': {
        return this.form.controls.shipping_zipcode.hasError('required')
          ? Message.required
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

  onSelectionChange(gender) {
    this.gender = gender;
  }

  handleFileSelect(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      reader.onload = e => { };

      reader.readAsDataURL(file);
    }
  }

  fileChange(event) {
    // this.loader = true;
    this.isAvailable = false;
    const user_profile_image = event.target.files;
    this.url = `${environment.auth_target}/aws/profile/image/upload`;
    this.makeFileRequest(this.url, [], user_profile_image).then(
      result => {
        this.isAvailable = true;
        // console.log('bhai result');
      },
      error => {
        // this.loader = false;
      }
    );
  }

  makeFileRequest(url: string, params: any, files: any) {
    const that = this;
    that.imageLoader = true;
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();
      formData.append('user_profile_image', files[0], files[0].name);
      (xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (
            xhr.status === 200 ||
            xhr.status === 201 ||
            xhr.status === 205 ||
            xhr.status === 304
          ) {
            that.imageLoader = false;
            const profileImage2 = JSON.parse(xhr.response).data
              .profile_image_url;
            that.profileImage = profileImage2;

            if (
              JSON.parse(xhr.response).message === 'Please select valid file'
            ) {
            } else {
              that._toasterService.pop(
                'success',
                'File Uploaded Successfully !!'
              );
            }
          } else {
          }
        }
      }),
        error => { };
      xhr.open('PATCH', url, true);
      xhr.setRequestHeader('enctype', 'multipart/form-data');
      xhr.setRequestHeader('accesstoken', localStorage.getItem('access_token'));
      xhr.send(formData);
    });
  }

  copyAddress() {
    this.checked = !this.checked;
    if (this.checked) {
      const backUpData = {
        sa: this.form.controls['billing_street_address'].value,
        lm: this.form.controls['billing_landmark'].value,
        ct: this.form.controls['billing_city'].value,
        st: this.form.controls['billing_state'].value,
        zc: this.form.controls['billing_zipcode'].value,
        co: this.form.controls['billing_country'].value
      };

      this.form.controls['billing_street_address'].setValue(
        this.form.controls['shipping_street_address'].value
      );
      this.form.controls['billing_landmark'].setValue(
        this.form.controls['shipping_landmark'].value
      );
      this.form.controls['billing_city'].setValue(
        this.form.controls['shipping_city'].value
      );
      this.form.controls['billing_state'].setValue(
        this.form.controls['shipping_state'].value
      );
      this.form.controls['billing_zipcode'].setValue(
        this.form.controls['shipping_zipcode'].value
      );
      this.form.controls['billing_country'].setValue(
        this.form.controls['shipping_country'].value
      );
    } else {
      this.form.controls['billing_street_address'].setValue(
        this.userData.permanent_address.street_address
      );
      this.form.controls['billing_landmark'].setValue(
        this.userData.permanent_address.landmark
      );
      this.form.controls['billing_city'].setValue(
        this.userData.permanent_address.city
      );
      this.form.controls['billing_state'].setValue(
        this.userData.permanent_address.state
      );
      this.form.controls['billing_zipcode'].setValue(
        this.userData.permanent_address.zip_code
      );
      this.form.controls['billing_country'].setValue(
        this.userData.permanent_address.country
      );
    }
  }

  copyAddressLive() {
    if (this.checked) {
      this.form.controls['billing_street_address'].setValue(
        this.form.controls['shipping_street_address'].value
      );
      this.form.controls['billing_landmark'].setValue(
        this.form.controls['shipping_landmark'].value
      );
      this.form.controls['billing_city'].setValue(
        this.form.controls['shipping_city'].value
      );
      this.form.controls['billing_state'].setValue(
        this.form.controls['shipping_state'].value
      );
      this.form.controls['billing_zipcode'].setValue(
        this.form.controls['shipping_zipcode'].value
      );
      this.form.controls['billing_country'].setValue(
        this.form.controls['shipping_country'].value
      );
    }
  }
}
