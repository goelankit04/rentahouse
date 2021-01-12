import { AppCommonModule } from "./../../../../app-common/app-common.module";
import { EpisodeListComponent } from "./episode-list.component";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { EpisodeListRoutingModule } from "./episode-list-routing.module";
import { AppMaterialModule } from "../../../../app-material-module";
import { AppBootstrapModule } from "../../../../app-bootstrap.module";
import { FlipBookUrlComponent } from "../../dr-functionality/flip-book-url/flip-book-url.component";
import { FlipBookUrlService } from "../../dr-functionality/flip-book-url/flip-book-url.service";
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    AppBootstrapModule,
    AppCommonModule,
    EpisodeListRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    // FlipBookUrlComponent,
    EpisodeListComponent,
  ],
  // schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [
    // FlipBookUrlComponent
  ],
  exports: [],
  providers: [FlipBookUrlService],
})
export class EpisodeListModule { }
