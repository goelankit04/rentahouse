import { Component, OnInit, HostBinding } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../auth/auth.service";
import { BreadCrumbService } from "../../auth/breadcrumb.service";
import { MatDialog } from "@angular/material/dialog";
import { LinkViewerComponent } from "../../app-common/link-viewer/link-viewer.component";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-video-page",
  templateUrl: "./video-page.component.html"
})
export class VideoPageComponent implements OnInit {
  @HostBinding("class") VideoPageComponentClass = "app-video-page";

  videoDetail = {
    categoryId: 0,
    productType: 0,
    productId: 0,
    episodeId: 0
  };

  level_id: any;
  blockProductType = [4, 6];
  productTypeName: any;
  videoResponse: any;
  unloadPlayer: boolean;
  pausePlayer: boolean;
  iconsStatus: boolean;
  nextVideoStatus: boolean;
  previousVideoStatus: boolean;
  isLoading: boolean;

  userDetail = {
    userEmail: null,
    userMobile: null,
    userName: null
  };

  videoSource = {
    // for Bitmovin
    dash: null,
    hls: null,
    progressive: null,
    poster: null,

    // for wistia
    video_url: null,

    // for Shaka Player
    shaka_url: null
  };

  isHomework: number;

  constructor(
    private _router: Router,
    private _activateRoute: ActivatedRoute,
    private _authService: AuthService,
    private breadcrum: BreadCrumbService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.level_id = localStorage.getItem("level_id");
    this._activateRoute.params.subscribe(param => {
      this.isLoading = true;
      this.videoDetail.categoryId = parseInt(param.categoryId);
      this.videoDetail.productType = parseInt(param.productType);
      this.videoDetail.productId = parseInt(param.productId);
      this.videoDetail.episodeId = parseInt(param.episodeId);
      this.isHomework = parseInt(param.isHomework);
      if (this.videoDetail.episodeId) {
        this.breadcrum.episodeBreadCrumb(this.videoDetail.episodeId);
      }
      if (this.level_id && this.videoDetail.productType === 1) {
        this.breadcrum.levelSelectorBreadcrumb(this.level_id);
      }
      this.getDataFromServer();
    });

    if (this.videoDetail.productType == 1) {
      this.productTypeName = "dreamroom";
    }
    if (this.videoDetail.productType == 13) {
      this.productTypeName = "star-room";
    }
    if (this.videoDetail.productType == 2) {
      this.productTypeName = "class-room";
    }
    if (this.videoDetail.productType == 3) {
      this.productTypeName = "live-room";
    }
    if (this.videoDetail.productType == 6) {
      this.productTypeName = "camp-room";
    }
    if (this.videoDetail.productType == 4) {
      this.productTypeName = "121-room";
    }
  }

  getDataFromServer() {
    let episodeIndex: number;

    // getting user detail
    this._authService.getUserProfileDetail().subscribe((res: any) => {
      this.userDetail.userEmail = res.data.users.user.email;
      this.userDetail.userMobile = res.data.users.user.mobile;
      this.userDetail.userName = res.data.users.user.first_name;
    });

    if (
      this.blockProductType.filter(
        product => this.videoDetail.productType === product
      ).length
    ) {
      // getting 121 episodes and camproom videos
      this._authService
        .getProductVideoLink({
          productId: this.videoDetail.productId
        })
        .subscribe(
          (res: any) => {
            // console.log('getting 121 and camproom videos', res);
            this.isLoading = false;

            const data = res.data.product[0];
            let videoLegth: number;

            if (data.dash && data.hls) {
              videoLegth = 1;
              data.shaka_url = data.dash;

            } else if (data.shaka_url) {
              // console.log(data);
            } else if (data.video_url) {
              videoLegth = data.video_url.length;

              data.dash = data.video_url[this.videoDetail.episodeId - 1].dash
                ? data.video_url[this.videoDetail.episodeId - 1].dash
                : null;
              data.hls = data.video_url[this.videoDetail.episodeId - 1].hls
                ? data.video_url[this.videoDetail.episodeId - 1].hls
                : null;
              data.video_url = data.video_url[this.videoDetail.episodeId - 1]
                .video_url
                ? data.video_url[this.videoDetail.episodeId - 1].video_url
                : null;
            } else {
              videoLegth = data.user_video_url.length;

              data.dash = data.user_video_url[this.videoDetail.episodeId - 1]
                .dash
                ? data.user_video_url[this.videoDetail.episodeId - 1].dash
                : null;
              data.hls = data.user_video_url[this.videoDetail.episodeId - 1].hls
                ? data.user_video_url[this.videoDetail.episodeId - 1].hls
                : null;
              data.video_url = data.user_video_url[
                this.videoDetail.episodeId - 1
              ].video_url
                ? data.user_video_url[this.videoDetail.episodeId - 1].video_url
                : null;
            }

            this.previousVideoStatus = false;
            this.nextVideoStatus = false;

            this.videoResponse = data;

            if (this.videoResponse.video_url) {
              this.videoResponse.dash = null;
              this.videoResponse.hls = null;
            }
          },
          (err: HttpErrorResponse) => { }
        );
    } else {
      // getting episode data
      this._authService
        .getUserDreamRoomVideo({
          categoryId: this.videoDetail.categoryId,
          productType: this.videoDetail.productType,
          productId: this.videoDetail.productId,
          episodeId: this.videoDetail.episodeId,
          is_homework: this.isHomework,
          limit: 3,
          offset:
            Number(this.videoDetail.episodeId) === 1
              ? 0
              : this.videoDetail.episodeId - 2
        })
        .subscribe(
          (res: any) => {
            this.isLoading = false;

            episodeIndex =
              res.data.videos.length > 1
                ? this.videoDetail.episodeId === 1
                  ? 0
                  : 1
                : 0;

            this.videoResponse = res.data.videos[episodeIndex];

            if (res.data.videos.length > 1) {
              if (this.videoDetail.episodeId === 1) {
                this.previousVideoStatus = false;
                this.nextVideoStatus =
                  (res.data.videos[1].dash && res.data.videos[1].hls) ||
                  res.data.videos[1].video_url;
              } else if (res.data.videos.length === 2) {
                this.nextVideoStatus = false;
                this.previousVideoStatus = true;
              } else {
                this.previousVideoStatus =
                  (res.data.videos[0].dash && res.data.videos[0].hls) ||
                  res.data.videos[0].video_url;
                this.nextVideoStatus =
                  (res.data.videos[2].dash && res.data.videos[2].hls) ||
                  res.data.videos[2].video_url;
              }
            } else {
              this.nextVideoStatus = false;
              this.previousVideoStatus = false;
            }

            if (!this.videoResponse.episode_id) {
              if (
                this.videoResponse.video_url
                  ? this.videoResponse.video_url.length > 0
                  : false
              ) {
                this.videoResponse.video_url = this.videoResponse.video_url[0].video_url;
              }
            }

            // if (this.videoResponse.shaka_url) {
            //   this.videoResponse.dash = null;
            //   this.videoResponse.hls = null;
            //   this.videoResponse.video_url = null;
            // } else if (this.videoResponse.video_url) {
            //   this.videoResponse.dash = null;
            //   this.videoResponse.hls = null;
            // }
          },
          (err: HttpErrorResponse) => {
            this.isLoading = false;
          }
        );
    }
  }

