import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class PopupService {

  responseData: any;
  streaming_live: any;

  constructor(
    private _router: Router
  ) { }

  setData(response: any) {
    const livestream = response.data.promotionalPopup.promotionalPopup.length > 0 ? response.data.promotionalPopup.promotionalPopup[0].is_streaming_live : false;
    this.responseData = response;
    this.setStreamingLive(livestream);
  }

  getData() {
    if (this.isValidRoute()) {
      return this.isValidRoute().data;
    }
    return null;
  }

  getTargetURL() {
    if (this.isValidRoute()) {
      return this.isValidRoute().target_url;
    }
    return null;
  }

  isExternalLink() {
    if (this.isValidRoute()) {
      return this.isValidRoute().is_route_external;
    }
    return null;
  }

  isResponseInitialized(): boolean {
    return this.responseData !== undefined;
  }

  isRouteAllowed(): boolean {
    if (this.responseData) {
      for (let z = 0; z < this.responseData.data.promotionalPopup.promotionalPopup.length; z++) {
        const routes = this.responseData.data.promotionalPopup.promotionalPopup[z].allowed_routes;
        for (let i = 0; i < routes.length; i++) {
          if (routes[i] === '*') {
            return true;
          } else {
            if (this._router.url === routes[i]) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  isValidRoute(): any {
    if (this.isRouteAllowed()) {
      for (let z = 0; z < this.responseData.data.promotionalPopup.promotionalPopup.length; z++) {
        const routes = this.responseData.data.promotionalPopup.promotionalPopup[z].allowed_routes;
        for (let i = 0; i < routes.length; i++) {
          if (routes[i] === '*') {
            return this.responseData.data.promotionalPopup.promotionalPopup[z];
          } else {
            if (this._router.url === routes[i]) {
              return this.responseData.data.promotionalPopup.promotionalPopup[z];
            }
          }
        }
      }
    }
    return null;
  }

  setStreamingLive(value: any) {
    this.streaming_live = value;
  }

  getStreamingLive(): any {
    return this.streaming_live;
  }

  getStayOnClickStatus() {
    return this.responseData.data.promotionalPopup.promotionalPopup[0].stay_on_click;
  }

}
