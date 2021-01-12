import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DrFunctionalComponent } from "./dr-functional.component";
import { VideoDetailsComponent } from "./video-details/video-details.component";

const routes: Routes = [
  {
    path: "",
    component: DrFunctionalComponent,
    children: [
      {
        path: "videos/:categoryId/:productType/:productId/:episodeId",
        component: VideoDetailsComponent,
      },
      {
        path: "example",
        loadChildren: () => import('./examples/examples.module').then(m => m.ExamplesModule),
      },
      {
        path: "puzzle",
        loadChildren: () => import('./puzzle/star-puzzle.module').then(m => m.StarPuzzleModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrFunctionalRoutingModule {}
