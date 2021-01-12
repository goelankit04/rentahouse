import {
  Component,
  OnInit,
  HostBinding,
  Input,
  HostListener,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerifyEmailComponent } from '../verify-email/verify-email.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AmplitudeService } from '../../amplitude/amplitude.service';
import { events } from '../../amplitude/events';

@Component({
  selector: 'app-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrls: ['./product-banner.component.scss'],
})
export class ProductBannerComponent implements OnInit, AfterViewInit {
  @HostBinding('class') ProductBannerComponentClass = 'app-product-banner';

  reserveEnabledProduct = [787, 778];

  product: any;
  productList: any;
  numbers: any;
  product_id: any;
  Star: any;
  pricing = [];
  price: any;
  banner = true;
  showDetail = false;
  dreamroom = {
    category: 1,
    productId: 35,
    productType: 7,
    name: 'Chess Dream Room',
    rate: '4.5',
    rating: '2367',
    author_name: 'GM R.B.Ramesh',
    episodes: '170+',
    hours: '75+',
    sale_price: '14,000',
    base_price: '30,000',
    img_src:
      'https://s3.ap-south-1.amazonaws.com/nurtr.com/author_avatar/Rb+ramesh.jpg',
    priceId: 16,
    wistiaURL: 'wistia_async_lgy1klqtvg',
    image: 'https://www.nurtr.com/assets/product-highlight/frst.png',
    about: `Known as the Super Coach of India, Grand Master R.B. Ramesh is one of the most successful chess coaches in
    the world today. He won the British Chess Championship in 2002 and the Commonwealth Games in 2007. He also
    served as the coach of the Indian Olympiad team in the years 2012, 2014, 2016 and 2018.`,
  };

  chessHour = {
    category: 1,
    productId: 574,
    productType: 7,
    name: 'ChessHour LIVE',
    rate: '4.8',
    rating: '1738',
    author_name: 'Grandmasters from different parts of the world',
    episodes: '365+',
    hours: '365+',
    sale_price: '11999',
    base_price: '29999',
    img_src: 'assets/product-highlight/chessHour.png',
    mentor: 'Grandmasters from different parts of the world',
    priceId: 1829,
    wistiaURL: 'wistia_async_53fmbe61id',
    image: 'https://www.nurtr.com/assets/product-highlight/frst.png',
    about: 'Grandmasters from different parts of the world',
  };

  chessHourA = {
    category: 1,
    productId: 573,
    productType: 7,
    name: 'ChessHour LIVE',
    rate: '4.8',
    rating: '1738',
    author_name: 'Grandmasters from different parts of the world',
    episodes: '365+',
    hours: '365+',
    sale_price: '11999',
    base_price: '29999',
    img_src: 'assets/product-highlight/chessHour.png',
    mentor: 'Grandmasters from different parts of the world',
    priceId: 1827,
    wistiaURL: 'wistia_async_53fmbe61id',
    image: 'https://www.nurtr.com/assets/product-highlight/frst.png',
    about: 'Grandmasters from different parts of the world',
  };

  super64 = {
    category: 1,
    productId: 680,
    productType: 16,
    name: 'Super64',
    rate: '4.8',
    rating: '11',
    author_name: 'GMs, IMs, FSTs, FTs, FMs and many more',
    episodes: '',
    hours: '1400+',
    sale_price: '6,00,000',
    base_price: '6,00,000',
    img_src: 'assets/product-highlight/chessHour.png',
    mentor: 'GMs, IMs, FSTs, FTs, FMs and many more',
    priceId: 2218,
    wistiaURL: 'wistia_async_oqe7h9u86z',
    image: 'https://www.nurtr.com/assets/product-highlight/frst.png',
    about:
      'The Super64 program of nurtr is spearheaded panel of esteemed coaches including GM Abhijeet Gupta, GM Dejan Bojkov, GM Konstantin Landa, GM Evgeniy, IM Vishal Saren, FM Ankit Gajwa and many more! The coaches in the panel have carved a niche in domain of chess coaching, authoring, and active playing. The coaches have devoted lifetime of their chess career towards curating and delivering finest chess content in world!',
  };

