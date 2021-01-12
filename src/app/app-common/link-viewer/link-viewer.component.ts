import { Component, OnInit, HostBinding, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-link-viewer',
  templateUrl: './link-viewer.component.html'
})
export class LinkViewerComponent implements OnInit {
  @HostBinding('class') LinkViewerComponentClass = 'app-link-viewer';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }
}
