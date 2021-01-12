import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { MobileNumberComponent } from './mobile-number/mobile-number.component';
import { AppMaterialModule } from '../../app-material-module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    CountrySelectorComponent,
    MobileNumberComponent
  ],
  exports: [
    CountrySelectorComponent,
    MobileNumberComponent
  ]
})
export class ElementaryComponentModule { }
