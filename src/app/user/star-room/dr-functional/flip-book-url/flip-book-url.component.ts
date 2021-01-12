import { Component, OnInit, Inject, HostBinding } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlipBookUrlService } from './flip-book-url.service';
import { SafePipe } from '../../../../common/safe-pipe';

@Component({
  selector: 'app-flip-book-url',
  templateUrl: './flip-book-url.component.html'
})
export class FlipBookUrlComponent implements OnInit {
  @HostBinding('class') FlipBookUrlComponentClass = 'app-flip-book-url';

  constructor(
    // private _flipBookUrlService: FlipBookUrlService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  flipBookUrl: string;

  ngOnInit() {
    this.flipBookUrl = this.data.id;
    // console.log(this.flipBookUrl);
  }
}
