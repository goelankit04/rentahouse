import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { ToasterConfig, ToasterService } from 'angular2-toaster';
import {
  MatBottomSheet,
  MatBottomSheetConfig,
} from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { AppCommonService } from './app-common/app-common.service';
import { PopupService } from './promotional-popup/popup.service';
import { IpService } from './auth/ip.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

import { LoginComponent } from './auth/login/login.component';
import { AmplitudeService } from './amplitude/amplitude.service';
import { events } from './amplitude/events';
import { RecommendationComponent } from './app-common/recommendation/recommendation.component';
import { SeoService } from './seo.service';

declare var amplitude: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  is_typeform_res = false;
  username: string;
  cricketFooter = false;
  password: string;
  is_user_allowed = false;
  roleId: any;
  popStatus = false;
  streamStatus = false;
  // live$: Observable<any>;
  liveProduct: any;
  public config: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-center',
    tapToDismiss: true,
    titleClass: 'app_toaster_title',
    preventDuplicates: true,
    timeout: 100000,
  });

  constructor(
    private dialog: MatDialog,
    private _appCommon: AppCommonService,
    private _router: Router,
    private _authService: AuthService,
    private _popupService: PopupService,
    private _ipService: IpService,
    private _toasterService: ToasterService,
    private _routes: ActivatedRoute,
    private _amps: AmplitudeService,
    private _recommendationContainer: MatBottomSheet,
    private authService: AuthService,
    @Inject(DOCUMENT) private document: any,
    private _seos: SeoService
  ) {
    if (window.name !== '1') {
      if (window.location.href.indexOf('testourwebsite') > -1) {
        window.name = '0';
        this.is_user_allowed = false;
      } else {
        window.name = '0';
        this.is_user_allowed = true;
      }
    } else {
      window.name = '0';
      this.is_user_allowed = true;
    }

    if (!this._authService.isUserLoggedIn()) {
      this._authService.removeLocalStorageItem();
    }

    if (window.location.href.includes('sales-promotions')) {
      this.is_typeform_res = true;
    }
    if (
      window.location.href.includes('cricket') ||
      window.location.href.includes('chess')
    ) {
      this.cricketFooter = true;
    }
  }

  ngOnInit() {
    // check current page here
    this._seos.addMetaTags();

    // this._router.events
    //   .filter((event) => event instanceof NavigationEnd)
    //   .map(() => this._routes)
    //   .map((route) => {
    //     while (route.firstChild) {
    //       route = route.firstChild;
    //     }
    //     return route;
    //   })
    //   .filter((route) => route.outlet === 'primary')
    //   .mergeMap((route) => route.data)
    //   .subscribe((event) => {
    //     // this.titleService.setTitle(event['title']
    //     if (this._router.url === '/') {
    //       this._seos.addMetaTags();
    //     } else {
    //       this._seos.removeMetaTags();
    //     }
    //   });

    this._routes.queryParams.subscribe((params) => {
      delete params.utm_source;
      delete params.utm_medium;
      delete params.utm_campaign;
      delete params.utm_content;
      delete params.utm_term;

      this._amps.setAmplitudeEvents(events.event_1, {
        success: 'yes',
      });
    });
    this._authService.getLive().subscribe(
      (res: any) => {
        if (res.data && res.data.product) {
          const product = res.data.product[0];

          this.liveProduct = {
            ...product,
            name: product.episode_id ? product.ep_name : product.name,
            author_name: product.episode_id
              ? product.ep_mentor
              : product.author_name,
          };
        }
      },
      (err: any) => {
        // console.log()
      }
    );

    if (this._authService.isUserLoggedIn()) {
      this._authService.settWalletBalanceToLocalStorage();
    } else {
      this._ipService.getUserInfo().subscribe(
        (res: any) => localStorage.setItem('country', `${res.country}`),
        (err: HttpErrorResponse) =>
          this._ipService.countryChange.next('United States')
      );
    }
    localStorage.setItem('puzzle_opened', 'true');
  }

  ngOnDestroy() {
    this._seos.removeMetaTags();
  }

  loginTestUser() {
    this._authService
      .loginTestUser({
        username: this.username,
        password: this.password,
      })
      .subscribe(
        (res) => {
          window.name = '1';
          this.is_user_allowed = true;
        },
        (err) => {
          this.getBorderProperty(true);
        }
      );
  }

  getBorderProperty(isError?: boolean) {
    return isError ? '1px solid red' : '1px solid #A0CD4E';
  }

  getNavigationTrigger(value: any) {
    this.popStatus = value;
  }

  getPopupOutEvent(value: any) {
    this.popStatus = value;
  }

  getStreamStatus(value: boolean) {
    this.streamStatus = value;
  }

  closeLiveSession() {
    this._amps.setAmplitudeEvents(events.event_19, {
      login: !this._authService.isUserLoggedIn() ? 'no' : 'yes',
      title: this.liveProduct.name,
      mentor: this.liveProduct.author_name,
      scheduled_time: this.liveProduct.event_date,
      product_id: this.liveProduct.id,
    });
  }

  dragPosition = { x: 0, y: 0 };
  position = { ...this.dragPosition };
  offset = { x: 0, y: 0 };

  dragStarted(event) {
    // console.log(event);
    this.offset = { ...(<any>event.source._dragRef)._passiveTransform };

    this.position.x = this.dragPosition.x + this.offset.x;
    this.position.y = this.dragPosition.y + this.offset.y;
    this.dragPosition = {
      x: this.dragPosition.x + this.position.x,
      y: this.dragPosition.y + this.position.y,
    };
    this._amps.setAmplitudeEvents(events.event_20, {
      final_coordinates: this.dragPosition,
    });
  }

  join(liveProduct) {
    this._amps.setAmplitudeEvents(events.event_18, {
      login: !this._authService.isUserLoggedIn() ? 'no' : 'yes',
      title: this.liveProduct.name,
      mentor: this.liveProduct.author_name,
      scheduled_time: this.liveProduct.event_date,
      product_id: this.liveProduct.id,
    });

    if (!this._authService.isUserLoggedIn()) {
      const id = 0;
      const dialogRef = this.dialog.open(LoginComponent, {
        width: window.innerWidth < 630 ? '90%' : '800px',
        height: window.innerWidth < 630 ? '50%' : '500px',
        autoFocus: false,
        data: {
          product_id: 0,
          gateway: id,
        },
      });
    } else {
      const payload = {
        userId: localStorage.getItem('id'),
        productId: this.liveProduct.id,
        episodeId: this.liveProduct.episode_id,
      };

      this._authService.getZoomLink(payload).subscribe(
        (res: any) => {
          window.open(res.data.join_url, '_blank');
          this._amps.setAmplitudeEvents(events.event_23, {
            productId: this.liveProduct.id,
            episodeId: this.liveProduct.episode_id,
            productName: liveProduct.name,
            duration: liveProduct.duration,
            productType: liveProduct.product_type,
          });
        },
        (err: HttpErrorResponse) => {
          this._amps.setAmplitudeEvents(events.event_23, {
            productId: this.liveProduct.id,
            episodeId: this.liveProduct.episode_id,
            productName: liveProduct.name,
            duration: liveProduct.duration,
            productType: liveProduct.product_type,
            error: err.error.message,
          });
          if (
            err.error.message ===
            'Ooops!!! You are not registered for this webinar'
          ) {
            this._router.navigateByUrl(
              `/direct?product=${this.liveProduct.id}&productType=${this.liveProduct.product_type}`
            );
          } else {
            this._toasterService.pop('error', err.error.message);
          }
        }
      );
    }
  }

  openRecommendation() {
    // closing the div
    localStorage.setItem('recommended_container', 'false');

    const url = this._router.url.split('product=')[1];
    const productId = url !== undefined ? url.split('&')[0] : undefined;

    // console.log(this._router.url, productId, localStorage.getItem('id'), Number.parseInt(localStorage.getItem('id')));

    // if (this.authService.isUserLoggedIn() || productId !== undefined) {
    //   this.authService.recommendedProducts({
    //     user_id: localStorage.getItem('id') !== null ? Number.parseInt(localStorage.getItem('id')) : undefined,
    //     country: localStorage.getItem('country'),
    //     product_id: productId
    //   }).subscribe(
    //     (res: any) => {

    //       if (localStorage.getItem('recommended_container') === 'false' && res.data.products.length > 0) {
    //         const config: MatBottomSheetConfig = {
    //           ariaLabel: null,
    //           autoFocus: false,
    //           panelClass: 'recommendation__container',
    //           disableClose: true,
    //           hasBackdrop: false,
    //           data: {
    //             name: 'User Recommended Products',
    //             product: res.data.products
    //           },
    //         };
    //         console.log('got data');
    //         this._recommendationContainer.open(RecommendationComponent, config);
    //         localStorage.setItem('recommended_container', 'true');
    //       }

    //     },
    //     (err: HttpErrorResponse) => {
    //       console.log(err);
    //     }
    //   );
    // }
  }
}
