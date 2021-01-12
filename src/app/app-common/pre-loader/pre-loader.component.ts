import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html'
})
export class PreLoaderComponent implements OnInit {
  @HostBinding('class') preLoaderComponentClass = 'app-pre-loader';

  constructor() {
  }

  ngOnInit() {
  }

}
