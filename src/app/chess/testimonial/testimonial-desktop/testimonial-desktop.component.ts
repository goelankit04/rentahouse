import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-testimonial-desktop',
  templateUrl: './testimonial-desktop.component.html'
})
export class TestimonialDesktopComponent implements OnInit {
  @HostBinding('class') testimonialDesktopComponentClass = 'app-testimonial-desktop';

  constructor() { }

  rowSpanImages: number = 4;

  testimonials = [
    {
      id: 0,
      name: "Debashis Das",
      title: "Chess Grand Master",
      testimonial: `Ramesh Sir's approach towards how to think on the board & off the board is truly remarkable.`,
      image: "https://s3.ap-south-1.amazonaws.com/nurtr.com/updated-image/debashis.png",
      isImage: true
    },
    {
      id: 1,
      name: "Ankit Rajpara",
      title: "Chess Grand Master",
      testimonial: `Ramesh Sir always manages to explain complicated chess concepts in seemingly easier ways which can be easily understood.`,
      image: "https://s3.ap-south-1.amazonaws.com/nurtr.com/updated-image/ankit.png",
      isImage: true
    },
    {
      id: 2,
      name: "Priyadharshan Kannappan",
      title: `Chess Grand Master`,
      testimonial: `Ramesh Sir gives you enough freedom to experiment, and his thirst to continually update himself always helps his students to learn new things.`,
      image: "https://s3.ap-south-1.amazonaws.com/nurtr.com/updated-image/kannpan.png",
      isImage: false
    },
    {
      id: 3,
      name: "Praggnanandhaa Rameshbabu",
      title: `India's Youngest Grandmaster`,
      testimonial: `You are not just my coach, you are my friend, my guide, my mentor. I will always be thankful to you, for your love, patience and support`,
      image: "https://s3.ap-south-1.amazonaws.com/nurtr.com/testimonials/pragya.png",
      isImage: true
    },
    {
      id: 4,
      name: "Divya Deshmukh",
      title: "Current World Under 12 Girl Champion",
      testimonial: `I am growing as a better human and a better chess player under his guidance and wisdom`,
      image: "https://s3.ap-south-1.amazonaws.com/nurtr.com/updated-image/divya.png",
      isImage: true
    },
    {
      id: 5,
      name: "S.P Sethuraman",
      title: "Chess Grand Master",
      testimonial: `One of the most friendly coach I have ever worked with! Learning from him is always fun`,
      image: "https://s3.ap-south-1.amazonaws.com/nurtr.com/updated-image/sethu.png",
      isImage: true
    },
    {
      id: 6,
      name: "Vaishali Rameshbabu",
      title: "Women International Master",
      testimonial: `When I said I can't, you said - you can, when I said I won't, you said - do it, even when I said I don't believe in myself , you said - I believe in you!`,
      image: "https://s3.ap-south-1.amazonaws.com/nurtr.com/updated-image/vaishali.png",
      isImage: true
    }

  ];

  currentTestimony = [];

  isActive: boolean = false;

  ngOnInit() {
    //    console.log("testimony length: " + this.testimonials.length/2);
    this.currentTestimony.push(this.testimonials[3]);
  }

  previousSlide(i: number) {
    this.currentTestimony = [];

    if ((i - 1) < 0) {
      this.currentTestimony.push(this.testimonials[this.testimonials.length - 1]);
    } else {
      this.currentTestimony.push(this.testimonials[i - 1]);
    }
  }

  nextSlide(i: number) {
    this.currentTestimony = [];

    if ((this.testimonials.length - 1) === i) {
      this.currentTestimony.push(this.testimonials[0]);
    } else {
      this.currentTestimony.push(this.testimonials[i + 1]);
    }
  }

  getMobileWidth() {
    if (window.screen.width < 950) {
      this.rowSpanImages = 4;
    }
    else {
      this.rowSpanImages = 3;
    }
    // return innerWidth < 950;
  }

  onMouseEnter(id: number) {
    this.isActive = true;
    this.currentTestimony[0] = this.testimonials[id];
  }

  onMouseLeave(id: number) {
    this.isActive = false;
    //    this.currentTestimony[0] = this.testimonials[id];
    //    console.log("Mouse leave triggered");
    this.currentTestimony = [];
    this.currentTestimony.push(this.testimonials[3]);
  }

}
