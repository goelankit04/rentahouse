import { PlatformLocation } from "@angular/common";
import { AuthService } from "../../../../auth/auth.service";

import {
  Component,
  OnInit,
  HostBinding,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { FlipBookUrlComponent } from "../flip-book-url/flip-book-url.component";
import { BreadCrumbService } from "../../../../auth/breadcrumb.service";
import { IpService } from "../../../../auth/ip.service";
import { environment } from "../../../../../environments/environment";
import { UserActivityService } from "../../../../app-common/user-activity.service";
import { StarroomDataService } from "../../star-room-data.service";

declare var bitmovin: any;

@Component({
  selector: "app-video-details",
  templateUrl: "./video-details.component.html",
})
export class VideoDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding("class") videoDetailsComponentClass = "app-video-details";

  episode_ids: any;
  refreshIntervalId: any;

  user_email: string;
  user_mobile: string;

  player: any;
  previousButtonStatus: boolean;
  nextButtonStatus: boolean;

  categoryId: number;
  productType: number;
  productId: number;
  episodeList: any;
  level: number;
  episode_id: number;
  episode_name: string;
  episode_detail: string;
  episode_example: number;
  episode_active: number;
  episode_puzzle: number;
  episode_flipbook: string;
  nextEpisode_active: any;
  previousEpisode_active: any;
  currentPage = 1;
  user_ip: string;
  user_ip_country: string;
  sampleArray: any;
  UpComingLiveRoom = [];
  UpComingClassRoom = [];
  setIntervalId: any;

  devToolStatus = false;

  element: any;

  supportedBrowserList = [
    {
      name: "Chrome",
      provider: "Google",
      image_url: "assets/browser/chrome.svg",
    },
    {
      name: "Firefox",
      provider: "Mozilla",
      image_url: "assets/browser/firefox.svg",
    },
    {
      name: "Safari",
      provider: "Apple",
      image_url: "assets/browser/safari.svg",
    },
    {
      name: "Edge",
      provider: "Microsoft",
      image_url: "assets/browser/edge.svg",
    },
    {
      name: "Opera",
      provider: "Otello",
      image_url: "assets/browser/opera.svg",
    },
  ];

  conf = {
    key: "",
    source: {
      dash: "",
      hls: "",
      progressive: "",
      poster: "",
      drm: {
        widevine: {
          LA_URL: "https://widevine-dash.ezdrm.com/proxy?pX=5197BC",
        },
        fairplay: {
          LA_URL:
            "https://fps.ezdrm.com/api/licenses/12b27509-7e12-4b8e-97e7-7888b8a950f2",
          certificateURL:
            "https://s3-ap-southeast-1.amazonaws.com/chess-video/fairplay.cer",
          prepareContentId: function (contentId) {
            let uri = contentId;
            let uriParts = uri.split("://", 1);
            let protocol = uriParts[0].slice(-3);
            uriParts = uri.split(";", 2);
            contentId = uriParts.length > 1 ? uriParts[1] : "";
            uriParts = contentId.split("?", 2);
            contentId = uriParts.length > 1 ? uriParts[0] : contentId;
            return protocol.toLowerCase() == "skd" ? contentId : "";
          },
          prepareLicenseAsync: function (ckc) {
            return new Promise(function (resolve, reject) {
              let reader: any = new FileReader();
              reader.addEventListener("loadend", function () {
                resolve(new Uint8Array(reader.result));
              });
              reader.addEventListener("error", function () {
                reject(reader.error);
              });
              reader.readAsArrayBuffer(ckc);
            });
          },
          prepareMessage: function (event, session) {
            return new Blob([event.message], {
              type: "application/octet-binary",
            });
          },
          headers: [
            {
              name: "content-type",
              value: "application/octet-stream",
            },
          ],
          useUint16InitData: true,
          licenseResponseType: "blob",
        },
      },
    },
    adaptation: {
      desktop: {
        preload: false,
      },
      mobile: {
        preload: false,
      },
    },
    skin: {
      screenLogoImage: "assets/chess/bobby-fischer.png",
    },
    logs: {
      bitmovin: false,
    },
    events: {
      onReady: () => {
        if (this.verifyUserBrowser() && !this.devToolStatus) {
          const element = document.getElementById("bmpui-id-201");
          let userInfoElementContainer = this.createUserInfoContainer();
          element.appendChild(userInfoElementContainer);

          this.setIntervalId = setInterval(() => {
            const randomPosition = Math.floor(Math.random() * 100 + 1);
            if (this.verifyDomStyleChanges()) {
              location.reload();
            } else {
              document.getElementById(
                "user_info_container"
              ).style.top = `${randomPosition}%`;
              document.getElementById(
                "user_info_container"
              ).style.left = `${100 - randomPosition}%`;
            }
          }, 3000);
        }
      },
    },
  };

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private _dreamroomdata: StarroomDataService,
    private _authService: AuthService,
    private _ipService: IpService,
    private _location: PlatformLocation,
    public breadcrum: BreadCrumbService,
    private _userActivity: UserActivityService
  ) {
    _location.onPopState(() => {
      this.player.unload();
      this.player = undefined;
      clearInterval(this.refreshIntervalId);
    });

    // added check for verification of chrome dev tool open or not
    window.addEventListener("devtoolschange", (e: any) => {
      this.devToolStatus = e.detail.open;

      // refresh page here
      if (!e.detail.open) {
        // console.log('!e.detail.open', !e.detail.open);
        location.reload();
      }

      // if you get value true --> log user activity -- service call
      this._userActivity.logUserActivity(
        "video-hack",
        this.productId,
        this.episode_id
      );
    });
  }

  ngOnInit() {
    window.scroll(0, 0);

    this.route.params.subscribe(params => {
      this.categoryId = parseInt(params.categoryId);
      this.productType = parseInt(params.productType);
      this.productId = parseInt(params.productId);
      this.episode_id = parseInt(params.episodeId);

      if (this.episode_id <= 0) {
        this.router.navigateByUrl("/");
      }

      // logging video detail
      this._userActivity.logUserActivity(
        "dreamroom-video",
        this.productId,
        this.episode_id
      );
    });

    this._ipService.getUserInfo().subscribe(info => {
      this.user_ip = info.query;
      this.user_ip_country = info.country;
    });

    this._authService.getUserProfileDetail().subscribe((res: any) => {
      this.user_email = res.data.users.user.email;
      this.user_mobile = res.data.users.user.mobile;
    });

    let pgn_element = document.getElementById("example_pgn_viewer");

    if (pgn_element) {
      // console.log('pgn_element', pgn_element);
      location.reload();
    }

    let localWindow: any = window;
    this.devToolStatus = localWindow.devtools.open;

    if (this.verifyUserBrowser() && !this.devToolStatus) {
      this.getDataFromServer();

      this.getUpcomingEvent();

      this.breadcrum.episodeBreadCrumb(this.episode_id);
      this.breadcrum.levelSelectorBreadcrumb(this.productId - 99);
    } else {
      // this is case for unknown browser or dev tools open
      // log user activity here - make service call -->
      window.addEventListener("devtoolschange", (e: any) => {
        this.devToolStatus = e.detail.open;

        // if you get value true --> log user activity -- service call
        this._userActivity.logUserActivity(
          "video-hack",
          this.productId,
          this.episode_id
        );
      });
    }
  }

  async ngAfterViewInit() { }

  createUserInfoContainer() {
    const userInfoElementContainer = document.createElement("div");
    userInfoElementContainer.id = "user_info_container";
    userInfoElementContainer.style.position = "absolute";
    userInfoElementContainer.style.top = "15%";
    userInfoElementContainer.style.left = "5%";

    const userInfoElement = document.createElement("div");
    userInfoElement.id = "user_info_element";
    userInfoElement.style["font-size"] = "1em";
    userInfoElement.style.opacity = this.isVideoOnDesktop() ? "0.6" : "0.9";
    userInfoElement.style.color = "white";

    const elTextNode = document.createTextNode(
      this.user_email + " " + this.user_mobile
    );
    userInfoElement.appendChild(elTextNode);
    userInfoElementContainer.appendChild(userInfoElement);

    return userInfoElementContainer;
  }

  resetUserInfoContainerStyle(el: any) {
    el.style.removeProperty("top");
    el.style.removeProperty("bottom");
    el.style.removeProperty("left");
    el.style.removeProperty("right");
  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement("script");
      scriptElement.src = scriptUrl;
      scriptElement.id = "video_ui_loader";
      scriptElement.onload = resolve;
      scriptElement.onerror = reject;
      document.body.appendChild(scriptElement);
    });
  }

  openPuzzle() {
    this.episode_ids = this.episode_id;
    localStorage.setItem("example", this.episode_ids);
    // console.log(this.episode_ids,"LINE NO 315");

    // console.log(this.episode_id, 'episode id');
    this.breadcrum.episodeBreadCrumb(this.episode_id);
    this.player.unload();
    if (this.episode_puzzle) {
      this.router.navigateByUrl(
        `/user/star-room/dr-functional/puzzle/${this.productId}/${this
          .productId - 99}/${this.episode_id}`
      );
    }
  }

  openExample() {
    this.episode_ids = this.episode_id;
    localStorage.setItem("example", this.episode_ids);
    // console.log(this.episode_ids,"LINE NO 331");

    // console.log(this.episode_id, 'episode id');
    this.breadcrum.episodeBreadCrumb(this.episode_id);
    this.player.unload();
    if (this.episode_example) {
      this.router.navigateByUrl(
        `/user/star-room/dr-functionality/example/${this.productId}/${this
          .productId - 99}/${this.episode_id}`
      );
    }
  }

  openFlipBook() {
    this.player.pause();
    if (this.episode_flipbook !== "" || this.episode_flipbook !== null) {
      const dialogRef = this.dialog.open(FlipBookUrlComponent, {
        width: "90%",
        height: "90%",
        autoFocus: false,
        data: {
          id: this.episode_flipbook,
        },
      });
    }
  }

  getDataFromServer() {
    this._authService
      .getUserDreamRoomVideo({
        categoryId: this.categoryId,
        productType: this.productType,
        productId: this.productId,
        limit: 3,
        offset: Number(this.episode_id) === 1 ? 0 : this.episode_id - 2,
      })
      .subscribe(
        async (res: any) => {
          const samplearray1 = res.data.videos[0];
          this.previousEpisode_active =
            samplearray1.dash || samplearray1.hls ? true : false;
          if (Number(this.episode_id) === 1) {
            this.sampleArray = res.data.videos[0];
          } else {
            this.sampleArray = res.data.videos[1];
          }
          const samplearray2 = res.data.videos[2];
          this.nextEpisode_active =
            samplearray2.dash || samplearray2.hls ? true : false;

          this.episode_active = this.sampleArray.episode_id;
          this.episode_name = this.sampleArray.name;
          this.episode_detail = this.sampleArray.short_description;
          this.episode_example = this.sampleArray.is_example_ready;
          this.episode_puzzle = this.sampleArray.is_puzzle_ready;
          this.episode_flipbook = this.sampleArray.flipbook_url;

          this.conf.key = "75339520-6b8d-4f3b-8899-3d2f044240d2";
          this.conf.source.dash = this.sampleArray.dash;
          this.conf.source.hls = this.sampleArray.hls;
          this.conf.source.poster =
            this.sampleArray.poster === null
              ? "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg"
              : this.sampleArray.poster;
          this.conf.source.progressive =
            this.sampleArray.progressive === null
              ? ""
              : this.sampleArray.progressive;

          this.sampleArray.image_url =
            this.sampleArray.image_url === null
              ? "assets/chess/Dreamroom/episode-list/card/thumbnail.png"
              : this.sampleArray.image_url;
          this.episodeList = this.sampleArray;

          await this.loadScript(
            "https://bitmovin-a.akamaihd.net/bitmovin-player/stable/7.7/bitmovinplayer.js"
          );

          await this.loadScript(
            "https://bitmovin-a.akamaihd.net/bitmovin-analytics/stable/1/bitmovinanalytics.min.js"
          );

          this.player = window["bitmovin"]["player"]("player");

          let analytics = window["bitmovin"].analytics({
            key: "6f7b352c-fc51-4a99-bdea-fc39e3b4cc90",
            USER_ID: localStorage.getItem("id"),
            PROJECT_ENVIRONMENT: environment.name,
            IP_ADDRESS: this.user_ip,
            VIDEO_ID: `${this.productId}-${this.episode_id}`,
          });

          analytics.register(this.player);

          this.player.setup(this.conf).then(
            function (value) {
              // this.player.play();
              // Success
              // console.log('Successfully created bitmovin player instance');
            },
            function (reason) {
              // Error!
              // console.log('Error while creating bitmovin player instance');
            }
          );
        },
        (err: any) => {
          // console.log(err);
        }
      );
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

  getUpcomingEvent() {
    this._authService.getUpcomingUserDashboard().subscribe((res: any) => {
      this.UpComingClassRoom = res.data.productList[0].products;
      this.UpComingLiveRoom = res.data.productList[1].products;
    });
  }

  openDashboard() {
    this.router.navigateByUrl(
      `/user/dashboard/${localStorage.getItem("first_name")}`
    );
  }

  nextVideo() {
    if (this.nextEpisode_active) {
      let temp = Number(this.episode_id);
      this.router.navigateByUrl(
        `user/star-room/dr-functional/videos/${this.categoryId}/${
        this.productType
        }/${this.productId}/${++temp}`
      );
      const pgn_element = document.getElementById("example_pgn_viewer");
      this.route.params.subscribe(param => {
        location.reload();
      });
    }
  }

  previousVideo() {
    if (this.previousEpisode_active) {
      let temp = Number(this.episode_id);
      this.router.navigateByUrl(
        `user/star-room/dr-functional/videos/${this.categoryId}/${
        this.productType
        }/${this.productId}/${--temp}`
      );
      const pgn_element = document.getElementById("example_pgn_viewer");

      this.route.params.subscribe(param => {
        location.reload();
      });
    }
  }

  ngOnDestroy(): void {
    this.player = undefined;
    clearInterval(this.setIntervalId);
  }

  getUserBrowser() {
    let localWindow: any = window;
    let isIE = !!localWindow.documentMode;

    if (!!localWindow.chrome && !!localWindow.chrome.webstore) {
      return "Chrome";
    }

    if (navigator.userAgent.indexOf("Firefox") != -1) {
      return "Mozilla Firefox";
    }

    if (navigator.userAgent.toLowerCase().indexOf("safari") != -1) {
      return "Safari";
    }

    if (!isIE && !!localWindow.StyleMedia) {
      return "Edge";
    }

    if (
      !!localWindow.opr ||
      !!localWindow.opera ||
      navigator.userAgent.indexOf(" OPR/") >= 0
    ) {
      return "Opera";
    }

    return "Unknown Browser detected";
  }

  verifyUserBrowser() {
    let localWindow: any = window;
    let isIE = !!localWindow.documentMode;

    let isChrome = !!localWindow.chrome && !!localWindow.chrome.webstore;
    let isFirefox = navigator.userAgent.indexOf("Firefox") != -1;
    let isSafari = navigator.userAgent.toLowerCase().indexOf("safari") != -1;
    let isEdge = !isIE && !!localWindow.StyleMedia;
    let isOpera =
      !!localWindow.opr ||
      !!localWindow.opera ||
      navigator.userAgent.indexOf(" OPR/") >= 0;

    return isChrome || isFirefox || isSafari || isEdge || isOpera;
  }

  verifyDomStyleChanges() {
    /**

    console.log(
     'line - 607: ', !document.getElementById('user_info_element')
     ,
     'line -  609: ', ( document.getElementById('user_info_element').innerText !== ( this.user_email + ' ' + this.user_mobile ) )
     ,
     'line -  611: ', ( document.getElementById('user_info_element').style.length > 3 )
     ,
     'line -  613: ', ( document.getElementById('user_info_element').style[ 'font-size' ] !== '1em' )
     ,
     'line -  615: ', ( this.isVideoOnDesktop() ? document.getElementById('user_info_element').style[ 'opacity' ] !== '0.6' : document.getElementById('user_info_element').style[ 'opacity' ] !== '0.9' )
     ,
     'line -  617: ', ( document.getElementById('user_info_element').getAttribute('hidden') !== null )
     ,
     'line -  619: ', ( document.getElementById('user_info_element').children.length !== 0 ),

     '========================================================',

     'line - 622: ', !document.getElementById('user_info_container')
     ,
     'line - 624: ', ( document.getElementById('user_info_container').style.length !== 3 )
     ,
     'line - 626: ', ( document.getElementById('user_info_container').style[ 'position' ] !== 'absolute' )
     ,
     'line - 628: ', ( !document.getElementById('user_info_container').style[ 'top' ] )
     ,
     'line - 630: ', ( !document.getElementById('user_info_container').style[ 'left' ] )
     ,
     'line - 632: ', ( document.getElementById('user_info_container').getAttribute('hidden') !== null )
     ,
     'line - 634: ', ( document.getElementById('user_info_container').children.length > 1 )
     ,
     'line - 636: ', ( document.getElementById('user_info_container').children[ 0 ].id !== 'user_info_element' ),

     '========================================================',

      'this.onDesktopStyleValidation()', this.isVideoOnDesktop() ? this.onDesktopStyleValidation() : false,

     '========================================================',

     'line - : ', ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ])[ 'z-index' ] < 0 )
     ,
     'line - 660: ', ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).position !== 'absolute' )
     ,
    //  'line - 662: ', ( this.isVideoOnDesktop() ? getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).top !== '0' : false)
    //  ,
    //  'line - 664: ', ( this.isVideoOnDesktop() ? getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).left !== '0' : false)
    //  ,
    //  'line - 666: ', ( ( ( navigator.userAgent.indexOf('Firefox') != -1 ) || ( navigator.userAgent.toLowerCase().indexOf('safari') != -1 ) ) ? false : ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).left !== '0' ) )
    //  ,
    //  'line - 668: ', ( ( ( navigator.userAgent.indexOf('Firefox') != -1 ) || ( navigator.userAgent.toLowerCase().indexOf('safari') != -1 ) ) ? false : ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).right !== '0' ) )
    //  ,
     'line - 670: ', ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).display !== 'block' )
     )
     ;

     **/

    return (
      !document.getElementById("user_info_element") ||
      document.getElementById("user_info_element").innerText !==
      this.user_email + " " + this.user_mobile ||
      document.getElementById("user_info_element").style.length > 3 ||
      document.getElementById("user_info_element").style["font-size"] !==
      "1em" ||
      (this.isVideoOnDesktop()
        ? document.getElementById("user_info_element").style["opacity"] !==
        "0.6"
        : document.getElementById("user_info_element").style["opacity"] !==
        "0.9") ||
      document.getElementById("user_info_element").getAttribute("hidden") !==
      null ||
      document.getElementById("user_info_element").children.length !== 0 ||
      // user info container
      !document.getElementById("user_info_container") ||
      document.getElementById("user_info_container").style.length !== 3 ||
      document.getElementById("user_info_container").style["position"] !==
      "absolute" ||
      !document.getElementById("user_info_container").style["top"] ||
      !document.getElementById("user_info_container").style["left"] ||
      document.getElementById("user_info_container").getAttribute("hidden") !==
      null ||
      document.getElementById("user_info_container").children.length > 1 ||
      document.getElementById("user_info_container").children[0].id !==
      "user_info_element" ||
      // level 1 - for css  -- bmpui-id-214
      (!this.isVideoOnDesktop() ? this.onDesktopStyleValidation() : false) ||
      // now target 3rd party element
      getComputedStyle(
        document.getElementsByClassName("bmpui-ui-uicontainer")[0]
      )["z-index"] < 0 ||
      getComputedStyle(
        document.getElementsByClassName("bmpui-ui-uicontainer")[0]
      ).position !== "absolute" ||
      // ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).top !== '0' )
      // ||
      // ( ( ( navigator.userAgent.indexOf('Firefox') != -1 ) || ( navigator.userAgent.toLowerCase().indexOf('safari') != -1 ) ) ? false : ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).left !== '0' ) )
      // ||
      // ( ( ( navigator.userAgent.indexOf('Firefox') != -1 ) || ( navigator.userAgent.toLowerCase().indexOf('safari') != -1 ) ) ? false : ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).right !== '0' ) )
      //  ||
      // ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).margin < '0px' )
      // ||
      getComputedStyle(
        document.getElementsByClassName("bmpui-ui-uicontainer")[0]
      ).display !== "block"
    );
  }

  // when screen width changes
  onResize(event) {
    // location.reload();
  }

  isVideoOnDesktop() {
    return window.innerWidth > 600;
  }

  onDesktopStyleValidation() {
    /**
    console.log(
      'line - 639: ', ( document.getElementById('bmpui-id-214').style.length > 0 )
      ,
      'line - 641: ', ( document.getElementById('bmpui-id-214').getAttribute('hidden') !== null ),

      '========================================================',

      'line - 644: ', ( document.getElementById('bmpui-id-214').children[ 0 ][ 'style' ].length > 0 )
      ,
      'line - 646: ', ( document.getElementById('bmpui-id-214').children[ 0 ].getAttribute('hidden') !== null ),

      '=======================================================',

      'line - 649: ', ( document.getElementById('bmpui-id-201').style.length > 0 )
      ,
      'line - 651: ', ( document.getElementById('bmpui-id-201').children[ 1 ].id !== 'user_info_container' )
      ,
      'line - 653: ', ( document.getElementById('bmpui-id-214').children[ 0 ].children[ 2 ].id !== 'bmpui-id-201' )
      ,
      'line - 655: ', ( document.getElementById('bmpui-id-214').parentElement.nodeName !== 'FIGURE' )
      ,
      'line - 657: ', ( document.getElementById('bmpui-id-201').getAttribute('hidden') !== null ),
    );
    */

    return (
      document.getElementById("bmpui-id-214").style.length > 0 ||
      document.getElementById("bmpui-id-214").getAttribute("hidden") !== null ||
      // first children of above id
      document.getElementById("bmpui-id-214").children[0]["style"].length > 0 ||
      document
        .getElementById("bmpui-id-214")
        .children[0].getAttribute("hidden") !== null ||
      // get child of above id -- bmpui-id-201
      document.getElementById("bmpui-id-201").style.length > 0 ||
      document.getElementById("bmpui-id-201").children[1].id !==
      "user_info_container" ||
      document.getElementById("bmpui-id-214").children[0].children[2].id !==
      "bmpui-id-201" ||
      document.getElementById("bmpui-id-214").parentElement.nodeName !==
      "FIGURE" ||
      document.getElementById("bmpui-id-201").getAttribute("hidden") !== null
    );
  }
}
