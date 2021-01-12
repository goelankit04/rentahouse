import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AppCommonModule } from '../app-common/app-common.module';
import { RegisterComponent } from './register/register.component';
import { DOMEvents } from './dom-events';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AppBootstrapModule } from '../app-bootstrap.module';
import { IpService } from './ip.service';
import { ElementaryComponentModule } from '../app-common/elementary-component/elementary-component.module';
import { ImpersonateComponent } from './impersonate/impersonate.component';

@NgModule({
  imports: [AppCommonModule, AppBootstrapModule, ElementaryComponentModule],
  declarations: [
    LoginComponent,
    ImpersonateComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ImpersonateComponent,
  ],
  providers: [AuthService, AuthGuard, IpService, DOMEvents],
})
export class AuthModule {}
