import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { PopupService } from '../popup.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AmplitudeService } from '../../amplitude/amplitude.service';
import { events } from '../../amplitude/events';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class PopupComponent implements OnInit {
  @HostBinding('class') PopupComponentClass = 'app-popup';

  @Input()
  set popStatus(value: any) {
    this.popup = value;
  }

  @Output() popupOutput = new EventEmitter<any>();
  @Output() streamStatus = new EventEmitter<any>();

  public popup = false;
  public closePopupPermanently = false;

  is_user_allowed = false;
  popUpImageLink: any;
  redirectLink: any;
  obj: any;

  constructor(
    private _router: Router,
    private _popupService: PopupService,
    private _authService: AuthService,
    private sanitizer: DomSanitizer,
    private _amps: AmplitudeService
  ) {
    _router.events.subscribe((res) => {
      if (_popupService.isResponseInitialized()) {
        this.popup = !this.closePopupPermanently
          ? _popupService.isRouteAllowed()
          : false;
        this.popUpImageLink = this.sanitizer.bypassSecurityTrustHtml(
          this._popupService.getData()
        );
      }
    });
  }

  ngOnInit() {
    this._authService.getPopUpData().subscribe((res: any) => {
      this._popupService.setData(res);
      this.popup = this._popupService.isRouteAllowed();
      this.redirectLink = this._popupService.getTargetURL();
      this.popUpImageLink = this.sanitizer.bypassSecurityTrustHtml(
        this._popupService.getData()
      );

      this.obj = res.data.promotionalPopup.promotionalPopup[0];

      this.streamStatus.emit(this._popupService.getStreamingLive());
    });
  }

  performPopUpIntent() {
    this._amps.setAmplitudeEvents(events.event_24, {
      product_name: this.obj.product_name ? this.obj.product_name : null,
      product_id: this.obj.product_id ? this.obj.product_id : null,
      product_type: this.obj.product_type ? this.obj.product_type : null,
      catergory: this.obj.category_id ? this.obj.category_id : null,
      author: this.obj.author ? this.obj.author : null,
      popup_id: this.obj.id ? this.obj.id : null,
      target_url: this.obj.target_url ? this.obj.target_url : null,
    });

    if (this.redirectLink && this._popupService.isExternalLink()) {
      window.open(this.redirectLink, '_blank');
    } else if (this.redirectLink && !this._popupService.isExternalLink()) {
      this._router.navigateByUrl(this.redirectLink);
    } else {
      // do nothing
    }

    if (!this._popupService.getStayOnClickStatus()) {
      this.closePopup();
    }
  }

  closePopup() {
    this._amps.setAmplitudeEvents(events.event_25, {
      product_name: this.obj.product_name ? this.obj.product_name : null,
      product_id: this.obj.product_id ? this.obj.product_id : null,
      product_type: this.obj.product_type ? this.obj.product_type : null,
      catergory: this.obj.category_id ? this.obj.category_id : null,
      author: this.obj.author ? this.obj.author : null,
      popup_id: this.obj.id ? this.obj.id : null,
      target_url: this.obj.target_url ? this.obj.target_url : null,
      source: 'promotional-popup',
    });

    this.closePopupPermanently = true;
    this.popup = false;
    this.popupOutputEvent();
  }

  popupOutputEvent() {
    this.popupOutput.emit(false);
  }
}
