import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-video-popup',
  templateUrl: './video-popup.component.html',
  // styleUrls: ['./video-popup.component.scss']
})
export class VideoPopupComponent implements OnInit {
  @HostBinding('class') videoPopupComponentClass = 'app-video-popup';
  
  isLoading: boolean = true;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }

  returnState(){
    // console.log(document.readyState + ' ' + (document.readyState === 'complete'));
    return document.readyState === 'complete' ? false : true;
  }

}
