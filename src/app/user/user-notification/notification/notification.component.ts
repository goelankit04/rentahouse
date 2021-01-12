import {
  Component,
  HostBinding,
  HostListener,
  AfterViewInit,
  OnInit
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { BreadCrumbService } from '../../../auth/breadcrumb.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  userNotification: any;
  userCount: any;
  userCountArray = [];
  userCounting = [];
  unseenCount: any;
  pageList = [];
  pageNumber: number;
  usersCount = 10;
  currentPage = 1;
  offset = 0;
  unseen:any;
  @HostBinding('class') notificationComponentClass = 'app-notification';
  constructor(private _activatedRoute: ActivatedRoute,
    private _auth: AuthService,
    private _breadCrumb: BreadCrumbService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._breadCrumb.updatedNotification(0);
    if (this.isUserLoggedIn) {
      this.getNotification();
    }


  }

  getNotification() {

    const datas = {
      limit: this.usersCount,
      offset: (this.usersCount * (this.currentPage - 1))
    }
    this._auth.getNotification(datas).subscribe((res: any) => {
      this.userNotification = res.data.notification;
      this.userCount = res.data.count;
      this.unseenCount=res.data.unseen;
      this.getPagination();
      for (let i = 0; i < this.userNotification.length; i++) {
        if (this.userNotification[i].is_seen == false) {
          this.userCounting = this.userNotification[i]._id;
          this.userCountArray.push(this.userCounting)
        }
      }
    })
  }

  isUserLoggedIn() {
    return this._auth.isUserLoggedIn();
  }

  gotoPage(pageNumber: any) {
    this.currentPage = pageNumber;
    this.getNotification();
  }

  updateNotification() {
    const data = {
      // notificationId: this.userCountArray,
      isMarkAllRead:true
    }
    this._auth.updateNotification(data).subscribe((res: any) => {
      this.unseenCount = res.data.unseen;
    })
    this.getNotification();
  }

  getPagination() {
    this.pageList = [];
    this.pageNumber = Math.ceil(this.userCount / this.usersCount);
    for (let i = 1; i <= this.pageNumber; i++) {
      this.pageList.push(i);
    }
  }
}
