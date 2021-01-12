import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as decoder from 'jwt-decode';
import * as moment from 'moment';
import { TokenInterceptorService } from './token-interceptor.service';
import { environment } from '../../environments/environment';
import { AmplitudeService } from '../amplitude/amplitude.service';

@Injectable()
export class AuthService extends TokenInterceptorService {
  private static BASE_API_URL = '';
  private static base_url = '';
  constructor(
    private _http: HttpClient,
    public router: Router,
    private _amps: AmplitudeService
  ) {
    super();
    AuthService.BASE_API_URL = environment.auth_target;
    // AuthService.base_url = environment.auth_target_v2;
  }

  getEnv() {
    if (
      AuthService.BASE_API_URL == 'https://auth.testourwebsite.com/v1/api' ||
      AuthService.BASE_API_URL == 'https://auth.testourwebsite.com/v1/api'
    ) {
      return 'staging';
    } else {
      return 'production';
    }
  }

  getTypeformResponse(): Observable<any> {
    return this._http.get(
      `${AuthService.BASE_API_URL}/product/typeform/response`
    );
  }

  public setUser2LocalStorage(token: string) {
    // console.log(token,"set token")
    const decodedToken: any = decoder(token);
    // console.log(decodedToken,"decoded token");

    const tokenExpirationTime = moment().add(decodedToken.exp, 'second');
    localStorage.setItem(
      'first_name',
      decodedToken.user.first_name.replace(/ /g, '')
    );
    localStorage.setItem('id', decodedToken.user.id);
    localStorage.setItem(
      'expires_at',
      JSON.stringify(tokenExpirationTime.valueOf())
    );
    localStorage.setItem('role_id', decodedToken.user.role_id);

    if (decodedToken.user.address.country) {
      localStorage.setItem('country', decodedToken.user.address.country);
    } else {
      localStorage.setItem('country', 'India');
    }

    localStorage.setItem('email', decodedToken.user.email);
    localStorage.setItem('mobile', decodedToken.user.mobile);
    localStorage.setItem(
      'mobile_country_code',
      decodedToken.user.mobile_country_code
    );
    localStorage.setItem('access_token', token);

    this.settWalletBalanceToLocalStorage();
  }

