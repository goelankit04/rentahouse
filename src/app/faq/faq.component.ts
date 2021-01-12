import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html'
})
export class FaqComponent implements OnInit {
  @HostBinding('class')
  faqComponentClass = 'app-faq';

  constructor(private router: Router) {}

  ngOnInit() {
    // if (this.router.url === '/faq') {
    //   localStorage.setItem('background', '#363636');
    // }
  }

  s() {
    this.router.navigateByUrl('/event');
  }
}
