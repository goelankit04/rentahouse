import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-pop-blocker-message',
  templateUrl: './pop-blocker-message.component.html',
  styleUrls: ['./pop-blocker-message.component.scss']
})
export class PopBlockerMessageComponent implements OnInit {
  @HostBinding('class') popBlockerMessageComponentClass = 'app-pop-blocker-message';

  constructor() { }

  ngOnInit() {
  }

}
