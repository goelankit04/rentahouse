import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-enrollment',
  templateUrl: './pre-enrollment.component.html'
})
export class PreEnrollmentComponent implements OnInit {
  @HostBinding("class") preEnrollmentComponentClass = "app-pre-enrollment";

  constructor() { }

  ngOnInit() {
  }

}
