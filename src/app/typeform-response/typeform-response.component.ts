import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-typeform-response',
  templateUrl: './typeform-response.component.html',
  styleUrls: ['./typeform-response.component.scss'],
})
export class TypeformResponseComponent implements OnInit {
  typeform_src = '';
  data: any;

  constructor(
    private routes: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    // get typeform id from db
    // this._authService.getTypeformResponse().subscribe(res => {
    //   console.log(res);
    //   this.data = res.data.typeform[0].typeform_id;
    //   this.typeform_src = `https://nurtr.typeform.com/to/${this.data}`;
    // });

    this.routes.queryParams.subscribe((qp) => {
      this.typeform_src = `https://nurtr.typeform.com/to/${qp.tp}`;
    });
  }
}
