// import { FlipBookUrlComponent } from './../../dr-functionality/flip-book-url/flip-book-url.component';
import { Component, OnInit, HostBinding } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "../../../../auth/auth.service";
@Component({
  selector: "app-study-material",
  templateUrl: "./study-material.component.html",
})
export class StudyMaterialComponent implements OnInit {
  @HostBinding("class") studyMaterialComponentClass = "app-study-material";
  level_id: Number;
  product: any;
  extraProductInfo: any;
  // studyFlipBook = [

  //   {
  //     name: 'Chess and Longevity',
  //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/cvuu/index.html'
  //   },
  //   {
  //     name: 'Chess in Antarctica',
  //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/btdh/index.html'
  //   },
  //   {
  //     name: 'Chess Boxing',
  //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/wkho/index.html'
  //   },
  //   // {
  //   //   name: 'Chess in Different Languages',
  //   //   url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/gqjf/index.html'
  //   // },
  //   {
  //     name: 'Facts about RBR',
  //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/syno/index.html'
  //   },
  //   {
  //     name: 'Judit Polgar',
  //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/gqjf/index.html'
  //   },
  //   {
  //     name: 'Some Famous Rated Players',
  //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/ldvm/index.html'
  //   },
  //   {
  //     name: 'Pragg - The Wizard',
  //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/drao/index.html'
  //   },
  //   {
  //     name: 'Magnus Carlsen',
  //     url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/unfo/index.html'
  //   }
  // ];

  constructor(private dialog: MatDialog, private _authService: AuthService) {}

  ngOnInit() {
    this.level_id = Number(localStorage.getItem("level_id"));
    const data = {
      productId: this.level_id,
    };

    this._authService.getStarRoomDescription(data).subscribe((res: any) => {
      // console.log(res);
      this.product = res.data.productDetails.product_cource_desc;
      this.extraProductInfo = res.data.productDetails.extra_product_info;
    });
  }

  // openFlipbookUrl(url: string) {
  //   const dialogRef = this.dialog.open(FlipBookUrlComponent, {
  //     width: '90%',
  //     height: '90%',
  //     autoFocus: false,
  //     data: {
  //       id: url
  //     }
  //   });
  // }
}
