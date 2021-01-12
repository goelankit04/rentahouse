import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-platform-feature',
  templateUrl: './platform-feature.component.html'
})
export class PlatformFeatureComponent implements OnInit {
  @HostBinding('class') platformFeatureComponentClass = 'app-platform-feature';

  constructor() {
  }

  ngOnInit() {

  }

}
