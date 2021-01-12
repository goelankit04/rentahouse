import {
  Component,
  OnInit,
  Inject,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { AmplitudeService } from "../../amplitude/amplitude.service";
import { events } from "../../amplitude/events";

declare var shaka;

@Component({
  selector: "app-player-shaka",
  templateUrl: "./player-shaka.component.html"
})
export class PlayerShakaComponent implements OnInit, OnDestroy {
  @HostBinding("class") PlayerShakaComponentClass = "app-player-shaka";

  @Input() detailVideo: any;
  @Input() videoURL: any;
  @Input() detailUser: any;
  @Output() videoLinkInvalid = new EventEmitter<boolean>();

  drm;
  pauseCount = 0;
  lastStart = 0;
  lastPause = 0;
  last_event_name = null;

  watermarkInterval: any;
  playerLoaded = false;

  devToolStatus: any;
  supportedBrowserList = [
    {
      name: "Chrome",
      provider: "Google",
      image_url: "assets/browser/chrome.svg"
    },
    {
      name: "Firefox",
      provider: "Mozilla",
      image_url: "assets/browser/firefox.svg"
    },
    {
      name: "Safari",
      provider: "Apple",
      image_url: "assets/browser/safari.svg"
    },
    {
      name: "Edge",
      provider: "Microsoft",
      image_url: "assets/browser/edge.svg"
    },
    {
      name: "Opera",
      provider: "Otello",
      image_url: "assets/browser/opera.svg"
    }
  ];

  constructor(
    @Inject(DOCUMENT) private doc: any,
    private _amps: AmplitudeService
  ) {
    window.addEventListener("devtoolschange", (e: any) => {
      this.devToolStatus = e.detail.open;

      // if you get value true --> log user activity -- service call
      // this._userActivity.logUserActivity(
      //   'video-hack',
      //   this.amplitudeData.product_id,
      //   this.amplitudeData.episode_id
      // );

      // when developer tools will be closed the page will be refreshed
      if (!e.detail.open) {
        location.reload();
      }
    });

    // window.onbeforeunload = () => {
    //   console.log('onbeforeunload');
    //   // !confirm('Are you sure, you want to leave?') ? this.onEnded({}) : '';
    //   !window.confirm('Are you sure, you want to leave?') ? console.log('I am not leaving') : console.log('I am leaving');
    // };
  }

  async ngOnInit() {
    const req = await fetch(
      "https://d1wh57ge0m36p3.cloudfront.net/fairplay.cer"
    );
    const cert = await req.arrayBuffer();

    this.drm = {
      retryParameters: {
        maxAttempts: 2,
        baseDelay: 1000,
        backoffFactor: 2,
        fuzzFactor: 0.5,
        timeout: 0
      },
      "com.apple.fps.1_0": {
        persistentState: true
      },
      "com.apple.fps": {
        persistentState: true
      },
      "com.apple.fps.2_0": {
        persistentState: true
      },
      servers: {
        "com.widevine.alpha": "https://widevine-dash.ezdrm.com/proxy?pX=5197BC",
        "com.apple.fps.1_0":
          "https://fps.ezdrm.com/api/licenses/12b27509-7e12-4b8e-97e7-7888b8a950f2",
        "com.apple.fps.2_0":
          "https://fps.ezdrm.com/api/licenses/12b27509-7e12-4b8e-97e7-7888b8a950f2",
        "com.apple.fps":
          "https://fps.ezdrm.com/api/licenses/12b27509-7e12-4b8e-97e7-7888b8a950f2"
      },
      clearKeys: {},
      advanced: {
        "com.apple.fps": {
          distinctiveIdentifierRequired: false,
          persistentStateRequired: false,
          videoRobustness: "",
          audioRobustness: "",
          serverCertificate: new Uint8Array(cert),
          individualizationServer: ""
        },
        "com.apple.fps.1_0": {
          distinctiveIdentifierRequired: false,
          persistentStateRequired: false,
          videoRobustness: "",
          audioRobustness: "",
          serverCertificate: new Uint8Array(cert),
          individualizationServer: ""
        },
        "com.apple.fps.2_0": {
          distinctiveIdentifierRequired: false,
          persistentStateRequired: false,
          videoRobustness: "",
          audioRobustness: "",
          serverCertificate: new Uint8Array(cert),
          individualizationServer: ""
        }
      },
      delayLicenseRequestUntilPlayed: false,
      fairPlayTransform: false
    };

    const localWindow: any = window;
    this.devToolStatus = localWindow.devtools.open;

    if (!this.videoURL.shaka_url && this.videoURL.product_type === 2) {
      this.videoURL.shaka_url = this.videoURL.dash;
    }

    if (this.videoURL.shaka_url) {
      await this.createPlayerScript();

      document.addEventListener("shaka-ui-loaded", () => {
        shaka.polyfill.installAll();
        if (shaka.Player.isBrowserSupported()) {
          this.playerLoaded = true;
          this.initPlayer();
        } else {
          console.error("Browser not supported!");
        }
      });
    }
  }

  async initPlayer() {
    const video = document.getElementById("video_shaka");
    window["video"] = video;
    const ui = video["ui"];
    const controls = ui.getControls();
    const player = controls.getPlayer();
    ui.getControls();

    const uiConfig = {
      controlPanelElements: [
        "play_pause",
        "time_and_duration",
        "spacer",
        /*"rewind", "fast_forward",*/ "mute",
        "volume",
        "fullscreen",
        "overflow_menu"
      ],
      addBigPlayButton: true,
      addSeekBar: true
    };

    // setting UI configuration
    await ui.configure(uiConfig);

    // setting up events
    player.addEventListener("error", () => this.onPlayerErrorEvent(this));
    video.addEventListener("pause", () => this.onPause(this));
    video.addEventListener("playing", () => this.onPlaying(this));
    video.addEventListener("ended", () => this.onEnded(this));
    video.addEventListener("seeking", () => this.onSeeking(this));

    // creating player configuration
    const playerConfig = {
      streaming: {
        bufferingGoal: 30
        // alwaysStreamText: true
      },
      manifest: {
        dash: {
          defaultPresentationDelay: 30
        }
      },
      drm: this.drm,
      preferredTextLanguage: "eng",
      // preferredAudioLanguage: 'eng',
      abr: {
        enabled: true
      }
    };

    // loading player configuration
    await player.configure(playerConfig);

    await player.load(this.videoURL.shaka_url, null);

    // adding subtitle
    // if (this.videoURL.subtitle_url) {
    //   await player.addTextTrack('../../../assets/subtitle.vtt', 'en', 'subtitle', 'text/vtt', '', 'English');
    // }

    // if user details are available
    if (this.detailUser) {
      // setting up watermark
      this.watermarkInterval = setInterval(() => {
        const randomPosition = Math.floor(Math.random() * 100 + 1);
        if (this.verifyDomStyleChanges()) {
          location.reload();
        } else {
          document.getElementById("myid").style.top = `${randomPosition}%`;
          document.getElementById("myid").style.left = `${100 -
            randomPosition}%`;
        }
      }, 4000);
    }
  }

  // PLAYER EVENTS

  onPlaying(evnt) {
    this._amps.setAmplitudeEvents(events.event_17, {
      complete: false,
      name: this.videoURL.name,
      episode_id: this.detailVideo.episodeId
        ? this.detailVideo.episodeId
        : undefined,
      duration: this.getPlayerDuration(),
      is_free: false,
      product_category: this.detailVideo.categoryId,
      room: this.detailVideo.productType,
      product_id: this.detailVideo.productId,
      title: this.videoURL.name,
      author: this.videoURL.author_name,
      length: this.getPlayerDuration(),
      finish_percentage: `${(
        (this.getPlayerCurrentTime() / this.getPlayerDuration()) *
        100
      ).toFixed(2)}%`,
      pause_count: this.pauseCount,
      last_pause: this.lastPause,
      tags: undefined,
      plan: undefined,
      start_time: this.getPlayerCurrentTime(),
      end_time: undefined
    });

    this.lastStart = this.getPlayerCurrentTime();
    this.last_event_name = "play";
  }

  onSeeking(event) {
    this.lastStart =
      this.last_event_name === "pause"
        ? this.getPlayerCurrentTime()
        : event.lastPause;

    this._amps.setAmplitudeEvents(events.event_32, {
      product_category: this.detailVideo.categoryId,
      room: this.detailVideo.productType,
      product_id: this.detailVideo.productId,
      title: this.videoURL.name,
      author: this.videoURL.author_name,
      length: this.getPlayerDuration(),
      time_of_seek: (this.getPlayerCurrentTime() - this.lastStart).toFixed(2),
      seek_start: this.lastStart,
      seek_end: this.getPlayerCurrentTime(),
      tags: undefined,
      plan: undefined
    });

    this.last_event_name = "seeking";
  }

  onPause(evnt) {
    this.last_event_name = "pause";
    this.lastPause = this.getPlayerCurrentTime();
    this.pauseCount++;
  }

  onEnded(evnt) {
    const payload =
      this.getPlayerDuration() === this.getPlayerCurrentTime()
        ? {
            complete: true,
            name: this.videoURL.name,
            episode_id: this.detailVideo.episodeId
              ? this.detailVideo.episodeId
              : undefined,
            duration: this.getPlayerDuration(),
            is_free: undefined,
            product_category: this.detailVideo.categoryId,
            room: this.detailVideo.productType,
            product_id: this.detailVideo.productId,
            title: this.videoURL.name,
            author: this.videoURL.author_name,
            length: this.getPlayerDuration(),
            finish_percentage: `${(
              (this.getPlayerCurrentTime() / this.getPlayerDuration()) *
              100
            ).toFixed(2)}%`,
            pause_count: this.pauseCount,
            last_pause: this.lastPause,
            tags: undefined,
            plan: undefined,
            start_time: this.lastStart,
            end_time: this.getPlayerDuration()
          }
        : {
            // new payload for tab closing
            complete: false,
            name: this.videoURL.name,
            episode_id: this.detailVideo.episodeId
              ? this.detailVideo.episodeId
              : undefined,
            duration: this.getPlayerDuration(),
            is_free: undefined,
            product_category: this.detailVideo.categoryId,
            room: this.detailVideo.productType,
            product_id: this.detailVideo.productId,
            title: this.videoURL.name,
            author: this.videoURL.author_name,
            length: this.getPlayerCurrentTime(),
            finish_percentage: `${(
              (this.getPlayerCurrentTime() / this.getPlayerDuration()) *
              100
            ).toFixed(2)}%`,
            pause_count: this.pauseCount,
            last_pause: this.lastPause,
            tags: undefined,
            plan: undefined,
            start_time: this.lastStart,
            end_time: this.getPlayerDuration()
          };
    this._amps.setAmplitudeEvents(events.event_33, payload);
  }

  onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    this.onError(event, "error");
  }

  onPlayerErrorEvent(errorEvent) {
    // Extract the shaka.util.Error object from the event.
    this.onError(errorEvent.detail, "player");
  }

  onUIErrorEvent(errorEvent) {
    // Extract the shaka.util.Error object from the event.
    this.onError(errorEvent.detail, "UI");
  }

  onError(error, errorType) {
    this._amps.setAmplitudeEvents(events.event_34, {
      error: "video can't be played right now",
      error_type: errorType,
      product_id: this.detailVideo.productId,
      title: this.videoURL.name,
      author: this.videoURL.author_name,
      length: this.getPlayerDuration(),
      error_at: this.getPlayerCurrentTime()
    });
  }

  ngOnDestroy() {
    if (document.getElementById("player-shaka")) {
      document.getElementById("player-shaka").remove();
    }
    if (document.getElementById("muxScript")) {
      document.getElementById("muxScript").remove();
    }

    clearInterval(this.watermarkInterval);
  }

  createPlayerScript() {
    return new Promise(resolve => {
      const muxScript = this.doc.createElement("script");
      muxScript.id = "mux-player";
      muxScript.src =
        "https://github.com/videojs/mux.js/releases/download/v5.0.0/mux.js";
      document.getElementById("body").append(muxScript);

      const playerShakaScript = this.doc.createElement("script");
      playerShakaScript.id = "player-shaka";
      playerShakaScript.src = "../../../assets/lib/shaka-player.ui.js";
      document.getElementById("body").append(playerShakaScript);
      resolve();
    });
  }

  verifyUserBrowser() {
    const localWindow: any = window;
    const isIE = !!localWindow.documentMode;

    const isChrome = !!localWindow.chrome && !!localWindow.chrome.webstore;
    const isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;
    const isSafari = navigator.userAgent.toLowerCase().indexOf("safari") !== -1;
    const isEdge = !isIE && !!localWindow.StyleMedia;
    const isOpera =
      !!localWindow.opr ||
      !!localWindow.opera ||
      navigator.userAgent.indexOf(" OPR/") >= 0;

    return isChrome || isFirefox || isSafari || isEdge || isOpera;
  }

  verifyDomStyleChanges() {
    /*
      1. The condition which you are adding must return 'false' if its true
      2. You must return 'true' in null-check.
    */

    const myid = document.getElementById("myid");

    const checks = {
      nullUndefCheck: {
        undefined: myid === undefined,
        null: myid === null
      },
      styleCheck: {
        position: myid ? myid.style["position"] !== "absolute" : true,
        fontWeight: myid ? myid.style["font-weight"] !== "normal" : true,
        fontSize: myid ? myid.style["font-size"] !== "16px" : true,
        color: myid ? myid.style["color"] !== "white" : true,
        opacity: myid ? myid.style["opacity"] !== "0.8" : true,
        display: myid ? myid.style["display"] !== "block" : true
      },
      miscellaneousCheck: {
        styleLength: myid ? myid.style.length !== 8 : true,
        classList: myid ? myid.classList[0] !== undefined : true,
        childLength: myid ? myid.children.length !== 0 : true
      },
      innerTextCheck: myid
        ? myid.innerText !==
          this.detailUser.userEmail + " " + this.detailUser.userMobile
        : true
    };

    const result =
      // null-undeifned check
      checks.nullUndefCheck.undefined ||
      checks.nullUndefCheck.null ||
      // text check
      checks.innerTextCheck ||
      // miscellaneous check
      checks.miscellaneousCheck.styleLength ||
      checks.miscellaneousCheck.classList ||
      checks.miscellaneousCheck.childLength ||
      // styling check
      checks.styleCheck.position ||
      checks.styleCheck.fontWeight ||
      checks.styleCheck.fontSize ||
      checks.styleCheck.color ||
      checks.styleCheck.opacity ||
      checks.styleCheck.display;

    return result;
  }

  getPlayerDuration() {
    return window["video"].duration;
  }

  getPlayerCurrentTime() {
    return window["video"].currentTime;
  }
}
