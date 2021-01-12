import {
  Component,
  OnInit,
  HostBinding,
  Inject,
  AfterViewInit,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UserActivityService } from '../../app-common/user-activity.service';
import { AmplitudeService } from '../../amplitude/amplitude.service';
import { events } from '../../amplitude/events';

declare var videojs: any;
declare var platform: any;

@Component({
  selector: 'app-player-video-js',
  templateUrl: './player-video-js.component.html',
})
export class PlayerVideoJsComponent
  implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @HostBinding('class') PlayerVideoJsComponentClass = 'app-player-video-js';

  @Input() videoURL: any;
  @Input() detailVideo: any;
  @Input() detailUser: any;

  script = [
    {
      id: 'mux-player',
      source:
        'https://github.com/videojs/mux.js/releases/download/v5.0.0/mux.js',
    },
  ];

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

  player: any;
  setIntervalId: any;
  devToolStatus: any;
  dash_src_config: any;
  hls_src_config: any;
  pauseCount = 0;
  lastStart = 0;
  lastPause = 0;
  last_event_name = null;

  constructor(
    @Inject(DOCUMENT) private doc: any,
    private _userActivity: UserActivityService,
    private _amps: AmplitudeService
  ) {
    this.createPlayerScript();

    // window.addEventListener("devtoolschange", (e: any) => {
    //   this.devToolStatus = e.detail.open;
    //   this._userActivity.logUserActivity(
    //     "video-hack",
    //     this.detailVideo.productType,
    //     this.detailVideo.productId
    //   );

    //   // when developer tools will be closed the page will be refreshed
    //   if (!e.detail.open) {
    //     // location.reload();
    //   }
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.player) {
      this.ngOnInit().then(() => {
        this.initPlayer(false);
      });
    }
  }

  async ngOnInit() {
    const localWindow: any = window;
    // this.devToolStatus = localWindow.devtools.open;

    this.dash_src_config = {
      type: 'application/dash+xml',
      src: this.videoURL.dash,
      keySystemOptions: [
        {
          name: 'com.widevine.alpha',
          options: {
            serverURL: 'https://widevine-dash.ezdrm.com/proxy?pX=5197BC',
          },
        },
      ],
    };

    this.hls_src_config = {
      type: 'application/x-mpegURL',
      src: this.videoURL.hls,
      keySystems: {
        'com.apple.fps.1_0': {
          certificateUri: 'https://d1wh57ge0m36p3.cloudfront.net/fairplay.cer',
          licenseUri:
            'https://fps.ezdrm.com/api/licenses/12b27509-7e12-4b8e-97e7-7888b8a950f2',
        },
      },
    };
  }

  createUserInfoContainer() {
    const userInfoElementContainer = document.createElement('div');
    userInfoElementContainer.id = 'user_info_container';
    userInfoElementContainer.style.position = 'absolute';
    userInfoElementContainer.style.top = '15%';
    userInfoElementContainer.style.left = '5%';

    const userInfoElement = document.createElement('div');
    userInfoElement.id = 'user_info_element';
    userInfoElement.style['font-size'] = '1em';
    userInfoElement.style.opacity = this.isVideoOnDesktop() ? '0.6' : '0.9';
    userInfoElement.style.color = 'white';

    const elTextNode = document.createTextNode(
      this.detailUser.userEmail + ' ' + this.detailUser.userMobile
    );
    userInfoElement.appendChild(elTextNode);
    userInfoElementContainer.appendChild(userInfoElement);

    return userInfoElementContainer;
  }

  isVideoOnDesktop() {
    return window.innerWidth > 600;
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

  createPlayerScript() {
    return new Promise((resolve) => {
      for (const i of this.script) {
        const scriptElement = this.doc.createElement('script'); // safari
        scriptElement.id = i.id;
        scriptElement.src = i.source;
        document.getElementById('body').append(scriptElement);
      }

      resolve();
    });
  }

  addWaterMark() {
    this.setIntervalId = setInterval(() => {
      document.getElementById(
        'watermark'
      ).innerHTML = `${this.detailUser.userEmail} ${this.detailUser.userMobile}`;
      this.getWatermarkStyle();

      const randomPosition = Math.floor(Math.random() * 100 + 1);
      document.getElementById('watermark').style.top = `${randomPosition}%`;
      document.getElementById('watermark').style.left = `${
        100 - randomPosition
      }%`;
    }, 3000);
  }

  ngAfterViewInit() {
    this.player = videojs('video_js');
    this.player.httpSourceSelector();
    this.initPlayer(true);

    //EVENTS

    this.player.on('error', () => {
      this.onError('error', this.player.currentTime(), this.player.duration());
    });

    this.player.on('play', () => {
      this.onPlaying('play', this.player.currentTime(), this.player.duration());
    });

    this.player.on('pause', () => {
      this.onPause('pause', this.player.currentTime(), this.player.duration());
    });

    this.player.on('seeked', () => {
      this.onSeeking(
        'seeked',
        this.player.currentTime(),
        this.player.duration()
      );
    });

    this.player.on('ended', () => {
      this.onEnded('ended', this.player.currentTime(), this.player.duration());
    });

    this.addWaterMark();
  }

  onPause(errorType, currentTime, duration) {
    this.last_event_name = 'pause';
    this.lastPause = currentTime;
    this.pauseCount++;
  }

  onPlaying(errorType, currentTime, duration) {
    this._amps.setAmplitudeEvents(events.event_17, {
      complete: false,
      name: this.videoURL.name,
      episode_id: this.detailVideo.episodeId
        ? this.detailVideo.episodeId
        : undefined,
      duration: duration,
      is_free: false,
      product_category: this.detailVideo.categoryId,
      room: this.detailVideo.productType,
      product_id: this.detailVideo.productId,
      title: this.videoURL.name,
      author: this.videoURL.author_name,
      length: duration,
      finish_percentage: `${((currentTime / duration) * 100).toFixed(2)}%`,
      pause_count: this.pauseCount,
      last_pause: this.lastPause,
      tags: undefined,
      plan: undefined,
      start_time: currentTime,
      end_time: undefined,
    });

    this.lastStart = duration;
    this.last_event_name = 'play';
  }

  onSeeking(errorType, currentTime, duration) {
    // console.log(currentTime, duration);
    this.lastStart =
      this.last_event_name === 'pause' ? currentTime : this.lastPause;
    this._amps.setAmplitudeEvents(events.event_32, {
      product_category: this.detailVideo.categoryId,
      room: this.detailVideo.productType,
      product_id: this.detailVideo.productId,
      title: this.videoURL.name,
      author: this.videoURL.author_name,
      length: duration,
      time_of_seek: (currentTime - this.lastStart).toFixed(2),
      seek_start: this.lastStart,
      seek_end: currentTime,
      tags: undefined,
      plan: undefined,
    });
    this.last_event_name = 'seeking';
  }

  onEnded(errorType, currentTime, duration) {
    const payload =
      duration === currentTime
        ? {
            complete: true,
            name: this.videoURL.name,
            episode_id: this.detailVideo.episodeId
              ? this.detailVideo.episodeId
              : undefined,
            duration: duration,
            is_free: undefined,
            product_category: this.detailVideo.categoryId,
            room: this.detailVideo.productType,
            product_id: this.detailVideo.productId,
            title: this.videoURL.name,
            author: this.videoURL.author_name,
            length: duration,
            finish_percentage: `${((currentTime / duration) * 100).toFixed(
              2
            )}%`,
            pause_count: this.pauseCount,
            last_pause: this.lastPause,
            tags: undefined,
            plan: undefined,
            start_time: this.lastStart,
            end_time: duration,
          }
        : {
            // new payload for tab closing
            complete: false,
            name: this.videoURL.name,
            episode_id: this.detailVideo.episodeId
              ? this.detailVideo.episodeId
              : undefined,
            duration: duration,
            is_free: undefined,
            product_category: this.detailVideo.categoryId,
            room: this.detailVideo.productType,
            product_id: this.detailVideo.productId,
            title: this.videoURL.name,
            author: this.videoURL.author_name,
            length: currentTime,
            finish_percentage: `${((currentTime / duration) * 100).toFixed(
              2
            )}%`,
            pause_count: this.pauseCount,
            last_pause: this.lastPause,
            tags: undefined,
            plan: undefined,
            start_time: this.lastStart,
            end_time: duration,
          };
    this._amps.setAmplitudeEvents(events.event_33, payload);
  }

  onError(errorType, currentTime, duration) {
    this._amps.setAmplitudeEvents(events.event_34, {
      error: "video can't be played right now",
      error_type: errorType,
      product_id: this.detailVideo.productId,
      title: this.videoURL.name,
      author: this.videoURL.author_name,
      length: duration,
      error_at: currentTime,
    });
  }

  async initPlayer(loadEme: boolean) {
    let config = [
      {
        initDataTypes: ['cenc'],
        audioCapabilities: [
          {
            contentType: 'audio/mp4;codecs="mp4a.40.2"',
          },
        ],
        videoCapabilities: [
          {
            contentType: 'video/mp4;codecs="avc1.42E01E"',
          },
        ],
      },
    ];
    let isDashSupported = true;
    try {
      // dash supported
      const res = await navigator.requestMediaKeySystemAccess(
        'com.widevine.alpha',
        config
      );
      isDashSupported = true;
      this.player.src(this.dash_src_config);
    } catch (error) {
      isDashSupported = false;
    }
    // console.log("is dash supported", isDashSupported);
    if (isDashSupported) {
      this.player.src(this.dash_src_config);
    } else {
      if (loadEme) {
        this.player.eme();
      }

      this.player.src(this.hls_src_config);
    }

    this.player.play();
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

  playerDestroy() {
    this.player.dispose();
  }

  ngOnDestroy() {
    for (const i of this.script) {
      if (document.getElementById(i.id)) {
        document.getElementById(i.id).remove();
      }
    }

    if (this.player) {
      this.playerDestroy();
    }

    clearInterval(this.setIntervalId);
  }
}
