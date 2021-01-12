import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrls: ['./product-banner.component.scss'],
})
export class ProductBannerComponent implements OnInit {
  @Input() cardStyles;
  constructor() {}

  ngOnInit() {}
}
