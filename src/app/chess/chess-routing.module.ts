import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChessComponent }         from './chess.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ChessComponent
  },
  {
    path: 'product/:categoryId/:productType/:productId',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChessRoutingModule {
}
