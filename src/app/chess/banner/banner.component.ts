import {
  Component,
  HostBinding,
  HostListener,
  AfterViewInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent implements AfterViewInit {
  @HostBinding('class') banner2ComponentClass = 'app-banner';
  playVideo: boolean;
  @Input() url;
  changes: any;

  ngAfterViewInit() {
    // const el = document.getElementById('webBannerVideo');
    // const videoEl = `
    //   <video id="bgvid" playsinline autoplay muted loop>
    //     <source src="https://assets.nurtr.com/chess/background-video.mp4" type="video/mp4" />
    //   </video>
    // `;
    // el.innerHTML = videoEl;
  }

  mobileView() {
    return window.innerWidth <= 800;
  }

  getWindowWidth() {
    return window.innerWidth > 800;
  }
}
