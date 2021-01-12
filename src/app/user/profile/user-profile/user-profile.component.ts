import { Component, HostBinding, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { AuthService } from "../../../auth/auth.service";
import { UserService } from "../../user.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
})
export class UserProfileComponent implements OnInit {
  @HostBinding("class") userProfileComponentClass = "app-user-profile";

  selectedTab = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      // console.log(params, "param data");
      if (Number(params.tabIndex) > 0) {
        this.selectedTab = params.tabIndex;
        // console.log(this.selectedTab, "tab");
      }
    });
  }
}
