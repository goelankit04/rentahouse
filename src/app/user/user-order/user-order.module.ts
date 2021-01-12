import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserOrderRoutingModule } from "./user-order-routing.module";
import { OrderComponent } from "./order/order.component";
// import { OrderService } from "./order.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "../../auth/token-interceptor.service";
import { EllipsisPipe } from "../../common/ellipsis-pipe";
@NgModule({
  imports: [CommonModule, UserOrderRoutingModule],
  declarations: [OrderComponent],
  providers: [
    // OrderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  exports: [OrderComponent],
})
export class UserOrderModule {}
