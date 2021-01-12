import {
  Component,
  OnInit,
  HostBinding,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Player, PlayerEvent, SourceConfig } from 'bitmovin-player';

import { UIFactory } from 'bitmovin-player-ui';

import { UserActivityService } from '../../app-common/user-activity.service';
import { PlayerConfiguration, PlayerSourceConfig } from './player.config';
import { AuthService } from '../../auth/auth.service';
import { AmplitudeService } from '../../amplitude/amplitude.service';
import { events } from '../../amplitude/events';

@Component({
  selector: 'app-player-bitmovin',
  templateUrl: './player-bitmovin.component.html',
})
export class PlayerBitmovinComponent
  implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @HostBinding('class') PlayerBitmovinComponentClass = 'app-player-bitmovin';

  @ViewChild('videoPlayer') videoPlayerContainer: ElementRef;

  videoContent: any;
  amplitudeData: any;
  player: any;
  devToolStatus: any;
  setIntervalId: any;
  source: SourceConfig;

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

  @Input() detailUser: any;
  @Input() detailVideo: any;

  @Input() videoCurrent: any;

  @Input('playerUnload')
  set playerUnload(value: any) {
    if (value) {
      this.unloadPlayer();
    }
  }

  @Input('playerPause')
  set playerPause(value: any) {
    if (value) {
      this.player.pause();
    }
  }

  constructor(
    private _authService: AuthService,
    private _amps: AmplitudeService,
    private _userActivity: UserActivityService // private _location: PlatformLocation
  ) {
    window.addEventListener('devtoolschange', (e: any) => {
      this.devToolStatus = e.detail.open;

      // if you get value true --> log user activity -- service call
      this._userActivity.logUserActivity(
        'video-hack',
        this.amplitudeData.product_id,
        this.amplitudeData.episode_id
      );

      // when developer tools will be closed the page will be refreshed
      if (!e.detail.open) {
        location.reload();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.videoCurrent &&
      changes.videoCurrent.currentValue.dash &&
      changes.videoCurrent.currentValue.hls
    ) {
      this.amplitudeData = changes.videoCurrent.currentValue;
      // console.log(this.amplitudeData, 'line no 105');

      this.setupPlayer(changes.videoCurrent.currentValue);
    }
  }

  ngOnInit() {
    const localWindow: any = window;
    this.devToolStatus = localWindow.devtools.open;
  }

  ngAfterViewInit(): void {
    this.player = new Player(
      this.videoPlayerContainer.nativeElement,
      PlayerConfiguration
    );
    this.setupPlayer(this.videoCurrent);
  }

  setupPlayer(sourceObj: any) {
    this.source = PlayerSourceConfig;
    this.source.hls = sourceObj.hls;
    this.source.dash = sourceObj.dash;
    this.source.poster = sourceObj.poster;

    let sub_name = sourceObj.name.split(' ');
    sub_name = sub_name.join('_').toLowerCase();
    let subtitleTracks = [];
    if (sourceObj.subtitle_url) {
      const su: any = sourceObj.subtitle_url;
      subtitleTracks = [];
      su.forEach((sub, index) => {
        subtitleTracks.push({
          id: `${index + 100}`,
          lang: `${sub.lang}`,
          label: `${sub.label}`,
          kind: 'subtitle',
          enabled: true,
          url: `${sub.url}`,
        });
      });
    }

    if (subtitleTracks.length > 0) {
      this.source.subtitleTracks = subtitleTracks;
    }

    if (this.player) {
      this.player.load(this.source).then(() => {
        UIFactory.buildDefaultUI(this.player);
      });

      this.player.on(PlayerEvent.Warning, (data: any) => {
        this._userActivity.logUserActivity(
          'video-warning',
          this.amplitudeData.product_id,
          this.amplitudeData.episode_id
        );
      });

      this.player.on(PlayerEvent.Play, (playerData: any) => {
        this._amps.setAmplitudeEvents(events.event_17, {
          complete: false,
          name: this.amplitudeData.name,
          episode_id: this.amplitudeData.episode_id,
          duration: this.amplitudeData.duration,
          product_id: this.amplitudeData.product_id,
          is_free: this.amplitudeData.is_free,
        });
        this._userActivity.logUserActivity(
          'video-play',
          this.amplitudeData.product_id,
          this.amplitudeData.episode_id
        );

        this._authService
          .proofWatchVideo(this.detailVideo.productType, {
            type: 'custom',
            email: this.detailUser.userEmail,
            first_name: this.detailUser.userName,
            city: '',
            state: '',
            country: '',
            ip: '',
          })
          .subscribe();

        if (this.verifyUserBrowser() && !this.devToolStatus) {
          const element = document.getElementById('bmpui-id-204');
          const userInfoElementContainer = this.createUserInfoContainer();
          element.appendChild(userInfoElementContainer);

          this.setIntervalId = setInterval(() => {
            const randomPosition = Math.floor(Math.random() * 100 + 1);
            if (this.verifyDomStyleChanges()) {
              location.reload();
            } else {
              document.getElementById(
                'user_info_container'
              ).style.top = `${randomPosition}%`;
              document.getElementById('user_info_container').style.left = `${
                100 - randomPosition
              }%`;
            }
          }, 3000);
        }
      });

      this.player.on(PlayerEvent.Paused, (playerData) => {
        this._userActivity.logUserActivity(
          'video-pause',
          this.amplitudeData.product_id,
          this.amplitudeData.episode_id
        );
      });

      this.player.on(PlayerEvent.PlaybackFinished, (playerErrorData) => {
        this._amps.setAmplitudeEvents(events.event_17, {
          complete: true,
          name: this.amplitudeData.name,
          episode_id: this.amplitudeData.episode_id,
          duration: this.amplitudeData.duration,
          product_id: this.amplitudeData.product_id,
          is_free: this.amplitudeData.is_free,
        });
        this._userActivity.logUserActivity(
          'video-finish',
          this.amplitudeData.product_id,
          this.amplitudeData.episode_id
        );
      });

      this.player.on(PlayerEvent.Error, (playerErrorData) => {
        this._amps.setAmplitudeEvents('play-video', {
          error: true,
          name: this.amplitudeData.name,
          episode_id: this.amplitudeData.episode_id,
          duration: this.amplitudeData.duration,
          product_id: this.amplitudeData.product_id,
          is_free: this.amplitudeData.is_free,
        });
        this._userActivity.logUserActivity(
          'video-error',
          this.amplitudeData.product_id,
          this.amplitudeData.episode_id
        );
      });
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.setIntervalId);
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

  isVideoOnDesktop() {
    return window.innerWidth > 600;
  }

  onDesktopStyleValidation() {
    return (
      document.getElementById('bmpui-id-214').style.length > 0 ||
      document.getElementById('bmpui-id-214').getAttribute('hidden') !== null ||
      // first children of above id
      document.getElementById('bmpui-id-214').children[0]['style'].length > 0 ||
      document
        .getElementById('bmpui-id-214')
        .children[0].getAttribute('hidden') !== null ||
      // get child of above id -- bmpui-id-201
      document.getElementById('bmpui-id-201').style.length > 0 ||
      document.getElementById('bmpui-id-201').children[1].id !==
        'user_info_container' ||
      document.getElementById('bmpui-id-214').children[0].children[2].id !==
        'bmpui-id-201' ||
      document.getElementById('bmpui-id-214').parentElement.nodeName !==
        'FIGURE' ||
      document.getElementById('bmpui-id-201').getAttribute('hidden') !== null
    );
  }

  verifyDomStyleChanges() {
    return (
      !document.getElementById('user_info_element') ||
      document.getElementById('user_info_element').innerText !==
        this.detailUser.userEmail + ' ' + this.detailUser.userMobile ||
      document.getElementById('user_info_element').style.length > 3 ||
      document.getElementById('user_info_element').style['font-size'] !==
        '1em' ||
      (this.isVideoOnDesktop()
        ? document.getElementById('user_info_element').style['opacity'] !==
          '0.6'
        : document.getElementById('user_info_element').style['opacity'] !==
          '0.9') ||
      document.getElementById('user_info_element').getAttribute('hidden') !==
        null ||
      document.getElementById('user_info_element').children.length !== 0 ||
      // user info container
      !document.getElementById('user_info_container') ||
      document.getElementById('user_info_container').style.length !== 3 ||
      document.getElementById('user_info_container').style['position'] !==
        'absolute' ||
      !document.getElementById('user_info_container').style['top'] ||
      !document.getElementById('user_info_container').style['left'] ||
      document.getElementById('user_info_container').getAttribute('hidden') !==
        null ||
      document.getElementById('user_info_container').children.length > 1 ||
      document.getElementById('user_info_container').children[0].id !==
        'user_info_element' ||
      // level 1 - for css  -- bmpui-id-214
      (!this.isVideoOnDesktop() ? this.onDesktopStyleValidation() : false) ||
      // now target 3rd party element
      getComputedStyle(
        document.getElementsByClassName('bmpui-ui-uicontainer')[0]
      )['z-index'] < 0 ||
      getComputedStyle(
        document.getElementsByClassName('bmpui-ui-uicontainer')[0]
      ).position !== 'absolute' ||
      // ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).top !== '0' )
      // ||
      // ( ( ( navigator.userAgent.indexOf('Firefox') != -1 ) || ( navigator.userAgent.toLowerCase().indexOf('safari') != -1 ) ) ? false : ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).left !== '0' ) )
      // ||
      // ( ( ( navigator.userAgent.indexOf('Firefox') != -1 ) || ( navigator.userAgent.toLowerCase().indexOf('safari') != -1 ) ) ? false : ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).right !== '0' ) )
      //  ||
      // ( getComputedStyle(document.getElementsByClassName('bmpui-ui-uicontainer')[ 0 ]).margin < '0px' )
      // ||
      getComputedStyle(
        document.getElementsByClassName('bmpui-ui-uicontainer')[0]
      ).display !== 'block'
    );
  }

  getUserBrowser() {
    const localWindow: any = window;
    const isIE = !!localWindow.documentMode;

    if (!!localWindow.chrome && !!localWindow.chrome.webstore) {
      return 'Chrome';
    }

    if (navigator.userAgent.indexOf('Firefox') !== -1) {
      return 'Mozilla Firefox';
    }

    if (navigator.userAgent.toLowerCase().indexOf('safari') !== -1) {
      return 'Safari';
    }

    if (!isIE && !!localWindow.StyleMedia) {
      return 'Edge';
    }

    if (
      !!localWindow.opr ||
      !!localWindow.opera ||
      navigator.userAgent.indexOf(' OPR/') >= 0
    ) {
      return 'Opera';
    }

    return 'Unknown Browser detected';
  }

  unloadPlayer() {
    this.player.unload();
    this.ngOnDestroy();
  }
}
