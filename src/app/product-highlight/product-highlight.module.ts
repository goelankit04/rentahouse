import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductHighlightRoutingModule } from './product-highlight-routing.module';
import { ProductHighlightComponent } from './product-highlight/product-highlight.component';
import { AppMaterialModule } from '../app-material-module';
import { AppCommonModule } from '../app-common/app-common.module';
import { ProductBannerComponent } from './product-banner/product-banner.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEpisodeComponent } from './course-episode/course-episode.component';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { TopReviewComponent } from './top-review/top-review.component';
import { ProductFaqsComponent } from './product-faqs/product-faqs.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthModule } from '../auth/auth.module';
import { ElementaryComponentModule } from '../app-common/elementary-component/elementary-component.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../auth/token-interceptor.service';
import { ScrollToModule } from 'ng2-scroll-to-el';

@NgModule({
  declarations: [
    ProductHighlightComponent,
    ProductBannerComponent,
    CourseDetailComponent,
    CourseEpisodeComponent,
    StudentFeedbackComponent,
    TopReviewComponent,
    ProductFaqsComponent,
    VerifyEmailComponent,
    RegisterUserComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductHighlightRoutingModule,
    AppMaterialModule,
    ScrollToModule.forRoot(),
    BarRatingModule,
    AppCommonModule,
    AuthModule,
    ElementaryComponentModule,
  ],
  entryComponents: [VerifyEmailComponent, RegisterUserComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  exports: [
    ProductHighlightComponent,
    VerifyEmailComponent,
    RegisterUserComponent,
  ],
})
export class ProductHighlightModule {}
