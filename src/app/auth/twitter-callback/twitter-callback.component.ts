import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router }                 from '@angular/router';
import { AuthService }                    from '../auth.service';

@Component({
  selector: 'app-twitter-callback',
  templateUrl: './twitter-callback.component.html',
})
export class TwitterCallbackComponent implements OnInit {
  @HostBinding('class') twitterCallbackComponentClass = 'app-twitter-callback';

  showVerifyMobileDialog: boolean;
  twitterResponse: any;

  redirectURL = `/user/dashboard/${localStorage.getItem('first_name')}`;

  constructor(
    private _routes: ActivatedRoute,
    private _authService: AuthService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this._routes.queryParams.subscribe(
      (params) => {
        this._authService.twitterOAuthVerifier(params).subscribe(
          (res) => {
            this.twitterResponse = res;
            this.showVerifyMobileDialog = (res.data.accesstoken === undefined);
            if (!this.showVerifyMobileDialog) {
              this._router.navigateByUrl(this.redirectURL);
            }
          }
        );
      },
      (err) => console.log(err)
    );
  }

  getIntentReturn(value: any) {
    if (value) {
      this._router.navigateByUrl(this.redirectURL);
    }
  }
}
