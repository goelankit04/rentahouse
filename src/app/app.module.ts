// import { ServiceWorkerModule } from '@angular/service-worker';
// import { PushNotificationService } from './auth/push.notification.service';
import { CountryCodeService } from './app-common/country_code.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material-module';
import { AppBootstrapModule } from './app-bootstrap.module';
import { FooterModule } from './footer/footer.module';
import { AppCommonModule } from './app-common/app-common.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthModule } from './auth/auth.module';
import { PreloaderComponent } from './pre-loader/pre-loader.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterService } from './register-form/register.service';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './user/user.service';
import { MenuNavListService } from './user/user-container/menu-nav-list.service';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { TokenInterceptorService } from './auth/token-interceptor.service';
import { DatePipe } from '@angular/common';
import { BreadCrumbService } from './auth/breadcrumb.service';
import { IpService } from './auth/ip.service';
import { EmailVerificationComponent } from './auth/email-verification/email-verification.component';
import { SocialLoginModule } from './social-login/social-login.module';
import { CurrentPasswordsComponent } from './current-passwords/current-passwords.component';
import { VideoDemoComponent } from './video-demo/video-demo.component';
import { TwitterCallbackComponent } from './auth/twitter-callback/twitter-callback.component';
import { PopupModule } from './promotional-popup/popup.module';
import { PuzzleOfTheDayComponent } from './app-common/puzzle-of-the-day/puzzle-of-the-day.component';
import { VideoPlayerModule } from './video-player/video-player.module';
import { RecommendationComponent } from './app-common/recommendation/recommendation.component';
// import { NotificationComponent } from './notification/notification.component'                      ;
import { FileUploadModule } from 'ng2-file-upload';
import { TypeformResponseComponent } from './typeform-response/typeform-response.component';
import { TypeformRoutingModule } from './typeform-routing.module';
import { SeoService } from './seo.service';
import { BarRatingModule } from 'ngx-bar-rating';
import { ProductHighlightModule } from './product-highlight/product-highlight.module';
import { routerDeactivateGuard } from './router-deactivate.guard';
import { NgxPaginationModule } from 'ngx-pagination';

const socialLoginProvider = {
  google: {
    clientId:
      '929494147838-8pi7qs4at962ectivlejlk7b3t8pab34.apps.googleusercontent.com',
    // clientId: '62500777180-6se2ja5el2jmc2q4890hmri9f8703ua0.apps.googleusercontent.com' // temp google ID
  },
  linkedin: {
    clientId: '',
  },
  facebook: {
    // clientId: '271244443237777',    // temp FB id
    clientId: '528880454240985',
    apiVersion: 'v3.1',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegisterFormComponent,
    ResetPasswordComponent,
    EmailVerificationComponent,
    PreloaderComponent,
    VideoDemoComponent,
    CurrentPasswordsComponent,
    TwitterCallbackComponent,
    PuzzleOfTheDayComponent,
    RecommendationComponent,
    TypeformResponseComponent,
    // NotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    AppMaterialModule,
    AppBootstrapModule,
    BarRatingModule,
    AppRoutingModule,
    // TypeformRoutingModule,
    AppCommonModule,
    ToasterModule.forRoot(),
    FooterModule,
    AuthModule,
    FormsModule,
    SocialLoginModule,
    PopupModule,
    ProductHighlightModule,
    NgxPaginationModule,
  ],
  // ServiceWorkerModule.register('/ngsw-worker.js')],
  providers: [
    DatePipe,
    AuthGuard,
    SeoService,
    RegisterService,
    UserService,
    // PushNotificationService,
    BreadCrumbService,
    CountryCodeService,
    MenuNavListService,
    routerDeactivateGuard,
    IpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CurrentPasswordsComponent,
    PuzzleOfTheDayComponent,
    RecommendationComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

SocialLoginModule.loadProvidersScripts(socialLoginProvider);
