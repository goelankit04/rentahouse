import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TokenInterceptorService } from '../../auth/token-interceptor.service';
import { Router } from '@angular/router';

@Injectable()
export class WalletService extends TokenInterceptorService {
  private static BASE_API_URL = '';

  constructor(
    private _http: HttpClient
  ) {
    super();
    WalletService.BASE_API_URL = environment.auth_target;
  }

  getWalletBalance() {
    return this._http.get(`${WalletService.BASE_API_URL}/user/wallet/balance`);
  }

  getWalletLog() {
    return this._http.get(`${WalletService.BASE_API_URL}/user/wallet/log`);
  }

  setLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

}
