import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-feature',
  templateUrl: './content-feature.component.html'
})
export class ContentFeatureComponent implements OnInit {
  @HostBinding('class') contentFeatureClass = 'app-content-feature';

  @Input('isTop') isTop: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

}
