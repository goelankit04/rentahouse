import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html'
})
export class FailureComponent implements OnInit {
  @HostBinding('class') failureComponentClass = 'app-failure';

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

}
