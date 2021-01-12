import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AmplitudeService } from '../../../../amplitude/amplitude.service';
import { AuthService } from '../../../../auth/auth.service';
import { CricketService } from '../../cricket.service';

@Component({
  selector: 'app-card-cricket',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() course;
  isLoader = false;
  aboutObj;
  cardColors = {
    'Dream Room': '#3D73AC',
    Pro: '#6B3DAC',
    'Super Pro': '#229C6E',
    'Power Play': '#AA3D3D',
  };

  constructor(private as: AuthService, private cs: CricketService) {}

  ngOnInit() {
    this.aboutObj = this.cs.getCourseInfo(this.course.name);
    // console.log(this.about);
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
          this.cs.openPopup(res);
        },
        (err: any) => {
          this.isLoader = false;
        }
      );
  }
}
