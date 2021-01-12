import {PlayerConfig, HttpResponseType, AppleFairplayDRMConfig, SourceConfig, DRMConfig, WidevineModularDRMConfig, HttpHeaders} from 'bitmovin-player';

const drm: DRMConfig = {
  widevine: {
    LA_URL: 'https://widevine-dash.ezdrm.com/proxy?pX=5197BC'
  } as WidevineModularDRMConfig,
  fairplay: {
    LA_URL: `https://fps.ezdrm.com/api/licenses/12b27509-7e12-4b8e-97e7-7888b8a950f2`,
    certificateURL: `https://d1wh57ge0m36p3.cloudfront.net/fairplay.cer`,
    prepareContentId: function (contentId) {
      const uri = contentId;
      let uriParts = uri.split('://', 1);
      const protocol = uriParts[0].slice(-3);
      uriParts = uri.split(';', 2);
      contentId = uriParts.length > 1 ? uriParts[1] : '';
      uriParts = contentId.split('?', 2);
      contentId = uriParts.length > 1 ? uriParts[0] : contentId;
      return protocol.toLowerCase() === 'skd' ? contentId : '';
    },
    prepareLicenseAsync: function (ckc) {
      return new Promise(function (resolve, reject) {
        const reader: any = new FileReader();
        reader.addEventListener('loadend', function () {
          resolve(new Uint8Array(reader.result));
        });
        reader.addEventListener('error', function () {
          reject(reader.error);
        });
        reader.readAsArrayBuffer(ckc);
      });
    },
    prepareMessage: function (event) {
      return new Blob([event.message], {
        type: 'application/octet-binary'
      });
    },
    // headers: {
    //   name: 'content-type',
    //   value: 'application/octet-stream'
    // } as HttpHeaders,
    useUint16InitData: true,
    licenseResponseType: HttpResponseType.BLOB
  } as AppleFairplayDRMConfig
};

export const PlayerSourceConfig: any = {
  dash: '',
  hls: '',
  poster: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg',
  drm: drm
};

export const PlayerConfiguration: PlayerConfig = {
  key: '75339520-6b8d-4f3b-8899-3d2f044240d2',
  ui: false,
  logs: {
    bitmovin: false
  },
  adaptation: {
    desktop: {
      preload: false
    },
    mobile: {
      preload: false
    }
  }
};
