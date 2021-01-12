import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-demo',
  templateUrl: './video-demo.component.html'
})
export class VideoDemoComponent implements AfterViewInit {
  @HostBinding('class') videoDemoComponentClass = 'app-video-demo';

  player: any;

  conf = {
    key: '75339520-6b8d-4f3b-8899-3d2f044240d2',
    source: {
      dash: 'https://d1wh57ge0m36p3.cloudfront.net/closer1/stream.mpd',
      hls: 'https://d1wh57ge0m36p3.cloudfront.net/closer1/stream.m3u8',
      progressive: '',
      poster: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg',
      drm: {
        widevine: {
          LA_URL: 'https://widevine-dash.ezdrm.com/proxy?pX=5197BC'
        },
        fairplay: {
          LA_URL:
            'https://fps.ezdrm.com/api/licenses/12b27509-7e12-4b8e-97e7-7888b8a950f2',
          certificateURL:
            'https://s3-ap-southeast-1.amazonaws.com/chess-video/fairplay.cer',
          prepareContentId: function (contentId) {
            let uri = contentId;
            let uriParts = uri.split('://', 1);
            let protocol = uriParts[0].slice(-3);
            uriParts = uri.split(';', 2);
            contentId = uriParts.length > 1 ? uriParts[1] : '';
            uriParts = contentId.split('?', 2);
            contentId = uriParts.length > 1 ? uriParts[0] : contentId;
            return protocol.toLowerCase() == 'skd' ? contentId : '';
          },
          prepareLicenseAsync: function (ckc) {
            return new Promise(function (resolve, reject) {
              let reader: any = new FileReader();
              reader.addEventListener('loadend', function () {
                resolve(new Uint8Array(reader.result));
              });
              reader.addEventListener('error', function () {
                reject(reader.error);
              });
              reader.readAsArrayBuffer(ckc);
            });
          },
          prepareMessage: function (event, session) {
            return new Blob([event.message], {
              type: 'application/octet-binary'
            });
          },
          headers: [
            {
              name: 'content-type',
              value: 'application/octet-stream'
            }
          ],
          useUint16InitData: true,
          licenseResponseType: 'blob'
        }
      }
    },
    adaptation: {
      desktop: {
        preload: false
      },
      mobile: {
        preload: false
      }
    },
    skin: {
      screenLogoImage: 'assets/chess/bobby-fischer.png'
    },
    logs: {
      bitmovin: false
    },
    events: {
      onReady: () => {
        const element = document.getElementById('bmpui-id-201');
        let userInfoElementContainer = this.createUserInfoContainer();
        element.appendChild(userInfoElementContainer);
      }
    }
  };

  userDetail = {
    userEmail: 'jyoti@nurtr.com',
    userMobile: '919717812192'
  };

  videoDetail = {
    categoryId: 1,
    productType: 1,
    productId: 100,
    episodeId: 1
  };

  videoResponse = {
    episode_id: 1,
    product_id: 100,
    name: 'Setting up a chess board',
    short_description: 'In this episode, GM RB Ramesh talks about basics of a chess board and the squares. He explains how squares on chess board are categorised in ranks and files. The episode also covers how a chess board should be set. ',
    progressive: null,
    is_session_live: 0,
    flipbook_url: null,
    duration: '8:28',
    dash: 'https://d1wh57ge0m36p3.cloudfront.net/2018-06-09__13-21-50B2/stream.mpd',
    video_url: null,
    video1_url: null,
    video2_url: null,
    hls: 'https://d1wh57ge0m36p3.cloudfront.net/2018-06-09__13-21-50B2/stream.m3u8',
    poster: 'https://s3.ap-south-1.amazonaws.com/nurtr.com/poster_1.jpg',
    thumbnail_url: 'https://s3.ap-south-1.amazonaws.com/nurtr.com/episodes-thumbnail/b2.png',
    is_puzzle_ready: 1,
    is_example_ready: 1,
    is_assignment_ready: 0,
    is_available: 1
  };

  constructor() {
  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.id = 'video_ui_loader';
      scriptElement.onload = resolve;
      scriptElement.onerror = reject;
      document.body.appendChild(scriptElement);
    });
  }

  createUserInfoContainer() {
    let userInfoElementContainer = document.createElement('div');
    userInfoElementContainer.id = 'user_info_container';
    userInfoElementContainer.style.position = 'absolute';
    userInfoElementContainer.style.top = '15%';
    userInfoElementContainer.style.left = '5%';

    let userInfoElement = document.createElement('div');
    userInfoElement.id = 'user_info_element';
    userInfoElement.style['font-size'] = '1em';

    const elTextNode = document.createTextNode('rahul@nurtr.com');
    userInfoElement.appendChild(elTextNode);
    userInfoElementContainer.appendChild(userInfoElement);

    return userInfoElementContainer;
  }

  async ngAfterViewInit() {
    await this.loadScript(
      'https://bitmovin-a.akamaihd.net/bitmovin-player/stable/7.7/bitmovinplayer.js'
    );

    this.player = window['bitmovin']['player']('player');

    this.player.setup(this.conf).then(
      function (value) {
        var enSubtitle = {
          id: "sub1",
          lang: "en",
          label: "English",
          url: "https://s3.ap-south-1.amazonaws.com/nurtr.com/episode.srt",
          kind: "subtitle"
        };
        this.player.addSubtitle(enSubtitle);

        // this.player.play();
        // Success
        // console.log('Successfully created bitmovin player instance');
      },
      function (reason) {
        // Error!
        // console.log('Error while creating bitmovin player instance');
      }
    );
  }

}
