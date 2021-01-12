import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product/card-product.component';
import { CardMentorComponent } from './card-mentor/card-mentor.component';
import { CardEventsComponent } from './card-events/card-events.component';
import { CardV2Component } from './card-v2.component';
import { AppMaterialModule } from '../../app-material-module';

@NgModule({
  declarations: [
    CardV2Component,
    CardProductComponent,
    CardMentorComponent,
    CardEventsComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    CardV2Component
  ]
})
export class CardV2Module { }
