import { shareReplay } from 'rxjs/operators';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../user.service';
import { MenuNavListService } from './menu-nav-list.service';
import { BreadCrumbService } from '../../auth/breadcrumb.service';
import { PlatformLocation } from '@angular/common';
import { IpService } from '../../auth/ip.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserActivityService } from '../../app-common/user-activity.service';
import { AmplitudeService } from '../../amplitude/amplitude.service';
import { events } from '../../amplitude/events';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
})
export class UserContainerComponent implements OnInit {
  static img_url = '/assets/profile/profile.png';
  levelSelectorBreadSubject: any;
  @HostBinding('class')
  userContainerComponentClass = 'app-user-container';
  response: any = '';
  menuList = [];
  activeState = 0;
  hoverActive = false;
  examples: any;
  puzzles: any;
  ex: any = '';
  class_room: Number;

  constructor(
    private router: Router,
    private _routes: ActivatedRoute,
    private _authService: AuthService,
    private _userService: UserService,
    private _menuNavList: MenuNavListService,
    public _breadCrumb: BreadCrumbService,
    private _userActivity: UserActivityService,
    private _amps: AmplitudeService,
    location: PlatformLocation
  ) {
    this.router = router;
    location.onPopState(() => {
      this.examples = '';
      this.puzzles = '';
      this.ex = '';
    });
  }

  ngOnInit() {
    this._breadCrumb.levelSelectorBreadSubject.subscribe((res) => {
      this.response = res;
    });

    // this._breadCrumb.notificationBreadcrumb.subscribe(res=>{
    //   this.response=res;
    // })
    this._breadCrumb.exampleBreadSubject.subscribe((res) => {
      this.examples = res;
    });
    this._breadCrumb.puzzleBreadSubject.subscribe((res) => {
      this.puzzles = res;
    });
    this._breadCrumb.episodeBreadSubject.subscribe((res) => {
      this.ex = res;
    });
    window.scroll(0, 0);
    this.menuList = this._menuNavList.getMenuNavList();
    this.getProductTypes();

    const activeItem = this.menuList.filter(
      (item) => item.url === this.router.url
    );

    const routeName = this.router.url.split('/')[2];

    let menuName;
    for (let i = 0; i < this.menuList.length - 1; i++) {
      menuName = this.menuList[i].url.split('/')[2];
      if (routeName === menuName) {
        this.activeState = this.menuList[i].id;
      }
    }
  }

  mobileView() {
    return window.innerWidth < 831;
  }

  checkImage(src, good, bad) {
    const img = new Image();
    img.onload = good;
    img.onerror = bad;
    img.src = src;
  }

  getUserProfilePic() {
    return UserContainerComponent.img_url;
  }

  gotoItem(id: number) {
    this.response = '';
    this.examples = '';
    this.puzzles = '';
    this.ex = '';

    this.activeState = id;
    const item: Array<string> = this.menuList.filter(
      (item1) => item1.id === id
    );
    this._amps.setAmplitudeEvents(events.event_16, {
      item: item[0]['name'],
    });
    if (item[0]['id'] === this.menuList.length - 1) {
      this._userActivity.logUserLogoutActivity('user-logout', 0);
    } else {
      this.router.navigateByUrl(item[0]['url']);
    }
  }

  handleFileSelect(evt) {
    this._userService.uploadImage(evt).pipe(shareReplay()).subscribe();
  }

  mobileVersion() {
    return window.innerWidth < 600;
  }

  gotoHomepage() {
    this.router.navigateByUrl('/');
  }

  activeEvents(e: any) {
    if (e.router || e._router) {
      const url = e.router === undefined ? e._router.url : e.router.url;
      const items: Array<string> = this.menuList.filter(
        (item1: any) => item1.url === url
      );
      const item: any = items[0];
      if (item) {
        this.activeState = item.id;
      }
    }
  }

  getProductTypes() {
    const product: any = [];
    this._authService
      .getUserProductType({ user_id: localStorage.getItem('id') })
      .subscribe(
        (res: any) => {
          const testArray = res.data.product_types.productTypes;
          for (let i = 0; i < testArray.length; i++) {
            product.push(testArray[i].product_type);
          }
          this._menuNavList.setValidProductForUser(product);
        },
        (err: any) => {}
      );
  }

  navigate() {
    this.response = '';
    this.examples = '';
    this.puzzles = '';
    this.ex = '';
    if (this.response) {
      this.response = '';
      this.examples = '';
      this.puzzles = '';
      this.ex = '';
      this.router.navigateByUrl('/user/dreamroom/dr-level-selector');
    } else {
      if (this.activeState == 0) {
        this.router.navigateByUrl(
          `/user/dashboard/${localStorage.getItem('first_name')}`
        );
      }
      if (this.activeState == 1) {
        this.router.navigateByUrl(`/user/dreamroom/dr-level-selector`);
      }
      if (this.activeState == 2) {
        this.router.navigateByUrl('/user/star-room');
      }
      if (this.activeState == 3) {
        this.router.navigateByUrl(
          `/user/class-room/${localStorage.getItem('first_name')}`
        );
      }
      if (this.activeState == 4) {
        this.router.navigateByUrl(
          `/user/live-room/${localStorage.getItem('first_name')}`
        );
      }
      if (this.activeState == 5) {
        this.router.navigateByUrl(
          `/user/camp-room/${localStorage.getItem('first_name')}`
        );
      }
      if (this.activeState == 6) {
        this.router.navigateByUrl(
          `/user/121-room/${localStorage.getItem('first_name')}`
        );
      }
    }
  }

  level() {
    this.examples = '';
    this.puzzles = '';
    this.ex = '';
    if (localStorage.getItem('level_id') === '1') {
      this.router.navigateByUrl(
        `/user/dreamroom/dr-landing/episode-list/${localStorage.getItem(
          'first_name'
        )}/1`
      );
    } else if (localStorage.getItem('level_id') === '2') {
      this.router.navigateByUrl(
        `/user/dreamroom/dr-landing/episode-list/${localStorage.getItem(
          'first_name'
        )}/2`
      );
    } else if (localStorage.getItem('level_id') === '3') {
      this.router.navigateByUrl(
        `/user/dreamroom/dr-landing/episode-list/${localStorage.getItem(
          'first_name'
        )}/3`
      );
    }
  }

  exampleOpen() {
    //   if(this.puzzles){
    //   this.examples = '';
    //   this.puzzles = '';
    //   this.router.navigateByUrl(
    //     `/user/dreamroom/dr-functionality/video/1/${localStorage.getItem(
    //       'example'
    //     )}`
    //   );
    // }
  }
}
