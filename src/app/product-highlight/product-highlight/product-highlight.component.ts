import {
  Component,
  OnInit,
  HostBinding,
  HostListener,
  ViewChild,
  TemplateRef,
  OnDestroy,
} from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { IpService } from '../../auth/ip.service';
import { MatDialog } from '@angular/material/dialog';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-product-highlight',
  templateUrl: './product-highlight.component.html',
})
export class ProductHighlightComponent implements OnInit, OnDestroy {
  @HostBinding('class') ProductHighlightComponentClass =
    'app-product-highlight';
  product_id: any;
  productList: any;
  user_country: any;
  product_type: any;
  @ViewChild('unload') unloadDialog: TemplateRef<any>;

  constructor(
    private _authService: AuthService,
    private _activatedRoute: ActivatedRoute,
    private _ipApi: IpService,
    private router: Router,
    public dialog: MatDialog,
    private _seoService: SeoService
  ) {}

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((qp: any) => {
      console.log(qp, '37');
    });
    this._ipApi.getUserInfo().subscribe((res: any) => {
      this.user_country = res.country;
      this._activatedRoute.params.subscribe((params) => {
        this.product_id = Number(params.product_id);
        this.product_type = Number(params.product_type);

        this._activatedRoute.queryParams.subscribe((qp) => {
          const data = {
            country: localStorage.getItem('country')
              ? localStorage.getItem('country')
              : this.user_country,
            isDRR: false,
            productId: Number(params.product_id),
            productType: Number(params.product_type),
          };

          if (qp.cc) {
            data['couponCode'] = qp.cc;
          }

          this._authService
            .getAllActiveProducts(data)
            .subscribe((response: any) => {
              this.productList = response.data.productList[0];
              this._seoService.addProductDescMetaTag(
                this.productList.name,
                this.productList.description.substring(0, 101),
                window.location.href,
                this.productList.image_url
              );
            });
        });
      });
    });
  }

  ngOnDestroy() {
    this._seoService.removeMetaTags();
  }
}
