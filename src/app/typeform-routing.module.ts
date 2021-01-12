import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TypeformResponseComponent } from './typeform-response/typeform-response.component';

const routes: Routes = [
  {
    path: "typeform/response",
    component: TypeformResponseComponent,
    outlet: "typeform_response"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TypeformRoutingModule { }
