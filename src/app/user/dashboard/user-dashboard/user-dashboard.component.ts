import { forkJoin as observableForkJoin } from "rxjs";
import { Component, HostBinding, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../auth/auth.service";
import * as _ from "lodash";
import { MatBottomSheet, MatBottomSheetConfig } from "@angular/material/bottom-sheet";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CurrentPasswordsComponent } from "../../../current-passwords/current-passwords.component";
import { PuzzleOfTheDayComponent } from "../../../app-common/puzzle-of-the-day/puzzle-of-the-day.component";
import { MobileOtpVerificationComponent } from '../../../app-common/mobile-otp-verification/mobile-otp-verification.component';

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
})
export class UserDashboardComponent implements OnInit {
  @HostBinding("class")
  userDashboardComponentClass = "app-user-dashboard";

  idUserId: any;
  stack: any = null;
  catalogProduct: any;

  mobileNumberToVerify: string;
  mobileCountryCodeToVerify: string;
  imageBoxURL: string = null;
  dataReceived: boolean;
  showInterestPopup = false;

  userInterests = [];

  showVerifyMobileDialog = false;
  isLoading = false;
  showErrorDiv = false;
  err: any;

  constructor(
    private router: Router,
    private _authService: AuthService,
    private _puzzleOfTheDayContainer: MatBottomSheet,
    public dialog: MatDialog
  ) {}

  ngOnInit() {

    if (document.getElementsByClassName('cdk-overlay-container')[0]) {
      document.getElementsByClassName('cdk-overlay-container')[0].setAttribute('style', 'z-index: 0 !important');
    }

    // first make call to verify if user have to show interest pop up or not
    this._authService.getUserInterest().subscribe((interestRes: any) => {
      const tempInterest = _.cloneDeep(interestRes);

      if (parseInt(tempInterest.data.count) === 0) {
        tempInterest.data.interests.forEach(interest => {
          interest.isSelected = false;
        });

        this.userInterests = tempInterest.data.interests;
        this.showInterestPopup = true;
      } else {
        this.showInterestPopup = false;

        this.idUserId = localStorage.getItem("id");

        this.mobileCountryCodeToVerify = localStorage.getItem("mobile_country_code");
        this.mobileNumberToVerify = this.removeCountryCodeFromMobile(localStorage.getItem("mobile"), localStorage.getItem("mobile_country_code"));

        if (localStorage.getItem("is_mobile_verified") === "0") {
          this.showVerifyMobileDialog = true;


          const dialogRef = this.dialog.open(MobileOtpVerificationComponent, {
            width: window.innerWidth < 630 ? '86%' : '36em',
            height: window.innerHeight < 800 ? '70%' : '30em',
            autoFocus: false,
            data: {
              askForMobileNumber: true,
              userId: this.idUserId,
              mobileNumber: this.mobileNumberToVerify,
              mobileCountryCode: this.mobileCountryCodeToVerify
            }
          });

          dialogRef.componentInstance.result.subscribe(() => {
            dialogRef.close();
          });
        }

        if (localStorage.getItem("resetPassword") === "0") {
          this.openResetPasswordModal();
        }
      }
    });

    // this._authService.getRecommendedProduct({
    //   productType: 4
    // }).subscribe(
    //   (res: any) => {
    //     console.log(res);
    //   }
    // );

    const services = [this._authService.getUpcomingUserDashboard()];

    if (this.isSchoolUser()) {
      services.push(this._authService.getSchoolDetails());
    }

    observableForkJoin(services).subscribe((res: any) => {
      const productList = res[0].data.productList;

      this.catalogProduct = productList;
      this.dataReceived = true;

      let flag = 0;
      for (let i = 0; i < this.catalogProduct.length; i++) {
        if (this.catalogProduct[i].products.length === 0) {
          flag++;
        }
      }

      this.showErrorDiv = flag === this.catalogProduct.length;

      if (this.isSchoolUser()) {
        const school = res[1].data.school;
        this.imageBoxURL = school.banner_image;
      }
    });
    
    if (!this._authService.isUserLoggedIn()) {
      this.router.navigateByUrl("/");
    }

    this.openPuzzleOfTheDayContainer();
  }

  openPuzzleOfTheDayContainer() {
    if (localStorage.getItem("puzzle_opened") === "true") {
      this._authService
        .getPuzzleOfTheDay({
          userId: localStorage.getItem("id"),
        })
        .subscribe(res => {
          localStorage.setItem("puzzle_opened", "false");
          if (res.data.puzzle !== undefined) {
            const config: MatBottomSheetConfig = {
              ariaLabel: null,
              autoFocus: false,
              panelClass: "bottom__sheet__for__puzzle__of__the__day",
              disableClose: true,
              hasBackdrop: false,
              data: {
                puzzleResponse: res,
                showPuzzle: !res.data.puzzle.gameFinished,
              },
            };
            this._puzzleOfTheDayContainer.open(PuzzleOfTheDayComponent, config);
          }

          // }
        });
    }
  }

  registerUserInterests(userInterestIds: Array<number>) {
    if (userInterestIds.length > 0) {
      // save these ids to user interest table
      const data = {
        interest_id: userInterestIds,
      };
      this._authService.showInterest(data).subscribe((res: any) => {
        // console.log(res);
        this.showInterestPopup = false;
      });
    } else {
      // this.err="minimum 5 interests select";
    }
  }

  openResetPasswordModal() {
    const config = new MatDialogConfig();
    config.height = "auto";
    config.width = window.innerWidth > 750 ? "45%" : "80%";
    config.autoFocus = false;

    const dialogRef = this.dialog.open(CurrentPasswordsComponent, config);

    dialogRef.afterClosed().subscribe(() => {});
  }

  mobileVersion() {
    return window.innerWidth < 700;
  }

  isSchoolUser() {
    let status = false;
    const schoolId = 15;

    for (
      let i = 0;
      i < localStorage.getItem("role_id").split(",").length;
      i++
    ) {
      status =
        Number(localStorage.getItem("role_id").split(",")[i]) === schoolId;
      if (status) {
        return true;
      }
    }
    return status;
  }

  removeCountryCodeFromMobile(mobile: any, code: any) {
    return mobile.length > 10 ? mobile.slice(code.length, mobile.length) : mobile;
  }
}
