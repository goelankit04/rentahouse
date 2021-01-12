import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

declare var SVPDynamicPlayer: any;
declare var VappController: any;

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html'
})
export class LiveStreamComponent implements OnInit, AfterViewInit {
  @HostBinding('class') LiveStreamComponentClass = 'app-live-stream';

  videoId = '';
  heading = '';
  categoryId = 1;
  chat: boolean;

  productToSeach = 696;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._authService.getUserProduct({
      categoryId: this.categoryId,
      productType: 6,
      limit: 0,
      offset: 0
    }).subscribe(
      (res: any) => {
        const currentProduct = res.data.products.filter((product) => (product.product_id === this.productToSeach))[0];
        this.heading = currentProduct ? currentProduct.name : null;
        this.videoId = currentProduct ? currentProduct.video_url ? currentProduct.video_url[0].video_url : null : null;
        this.chat = currentProduct ? currentProduct.video_url ? currentProduct.video_url[0].is_chat_enabled : false : false;
        this.playerSetup();
      },
      (error: any) => {
        this.videoId = null;
        // console.log(error);
      }
    );
  }

  playerSetup() {
    if (this.videoId) {
      setTimeout(() => {

        if (this.chat) {
          const options2 = new VappController({
            use_div: `dplayer_flash_${this.videoId}`,
            player_width: '720',
            player_height: '800'
          }, {
            clip_id: '2207789',
            player_id: '11ADAEB3I5HAF4G',
            playlist_id: '618',
            transparent: '1',
            uk: '5047a681bc240f9a3de7a4a6aa0ad863',
            live_id: `${this.videoId}`,
            sel_playlist: '',
            sel_multiplaylist: '',
            use_html5: 'true',
            layout: 'default',
            theme: 'light',
            is_responsive: '1',
            is_inversed: '',
            is_vertical: '',
            one_thumb_per_row: '',
            thumbs_size: 'medium',
            disable_hash: '',
            widget_height_behavior: '0',
            hide_playlist: '1',
            hide_live_chat: '',
            hide_description: '1',
            playlist_position: '',
            chat_position: '',
            description_position: ''
          });
        } else {
          const options = {
            clip_id: `${this.videoId}`,
            transparent: 'true',
            pause: '1',
            repeat: '',
            bg_color: '#ffffff',
            fs_mode: '2',
            no_controls: '',
            start_img: '0',
            start_volume: '100',
            close_button: '',
            brand_new_window: '1',
            auto_hide: '1',
            stretch_video: '1',
            player_align: 'NONE',
            offset_x: '0',
            offset_y: '0',
            player_color_ratio: 0.6,
            skinAlpha: '50',
            colorBase: '#000000',
            colorIcon: '#ffffff',
            colorHighlight: '#5cbbf5',
            direct: 'false',
            is_responsive: 'true',
            viewers_limit: 0,
            cc_position: 'bottom',
            cc_positionOffset: 70,
            cc_multiplier: 0.03,
            cc_textColor: '#ffffff',
            cc_textOutlineColor: '#ffffff',
            cc_bkgColor: '#000000',
            cc_bkgAlpha: 0.1,
            aspect_ratio: '16:9'
          };
          const svp_player = new SVPDynamicPlayer(`dplayer_flash_${this.videoId}`, '', '100%', '100%', {
            use_div: `dplayer_flash_${this.videoId}`,
            skin: '3'
          }, options);
          svp_player.execute();
        }
      }, 1000);
    }
  }
}
