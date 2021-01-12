import { Component, OnInit, HostBinding } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../../../auth/auth.service";
import { StarroomDataService } from "../../star-room-data.service";
import { MatDialog } from "@angular/material/dialog";
import { BreadCrumbService } from "../../../../auth/breadcrumb.service";
import { UserService } from "../../../../user/user.service";
import { ToasterService } from "angular2-toaster";
import { DomSanitizer } from "@angular/platform-browser";
import { AmplitudeService } from "../../../../amplitude/amplitude.service";
import { events } from "../../../../amplitude/events";
import { PopBlockerMessageComponent } from "../../../../app-common/pop-blocker-message/pop-blocker-message.component";
import { environment } from "../../../../../environments/environment";
import { LinkViewerComponent } from "../../../../app-common/link-viewer/link-viewer.component";
import * as FileSaver from "file-saver";

@Component({
  selector: "app-home-work",
  templateUrl: "./home-work.component.html",
  styleUrls: ["./home-work.component.scss"]
})
export class HomeWorkComponent implements OnInit {
  @HostBinding("class") HomeWorkComponentClass = "app-home-work";

  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string;
  downloadFile: any;
  episodeReceived = false;
  totalEpisodes = 22;
  episodeCount = 10;
  productId: number;
  productType = 13;
  categoryId = 1;
  level_difficulty: number;
  currentPage = 1;
  episodeList = [];
  pageNumber: number;
  pageList = [];
  level: any;
  pType: any;
  user_level: any = ["Beginner", "Intermediate", "Advance"];
  UpComingLiveRoom = [];
  UpComingClassRoom = [];
  cardSpinner: boolean;
  productAvailable: any;
  productTypeName: any;
  url: any;
  wistiaUrl: any;
  openPopup = false;
  uplaoder = 1;
  download: any;
  first_name: any;
  noHomeWork: boolean;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private _authService: AuthService,
    private _dreamroomData: StarroomDataService,
    private dialog: MatDialog,
    public _breadCrumb: BreadCrumbService,
    private _userService: UserService,
    private _toasterService: ToasterService,
    private _amps: AmplitudeService
  ) {
    this.first_name = localStorage.getItem("first_name");

    this.routes.params.subscribe(params => {
      this.level = params.level;
      if (params.level !== null) {
        this.productId = Number(params.level);
        this.level_difficulty = Number(params.level);
        this._dreamroomData.setLevel(this.level_difficulty);
      }
    });
  }

  ngOnInit() {
    // this.router.navigateByUrl(`/user/star-room/star-landing/star-episode/${this.first_name}/${this.productId}`)

    this.pType = localStorage.getItem("productType");
    switch (this.productType) {
      case 1: {
        this.productTypeName = "dreamroom";
        break;
      }
      case 13: {
        this.productTypeName = "star-room";
        break;
      }
      case 2: {
        this.productTypeName = "class-room";
        break;
      }
      case 3: {
        this.productTypeName = "live-room";
        break;
      }
      case 6: {
        this.productTypeName = "camp-room";
        break;
      }
      case 4: {
        this.productTypeName = "121-room";
        break;
      }
      case 16: {
        this.productTypeName = "Super 64";
        break;
      }
    }

    // this.getDataFromServer();
    this.getUpcomingEvent();
    this.userProduct();
  }

  getButtonLink(episodeStatus: any, buttonId: number) {
    if (episodeStatus) {
      // console.log(episodeStatus,"142");

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
        case 6:
          return "assets/chess/Dreamroom/episode-list/card/assignment/video_active.png";
        case 7:
          return "assets/chess/Dreamroom/episode-list/card/assignment/solution_active.png";
        case 8:
          return "assets/chess/Dreamroom/episode-list/card/assignment/download_active.png";
        case 9:
          return "assets/chess/Dreamroom/episode-list/card/assignment/upload_active.png";
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
        case 6:
          return "assets/chess/Dreamroom/episode-list/card/assignment/video_grey.png";
        case 7:
          return "assets/chess/Dreamroom/episode-list/card/assignment/solution_grey.png";
        case 8:
          return "assets/chess/Dreamroom/episode-list/card/assignment/download_grey.png";
        case 9:
          return "assets/chess/Dreamroom/episode-list/card/assignment/upload_grey.png";
      }
    }
  }

  gotoPage(pageNumber: any) {
    this.currentPage = pageNumber;
    this.episodeReceived = false;
    this.getDataFromServer();
  }

  gotoPrevPage(pageNumber: any) {
    if (this.currentPage !== 1) {
      this.episodeList = this._dreamroomData.getEpisodeByPage(
        --this.currentPage
      );
    }
  }

  userProduct() {
    const data = {
      categoryId: this.productId,
      productType: 13
    };

    this._authService.getUserProduct(data).subscribe((res: any) => {
      this.categoryId = res.data.products.filter(
        product => product.product_id === this.productId
      )[0].category_id;
      this.getDataFromServer();
    });
  }

  getPagination() {
    this.pageList = [];
    this.pageNumber = Math.ceil(this.totalEpisodes / this.episodeCount);
    // console.log(this.pageNumber,"pageNumber");
    for (let i = 1; i <= this.pageNumber; i++) {
      this.pageList.push(i);
    }
  }

  gotoNextPage(pageNumber: any) {
    if (this.currentPage === pageNumber) {
    } else {
      this.episodeList = this._dreamroomData.getEpisodeByPage(
        ++this.currentPage
      );
    }
  }

  openVideo(video_url) {
    // console.log(episode,video_url)
    // this.openPopup=true;
    this.wistiaUrl = video_url;
  }

  gotoVideoDetail(episode_id: number, id: number) {
    if (
      this.episodeList[this.getIdIndex(id)].is_available &&
      !this.episodeList[this.getIdIndex(id)].is_session_live
    ) {
      // if (this.episodeList[this.getIdIndex(id)].video_url !== null) {
      this._breadCrumb.episodeBreadCrumb(episode_id);

      // New Video Page
      this.router.navigateByUrl(
        `/user/${this.productTypeName}/video-content/${
        this.categoryId
        }/${localStorage.getItem("productType")}/${
        this.productId
        }/${episode_id}/0`
      );

      // this.router.navigate([
      //   "/user/star-room/dr-functional/videos",
      //   this.categoryId,
      //   this.productType,
      //   this.productId,
      //   id,
      // ]);
      // }
    }
  }

  openFlipBook(flipbook_url: string, episode_id: number, id: number) {
    console.log(flipbook_url, "flipbook url");
    if (flipbook_url !== "" && flipbook_url !== null) {
      const dialogRef = this.dialog.open(LinkViewerComponent, {
        width: "90%",
        height: "90%",
        data: {
          url: flipbook_url
        }
      });
    }
  }

  openExample(level: number, episode_id: number) {
    // console.log(level, "level")
    level = 13;
    if (this.episodeList[this.getIdIndex(episode_id)].is_available) {
      if (this.episodeList[this.getIdIndex(episode_id)].is_example_ready) {
        this._breadCrumb.exampleBreadCrumb(level);
        if (this.pType != 16) {
          this.router.navigateByUrl(
            `/user/star-room/dr-functionality/example/${this.productId}/${level}/${episode_id}`
          );
        }
      }
    }
  }

  openPuzzle(level: number, episode_id: number) {
    level = 13;
    if (this.episodeList[this.getIdIndex(episode_id)].is_available) {
      if (this.episodeList[this.getIdIndex(episode_id)].is_puzzle_ready) {
        this._breadCrumb.puzzleBreadCrumb(level);
        // if(this.pType==16){
        //   this.router.navigateByUrl(
        //     `/user/star-room/dr-functionality/puzzle/${
        //       this.productId
        //     }/${level}/${episode_id}/board/open-puzzle/1`
        //   );
        // }else{
        this.router.navigateByUrl(
          `/user/star-room/dr-functionality/puzzle/${this.productId}/${level}/${episode_id}/board/puzzle-play/1`
        );
        // }

        // this.router.navigateByUrl(
        //   `/user/star-room/dr-functionality/puzzle/${
        //     this.productId
        //   }/${level}/${episode_id}`
        // );
      }
    }
  }

  // Start for super 64 temp (product type 16)

  downloadFiles(url: string, name: string) {
    console.log(url);
    if (url) {
      FileSaver.saveAs(url, name);
      setTimeout(() => {
        this.getDataFromServer();
      }, 1000);
    }
  }

  fileChange(event, level, episode_id, is_user_puzzle_submission, name) {
    // t = true;
    if (!is_user_puzzle_submission) {
      const submissionFile = event.target.files;
      this.url = `${environment.auth_target}/product/save/user/puzzle/submission`;
      this.makeFileRequest(this.url, [], submissionFile, episode_id, name).then(
        result => { },
        error => { }
      );
    }
  }

  makeFileRequest(url: string, params: any, files: any, episode_id, name) {
    const that = this;
    // that.imageLoader = true;
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();
      formData.append("episodeName", name);
      formData.append("userId", Number(localStorage.getItem("id")));
      formData.append("productId", Number(this.productId));
      formData.append("episodeId", episode_id);
      formData.append("file", files[0], files[0].name);
      (xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (
            xhr.status === 200 ||
            xhr.status === 201 ||
            xhr.status === 205 ||
            xhr.status === 304
          ) {
            // that.imageLoader = false;
            const profileImage2 = JSON.parse(xhr.response).data
              .profile_image_url;
            // that.profileImage = profileImage2;

            if (
              JSON.parse(xhr.response).message === "Please select valid file"
            ) {
            } else {
              that.getDataFromServer();
              that._toasterService.pop("success", "File Uploaded Successfully");
            }
          } else {
          }
        }
      }),
        error => { };
      xhr.open("POST", url, true);
      xhr.setRequestHeader("enctype", "multipart/form-data");
      xhr.setRequestHeader("accesstoken", localStorage.getItem("access_token"));
      xhr.send(formData);
    });
  }

  uplaodProblem(level: number, episode_id: number) { }

  // End for super 64 temp (product type 16)

  getDataFromServer() {
    this._authService
      .getUserDreamRoomEpisodeList({
        categoryId: this.categoryId,
        productType: Number(localStorage.getItem("productType")),
        productId: Number(this.level),
        limit: this.episodeCount,
        offset: this.episodeCount * (this.currentPage - 1),
        isHomework: true
      })
      .subscribe(
        (res: any) => {
          this.productAvailable = res.data.isUserProduct;
          const sampleArray = res.data.episodes;
          this.totalEpisodes = res.data.count;
          this.getPagination();
          for (const data of sampleArray) {
            if (data.thumbnail_url == null) {
              data.thumbnail_url =
                "assets/chess/Dreamroom/episode-list/card/thumbnail.png";
            }
          }

          this.episodeList = sampleArray;
          this.episodeReceived = true;
          this.noHomeWork = !(res.data.episodes.length > 0);
        },
        (error: any) => {
          // console.log(error);
        }
      );
  }

  getUpcomingEvent() {
    this._authService.getUpcomingUserDashboard().subscribe((res: any) => {
      this.UpComingClassRoom = res.data.productList[0].products;
      this.UpComingLiveRoom = res.data.productList[1].products;
    });
  }

  openDashboard() {
    this._breadCrumb.levelSelectorBreadcrumb(0);
    this._breadCrumb.episodeBreadCrumb(0);
    this._breadCrumb.puzzleBreadCrumb(0);
    this._breadCrumb.exampleBreadCrumb(0);
    this.router.navigateByUrl(
      `/user/dashboard/${localStorage.getItem("first_name")}`
    );
  }

  getIdIndex(class_id: number) {
    for (let i = 0; i < this.episodeList.length; i++) {
      if (this.episodeList[i].id === class_id) {
        return i;
      }
    }
  }

  zoomWebinar(episode, episodeId, id) {
    this.cardSpinner = true;
    this._userService
      .getZoomWebinarLink({
        userId: localStorage.getItem("id"),
        productId: this.productId,
        episodeId: episodeId,
        productType: Number(localStorage.getItem("productType")),
        user_product_episodes_id: id
      })
      .subscribe(
        (res: any) => {
          this.cardSpinner = false;
          const popUp = window.open(res.data.join_url, "_blank");
          if (popUp == null || typeof popUp === "undefined") {
            // now open the modal here to inform user regarding the pop-up blocker
            const dialogRef = this.dialog
              .open(PopBlockerMessageComponent, {
                width: "600px",
                height: "520px"
              })
              .updatePosition({ top: "6em" });
          } else {
            this._amps.setAmplitudeEvents(events.event_23, {
              productId: this.productId,
              episodeId: episodeId,
              productName: episode.name,
              duration: episode.duration,
              productType: this.productTypeName
            });
            popUp.focus();
          }
        },
        (error: any) => {
          this.cardSpinner = false;
          this._amps.setAmplitudeEvents(events.event_23, {
            productId: this.productId,
            episodeId: episodeId,
            productName: episode.name,
            duration: episode.duration,
            productType: this.productTypeName,
            error: error.error.message
          });
          this._toasterService.pop("error", error.error.message);
        }
      );
  }
}
