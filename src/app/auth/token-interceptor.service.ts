import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpErrorResponse, HttpEvent, HttpHandler,
  HttpHeaders, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('pro.ip-api.com') > -1 || req.url.indexOf('api.twitter.com') > -1) {
      return next.handle(req);
    } else {
      const reqHeader = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          accesstoken: `${localStorage.getItem('access_token')}`
        })
      });

      return next.handle(reqHeader)
        .pipe(
          tap(
            event => event,
            err => {
              if (err instanceof HttpErrorResponse) {
                if (err.error.message.indexOf('jwt') > -1) {
                  localStorage.removeItem('access_token');
                  // window.location.href = '/';
                } else {
                  // window.location.href = '/';
                }
              }
            }
          )
        );
    }
  }
}
