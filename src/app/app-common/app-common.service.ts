import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

import 'rxjs/Rx';


@Injectable()
export class AppCommonService {

  private _isFromResetPassword = false;

  // PopUp: Rx.Subject<any> = new Rx.Subject<any>();

  constructor() { }

  setValueFromResetPassword(isReset: boolean) {
    this._isFromResetPassword = isReset;
  }

  getResetPasswordValue() {
    return this._isFromResetPassword;
  }

  // public setPopUp(status: boolean) {
  //   this.PopUp.next(status);
  // }


}