  public removeLocalStorageItem() {
    localStorage.removeItem('first_name');
    localStorage.removeItem('id');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('role_id');
    // localStorage.removeItem('country');
    localStorage.removeItem('email');
    localStorage.removeItem('mobile');
    localStorage.removeItem('mobile_country_code');
    localStorage.removeItem('access_token');
    localStorage.removeItem('resetPassword');
    localStorage.removeItem('is_mobile_verified');
    localStorage.removeItem('previous_access_token');
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem('access_token')) {
      return moment().isBefore(this.getExpiration());
    } else {
      this.removeLocalStorageItem();
      return false;
    }
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  registerUser(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/user/register`,
      JSON.stringify(data)
    );
  }

  loginUser(data: any): Observable<any> {
    return this._http
      .post(`${AuthService.BASE_API_URL}/user/login`, JSON.stringify(data))
      .pipe(
        tap((res: any) => {
          if (res.data.accesstoken) {
            this.setUser2LocalStorage(res.data.accesstoken);
          }
        })
      );
  }

  impersonate(data: any): Observable<any> {
    return this._http
      .post(
        `${AuthService.BASE_API_URL}/user/impersonate`,
        JSON.stringify(data)
      )
      .pipe(
        tap((res: any) => {
          if (res.data.accesstoken) {
            this.setUser2LocalStorage(res.data.accesstoken);
          }
        })
      );
  }

  getLive(): Observable<any> {
    return this._http.get(`${AuthService.BASE_API_URL}/zoom/get/live`);
  }

  getZoomLink(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/zoom/register`,
      JSON.stringify(data)
    );
  }

  generateTwitterAuthParams(): Observable<any> {
    return this._http.get(
      `${AuthService.BASE_API_URL}/user/generate/twitter/auth/request`
    );
  }

  twitterOAuthVerifier(data: any): Observable<any> {
    return this._http
      .post(
        `${AuthService.BASE_API_URL}/user/oauth/verifier/twitter`,
        JSON.stringify(data)
      )
      .pipe(
        tap((res: any) => {
          if (res.data.accesstoken) {
            this.setUser2LocalStorage(res.data.accesstoken);
          }
        })
      );
  }

  loginTestUser(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/staging/authentication`,
      JSON.stringify(data)
    );
  }

  logoutUser(): void {
    // console.log("logout user",localStorage.getItem('previous_access_token'))
    if (localStorage.getItem('previous_access_token')) {
      // console.log("logout from Impersonate");
      // console.log("175");

      this.setUser2LocalStorage(localStorage.getItem('previous_access_token'));
      // console.log("178");

      localStorage.removeItem('previous_access_token');
      this.router.navigateByUrl('/');
    } else {
      //  console.log('logout from all');
      this.removeLocalStorageItem();
      // window.name = '';
      this._amps.setLogout();
      this.router.navigateByUrl('/');
      location.reload();
    }
  }

  getUserProfileDetail(): Observable<any> {
    return this._http.get(`${AuthService.BASE_API_URL}/user/detail`);
  }

  changeCurrentPassword(data: any): Observable<any> {
    return this._http.patch(
      `${AuthService.BASE_API_URL}/user/change/password`,
      JSON.stringify(data)
    );
  }

  sendResetPasswordLink(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/user/reset/password/link`,
      JSON.stringify(data)
    );
  }

  resetUserPassword(data: any): Observable<any> {
    return this._http.patch(
      `${AuthService.BASE_API_URL}/user/reset/forgot/password`,
      JSON.stringify(data)
    );
  }

  userEmailValidation(data: any): Observable<any> {
    return this._http.patch(
      `${AuthService.BASE_API_URL}/user/email/verification/uuid`,
      JSON.stringify(data)
    );
  }

  saveLeadRequest(data: any): Observable<any> {
    return this._http
      .post(`${AuthService.BASE_API_URL}/lead/register`, JSON.stringify(data))
      .pipe(map((res: any) => res.data));
  }

  allCourses(data: any): Observable<any> {
    return this._http
      .post(
        `${AuthService.BASE_API_URL}/product/trending/courses`,
        JSON.stringify(data)
      )
      .pipe(map((res: any) => res.data));
  }

  /**
   * TO-DO: move these to different services
   */

  getProductData(): Observable<any> {
    return this._http.get(`${AuthService.BASE_API_URL}/product/catalog`);
  }

  getChessbaseData(): Observable<any> {
    return this._http.get(`${AuthService.BASE_API_URL}/product/chessbase`);
  }

  validateCoupon(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/validate/coupon`,
      JSON.stringify(data)
    );
  }

  paymentCheckout(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/payment`,
      JSON.stringify(data)
    );
  }

  updateUserDetail(data: any): Observable<any> {
    return this._http.put(
      `${AuthService.BASE_API_URL}/user/profile/update`,
      JSON.stringify(data)
    );
  }

  getAllowedMenuList() {
    return this._http
      .get(`${AuthService.BASE_API_URL}/product/user/products`)
      .pipe(
        map((res) => {
          // console.log(res);
        })
      );
  }

  getDreamroomData(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/dreamroom`,
      JSON.stringify(data)
    );
  }

  getClassroomData() {
    return this._http.get(`${AuthService.BASE_API_URL}/product/classrooms`);
  }

  getLiveroomData() {
    return this._http.get(`${AuthService.BASE_API_URL}/product/liverooms`);
  }

  getCamproomData() {
    return this._http.get(`${AuthService.BASE_API_URL}/product/camproom`);
  }

  getUserProductType(userId: any) {
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/product_types`,
      JSON.stringify(userId)
    );
  }

  getPuzzleList(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/list/puzzle`,
      JSON.stringify(data)
    );
  }

  getPuzzleById(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/puzzles`,
      JSON.stringify(data)
    );
  }

  getPuzzleOfTheDay(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/puzzle/today`,
      JSON.stringify(data)
    );
  }

  savePuzzleOfTheDay_userResponse(data): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/user/puzzle/save_response`,
      JSON.stringify(data)
    );
  }

  getRegisterAsSchool(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/lead/school/registration`,
      JSON.stringify(data)
    );
  }

  getStackData(data: any): Observable<any> {
    return this._http.post(
      `${environment.auth_target_v2}/product/catalog`,
      JSON.stringify(data)
    );
  }

  getUpcomingUserDashboard(): Observable<any> {
    return this._http.get(
      `${AuthService.BASE_API_URL}/product/dashboard/upcoming`
    );
  }

  getProductDetailById(product: any): Observable<any> {
    return this._http.post(
      `${environment.auth_target_v2}/product/detailById`,
      JSON.stringify(product)
    );
  }

  getPriceByProductId(product: any) {
    return this._http.post(
      `${environment.auth_target_v2}/product/coupon/priceByProductId`,
      JSON.stringify(product)
    );
  }

  getAllActiveProducts(data: any): Observable<any> {
    return this._http.post(
      `${environment.auth_target_v2}/product/productList`,
      JSON.stringify(data)
    );
  }

  directRegisterLink(data: any) {
    return this._http.post(
      `${environment.auth_target_v2}/user/direct/paymentLink/registration`,
      JSON.stringify(data)
    );
  }

  controls(data: any) {
    return this._http.post(
      `${AuthService.BASE_API_URL}/user/event/controls`,
      JSON.stringify(data)
    );
  }

  forPayUDirectRegisterLink(data: any) {
    return this._http.post(
      `${environment.auth_target_v2}/user/payU/direct/paymentLink/registration`,
      JSON.stringify(data)
    );
  }

  availableProductForUser(data: any) {
    return this._http.post(
      `${environment.auth_target_v2}/product/available/products`,
      JSON.stringify(data)
    );
  }

  getAllProductByProductType(data: any) {
    return this._http.post(
      `${environment.auth_target_v2}/product/getAllProductsByProductType`,
      JSON.stringify(data)
    );
  }

  getAllComboProducts(data: any) {
    return this._http.post(
      `${environment.auth_target_v2}/product/getAllProductsByProductType`,
      JSON.stringify(data)
    );
  }

  getUserProduct(data: any) {
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/userProducts`,
      JSON.stringify(data)
    );
  }

  getUserDreamRoomEpisodeList(data: any) {
    data['query'] = 0;
    data['productId'] = 1120;
    data['time'] = 'future';
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/everyDayEpisodes`,
      JSON.stringify(data)
    );
  }

  getUserDreamRoomVideo(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/video/details`,
      JSON.stringify(data)
    );
  }

  isUserExistsWithDreamroom(data: any) {
    return this._http.post(
      `${AuthService.BASE_API_URL}/user/isUserExistsWithDreamroom`,
      JSON.stringify(data)
    );
  }

  isUserExistsWithEvent(data: any) {
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/verify/registered/event`,
      JSON.stringify(data)
    );
  }

  getSchoolDetails() {
    return this._http.get(
      `${AuthService.BASE_API_URL}/user/schoolDetailsBySchoolId`
    );
  }

  getScholarship(): Observable<any> {
    return this._http.get(
      `${AuthService.BASE_API_URL}/scholarship/getScholarships`
    );
  }

  requestScholarship(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/scholarship/requestScholarship`,
      JSON.stringify(data)
    );
  }

  getScholarshipById(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/scholarship/getScholarshipById`,
      JSON.stringify(data)
    );
  }

  getMentors(): Observable<any> {
    return this._http.get(`${AuthService.BASE_API_URL}/mentor/getMentors`);
  }

  requestMentor(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/mentor/requestMentor`,
      JSON.stringify(data)
    );
  }

  getMentorById(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/mentor/getMentorById`,
      JSON.stringify(data)
    );
  }

  verifyMobile(data: any) {
    return this._http
      .post(
        `${AuthService.BASE_API_URL}/user/mobile/verify`,
        JSON.stringify(data)
      )
      .pipe(
        tap((res: any) => {
          if (res.data.accesstoken) {
            this.setUser2LocalStorage(res.data.accesstoken);
          }
        })
      );
  }

  socialLogin(providerName: any, data: any) {
    return this._http
      .post(
        `${AuthService.BASE_API_URL}/user/${providerName}/login`,
        JSON.stringify(data)
      )
      .pipe(
        tap((res: any) => {
          if (res.data.accesstoken) {
            this.setUser2LocalStorage(res.data.accesstoken);
          }
        })
      );
  }

  updateMobile(data: any) {
    return this._http.patch(
      `${AuthService.BASE_API_URL}/user/update/mobile`,
      JSON.stringify(data)
    );
  }

  resendOTP(userId: any, typeOfRequest: any) {
    return this._http.get(
      `${AuthService.BASE_API_URL}/user/mobile/resend/otp/${userId}?service=${typeOfRequest}`
    );
  }

  logUserActivity(data: any) {
    return this._http.post(
      `${AuthService.BASE_API_URL}/user/create/log`,
      JSON.stringify(data)
    );
  }

  showInterest(data: any) {
    return this._http.post(
      `${AuthService.BASE_API_URL}/user/add/interests`,
      JSON.stringify(data)
    );
  }

  getWalletBalance() {
    return this._http.get(`${AuthService.BASE_API_URL}/user/wallet/balance`);
  }

  settWalletBalanceToLocalStorage() {
    this.getWalletBalance().subscribe((res: any) => {
      localStorage.setItem(
        'wallet_balance',
        res.data.wallet_points ? res.data.wallet_points : 0
      );
    });
  }

  getWalletLog(data: any) {
    return this._http.post(
      `${AuthService.BASE_API_URL}/user/wallet/log`,
      JSON.stringify(data)
    );
  }

  getPopUpData() {
    return this._http.get(
      `${AuthService.BASE_API_URL}/product/promotional/popup`
    );
  }

  getUserInterest(): Observable<any> {
    return this._http.get(`${AuthService.BASE_API_URL}/user/find/interests`);
  }

  getProductVideoLink(data: any) {
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/user/product`,
      JSON.stringify(data)
    );
  }

  getRecommendedProduct(data: any) {
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/recommended`,
      JSON.stringify(data)
    );
  }

  getNotification(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/notification/get`,
      JSON.stringify(data)
    );
  }

  getNotificationCount(): Observable<any> {
    return this._http.get(`${AuthService.BASE_API_URL}/notification/unseen`);
  }

  updateNotification(data: any): Observable<any> {
    return this._http.put(
      `${AuthService.BASE_API_URL}/notification/update`,
      JSON.stringify(data)
    );
  }

  getWorker(data: any): Observable<any> {
    return this._http.post(
      `https://testourwebsite.com/v1/api/notification/add/subscribers`,
      JSON.stringify(data)
    );
  }

  getOrders(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/order/details`,
      JSON.stringify(data)
    );
  }

  getStarRoomDescription(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/details`,
      JSON.stringify(data)
    );
  }

  getOrderHistory(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/order/history`,
      JSON.stringify(data)
    );
  }

  paymentVerificationStep(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/verify/purchase`,
      JSON.stringify(data)
    );
  }

  paymentLink(data: any): Observable<any> {
    return this._http.post(
      `${environment.auth_target_v2}/product/create/payment/link`,
      JSON.stringify(data)
    );
  }

  orderStatus(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/order/status`,
      JSON.stringify(data)
    );
  }

  downloadAssignment(data: any): Observable<any> {
    return this._http.post(
      `${AuthService.BASE_API_URL}/product/download/pgn`,
      JSON.stringify(data)
    );
  }

  // USE-PROOF APIs

  proofWatchVideo(productType: number, data: any) {
    switch (productType) {
      case 1: {
        // dreamroom
        return this._http.post(
          `https://webhook.proofapi.com/cw/NR4HkONvJ7McUYLr6enJv6eOQys2/-Ll_qRTL3xddSHnpeNzz`,
          JSON.stringify(data)
        );
      }
      case 3: {
        // liveroom
        return this._http.post(
          `https://webhook.proofapi.com/cw/NR4HkONvJ7McUYLr6enJv6eOQys2/-Ll_y9mZkyALrlJoTOu_`,
          JSON.stringify(data)
        );
      }
      case 2: {
        // classroom
        return this._http.post(
          `https://webhook.proofapi.com/cw/NR4HkONvJ7McUYLr6enJv6eOQys2/-Ll_yUdhTN9vi1f2sX1A`,
          JSON.stringify(data)
        );
      }
      case 6: {
        // camproom
        return this._http.post(
          `https://webhook.proofapi.com/cw/NR4HkONvJ7McUYLr6enJv6eOQys2/-Ll_ylJ8kZR_f08dTUmp`,
          JSON.stringify(data)
        );
      }
      case 11: {
        // event
        return this._http.post(``, JSON.stringify(data));
      }
      case 13: {
        // starroom
        return this._http.post(
          `https://webhook.proofapi.com/cw/NR4HkONvJ7McUYLr6enJv6eOQys2/-Ll_z3ZpWBZjc8-cuRHn`,
          JSON.stringify(data)
        );
      }
    }
  }

  // Recommendation APIs

  // recommendedProducts(data: any) {
  //   return this._http.post(
  //     `${environment.auth_target_v2}/product/recommended`,
  //     JSON.stringify(data)
  //   );
  // }

  getProductType(): Observable<any> {
    return this._http.get(
      `${environment.auth_target_v2}/product/getAllDistinctProductTypes`
    );
  }
}
