import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../../../../auth/auth.service';
import { BreadCrumbService } from '../../../../auth/breadcrumb.service';
import { FlipBookUrlComponent } from '../../dr-functionality/flip-book-url/flip-book-url.component';
import { DreamroomDataService } from '../../dreamroom-data.service';
import { AmplitudeService } from '../../../../amplitude/amplitude.service';
import { events } from '../../../../amplitude/events';
import { NgxPaginationModule } from 'ngx-pagination';
// import { MenuNavListService } from "src/app/user/user-container/menu-nav-list.service";
@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html'
})
export class EpisodeListComponent implements OnInit {
  @HostBinding('class') episodeListComponentClass = 'app-episode-list';

  episodeReceived = false;
  totalEpisodes: number;
  episodeCount = 10;
  productId: number;
  productType = 1;
  categoryId = 1;
  level_difficulty: number;
  currentPage = 1;
  episodeList: any;
  pageNumber: number;
  pageList = [];
  user_level: any = ['Beginner', 'Intermediate', 'Advance'];
  UpComingLiveRoom = [];
  UpComingClassRoom = [];
  productTypeName: any;
  // menuList: any;
  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private _authService: AuthService,
    private _dreamroomData: DreamroomDataService,
    private dialog: MatDialog,
    public _breadCrumb: BreadCrumbService, // public _menuNavList: MenuNavListService
    private _amps: AmplitudeService
  ) {
    this.routes.params.subscribe(params => {
      if (params.level !== null) {
        this.productId = Number(params.level) + 99;
        this.level_difficulty = Number(params.level);
        this._dreamroomData.setLevel(this.level_difficulty);
      }
    });
  }

  ngOnInit() {
    // this.menuList = this._menuNavList.getMenuNavList();
    if (this.productType == 1) {
      this.productTypeName = 'dreamroom';
    }
    if (this.productType == 13) {
      this.productTypeName = 'star-room';
    }
    if (this.productType == 2) {
      this.productTypeName = 'class-room';
    }
    if (this.productType == 3) {
      this.productTypeName = 'live-room';
    }
    if (this.productType == 6) {
      this.productTypeName = 'camp-room';
    }
    if (this.productType == 4) {
      this.productTypeName = '121-room';
    }

    this._breadCrumb.levelSelectorBreadcrumb(this.level_difficulty);
    this.getDataFromServer();
    // Side-display data
    this.getUpcomingEvent();
  }

  getButtonLink(episodeStatus: any, buttonId: number) {
    if (episodeStatus) {
      switch (buttonId) {
        case 1:
          return 'assets/chess/Dreamroom/episode-list/card/assignment/puzzle_active.svg';
        case 2:
          return 'assets/chess/Dreamroom/episode-list/card/assignment/assin_active.svg';
        case 3:
          return 'assets/chess/Dreamroom/episode-list/card/assignment/example_active.svg';
        case 4:
          return 'assets/chess/Dreamroom/episode-list/card/assignment/flip_book_active.svg';
        case 5:
          return 'assets/chess/Dreamroom/episode-list/card/assignment/report_active.svg';
      }
    } else {
      switch (buttonId) {
        case 1:
          return 'assets/chess/Dreamroom/episode-list/card/assignment/puzzle_gray.svg';
        case 2:
          return 'assets/chess/Dreamroom/episode-list/card/assignment/assin_gray.svg';
        case 3:
          return 'assets/chess/Dreamroom/episode-list/card/assignment/example_gray.svg';
        case 4:
          return 'assets/chess/Dreamroom/episode-list/card/assignment/flip_book_gray.svg';
        case 5:
          return 'assets/chess/Dreamroom/episode-list/card/assignment/report_gray.svg';
      }
    }
  }

  gotoPage(pageNumber: any) {
    this.currentPage = pageNumber;
    this.episodeReceived = false;
    this.getDataFromServer();
  }

  gotoPrevPage(pageNumber: any) {
    if (this.currentPage !== 1) {
      this.episodeList = this._dreamroomData.getEpisodeByPage(
        --this.currentPage
      );
    }
  }

  gotoNextPage(pageNumber: any) {
    if (this.currentPage === pageNumber) {
    } else {
      this.episodeList = this._dreamroomData.getEpisodeByPage(
        ++this.currentPage
      );
    }
  }

  gotoVideoDetail(id: number, upeid: number) {
    if (this.episodeList[this.getIdIndex(upeid)].is_available) {
      // if (this.episodeList[this.getIdIndex(id)].video_url !== null) {
      this._breadCrumb.episodeBreadCrumb(id);

      // this.router.navigate(['/user/dreamroom/dr-functionality/video', this.categoryId, this.productType, this.productId, id]);

      // New Video Page
      this.router.navigateByUrl(
        `/user/${this.productTypeName}/video-content/${this.categoryId}/${this.productType}/${this.productId}/${id}/0`
      );
      // }
    }
  }

  getPageListPagination() {
    this.pageList = [];
    this.pageNumber = Math.ceil(this.totalEpisodes / this.episodeCount);

    for (let i = 1; i <= this.totalEpisodes; i++) {
      this.pageList.push(i);
    }
  }

  openFlipBook(flipbook_url: string, episode_id: number, upeid: number) {
    if (this.episodeList[this.getIdIndex(upeid)].is_available) {
      if (flipbook_url !== '' && flipbook_url !== null) {
        const dialogRef = this.dialog.open(FlipBookUrlComponent, {
          width: '90%',
          height: '90%',
          autoFocus: false,
          data: {
            id: flipbook_url
          }
        });
      }
      this._amps.setAmplitudeEvents(events.event_15, {
        episode_id: episode_id,
        product_id: this.productId
      });
    }
  }

  openPuzzle(level: number, episode_id: number, upeid: number) {
    // console.log(level, "levels")
    if (this.episodeList[this.getIdIndex(upeid)].is_available) {
      if (this.episodeList[this.getIdIndex(upeid)].is_puzzle_ready) {
        this._breadCrumb.puzzleBreadCrumb(level);
        this.router.navigateByUrl(
          `/user/dreamroom/dr-functionality/puzzle/${this.productId}/${level}/${episode_id}`
        );
      }
    }
    this._amps.setAmplitudeEvents(events.event_14, {
      episode_id: episode_id,
      product_id: this.productId
    });
  }

  openExample(level: number, episode_id: number, upeid: number) {
    // console.log(level, "level")

    if (this.episodeList[this.getIdIndex(upeid)].is_available) {
      if (this.episodeList[this.getIdIndex(upeid)].is_example_ready) {
        this._breadCrumb.exampleBreadCrumb(level);
        this.router.navigateByUrl(
          `/user/dreamroom/dr-functionality/example/${this.productId}/${level}/${episode_id}`
        );
      }
    }
    this._amps.setAmplitudeEvents(events.event_13, {
      episode_id: episode_id,
      product_id: this.productId
    });
  }

  getDataFromServer() {
    this._authService
      .getUserDreamRoomEpisodeList({
        categoryId: this.categoryId,
        productType: this.productType,
        productId: this.productId,
        limit: this.episodeCount,
        offset: this.episodeCount * (this.currentPage - 1)
      })
      .subscribe(
        (res: any) => {
          const sampleArray = res.data.episodes;
          this.totalEpisodes = res.data.count;
          this.getPageListPagination();
          // console.log(this.totalEpisodes,"total episode")
          for (const data of sampleArray) {
            if (data.thumbnail_url == null) {
              data.thumbnail_url =
                'assets/chess/Dreamroom/episode-list/card/thumbnail.png';
            }
          }
          this.episodeList = sampleArray;
          this.episodeReceived = true;
        },
        (error: any) => {
          // console.log(error);
        }
      );
  }

  getUpcomingEvent() {
    this._authService.getUpcomingUserDashboard().subscribe((res: any) => {
      this.UpComingClassRoom = res.data.productList[0].products;
      this.UpComingLiveRoom = res.data.productList[1].products;
    });
  }

  openDashboard() {
    this._breadCrumb.levelSelectorBreadcrumb(0);
    this._breadCrumb.episodeBreadCrumb(0);
    this._breadCrumb.puzzleBreadCrumb(0);
    this._breadCrumb.exampleBreadCrumb(0);
    this.router.navigateByUrl(
      `/user/dashboard/${localStorage.getItem('first_name')}`
    );
  }

  getIdIndex(class_id: number) {
    for (let i = 0; i < this.episodeList.length; i++) {
      if (this.episodeList[i].id === class_id) {
        return i;
      }
    }
  }
}
