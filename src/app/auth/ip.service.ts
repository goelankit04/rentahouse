
import {tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,  Subject } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class IpService {
  private static BASE_URL = '';
  public country = 'United States';

  countryChange: Subject<string> = new Subject<string>();

  constructor(private _http: HttpClient) {
    IpService.BASE_URL = environment.ip_api;
  }

  getUserInfo(): Observable<any> {
    return this._http
      .get(`${IpService.BASE_URL}`).pipe(
      tap((res: any) => {
        this.countryChange.next(res.country);
      }));
  }

  getUserBrowser() {
    const localWindow: any = window;
    const isIE = !!localWindow.documentMode;

    if (!!localWindow.chrome && !!localWindow.chrome.webstore) {
      return 'Chrome';
    }

    if (navigator.userAgent.indexOf('Firefox') != -1) {
      return 'Mozilla Firefox';
    }

    if (navigator.userAgent.toLowerCase().indexOf('safari') != -1) {
      return 'Safari';
    }

    if (!isIE && !!localWindow.StyleMedia) {
      return 'Edge';
    }

    if (( !!localWindow.opr ) || !!localWindow.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
      return 'Opera';
    }

    return 'Unknown Browser detected';
  }

  getEnvironmentName() {
    return environment.name;
  }
}
