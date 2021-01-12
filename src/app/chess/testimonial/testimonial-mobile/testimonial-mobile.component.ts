import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-testimonial-mobile',
  templateUrl: './testimonial-mobile.component.html'
})
export class TestimonialMobileComponent implements OnInit {
  @HostBinding('class') testimonialMobileComponentClass = 'app-testimonial-mobile';

  testimonials: Array<any> = [
    {
      img_url: 'https://s3.ap-south-1.amazonaws.com/nurtr.com/updated-image/debashis.png',
      testimonials: `Ramesh Sir's approach towards how to think on the board & off the board is truly remarkable.`,
      player_name: 'Debashis Das',
      player_title: 'Chess Grand Master'
    },
    {
      img_url: 'https://s3.ap-south-1.amazonaws.com/nurtr.com/updated-image/ankit.png',
      testimonials: 'Ramesh Sir always manages to explain complicated chess concepts in seemingly easier ways which can be easily understood.',
      player_name: 'Ankit Rajpara',
      player_title: 'Chess Grand Master'
    },
    {
      img_url: 'https://s3.ap-south-1.amazonaws.com/nurtr.com/updated-image/kannpan.png',
      testimonials: 'Ramesh Sir gives you enough freedom to experiment, and his thirst to continually update himself always helps his students to learn new things.',
      player_name: 'Priyadharshan Kannappan',
      player_title: 'Chess Grand Master'
    },
    {
      img_url: 'https://s3.ap-south-1.amazonaws.com/nurtr.com/testimonials/pragya.png',
      testimonials: 'You are not just my coach, you are my friend, my guide, my mentor. I will always be thankful to you, for your love, patience and support',
      player_name: 'Praggnanandhaa Rameshbabu',
      player_title: `India's youngest Grandmaster`
    },
    {
      img_url: 'https://s3.ap-south-1.amazonaws.com/nurtr.com/updated-image/divya.png',
      testimonials: 'I am growing as a better human and a better chess player under his guidance and wisdom',
      player_name: 'Divya Deshmukh',
      player_title: 'Current World Under 12 Girl Champion'
    },
    {
      img_url: 'https://s3.ap-south-1.amazonaws.com/nurtr.com/updated-image/sethu.png',
      testimonials: 'One of the most friendly coach I have ever worked with! Learning from him is always fun',
      player_name: 'S.P Sethuraman',
      player_title: 'Chess Grand Master'
    },
    {
      img_url: 'https://s3.ap-south-1.amazonaws.com/nurtr.com/updated-image/vaishali.png',
      testimonials: `When I said I can't, you said - you can, when I said I won't, you said - do it, even when I said I don't believe in myself , you said - I believe in you!`,
      player_name: 'Vaishali Rameshbabu',
      player_title: 'Women International Master'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