  mmg = {
    category: 1,
    productId: 746,
    productType: 13,
    name: 'Mastering Middle Games',
    rate: '',
    rating: '',
    author_name: 'GM Farrukh Amonatov',
    episodes: '52',
    hours: '80+',
    sale_price: '20,000',
    base_price: '35,000',
    img_src: 'assets/product-highlight/farrukh.png',
    mentor: 'GMs, IMs, FSTs, FTs, FMs and many more',
    priceId: 2426,
    wistiaURL: 'wistia_async_o8wv0kzh94',
    image: 'assets/product-highlight/farrukh_trailor_banner.png',
    about:
      'Coach of the Youth Russian team and working with many students from Russia, India, Kazakhstan, USA and other countries. Achievements - Asian Under-16 champion, Agzamov Memorial, Eurasian Blitz Cup of the President of Kazakhstan, Mumbai Mayor’s Cup 2018, Moscow Open Competed in FIDE World Cup and played until he was defeated by Magnus Carlsen in round 2.',
  };

  moro = {
    category: 1,
    productId: 778,
    productType: 13,
    name: `The Legend of  "Moro"`,
    rate: '',
    rating: '',
    author_name: 'GM Alexander Morozevich',
    episodes: '',
    hours: '100',
    sale_price: '50,000',
    base_price: '1,00,000',
    img_src: 'assets/product-highlight/moro.png',
    mentor: '',
    priceId: 2497,
    wistiaURL: 'wistia_async_k6relrxyl1',
    image: 'assets/product-highlight/moro_banner.png',
    about:
      'Considered as the strongest player of his generation, GM Alexander Morozevich is a russian Grandmaster with Peak Rating of 2788. He is a 2 time world champion  candidate and was ranked world number 2 in July 2008. “Moro” is known for his aggressive and unorthodox playing style.',
  };

  chessCombo = {
    category: 1,
    productId: 787,
    productType: 7,
    name: `Chess 635 Combo`,
    rate: '',
    rating: '',
    author_name: '',
    episodes: '',
    hours: '635',
    sale_price: '205000',
    base_price: '',
    img_src: 'assets/product-highlight/chess_combo.png',
    mentor:
      'GM Alexander Morozevich, GM Farrukh Amonatov, GM Boris Avrukh, GM Marian Petrov & many more',
    priceId: 2497,
    wistiaURL: 'wistia_async_sb25gcdyzd',
    image: 'assets/product-highlight/chessCombo.png',
    about:
      'Considered as the strongest player of his generation, GM Alexander is a russian Grandmaster with Peak Rating 2788. He is a 2-time World Champion Candidate and his peak ranking was second in the world in July 2008. He is known for his aggressive and unorthodox playing style',
  };

  chessDream = {
    category: 1,
    productId: 807,
    productType: 7,
    name: `Chess Dream Room (Beginner Subscription)`,
    rate: '',
    rating: '',
    author_name: 'GM RB Ramesh',
    episodes: '39',
    hours: '5+',
    sale_price: '10,000',
    base_price: '5000',
    img_src:
      'https://s3.ap-south-1.amazonaws.com/nurtr.com/author_avatar/Rb+ramesh.jpg',
    mentor:
      'GM Ruslam Ponomariv, GM Alexander Morozevich, GM Farrukh Amonatov, GM Boris Avrukh, GM Marian Petrov & many more',
    priceId: 2497,
    wistiaURL: 'wistia_async_uqoduviuo8',
    image: 'https://www.nurtr.com/assets/product-highlight/frst.png',
    about:
      'Known as the Super Coach of India, Grandmaster R.B. Ramesh is one of the most successful chess coaches in the world today. He ws the British Chess Championship in 2002 and the Commonwealth Games in 2007. He also served as the coach of the Indian Olympiad team in the years 2012, 2014, 2016 and 2018.',
  };

  beauty = {
    category: 1,
    productId: 810,
    productType: 7,
    name: `Beauty of the Beast`,
    rate: '',
    rating: '',
    author_name: 'GM Adhiban Baskaran',
    episodes: '',
    hours: '6',
    sale_price: '8000',
    base_price: '4999',
    img_src: 'assets/product-highlight/adhiban.jpg',
    mentor:
      'GM Ruslam Ponomariv, GM Alexander Morozevich, GM Farrukh Amonatov, GM Boris Avrukh, GM Marian Petrov & many more',
    priceId: 2497,
    wistiaURL: 'wistia_async_9qgsa7gdn5',
    image:
      'https://s3.ap-south-1.amazonaws.com/nurtr.com/combo_images/Untitled_s-1.png',
    about:
      'is an Indian chess Grandmaster, better known as the ’Beast’ for his aggressive and unusual style of play. Adhiban earned his GM title in 2010 and has had a peak rating of 2701. He has been World U-16 Champion (2008) and Indian Champion (2009). In 2007 and 2008, he played on the first board in the U-16 Chess Olympiad as part of the gold-winning Indian team.',
  };

