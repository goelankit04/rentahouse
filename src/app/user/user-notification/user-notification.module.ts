import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent }      from './notification/notification.component';
import { UserNotificationRoutingModule }  from './user-notification-routing.module';
import { AuthService } from '../../auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../../auth/token-interceptor.service';
import { NotificationService } from './notification.service';

@NgModule({
  imports: [
    CommonModule,
    UserNotificationRoutingModule
  ],
  declarations: [
    NotificationComponent
  ],
  providers:[
    NotificationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  exports: [
    NotificationComponent,
  ]
})
export class UserNotificationModule {
  
}
