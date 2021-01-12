import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CricketRoutingModule } from './cricket-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { CricketComponent } from './cricket.component';
import { CardComponent } from './components/card/card.component';
import { CardSliderComponent } from './components/card-slider/card-slider.component';
import { CricketService } from './cricket.service';
import { PricingContainerComponent } from './components/pricing-container/pricing-container.component';
import { PricingCardComponent } from './components/pricing-card/pricing-card.component';
import { ProductHighlightModule } from '../../product-highlight/product-highlight.module';
import { AppCommonModule } from '../../app-common/app-common.module';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToModule } from 'ng2-scroll-to-el';

@NgModule({
  declarations: [
    BannerComponent,
    CricketComponent,
    CardComponent,
    CardSliderComponent,
    PricingContainerComponent,
    PricingCardComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    CricketRoutingModule,
    ProductHighlightModule,
    AppCommonModule,
    ScrollToModule.forRoot(),
  ],
  providers: [CricketService],
})
export class CricketModule {}
