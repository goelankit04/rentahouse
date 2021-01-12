import { AuthService } from '../auth/auth.service';
import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserActivityService } from '../app-common/user-activity.service';
import { AmplitudeService } from '../amplitude/amplitude.service';
import { events } from '../amplitude/events';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit {
  @HostBinding('class')
  CatalogComponentClass = 'app-catalog';
  popStatus = false;
  productData: any;
  comboPrice: any;
  loader: boolean;
  url: any;
  product_type: number;
  productType: number;
  categoryId = 1;
  venue: Array<string>;
  schedule_date: any;

  scheduled_date = [];
  filterMenu = [];

  specialProductId = 694;

  selectedFilter: any = this.filterMenu[0];

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _amps: AmplitudeService,
    private _activatedRoute: ActivatedRoute,
    private _userActivity: UserActivityService
  ) {}

  ngOnInit() {
    
    this._userActivity.logUserActivity('all-products');
    window.scroll(0, 0);
    this.popStatus = false;

    this._authService.getProductType().subscribe((res: any) => {
      // console.log(res.data.product_types);
      for (const i of res.data.product_types) {
        this.filterMenu.push({
          name: i.display_heading,
          productType: i.id,
          image: i.display_image_url
        });
      }

      this._activatedRoute.params.subscribe(params => {
        this.productType = Number(params.productType);

        for (let i = 0; i < this.filterMenu.length; i++) {
          if (this.productType === this.filterMenu[i].productType) {
            this.selectedFilter = this.filterMenu[i];
          }
        }

        this.getAllProduct(Number(this.selectedFilter.productType));
      });
    });
  }

  enrollNow(productId: any, product_type: any) {
    // logging the combo offer
    this._userActivity.logUserActivity('buy-product', productId);

    if (this._authService.isUserLoggedIn()) {
      this.product_type = product_type;
      this._router.navigate(['/direct'], {
        queryParams: { productType: product_type, product: productId }
      });

      // this.gotoCheckout(productId);
    } else {
      this._router.navigate(['/direct'], {
        queryParams: { productType: product_type, product: productId }
      });
      // this._router.navigateByUrl(`/direct?product=${productId}&productType=${product_type}`);
    }
  }

  gotoCheckout(cardId: any) {
    this._router.navigateByUrl(
      `payment/checkout/${this.categoryId}/${this.product_type}/${cardId}`
    );
  }

  getCurrency(combo: any) {
    return this._authService.isUserLoggedIn()
      ? combo !== undefined
        ? combo.currency === 'inr'
          ? 'fa-inr'
          : 'fa-usd'
        : localStorage.getItem('country').toLowerCase() === 'india'
        ? 'fa-inr'
        : 'fa-usd'
      : localStorage.getItem('country').toLowerCase() === 'india'
      ? 'fa-inr'
      : 'fa-usd';
  }

  showProductType(productId: number) {
    for (const menu of this.filterMenu) {
      if (menu.productType === productId) {
        this.selectedFilter = menu;
        this._router.navigateByUrl(`/product-catalog/1/${menu.productType}`);
        this.getAllProduct(Number(this.selectedFilter.productType));
        break;
      }
    }
  }

  getAllProduct(productType: number) {
    this.loader = true;

    const parmas = {
      categoryId: 1,
      productType: productType,
      country:
        localStorage.getItem('country') === null
          ? 'India'
          : localStorage.getItem('country')
    };

    this._authService.getAllProductByProductType(parmas).subscribe(
      (res: any) => {
        this.loader = false;
        this.productData =
          this.selectedFilter.productType === 11
            ? res.data.products.reverse()
            : res.data.products;
        this._amps.setAmplitudeEvents(events.event_4, {
          success: 'yes',
          category: 'chess',
          productType: this.getProductTypeName(productType)
        });
      },
      (err: any) => {
        this.loader = false;
        this._amps.setAmplitudeEvents(events.event_4, {
          success: 'no',
          error: err,
          category: 'chess',
          productType: this.getProductTypeName(productType)
        });
        // console.log(err);
      }
    );
  }

  getProductTypeName(productType: Number) {
    let productTypeName = '';
    switch (productType) {
      case 1:
        productTypeName = 'Dream Room';
        break;
      case 2:
        productTypeName = 'Class Room';
        break;
      case 3:
        productTypeName = 'Live Room';
        break;
      case 4:
        productTypeName = '121 Room';
        break;
      case 6:
        productTypeName = 'Camp Room';
        break;
      case 7:
        productTypeName = 'Special Offers';
        break;
      case 11:
        productTypeName = 'Event Room';
        break;
      case 13:
        productTypeName = 'Star Room';
        break;
    }
    return productTypeName;
  }
  showDetails(data: any) {
    this._router.navigateByUrl(
      `product/1/${data.product_type}/${data.product_id}`
    );
  }

  mobileVersion() {
    return window.innerWidth < 650;
  }

  getHoverStatus(value: any) {
    const blockedProductType = [13];
    for (let i = 0; i < blockedProductType.length; i++) {
      if (value === blockedProductType[i]) {
        return false;
      }
    }
    return true;
  }
}
