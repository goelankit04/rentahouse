import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html'
})
export class CardContainerComponent implements OnInit {
  @HostBinding('class') CardContainerComponentClass = 'app-card-container';

  @Output() containerResponse = new EventEmitter<any>();

  @Input() id: string;
  @Input() type: string;
  @Input() heading: string;
  @Input() small: string;
  @Input() show: string;
  @Input('data')
  set data(value: any) {
    if (value.length === 0) {
      this.products = [];
      this.mentors = [];
    } else {
      this.setData(value);
    }
  }

  leftSlideIcon: boolean;
  RightSlideIcon: boolean;

  productDetail: any;
  showDetailSection: boolean;

  noData: boolean;

  products = [];
  mentors = [];

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this.productDetail = this.products ? this.products[0] : null;
    this.leftSlideIcon = true;
    this.RightSlideIcon = true;
  }

  gatherDetail(value: any, show) {
    if (!show) {
      this.products.forEach((item) => (item.active = false));
      value.active = true;
      this.productDetail = value;
      this.showDetailSection = true;
      // const detail = document.getElementById(`card-detail-${this.id}`);
      // detail.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
    }
  }

  getCloseEvent(value: any) {
    if (value) {
      this.showDetailSection = false;
      this.products.forEach((item) => (item.active = false));
    }
  }

  setData(value: any) {
    if (value) {
      if (this.type === 'mentor') {
        this.noData = Object.keys(value).length > 0 && value.mentors.length === 0;
        if (value && value.mentors && value.mentors.length !== 0) {
          let i: any;
          for (i of value.mentors) {
            this.mentors.push({
              image: i.img,
              mentor: i.name,
              designation: i.title
            });
          }
        }

      } else {
        this.noData = Object.keys(value).length > 0 && value.products.length === 0;
        if (value && value.products && value.products.length !== 0) {
          let i: any;
          for (i of value.products) {
            this.products.push({
              active: false,
              id: i.id,
              image: i.image_url,
              type: i.text_content,
              name: i.name,
              video: i.background_video,
              duration: i.duration,
              price: i.currency !== undefined ? `${i.currency.toLowerCase() === 'inr' ? '₹ ' : '$'}${i.sale_price}` : null,
              mentor: i.author_name,
              designation: ``,
              shortDescription: i.shortDescription,
              description: i.description,
              trailer_video: i.trailer_video,
              productType: i.product_type,
              poster: i.poster,
              episode_id: i.episode_id
            });
          }
        }
      }
    } else {
      this.noData = false;
    }
  }

  slideRight() {
    const cardBox = document.getElementById(`card_box-${this.id}`);
    cardBox.scrollBy({ top: 0, left: -500, behavior: 'smooth' });
  }

  slideLeft() {
    const cardBox = document.getElementById(`card_box-${this.id}`);
    cardBox.scrollBy({ top: 0, left: 500, behavior: 'smooth' });
  }

  openCatalog() {
    this._router.navigate(['/v2/catalog'], {queryParams: {category: 'all', type: this.heading}});
  }

  openMentor() {

    const product = [
      {
        url: '/v2/chess',
        category: 1
      },
      {
        url: '/v2/cricket',
        category: 2
      },
    ];

    if (this._router.url === '/v2') {
      this._router.navigateByUrl('/v2/mentor/list');
    } else {
      product.forEach(i => {
        if (i.url === this._router.url) {
          this._router.navigateByUrl(`/v2/mentor/list/${i.category}`);
        }
      });
    }
  }

  responseCard(value: any) {
    this.containerResponse.emit(value);
  }

}
