import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TokenInterceptorService } from '../../auth/token-interceptor.service';

@Injectable()
export class NotificationService extends TokenInterceptorService {
  private static BASE_API_URL = '';

  constructor(
    private _http: HttpClient
  ) {
    super();
    NotificationService.BASE_API_URL = environment.auth_target;
  }

}
