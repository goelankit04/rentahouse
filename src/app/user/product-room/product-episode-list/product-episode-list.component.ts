import { Component, OnInit, HostBinding } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../../../auth/auth.service";
import { HttpErrorResponse } from "@angular/common/http";

import { Observable } from "rxjs";
import * as _ from "lodash";

@Component({
  selector: "app-product-episode-list",
  templateUrl: "./product-episode-list.component.html",
  styleUrls: ["./product-episode-list.component.scss"]
})
export class ProductEpisodeListComponent implements OnInit {
  @HostBinding("class") ProductEpisodeListComponentClass =
    "app-product-episode-list";

  productType: number;
  productId: number;
  categoryId: number;

  foundProduct: boolean;
  isLoading: boolean;
  productList = [];

  productMapping = [
    {
      name: "Class Room",
      alias: "class-room",
      productType: 2
    },
    {
      name: "Live Room",
      alias: "live-room",
      productType: 3
    },
    {
      name: "Camp Room",
      alias: "camp-room",
      productType: 6
    },
    {
      name: "121 Room",
      alias: "121-room",
      productType: 4
    }
  ];

  constructor(
    private _activateRoute: ActivatedRoute,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this._activateRoute.params.subscribe(params => {
      this.categoryId = params.categoryId;
      this.productType = params.productType;
      this.productId = params.productId;
    });

    if (this.categoryId && this.productType && this.productId) {
      this.isLoading = true;

      this._authService
        .getProductVideoLink({
          productId: this.productId
        })
        .subscribe((res: any) => {
          let product: any;
          let videoLinks: any;
          let productToShow: any;
          this.isLoading = false;

          product = res.data.product[0];

          if (
            product.user_video_url === undefined ||
            product.user_video_url === null
          ) {
            // for Camp Room - video_url array
            this.foundProduct = Boolean(product.video_url.length);
            videoLinks = res.data.product[0].video_url;
          } else {
            // for 121 Room - user_video_url array
            this.foundProduct = Boolean(product.user_video_url.length);
            videoLinks = res.data.product[0].user_video_url;
          }

          for (let i = 0; i < videoLinks.length; i++) {
            productToShow = _.cloneDeep(product);

            _.map(videoLinks[i], (value, key) => {
              productToShow[key] = value;
            });

            productToShow.session_video_id = i;
            productToShow.is_session_multiple = 0;

            this.productList.push(productToShow);
          }
        });
    }
  }
}