  mindset = {
    category: 1,
    productId: 672,
    productType: 13,
    name: `The Grand Master Mindset`,
    rate: '',
    rating: '',
    author_name: 'GM Marian Petrov',
    episodes: '10',
    hours: '10',
    sale_price: '15,000',
    base_price: '10,000',
    img_src: 'assets/product-highlight/patrov.png',
    mentor: '',
    priceId: 2391,
    wistiaURL: 'wistia_async_9qr76rp7in',
    image: 'assets/product-highlight/banner_patrov.png',
    about:
      'The Bulgarian Grandmaster & FIDE Trainer - Marian Petrov with peak rating-2549. He has over 12 years of coaching experience. He has coached the Wales team in the 2016 Olympiad in Baku and in 2018 Olympiad in Batumi. He has been Bulgarian Champion of 2002 and 2017 and winner of many Open tournaments & represented his country in the 2002 Chess Olympiad in Bled, Slovenia. He even has authored book & CD on opening preparations.',
  };

  openingProgram = {
    category: 1,
    productId: 776,
    productType: 13,
    name: `Advanced GM Opening Preparation Program`,
    rate: '',
    rating: '',
    author_name: 'GM Boris Avrukh',
    episodes: '',
    hours: '78',
    sale_price: '10,000',
    base_price: '35,000',
    img_src: 'assets/product-highlight/boris.png',
    mentor: '',
    priceId: 2391,
    wistiaURL: 'wistia_async_m1dj1y1sw9',
    image: 'assets/product-highlight/boris_background.png',
    about:
      'Boris Leonidovich Avrukh is an Israeli Chess Grandmaster with Peak Rating 2668. He is the winner of U-12 World Championship in 1990 and has accomplished Israeli Championship title twice in 2000 and 2008. He has also played in 6 Chess Olympiads from 1998 to 2008. Author of some of the best selling chess books like Classical Slav and series of GrandMaster Repertoire- 1.d4, he is considered as the “God of Opening” in Chess world.',
  };

  cardData = {
    number: 1,
    id: 8,
    ribbonText: 'Beginner: for Rating < 1100',
    name: 'The Attack',
    image: 'https://www.nurtr.com/assets/product-highlight/frst.png',
    description: `Attack and capture are integral parts of a chess game. RB Ramesh, in this episode, talks about the importance of attack and various doubts attached to attack`,
    wistiaURL: 'wistia_async_p6rvhs7yss',
  };

  cricket = {
    category: 1,
    productId: 697,
    productType: 13,
    name: `Gary's PowerPlay`,
    // rate: '',
    // rating: '1738',
    author_name: 'Gary Kirsten',
    episodes: '5',
    hours: '10+',
    sale_price: '9999',
    base_price: '9999',
    img_src:
      'https://s3.ap-south-1.amazonaws.com/nurtr.com/star_room/GARY+POWERPLAY_logo.png',
    priceId: 2264,
    wistiaURL: 'wistia_async_mqsnmhbrd7',
    image: 'assets/gary.png',
    about:
      'Gary Kirsten is a former South African opening batsman and a celebrated cricket coach. He represented South Africa between 1993 and 2004 in 286 international matches. He also holds the record for the highest individual score by a South African cricketer in a one day international, knocking a 188 not-out against UAE in the 1996 World Cup.',
  };

  @ViewChild('templatePriceNav') tpn: ElementRef;
  @ViewChild('mobiletemplatePriceNav') mtpn: ElementRef;

  @Input('data')
  set cardValue(data: any) {
    if (data && data.price_detail.length > 0) {
      this.pricing = data.price_detail;
      // console.log(this.pricing);
    }
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    // const sticky = header.offsetTop;

    this.tpn.nativeElement.style.opacity = window.pageYOffset > 500 ? 1 : 0;
    this.mtpn.nativeElement.style.opacity = window.pageYOffset > 500 ? 1 : 0;
  }

