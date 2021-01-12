import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material-module';
import { ChessRoutingModule } from './chess-routing.module';
import { ChessComponent } from './chess.component';
import { PlatformFeatureComponent } from './platform-feature/platform-feature.component';
import { ChessFeaturesComponent } from './chess-features/chess-features.component';
import { AboutRameshComponent } from './about-ramesh/about-ramesh.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './banner/features/features.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { DreamroomDetailComponent } from './dreamroom-detail/dreamroom-detail.component';
import { ContentFeatureComponent } from './dreamroom-detail/content-feature/content-feature.component';
import { WebDetailComponent } from './dreamroom-detail/web-detail/web-detail.component';
import { MobileDetailComponent } from './dreamroom-detail/mobile-detail/mobile-detail.component';
import { AboutDreamroomComponent } from './about-dreamroom/about-dreamroom.component';
import { VideoPopupComponent } from './about-dreamroom/video-popup/video-popup.component';
import { TestimonialMobileComponent } from './testimonial/testimonial-mobile/testimonial-mobile.component';
import { TestimonialDesktopComponent } from './testimonial/testimonial-desktop/testimonial-desktop.component';
import { AppBootstrapModule } from '../app-bootstrap.module';
import { PreEnrollmentComponent } from './pre-enrollment/pre-enrollment.component';
import { BenefitsHighlightComponent } from './benefits-highlight/benefits-highlight.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PaymentModule } from '../payment/payment.module';
import { VideoPlayerModule } from '../video-player/video-player.module';

@NgModule({
  declarations: [
    ChessComponent,
    AboutRameshComponent,
    FeaturesComponent,
    ChessFeaturesComponent,
    PlatformFeatureComponent,
    ContactFormComponent,
    TestimonialComponent,
    BannerComponent,
    DreamroomDetailComponent,
    ContentFeatureComponent,
    WebDetailComponent,
    MobileDetailComponent,
    AboutDreamroomComponent,
    VideoPopupComponent,
    TestimonialMobileComponent,
    TestimonialDesktopComponent,
    PreEnrollmentComponent,
    BenefitsHighlightComponent,
    ProductTypeComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AppBootstrapModule,
    AppCommonModule,
    ChessRoutingModule,
    PaymentModule,
    // VideoPlayerModule
  ],
  entryComponents: [VideoPopupComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ChessModule {}
