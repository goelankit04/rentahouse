import { HostBinding } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dr-functionality',
  templateUrl: './dr-functionality.component.html'
})
export class DrFunctionalityComponent implements OnInit {
  @HostBinding('class') DrFunctionalityComponentClass = 'app-dr-functionality';

  constructor() { }

  ngOnInit() {
    // console.log('I am in dr-functionality');
  }

}
