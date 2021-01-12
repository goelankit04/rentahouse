import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CricketService } from '../../cricket.service';

@Component({
  selector: 'app-pricing-container',
  templateUrl: './pricing-container.component.html',
  styleUrls: ['./pricing-container.component.scss'],
})
export class PricingContainerComponent implements OnInit, OnChanges {
  @Input() courses;

  ngOnChanges(changes: any) {
    if (changes.course && changes.course.length > 0) {
      this.courses = changes.course;
    }
  }

  constructor(public cs: CricketService) {}

  ngOnInit() {}
}
