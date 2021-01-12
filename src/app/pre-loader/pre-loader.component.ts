import { Component, HostBinding, OnInit, DefaultIterableDiffer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html'
})
export class PreloaderComponent implements OnInit {
  @HostBinding('class') PreloaderComponentClass = 'app-pre-loader';

  constructor(private router: Router) {
  }

  ngOnInit() {
   
  }

}

