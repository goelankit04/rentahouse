import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WalletComponent } from "./wallet/wallet.component";

const routes: Routes = [
  {
    path: ":slug",
    component: WalletComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserWalletRoutingModule {}
