import { ExamplesService } from "./examples.service";
import { ExamplesComponent } from "./examples.component";
import { ExampleRoutingModule } from "./examples-routing.module";
import { AppBootstrapModule } from "../../../../app-bootstrap.module";
import { AppMaterialModule } from "../../../../app-material-module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppCommonModule } from "../../../../app-common/app-common.module";
import { ExamplesStudyComponent } from "./examples-study/examples-study.component";
import { BaseExamplesComponent } from "./base-examples/base-examples.component";

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    AppMaterialModule,
    AppBootstrapModule,
    ExampleRoutingModule,
  ],
  declarations: [
    ExamplesComponent,
    ExamplesStudyComponent,
    BaseExamplesComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ExamplesService],
})
export class ExamplesModule {}
