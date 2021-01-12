import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import * as _                                                          from 'lodash';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-interest',
  templateUrl: './show-interest.component.html'
})
export class ShowInterestComponent implements OnInit {
  @HostBinding('class') ShowInterestComponentClass = 'app-show-interest';

  interests = [];

  @Output() userSelectedInterestsEmitter = new EventEmitter<any>();

  err: any;

  @Input()
  set userInterests(value: any) {
    this.interests = _.cloneDeep(value);
  }
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }
  ngOnInit() {
  }

  selectUserInterest(userInterest: any) {
    this.interests.forEach((interest) => {
      if (parseInt(userInterest.id) === parseInt(interest.id)) {
        userInterest.isSelected ? interest.isSelected = false : interest.isSelected = true;
      }
    });

  }

  onShowInterestClose() {
    const userSelectedInterest = this.interests.filter((interest) => interest.isSelected);
    const userSelectedInterestIds = [];

    userSelectedInterest.forEach((interest) => {
      userSelectedInterestIds.push(interest.id);
    });

    if (userSelectedInterestIds.length < 1) {
      this.err = '*Select atleast 1 interest';
    } else {
      this.userSelectedInterestsEmitter.emit(userSelectedInterestIds);
    }
  }
}
