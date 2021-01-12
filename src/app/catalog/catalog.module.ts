import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { AppMaterialModule } from '../app-material-module';
import { AppCommonModule } from '../app-common/app-common.module';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        CatalogRoutingModule,
        AppCommonModule
    ],
    declarations: [
        CatalogComponent
    ]
})
export class CatalogModule {
}

