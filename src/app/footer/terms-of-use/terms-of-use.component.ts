import { Component, OnInit, HostBinding } from '@angular/core';
import { NavigationEnd, Router }          from '@angular/router';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html'
})
export class TermsOfUseComponent implements OnInit {
  @HostBinding('class') termsOfUseComponentClass = 'app-terms-of-use';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

}
