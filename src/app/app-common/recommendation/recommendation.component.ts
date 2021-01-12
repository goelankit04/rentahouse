import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html'
})
export class RecommendationComponent implements OnInit {
  @HostBinding('class') RecommendationComponentClass = 'app-recommendation';

  response = {
    products: []
  };

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _recommendationRef: MatBottomSheetRef<RecommendationComponent>
  ) { }

  ngOnInit() {
    // console.log(this.data, this.response);
    for (let i = 0; i < this.data.product.length; i++) {
      const x = this.data.product[i];
      this.response.products.push({
        active: false,
        id: x.id,
        image: x.image_url,
        type: 'product',
        name: x.name,
        video: x.trailer_video,
        duration: x.duration,
        price: x.sale_price,
        mentor: x.author_name,
        designation: '',
        shortDescription: x.short_description,
        description: x.description,
        trailer_video: x.trailer_video,
        productType: x.product_type,
        poster: x.poster,
        episode_id: 0
      });
    }
  }

  closeRecommendation() {
    this._recommendationRef.dismiss();
    localStorage.setItem('recommended_container', 'false');
  }
}
