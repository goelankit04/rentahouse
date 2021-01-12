import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { LinkViewerComponent } from '../link-viewer/link-viewer.component';
import { UserService } from '../../user/user.service';
import { ToasterService } from 'angular2-toaster';
import { AuthService } from '../../auth/auth.service';
import { LoginComponent } from '../../auth/login/login.component';
import { IpService } from '../../auth/ip.service';
import { UserActivityService } from '../user-activity.service';
import { PopBlockerMessageComponent } from '../pop-blocker-message/pop-blocker-message.component';
import { environment } from '../../../environments/environment';
import { AmplitudeService } from '../../amplitude/amplitude.service';
import { events } from '../../amplitude/events';

declare let window: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @HostBinding('class')
  CardComponentClass = 'app-card';
  productTypeName: any;
  private _cardData: any;

  @Input('cardData')
  set cardData(value: any) {
    if (!value.product_id) {
      value.product_id = value.id;
      this._cardData = value;
    } else {
      this._cardData = value;
    }
  }

  get cardData() {
    return this._cardData;
  }

  @Input() mobileView;
  @Input() index;
  @Input() hasSessions;
  @Input() hover: boolean;

  categoryId = 1;
  priceStatus = true;
  cardSpinner = false;
  buttonDisable: boolean;
  buttonTextToShow: string;

  productToSeach = 696;

  watchNowURL = [
    {
      name: 'dash',
      usedFor: 'Camp Room and Class Room',
      url: this.cardData
        ? this.cardData.dash !== undefined
          ? this.cardData.dash
          : null
        : null,
    },
    {
      name: 'hls',
      usedFor: 'Camp Room and Class Room',
      url: this.cardData
        ? this.cardData.hls !== undefined
          ? this.cardData.hls
          : null
        : null,
    },
    {
      name: 'video_url',
      usedFor: 'Live Room',
      url: this.cardData
        ? this.cardData.video_url !== undefined
          ? this.cardData.video_url
          : null
        : null,
    },
  ];

  // product mapping
  videoPlayer = {
    wistia: 'wistia',
    bitmovin: 'bitmovin',
  };

  productMap = [
    {
      name: 'Class Room',
      alias: 'class-room',
      productType: 2,
      player: this.videoPlayer.bitmovin,
    },
    {
      name: 'Live Room',
      alias: 'live-room',
      productType: 3,
      player: this.videoPlayer.wistia,
    },
    {
      name: 'Camp Room',
      alias: 'camp-room',
      productType: 6,
      player: this.videoPlayer.bitmovin,
    },
    {
      name: '121 Room',
      alias: '121-room',
      productType: 4,
      player: this.videoPlayer.wistia,
    },
  ];

  // button texts
  buttonText = {
    watchNow: 'Watch Now',
    buyNow: 'Buy Now',
    notAvailable: 'Not Available',
    joinNow: 'Join Now',
    playNow: 'Play Now!',
    showSession: 'Show Session',
    readMore: 'Read More',
    viewSolution: 'View Solution',
    viewResult: 'View Result',
  };

  // player visibility controls
  isBitmovin = false;
  hoverStatus: boolean;

  // hover options
  displayDetail = true;
  leftHover: boolean;

  // card Details
  cardWidth = 300;

  // free product
  thisProductIsFree = false;

  exceptionalProductId = [
    {
      productId: 318,
      buttonText: this.buttonText.playNow,
      url: {
        openInDialog: false,
        isTypeForm: false,
        link: 'http://tournament.nurtr.com',
        isSolutionUrlExternal: false,
        solutionLink: null,
      },
    },
    {
      productId: 433,
      buttonText: this.buttonText.playNow,
      url: {
        openInDialog: false,
        isTypeForm: false,
        // link: 'http://tournament.nurtr.com',
        link: 'http://13.234.37.66/index.php/login/registration',
        isSolutionUrlExternal: false,
        solutionLink: 'https://online.fliphtml5.com/rwmk/pwav/',
      },
    },
    {
      productId: 459,
      buttonText: this.buttonText.viewResult,
      url: {
        openInDialog: false,
        isTypeForm: false,
        link: 'http://tournament.nurtr.com',
        isSolutionUrlExternal: false,
        solutionLink:
          'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/zsof/index.html',
      },
    },
    {
      productId: 477,
      buttonText: this.buttonText.playNow,
      url: {
        openInDialog: false,
        isTypeForm: false,
        link: 'http://tournament.nurtr.com',
        isSolutionUrlExternal: false,
        solutionLink:
          'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/zsof/index.html',
      },
    },
    {
      productId: 573,
      buttonText: this.buttonText.playNow,
      url: {
        openInDialog: false,
        isTypeForm: false,
        link: 'http://13.234.37.66/index.php/login/registration',
        isSolutionUrlExternal: false,
        solutionLink: null,
      },
    },
    {
      productId: 634,
      buttonText: this.buttonText.playNow,
      url: {
        openInDialog: false,
        isTypeForm: false,
        link: 'http://tournament.nurtr.com',
        isSolutionUrlExternal: false,
        solutionLink: null,
      },
    },
  ];

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _matDialog: MatDialog,
    private _userService: UserService,
    private _toasterService: ToasterService,
    private _ipService: IpService,
    private _userActivity: UserActivityService,
    private _amps: AmplitudeService
  ) {}

  ngOnInit() {
    this.index++;
    this.updateVideoWatchURL();

    // setting initial configs
    this.priceStatus = this.postLogin()
      ? this.onUserDashboard()
        ? !this.isProductOwned()
        : false
      : true;

    // check for free product
    this.thisProductIsFree =
      this.cardData.base_price === 0 && this.cardData.sale_price === 0;

    // console.log(this.cardData.productType, "typeeeee");

    this.buttonTextToShow = this.getButtonText();
  }

  displayDetailStatus(id: number, setStatus: boolean) {
    // shadow

    if (
      this.cardData.product_type !== 13 ||
      this.cardData.product_type !== 15
    ) {
      this.hoverStatus = setStatus;

      if (!this.mobileView) {
        // DESKTOP VIEW
        const product = document.getElementById(`product-card-${id}`);
        product.style.zIndex = setStatus ? '15' : '0';

        if (this.cardCanShowHover()) {
          /* SHOW HOVER */
          product.style.cursor = 'default';

          if (setStatus) {
            // calculating hover position
            const screenBufferWidth = 200;
            const cardPos = Math.floor(
              (window.innerWidth -
                (this.onHomePage() || this.postLogin()
                  ? screenBufferWidth
                  : 0)) /
                this.cardWidth
            );
            if (this.cardData.product_type !== 13) {
              this.leftHover = !(
                this.index % cardPos > 0 && this.index % cardPos !== 0
              );
            }

            // displaying hover
            const hover = document.getElementById(`hover_div-${id}`);
            hover.style.animation = 'hover_opcaity 0.4s';
            hover.style.animationTimingFunction = 'linear';
          }

          document.getElementById(`hover_div-${id}`).style.display = setStatus
            ? 'block'
            : 'none';
        } else {
          // DON'T SHOW HOVER
          product.style.cursor = 'pointer';
        }
      } else {
        // MOBILE VIEW
        document.getElementById(`product-card-${id}`).style.cursor = 'pointer';
        document.getElementById(`hover_div-${id}`).style.display = 'none';
      }
    }
  }

  openDetail(id: number) {
    if (this.cardData.product_type !== 13) {
      if (window.innerWidth < 1020) {
        this._router.navigateByUrl(
          `/direct?product=${id}&productType=${this.cardData.productType}`
        );
      }
    }
  }

  // Action on Button Click
  performActionOnButtonClick(productId: any, productType: any) {
    if (productType == 1) {
      this.productTypeName = 'dreamroom';
    }
    if (productType == 13) {
      this.productTypeName = 'star-room';
    }
    if (productType == 2) {
      this.productTypeName = 'class-room';
    }
    if (productType == 3) {
      this.productTypeName = 'live-room';
    }
    if (productType == 6) {
      this.productTypeName = 'camp-room';
    }
    if (productType == 4) {
      this.productTypeName = '121-room';
    }

    const button: any = document.getElementById(`button-${productId}`);
    let buttonInnerHTML = button.innerHTML.trim();

    if (
      buttonInnerHTML === this.buttonText.watchNow &&
      this.postLogin() &&
      !this.onUserDashboard()
    ) {
      //
      //    USER WANTS TO WATCH THE VIDEO OF THE PRODUCT
      //

      this._userActivity.logUserActivity('watch-video', productId);
      // console.log(this.getVideoSource(), this.watchNowURL[2].name, "source");
      if (this.getVideoSource() === this.watchNowURL[2].name) {
        // FOR WISTIA VIDEOS

        // New Video Page

        if (
          this.cardData.session_video_id !== undefined
          // || this.cardData.session_video_id !== null
        ) {
          // console.log("line no 270");

          this._router.navigateByUrl(
            `/user/${this.productTypeName}/video-content/${this.categoryId}/${
              this.cardData.product_type
            }/${productId}/${this.cardData.session_video_id + 1}/0`
          );
        } else {
          // console.log("line no 276");
          this._router.navigateByUrl(
            `/user/${this.productTypeName}/video-content/${this.categoryId}/${this.cardData.product_type}/${productId}/0`
          );
        }
      } else if (
        this.getVideoSource() === this.watchNowURL[0].name ||
        this.getVideoSource() === this.watchNowURL[1].name
      ) {
        // console.log("line no 290");

        // for Class Room or Camp Room
        this.isBitmovin = true;

        // New Video Page

        if (
          this.cardData.session_video_id !== undefined ||
          this.cardData.session_video_id !== null
        ) {
          // console.log("line no 301");

          this._router.navigateByUrl(
            `/user/${this.productTypeName}/video-content/${this.categoryId}/${
              this.cardData.product_type
            }/${productId}/${this.cardData.session_video_id + 1}/0`
          );
        } else {
          // console.log("line no 308");

          this._router.navigateByUrl(
            `/user/${this.productTypeName}/video-content/${this.categoryId}/${this.cardData.product_type}/${productId}/0`
          );
        }
      }
    } else if (
      buttonInnerHTML === this.buttonText.joinNow &&
      this.postLogin() &&
      this.onUserDashboard() &&
      (this.thisProductIsFree || this.isProductOwned())
    ) {
      this._userActivity.logUserActivity('join-event', productId);

      if (this.cardData.product_id === this.productToSeach) {
        this._router.navigateByUrl('/user/live-stream');
      } else {
        // ZOOM FUNCTION INTEGRATION
        // if (this.isEventToday(this.cardData.scheduled_date)) {
        this.zoom_classroom(
          this.cardData,
          this.cardData.product_id,
          this.cardData.id
        );
        // }
      }
    } else if (
      buttonInnerHTML === this.buttonText.buyNow ||
      buttonInnerHTML === this.buttonText.readMore
    ) {
      //
      //    USER WANTS TO BUY THE PRODUCT
      //
      this._userActivity.logUserActivity('buy-product', productId);
      this._router.navigate(['/direct'], {
        queryParams: {
          product: productId,
          productType: this.cardData.product_type,
        },
      });
    } else if (buttonInnerHTML === this.buttonText.playNow) {
      const game = this.getGameRoomProductId(this.cardData.product_id);

      if (!game.url.openInDialog) {
        // this will open the link in window
        window.open(game.url.link, '_blank');
      } else {
        if (game.url.isTypeForm) {
          // this.typeformLink(game.url.link);

          this._authService
            .getProductVideoLink({
              productId: this.cardData.product_id,
            })
            .subscribe((res: any) => {
              this.typeformLink(res.data.product[0].video_url[0].quiz_link);
            });
        } else {
          this.openExternalLinkFlipBook(game.url.link);
        }
      }
    } else if (
      buttonInnerHTML === this.buttonText.viewSolution ||
      buttonInnerHTML === this.buttonText.viewResult
    ) {
      const game = this.getGameRoomProductId(this.cardData.product_id);
      if (game.url.isSolutionUrlExternal) {
        window.open(game.url.solutionLink, '_blank');
      } else {
        this.openExternalLinkFlipBook(game.url.solutionLink);
      }
    } else if (buttonInnerHTML === this.buttonText.showSession) {
      // opening Episode list of Sessions
      this.cardData.video_url = null;

      const productTypeAlias = this.productMap.filter(
        (prod) => prod.productType === this.cardData.product_type
      )[0].alias;
      this._router.navigateByUrl(
        `/user/${productTypeAlias}/${this.categoryId}/${
          this.cardData.product_type
        }/${productId}/${localStorage.getItem('first_name')}`
      );
    }
  }

  cardCanShowHover() {
    return this.hover ? window.innerWidth > 800 : false;
  }

  postLogin() {
    return this._router.url.split('/')[1] === 'user';
  }

  onUserDashboard() {
    return this._router.url.split('/')[2] === 'dashboard';
  }

  onHomePage() {
    return this._router.url === '/';
  }

  gotoCheckout(cardId: any) {
    if (!this._authService.isUserLoggedIn()) {
      const dialogRef = this._matDialog.open(LoginComponent, {
        width: '300px',
        height: window.innerWidth < 630 ? '60%' : '420px',
        autoFocus: false,
        data: {
          product_id: this.cardData.product_type, // product_type
          gateway: cardId, // product_id
        },
      });
    } else {
      this.cardSpinner = true;
      this._router.navigate(['/direct'], {
        queryParams: {
          product: cardId,
          productType: this.cardData.product_type,
        },
      });
    }
  }

  getCurrency() {
    return this.cardData.currency === undefined
      ? localStorage.getItem('country').toLowerCase() === 'india'
        ? 'fa-inr'
        : 'fa-usd'
      : this.cardData.currency === 'inr'
      ? 'fa-inr'
      : 'fa-usd';
  }

  mobileVersion() {
    return window.innerWidth < 1080;
  }

  // get Button Text
  getButtonText() {
    if (this.onUserDashboard()) {
      this.priceStatus = !this.isProductOwned();
      if (this.isProductOwned()) {
        if (this.getGameRoomProductId(this.cardData.product_id)) {
          return this.getGameRoomProductId(this.cardData.product_id).buttonText;
        } else if (
          this.isEventToday(this.cardData.scheduled_date) ||
          this.cardData.product_id === 695
        ) {
          return this.buttonText.joinNow;
        } else if (
          this.isEventToday(this.cardData.scheduled_date) ||
          this.isEventUpcoming(this.cardData.scheduled_date)
        ) {
          this.buttonDisable = !this.isEventToday(this.cardData.scheduled_date);
          return this.buttonText.joinNow;
        } else {
          if (this.isEventOver(this.cardData.scheduled_date)) {
            this.buttonDisable = true;
            return this.buttonText.joinNow;
          }
        }
        return this.buttonText.joinNow;
      } else {
        if (this.thisProductIsFree) {
          if (!this.isEventToday(this.cardData.scheduled_date)) {
            this.buttonDisable = true;
          }
          return this.buttonText.joinNow;
        }
      }
      return this.isProductOwned()
        ? this.buttonText.joinNow
        : this.buttonText.buyNow;
    } else if (this.postLogin()) {
      if (this.onOneToOneSession()) {
        return this.buttonText.showSession;
      }

      if (this.getGameRoomProductId(this.cardData.product_id)) {
        return this.getGameRoomProductId(this.cardData.product_id).buttonText;
      }

      if (this.cardData.is_session_multiple) {
        return this.buttonText.showSession;
      }

      if (!this.getVideoSource()) {
        // Changing Card CSS when card not vaild
        // this.disableButtonCSS(
        //   document.getElementById(`button-${this.cardData.product_id}`)
        // );
        this.buttonDisable = true;
        return this.buttonText.watchNow;
      }

      // when everything seems right
      return this.buttonText.watchNow;
    } else {
      if (this.cardData.sale_price === null || this.isThisProductFree()) {
        return this.buttonText.readMore;
      }
      return this.buttonText.buyNow;
    }
  }

  disableButtonCSS(button) {
    button.style.backgroundColor = 'grey';
    button.style.cursor = 'default';
  }

  isProductOwned() {
    return this.cardData.is_user_allowed;
  }

  getVideoSource() {
    for (const videoSource of this.watchNowURL) {
      if (videoSource.url) {
        return videoSource.name;
      }
    }
    return null;
  }

  isEventToday(scheduled_date: any) {
    return (
      new Date().getDate() === new Date(this.cardData.scheduled_date).getDate()
    );
  }

  isEventOver(scheduled_date: any) {
    return (
      new Date().getDate() > new Date(this.cardData.scheduled_date).getDate()
    );
  }

  isEventUpcoming(scheduled_date: any) {
    return (
      new Date().getDate() < new Date(this.cardData.scheduled_date).getDate()
    );
  }

  updateVideoWatchURL() {
    for (const update of this.watchNowURL) {
      update.url = this.cardData[update.name];
    }
  }

  openExternalLinkFlipBook(link: any) {
    this.cardSpinner = false;
    if (link !== null) {
      const dialogRef = this._matDialog.open(LinkViewerComponent, {
        width: '90%',
        height: '80%',
        data: {
          url: link,
        },
      });
    }
  }

  openExternalSubmitQuestion(link: any) {
    this.cardSpinner = false;
    if (link === 1) {
      const dialogRef = this._matDialog.open(LinkViewerComponent, {
        width: '90%',
        height: '90%',
        data: {
          url: `https://nurtr.typeform.com/to/OqzB19?emailid=${localStorage.getItem(
            'email'
          )}`,
        },
      });
    }
  }

  zoom_classroom(cardData, cardId: any, id) {
    this.cardSpinner = true;
    this._userService
      .getZoomWebinarLink({
        userId: localStorage.getItem('id'),
        productId: cardId,
        user_product_episodes_id: id,
      })
      .subscribe(
        (res: any) => {
          this.cardSpinner = false;
          const popUp = window.open(res.data.join_url, '_blank');
          if (popUp == null || typeof popUp === 'undefined') {
            // now open the modal here to inform user regarding the pop-up blocker
            const dialogRef = this._matDialog
              .open(PopBlockerMessageComponent, {
                width: '600px',
                height: '520px',
              })
              .updatePosition({ top: '6em' });
          } else {
            this._amps.setAmplitudeEvents(events.event_23, {
              productId: cardId,
              episodeId: cardData.episode_id,
              productName: cardData.name,
              duration: cardData.duration,
              productType: this.productTypeName,
            });
            popUp.focus();
          }
        },
        (error: any) => {
          this.cardSpinner = false;
          this._amps.setAmplitudeEvents(events.event_23, {
            productId: cardId,
            episodeId: cardData.episode_id,
            productName: cardData.name,
            duration: cardData.duration,
            productType: this.productTypeName,
            error: error.error.message,
          });
          this._toasterService.pop('error', error.error.message);
        }
      );
  }

  isThisProductFree() {
    return !this.postLogin() ? this.thisProductIsFree : false;
  }

  onOneToOneSession() {
    return this.postLogin()
      ? this._router.url.split('/')[2] === '121-room' &&
          (this._router.url.split('/')[3] ===
            localStorage.getItem('first_name') ||
            this._router.url.split('/')[3] === 'null')
      : false;
  }

  showDate() {
    const dateHiddenOnProductType = [12];
    // console.log(this.cardData.product_type, dateHiddenOnProductType.filter((date) => (date === this.cardData.product_type)));
    return (
      dateHiddenOnProductType.filter(
        (date) => date === this.cardData.product_type
      ).length !== 0
    );
    // return true;
  }

  getGameRoomProductId(id: any) {
    return this.exceptionalProductId.filter(
      (product: any) => product.productId === id
    )[0];
  }

  typeformLink(link: string) {
    const popup = window.typeformEmbed
      .makePopup(link, {
        hideHeaders: true,
        hideFooter: true,
      })
      .open();
  }
}
