import { LoginComponent } from './../../auth/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html'
})
export class ProductTypeComponent implements OnInit {
  @HostBinding('class') ProductTypeComponentClass = 'app-product-type';

  _productList: any;

  @Input() stackData;
  @Input() productIndex;

  loader = false;

  showPopup: any;
  cardsToDisplay = 3;
  cardsArray = [];
  currentIndex: number;

  categoryId = 1;
  showMore = false;
  sliderStatus = false;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _matDialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.stackData.productIndex = Number(this.stackData.productIndex);
    let x;
    x = this.separateIntoSliderPanel(this.stackData.products);
    this.stackData.products = x;
    this.stackData.productIndex = this.productIndex;
    this.currentIndex = 1;
  }

  separateIntoSliderPanel(arrayToDivide: any) {
    const tempArray: any = [];
    let temp2: any = [];
    let idIndex = 1;
    let arrayindex = 0;
    for (let x = 0; x < arrayToDivide.length; x++) {
      if (x % this.cardsToDisplay === 0 && x !== 0) {
        temp2.slideIndex = idIndex++;
        tempArray.push(temp2);
        temp2 = [];
        if (!this.sliderStatus) { break; }
      }
      temp2.push(arrayToDivide[arrayindex++]);
      if (x === arrayToDivide.length - 1 && temp2.length > 0) {
        temp2.slideIndex = idIndex++;
        tempArray.push(temp2);
      }
    }
    return (tempArray);
  }

  mobileVersion() {
    return window.innerWidth < 1120;
  }

  showSliderArrow(x: any) {
    return Number(x.products.length) > 1;
  }

  getIdToScroll(stackId: any, position: number) {
    stackId--;
    if ((this.currentIndex + position) > 0 && (this.currentIndex + position) <= this.stackData.products.length) {
      this.currentIndex += position;
    }
    const elem = document.getElementById('stack-' + (stackId + 1) + '-' + this.currentIndex);
    elem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  }

  gotoProductDetail(cardIndex: any) {
      this._router.navigateByUrl(`product/${this.categoryId}/${(this.stackData.products[0])[0].product_type}/${cardIndex}`);
  }

  gotoCheckout(cardId: any) {
    if (!this._authService.isUserLoggedIn()) {
      const dialogRef = this._matDialog.open(LoginComponent, {
        width: '300px',
        height: window.innerWidth < 630 ? '60%' : '420px',
        autoFocus: false,
        data: {
          product_id: (this.stackData.products[0])[0].product_type,       // product_type
          gateway: cardId                                                 // product_id
        }
      });
    } else {
      this._router.navigateByUrl(`payment/checkout/${this.categoryId}/${(this.stackData.products[0])[0].product_type}/${cardId}`);
    }
  }

  actionOnClick(productId: any) {
    this.loader = true;

    if (this._authService.isUserLoggedIn()) {
      this._authService.availableProductForUser({
        productId: productId,
        userId: localStorage.getItem('id')
      }).subscribe(
        (res: any) => {
          this.loader = false;
          if (res.data.isProductAvailable) {
            switch ((this.stackData.products[0])[0].product_type) {
              case 1: {
                this._router.navigate([`/user/dashboard/${localStorage.getItem('first_name')}`]);
                break;
              }
              case 2: {
                this._router.navigate([`/user/class-room/${localStorage.getItem('first_name')}`]);
                break;
              }
              case 3: {
                this._router.navigate([`/user/live-room/${localStorage.getItem('first_name')}`]);
                break;
              }
              case 6: {
                this._router.navigate([`/user/camp-room/${localStorage.getItem('first_name')}`]);
                break;
              }
              default: {
                this._router.navigateByUrl(`/payment/checkout/${this.categoryId}/${(this.stackData.products[0])[0].product_type}/${productId}`);
              }
            }
          } else {
            this.gotoCheckout(productId);
          }
        },
        (err: any) => {
          this.loader = false;
          // console.log(err);
        }
      );
    } else {
      this.gotoCheckout(productId);
    }
  }
}
