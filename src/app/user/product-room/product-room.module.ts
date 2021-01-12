import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { AppMaterialModule } from '../../app-material-module';
import { AppCommonModule } from '../../app-common/app-common.module';
import { ProductRoomRoutingModule } from './product-room-routing.module';
import { ProductEpisodeListComponent } from './product-episode-list/product-episode-list.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    AppCommonModule,
    ProductRoomRoutingModule
  ],
  declarations: [
    ProductComponent,
    ProductEpisodeListComponent
  ]
})
export class ProductRoomModule { }
