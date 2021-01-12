import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html'
})
export class SocialComponent implements OnInit {
  @HostBinding('class') socialComponentClass = 'app-social';

  constructor() {
  }

  ngOnInit() {

  }

}
