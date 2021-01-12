import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material-module';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { AppCommonService } from './app-common.service';
import { EllipsisPipe } from '../common/ellipsis-pipe';
import { SafePipe } from '../common/safe-pipe';
import { CardComponent } from './card/card.component';
import { LinkViewerComponent } from './link-viewer/link-viewer.component';
import { MobileOtpVerificationComponent } from './mobile-otp-verification/mobile-otp-verification.component';
import { UserActivityService } from './user-activity.service';
import { ElementaryComponentModule } from './elementary-component/elementary-component.module';
import { ShowInterestComponent } from './show-interest/show-interest.component';
import { PopBlockerMessageComponent } from './pop-blocker-message/pop-blocker-message.component';
import { UpcomingEventsSectionComponent } from './upcoming-events-section/upcoming-events-section.component';
import { NurtrUspComponent } from './nurtr-usp/nurtr-usp.component';
import { CardV2Module } from './card-v2/card-v2.module';
import { EssentialsV2Module } from './essentials-v2/essentials-v2.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppMaterialModule,
    ElementaryComponentModule,
    CardV2Module,
    EssentialsV2Module
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppMaterialModule,
    PreLoaderComponent,
    EllipsisPipe,
    SafePipe,
    CardComponent,
    LinkViewerComponent,
    MobileOtpVerificationComponent,
    ShowInterestComponent,
    PopBlockerMessageComponent,
    UpcomingEventsSectionComponent,
    NurtrUspComponent,
    EssentialsV2Module
  ],
  providers: [
    AppCommonService,
    UserActivityService
  ],
  declarations: [
    PreLoaderComponent,
    EllipsisPipe,
    SafePipe,
    CardComponent,
    LinkViewerComponent,
    MobileOtpVerificationComponent,
    ShowInterestComponent,
    PopBlockerMessageComponent,
    UpcomingEventsSectionComponent,
    NurtrUspComponent
  ],
  entryComponents: [
    LinkViewerComponent,
    PopBlockerMessageComponent,
    MobileOtpVerificationComponent
  ]
})
export class AppCommonModule { }
