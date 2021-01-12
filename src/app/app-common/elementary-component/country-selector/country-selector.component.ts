import { Component, OnInit, HostBinding, Output, EventEmitter} from '@angular/core';
import { IpService } from '../../../auth/ip.service';
import { countries } from '../../configuration/countries.config';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent implements OnInit {
  @HostBinding('class') CountrySelectorComponentClass = 'app-country-selector';

  @Output() selectedCountry = new EventEmitter<any>();

  countryDetail = {
    name: '',
    code: ''
  };

  currentCountry: string;
  filteredCountry = [];

  showCountryBox = false;

  constructor(
    private _ipService: IpService
  ) { 
    
  }

  ngOnInit() {
    this.filteredCountry = countries;
    this._ipService.getUserInfo().subscribe(
      (res: any) => {
        // finding country
        const country_ip = countries.filter((country) => (country.country_name === res.country));
        if (country_ip) {
          this.selectCountry(country_ip);
        }
      },
      (err: any) => {
      }
    );
  }

  selectCountry(country: any) {
    this.countryDetail.name = country.country_name;
    this.countryDetail.code = country.country_code;
    this.currentCountry = this.countryDetail.name;
    this.showCountryBox = false;

    this.selectedCountry.emit(this.currentCountry);
  }

  // country suggestions for country
  searchCountryForDropDown(countryName: string) {
    this.showCountryBox = true;
    this.filteredCountry = countries.filter((country) => (country.country_name.toLowerCase().indexOf(countryName.toLowerCase()) > -1));
    this.countryDetail.code = null;
  }
}