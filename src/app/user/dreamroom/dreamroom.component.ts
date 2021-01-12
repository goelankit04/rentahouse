import { HostBinding }       from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-dreamroom',
  templateUrl: './dreamroom.component.html',
})
export class DreamroomComponent implements OnInit {
  @HostBinding('class') DreamroomComponentClass = 'app-dreamroom';

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }
}
