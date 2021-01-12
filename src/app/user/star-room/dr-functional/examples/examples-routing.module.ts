import { ExamplesStudyComponent } from "./examples-study/examples-study.component";
import { ExamplesComponent } from "./examples.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: ":productId/:level/:episode_id",
    component: ExamplesComponent,
    children: [
      {
        path: "example-study/:puzzleId",
        component: ExamplesStudyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
