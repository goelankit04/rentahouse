import { Component, OnInit, HostBinding } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../../auth/auth.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  @HostBinding("class") ProductComponentClass = "app-product";

  productData: any;

  isLoading: boolean;
  dataReceived = false;
  nothingToDisplay = true;

  categoryId = 1;
  productType: number;
  productNameInURL: string;
  productRoomName: string;

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
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    this._activatedRoute.params.subscribe(params => {
      const found_mapped_product = this.productMapping.find(
        (mapped_product: any) => mapped_product.alias === params.productName
      );
      this.productRoomName = found_mapped_product.name;
      this.productType = found_mapped_product.productType;

      this.isLoading = true;

      this._authService
        .getUserProduct({
          categoryId: this.categoryId,
          productType: found_mapped_product.productType,
          limit: 0,
          offset: 0
        })
        .subscribe(
          (res: any) => {
            this.isLoading = false;

            this.productData = res.data.products;
            this.nothingToDisplay = !(this.productData.length > 0);
            this.dataReceived = true;
          },
          (error: any) => {
            this.isLoading = false;
            this.nothingToDisplay = !(this.productData.length > 0);
            this.dataReceived = true;
          }
        );
    });
  }

  openPaymentGateway() {
    this._router.navigateByUrl(
      `/product-catalog/${this.categoryId}/${this.productType}`
    );
  }

  mobileVersion() {
    return window.innerWidth < 700;
  }
}
