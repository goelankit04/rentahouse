import { RegisterComponent } from '../auth/register/register.component';
import {
  Component,
  HostBinding,
  HostListener,
  AfterViewInit,
  OnInit,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToasterConfig, ToasterService } from 'angular2-toaster';
import { LoginComponent } from '../auth/login/login.component';
import { AuthService } from '../auth/auth.service';
import { MenuNavListService } from '../user/user-container/menu-nav-list.service';
import * as _ from 'lodash';
import { IpService } from '../auth/ip.service';
import { UserActivityService } from '../app-common/user-activity.service';
import { BreadCrumbService } from '../auth/breadcrumb.service';
import { AmplitudeService } from '../amplitude/amplitude.service';
import { events } from '../amplitude/events';
import { ImpersonateComponent } from '../auth/impersonate/impersonate.component';

declare var amplitude: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit, AfterViewInit {
  @HostBinding('class')
  navigationComponentClass = 'app-navigation';

  @Input() liveStreamStatus: boolean;
  @Output() PopUpTrigger = new EventEmitter<any>();
  cookieModal: boolean;
  navMenuList: any;
  cookie: any;
  count: 0;
  data: any;
  id: any;
  openNotification: boolean = false;
  walletImage = `assets/wallet/wallet_navigation.svg`;
  notificationImage = `assets/notification.png`;
  userNotification: any;
  userCount: any;
  unseenCount: any;
  userCountArray = [];
  userCounting = [];
  userSeen: any;
  // role_id: any;

  public config1: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
  });

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private toasterService: ToasterService,
    private _menuNavList: MenuNavListService,
    private _auth: AuthService,
    private _ipService: IpService,
    private _amps: AmplitudeService,
    private _userActivity: UserActivityService,
    private _breadCrumb: BreadCrumbService
  ) {
    // this.role_id=localStorage.getItem('role_id')
  }

  ngOnInit() {
    if (localStorage.getItem('first_name')) {
      this.getCount();
      this.getNotification();
    }
    // }
    $(document).click((f) => {
      if ($(f.target).is('#notifications *')) {
        return;
      } else {
        this.openNotification = false;
      }
    });
  }

  openLiveStreamPopup() {
    this.PopUpTrigger.emit(true);
  }

  ngAfterViewInit() {
    // this.role_id = localStorage.getItem('role_id');
    // console.log("role_id",this.role_id);

    setTimeout(() => {
      if (this.router.url === '/footer/privacy-policy') {
        this.cookieModal = false;
      } else {
        if (localStorage.getItem('privacy')) {
          this.cookieModal = false;
        } else {
          if (localStorage.getItem('cookie') === 'yes') {
            this.cookieModal = false;
          } else {
            this.cookieModal = true;
          }
        }
      }
      this.navMenuList = this._menuNavList.getMenuNavList();
    }, 3000);
  }

  getCount() {
    this._auth.getNotificationCount().subscribe((res: any) => {
      this.unseenCount = res.data.unseen;
    });
  }

  getNotification() {
    const datas = {
      limit: 8,
      offset: 0,
    };
    this._auth.getNotification(datas).subscribe((res: any) => {
      this.userNotification = res.data.notification;
      this.userCount = res.data.count;
      this.userSeen = res.data.unseen;

      for (let i = 0; i < this.userNotification.length; i++) {
        if (this.userNotification[i].is_seen == false) {
          this.userCounting = this.userNotification[i]._id;
          this.userCountArray.push(this.userCounting);
        }
      }
      this._amps.setAmplitudeEvents(events.event_6, {
        success: 'yes',
      });
    });
  }

  updateNotification() {
    const data = {
      notificationId: this.userCountArray,
      isMarkAllRead: false,
    };
    this._auth.updateNotification(data).subscribe((res: any) => {
      this.unseenCount = res.data.unseen;
    });
  }

  gotoHomepage() {
    this.router.navigateByUrl('/');
  }

  getUserName() {
    return localStorage.getItem('first_name');
  }

  getRoleId() {
    return localStorage.getItem('role_id');
  }

  getPreviousToken() {
    return localStorage.getItem('previous_access_token');
  }

  getBackgroundColor() {
    if (this.router.url === '/') {
      return scrollY > 100
        ? '#595959'
        : this.getMobileScreenWidth()
        ? '#000000'
        : 'rgb(0,0,0, 0.0)';
    } else {
      return '#595959';
    }
  }

  getTopNavBarColor() {
    if (this.router.url === '/') {
      return scrollY > 100 ? '#353434' : '#000000';
    } else {
      return '#353434';
    }
  }

  hideNavBarBackground() {
    if (this.router.url === '/') {
      return !(scrollY > 100);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.router.url === '/') {
      this.getBackgroundColor();
    }
  }

  popToast(config: any) {
    this.toasterService.pop(config);
  }

  gotoHomePage() {
    if (this.router.url !== '/') {
      this.router.navigateByUrl('/');
    }
  }

  openLoginDialog() {
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

    // fixing navigation ovelay over forms
    this.containerOverlay();
  }

  openImpersonateDialog() {
    const id = 0;
    const dialogRef = this.dialog.open(ImpersonateComponent, {
      width: window.innerWidth < 630 ? '90%' : '400px',
      height: window.innerWidth < 630 ? '50%' : 'auto',
      autoFocus: false,
      data: {
        product_id: 0,
        gateway: id,
      },
    });

    // fixing navigation ovelay over forms
    this.containerOverlay();
  }

  LogInMenuDisplay() {
    if (innerWidth > 630) {
      return false;
    } else {
      return true;
    }
  }

  gotoUrl(menu_id: number) {
    const item: Array<string> = this.navMenuList.filter(
      (item1) => item1.id === menu_id
    );
    this._amps.setAmplitudeEvents(events.event_7, {
      success: 'yes',
      item: item[0]['name'],
    });
    this._breadCrumb.levelSelectorBreadcrumb(0);
    this._breadCrumb.episodeBreadCrumb(0);
    this._breadCrumb.puzzleBreadCrumb(0);
    this._breadCrumb.exampleBreadCrumb(0);
    // console.log(this.navMenuList.length);
    if (menu_id === this.navMenuList.length - 1) {
      // console.log("logout");
      this._userActivity.logUserLogoutActivity('user-logout', 0);
      // localStorage.clear();
      // this._auth.logoutUser();
    } else {
      this.router.navigateByUrl(this.navMenuList[menu_id].url);
      // console.log("not logout");
    }
  }

  logoutUser() {
    this._userActivity.logUserLogoutActivity('user-logout');
  }

  schoolToMenu() {
    return window.innerWidth < 500;
  }

  onHomepage() {
    return this.router.url !== '/';
  }

  getMobileScreenWidth() {
    return window.innerWidth < 831;
  }

  getMobileNavigationMenu() {
    return window.innerWidth < 1000;
  }

  openSpecialOffer() {
    this.router.navigateByUrl('/product-catalog/1/3');
    amplitude.getInstance().logEvent('product-catalog');
  }

  navigatetoUrl(url: string) {
    if (this.router.url !== '/') {
      this.router.navigateByUrl(`/`);
    }
  }

  postLoginLinks(id: number) {
    // console.log(id, 'links id');
    this._breadCrumb.levelSelectorBreadcrumb(0);
    this._breadCrumb.episodeBreadCrumb(0);
    this._breadCrumb.puzzleBreadCrumb(0);
    this._breadCrumb.exampleBreadCrumb(0);
    this.router.navigateByUrl(this.navMenuList[id].url);
  }

  isUserLoggedIn() {
    return this._auth.isUserLoggedIn();
  }

  openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: window.innerWidth < 630 ? '90%' : '32em',
      height: window.innerHeight < 800 ? '92%' : '41em',
      autoFocus: false,
      data: {
        product_id: 0,
        gateway: 0,
      },
    });

    // fixing navigation ovelay over forms
    this.containerOverlay();
  }

  openCampRoom() {
    this.router.navigateByUrl('/camp-room');
  }

  close() {
    this.cookieModal = false;
    localStorage.setItem('cookie', 'yes');
  }

  acceptCookies() {
    this.data = Math.random();
    localStorage.setItem('privacy', this.data);
    this.cookieModal = false;
  }

  isSchoolUser() {
    let status = false;
    const schoolId = 15;

    for (
      let i = 0;
      i < localStorage.getItem('role_id').split(',').length;
      i++
    ) {
      status =
        Number(localStorage.getItem('role_id').split(',')[i]) === schoolId;
      // this.role_id=status
      if (status) {
        return true;
      }
    }
    return status;
  }

  openUserWallet() {
    const redirectURL = `/user/profile/${localStorage.getItem('first_name')}/2`;
    this._amps.setAmplitudeEvents(events.event_8, {
      success: 'yes',
    });
    if (this.router.url === redirectURL) {
      location.reload();
    } else {
      this.router.navigateByUrl(
        `/user/profile/${localStorage.getItem('first_name')}/2`
      );
    }
  }

  openUserNotification(value) {
    // console.log(value,"value")
    this.getNotification();
    this.openNotification = !this.openNotification;
    if (this.unseenCount != 0) {
      setTimeout(() => {
        this.updateNotification();
      }, 3000);
    }
  }

  openUserNotifications(id) {
    this.getNotification();
    this.updateNotification();
    this.router.navigateByUrl(this.navMenuList[id].url);
  }

  navigateToNotification() {
    this.router.navigateByUrl(this.navMenuList[9].url);
  }

  getWalletPoints() {
    const balance = localStorage.getItem('wallet_balance');
    return balance !== undefined || balance !== null ? balance : 0;
  }

  getWalletBalanceFromLocalStorage() {
    return localStorage.getItem('wallet_balance');
  }

  hover_wallet(value: boolean) {
    this.walletImage = value
      ? 'assets/wallet/wallet_navigation_green.svg'
      : 'assets/wallet/wallet_navigation.svg';
    // console.log(this.walletImage);
  }

  openBlog() {
    this._amps.setAmplitudeEvents(events.event_5, {
      success: 'yes',
    });
    window.open('https://blog.nurtr.com', '_blank');
  }

  containerOverlay() {
    // fixing navigation ovelay over forms
    if (!this.router.url.match('/user/')) {
      document
        .getElementsByClassName('cdk-overlay-container')[0]
        .setAttribute('style', 'z-index: 100 !important');
    } else {
      document
        .getElementsByClassName('cdk-overlay-container')[0]
        .setAttribute('style', 'z-index: 0 !important');
    }
  }
}
