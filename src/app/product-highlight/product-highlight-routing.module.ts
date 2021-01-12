import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductHighlightComponent } from './product-highlight/product-highlight.component';

const routes: Routes = [
  {
    path: ':product_type/:product_id',
    component: ProductHighlightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductHighlightRoutingModule { }
