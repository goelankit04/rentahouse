import { FlipBookUrlComponent } from "./dr-functional/flip-book-url/flip-book-url.component";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppMaterialModule } from "../../app-material-module";
import { AppBootstrapModule } from "../../app-bootstrap.module";
import { Routes, RouterModule } from "@angular/router";
import { StarroomRoutingModule } from "./star-room-routing.module";
import { LandingComponent } from "./landing/landing.component";
// import { DrFunctionalityComponent                    } from './dr-functionality/dr-functionality.component'            ;
import { AppCommonModule } from "../../app-common/app-common.module";
import { DrLevelSelectorComponent } from "./dr-level-selector/dr-level-selector.component";
import { StarroomComponent } from "./star-room.component";

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    AppMaterialModule,
    AppBootstrapModule,
    StarroomRoutingModule,
  ],
  declarations: [
    StarroomComponent,
    DrLevelSelectorComponent,
    FlipBookUrlComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [FlipBookUrlComponent],
})
export class StarroomModule {}
