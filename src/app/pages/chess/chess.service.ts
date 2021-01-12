import { Injectable } from '@angular/core';
import { VerifyEmailComponent } from '../../product-highlight/verify-email/verify-email.component';
import { events } from '../../amplitude/events';
import { AmplitudeService } from '../../amplitude/amplitude.service';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class ChessService {
  popular_courses = [
    {
      title: 'Power Play',
      author: 'Gary Kirsten',
      backgroundColor: '#AA3D3D',
      imgUrl: 'https://assetv2.nurtr.com/images/cricket-page/gary-feature.webp',
      about: 'Ideal for beginners and amateur players',
    },
    {
      title: 'Dream Room',
      author: 'Gary Kirsten',
      backgroundColor: '#3D73AC',
      imgUrl: 'https://assetv2.nurtr.com/images/cricket-page/gary_krst_fl.webp',
      about:
        'Ideal for budding cricketers looking to take their game to the next level',
    },
    {
      title: 'Pro',
      author: 'Gary Kirsten',
      backgroundColor: '#6B3DAC',
      imgUrl: 'https://assetv2.nurtr.com/images/cricket-page/gk_bowl.webp',
      about: 'Ideal for semi-pro cricketers seeking personalised guidance',
    },
    {
      title: 'Super Pro',
      author: 'Gary Kirsten',
      backgroundColor: '#229C6E',
      imgUrl: 'https://assetv2.nurtr.com/images/cricket-page/gk_chr.webp',
      about: 'Ideal for academies, trainers and elite players',
    },
  ];

  constructor(
    private dialog: MatDialog,

    private _amps: AmplitudeService
  ) {}

  getCourses() {
    return this.popular_courses;
  }

  getCourseInfo(name: string) {
    return this.popular_courses.filter((pp: any) => pp.title.includes(name))[0];
  }

  openPopup(res) {
    const product = res.data.productList[0];
    this._amps.setAmplitudeEvents(events.event_9, {
      success: 'yes',
      email: localStorage.getItem('email'),
      country: localStorage.getItem('country'),
      source: 'cricket-page',
    });

    const dialogRef = this.dialog
      .open(VerifyEmailComponent, {
        width: window.innerWidth > 800 ? '550px' : '90%',
        height: window.innerWidth > 800 ? '27rem' : '60%',
        // autoFocus: false,
        hasBackdrop: true,
        backdropClass: 'dialog-background',
        disableClose: true,
        data: {
          email: localStorage.getItem('email'),
          category: product.category_id,
          productName: product.name,
          productId: product.id,
          productType: product.product_type,
          currency: product.price_detail[0].currency,
          finalPrice: product.price_detail[0].final_price,
          salePrice: product.price_detail[0].sale_price,
          basePrice: product.price_detail[0].base_price,
          priceId: product.price_detail[0].priceId,
          // propType: propType,
        },
      })
      .afterClosed()
      .subscribe((res: any) => {
        // this.banner = true;
      });
  }
}
