import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Inject,
  AfterViewInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { UserActivityService } from '../../app-common/user-activity.service';
import { DOCUMENT } from '@angular/common';

declare let Wistia: any;

@Component({
  selector: 'app-player-wistia',
  templateUrl: './player-wistia.component.html',
  styleUrls: ['./player-wistia.component.scss'],
})
export class PlayerWistiaComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding('class') PlayerWistiaComponentClass = 'app-player-wistia';

  @Input() detailUser: any;

  @Input('videoURL')
  set videoURL(value: any) {
    this.wistiaURL = value.video_url;
    this.videoCode = `<div class="wistia_embed ${this.wistiaURL}" style="height:352px;position:relative;width:640px"></div>`;

    localStorage.setItem('wistia_url', this.wistiaURL);
  }

  @Input() detailVideo: any;

  @Output() videoLinkInvalid = new EventEmitter<any>();

  devToolStatus: any;
  wistiaURL: any;
  videoCode: any;
  setIntervalId: any;

  supportedBrowserList = [
    {
      name: 'Chrome',
      provider: 'Google',
      image_url: 'assets/browser/chrome.svg',
    },
    {
      name: 'Firefox',
      provider: 'Mozilla',
      image_url: 'assets/browser/firefox.svg',
    },
    {
      name: 'Safari',
      provider: 'Apple',
      image_url: 'assets/browser/safari.svg',
    },
    {
      name: 'Edge',
      provider: 'Microsoft',
      image_url: 'assets/browser/edge.svg',
    },
    {
      name: 'Opera',
      provider: 'Otello',
      image_url: 'assets/browser/opera.svg',
    },
  ];

  constructor(
    private _userActivity: UserActivityService,
    @Inject(DOCUMENT) private doc: any
  ) {
    // window.addEventListener('devtoolschange', (e: any) => {
    //   this.devToolStatus = e.detail.open;
    //   this._userActivity.logUserActivity('video-hack', this.detailVideo.productType, this.detailVideo.productId);
    //   // when developer tools will be closed the page will be refreshed
    //   if (!e.detail.open) {
    //     location.reload();
    //   }
    // });
  }

  ngOnInit() {
    const localWindow: any = window;
    // this.devToolStatus = localWindow.devtools.open;

    this.setIntervalId = setInterval(() => {
      document.getElementById(
        'watermark'
      ).innerHTML = `${this.detailUser.userEmail} ${this.detailUser.userMobile}`;
      this.getWatermarkStyle();

      // if (this.verifyDomStyleChanges()) {
      if (false) {
        location.reload();
      } else {
        const randomPosition = Math.floor(Math.random() * 100 + 1);
        document.getElementById('watermark').style.top = `${randomPosition}%`;
        document.getElementById('watermark').style.left = `${
          100 - randomPosition
        }%`;
      }
    }, 3000);
  }

  getWatermarkStyle() {
    const wm = document.getElementById('watermark').style;
    wm.background = 'transparent';
    wm.position = 'absolute';
    wm.top = '0';
    wm.left = '0';
    wm.right = '0';
    wm.bottom = '0';
    wm.zIndex = '1';
    wm.height = '94%';
    wm.pointerEvents = 'none';
    wm.overflow = 'hidden';
    wm.fontSize = '1em';
    wm.color = 'white';
    wm.opacity = '0.6';
    wm.display = 'block';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const x: any = Wistia.api(
        localStorage.getItem('wistia_url').replace('wistia_async_', '')
      ).hasData();
      if (!x) {
        this.videoLinkInvalid.emit(true);
      }
    }, 3000);
  }

  verifyUserBrowser() {
    const localWindow: any = window;
    const isIE = !!localWindow.documentMode;

    const isChrome = !!localWindow.chrome && !!localWindow.chrome.webstore;
    const isFirefox = navigator.userAgent.indexOf('Firefox') !== -1;
    const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') !== -1;
    const isEdge = !isIE && !!localWindow.StyleMedia;
    const isOpera =
      !!localWindow.opr ||
      !!localWindow.opera ||
      navigator.userAgent.indexOf(' OPR/') >= 0;

    return isChrome || isFirefox || isSafari || isEdge || isOpera;
  }

  updateHtmlCode() {
    this.videoCode = `
    <div class="wistia_embed ${this.wistiaURL}" style="height:352px;position:relative;width:640px">
      <div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
        <img src="https://fast.wistia.com/embed/medias/cwullmkqza/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;"
          alt="" onload="this.parentNode.style.opacity=1;" />
      </div>
    </div>
    `;
  }

  verifyDomStyleChanges() {
    const result =
      !document.getElementById('watermark') ||
      document.getElementById('watermark').innerText !==
        this.detailUser.userEmail + ' ' + this.detailUser.userMobile ||
      document.getElementById('watermark').style.length !== 24 ||
      document.getElementById('watermark').style['font-size'] !== '1em' ||
      document.getElementById('watermark').style['color'] !== 'white' ||
      document.getElementById('watermark').style['opacity'] !== '0.6' ||
      document.getElementById('watermark').getAttribute('hidden') !== null ||
      document.getElementById('watermark').children.length !== 0 ||
      document.getElementById('watermark').style['position'] !== 'absolute' ||
      !document.getElementById('watermark').style['top'] ||
      !document.getElementById('watermark').style['left'] ||
      document.getElementById('watermark').style['pointer-events'] !== 'none' ||
      document.getElementById('watermark').style.display !== 'block';

    // console.log(
    //   !document.getElementById('watermark') ,
    //   document.getElementById('watermark').innerText !== this.detailUser.userEmail + ' ' + this.detailUser.userMobile ,
    //   document.getElementById('watermark').style.length !== 23 ,
    //   document.getElementById('watermark').style['font-size'] !== '1em' ,
    //   document.getElementById('watermark').style['color'] !== 'white' ,
    //   document.getElementById('watermark').style['opacity'] !== '0.6' ,
    //   document.getElementById('watermark').getAttribute('hidden') !== null ,
    //   document.getElementById('watermark').children.length !== 0 ,
    //   document.getElementById('watermark').style['position'] !== 'absolute' ,
    //   !document.getElementById('watermark').style['top'] ,
    //   !document.getElementById('watermark').style['left'] ,
    //   document.getElementById('watermark').style['pointer-events'] !== 'none' ,
    // );

    return result;
  }

  ngOnDestroy() {
    clearInterval(this.setIntervalId);
    localStorage.removeItem('wistia_url');
  }
}
