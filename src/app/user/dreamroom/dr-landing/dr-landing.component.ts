import { DreamroomDataService } from './../dreamroom-data.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { VideoPopupComponent } from '../../../chess/about-dreamroom/video-popup/video-popup.component';

@Component({
  selector: 'app-dr-landing',
  templateUrl: './dr-landing.component.html'
})
export class DrLandingComponent implements OnInit {
  @HostBinding('class') DrLandingComponentClass = 'app-dr-landing';

  url = 'https://fast.wistia.net/embed/iframe/ynf6iaxhax?seo=false';
  about_heading = 'About R.B. Ramesh';
  activeState = 0;
  activePage = 'Episodes';

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private _dreamroom: DreamroomDataService,
    private _routes: ActivatedRoute
  ) { }

  courseFeatures = [
    {
      icon: 'assets/chess/Dreamroom/Landing/features/40+_hours.svg',
      text: '40+ hours of content'
    },
    {
      icon: 'assets/chess/Dreamroom/Landing/features/80_chapters.svg',
      text: '160+ Chapters'
    },
    {
      icon: 'assets/chess/Dreamroom/Landing/features/ebook.svg',
      text: 'Flip Book'
    },
    // {
    //   icon: 'assets/chess/Dreamroom/Landing/features/assignment.svg',
    //   text: 'Chess assignment'
    // },
    {
      icon: 'assets/chess/Dreamroom/Landing/features/puzzles.svg',
      text: 'Chess Puzzle'
    },
    {
      icon: 'assets/chess/Dreamroom/Landing/features/certificate.svg',
      text: 'Certificate'
    }
  ];

  tabMenu = [
    {
      id: 1,
      text: 'Episodes',
      sideIcon: '',
      url: `/user/dreamroom/dr-landing/episode-list/${localStorage.getItem('first_name')}/${this._dreamroom.getLevel()}`
    },
    {
      id: 2,
      text: `About nurtr Chess Dream Room`,
      sideIcon: '',
      url: `/user/dreamroom/dr-landing/course-detail/${localStorage.getItem('first_name')}`
    },
    {
      id: 3,
      text: 'Study Material',
      sideIcon: '',
      url: `/user/dreamroom/dr-landing/study-material/${localStorage.getItem('first_name')}`
    }
  ];

  currentTab = new FormControl(this.tabMenu[this.activeState].text);

  @HostListener('window:resize', [])
  onWindowResize() {
    if (this.mobileVersion()) {
      document.getElementById('mat-div').style.minHeight = 'fit-content';
    }
  }

  ngOnInit() {
    this.router.navigateByUrl(
      `/user/dreamroom/dr-landing/episode-list/${localStorage.getItem('first_name')}/${this._dreamroom.getLevel()}`
    );
  }

  mobileVersion() {
    return window.innerWidth < 950;
  }

  gotoTab(id: number) {
    const item: Array<any> = this.tabMenu.filter(item1 => item1.id === id);
    this.activeState = item[0].id - 1;
    this.activePage = this.tabMenu[id - 1].text;
    this.router.navigateByUrl(item[0]['url']);
  }

  activeRoutes(e: any) {
    // console.log("i am in dr landing routes", e.router.url);
  }

  openVideo() {
    const config = new MatDialogConfig();

    config.height = window.screen.width < 630 ? '50%' : '500px';
    config.width = '700px';

    const dialogRef = this.dialog.open(VideoPopupComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      // console.log("The dialog was closed");
    });
  }
}
