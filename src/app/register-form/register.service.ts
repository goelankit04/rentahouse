import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class RegisterService {
  private static PROD_EMAIL_SERVICE_URL = "https://email.nurtr.com";
  private static TEST_EMAIL_SERVICE_URL = "http://development-email-service.ap-south-1.elasticbeanstalk.com";
  private static DEV_EMAIL_SERVICE_URL = "http://dev-cron-job.ap-south-1.elasticbeanstalk.com";

  headers = new HttpHeaders({"Content-Type": "application/json"});

  constructor(private http: HttpClient) {
  }

  redeemScholarshipPoints(data: any): Observable<any> {
    return this.http.post(`${RegisterService.PROD_EMAIL_SERVICE_URL}/redeem/scholarship`, JSON.stringify(data), {headers: this.headers});
  }

  registerAsSchool(data: any): Observable<any> {
    return this.http.post(`${RegisterService.DEV_EMAIL_SERVICE_URL}/school/register`, JSON.stringify(data), {headers: this.headers});
  }
}
