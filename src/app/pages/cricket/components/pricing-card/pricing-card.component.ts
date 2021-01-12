import { Component, OnInit, Input } from '@angular/core';
import { CricketService } from '../../cricket.service';
import { AuthService } from '../../../../auth/auth.service';
@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss'],
})
export class PricingCardComponent implements OnInit {
  @Input() course;
  isLoader = false;
  pricing;
  currentCurrency: any;
  constructor(private _cs: CricketService, private as: AuthService) {}

  ngOnInit() {
    this.pricing = this._cs.getPricingInfoByName(this.course.name);
  }

  enrollNow() {
    this.isLoader = true;
    this.as
      .getAllActiveProducts({
        country: localStorage.getItem('country'),
        isDRR: false,
        productId: this.course.product_id,
        productType: this.course.product_type,
      })
      .subscribe(
        (res: any) => {
          this.isLoader = false;
          this._cs.openPopup(res);
        },
        (err: any) => {
          this.isLoader = false;
        }
      );
  }
}
