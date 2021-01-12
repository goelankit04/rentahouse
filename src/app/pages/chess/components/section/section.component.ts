import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  // cardStyle = {
  //   background: 'linear-gradient(99deg, #2d267b 0%, #a83d3d 100%)',
  //   height: '250px',
  //   width: '440px',
  // };
  @Input() cardStyles;

  @Input() title = '';
  constructor() {}

  ngOnInit() {}
}