  getButtonLink(episodeStatus: any, buttonId: number) {
    if (episodeStatus) {
      switch (buttonId) {
        case 1:
          return "assets/chess/Dreamroom/episode-list/card/assignment/puzzle_active.svg";
        case 2:
          return "assets/chess/Dreamroom/episode-list/card/assignment/assin_active.svg";
        case 3:
          return "assets/chess/Dreamroom/episode-list/card/assignment/example_active.svg";
        case 4:
          return "assets/chess/Dreamroom/episode-list/card/assignment/flip_book_active.svg";
        case 5:
          return "assets/chess/Dreamroom/episode-list/card/assignment/report_active.svg";
      }
    } else {
      switch (buttonId) {
        case 1:
          return "assets/chess/Dreamroom/episode-list/card/assignment/puzzle_gray.svg";
        case 2:
          return "assets/chess/Dreamroom/episode-list/card/assignment/assin_gray.svg";
        case 3:
          return "assets/chess/Dreamroom/episode-list/card/assignment/example_gray.svg";
        case 4:
          return "assets/chess/Dreamroom/episode-list/card/assignment/flip_book_gray.svg";
        case 5:
          return "assets/chess/Dreamroom/episode-list/card/assignment/report_gray.svg";
      }
    }
  }

  openExample() {
    if (this.videoResponse.is_example_ready) {
      this.breadcrum.episodeBreadCrumb(this.videoDetail.episodeId);
      this.unloadPlayer = true;
      this._router.navigateByUrl(
        `/user/dreamroom/dr-functionality/example/${
        this.videoDetail.productId
        }/${this.videoDetail.productId - 99}/${this.videoDetail.episodeId}`
      );
    }
  }

  openPuzzle() {
    if (this.videoResponse.is_puzzle_ready) {
      this.breadcrum.episodeBreadCrumb(this.videoDetail.episodeId);
      this.unloadPlayer = true;
      this._router.navigateByUrl(
        `/user/dreamroom/dr-functionality/puzzle/${
        this.videoDetail.productId
        }/${this.videoDetail.productId - 99}/${this.videoDetail.episodeId}`
      );
    }
  }

  openFlipBook() {
    if (this.videoResponse.flipbook_url !== null) {
      this.pausePlayer = true;

      if (this.videoResponse.flipbook_url.length > 0) {
        const dialogRef = this.dialog.open(LinkViewerComponent, {
          width: "90%",
          height: "90%",
          autoFocus: false,
          data: {
            url: this.videoResponse.flipbook_url
          }
        });
      }
    }
  }

  previousVideo() {
    this.videoDetail.episodeId = this.videoDetail.episodeId - 1;
    this.breadcrum.episodeBreadCrumb(this.videoDetail.episodeId);
    this._router.navigateByUrl(
      `/user/${this.productTypeName}/video-content/${this.videoDetail.categoryId}/${this.videoDetail.productType}/${this.videoDetail.productId}/${this.videoDetail.episodeId}/${this.isHomework}`
    );
    this.getDataFromServer();
  }

  nextVideo() {
    this.videoDetail.episodeId = this.videoDetail.episodeId + 1;
    this.breadcrum.episodeBreadCrumb(this.videoDetail.episodeId);
    this._router.navigateByUrl(
      `/user/${this.productTypeName}/video-content/${this.videoDetail.categoryId}/${this.videoDetail.productType}/${this.videoDetail.productId}/${this.videoDetail.episodeId}/${this.isHomework}`
    );
    this.getDataFromServer();
  }

  invalidVideoLink(value: any) {
    if (value) {
      this.videoResponse = null;
    }
  }
}
