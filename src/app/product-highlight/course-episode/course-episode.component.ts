import { Component, OnInit, HostBinding } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as _ from "lodash";
import { ScrollToService } from "ng2-scroll-to-el";
import { AmplitudeService } from "../../amplitude/amplitude.service";
import { events } from "../../amplitude/events";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-course-episode",
  templateUrl: "./course-episode.component.html",
  styleUrls: ["./course-episode.component.scss"]
})
export class CourseEpisodeComponent implements OnInit {
  @HostBinding("class") CourseEpisodeComponentClass = "app-course-episode";
  product_id: any;
  selectedIdx = 0;
  productList = [];
  currentProductList = [];
  novc = 0; //no of times view more clicked

  clone: any;
  level = [
    { name: "Beginner (40)", rating: "<1100" },
    { name: "Intermediate (91)", rating: "1100-2000" },
    { name: "Advanced (42)", rating: "2000+" }
  ];

  text = "View More";

  super64 = [
    {
      NAME:
        "Daily Homework Support - Exhaustive homework regime, assignment submission, puzzle review and a lot more    "
    },
    {
      NAME:
        "Live Session Support - Interactive sessions, coupled with QnA opportunities with GMs, IMs, and FMs  "
    },
    {
      NAME:
        "Personalised Session Support - Engaging sessions with a limited set of students, selected on basis of common areas of improvement and learning need."
    },
    {
      NAME:
        "Super Personalised Session Support - 1-1 LIVE interactions with GMs, IMs and FMs for super customised training delivery"
    },
    {
      NAME:
        "Playing Buddy Support - Opportunity to play against higher rated player, engage, analyse, and improve the skills  "
    },
    {
      NAME:
        "Super Playing Buddy Support - Play against Grandmasters, identify your weak areas, simulate tournaments, and lot more  "
    },
    {
      NAME:
        "Real-time Tournament Support - Have a GM or IM have your back, while you compete in events. Get personalised analysis, and support during tournaments "
    },
    {
      NAME:
        "Database Content Support - Receive updated game database, its analysis and tools to optimize your training using the pool of content."
    },
    {
      NAME: `Psychological Assesment & Support - Keep stress and nerves in check; receive best psychological and life-skill guidance to ensure that you don't burn yourself out during high pressure scenarios.`
    },
    {
      NAME:
        "nurtr All Access Pass - Get 1-year access to all Star Room, Camp Room, LIVE Room, and Dream Room on nurtr.com"
    }
  ];

  mindset = [
    {
      id: 1,
      episode_id: 1,
      NAME: "Opening Preparation - The Mindset and Beyond"
    },
    {
      id: 2,
      episode_id: 2,
      NAME: "The Right Reaction - Surprises in Opening"
    },
    {
      id: 3,
      episode_id: 3,
      NAME: "Punishment or Penance"
    },
    {
      id: 4,
      episode_id: 4,
      NAME: "The Middlegame King Attack"
    },
    {
      id: 5,
      episode_id: 5,
      NAME: "The Centre-all Fight"
    },
    {
      id: 6,
      episode_id: 6,
      NAME: "Demystifying the Complexities"
    },
    {
      id: 7,
      episode_id: 7,
      NAME: "The Conversion - When Endgames Offer Lemons"
    },
    {
      id: 8,
      episode_id: 8,
      NAME: "The Endgame Advantage"
    },
    {
      id: 9,
      episode_id: 9,
      NAME: "Outplay or Play Out"
    },
    {
      id: 10,
      episode_id: 10,
      NAME: "High Rating Opponent - Psychology Decoded"
    }
  ];

