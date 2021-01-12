import {Component, HostBinding, OnInit} from "@angular/core";

@Component({
  selector: "app-testimonial",
  templateUrl: "./testimonial.component.html"
})
export class TestimonialComponent implements OnInit {
  @HostBinding('class') testimonialComponentClass = 'app-testimonial';

  constructor() {
  }

  ngOnInit() {
  }

  getMobileWidth(){
    return window.innerWidth < 900;
  }

}
