import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  @HostBinding('class') chessComponentClass = 'app-contact-form';

  constructor() { }

  ngOnInit() {
  }

}
