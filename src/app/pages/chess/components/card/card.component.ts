import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  private _cardStyles: any;

  @Input()
  set cardStyles(value) {
    console.log(value);
    if (value) {
      this._cardStyles = value;
    } else {
      this._cardStyles = `background: 'darkgrey',
        height: '250px',
        width: '440px'`;
    }
  }

  get cardStyles() {
    return this._cardStyles;
  }
  @Input() course;
  isLoader = false;

  constructor(private _route: Router, private as: AuthService) {}

  ngOnInit() {}

  enrollNow() {
    this._route.navigateByUrl(`product-highlight/{}/{}?cc={}`);
  }
}
