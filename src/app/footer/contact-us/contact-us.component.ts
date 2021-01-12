import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent implements OnInit {
  @HostBinding('class') ContactUsComponentClass = 'app-contact-us';

  constructor() { }

  ngOnInit() {
  }

}
