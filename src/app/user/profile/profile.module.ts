import { AppCommonModule } from "../../app-common/app-common.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileRoutingModule } from "./profile-routing.module";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { AppMaterialModule } from "../../app-material-module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppBootstrapModule } from "../../app-bootstrap.module";
import { UserDetailsComponent } from "./user-profile/user-details/user-details.component";
import { AcademicDetailsComponent } from "./user-profile/academic-details/academic-details.component";
import { ChangeCurrentPasswordComponent } from "./change-current-password/change-current-password.component";
import { UserWalletModule } from "../user-wallet/user-wallet.module";
import { UserOrderModule } from "../user-order/user-order.module";

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AppBootstrapModule,
    ProfileRoutingModule,
    UserWalletModule,
    UserOrderModule,
  ],
  declarations: [
    UserProfileComponent,
    UserDetailsComponent,
    AcademicDetailsComponent,
    ChangeCurrentPasswordComponent,
  ],
  entryComponents: [ChangeCurrentPasswordComponent],
  exports: [ChangeCurrentPasswordComponent],
})
export class ProfileModule {}
