import { LoggedInUserModel } from './../../auth/model/logged-in-user.model';
import { AuthService } from './../../auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuNavListService {
  products: any = [];
  menuNavList = [
    {
      id: 0,
      name: 'Dashboard',
      BreadCrumbName: 'Dashboard',
      icon: 'dashboard',
      svg: '/assets/menu/dashboard.svg',
      // svg_active: '/assets/menu/dashboard_active.svg',
      url: `/user/dashboard/${localStorage.getItem('first_name')}`,
      is_active: true,
      product_type: -1,
      className: 'show',
    },
    {
      id: 1,
      name: 'My Dream Room',
      BreadCrumbName: 'My Dream Room',
      icon: 'cloud',
      svg: '/assets/menu/dreamroom.svg',
      // svg_active: '/assets/menu/dreamroom_active.svg',
      url: `/user/dreamroom/dr-level-selector`,
      is_active: false,
      product_type: 1,
      className: 'show',
    },
    {
      id: 2,
      name: 'My Star Room',
      BreadCrumbName: 'My Star Room',
      icon: 'cloud',
      svg: '/assets/menu/starroom.svg',
      // svg_active: '/assets/menu/dreamroom_active.svg',
      url: `/user/star-room`,
      is_active: false,
      product_type: 1,
      className: 'show',
    },
    {
      id: 3,
      name: 'My Class Room',
      BreadCrumbName: 'My Class Room',
      icon: 'class',
      svg: '/assets/menu/classroom.svg',
      // svg_active: '/assets/menu/classroom_active.svg',
      url: `/user/class-room/${localStorage.getItem('first_name')}`,
      is_active: false,
      product_type: 2,
      className: 'show',
    },
    {
      id: 4,
      name: 'My Live Room',
      BreadCrumbName: 'My Live Room',
      icon: 'subscriptions',
      svg: '/assets/menu/liveroom.svg',
      // svg_active: '/assets/menu/liveroom_active.svg',
      url: `/user/live-room/${localStorage.getItem('first_name')}`,
      is_active: false,
      product_type: 3,
      className: 'show',
    },
    {
      id: 5,
      name: 'My Camp Room',
      BreadCrumbName: 'My Camp Room',
      icon: 'account_balance',
      svg: '/assets/menu/camp_room.svg',
      // svg_active: '/assets/menu/camp_room.svg',
      url: `/user/camp-room/${localStorage.getItem('first_name')}`,
      is_active: false,
      product_type: 6,
      className: 'show',
    },
    {
      id: 6,
      name: 'My 121 Room',
      BreadCrumbName: 'My 121 Room',
      icon: 'account_balance',
      svg: '/assets/menu/121_session.svg',
      // svg_active: '/assets/menu/121_session.svg',
      url: `/user/121-room/${localStorage.getItem('first_name')}`,
      is_active: false,
      product_type: 6,
      className: 'show',
    },
    {
      id: 7,
      name: 'My Profile',
      BreadCrumbName: 'My Profile',
      icon: 'account_circle',
      svg: '/assets/menu/my_profile.svg',
      // svg_active: '/assets/menu/my_profile_active.svg',
      url: `/user/profile/${localStorage.getItem('first_name')}/0`,
      is_active: true,
      product_type: -1,
      className: 'show',
    },
    {
      id: 8,
      name: 'My Wallet',
      BreadCrumbName: 'My Profile',
      icon: '',
      svg: '',
      svg_active: '',
      url: `/user/profile/${localStorage.getItem('first_name')}/2`,
      is_active: true,
      product_type: -1,
      className: 'show',
    },
    {
      id: 9,
      name: 'Notification',
      BreadCrumbName: 'Notification',
      icon: '',
      url: `/user/notification/${localStorage.getItem('first_name')}`,
      svg: '',
      is_active: false,
      product_type: -1,
      className: 'show',
    },
    {
      id: 10,
      name: 'My Orders',
      BreadCrumbName: 'My Profile',
      icon: '',
      url: `/user/profile/${localStorage.getItem('first_name')}/3`,
      svg: '/assets/menu/cart.svg',
      is_active: false,
      product_type: -1,
      className: 'show',
    },
    // {
    //   id: 11,
    //   name: 'Live Stream',
    //   BreadCrumbName: 'Live Stream',
    //   icon: 'account_balance',
    //   url: `/user/live-stream`,
    //   svg: '/assets/menu/cart.svg',
    //   is_active: false,
    //   product_type: 17,
    //   className: 'show',
    // },
    {
      id: 11,
      name: 'Logout',
      icon: 'exit_to_app',
      svg: '/assets/menu/logout.svg',
      // svg_active: '/assets/menu/logout_active.svg',
      className: 'show',
    },
  ];

  constructor(private _authService: AuthService) { }

  getMenuNavList() {
    return this.menuNavList;
  }

  getMenuById(id: number) {
    const menuItem = this.menuNavList.filter(item => item.id === id);
    return menuItem[0];
  }

  getProductArrayLength() {
    return this.products.length;
  }

  setValidProductForUser(product: any) {
    product.length === 0 ? this.products.push(-1) : (this.products = product);
  }

  getValidProductForUser(id: number): boolean {
    if (this.products.length === 0) {
      const productList: any = [];
      this._authService
        .getUserProductType({ user_id: localStorage.getItem('id') })
        .subscribe(
          (res: any) => {
            for (
              let i = 0;
              i < res.data.product_types.productTypes.length;
              i++
            ) {
              productList.push(
                res.data.product_types.productTypes[i].product_type
              );
            }
            this.setValidProductForUser(productList);

            // searching for the product
            for (const product of this.products) {
              if (Number(product) === id) {
                return true;
              }
            }
            return false;
          },
          (err: any) => { }
        );
    } else {
      for (const product of this.products) {
        if (Number(product) === id) {
          return true;
        }
      }
      return false;
    }
  }

  getProductTypes() {
    // const product: any = [];
    // this._authService.getUserProductType().subscribe(
    //   (res: any) => {
    //     const testArray = res.data.product_types.productTypes;
    //     if (testArray.Length === 0) {
    //       product.push(-1);
    //     } else {
    //       for (let i = 0; i < testArray.length; i++) {
    //         product.push(testArray[i].product_type);
    //       }
    //     }
    //     this.setValidProductForUser(product);
    //   },
    //   (err: any) => {}
    // );
  }
}
