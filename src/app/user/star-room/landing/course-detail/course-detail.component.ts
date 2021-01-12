import { Component, OnInit, HostBinding, Input } from "@angular/core";
import { AuthService } from "../../../../auth/auth.service";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.scss"],
})
export class CourseDetailComponent implements OnInit {
  @HostBinding("class") courseDetailComponentClass = "app-course-detail";
  level_id: Number;
  toggle = [false, false, false];
  heading = ["Approximate Hours of Episode", "Tournament Format"];
  product: any;
  message: any;
  beginnerList = [
    `Forcing Moves`,
    `Double Attack and Defence`,
    `Tactical Themes`,
    `Comprehensive discussions with other renowned trainers`,
    `Thematic Sacrifices`,
    `Attacking of castled & uncastled King`,
    `Opening principals for Beginners`,
    `Basic Endgames`,
  ];

  intermediateList = [
    `Forcing the moves on your opponent`,
    `Prophylaxis`,
    `Pawn Sacrifice`,
    `Drawback Principle`,
    `Comprehensive psychological issues discussed with parents`,
    `Pawn Majority`,
    `The Bishop & The Pawn Ending`,
    `Double Bishop vs Bishop & Pawn Ending`,
    `Improving Pieces`,
    `The Knight & The Pawn Endings`,
    `Attacking the Kings`,
    `Tournament preparations`,
    `How champions prepare for their game`,
    `common mistakes in calculation studies`,
    `Initiatives`,
    `Understanding the weak squares`,
    `Centralisation`,
    `King Activity`,
    `Pawn Breaks`,
    `Building an opening repertoire`,
    `Maintaining tension for the opponent`,
    `The Intermediate Moves`,
    `Preparation at home(before & after the game)`,
    `Handling Pawns`,
    `Solving Studies`,
    `Comprehensive discussions on psychological and players issues`,
    `The maneuver`,
    `Playing Bishop Vs Knight`,
    `Queen and Pawn Endings`,
    `Exchanging Pieces`,
    `Playing on colors`,
    `Improving & exchanging the pieces`,
    `The Bad Bishop`,
    `Knight vs Bishop`,
    `Rook & Pawn Endings`,
    `Bishop & Pawn Endings`,
    `Understanding complex calculations`,
    `Common mistakes by young players`,
    `Positional Play`,
  ];

  advanceList = [
    `Advanced complex calculations`,
    `The principal of two weakness`,
    `Knight vs Bishop Endgame`,
    `Improving the pieces`,
    `Blindfold studies`,
    `Understanding psychologies of great players with great coaches`,
    `Playing with the isolated queen pawn & isolated pawn`,
    `Chess studies with champions`,
    `Complex calculations`,
    `Passed Pawn`,
    `Prophylaxis(Advanced level)`,
    `The art of active defense`,
    `Endgame(Knight vs Bishop)`,
    `Analysing Pragg: World's youngest International Master`,
    `Grand Masters game analysis`,
    `Rook & Pawn Endings`,
    `Deconstruction of puzzles`,
    `Advanced Endgame techniques`,
  ];

  constructor(private _authService: AuthService) {}

  ngOnInit() {
    this.level_id = Number(localStorage.getItem("level_id"));
    // console.log(typeof(this.level_id))
    const data = {
      productId: this.level_id,
    };

    this._authService.getStarRoomDescription(data).subscribe((res: any) => {
      // console.log(res);
      this.product = res.data.productDetails.product_cource_faculty;
    });
  }

  getInitialList(contentList: any, limit: number) {
    const shortList = [];
    for (let i = 0; i < limit; i++) {
      shortList[i] = contentList[i];
    }
    return shortList;
  }

  getRestList(contentList: any, offset: number) {
    const restList = [];
    let index = 0;
    for (let i = --offset; i < contentList.length; i++) {
      restList[index++] = contentList[i];
    }
    return restList;
  }
}
