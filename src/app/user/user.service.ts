import { Injectable                           } from '@angular/core'                     ;
import { HttpClient             , HttpHeaders } from '@angular/common/http'              ;
import { Router                               } from '@angular/router'                   ;
import { Observable                           } from 'rxjs'                   ;
import { TokenInterceptorService              } from '../auth/token-interceptor.service' ;
import { environment                          } from '../../environments/environment'    ;

@Injectable()
export class UserService extends TokenInterceptorService {
  private static BASE_URL = '';

  constructor(private _http: HttpClient, public router: Router) {
    super();
    UserService.BASE_URL = environment.auth_target;
  }

  uploadImage(evt: any): Observable<any> {
    let files: FileList = evt.target.files;

    if (files.length > 0) {
      let file: File = files[0];

      let formData: FormData = new FormData();

      formData.append('profile', file, file.name);

      let headers = new HttpHeaders(
        {
          user_uuid: `${localStorage.getItem('user_uuid')}`,
          token: `${localStorage.getItem('access_token')}`
        });

      return this._http.post(`${UserService.BASE_URL}/aws/image`, formData);
    }
  };

  getZoomWebinarLink(data: any): Observable<any> {
    return this._http.post(`${UserService.BASE_URL}/zoom/register`, JSON.stringify(data));
  }
}
