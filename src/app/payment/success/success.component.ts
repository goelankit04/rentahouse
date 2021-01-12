import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html'
})
export class SuccessComponent implements OnInit {
  @HostBinding('class') successComponentClass = 'app-success';

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

}
