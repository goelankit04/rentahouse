import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderComponent } from "./order/order.component";
const routes: Routes = [
  {
    path: ":slug",
    component: OrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserOrderRoutingModule {}
