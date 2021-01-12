import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { IpService } from '../../auth/ip.service';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.scss'],
})
export class CricketComponent implements OnInit {
  courses = [];
  constructor(
    private as: AuthService,
    private router: Router,
    private _ipService: IpService
  ) {}

  ngOnInit() {
    this._ipService.getUserInfo().subscribe(
      (result: any) => {
        this.as
          .getAllProductByProductType({
            country: result.country,
            categoryId: 2,
            productType: 13,
          })
          .subscribe((res: any) => {
            this.courses = res.data.products.sort(this.sortByPricing);
          });
      },
      (err: any) => this._ipService.countryChange.next('United States')
    );
  }

  sortByPricing(product1, product2) {
    if (product1.base_price > product2.base_price) {
      return 1;
    } else if (product1.base_price < product2.base_price) {
      return -1;
    } else {
      return 0;
    }
  }

  contactUs() {
    this.router.navigateByUrl('/footer/contact-us');
  }
}
