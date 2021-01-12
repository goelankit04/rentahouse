import { Injectable } from "@angular/core";
import * as Rx from "rxjs";
import "rxjs/Rx";

@Injectable()
export class BreadCrumbService {
  levelSelectorBreadSubject: Rx.Subject<any> = new Rx.Subject<any>();
  exampleBreadSubject: Rx.Subject<any> = new Rx.Subject<any>();
  puzzleBreadSubject: Rx.Subject<any> = new Rx.Subject<any>();
  episodeBreadSubject: Rx.Subject<any> = new Rx.Subject<any>();
  walletBreadcrumb: Rx.Subject<any> = new Rx.Subject<any>();
  notificationBreadcrumb: Rx.Subject<any> = new Rx.Subject<any>();

  constructor() { }

  getLevel(id: number) {
    switch (id) {
      case 1: return 'Beginner';
      case 2: return 'Intermediate';
      case 3: return 'Advance';
      default: return '';
    }
  }

  public levelSelectorBreadcrumb(id: number) {
    this.levelSelectorBreadSubject.next(this.getLevel(parseInt(id.toString())));
  }

  public exampleBreadCrumb(id: number) {
    this.exampleBreadSubject.next(id ? 'Examples' : '');
  }

  public puzzleBreadCrumb(id: number) {
    this.puzzleBreadSubject.next(id ? 'Puzzles' : '');
  }

  public episodeBreadCrumb(id: number) {
    this.episodeBreadSubject.next(id ? 'Episode ' + id : '');
  }

  public updatedWallet(id: number) {
    this.walletBreadcrumb.next(id === 0 ? 'Wallet' : '');
  }

  public updatedNotification(id: number) {
    this.notificationBreadcrumb.next(id === 0 ? 'Notification' : '');
  }
}
