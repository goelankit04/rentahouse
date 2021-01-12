export class UserModel {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  password: string;
  shipping_address: any = {};
  permanent_address: any = {};

  constructor(user: any) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.mobile = user.mobile;
    this.password = user.password;
    // this.shipping_address.city = user.city;
    this.shipping_address.country = user.country;
    // this.permanent_address.city = user.city;
    this.permanent_address.country = user.country;
  }
}
