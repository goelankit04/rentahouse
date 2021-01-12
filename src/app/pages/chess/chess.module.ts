import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessRoutingModule } from './chess-routing.module';
import { ChessComponent } from './chess.component';
import { CardComponent } from './components/card/card.component';
import { ChessService } from './chess.service';
import { ProductHighlightModule } from '../../product-highlight/product-highlight.module';
import { AppCommonModule } from '../../app-common/app-common.module';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { HorizontalSliderComponent } from './components/horizontal-slider/horizontal-slider.component';
import { SectionComponent } from './components/section/section.component';
import { ProductBannerComponent } from './components/product-banner/product-banner.component';

@NgModule({
  declarations: [
    ChessComponent,
    CardComponent,
    FooterComponent,
    HorizontalSliderComponent,
    SectionComponent,
    ProductBannerComponent,
  ],
  imports: [
    CommonModule,
    ChessRoutingModule,
    ProductHighlightModule,
    AppCommonModule,
    ScrollToModule.forRoot(),
  ],
  providers: [ChessService],
})
export class ChessModule {}
