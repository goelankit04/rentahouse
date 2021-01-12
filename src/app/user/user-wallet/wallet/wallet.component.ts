
import { forkJoin as observableForkJoin, Observable } from 'rxjs';
import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { PlatformLocation } from '@angular/common';
import { BreadCrumbService } from '../../../auth/breadcrumb.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  @HostBinding('class') WalletComponentClass = 'app-wallet';

  walletBalance: any;
  walletRedeem: any;
  walletLog: any;
  offset = 0;
  mobileView = false;
  limit = 10;
  walletCount: any;
  ex: any = '';
  puzzles: any;
  examples: any;
  response: any;

  constructor(
    private _walletService: AuthService,
    location: PlatformLocation,
    private _breadCrumb: BreadCrumbService
  ) {

  }

  ngOnInit() {
    // this._breadCrumb.puzzleBreadCrumb(0);
    // this._breadCrumb.levelSelectorBreadcrumb(0);
    // this._breadCrumb.exampleBreadCrumb(0);
    // this._breadCrumb.episodeBreadCrumb(0);
    // this._breadCrumb.updatedWallet(0);
    this.mobileView = window.innerWidth < 800;
    const data = {
      offset: this.offset,
      limit: this.limit
    };
    observableForkJoin(this._walletService.getWalletBalance(), this._walletService.getWalletLog(data)).subscribe(
      (res: any) => {
        this.walletBalance = res[0].data.wallet_amount ? res[0].data.wallet_amount : 0;
        this.walletRedeem = res[0].data.wallet_points ? res[0].data.wallet_points : 0;
        this.walletLog = res[1].data.log.length > 0 ? res[1].data.log : null;
        this.walletCount = res[1].data.count;
        // console.log(this.walletLog,"walletlog")
      }
    );

    this._walletService.getWalletBalance().subscribe(
      (res: any) => {
        // console.log(res)
        this.walletBalance = res.data.wallet_amount ? res.data.wallet_amount : 0;
        this.walletRedeem = res.data.wallet_points ? res.data.wallet_points : 0;
      }
    );


    this._walletService.getWalletLog(data).subscribe(
      (res: any) => {
        // console.log(res)
      });
  }

  getWallet() {
    const data = {
      offset: this.offset,
      limit: this.limit
    };
    this._walletService.getWalletLog(data).subscribe(
      (res: any) => {
        // console.log(res);
        this.walletLog = res.data.log;
        this.walletCount = res.data.count;
      });
  }

  previous() {
    this.offset -= this.limit;
    this.getWallet();
  }

  next() {

    this.offset += this.limit;
    this.getWallet();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobileView = window.innerWidth < 800;
  }

}
