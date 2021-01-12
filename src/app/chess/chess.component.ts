import { Component, HostBinding, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IpService } from '../auth/ip.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserActivityService } from '../app-common/user-activity.service';
@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
})
export class ChessComponent implements OnInit {
  @HostBinding('class') chessComponentClass = 'app-chess';
  url =
    'https://s3.ap-south-1.amazonaws.com/nurtr.com/background-video/background-video.mp4';
  catalogProducts: any;
  catalogDataReceived = false;
  x = 1;

  constructor(
    private _authService: AuthService,
    private _ipService: IpService,
    private _userActivity: UserActivityService
  ) {}

  ngOnInit() {
    // window.scroll(0, 0);
    this._userActivity.logUserActivity('home-page');
    this._ipService.getUserInfo().subscribe(
      (ipRes: any) => {
        this._authService
          .getStackData({ country: `${ipRes.country}` })
          .subscribe((res: any) => {
            this.catalogProducts = res.data.productList;
            for (const catlog of this.catalogProducts) {
              catlog.scrollId = this.lowerCase(catlog.title).toString();
            }
            this.catalogDataReceived = true;
          });
      },
      (ipErr: HttpErrorResponse) => {
        this._authService
          .getStackData({ country: `India` })
          .subscribe((res: any) => {
            this.catalogProducts = res.data.productList;
            for (const catlog of this.catalogProducts) {
              catlog.scrollId = this.lowerCase(catlog.title).toString();
            }
            this.catalogDataReceived = true;
          });
      }
    );
  }

  lowerCase(name: string) {
    name = name.toLowerCase();
    name = name.replace(' ', '_');
    return name;
  }
}
