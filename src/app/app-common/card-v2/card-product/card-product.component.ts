import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

declare let Wistia: any;

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html'
})
export class CardProductComponent implements OnInit {
  @HostBinding('class') CardProductComponentClass = 'app-card-product';

  @Output() productResponse = new EventEmitter<any>();

  @Input() data: any;
  @Input() filter: boolean;
  @Input() show: boolean;
  @Input() videoUrl: string;
  @Input() previewOnHover: boolean;

  video: any;

  visiblevideo = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (this.previewOnHover) {
      setTimeout(() => {
        this.video = Wistia.api(this.videoUrl.replace('wistia_async_', ''));
        this.video.mute();
      }, 1000);
    }
  }

  goToProductDetail(data: any) {
    this.router.navigateByUrl(`/v2/detail/${data.product_id}/${data.product_type}`);
  }


  getTypeImageLink() {
    if (this.data.type === null) {
      return 'assets/images/course_type/live_interaction.svg';
    }
    switch (this.data.type.toLowerCase()) {
      case 'LIVE & RECORDED COURSE'.toLowerCase(): {
        return 'assets/images/course_type/live_&_recorded.svg';
      }
      case 'LIVE COURSE'.toLowerCase(): {
        return 'assets/images/course_type/live_interaction.svg';
      }
      case 'RECORDED COURSE'.toLowerCase(): {
        return 'assets/images/course_type/recorded_course.svg';
      }
      default: {
        return 'assets/images/course_type/live_interaction.svg';
      }
    }
  }

  joinNow() {
    this.productResponse.emit({
      signin: true,
      productData: this.data
    });
  }

  play() {
    this.video.play();
  }

  pause() {
    this.video.pause();
  }
}
