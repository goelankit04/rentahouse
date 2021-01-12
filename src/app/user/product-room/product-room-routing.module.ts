import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductEpisodeListComponent } from './product-episode-list/product-episode-list.component';

const routes: Routes = [
  {
    path: ':slug',
    component: ProductComponent
  },
  {
    path: ':categoryId/:productType/:productId/:slug',
    component: ProductEpisodeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoomRoutingModule {

}