  opening_program = [
    {
      id: 1,
      episode_id: 1,
      NAME: "Berlin Main Line"
    },
    {
      id: 2,
      episode_id: 2,
      NAME: "Berlin 4.d3 Variation"
    },
    {
      id: 3,
      episode_id: 3,
      NAME: "Breyer Variation"
    },
    {
      id: 4,
      episode_id: 4,
      NAME: "Karpov-Zaitsev Variation"
    },
    {
      id: 5,
      episode_id: 5,
      NAME: "Chigorin Variation"
    },
    {
      id: 6,
      episode_id: 6,
      NAME: "Open Ruy Lopez"
    },
    {
      id: 7,
      episode_id: 7,
      NAME: "Archangelsky Variation"
    },
    {
      id: 8,
      episode_id: 8,
      NAME: "Ruy Lopez d3 Variation"
    },
    {
      id: 9,
      episode_id: 9,
      NAME: "Ruy Lopez Main Line Without h3 (9.d4)"
    },
    {
      id: 10,
      episode_id: 10,
      NAME: "Exchanged Ruy Lopez"
    },
    {
      id: 11,
      episode_id: 11,
      NAME: "London Series 1) Fianketto against London"
    },
    {
      id: 12,
      episode_id: 12,
      NAME:
        "London System: Variation with d5 & e6 and without Fianchetto Bishop"
    },
    {
      id: 13,
      episode_id: 13,
      NAME: "Nf6, e6 Vs London System"
    },
    {
      id: 14,
      episode_id: 14,
      NAME: "Sicilian Side Lines"
    },
    {
      id: 15,
      episode_id: 15,
      NAME: "Alapin Variation (Sicilian)"
    },
    {
      id: 16,
      episode_id: 16,
      NAME: "1.e4 c5 2.Nc3 d6 3.d4 and Grand Prix"
    },
    {
      id: 17,
      episode_id: 17,
      NAME: "Sicilian Sveshnikov 11.c3 in Main Line"
    },
    {
      id: 18,
      episode_id: 18,
      NAME: "Sicilian Sveshnikov 11.c4 in Main Line"
    },
    {
      id: 19,
      episode_id: 19,
      NAME: "Sicilian Sveshnikov 7.d5"
    },
    {
      id: 20,
      episode_id: 20,
      NAME: "Sicilian Rossolimo 3...g6"
    },
    {
      id: 21,
      episode_id: 21,
      NAME: "Sicilian Rossolimo 3...e6"
    },
    {
      id: 22,
      episode_id: 22,
      NAME: "Sicilian Rossolimo 3...d6 and 3...Nf6"
    },
    {
      id: 23,
      episode_id: 23,
      NAME: "Sicilian Dragon 6.Be2"
    },
    {
      id: 24,
      episode_id: 24,
      NAME: "Sicilian Dragon Main Line With Bc4"
    },
    {
      id: 25,
      episode_id: 25,
      NAME: "Sicilian Dragon Main Line Without Bc5"
    },
    {
      id: 26,
      episode_id: 26,
      NAME: "Sicilian Accelerated Dragon 5.c4"
    },
    {
      id: 27,
      episode_id: 27,
      NAME: "Sicilian Accelerated Dragon 5.Nc3"
    },
    {
      id: 28,
      episode_id: 28,
      NAME: "Kalashnikov"
    },
    {
      id: 29,
      episode_id: 29,
      NAME: "Kan 5.c4 and 5.Nc3"
    },
    {
      id: 30,
      episode_id: 30,
      NAME: "Kan 5. Bd3"
    },
    {
      id: 31,
      episode_id: 31,
      NAME: "Sicilian Najdorf Rare 6th Moves"
    },
    {
      id: 32,
      episode_id: 32,
      NAME: "Sicilian Najdorf 6.Bg5"
    },
    {
      id: 33,
      episode_id: 33,
      NAME: "Sicilian Najdorf 6.Be3"
    },
    {
      id: 34,
      episode_id: 34,
      NAME: "Sicilian Najdorf 6.h3"
    },
    {
      id: 35,
      episode_id: 35,
      NAME: "Sicilian Najdorf 6.Be2"
    },
    {
      id: 36,
      episode_id: 36,
      NAME: "Sicilian Najdorf 6.Bc4"
    },
    {
      id: 37,
      episode_id: 37,
      NAME: "Italian 3...Nf6"
    },
    {
      id: 38,
      episode_id: 38,
      NAME: "Italian 4.c3 5.d4 Modern Lines and Evans"
    },
    {
      id: 39,
      episode_id: 39,
      NAME: "Italian 3...Bc5 (Part 1)"
    },
    {
      id: 40,
      episode_id: 40,
      NAME: "Italian 3...Bc5 (Part 2)"
    },
    {
      id: 41,
      episode_id: 41,
      NAME: "Practice With Grandmaster"
    },
    {
      id: 42,
      episode_id: 42,
      NAME: "Practice With Grandmaster"
    },
    {
      id: 43,
      episode_id: 43,
      NAME: "Practice With Grandmaster"
    },
    {
      id: 44,
      episode_id: 44,
      NAME: "Practice With Grandmaster"
    },
    {
      id: 45,
      episode_id: 45,
      NAME: "Practice With Grandmaster"
    },
    {
      id: 46,
      episode_id: 46,
      NAME: "Practice With Grandmaster"
    },
    {
      id: 47,
      episode_id: 47,
      NAME: "Practice With Grandmaster"
    },
    {
      id: 48,
      episode_id: 48,
      NAME: "Practice With Grandmaster"
    },
    {
      id: 49,
      episode_id: 49,
      NAME: "Practice With Grandmaster"
    },
    {
      id: 50,
      episode_id: 50,
      NAME: "Practice With Grandmaster"
    },
    {
      id: 51,
      episode_id: 51,
      NAME: "Practice With Grandmaster"
    },
    {
      id: 52,
      episode_id: 52,
      NAME: "Practice With Grandmaster"
    }
  ];

