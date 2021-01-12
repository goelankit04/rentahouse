import { AppCommonModule } from '../../../../app-common/app-common.module';
import { EpiListComponent } from './epi-list.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpiListRoutingModule } from './epi-list-routing.module';
import { AppMaterialModule } from '../../../../app-material-module';
import { AppBootstrapModule } from '../../../../app-bootstrap.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    AppBootstrapModule,
    AppCommonModule,
    EpiListRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    EpiListComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [],
  exports: [],
  providers: []
})
export class EpiListModule {
}
