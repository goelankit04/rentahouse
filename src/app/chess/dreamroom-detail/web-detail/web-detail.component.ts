import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-web-detail',
  templateUrl: './web-detail.component.html'
})
export class WebDetailComponent implements OnInit {
  @HostBinding("class") webDetailComponentClass = "app-web-detail";

  constructor() { }

  ngOnInit() {
  }

}
