import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-card-mentor',
  templateUrl: './card-mentor.component.html'
})
export class CardMentorComponent implements OnInit {
  @HostBinding('class') CardMentorComponentClass = 'app-card-mentor';

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
