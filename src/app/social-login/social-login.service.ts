import { Injectable }  from '@angular/core';
import { Observable ,  Observer }  from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { HttpClient }  from '@angular/common/http';

declare let gapi: any;
declare let IN: any;
declare let FB: any;

@Injectable()
export class SocialLoginService {
  gauth: any;

  constructor(private _authService: AuthService, private _http: HttpClient) {
  }

  login(provider: string): Observable<Object> {
    return Observable.create(
      (observer: Observer<Object>) => {
        switch (provider) {
          case 'google':
            if (typeof( this.gauth ) === 'undefined') {
              this.gauth = gapi.auth2.getAuthInstance();
            }
            if (!this.gauth.isSignedIn.get()) {
              this.gauth.signIn().then(() => {
                localStorage.setItem('_login_provider', 'google');
                observer.next(this._fetchGoogleUserDetails());
                observer.complete();
              });
            } else {
              localStorage.setItem('_login_provider', 'google');
              observer.next(this._fetchGoogleUserDetails());
              observer.complete();
            }

            break;
          case 'facebook':
            FB.getLoginStatus((response: any) => {
              if (response.status === 'connected') {
                FB.api('/me?fields=name,email,picture', (res: any) => {
                  if (!res || res.error) {
                    observer.error(res.error);
                  } else {
                    const userDetails = {
                      name: res.name,
                      email: res.email,
                      uid: res.id,
                      provider: 'facebook',
                      image: res.picture.data.url,
                      token: response.authResponse.accessToken
                    };
                    localStorage.setItem('_login_provider', 'facebook');
                    observer.next(userDetails);
                    observer.complete();
                  }
                });
              } else {
                FB.login((response: any) => {
                  if (response.status === 'connected') {
                    FB.api('/me?fields=name,email,picture', (res: any) => {
                      if (!res || res.error) {
                        observer.error(res.error);
                      } else {
                        const userDetails = {
                          name: res.name,
                          email: res.email,
                          uid: res.id,
                          provider: 'facebook',
                          image: res.picture.data.url,
                          token: response.authResponse.accessToken
                        };
                        localStorage.setItem('_login_provider', 'facebook');
                        observer.next(userDetails);
                        observer.complete();
                      }
                    });
                  }
                }, {scope: 'email', auth_type: 'rerequest'});
              }
            });
            break;
          case 'twitter':
            this._authService.generateTwitterAuthParams().subscribe(
              (res: any) => {
                window.location.href = `https://api.twitter.com/oauth/authenticate?oauth_token=${res.data.tokenRequestResponse.oauth_token}`;
              }
            );
            break;
          case 'linkedin':
            IN.User.authorize(function () {
              IN.API.Raw('/people/~:(id,first-name,last-name,email-address,picture-url)').result(function (res: any) {
                const userDetails = {name: res.firstName + ' ' + res.lastName, email: res.emailAddress, uid: res.id, provider: 'linkedIN', image: res.pictureUrl};
                localStorage.setItem('_login_provider', 'linkedin');
                observer.next(userDetails);
                observer.complete();
              });
            });
            break;
        }
      }
    );
  }

  logout(): Observable<boolean> {
    const provider = localStorage.getItem('_login_provider');
    return Observable.create((observer: any) => {
      switch (provider) {
        case 'google':
          const gElement = document.getElementById('gSignout');

          if (typeof( gElement ) !== 'undefined' && gElement != null) {
            gElement.remove();
          }

          const d = document;
          let gSignout;
          const ref: any = d.getElementsByTagName('script')[ 0 ];
          gSignout = d.createElement('script');
          gSignout.src = 'https://accounts.google.com/Logout';
          gSignout.type = 'text/html';
          gSignout.id = 'gSignout';
          localStorage.removeItem('_login_provider');
          observer.next(true);
          observer.complete();
          ref.parentNode.insertBefore(gSignout, ref);
          break;
        case 'facebook':
          FB.logout(function (res: any) {
            localStorage.removeItem('_login_provider');
            observer.next(true);
            observer.complete();
          });
          break;
        case 'linkedin':
          IN.User.logout(function () {
            localStorage.removeItem('_login_provider');
            observer.next(true);
            observer.complete();
          }, {});
          break;
      }
    });
  }

  private _fetchGoogleUserDetails() {
    const currentUser = this.gauth.currentUser.get();
    const profile = currentUser.getBasicProfile();
    const idToken = currentUser.getAuthResponse().id_token;
    const accessToken = currentUser.getAuthResponse().access_token;
    return {
      token: accessToken,
      idToken: idToken,
      uid: profile.getId(),
      name: profile.getName(),
      email: profile.getEmail(),
      image: profile.getImageUrl(),
      provider: 'google'
    };
  }
}
