import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { AppMaterialModule } from '../app-material-module';
import { AppCommonModule } from '../app-common/app-common.module';
import { AppBootstrapModule } from '../app-bootstrap.module';
import { PopupService } from './popup.service';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    AppCommonModule,
    AppBootstrapModule
  ],
  declarations: [
    PopupComponent
  ],
  exports: [
    PopupComponent
  ],
  providers: [
    PopupService
  ]
})
export class PopupModule { }
