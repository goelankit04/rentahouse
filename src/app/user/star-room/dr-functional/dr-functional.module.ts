import { DrFunctionalComponent } from "./dr-functional.component";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AppMaterialModule } from "../../../app-material-module";
import { AppBootstrapModule } from "../../../app-bootstrap.module";
import { DrFunctionalRoutingModule } from "./dr-functional-routing.module";
import { VideoDetailsComponent } from "./video-details/video-details.component";
import { AppCommonModule } from "../../../app-common/app-common.module";

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    AppMaterialModule,
    AppBootstrapModule,
    DrFunctionalRoutingModule,
  ],
  declarations: [DrFunctionalComponent, VideoDetailsComponent],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [],
  entryComponents: [],
})
export class DrFunctionalModule {}
