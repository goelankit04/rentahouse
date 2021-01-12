import {
  Component,
  OnInit,
  HostBinding,
  Output,
  EventEmitter,
  Input,
} from "@angular/core";
import { countries } from "../../configuration/countries.config";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Message } from "../../message";

@Component({
  selector: "app-mobile-number",
  templateUrl: "./mobile-number.component.html",
})
export class MobileNumberComponent implements OnInit {
  @HostBinding("class") MobileNumberComponentClass = "app-mobile-number";

  private _disaleMobileInputStatus = true;

  @Output() newMobileNumber = new EventEmitter<any>();
  @Output() getErrorAlert = new EventEmitter<any>();

  @Input() mobileCountryCode;
  @Input() mobileNumber;
  @Input() showErrorAlert: any;

  @Input()
  set disableMobileInput(value: any) {
    this._disaleMobileInputStatus = value;
    this.createForm();
  }

  get disableMobileInput() {
    return this._disaleMobileInputStatus;
  }

  mobileForm: FormGroup;

  selectedCountry = {
    name: "India",
    code: "IN",
    mobile_code: "+91",
  };
  countryDetail = {
    name: "",
    code: "",
  };
  filteredStates = [];

  mobile: string;
  currentMobile: string;
  showCountrySelector = false;
  firstTimeUser = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.showErrorAlert === undefined) {
      this.showErrorAlert = true;
    }

    this.filteredStates = countries;
    this.currentMobile = this.mobileNumber !== 0 ? this.mobileNumber : null;

    if (this.mobileCountryCode !== 0) {
      this.currentMobile =
        this.currentMobile !== null
          ? this.mobileNumber
          : // .substring(
            // this.mobileCountryCode.length,
            // this.mobileNumber.length
            // )
            null;
      this.mobile =
        this.currentMobile !== undefined
          ? this.currentMobile !== null
            ? this.currentMobile
            : this.mobile
          : this.mobile;
      if (this.currentMobile !== null) {
        this.selectCountryCode(
          countries.filter(
            country =>
              country.mobile_country_code === "+" + this.mobileCountryCode
          )[0]
        );
      }
    }
    this.createForm();
  }

  createForm() {
    this.mobileForm = this.fb.group({
      mobile: new FormControl(
        { value: "", disabled: this._disaleMobileInputStatus },
        [
          Validators.required,
          Validators.maxLength(12),
          Validators.pattern(/\d{4,12}[0-9]$/),
        ]
      ),
    });
  }

  getErrorMessageToEmit(type: string) {
    this.getErrorAlert.emit(this.getErrorMessage(type));
  }

  getErrorMessage(choice: string) {
    switch (choice) {
      case 'mobile': {
        return this.mobileForm.controls.mobile.hasError('required')
          ? Message.required
          : this.mobileForm.controls.mobile.hasError('pattern')
          ? Message.mobile.invalid
          : '';
      }
      default: {
        return 'abc';
      }
    }
  }

  // country suggestions for mobile
  getCountrySuggestion(countryInput: string) {
    this.filteredStates = countries.filter(
      country =>
        country.country_name.toLowerCase().indexOf(countryInput.toLowerCase()) >
        -1
    );
  }

  selectCountryCode(country: any) {
    this.selectedCountry.name = country.country_name;
    this.selectedCountry.code = country.country_code;
    this.selectedCountry.mobile_code = country.mobile_country_code;
    this.updateMobileNumber(this.mobile);
    if (this.firstTimeUser && this.mobileCountryCode !== null) {
      this.firstTimeUser = false;
    } else {
      this.toggleCountrySelector();
    }
  }

  // show country box in mobile
  toggleCountrySelector() {
    this.showCountrySelector = !this.showCountrySelector;
  }

  updateMobileNumber(mobile: string) {
    this.mobile = mobile;
    this.newMobileNumber.emit({
      mobile_code: this.selectedCountry.mobile_code,
      country_code: this.selectedCountry.code,
      mobile_number: this.mobile,
    });
  }
}
