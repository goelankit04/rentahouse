import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
})
export class EmailVerificationComponent implements OnInit {
  @HostBinding('class') emailVerificationComponentClass =
    'app-email-verification';

  constructor(
    private _route: ActivatedRoute,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    // start loader here
    this._route.params.subscribe((params) => {
      let total_uuid: any = params['id'];
      let decoded_uuid = total_uuid.split('ooo');

      // making call to service for email verification
      this._authService
        .userEmailValidation({
          user_id: parseInt(decoded_uuid[0]),
          email_uuid: decoded_uuid[1],
        })
        .subscribe(
          (res: any) => {
            // console.log('successfully verified user email');
          },
          (err) => {
            // console.error(err.error.message);
          }
        );
    });
  }
}
