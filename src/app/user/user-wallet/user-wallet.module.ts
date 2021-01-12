import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserWalletRoutingModule } from "./user-wallet-routing.module";
import { WalletComponent } from "./wallet/wallet.component";
import { WalletService } from "./wallet.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "../../auth/token-interceptor.service";
import { EllipsisPipe } from "../../common/ellipsis-pipe";

@NgModule({
  imports: [CommonModule, UserWalletRoutingModule],
  declarations: [WalletComponent],
  providers: [
    WalletService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  exports: [WalletComponent],
})
export class UserWalletModule {}
