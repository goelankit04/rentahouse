import { Component, OnInit, HostBinding } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AmplitudeService } from "../../amplitude/amplitude.service";
import { events } from "../../amplitude/events";

@Component({
  selector: "app-top-review",
  templateUrl: "./top-review.component.html",
  styleUrls: ["./top-review.component.scss"]
})
export class TopReviewComponent implements OnInit {
  @HostBinding("class") TopReviewComponentClass = "app-top-review";
  product_id: any;
  review = [];
  dreamroom = [
    {
      name: "Shashini Puvi ",
      days: "25 days ago",
      img_src: "assets/product-highlight/shashini.png",
      review: `Lectures of nurtr's 'Dream Room' program which is mentored by GM RB Ramesh is very simple to understand and recollect at her age.  She is  always very eager to solve puzzles and apply the tactics explained in video's`
    },
    {
      name: "Pratik Tambi",
      days: "2 months ago",
      img_src: "assets/product-highlight/pratik.png",
      review: `The best part of Dream Room program is that in spite of living in such a small city like our, we can also have coaching from best coaches and no need to go anywhere plus the nurtr team created lecture in such a way that it becomes very easy to understand like by seeing their animation part, recap, important point in written form etc. You are the team who is helping us to make our dream true of becoming chess grandmaster without going to any other city only for chess coaching`
    },
    {
      name: "Syna Chopra",
      days: "18 days ago",
      img_src: "assets/product-highlight/syan.png",
      review: `Syna first registered on nurtr's platform on 4th April 2019. We have seen good progress in her game after enrolling in multiple programs of nurtr such as Dream Room, Chessgurukul & ChessHour. she is religiously watching these videos and has gained around 289 points in this year.`
    }
  ];

  chessDream = [
    {
      name: "Aditya Garg",
      days: " ",
      img_src: "assets/product-highlight/aditya.jpg",
      review: `nurtr dream room program is an excellent program, GM RB Ramesh is a very good mentor. Aditya has improved (his) middle and end game after joining nurtr platform and improved his thinking process.`
    },
    {
      name: "Shashini Puvi",
      days: "",
      img_src: "assets/product-highlight/shahini.jpg",
      review: `Lectures of nurtr's 'Dream Room' program, mentored by GM RB Ramesh are simple to understand and recollect at her age. Shashini is always eager to solve puzzles and apply tactics explained in the video.`
    },
    {
      name: "Stuti Rajesh Pai",
      days: "",
      img_src: "assets/product-highlight/stuti.jpg",
      review: `nurtr platform is really helpful to me as It improved my endgames & middle game which was a weakness. Now my positions, my games are a lot stronger. I learned new openings with new variations. I will definitely recommend this.`
    }
  ];

  chessHour = [
    {
      name: "Sahib Singh",
      img_src: "assets/product-highlight/sahib.png",
      review: `I have enrolled for Chess Hour program and have improved positional play, tactical play, attacking skills and have learned much more from the Grandmasters on nurtr's platform`
    },
    {
      name: "Syna Chopra",
      img_src: "assets/product-highlight/syan.png",
      review: `Syna first registered on nurtr's platform on 4th April 2019. We have seen good progress in her game after enrolling in multiple programs of nurtr such as Dream Room, Chessgurukul & ChessHour. she is religiously watching these videos and has gained around 289 points in this year.`
    },
    {
      name: "Gyaneshwar B",
      img_src: "assets/product-highlight/gyaneshwar.png",
      review: `In chess hour series I have learnt a lot, I have learnt many new aggressive Openings and  I used them against opponents from time to time as a surprise and I have got very good results. Also, I have learnt some of the typical pawn structures like IQP, Hanging pawns, Boleavsky hole structure and many more. I highly recommend this platform for everyone who is serious in chess and wants to improve.`
    }
  ];

  mmg = [
    {
      name: "Tarun Mateti",
      img_src: "assets/product-highlight/tarun.png",
      review: `Farrukh sir's classes are straight forward and delivers chess skills which players are often confused and stuck with. Personally I feel that he is one of the best mentors on nurtr.`
    },
    {
      name: "Prasoon Mathew",
      img_src: "assets/product-highlight/mathew.png",
      review: `I am very much impressed with GM Farrukh Amanotav sessions. The way he explains things is great. And the way he is communicating with the students is notable. He knows the exact mentality and mindset of the viewers. He gives enough time to calculate the variations. He is too gentle and shows great patience to listen to our queries and doubts.`
    },
    {
      name: "Vishrut Parekh",
      img_src: "assets/product-highlight/vishruth.png",
      review: `Farrukh sir's coaching style is very interactive. I like Farrukh sir's middle game idea. In endgame he is genius. His thought process is different then other coaches.`
    }
  ];

  constructor(
    private _activated: ActivatedRoute,
    private _amps: AmplitudeService
  ) { }

  ngOnInit() {
    this._activated.params.subscribe(params => {
      this.product_id = params.product_id;
      // console.log(this.product_id)
      if (this.product_id == 35) {
        this.review = this.dreamroom;
      } else if (this.product_id == 574) {
        this.review = this.chessHour;
      } else if (this.product_id == 573) {
        this.review = this.chessHour;
      } else if (this.product_id == 746) {
        this.review = this.mmg;
      } else if (this.product_id == 807) {
        this.review = this.chessDream;
      }
    });
  }

  slideRight() {
    const scroll = document.getElementById("scroll");
    scroll.scrollBy({ top: 0, left: -350, behavior: "smooth" });
  }

  slideLeft() {
    this._amps.setAmplitudeEvents(events.event_29, {
      product_id: this.product_id
    });
    const scroll = document.getElementById("scroll");
    scroll.scrollBy({ top: 0, left: 350, behavior: "smooth" });
  }
}
