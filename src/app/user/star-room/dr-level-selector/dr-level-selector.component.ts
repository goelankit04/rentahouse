import { AuthService } from "./../../../auth/auth.service";
import { MenuNavListService } from "./../../user-container/menu-nav-list.service";
import { StarroomDataService } from "../star-room-data.service";
import { Router } from "@angular/router";
import { Component, OnInit, HostBinding } from "@angular/core";
import { BreadCrumbService } from "./../../../auth/breadcrumb.service";
import { PlatformLocation } from "@angular/common";

@Component({
  selector: "app-dr-level-selector",
  templateUrl: "./dr-level-selector.component.html",
})
export class DrLevelSelectorComponent implements OnInit {
  @HostBinding("class")
  DrLevelSelectorComponentClass = "app-dr-level-selector";
  response: any;
  nothingToDisplay: boolean;
  showCombo = true;
  product: any;
  buyProductId = 35;
  buyProductType = 7;
  products: any;
  categoryId = 1;
  productType = 13;
  dataReceived: boolean;
  level_ids: any;
  level_id: any;
  showVideo = false;
  statement = [
    `error`,
    `No Dream Room found`,
    `Why don't you try one?`,
    `Click here to buy our Chess Dream Room`,
  ];

  levels = [
    {
      id: 1,
      image: "assets/chess/Dreamroom/level_selector/beginner.png",
      name: "Beginners",
      range: "< 1100",
    },
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
      showBuyNow: true,
    },
  ];

  comboData = [
    {
      isEnabled: true,
      combo_name: "Dream Room Beginner Module:",
      long_title: false,
      combo_side_image:
        "/assets/chess/Dreamroom/level_selector/beginner_combo.png",
      price_inr: "3,000",
      base_price: "5,000",
      price_usd: "60",
      redirectLink: `/payment/checkout/1/7/100`,
    },
    {
      isEnabled: true,
      combo_name: "Dream Room + Intermediate + Advanced Module:",
      long_title: false,
      combo_side_image:
        "/assets/chess/Dreamroom/level_selector/intermediate_combo.png",
      price_inr: "8,000",
      base_price: "10,000",
      price_usd: "130",
      redirectLink: `/payment/checkout/1/7/103`,
    },
    {
      isEnabled: true,
      combo_name: "Dream Room + 24 Live Room + 12 Class Room Combo",
      long_title: false,
      combo_side_image: "/assets/chess/Dreamroom/level_selector/DR_combo.png",
      price_inr: "10,000",
      base_price: "30,000",
      price_usd: "160",
      redirectLink: `/payment/checkout/1/7/35 `,
    },
  ];

  constructor(
    private router: Router,
    private _dreamroom: StarroomDataService,
    private _menuNavList: MenuNavListService,
    private _authService: AuthService,
    private _breadcrum: BreadCrumbService,
    location: PlatformLocation
  ) {}

  ngOnInit() {
    // const data = {
    //   country: "India",
    //   productType: 13,
    //   categoryId: 1,
    // };
    // this._authService.getAllProductByProductType(data).subscribe((res: any) => {
    //   // console.log(res);
    //   this.product = res.data.products;
    // });

    let data = {
      categoryId: 1,
      limit: 0,
      offset: 0,
      productType: 13,
    };
    this._authService.getUserProduct(data).subscribe((res: any) => {
      this.product = res.data.products;
      this.nothingToDisplay = this.product.length === 0;
    });
    window.scroll(0, 0);
    this.dataReceived = false;
  }

  buyNow(product_id) {
    this.router.navigateByUrl(`/direct?product=${product_id}&productType=13`);
  }

  openPaymentGateway() {
    this.router.navigateByUrl(`/product-catalog/${this.categoryId}/${this.productType}`);
  }

  gotoSelectedLevel(level_id: number,productType) {
    this.level_ids = level_id;
    localStorage.setItem('productType',productType)
    localStorage.setItem("level_id", this.level_ids);
    this.router.navigateByUrl(
      `/user/star-room/star-landing/star-episode/${localStorage.getItem(
        "first_name"
      )}/${level_id}`
    );
  }

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
