import { Router } from '@angular/router';
import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../auth/auth.service';
import { LoginComponent } from '../../../auth/login/login.component';
import { MenuNavListService } from '../../../user/user-container/menu-nav-list.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
})
export class FeaturesComponent implements OnInit {
  @HostBinding('class') featuresComponentClass = 'app-features';
  @Input() stackData;

  private productId = 102;
  private buyProductId = 35;
  private productType = 1;
  private buyProductType = 7;
  private categoryId = 1;
  private userProductType = 1;
  private nothingToDisplay: boolean;
  public isLoading: boolean;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    private _auth: AuthService,
    private _menuNavList: MenuNavListService
  ) {}

  ngOnInit() {}

  getColumns() {
    return window.innerWidth > 800 ? 3 : 1;
  }

  isUserLoggedIn() {
    return this._auth.isUserLoggedIn();
  }

  openCheckoutPage() {
    this.router.navigateByUrl('/direct?product=35&productType=7');
  }

  checkUserLogIn() {
    if (this._auth.isUserLoggedIn()) {
      this._auth
        .availableProductForUser({
          productId: this.productId,
          userId: localStorage.getItem('id'),
        })
        .subscribe(
          (res: any) => {
            if (res.data.isProductAvailable) {
              this.router.navigateByUrl(`/user/dreamroom/dr-level-selector`);
            } else {
              this.openCheckoutPage();
            }
          },
          (err: any) => {}
        );
      // }
    } else {
      this.openCheckoutPage();
    }
  }
}
