import { Component, HostBinding, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../auth/auth.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
})
export class OrderComponent implements OnInit {
  @HostBinding("class")
  OrderComponentClass = "app-order";
  totalOrders: any;
  orderCount = 5;
  orderDetail: any;
  currentPage = 1;
  pageNumber: number;
  pageList = [];
  productType: any;
  orderDetailCurrency: any;
  searchValue: any;
  isLoading: boolean = true;
  card1: boolean = true;
  card2: boolean = false;
  cardDetail: any;
  orderCurrency: any;
  orderType = [
    {
      name: "All Orders",
      id: [],
    }, {
      name: "Dream Room",
      id: 1
    },

    {
      name: "Class Room",
      id: 2,
    },
    {
      name: "Live Room",
      id: 3,
    },
    {
      name: "Camp Room",
      id: 6,
    },
    {
      name: "121 Room",
      id: 4,
    },
    {
      name: "Event Room",
      id: 11,
    },
    {
      name: "Star Room",
      id: 13,
    },
    {
      name: "Special Offers",
      id: 7
    }
  ];
  constructor(private router: Router, private _authService: AuthService) { }

  ngOnInit() {
    this.getOrder();
  }

  gotoPage(pageNumber: any) {
    this.currentPage = pageNumber;
    this.getOrder();
  }

  getPagination() {
    this.pageList = [];
    this.pageNumber = Math.ceil(this.totalOrders / this.orderCount);
    for (let i = 1; i <= this.pageNumber; i++) {
      this.pageList.push(i);
    }
  }

  select(type) {
    this.productType = type;
    this.currentPage = 1;
    this.getOrder();
  }

  search(value) {
    this.searchValue = value;
  }

  searchOrder() {
    this.getOrder();
  }

  billingFaq() {
    this.router.navigateByUrl("/faq");
  }

  slideRight() {
    const scroll = document.getElementById('paginate');
    scroll.scrollBy({ top: 0, left: -200, behavior: 'smooth' });
  }

  slideLeft() {
    const scroll = document.getElementById('paginate');
    scroll.scrollBy({ top: 0, left: 200, behavior: 'smooth' });
  }

  cardClick(cardDetail) {
    this.cardDetail = cardDetail;
    this.orderCurrency = this.cardDetail.currency.toLowerCase();
    this.card1 = false;
    this.card2 = true;
  }

  needHelp() {
    this.router.navigateByUrl("/footer/contact-us");
  }

  backButton() {
    this.card2 = false;
    this.card1 = true;
  }

  getOrder() {
    this.isLoading = true;
    let data = {
      limit: this.orderCount,
      offset: this.orderCount * (this.currentPage - 1),
      productType: this.productType,
      search: this.searchValue,
    };
    this._authService.getOrders(data).subscribe((res: any) => {
      this.isLoading = false;
      this.card1 = true;
      this.card2 = false;
      this.orderDetail = res.data.orderDetails;
      this.totalOrders = res.data.count;
      this.getPagination();
    });
  }

  orderPayment(order) {
    // console.log(order, "order");

    const data = {
      user:
      {
        ccForMail: null,
        id: `${localStorage.getItem('id')}`,
        first_name: `${localStorage.getItem('first_name')}`,
        email: `${localStorage.getItem('email')}`,
        mobile: `${localStorage.getItem('mobile')}`,
        country: `${localStorage.getItem('country')}`
      },
      productId: order.product_id,
      priceId: order.product_price_id,
      orderId: order.id,
      orderDetailId: order.order_detail_id,
      created_by: `${localStorage.getItem('id')}`
    }
    this._authService.paymentLink(data).subscribe(res => {
      // console.log(res, "RESPONSE DATA")
      window.open(res.data.paymentLink, '_blank');

      // location.href = res.data.paymentLink;

    })
  }
}
