import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-nurtr-usp',
  templateUrl: './nurtr-usp.component.html'
})
export class NurtrUspComponent implements OnInit {
  @HostBinding('class') NurtrUspComponentClass = 'app-nurtr-usp';

  uspList = [
    {
      id: 1,
      icon: 'assets/payment-footer/mentor.png',
      title: `Learn Best from the Best!`,
      subtitle: `20+ Mentor's, Live interaction, mentoring, and handholding under 1 roof`
    },
    {
      id: 2,
      icon: 'assets/payment-footer/opportunity.png',
      title: `Opportunities & Rewards`,
      subtitle: `Cashback, rewards, and more on registrations`
    },
    {
      id: 3,
      icon: 'assets/payment-footer/learn.png',
      title: `Learn, Practice, Achieve`,
      subtitle: `Online practice, game and e-Tournaments `
    },
    {
      id: 4,
      icon: 'assets/payment-footer/evolve.png',
      title: `Always Evolving`,
      subtitle: `Top mentors added regularly`
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
