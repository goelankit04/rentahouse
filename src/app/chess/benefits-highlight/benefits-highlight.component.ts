import { Component, OnInit, HostBinding } from "@angular/core";
import { IpService } from "../../auth/ip.service";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-benefits-highlight",
  templateUrl: "./benefits-highlight.component.html"
})
export class BenefitsHighlightComponent implements OnInit {
  @HostBinding("class") benefitsHighlightComponentClass =
    "app-benefits-highlight";

  showDollar = true;

  benefits = [
    {
      id: 1,
      heading: "Dream Room",
      lifetime: "Life-time Subscription",
      quantity: "(40+ Hours)",
      rupees: "10,000",
      dollars: "160"
    },
    {
      id: 2,
      heading: "Live Room",
      lifetime: "Annual Subscription",
      quantity: "(24 Live Rooms)",
      rupees: "10,000",
      dollars: "160"
    },
    {
      id: 3,
      heading: "Class Room",
      lifetime: "Annual Subscription",
      quantity: "(12 Class Rooms)",
      rupees: "10,000",
      dollars: "160"
    }
  ];

  final_price = {
    rack: {
      price_inr: "30,000",
      price_usd: "480"
    },
    offer: {
      price_inr: "15,000",
      price_usd: "300"
    }
  };

  constructor(
    private _ipService: IpService,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    if (!this._authService.isUserLoggedIn()) {
      this._ipService.getUserInfo().subscribe(
        (res: any) => {
          // console.log(res.country,"line no 63");

          this.showDollar = res.country.toLowerCase() !== "india";
        },
        (err: HttpErrorResponse) =>
          this._ipService.countryChange.next("United States")
      );
    } else {
      this.showDollar =
        localStorage.getItem("country").toLowerCase() !== "india";
    }
  }

  // getCurreny(item: any) {
  //   return localStorage.getItem('country') ?
  //     localStorage.getItem('country').toLowerCase() === 'india' ?
  //       'fa-inr'
  //       : 'fa-usd'
  //     : 'fa-usd';
  // }

  // getCurrenyValueKey(item: any) {
  //   return localStorage.getItem('country') ?
  //     localStorage.getItem('country').toLowerCase() === 'india' ?
  //       item.rupees
  //       : item.dollars
  //     : item.dollars;
  // }
}
