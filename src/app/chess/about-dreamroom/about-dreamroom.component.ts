import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { VideoPopupComponent } from './video-popup/video-popup.component';

@Component({
  selector: 'app-about-dreamroom',
  templateUrl: './about-dreamroom.component.html'
})
export class AboutDreamroomComponent implements OnInit {
  @HostBinding('class') aboutDreamroomComponentClass = 'app-about-dreamroom';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openVideoPopup() {
    const config = new MatDialogConfig();

    config.height = window.screen.width < 630 ? '50%' : '500px';
    config.width = '700px';

    const dialogRef = this.dialog.open(VideoPopupComponent, config);

    dialogRef.afterClosed().subscribe(result => {
    // console.log('The dialog was closed');
    });
  }

}
