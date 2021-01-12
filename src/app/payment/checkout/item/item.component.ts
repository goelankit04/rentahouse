import { Component, HostBinding, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  @HostBinding('class') itemComponent = 'app-item';
  base_path = 'https://auth.testourwebsite.com/v2/api';
  @Input() product: any;

  constructor() {
  }

  ngOnInit() {
  }

  mobileView() {
    return window.innerWidth < 800;
  }

  getCurrencySign() {

    if (localStorage.getItem('country') && localStorage.getItem('country').toLowerCase() === 'india') {
      return 'fa-inr';
    } else if (localStorage.getItem('country') && localStorage.getItem('country').toLowerCase() !== 'india') {
      return 'fa-usd';
    } else {
      return 'fa-inr';
    }

  }
}
