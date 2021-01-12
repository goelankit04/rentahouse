import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ChangeCurrentPasswordComponent } from "./change-current-password/change-current-password.component";
import { WalletComponent } from "../user-wallet/wallet/wallet.component";
import { OrderComponent } from "../user-order/order/order.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: ":slug/:tabIndex",
        component: UserProfileComponent,
      },
      {
        path: "change/password/:slug",
        component: ChangeCurrentPasswordComponent,
      },
      {
        path: "wallet/:slug",
        component: WalletComponent,
      },
      {
        path: "order/:slug",
        component: OrderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
