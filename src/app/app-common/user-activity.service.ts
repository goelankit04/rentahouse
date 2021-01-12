import { Injectable } from '@angular/core';
import { IpService } from '../auth/ip.service';
import { AuthService } from '../auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UserActivityService {

  constructor(
    private _ipService: IpService,
    private _authService: AuthService
  ) { }

  // Logging in user activity
  logUserActivity(activityName: string, productId?: any, episodeId?: any) {
    if (this._authService.isUserLoggedIn()) {
      // Logging in user data
      this._ipService.getUserInfo().subscribe(
        (res: any) => {
          this._authService.logUserActivity(this.getLogActivityJSON(res, activityName, productId, episodeId)).subscribe(
            (response: any) => {
              // return
            }
          );
        },
        (err: HttpErrorResponse) => {
          this._authService.logUserActivity(this.getLogActivityJSON(err, activityName, productId, episodeId)).subscribe();
        }
      );
    }
  }

  // Logging in user
  logUserLogoutActivity(activityName: string, productId?: any, episodeId?: any) {
    // Logging in user data
    if (this._authService.isUserLoggedIn()) {
      this._ipService.getUserInfo().subscribe(
        (res: any) => {
          this._authService.logUserActivity(this.getLogActivityJSON(res, activityName, productId, episodeId)).subscribe(
            (response: any) => {
              // console.log("41");
              
              // logout logged
              this._authService.logoutUser();
            },
            (error: any) => {
              // console.log("47");
              
              // logout user without logging
              this._authService.logoutUser();
            }
          );
        },
        (err: HttpErrorResponse) => {
          this._authService.logUserActivity(this.getLogActivityJSON(err, activityName, productId, episodeId)).subscribe(
            (response: any) => {
              // logout not logged
              // console.log("58");
              
              this._authService.logoutUser();
            },
            (error: any) => {
              // console.log("63");
              
              // cannot log
              this._authService.logoutUser();
            }
          );
        }
      );
    }
  }


  // creating the JSON data for log
  getLogActivityJSON(response: any, activityName: string, productId?: any, episodeId?: any) {
    return {
      // ip Api data
      ip_as: response.as,
      city: response.city,
      country: response.country,
      country_code: response.countryCode,
      isp: response.isp,
      latitude: response.lat,
      longitude: response.lon,
      organisation: response.org,
      ip_address: response.query,
      region: response.region,
      region_name: response.regionName,
      status: response.status,
      timezone: response.timezone,
      zip_code: response.zip,
      // normal data picked up from the browser
      browser: this._ipService.getUserBrowser(),
      operating_system: navigator.platform,
      activity_name: activityName,
      environment: this._ipService.getEnvironmentName(),
      product_id: productId,
      episode_id: episodeId,
      // picking up the screen resolution
      screen_size: `${window.screen.width}x${window.screen.height}`,
    };
  }
}
