import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { IpService } from '../../auth/ip.service';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss'],
})
export class ChessComponent implements OnInit {
  courses = [];
  popular = [];
  arrivals = [];
  bannerCardStyles = {
    background: 'linear-gradient(99deg, #2d267b 0%, #a83d3d 100%)',
    height: '328px',
    width: '888px',
  };
  cardStyles = {
    background: 'linear-gradient(99deg, #2d267b 0%, #a83d3d 100%)',
    height: '250px',
    width: '440px',
  };
  constructor(
    private as: AuthService,
    private router: Router,
    private _ipService: IpService
  ) {}

  ngOnInit() {
    this._ipService.getUserInfo().subscribe((result: any) => {
      this.getCourses(4, result.country); // trending
      this.getCourses(1, result.country); // popular
    });
  }

  getCourses(id, country) {
    const data = {
      trending_id: id,
      category_id: 1,
      country: localStorage.getItem('country')
        ? localStorage.getItem('country')
        : country,
    };
    this.as.allCourses(data).subscribe((res: any) => {
      console.log(res);
      if (id == 1) {
        this.popular = res;
      } else {
        this.arrivals = res;
      }
    });
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
