import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-mobile-detail',
  templateUrl: './mobile-detail.component.html'
})
export class MobileDetailComponent implements OnInit {
  @HostBinding("class") mobileDetailComponentClass = "app-mobile-detail";

  constructor() { }

  ngOnInit() {
  }

}
