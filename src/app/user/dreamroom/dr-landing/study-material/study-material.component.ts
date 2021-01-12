import { FlipBookUrlComponent } from './../../dr-functionality/flip-book-url/flip-book-url.component';
import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-study-material',
  templateUrl: './study-material.component.html'
})
export class StudyMaterialComponent implements OnInit {
  @HostBinding('class') studyMaterialComponentClass = 'app-study-material';

  studyFlipBook = [
    // {
    //   name: 'Chess and Art',
    //   url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/uhyv/index.html'
    // },
    {
      name: 'Chess and Longevity',
      url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/cvuu/index.html'
    },
    {
      name: 'Chess in Antarctica',
      url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/btdh/index.html'
    },
    {
      name: 'Chess Boxing',
      url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/wkho/index.html'
    },
    // {
    //   name: 'Chess in Different Languages',
    //   url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/gqjf/index.html'
    // },
    {
      name: 'Facts about RBR',
      url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/syno/index.html'
    },
    {
      name: 'Judit Polgar',
      url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/gqjf/index.html'
    },
    {
      name: 'Some Famous Rated Players',
      url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/ldvm/index.html'
    },
    {
      name: 'Pragg - The Wizard',
      url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/drao/index.html'
    },
    {
      name: 'Magnus Carlsen',
      url: 'https://s3.amazonaws.com/online.fliphtml5.com/rwmk/unfo/index.html'
    }
  ];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openFlipbookUrl(url: string) {
    const dialogRef = this.dialog.open(FlipBookUrlComponent, {
      width: '90%',
      height: '90%',
      autoFocus: false,
      data: {
        id: url
      }
    });
  }
}