  chessHour = [
    {
      NAME: "GM Konstantin Landa",
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/star_room/GM+Konstantin+Landa.png">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
            Russian GM with a peak rating of 2678 is a senior FIDE trainer, online commentator of 2011 World Cup, and has authored many chess books and magazines. He is the coach of Alexandra Kosteniuk; Russian GM and former Women’s World Chess Champion, Arkadi
            </p>
          </div>
        `
      )
    },
    {
      NAME: "GM Farrukh Amonatov",
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/star_room/GM+Farrukh+Amonatov.png">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
            Peak rating of 2650, coach of the Youth Russian team and currently working with many students from Russia, India, Kazakhstan, USA and many other countries. Winner of Asian Under-16 Championship, Agzamov Memorial, Eurasian Blitz Cup of the President of Kazakhstan, Mumbai Mayor’s Cup 2018, Moscow Open. Competed in FIDE World Cup in 2005 & 2009.
            </p>
          </div>
        `
      )
    },
    {
      NAME: "GM Michal Krasenkow",
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/star_room/GM+Michal+Krasenkow.png">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
            Former world top 10 chess player with Peak rating of 2702. He's a FIDE Senior Trainer & national coach of Poland. Author of chess books “The Open Spanish” (1995), “The Sveshnikov Sicilian” (1996) and “Finding Chess Jewels” (2013). He has been coach of national teams, young prodigies, including many GMs, and occasionally coached top players including Viswanathan Anand.
            </p>
          </div>
        `
      )
    },
    {
      NAME: "GM Alex Yermolinsky",
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/star_room/GM+Alex+Yermolinsky.png">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
            American GM with Peak rating 2660. 2-time U.S. champion, Won the World Open in Philadelphia 3 times; in 1993, 1995 and 1996. In 2001 he won the American Continental Championship in Cali, Colombia.
            </p>
          </div>
        `
      )
    },
    {
      NAME: "GM Maxim Turov",
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/star_room/GM+Maxim+Turov.png">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
            Russian GM with Peak rating 2667. Participated in 1st Children's Chess Olympiad, held in Linares in 1993, as part of Russia "A" team, which won the gold medal. Won the Open Dutch Championship in Dieren in 2005 & 2011. In 2010, he won the Chennai Open Tournament. Won various other National and International Chess Tournaments.
            </p>
          </div>
        `
      )
    },
    {
      NAME: "GM Marian Petrov",
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/star_room/GM+Marian+Petrov.png">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
            Bulgarian GM with Peak rating 2549, FIDE Trainer, he has coached the team of Wales at the 2016 Olympiad in Baku and 2018 in Batumi, Bulgarian Champion of 2002 and 2017. He is also the winner of many Open tournaments like Le Touquet, Thessaloniki Open, Vienna Chess Open, South Wales International Open and has represented his country in the 2002 Chess Olympiad in Bled, Slovenia.
            </p>
          </div>
        `
      )
    },
    {
      NAME: "GM Krasimir Rusev",
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/star_room/GM+Krasimir+Ivanov+Rusev.png">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
            Bulgarian GM with Peak rating 2563, he worked with the Super GM Ivan Cheparinov (2710 rated player) for the World Chess Cup, produced some of the best talents like 2012 European Youth Chess Champion U-8, FM Tsvetan Stoyanov and helped Nurgyul Salimova during the World Chess Championship in U-12 (won the Gold), Valentin Mitev ( Bulgarian National Champion U-14), Aiden Zhou (shared the 6th-12th place in the WYCC in Brazil 2017) and so on. Winner of many strong Chess tournaments and a member of the Bulgarian National Chess team.
            </p>
          </div>
        `
      )
    },
    {
      NAME: "GM Evegeniy Solozhenkin",
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/liveroom/Evgeniy+Solozhenkin_2.png">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
            Russian GM & a FIDE Senior Trainer with Peak rating 2528. Winner of 59th Leningrad championship in 1986. Won the Colossal Cappelle-la-Grande Open, France in 1993, where 19 GMs and 61 IMs participated in the tournament. 2-time winner of Saint Petersburg Championship. Actively coaching many budding chess players.
            </p>
          </div>
        `
      )
    },
    {
      NAME: "GM Nikola Nestorovic",
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/star_room/Nikola_1.jpg">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
            Peak rating 2516, FIDE Senior Trainer. Secured 2nd place in the Serbian National Championship, drew with GM Rapport (2730) and participated in the Hungarian Chess league. His students have won many gold medals in Serbia (in the Age group category) and the women team coached by him participated in the 1st league of Serbia (Women category).
            </p>
          </div>
        `
      )
    },
    {
      NAME: "GM Andres Felipe",
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/star_room/GM+Andres+Felipe+Gallego+Alcaraz.png">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
            Peak rating - 2512, Member of Colombian National team at the Chess Olympiad 2018, National champion in Rapid category, National champion in U-20, U-18 and U-16, Champion of several open championships in Colombia, Winner of Open Badalona-Espana and Ferdowsi Cup, Iran.
            </p>
          </div>
        `
      )
    },
    {
      NAME: "GM Adam Tukhayev",
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/liveroom/clipboard-image+(4).png">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
            Ukrainian Grandmaster with Peak Rating - 2575, attained his GM Title in 2007. Winner of many national and International chess tournament including 2nd IIFL Wealth International, 9th Chennai Open, participated in FIDE World Rapid Championship 2018 where he defeated Magnus Carlsen in Round 1
            </p>
          </div>
        `
      )
    },
    {
      NAME: "GM Mikhail Mozharov",
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/liveroom/clipboard-image+(6)_clipped_rev_1.png">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
            Russian GM with Peak rating 2573. He has won many open tournament including Aeroflot open 2018 - B (Russia), Platya D'Aro open (Spain) 2016 & Shared 1st position in many Open tournamnets such as: Kolkata Open (2013), Benasque Open (2014), Chennai Open (2015) and won many other national & international tournaments. 
            </p>
          </div>
        `
      )
    }
  ];

  chessCombo = [
    {
      NAME: "Advanced GM Opening Preparation Program",
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/Boris_Avrukh_7.jpg">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
GM Boris Avrukh is coming back with the new 'Advanced Course' on 'GM Opening Preparation Program'. This course will build upon the learnings of the previous 52-Week course by GM Boris with much deeper concepts and intensive practice session. The program will include 60 hours of LIVE & Interactive classes by GM Boris Avrukh with 18 hours of Practice classes by GM coaches.            </p>
          </div>
        `
      )
    },
    {
      NAME: "Mastering Middle Games' 52-Week Program",
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/star_room/GM+Farrukh+Amonatov.png">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
In this 52-week program, GM Farrukh Amonatov delivers structured content around middle games and how to use an advantage in middlegames to hone your chess skills. Each weekly session is supplemented with homework, puzzles, and practice materials to corroborate the learning.
          </div>
        `
      )
    },
    {
      NAME: `The Legend of 'Moro'`,
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/165754_1802694148028_1126599_n.jpg">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
The Legend of “Moro” is the first-ever structured live online course by former world No 2 and one of the most gifted chess players of his generation. This is program is a herculean attempt from the Grandmaster to help students develop a deep understanding on what gave him an unusual edge as a player and how can young kids can benefit from his knowledge and understanding of the game in their journey to become future grandmasters, world champions or strong chess players.
          </div>
        `
      )
    },
    {
      NAME: `The Grand Master Mindset`,
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/star_room/GM+Marian+Petrov.png">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
The Grand Master Mindset program focuses on Openings, Middlegame, Endgame & Psychology of chess, where you will learn how Grandmasters think & watch their playing strategies be decoded and simplified for you to understand. In this course GM Marian Petrov will help you to think like a Grandmaster & eventually help you in becoming a Grandmaster!
          </div>
        `
      )
    },
    {
      NAME: `CHESSHOUR Annual Subscription - Series A or B`,
      detail: this.sanitizer.bypassSecurityTrustHtml(
        `
          <div class=" col-md-2
 d-flex ">
            <img class="align-self-baseline mw-100" style="    width: 150px;object-fit:cover;
    height: 90px;
    border-radius: 5px;
" src="https://s3.ap-south-1.amazonaws.com/nurtr.com/Group+1.png">
          </div>
          <div class="col-md-10">
            <p style="font-size: 16px; color: #13131a;">
The course is designed to provide regular and structured training to the subscribers. A total of 10+ different Grandmaster coaches will provide LIVE & Interactive, intensive training sessions. 7 sessions will be conducted by the GM coaches each week which includes 2 dedicated puzzles solving sessions on Saturday & Sunday. A total of 365 high impact sessions will be conducted and subscribers will be eligible to get a 1-year recording of each session for repeated viewing.          </div>
        `
      )
    }
  ];

  cricket = [
    {
      NAME: "Batting: Pre-Shot Routine"
    },
    {
      NAME: "Batting: Shot Selection"
    },
    {
      NAME: "Bowling: Fundamentals of Spin"
    },
    {
      NAME: "Bowling: Mental Framework "
    },
    {
      NAME: "Fielding: Fielding Drills"
    }
  ];

  dreamroom_beginner = [
    {
      id: 1,
      episode_id: 1,
      NAME: "The Introduction",
      duration: "10:12"
    },
    {
      id: 2,
      episode_id: 1,
      NAME: "First Thing First",
      duration: "08:28"
    },
    {
      id: 3,
      episode_id: 2,
      NAME: "Moving the Pieces",
      duration: "08:12"
    },
    {
      id: 4,
      episode_id: 3,
      NAME: "Pawns & Pawns",
      duration: "07:57"
    },
    {
      id: 5,
      episode_id: 4,
      NAME: "Castling & The Illegal Moves",
      duration: "04:47"
    },
    {
      id: 6,
      episode_id: 5,
      NAME: "The Algebraic Notations & The Chess Clock",
      duration: "05:54"
    },
    {
      id: 7,
      episode_id: 6,
      NAME: "Discussions with Parents: Part 1",
      duration: "13:30"
    },
    {
      id: 8,
      episode_id: 7,
      NAME: "3 Stages of Chess",
      duration: "03:40"
    },
    {
      id: 9,
      episode_id: 8,
      NAME: "The Attack",
      duration: "07:41"
    },
    {
      id: 10,
      episode_id: 9,
      NAME: "The Check",
      duration: "07:35"
    },
    {
      id: 11,
      episode_id: 10,
      NAME: "Introduction to Defence",
      duration: "04:38"
    },
    {
      id: 12,
      episode_id: 11,
      NAME: "Introduction to Capture",
      duration: "05:01"
    },
    {
      id: 13,
      episode_id: 12,
      NAME: "Checkmate & Stalemate",
      duration: "03:59"
    },
    {
      id: 14,
      episode_id: 13,
      NAME: "The Basic Checkmates",
      duration: "09:33"
    },
    {
      id: 15,
      episode_id: 14,
      NAME: "1 or 2 Moves Checkmates",
      duration: "05:02"
    },
    {
      id: 16,
      episode_id: 15,
      NAME: "Discussions with Parents  : Part 2",
      duration: "09:47"
    },
    {
      id: 17,
      episode_id: 16,
      NAME: "Different types of Draws",
      duration: "04:16"
    },
    {
      id: 18,
      episode_id: 17,
      NAME: "Forcing the Moves",
      duration: "11:35"
    },
    {
      id: 19,
      episode_id: 18,
      NAME: "Gain of Material",
      duration: "06:34"
    },
    {
      id: 20,
      episode_id: 19,
      NAME: "Double Attack & Defence",
      duration: "06:22"
    },
    {
      id: 21,
      episode_id: 20,
      NAME: "Discovered Attack, Discovered Check & Double Check",
      duration: "06:13"
    },
    {
      id: 22,
      episode_id: 21,
      NAME: "Discussions with Mental Trainer: Part 1",
      duration: "05:55"
    },
    {
      id: 23,
      episode_id: 22,
      NAME: "Tactical Theme Part 1: Pin",
      duration: "09:11"
    },
    {
      id: 24,
      episode_id: 23,
      NAME: "Tactical Theme Part 2: Skewer",
      duration: "05:30"
    },
    {
      id: 25,
      episode_id: 24,
      NAME: "Tactical Theme Part 3: Decoy & Deflection",
      duration: "10:39"
    },
    {
      id: 26,
      episode_id: 25,
      NAME: "Tactical Theme Part 4: Clearance",
      duration: "07:40"
    },
    {
      id: 27,
      episode_id: 26,
      NAME: "Tactical Theme Part 5: Fork",
      duration: "06:48"
    },
    {
      id: 28,
      episode_id: 27,
      NAME: "Tactical Theme Part 6: Overloading",
      duration: "08:19"
    },
    {
      id: 29,
      episode_id: 28,
      NAME: "Tactical Theme Part 7: Back Rank Mate",
      duration: "08:40"
    },
    {
      id: 30,
      episode_id: 29,
      NAME: "Discussions with Mental Trainer: Part 2",
      duration: "09:59"
    },
    {
      id: 31,
      episode_id: 30,
      NAME: "Thematic Sacrifices Part 1: Bh7",
      duration: "09:39"
    },
    {
      id: 32,
      episode_id: 31,
      NAME: "Thematic sacrifice - Part 2: Nf7",
      duration: "04:14"
    },
    {
      id: 33,
      episode_id: 32,
      NAME: "Thematic Sacrifices Part 3: Ne6",
      duration: "10:54"
    },
    {
      id: 34,
      episode_id: 33,
      NAME: "Thematic Sacrifices Part 4: Bh6",
      duration: "08:54"
    },
    {
      id: 35,
      episode_id: 34,
      NAME: "Attacking an Uncastled King",
      duration: "16:04"
    },
    {
      id: 171,
      episode_id: 35,
      NAME: "Attacking a Castled King",
      duration: "06:06"
    },
    {
      id: 172,
      episode_id: 36,
      NAME: "Discussions with Mental Trainer: Part 3",
      duration: "08:49"
    },
    {
      id: 173,
      episode_id: 37,
      NAME: "Opening Principle Part 1",
      duration: "11:35"
    },
    {
      id: 174,
      episode_id: 38,
      NAME: "Opening Principle Part 2",
      duration: "11:19"
    },
    {
      id: 637,
      episode_id: 39,
      NAME: "Basic Endgames",
      duration: "15:00"
    }
  ];

  dreamroom_intermediate = [
    {
      id: 36,
      episode_id: 1,
      NAME: "Forcing the Moves: Part 1",
      duration: "16:59"
    },
    {
      id: 37,
      episode_id: 2,
      NAME: "Forcing the moves: Part 2",
      duration: "23:38"
    },
    {
      id: 38,
      episode_id: 3,
      NAME: "Discussions with Parents : Part 1",
      duration: "13:30"
    },
    {
      id: 39,
      episode_id: 4,
      NAME: "Prophylaxis: Part 1",
      duration: "11:56"
    },
    {
      id: 40,
      episode_id: 5,
      NAME: "Prophylaxis: Part 2",
      duration: "26:34"
    },
    {
      id: 41,
      episode_id: 6,
      NAME: "Pawn Sacrifice: Part 1",
      duration: "16:01"
    },
    {
      id: 42,
      episode_id: 7,
      NAME: "Pawn Sacrifice: Part 2",
      duration: "13:29"
    },
    {
      id: 43,
      episode_id: 8,
      NAME: "The Drawback",
      duration: "19:12"
    },
    {
      id: 44,
      episode_id: 9,
      NAME: "Pawn Majority: Part 1",
      duration: "34:48"
    },
    {
      id: 45,
      episode_id: 10,
      NAME: "Pawn Majority: Part 2",
      duration: "20:33"
    },
    {
      id: 46,
      episode_id: 11,
      NAME: "Prophylaxis: Part 3",
      duration: "14:06"
    },
    {
      id: 47,
      episode_id: 12,
      NAME: "Discussions with Parents: Part 2",
      duration: "09:47"
    },
    {
      id: 48,
      episode_id: 13,
      NAME: "Bishop &  Pawn Ending: Part 1",
      duration: "11:45"
    },
    {
      id: 49,
      episode_id: 14,
      NAME: "Bishop &  Pawn Ending: Part 2",
      duration: "14:45"
    },
    {
      id: 50,
      episode_id: 15,
      NAME: "Double bishop vs Bishop & Knight",
      duration: "29:19"
    },
    {
      id: 51,
      episode_id: 16,
      NAME: "Improving Pieces: Part 1",
      duration: "11:24"
    },
    {
      id: 52,
      episode_id: 17,
      NAME: "Improving Pieces: Part 2",
      duration: "11:00"
    },
    {
      id: 53,
      episode_id: 18,
      NAME: "Knight &  Pawn Endings: Part 1",
      duration: "21:28"
    },
    {
      id: 54,
      episode_id: 19,
      NAME: "Knight & Pawn Endings: Part 2",
      duration: "13:08"
    },
    {
      id: 55,
      episode_id: 20,
      NAME: "Attacking the King: Part 1",
      duration: "19:57"
    },
    {
      id: 56,
      episode_id: 21,
      NAME: "Attacking the King: Part 2",
      duration: "14:41"
    },
    {
      id: 58,
      episode_id: 22,
      NAME: "Preparing for the Tournament",
      duration: "12:12"
    },
    {
      id: 59,
      episode_id: 23,
      NAME: "Rook & Pawn Endings: Part 1",
      duration: "10:10"
    },
    {
      id: 60,
      episode_id: 24,
      NAME: "King & Pawn Ending: Part 1",
      duration: "12:37"
    },
    {
      id: 61,
      episode_id: 25,
      NAME: "Rook & Pawn Endings: Part 2",
      duration: "20:18"
    },
    {
      id: 62,
      episode_id: 26,
      NAME: "Rook & Pawn Endings: Part 3",
      duration: "18:51"
    },
    {
      id: 63,
      episode_id: 27,
      NAME: "The Accelerators: Part 1",
      duration: "09:45"
    },
    {
      id: 64,
      episode_id: 28,
      NAME: "Active Defence: Part 1",
      duration: "10:00"
    },
    {
      id: 65,
      episode_id: 29,
      NAME: "Discussions with Mental Trainer & A Chess Champ : Part 1",
      duration: "09:09"
    },
    {
      id: 66,
      episode_id: 30,
      NAME: "Calculation Studies: Common mistakes",
      duration: "16:20"
    },
    {
      id: 67,
      episode_id: 31,
      NAME: "Initiatives",
      duration: "16:39"
    },
    {
      id: 68,
      episode_id: 32,
      NAME: "Learning from Classics",
      duration: "33:15"
    },
    {
      id: 69,
      episode_id: 33,
      NAME: "Understanding the weak squares: Part 1",
      duration: "17:57"
    },
    {
      id: 70,
      episode_id: 34,
      NAME: "Understanding the weak squares: Part 2",
      duration: "21:59"
    },
    {
      id: 71,
      episode_id: 35,
      NAME: "Centralisation",
      duration: "10:51"
    },
    {
      id: 72,
      episode_id: 36,
      NAME: "King Activity",
      duration: "12:54"
    },
    {
      id: 73,
      episode_id: 37,
      NAME: "Discussions with Mental Trainer & A Chess Champ : Part 2",
      duration: "12:14"
    },
    {
      id: 74,
      episode_id: 38,
      NAME: "The Pawn Breaks: Part 1",
      duration: "15:21"
    },
    {
      id: 75,
      episode_id: 39,
      NAME: "The Pawn Breaks: Part 2",
      duration: "19:43"
    },
    {
      id: 76,
      episode_id: 40,
      NAME: "Building an opening repertoire",
      duration: "15:35"
    },
    {
      id: 77,
      episode_id: 41,
      NAME: "Maintaining Tension",
      duration: "18:41"
    },
    {
      id: 78,
      episode_id: 42,
      NAME: "The Intermediate Moves",
      duration: "10:02"
    },
    {
      id: 79,
      episode_id: 43,
      NAME: "Simple Tactics",
      duration: "14:00"
    },
    {
      id: 80,
      episode_id: 44,
      NAME: "Discussions with Mental Trainer & A Chess Champ : Part 3",
      duration: "11:13"
    },
    {
      id: 81,
      episode_id: 45,
      NAME: "Attacking the King: Part 3",
      duration: "20:12"
    },
    {
      id: 82,
      episode_id: 46,
      NAME: "Attacking the King: Part 4",
      duration: "18:31"
    },
    {
      id: 83,
      episode_id: 47,
      NAME: "Preparing for before & after the game: At home",
      duration: "18:15"
    },
    {
      id: 84,
      episode_id: 48,
      NAME: "Handling Pawns",
      duration: "10:20"
    },
    {
      id: 85,
      episode_id: 49,
      NAME: "Solving Studies",
      duration: "10:33"
    },
    {
      id: 86,
      episode_id: 50,
      NAME: "The Exchange Sacrifice: Part 1",
      duration: "13:53"
    },
    {
      id: 87,
      episode_id: 51,
      NAME: "The Exchange Sacrifice: Part 2",
      duration: "14:56"
    },
    {
      id: 88,
      episode_id: 52,
      NAME:
        "Discussions with Mental Trainer & A Celebrated Chess Coach: Part 1",
      duration: "12:15"
    },
    {
      id: 89,
      episode_id: 53,
      NAME: "The Maneuver",
      duration: "22:39"
    },
    {
      id: 90,
      episode_id: 54,
      NAME: "Bishop vs Knight: Part 1",
      duration: "15:03"
    },
    {
      id: 91,
      episode_id: 55,
      NAME: "Bishop vs Knight: Part 2",
      duration: "29:52"
    },
    {
      id: 92,
      episode_id: 56,
      NAME: "Queen & Pawn Endings: Part 1",
      duration: "12:39"
    },
    {
      id: 93,
      episode_id: 57,
      NAME: "Queen & Pawn Endings: Part 2",
      duration: "17:40"
    },
    {
      id: 94,
      episode_id: 58,
      NAME: "Exchanging Pieces: Part 1",
      duration: "09:47"
    },
    {
      id: 95,
      episode_id: 59,
      NAME: "Exchanging Pieces: Part 2",
      duration: "19:48"
    },
    {
      id: 96,
      episode_id: 60,
      NAME: "Playing on colors: Part 1",
      duration: "15:30"
    },
    {
      id: 97,
      episode_id: 61,
      NAME: "Playing on colors: Part 2",
      duration: "14:16"
    },
    {
      id: 98,
      episode_id: 62,
      NAME:
        "Discussions with Mental Trainer & A Celebrated Chess Coach: Part 2",
      duration: "12:00"
    },
    {
      id: 99,
      episode_id: 63,
      NAME: "Which Rook?",
      duration: "16:14"
    },
    {
      id: 100,
      episode_id: 64,
      NAME: "Improving the pieces",
      duration: "18:12"
    },
    {
      id: 101,
      episode_id: 65,
      NAME: "Attacking the King: Part 5",
      duration: "13:50"
    },
    {
      id: 102,
      episode_id: 66,
      NAME: "Exchanging the pieces",
      duration: "21:16"
    },
    {
      id: 103,
      episode_id: 67,
      NAME: "The Bad Bishop: Part 1",
      duration: "10:28"
    },
    {
      id: 104,
      episode_id: 68,
      NAME: "The Bad Bishop: Part 2",
      duration: "11:54"
    },
    {
      id: 105,
      episode_id: 69,
      NAME: "The Bad Bishop: Part 3",
      duration: "25:29"
    },
    {
      id: 106,
      episode_id: 70,
      NAME: "The Blockade & The Fortress",
      duration: "17:37"
    },
    {
      id: 107,
      episode_id: 71,
      NAME: "QN vs QB",
      duration: "15:39"
    },
    {
      id: 108,
      episode_id: 72,
      NAME: "Knight vs Bishop: Part 1 (Flohr)",
      duration: "25:15"
    },
    {
      id: 109,
      episode_id: 73,
      NAME: "Knight vs Bishop: Part 2",
      duration: "27:33"
    },
    {
      id: 110,
      episode_id: 74,
      NAME: "Rook and Pawn Endings:Part 4",
      duration: "24:13"
    },
    {
      id: 111,
      episode_id: 75,
      NAME: "Rook and Pawn Endings:Part 5",
      duration: "14:29"
    },
    {
      id: 112,
      episode_id: 76,
      NAME: "The Rook & Pawn Endings: Part 3",
      duration: "10:47"
    },
    {
      id: 113,
      episode_id: 77,
      NAME: "Endgame Techiques: Karpov & Zvaginsev Games",
      duration: "18:49"
    },
    {
      id: 114,
      episode_id: 78,
      NAME: "Important Endgames",
      duration: "15:01"
    },
    {
      id: 115,
      episode_id: 79,
      NAME: "Playing with the double Bishops",
      duration: "25:29"
    },
    {
      id: 116,
      episode_id: 80,
      NAME: "The Principal of two weaknesses",
      duration: "14:57"
    },
    {
      id: 117,
      episode_id: 81,
      NAME: "Bishop & Pawn Ending: Part 3",
      duration: "12:29"
    },
    {
      id: 118,
      episode_id: 82,
      NAME: "Bishop & Pawn Ending: Part 4",
      duration: "08:59"
    },
    {
      id: 119,
      episode_id: 83,
      NAME: "Opposite colour Bishops: The Basics",
      duration: "13:15"
    },
    {
      id: 120,
      episode_id: 84,
      NAME: "The Calculation: Explaination",
      duration: "23:07"
    },
    {
      id: 121,
      episode_id: 85,
      NAME: "The Complex Calculation",
      duration: "9:26"
    },
    {
      id: 122,
      episode_id: 86,
      NAME: "Discussions with two Indian prodigies",
      duration: "15:34"
    },
    {
      id: 123,
      episode_id: 87,
      NAME: "Classification of Advantage & Assesement of Position",
      duration: "28:42"
    },
    {
      id: 124,
      episode_id: 88,
      NAME: "Evaluation of Position",
      duration: "12:49"
    },
    {
      id: 125,
      episode_id: 89,
      NAME: "Common mistakes by young players",
      duration: "12:54"
    },
    {
      id: 126,
      episode_id: 90,
      NAME: "The Positional Play: Part 1",
      duration: "21:05"
    },
    {
      id: 127,
      episode_id: 91,
      NAME: "The Positional Play: Part 2",
      duration: "19:32"
    }
  ];

  dreamroom_advanced = [
    {
      id: 128,
      episode_id: 1,
      NAME: "Complex Calculations: Part 1",
      duration: "39:04"
    },
    {
      id: 129,
      episode_id: 2,
      NAME: "Complex Calculations: Part 2",
      duration: "18:24"
    },
    {
      id: 130,
      episode_id: 3,
      NAME: "Principle of Two Weaknesses: Part 1(Theory)",
      duration: "18:08"
    },
    {
      id: 131,
      episode_id: 4,
      NAME: "Endgame (Knight vs Bishop): Part 1",
      duration: "20:05"
    },
    {
      id: 132,
      episode_id: 5,
      NAME: "Discussion with Celebrated Chess Coaches: Part 1",
      duration: "13:52"
    },
    {
      id: 133,
      episode_id: 6,
      NAME: "Attacking the King: Part 1",
      duration: "20:48"
    },
    {
      id: 134,
      episode_id: 7,
      NAME: "Improving the Pieces",
      duration: "10:26"
    },
    {
      id: 135,
      episode_id: 8,
      NAME: "Blindfold Studies: Part 1",
      duration: "13:56"
    },
    {
      id: 136,
      episode_id: 9,
      NAME: "Blindfold Studies: Part 2",
      duration: "16:26"
    },
    {
      id: 137,
      episode_id: 10,
      NAME: "Discussion with Celebrated Chess Coaches: Part 2",
      duration: "09:40"
    },
    {
      id: 138,
      episode_id: 11,
      NAME: "Playing with the Isolated Queen Pawn",
      duration: "7:41"
    },
    {
      id: 139,
      episode_id: 12,
      NAME: "Playing with the Isolated Pawn",
      duration: "22:14"
    },
    {
      id: 140,
      episode_id: 13,
      NAME: "The Passed Pawn: Part 1",
      duration: "19:39"
    },
    {
      id: 141,
      episode_id: 14,
      NAME: "Chess Studies with the Champions: Part 1",
      duration: "11:33"
    },
    {
      id: 142,
      episode_id: 15,
      NAME: "Chess Studies with the Champions: Part 2",
      duration: "12:04"
    },
    {
      id: 143,
      episode_id: 16,
      NAME: "Complex Calculations: Part 3",
      duration: "20:48"
    },
    {
      id: 144,
      episode_id: 17,
      NAME: "Discussion with Celebrated Chess Coaches : Part 3",
      duration: "8:51"
    },
    {
      id: 145,
      episode_id: 18,
      NAME: "Passed Pawn: Part 2",
      duration: "14:31"
    },
    {
      id: 146,
      episode_id: 19,
      NAME: "Prophylaxis",
      duration: "18:50"
    },
    {
      id: 147,
      episode_id: 20,
      NAME: "The King & The Pawn Ending: Part 1",
      duration: "15:46"
    },
    {
      id: 148,
      episode_id: 21,
      NAME: "The King & The Pawn Ending: Part 2",
      duration: "23:03"
    },
    {
      id: 149,
      episode_id: 22,
      NAME: "Maneuvering of Pieces",
      duration: "15:29"
    },
    {
      id: 150,
      episode_id: 23,
      NAME: "The Active Defence",
      duration: "27:42"
    },
    {
      id: 151,
      episode_id: 24,
      NAME: "Discussions Celebrated Chess Coaches : Part 4",
      duration: "12:43"
    },
    {
      id: 152,
      episode_id: 25,
      NAME: "The Initiative: Part 1 (Explaination)",
      duration: "15:29"
    },
    {
      id: 153,
      episode_id: 26,
      NAME: "The Initiative: Part 1 (Examples)",
      duration: "19:51"
    },
    {
      id: 154,
      episode_id: 27,
      NAME: "Endgame(Knight vs Bishop): Part 2",
      duration: "14:03"
    },
    {
      id: 155,
      episode_id: 28,
      NAME: "Opposite colour Bishop & Pawn ending",
      duration: "16:41"
    },
    {
      id: 156,
      episode_id: 29,
      NAME: "Complex Calculations: Part 4",
      duration: "13:27"
    },
    {
      id: 157,
      episode_id: 30,
      NAME: "Complex Calculations: Part 5",
      duration: "36:18"
    },
    {
      id: 158,
      episode_id: 31,
      NAME: "Analyzing Praggnanandhaa: Part 1",
      duration: "24:07"
    },
    {
      id: 159,
      episode_id: 32,
      NAME: "Analyzing Praggnanandhaa: Part 2",
      duration: "18:59"
    },
    {
      id: 160,
      episode_id: 33,
      NAME: "GMs Game Analysis: Part 1",
      duration: "16:43"
    },
    {
      id: 161,
      episode_id: 34,
      NAME: "Discussions Celebrated Chess Coaches : Part 5",
      duration: "08:39"
    },
    {
      id: 162,
      episode_id: 35,
      NAME: "Prophylaxis & Improving Pieces",
      duration: "14:44"
    },
    {
      id: 163,
      episode_id: 36,
      NAME: "Attacking the King: Part 2(Geller)",
      duration: "17:11"
    },
    {
      id: 164,
      episode_id: 37,
      NAME: "Endgame(Rook & Pawn Ending): Part 1",
      duration: "19:52"
    },
    {
      id: 165,
      episode_id: 38,
      NAME: "Endgame(Rook & Pawn Ending): Part 2",
      duration: "11:04"
    },
    {
      id: 167,
      episode_id: 39,
      NAME: "Deconstruction of puzzles",
      duration: "33:16"
    },
    {
      id: 168,
      episode_id: 40,
      NAME: "Complex Calculations: Part 6",
      duration: "20:22"
    },
    {
      id: 169,
      episode_id: 41,
      NAME: "Endgame(Rook & Pawn Ending): Part 3 (Spielman)",
      duration: "37:22"
    },
    {
      id: 170,
      episode_id: 42,
      NAME: "Endgame (King & Pawn Ending)",
      duration: "16:43"
    }
  ];

  mmg = [
    {
      id: 1,
      episode_id: 1,
      NAME: "The art of conversion"
    },
    {
      id: 2,
      episode_id: 2,
      NAME: "Evaluation of a position"
    },
    {
      id: 3,
      episode_id: 3,
      NAME: "Deflection"
    },
    {
      id: 4,
      episode_id: 4,
      NAME: "Decoy"
    },
    {
      id: 5,
      episode_id: 5,
      NAME: "Importance of a tempo"
    },
    {
      id: 6,
      episode_id: 6,
      NAME: "Active defense"
    },
    {
      id: 7,
      episode_id: 7,
      NAME: "Taking Initiative"
    },
    {
      id: 8,
      episode_id: 8,
      NAME: "Maintaining equality"
    },
    {
      id: 9,
      episode_id: 9,
      NAME: " Planning"
    },
    {
      id: 10,
      episode_id: 10,
      NAME: "Prediction"
    },
    {
      id: 11,
      episode_id: 11,
      NAME: "Prediction"
    },
    {
      id: 12,
      episode_id: 12,
      NAME: "Theory of weakness"
    },
    {
      id: 13,
      episode_id: 13,
      NAME: "Identifying weak squares"
    },
    {
      id: 14,
      episode_id: 14,
      NAME: "Improving pieces"
    },
    {
      id: 15,
      episode_id: 15,
      NAME: "Creating an outpost"
    },
    {
      id: 16,
      episode_id: 16,
      NAME: "The art of Maneuver"
    },
    {
      id: 17,
      episode_id: 17,
      NAME: " Tactics"
    },
    {
      id: 18,
      episode_id: 18,
      NAME: "Prophylactic thinking"
    },
    {
      id: 19,
      episode_id: 19,
      NAME: "What to trade and when?"
    },
    {
      id: 20,
      episode_id: 20,
      NAME: "Rook or two minor pieces?"
    },
    {
      id: 21,
      episode_id: 21,
      NAME: "Rook or two minor pieces? part 2"
    },
    {
      id: 22,
      episode_id: 22,
      NAME: "Rook vs two minor pieces"
    },
    {
      id: 23,
      episode_id: 23,
      NAME: "Pair bishop domination"
    },
    {
      id: 24,
      episode_id: 24,
      NAME: "Pair knight domination"
    },
    {
      id: 25,
      episode_id: 25,
      NAME: "good bishop vs bad knight"
    },
    {
      id: 26,
      episode_id: 26,
      NAME: "bad bishop vs good knight"
    },
    {
      id: 27,
      episode_id: 27,
      NAME: "Queen vs rook & minor piece(S)"
    },
    {
      id: 28,
      episode_id: 28,
      NAME: "Exchange sacrifice"
    },
    {
      id: 29,
      episode_id: 29,
      NAME: "Exchange sacrifice Part two"
    },
    {
      id: 30,
      episode_id: 30,
      NAME: " Identifying mistake"
    },
    {
      id: 31,
      episode_id: 31,
      NAME: "Punishing mistake"
    },
    {
      id: 32,
      episode_id: 32,
      NAME: "Middlegame disasters"
    },
    {
      id: 33,
      episode_id: 33,
      NAME: "Domination of the almighty queen"
    },
    {
      id: 34,
      episode_id: 34,
      NAME: "King walk"
    },
    {
      id: 35,
      episode_id: 35,
      NAME: "Intermediate move"
    },
    {
      id: 36,
      episode_id: 36,
      NAME: "The wise bishop and the jumping knight"
    },
    {
      id: 37,
      episode_id: 37,
      NAME: "The pawn breaks"
    },
    {
      id: 38,
      episode_id: 38,
      NAME: " The pawn sacrifice"
    },
    {
      id: 39,
      episode_id: 39,
      NAME: "The pawn chain effec"
    },
    {
      id: 40,
      episode_id: 40,
      NAME: "Creating Fortress"
    },
    {
      id: 41,
      episode_id: 41,
      NAME: "Breaking the fortress"
    },
    {
      id: 42,
      episode_id: 42,
      NAME: "Exploit the open file"
    },
    {
      id: 43,
      episode_id: 43,
      NAME: "Attack through the semi open file"
    },
    {
      id: 44,
      episode_id: 44,
      NAME: "Volcanic Combinations"
    },
    {
      id: 45,
      episode_id: 45,
      NAME: "Bobby Fischer - Game analysis"
    },
    {
      id: 46,
      episode_id: 46,
      NAME: "Garry Kasparov - Game analysis"
    },
    {
      id: 47,
      episode_id: 47,
      NAME: "Vladmimir Kramnik - Game analysis"
    },
    {
      id: 48,
      episode_id: 48,
      NAME: "Vishwanathan Anand - Game analysis"
    },
    {
      id: 49,
      episode_id: 49,
      NAME: "Magnus Carlsen - Game analysis"
    },
    {
      id: 50,
      episode_id: 50,
      NAME: "Attacking the King"
    },
    {
      id: 51,
      episode_id: 51,
      NAME: "Maintaining & realeasing tension"
    },
    {
      id: 52,
      episode_id: 52,
      NAME: "Going into endgame"
    }
  ];

  constructor(
    private _activated: ActivatedRoute,
    private scrollService: ScrollToService,
    private _amps: AmplitudeService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this._activated.params.subscribe(params => {
      this.product_id = parseInt(params.product_id);

      if (parseInt(params.product_id) === 35) {
        this.currentProductList = this.dreamroom_beginner;
        this.novc = 1;
        this.retunProductList();
      } else if (parseInt(params.product_id) === 746) {
        this.currentProductList = this.mmg;
        this.novc = 1;
        this.retunProductList();
      } else if (parseInt(params.product_id) === 776) {
        this.currentProductList = this.opening_program;
        this.novc = 1;
        this.retunProductList();
      } else if (parseInt(params.product_id) === 574) {
        this.productList = this.chessHour;
      } else if (parseInt(params.product_id) === 680) {
        this.productList = this.super64;
      } else if (parseInt(params.product_id) === 573) {
        this.productList = this.chessHour;
      } else if (parseInt(params.product_id) === 697) {
        this.productList = this.cricket;
      } else if (parseInt(params.product_id) === 672) {
        this.productList = this.mindset;
      } else if (parseInt(params.product_id) === 787) {
        this.productList = this.chessCombo;
      } else if (parseInt(params.product_id) === 807) {
        this.currentProductList = this.dreamroom_beginner;
        this.novc = 1;
        this.retunProductList();
      }
      // else if (parseInt(params.product_id) === 776) {
      //   this.productList = this.opening_program;
      // }
    });
  }

  retunProductList() {
    this.productList = [];
    let currentProductList = _.cloneDeep(this.currentProductList);
    let pL = [];
    for (let i = 0; i < this.novc * 5; i++) {
      pL.push(currentProductList[i]);
    }
    this.productList = pL;
    console.log(this.productList, "PRODUCT LIST");
    if (
      this.novc * 5 > this.currentProductList.length ||
      this.novc * 5 === this.currentProductList.length
    ) {
      this.text = "View Less";
    }
  }
  listClick(index) {
    this._amps.setAmplitudeEvents(events.event_28, {
      product_id: this.product_id,
      product_name: "Dreamroom",
      level: index + 1
    });
    this.novc = 1;
    if (index === 0) {
      this.currentProductList = _.cloneDeep(this.dreamroom_beginner);
      this.retunProductList();
    } else if (index === 1) {
      this.currentProductList = _.cloneDeep(this.dreamroom_intermediate);
      this.retunProductList();
    } else {
      this.currentProductList = _.cloneDeep(this.dreamroom_advanced);
      this.retunProductList();
    }
    this.selectedIdx = index;
  }

  viewMore(index) {
    this._amps.setAmplitudeEvents(events.event_27, {
      product_id: this.product_id,
      product_name: "Dreamroom",
      no_of_episodes: this.novc * 5
    });
    if (index === 0) {
      this.novc += 1;
      this.retunProductList();
    } else if (index === 1) {
      this.novc += 1;
      this.retunProductList();
    } else {
      this.novc += 1;
      this.retunProductList();
    }
  }

  viewLess(top, index) {
    this.novc = 1;
    this.retunProductList();
    this.text = "View More";
    this.scrollService.scrollTo(top);
  }
}
