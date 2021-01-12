import { StarroomDataService } from "../star-room-data.service";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import {
  Component,
  OnInit,
  HostBinding,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { VideoPopupComponent } from "../../../chess/about-dreamroom/video-popup/video-popup.component";
import { AuthService } from "../../../auth/auth.service";
import { log } from "util";
@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
})
export class LandingComponent implements OnInit {
  @HostBinding("class") LandingComponentClass = "app-landing";

  url = "https://fast.wistia.net/embed/iframe/ynf6iaxhax?seo=false";
  about_heading = "About R.B. Ramesh";
  activeState = 0;
  activePage = "Episodes";
  product: any;
  level_id: Number;
  message: any;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private _dreamroom: StarroomDataService,
    private _routes: ActivatedRoute,
    private _authService: AuthService
  ) {}

  courseFeatures = [
    {
      icon: "assets/chess/Dreamroom/Landing/features/40+_hours.svg",
      text: "22 hours of content",
    },
    {
      icon: "assets/chess/Dreamroom/Landing/features/80_chapters.svg",
      text: "18 topics",
    },
    {
      icon: "assets/chess/Dreamroom/Landing/features/ebook.svg",
      text: "Study Material",
    },
    {
      icon: "assets/chess/Dreamroom/Landing/features/puzzles.svg",
      text: "Videos",
    },
    {
      icon: "assets/chess/Dreamroom/Landing/features/certificate.svg",
      text: "Certificate",
    },
  ];

  tabMenu = [
    {
      id: 1,
      text: 'Episodes',
      text1: 'Daywise Session',
      sideIcon: '',
      url: `/user/star-room/star-landing/star-episode/${localStorage.getItem('first_name')}/${localStorage.getItem('level_id')}`,
    },
    {
      id: 2,
      text: 'Home Work',
      text1: 'Daywise Session',
      sideIcon: '',
      url: `/user/star-room/star-landing/star-home-work/${localStorage.getItem('first_name')}/${localStorage.getItem('level_id')}`,
    },
    {
      id: 3,
      text: `Course Description`,
      text1: `Educarnival' 18`,
      sideIcon: '',
      url: `/user/star-room/star-landing/study-material/${localStorage.getItem('first_name')}`,
    },
    {
      id: 4,
      text: 'Faculty',
      text1: 'Faculty',
      sideIcon: '',
      url: `/user/star-room/star-landing/course-detail/${localStorage.getItem('first_name')}`,
    },
  ];

  currentTab = new FormControl(this.tabMenu[this.activeState].text);

  @HostListener('window:resize', [])
  onWindowResize() {
    if (this.mobileVersion()) {
      document.getElementById('mat-div').style.minHeight = 'fit-content';
    }
  }

  ngOnInit() {
    this._routes.params.subscribe(params => {
      // console.log(params, "params");
    });

    this.level_id = Number(localStorage.getItem("level_id"));
    const data = {
      productId: this.level_id,
    };

    this._authService.getStarRoomDescription(data).subscribe((res: any) => {
      // console.log(res);
      this.product = res.data.productDetails;
    });

    this.router.navigateByUrl(
      `/user/star-room/star-landing/star-episode/${localStorage.getItem(
        "first_name"
      )}/${this._dreamroom.getLevel()}`
    );
  }

  mobileVersion() {
    return window.innerWidth < 950;
  }

  gotoTab(id: number) {
    const item: Array<any> = this.tabMenu.filter(item1 => item1.id === id);
    this.activeState = item[0].id - 1;
    this.activePage = this.tabMenu[id - 1].text;
    // console.log(this.activePage,"active")
    this.router.navigateByUrl(item[0]["url"]);
  }

  activeRoutes(e: any) {
    // console.log("i am in dr landing routes", e.router.url);
  }

  openVideo() {
    const config = new MatDialogConfig();

    config.height = window.screen.width < 630 ? "50%" : "500px";
    config.width = "700px";

    const dialogRef = this.dialog.open(VideoPopupComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      // console.log("The dialog was closed");
    });
  }
}
