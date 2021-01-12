import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-v2',
  templateUrl: './card-v2.component.html'
})
export class CardV2Component implements OnInit {
  @HostBinding('class') CardComponentClass = 'app-card-v2';

  @Output() cardResponse = new EventEmitter<any>();

  product: boolean;
  mentor: boolean;
  detailView: boolean;
  detailData: any;
  mobile: boolean;

  @Input('type')
  set type(value: any) {
    switch (value) {
      case 'mentor': {
        this.mentor = true;
        break;
      }
      case 'product': {
        this.product = true;
        break;
      }
    }
  }

  @Input() small: boolean;
  @Input() data: any;
  @Input() active: boolean;
  @Input() show: boolean;

  constructor() { }

  ngOnInit() {
    this.onResize();
  }

  showDetail(value: any) {
    this.detailView = false;
    this.detailData = value;
    this.detailView = true;
  }

  onResize() {
    this.mobile = window.innerWidth < 768;
  }

  responseProduct(event: any) {
    this.cardResponse.emit(event);
  }
}
