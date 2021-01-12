import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  @HostBinding('class') contactComponentClass = 'app-contact';

  constructor() {
  }

  ngOnInit() {
  }

}
