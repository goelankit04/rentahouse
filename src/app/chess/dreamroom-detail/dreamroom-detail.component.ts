import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-dreamroom-detail',
  templateUrl: './dreamroom-detail.component.html'
})
export class DreamroomDetailComponent implements OnInit {
  @HostBinding('class') dreamroomComponentClass = 'app-dreamroom-detail';

  constructor() { }

  // decision: boolean;

  ngOnInit() {
  }

  getMobileWidthScreenWidth() {
    return window.screen.width < 768;
  }

  getMobileWidthInnerWidth() {
    return window.innerWidth < 768;
  }

}
