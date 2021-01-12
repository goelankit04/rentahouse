import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.scss']
})
export class StudentFeedbackComponent implements OnInit {
  @HostBinding('class') StudentFeedbackComponentClass = 'app-student-feedback';
  productList: any;
  product_id: any;
  review: any;

  dreamroom = [
    {
      value: 77,
      star: 5
    },
    {
      value: 7,
      star: 4
    },
    {
      value: 10,
      star: 3
    },
    {
      value: 6,
      star: 2
    },
    {
      value: 0,
      star: 1
    }]

  finalReview = [{
    star: 4.5
  },
  {
    star: 4.8
  },
  {
    star: 4.8
  }]

  chessHour =
    [
      {
        star: 5,
        value: 89
      },
      {
        star: 4,
        value: 6
      },
      {
        star: 3,
        value: 5
      },
      {
        star: 2,
        value: 0
      },
      {
        star: 1,
        value: 0
      }]


  super64 =
    [
      {
        star: 5,
        value: 88
      },
      {
        star: 4,
        value: 7
      },
      {
        star: 3,
        value: 4
      },
      {
        star: 2,
        value: 1
      },
      {
        star: 1,
        value: 0
      }]

  numbers = [{
    rate: '1'
  },
  {
    rate: '2'
  }, {
    rate: '3'
  }, {
    rate: '4'
  }]

  constructor(private _activated: ActivatedRoute) { }

  ngOnInit() {
    this._activated.params.subscribe(params => {
      this.product_id = parseInt(params.product_id);
      if (parseInt(params.product_id) === 35) {
        this.productList = this.dreamroom;
        this.review = this.finalReview[0].star
        // this.productList.length = 10;
      } else if (parseInt(params.product_id) === 574 || parseInt(params.product_id) === 573) {
        this.productList = this.chessHour;
        this.review = this.finalReview[1].star
      } else if (parseInt(params.product_id) === 680) {
        this.productList = this.super64;
        this.review = this.finalReview[2].star
      }
    });
  }
}
