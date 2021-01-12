import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq-routing.module';
import { AppMaterialModule } from '../app-material-module';

@NgModule({
  imports: [CommonModule, AppMaterialModule, FaqRoutingModule],
  declarations: [FaqComponent],
})
export class FaqModule {}
