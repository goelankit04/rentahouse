import { Component, OnInit, HostBinding } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";
import { BreadCrumbService } from "../../auth/breadcrumb.service";

@Component({
  selector: "app-upcoming-events-section",
  templateUrl: "./upcoming-events-section.component.html",
})
export class UpcomingEventsSectionComponent implements OnInit {
  @HostBinding("class") UpcomingEventsSectionComponentClass =
    "app-upcoming-events-section";

  upcomingDataList: any;
  showLimit = 3;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _breadCrumb: BreadCrumbService
  ) { }

  ngOnInit() {
    this._authService.getUpcomingUserDashboard().subscribe((res: any) => {
      this.upcomingDataList = res.data.productList;

      for (let i = 0; i < this.upcomingDataList.length; i++) {
        this.upcomingDataList[i].products =
          this.upcomingDataList[i].products.length > this.showLimit
            ? this.upcomingDataList[i].products.slice(0, this.showLimit)
            : this.upcomingDataList[i].products;
      }
    });
  }

  openDashboard() {
    this._breadCrumb.levelSelectorBreadcrumb(0); // beg, interm, adv
    this._breadCrumb.episodeBreadCrumb(0); // episode id
    this._breadCrumb.puzzleBreadCrumb(0); // puzzles
    this._breadCrumb.exampleBreadCrumb(0); // examples
    this._router.navigateByUrl(
      `/user/dashboard/${localStorage.getItem("first_name")}`
    );
  }
}