  constructor(
    private dialog: MatDialog,
    private _router: Router,
    private _amps: AmplitudeService,
    public _activated: ActivatedRoute
  ) {}

  ngOnInit() {
    this.price = this.pricing;

    this._activated.params.subscribe((params) => {
      this.product_id = params.product_id;
      if (parseInt(params.product_id) === 35) {
        this.productList = this.dreamroom;
      } else if (parseInt(params.product_id) === 574) {
        this.productList = this.chessHour;
      } else if (parseInt(params.product_id) === 573) {
        this.productList = this.chessHourA;
      } else if (parseInt(params.product_id) === 697) {
        this.productList = this.cricket;
      } else if (parseInt(params.product_id) === 746) {
        this.productList = this.mmg;
      } else if (parseInt(params.product_id) === 778) {
        this.productList = this.moro;
      } else if (parseInt(params.product_id) === 672) {
        this.productList = this.mindset;
      } else if (parseInt(params.product_id) === 787) {
        this.productList = this.chessCombo;
      } else if (parseInt(params.product_id) === 776) {
        this.productList = this.openingProgram;
      } else if (parseInt(params.product_id) === 807) {
        this.productList = this.chessDream;
      } else if (parseInt(params.product_id) === 810) {
        this.productList = this.beauty;
      } else {
        this.productList = this.super64;
      }
    });
    const rate = this.productList.rate.split('.');
    const star = Number(rate[0]);
    const halfStar = Number(rate[1]);
    this.numbers = Array(star).fill(4);
  }

  ngAfterViewInit() {
    // this.scrollValue();
    // this.scrollBottom();
  }

  scrollValue() {
    const header = document.getElementById('myHeader');
    const fix = document.getElementById('fixes');
    const sticky = header.offsetTop;
    if (window.pageYOffset >= 500) {
      $('fix').add('sticky');
      $('.sticky').attr('style', 'display: flex');
    } else {
      $('.sticky').attr('style', 'display: none !important');
      $('fix').remove('sticky');
    }
    this.product = {
      name: 'productName',
      author_name: 'author name',
    };
  }

  scrollBottom() {
    const header = document.getElementById('Header');
    const fix = document.getElementById('fix');
    const sticky = header.offsetTop;

    if (window.pageYOffset >= sticky) {
      fix.classList.add('mob_fix');
      $('.mob_fix').attr('style', 'display:flex');
    } else {
      $('.mob_fix').attr('style', 'display: none !important');
      fix.classList.remove('mob_fix');
    }

    this.product = {
      name: 'productName',
      author_name: 'author name',
    };
  }

  mouseEnter() {
    this.showDetail = true;
  }

  mouseLeave() {
    this.showDetail = false;
  }

  buyNow(product: any, propType?: string) {
    this.openVerifyModal(product, propType);
  }

  openVerifyModal(product: any, propType?: string) {
    this._amps.setAmplitudeEvents(events.event_9, {
      success: 'yes',
      email: localStorage.getItem('email'),
      country: localStorage.getItem('country'),
      source: 'product-highlight-popup',
    });

    this.banner = false;

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
          category: product.category,
          productName: product.name,
          productId: product.productId,
          productType: product.productType,
          currency: this.pricing[0].currency,
          finalPrice: this.pricing[0].final_price,
          salePrice: this.pricing[0].sale_price,
          basePrice: this.pricing[0].base_price,
          priceId: product.priceId,
          propType: propType,
        },
      })
      .afterClosed()
      .subscribe((res: any) => {
        this.banner = true;
      });
  }

  openTypeForm() {
    this._amps.setAmplitudeEvents(events.event_26, {
      success: 'yes',
    });
  }

  watchVideo(product: any) {
    this._amps.setAmplitudeEvents(events.event_17, {
      success: 'yes',
      complete: false,
      name: product.name,
      episode_id: undefined,
      duration: undefined,
      product_id: product.productId,
      is_free: true,
      source: 'product-highlight',
    });
  }

  isReserveEnabled() {
    return (
      this.reserveEnabledProduct.filter(
        (reserve) => reserve === Number(this.product_id)
      ).length > 0
    );
  }
}
