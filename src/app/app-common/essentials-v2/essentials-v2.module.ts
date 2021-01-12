import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './card-container/card-container.component';
import { LazyLoadDirective } from './lazy-load.directive';
import { AppMaterialModule } from '../../app-material-module';
import { CardV2Module } from '../card-v2/card-v2.module';
import { EssentialV2Service } from './essential-v2.service';

@NgModule({
  declarations: [
    CardContainerComponent,
    LazyLoadDirective,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    CardV2Module
  ],
  exports: [
    LazyLoadDirective,
    CardContainerComponent
  ],
  providers: [
    EssentialV2Service
  ]
})
export class EssentialsV2Module { }
