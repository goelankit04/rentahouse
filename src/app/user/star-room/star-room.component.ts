import { HostBinding,Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-star-room',
  templateUrl: './star-room.component.html',
})
export class StarroomComponent implements OnInit {
  @HostBinding('class') StarroomComponentClass = 'app-star-room';

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {

  }
}
