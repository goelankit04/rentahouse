import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-ramesh',
  templateUrl: './about-ramesh.component.html'
})
export class AboutRameshComponent implements OnInit {
  @HostBinding('class') AboutRameshComponentClass = 'app-about-ramesh';

  constructor() { }

  ngOnInit() {
  }

  getMobileWidth() {
    return window.innerWidth < 500;
  }
}
