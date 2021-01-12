import { AuthService } from "./../../../auth/auth.service";
import { MenuNavListService } from "./../../user-container/menu-nav-list.service";
import { DreamroomDataService } from "./../dreamroom-data.service";
import { Router } from "@angular/router";
import { Component, OnInit, HostBinding } from "@angular/core";
import { BreadCrumbService } from "./../../../auth/breadcrumb.service";
import { PlatformLocation } from "@angular/common";
@Component({
  selector: "app-dr-level-selector",
  templateUrl: "./dr-level-selector.component.html"
})
export class DrLevelSelectorComponent implements OnInit {
  @HostBinding("class")
  DrLevelSelectorComponentClass = "app-dr-level-selector";

  response: any;
  nothingToDisplay = true;
  isVideoWorking = true;
  showCombo = true;

  buyProductId = 35;
  buyProductType = 7;
  products: any;
  categoryId = 1;
  productType = 1;
  dataReceived: boolean;
  level_ids: any;
  showVideo = false;
  statement = [
    `error`,
    `No Dream Room found`,
    `Why don't you try one?`,
    `Click here to buy our Chess Dream Room`
  ];

  levels = [
    {
      id: 1,
      image: "assets/chess/Dreamroom/level_selector/beginner.png",
      name: "Beginners",
      range: "< 1100"
    },
    {
      id: 2,
      image: "assets/chess/Dreamroom/level_selector/intermediate.png",
      name: "Intermediate",
      range: "1100 - 2000"
    },
    {
      id: 3,
      image: "assets/chess/Dreamroom/level_selector/advance.png",
      name: "Advance",
      range: "2000+"
    }
  ];

  level2 = [
    {
      id: 1,
      image: "assets/chess/Dreamroom/level_selector/DR_1.png",
      img: "assets/chess/Dreamroom/level_selector/not_active.png",
      hover: "assets/chess/Dreamroom/level_selector/active.png",
      name: "Beginner",
      is_product_available: false,
      range: "< 1100",
      price: null,
      showBuyNow: true
    },
    {
      id: 2,
      image: "assets/chess/Dreamroom/level_selector/DR_2.png",
      img: "assets/chess/Dreamroom/level_selector/not_active.png",
      hover: "assets/chess/Dreamroom/level_selector/active.png",
      name: "Intermediate",
      is_product_available: false,
      range: "1100 - 2000",
      price: null,
      showBuyNow: true
    },
    {
      id: 3,
      image: "assets/chess/Dreamroom/level_selector/DR_3.png",
      img: "assets/chess/Dreamroom/level_selector/not_active.png",
      hover: "assets/chess/Dreamroom/level_selector/active.png",
      is_product_available: false,
      name: "Advance",
      range: "2000+",
      price: null,
      showBuyNow: true
    }
  ];

  comboData = [
    {
      id: 1,
      isEnabled: true,
      combo_name: "Dream Room Beginner Module:",
      long_title: false,
      combo_side_image:
        "/assets/chess/Dreamroom/level_selector/beginner_combo.png",
      price_inr: "5,000",
      base_price: "10,000",
      price_usd: "100"
    },
    {
      id: 2,
      isEnabled: true,
      combo_name: "Dream Room + Intermediate + Advanced Module:",
      long_title: false,
      combo_side_image:
        "/assets/chess/Dreamroom/level_selector/intermediate_combo.png",
      price_inr: "11,000",
      base_price: "15,000",
      price_usd: "220"
    },
    {
      id: 3,
      isEnabled: true,
      combo_name: "Dream Room + 24 Live Room + 12 Class Room Combo",
      long_title: false,
      combo_side_image: "/assets/chess/Dreamroom/level_selector/DR_combo.png",
      price_inr: "15,000",
      base_price: "30,000",
      price_usd: "300"
    }
  ];

  constructor(
    private router: Router,
    private _dreamroom: DreamroomDataService,
    private _menuNavList: MenuNavListService,
    private _authService: AuthService,
    private _breadcrum: BreadCrumbService,
    location: PlatformLocation
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.dataReceived = false;

    this._authService
      .getUserProduct({
        categoryId: this.categoryId,
        productType: this.productType,
        limit: 0,
        offset: 0
      })
      .subscribe(
        (res: any) => {
          this.dataReceived = true;
          for (const productData of res.data.products) {
            this.updateLevel(productData);
          }
        },
        (error: any) => {
          this.dataReceived = true;
        }
      );
  }

  gotoSelectedLevel(level_id: number) {
    this.level_ids = level_id;
    localStorage.setItem("level_id", this.level_ids);
    this._breadcrum.levelSelectorBreadcrumb(level_id);
    this._dreamroom.setLevel(level_id);
    this.router.navigateByUrl(
      `/user/dreamroom/dr-landing/episode-list/${localStorage.getItem(
        "first_name"
      )}/${level_id}`
    );
  }

  openPaymentGateway() {
    this.router.navigateByUrl(
      `/payment/checkout/${this.categoryId}/${this.buyProductType}/${this.buyProductId}`
    );
  }

  buyNow(id: number) {
    if (id === 1) {
      this.router.navigateByUrl("/direct?product=100&productType=1");
    } else if (id === 2) {
      this.router.navigateByUrl("/direct?product=103&productType=1");
    } else if (id === 3) {
      this.router.navigateByUrl("/direct?product=35&productType=7");
    }
  }

  // getCurrencySign() {
  //   return localStorage.getItem('country').toLowerCase() === 'india'
  //     ? 'fa-inr'
  //     : 'fa-usd';
  // }

  updateLevel(product: any) {
    for (const level of this.level2) {
      if (product.product_id - 99 === level.id) {
        level.showBuyNow = false;
        level.is_product_available = true;
      }
      switch (product.product_id) {
        case 100: {
          this.comboData[0].isEnabled = false;
          break;
        }
        case 102: {
          this.comboData[1].isEnabled = false;
          this.comboData[2].isEnabled = false;
          break;
        }
        default: {
          // do nothing
        }
      }

      if (!this.comboData[0].isEnabled && !this.comboData[2].isEnabled) {
        this.showCombo = false;
      }
    }
  }
}
