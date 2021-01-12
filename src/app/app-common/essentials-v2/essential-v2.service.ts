import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TokenInterceptorService } from '../../auth/token-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class EssentialV2Service extends TokenInterceptorService {

  API_URL: string;

  constructor(
    private _http: HttpClient
  ) {
    super();
    this.API_URL = environment.auth_target;
  }

  getZoomLink(data: any): Observable<any> {
    return this._http.post(`${this.API_URL}/zoom/register`, JSON.stringify(data));
  }
}
