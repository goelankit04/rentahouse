import { Component, OnInit, HostBinding } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.scss"]
})
export class CourseDetailComponent implements OnInit {
  @HostBinding("class") CourseDetailComponentClass = "app-course-detail";
  productList: any;
  product_id: any;
  descr: any;
  dreamroom = {
    course_details:
      "Dream Room is a first of its kind, cinematically recorded online chess training course. This self-paced course includes course content by GM R. B. Ramesh - coach of chess prodigy GM Praggnanandhaa! The course also features GM Abhijeet, GM Murli, GM Aravindh and many other celebrated names in the chess world. The Dream Room is suitable for 0-2400 FIDE rated players.",
    course_highlight: [
      {
        name: "170+ self-paced structured chess training videos",
        background: "linear-gradient(53deg, #72abd5, #3e73ab 98%)"
      },
      {
        name:
          "Recordings of 24 LIVE sessions & 12 game analysis webinars by GM RB Ramesh",
        background: "linear-gradient(52deg, #74d081, #40a34a 100%)"
      },
      {
        name: "5 hours of Beginner content [0-1100]",
        background: "linear-gradient(52deg, #a370d5, #6a3daa 100%)"
      },
      {
        name: "20 hours of Intermediate content [1100-2000]",
        background: "linear-gradient(52deg, #d5cf70, #aaa13d 100%)"
      },
      {
        name: "15 hours of Advanced content for 2000+ FIDE rated players",
        background: "linear-gradient(52deg, #8c78e7 1%, #503ca9 100%)"
      },
      {
        name: "Flippable ebook topic wise puzzles and examples",
        background: "linear-gradient(52deg, #eaa17b 4%, #b46a44 100%)"
      }
    ]
  };

  cricket = {
    course_details:
      "Gary’s PowerPlay is a cricket skilling course designed by celebrated cricket coach, Gary Kirsten. The course includes cinematically recorded videos covering different aspects of the game and provides opportunities to learn through live and interactive sessions with Guru Gary. Students can also enrol in the more comprehensive Cricket Dream Room at a discounted price.",
    course_highlight: [
      {
        name: "5 Powerpacked episodes covering all areas of cricket",
        background: "linear-gradient(53deg, #72abd5, #3e73ab 98%)"
      },
      {
        name: "2 hours of pre recorded cinematic content",
        background: "linear-gradient(52deg, #74d081, #40a34a 100%)"
      },
      {
        name: "4 hours of LIVE and interactive interaction with Gary Kirsten",
        background: "linear-gradient(52deg, #a370d5, #6a3daa 100%)"
      },
      {
        name: "e-certificate on course completion",
        background: "linear-gradient(52deg, #d5cf70, #aaa13d 100%)"
      },
      {
        name: "1-year access to recorded content",
        background: "linear-gradient(52deg, #8c78e7 1%, #503ca9 100%)"
      },
      {
        name: "Additional study material to supplement learning",
        background: "linear-gradient(52deg, #eaa17b 4%, #b46a44 100%)"
      }
    ]
  };

  chessHour = {
    course_details:
      "Learn from Grandmasters, round the year, 1 hour daily, in this premium series of LIVE and interactive classes. Currently more than 12 GMs are mentoring the batches of ChessHour LIVE and you have the choice to choose from 2 different batches being run at different timings. We are continuously adding more GMs to the panel of mentors on nurtr. The program is fully LIVE and covers 365 topics to provide you varied learning.",
    course_highlight: [
      {
        name: "365 days of LIVE training by Grandmasters",
        background: "linear-gradient(53deg, #72abd5, #3e73ab 98%)"
      },
      {
        name: "Suitable for 1300 - 1800  rated players",
        background: "linear-gradient(52deg, #74d081, #40a34a 100%)"
      },
      {
        name: "60 minutes of LIVE training every day 7 PM - 8 PM IST",
        background: "linear-gradient(52deg, #a370d5, #6a3daa 100%)"
      },
      {
        name: "1-year access to recordings of all LIVE sessions",
        background: "linear-gradient(52deg, #d5cf70, #aaa13d 100%)"
      },
      {
        name: "360-degree coverage of opening, middlegame, and endgames",
        background: "linear-gradient(52deg, #8c78e7 1%, #503ca9 100%)"
      },
      {
        name: "1 day devoted to puzzle practice every week",
        background: "linear-gradient(52deg, #eaa17b 4%, #b46a44 100%)"
      }
    ]
  };

  mmg = {
    course_details:
      "Mastering Middle Games is a premium 52-Week Program by GM Farrukh Amonatov who is known for his razor sharp skills in acing middle games. In this structured program, Farrukh will deliver weekly content around middle games and coach on how to use an advantage in middlegames to hone your chess skills. Each weekly session is supplemented with homework, puzzles, and practice materials to corroborate the learning.",
    course_highlight: [
      {
        name: "52 weeks of rigorous chess coaching on middlegames",
        background: "linear-gradient(53deg, #72abd5, #3e73ab 98%)"
      },
      {
        name: "360 degree coverage of middlegame content from GM perspective",
        background: "linear-gradient(52deg, #74d081, #40a34a 100%)"
      },
      {
        name: "Homework, puzzles, and practice material to supplement learning",
        background: "linear-gradient(52deg, #a370d5, #6a3daa 100%)"
      },
      {
        name: "80+ hours of LIVE and interactive GM coaching",
        background: "linear-gradient(52deg, #d5cf70, #aaa13d 100%)"
      },
      {
        name: "Every Sunday at 6:00 PM (IST)",
        background: "linear-gradient(52deg, #8c78e7 1%, #503ca9 100%)"
      },
      {
        name: "1-year access to recordings of all sessions for repeat viewing",
        background: "linear-gradient(52deg, #eaa17b 4%, #b46a44 100%)"
      }
    ]
  };

  moro = {
    course_details:
      "The Legend of “Moro” is the first-ever structured live online course by former world No 2 and one of the most gifted chess players of his generation. This is program is an  attempt from the Grandmaster to help students develop a deep understanding on what gave him an unusual edge as a player and how can young kids benefit from his knowledge to become stronger chess players.",
    course_highlight: [
      {
        name: "100 hours of live and interactive sessions with the legend ",
        background: "linear-gradient(53deg, #72abd5, #3e73ab 98%)"
      },
      {
        name:
          " Homework, assignment & study material after each class curated by GM Alexander",
        background: "linear-gradient(52deg, #74d081, #40a34a 100%)"
      },
      {
        name:
          "1 Year access to the recording of the content for repeated watching",
        background: "linear-gradient(52deg, #a370d5, #6a3daa 100%)"
      },
      {
        name: "Vast coverage of content",
        background: "linear-gradient(52deg, #d5cf70, #aaa13d 100%)"
      },
      {
        name:
          "Dedicated time during each session to interact & ask your doubts from GM",
        background: "linear-gradient(52deg, #8c78e7 1%, #503ca9 100%)"
      },
      {
        name:
          "Email support to get your queries answered if you miss the LIVE session",
        background: "linear-gradient(52deg, #eaa17b 4%, #b46a44 100%)"
      }
    ]
  };

  chessDream = {
    course_details:
      "The Beginner Subscription of Chess Dream Room is a unique structured online chess course containing 5+ hours of cinematic chess wisdom from Grandmaster RB Ramesh and other celebrated chess players & coaches. By this course one can target to achieve the basic understanding of the game along with an approach to enhance one's logical & problem solving skills.",
    course_highlight: [
      {
        name: "5+ hours of beginner chess content",
        background: "linear-gradient(53deg, #72abd5, #3e73ab 98%)"
      },
      {
        name: "Suitable for amateur - 1100 FIDE rated players",
        background: "linear-gradient(52deg, #74d081, #40a34a 100%)"
      },
      {
        name: "Lifetime access to the course content",
        background: "linear-gradient(52deg, #a370d5, #6a3daa 100%)"
      },
      {
        name: "Example & puzzles with each episode to supplement learning",
        background: "linear-gradient(52deg, #d5cf70, #aaa13d 100%)"
      },
      {
        name: "Study Material to strengthen subject knowledge",
        background: "linear-gradient(52deg, #8c78e7 1%, #503ca9 100%)"
      },
      {
        name: "Expert support to accelerate one's chess journey",
        background: "linear-gradient(52deg, #eaa17b 4%, #b46a44 100%)"
      }
    ]
  };

  chessCombo = {
    course_details:
      "635 hours of online LIVE chess learning from legendary Grandmaster coaches, covering vast array of chess content & specific courses targeted to focus and improve your Opening preparation, Middle Game preparation, Endgame Preparation & and explaining know-hows of psychology behind chess.",
    course_highlight: [
      {
        name: "365 hours of chess training",
        background: "linear-gradient(53deg, #72abd5, #3e73ab 98%)"
      },
      {
        name: " Daily | 365 days classes with legendary GM coaches",
        background: "linear-gradient(52deg, #74d081, #40a34a 100%)"
      },
      {
        name: "360 degree coverage of chess content",
        background: "linear-gradient(52deg, #a370d5, #6a3daa 100%)"
      },
      {
        name:
          "Specific courses to focus on your Opening, Middle Game & Endgame Preparation",
        background: "linear-gradient(52deg, #d5cf70, #aaa13d 100%)"
      },
      {
        name:
          "Puzzles, Example & Study material curated by GM coaches to supplement learning",
        background: "linear-gradient(52deg, #8c78e7 1%, #503ca9 100%)"
      },
      {
        name:
          "1 Year access to the recording of the content for repeated watching",
        background: "linear-gradient(52deg, #eaa17b 4%, #b46a44 100%)"
      }
    ]
  };

  chessHourA = {
    course_details:
      "Learn from Grandmasters, round the year, 1 hour daily, in this premium series of LIVE and interactive classes. Currently more than 12 GMs are mentoring the batches of ChessHour LIVE and you have the choice to choose from 2 different batches being run at different timings. We are continuously adding more GMs to the panel of mentors on nurtr. The program is fully LIVE and covers 365 topics to provide you varied learning.",
    course_highlight: [
      {
        name: "365 days of LIVE training by Grandmasters",
        background: "linear-gradient(53deg, #72abd5, #3e73ab 98%)"
      },
      {
        name: "Suitable for 1300 - 1800  rated players",
        background: "linear-gradient(52deg, #74d081, #40a34a 100%)"
      },
      {
        name: "60 minutes of LIVE training every day 6 AM - 7 AM (IST)",
        background: "linear-gradient(52deg, #a370d5, #6a3daa 100%)"
      },
      {
        name: "1-year access to recordings of all LIVE sessions",
        background: "linear-gradient(52deg, #d5cf70, #aaa13d 100%)"
      },
      {
        name: "360-degree coverage of opening, middlegame, and endgames",
        background: "linear-gradient(52deg, #8c78e7 1%, #503ca9 100%)"
      },
      {
        name: "1 day devoted to puzzle practice every week",
        background: "linear-gradient(52deg, #eaa17b 4%, #b46a44 100%)"
      }
    ]
  };

  super64 = {
    course_details: `nurtr's Super64 is a program that helps talented kids on their quest to be the next Grandmasters via tailor-made customised learning with the help of our superb panel of mentors. Super64 program aims to understand the requirement of the player to provide customised training.`,
    course_highlight: [
      {
        name: "1400+ hours of customised group classes by GM coaches",
        background: "linear-gradient(53deg, #72abd5, #3e73ab 98%)"
      },
      {
        name: "30+ hours of 1-1 classes with GMs/IMs/FMs in one year",
        background: "linear-gradient(52deg, #74d081, #40a34a 100%)"
      },
      {
        name:
          "Daily homework with feedback, study material and schedule planning",
        background: "linear-gradient(52deg, #a370d5, #6a3daa 100%)"
      },
      {
        name:
          "Tournament preparation and game analysis support during tournaments",
        background: "linear-gradient(52deg, #d5cf70, #aaa13d 100%)"
      },
      {
        name:
          "Training content to be designed as per the individual needs of the player",
        background: "linear-gradient(52deg, #8c78e7 1%, #503ca9 100%)"
      },
      {
        name:
          "Super handholding and support throughout the year for all chess needs.",
        background: "linear-gradient(52deg, #eaa17b 4%, #b46a44 100%)"
      }
    ]
  };

  mindset = {
    course_details: `The Grand Master Mindset program focuses on Openings, Middlegame, Endgame & Psychology of chess, where you will learn how Grandmasters think & watch their playing strategies be decoded and simplified for you to understand. In this course GM Marian Petrov will help you to think like a Grandmaster & eventually help you in becoming a Grandmaster!`,
    course_highlight: [
      {
        name: "3+ hours of cinematic video content",
        background: "linear-gradient(53deg, #72abd5, #3e73ab 98%)"
      },
      {
        name: "10 hours of LIVE & interactive sessions with GM Petrov",
        background: "linear-gradient(52deg, #74d081, #40a34a 100%)"
      },
      {
        name:
          "Covering various aspects of chess: Openings, Middlegame, Endgame & Psychology of chess",
        background: "linear-gradient(52deg, #a370d5, #6a3daa 100%)"
      },
      {
        name:
          "LIVE sessions starting 20th February, every Thursday at 6:00 PM (IST)",
        background: "linear-gradient(52deg, #d5cf70, #aaa13d 100%)"
      },
      {
        name:
          "Homework, assignment & study material after each class to supplement learning",
        background: "linear-gradient(52deg, #8c78e7 1%, #503ca9 100%)"
      },
      {
        name:
          "1 Year access to the recording of the content for repeated watching",
        background: "linear-gradient(52deg, #eaa17b 4%, #b46a44 100%)"
      }
    ]
  };

  openingProgram = {
    course_details: `GM Boris Avrukh is coming back with the new 'Advanced Course' on 'GM Opening Preparation Program'. This course will build upon the learnings of the previous 52-Week course by GM Boris with much deeper concepts and intensive practice session. The program will include 60 hours of LIVE & Interactive classes by GM Boris Avrukh with 18 hours of Practice classes by GM coaches. `,
    course_highlight: [
      {
        name: "52 weeks of rigorous chess coaching on middlegames",
        background: "linear-gradient(53deg, #72abd5, #3e73ab 98%)"
      },
      {
        name: "360 degree coverage of advanced level opeing content",
        background: "linear-gradient(52deg, #74d081, #40a34a 100%)"
      },
      {
        name: "Homework, puzzles, and practice material to supplement learning",
        background: "linear-gradient(52deg, #a370d5, #6a3daa 100%)"
      },
      {
        name: "78 hours of LIVE and interactive GM coaching",
        background: "linear-gradient(52deg, #d5cf70, #aaa13d 100%)"
      },
      {
        name: "Weekly fixed time",
        background: "linear-gradient(52deg, #8c78e7 1%, #503ca9 100%)"
      },
      {
        name: "1-year access to recordings of all sessions for repeat viewing",
        background: "linear-gradient(52deg, #eaa17b 4%, #b46a44 100%)"
      }
    ]
  };

  beauty = {
    course_details: `In this 2-day (6 hours in total) LIVE, Interactive and engaging online camp. GM Adhiban will be revealing his secret playing methodologies and techniques. The style that has kept him amongst the top players in Indian Chess and made him a tough competitor worldwide.
At the end of this Camp, you would definitely remember and learn from Adhiban what makes him so special as a chess player. With 1 year access to the recording of the camp. It makes it more special and at the same time convenient to remember and revisit the learnings from this extraordinary camp.
We invite all the chess players around the globe wishing to be like a beast to slay the dragons of the chess world the Beast style!`,
    course_highlight: [
      {
        name: "Online LIVE & interactive chess camp by India #4",
        background: "linear-gradient(53deg, #72abd5, #3e73ab 98%)"
      },
      {
        name: "3 hours/day of chess content",
        background: "linear-gradient(52deg, #74d081, #40a34a 100%)"
      },
      {
        name: "11th & 12th April 2020, 2 PM - 5 PM (IST)",
        background: "linear-gradient(52deg, #a370d5, #6a3daa 100%)"
      },
      {
        name: "Learn GM Adhiban's secret playing methodologies and techniques",
        background: "linear-gradient(52deg, #d5cf70, #aaa13d 100%)"
      },
      {
        name: "Use coupon: BEAST and enroll in special offer price",
        background: "linear-gradient(52deg, #8c78e7 1%, #503ca9 100%)"
      },
      {
        name: "1-year access to recordings of all sessions for repeat viewing",
        background: "linear-gradient(52deg, #eaa17b 4%, #b46a44 100%)"
      }
    ]
  };

  beauty_desc = [
    {
      desc: `Adhiban Baskaran is an Indian chess Grandmaster, better known as the ’Beast’ for his aggressive and unusual style of play. Adhiban earned his GM title in 2010 and has had a peak rating of 2701. He has been World U-16 Champion (2008) and Indian Champion (2009). In 2007 and 2008, he played on the first board in the U-16 Chess Olympiad as part of the gold-winning Indian team.`
    },
    {
      desc: `The Beast made news in the 2013 Chess World Cup when he caused an upset in the first 2 rounds by beating GM Evgeny Alekseev and GM Alexandr Fier. He placed first at the 2018 Reykjavik Open and won a lot of hearts en route his third position at Tata Steel Masters Tournament (2017) with his memorable wins!`
    }
  ];

  openingProgram_desc = [
    {
      desc: `Became Grandmaster in 1997 at the age of 21 and acquired a peak rating of 2668 in September 2009`
    },
    {
      desc: `World Under-12 Champion, played in 6 Chess Olympiads and won Israeli Chess Championship for 2 times`
    },
    {
      desc: `Worked as an author and has trained players like Radjabov, Kramnik, and Caruana.`
    },
    {
      desc: `World leading expert on 1.d4 and authored some of the best chess books like series of GrandMaster Repertoire- 1.d4, Classical Slav, and more.`
    },
    {
      desc: `Has trained Israeli National team and is considered as the “King of Opening”.`
    },
    {
      desc: `He was one of the members, assisting Boris Gelfand during World Championship against Viswanathan Anand`
    }
  ];

  mindset_desc = [
    {
      desc: `A Bulgarian national, Marian Petrov acquired his title in the year 2010 
   (peak rating-2549 in Sep 2010)`
    },
    {
      desc: `With an experience of over 12 years in coaching, he has coached the team
   of Wales at the 2016 Olympiad in Baku and 2018 in Batumi respectively`
    },
    {
      desc: `Authored the Grandmaster Repertoire 12: The Modern Benoni, and produced
   the chess CD - Dominate with 1.e4 on Opening Mastery`
    },
    {
      desc: "He became FIDE Trainer in the year 2016"
    },
    {
      desc: `The Bulgarian Champion of 2002 and 2017 is the winner of many Open
   tournaments like Le Touquet, Thessaloniki Open,Vienna Chess Open, 
   South Wales International Open and represented his country in the 2002
   Chess Olympiad in Bled, Slovenia`
    },
    {
      desc: `He has a Bachelor’s degree in Chess Pedagogy, a four year undergraduate
   program designed to prepare top level Chess trainers`
    },
    {
      desc: `Peak rating-2549, FIDE Trainer, he has coached the team of Wales at the
   2016 Olympiad in Baku and 2018 in Batumi, Bulgarian Champion of 2002
   and 2017 is the winner of many Open tournaments like Le Touquet,
   Thessaloniki Open, Vienna,Chess Open, South Wales International Open and
   represented his country in the 2002 Chess Olympiad in Bled, Slovenia`
    }
  ];

  mmg_desc = [
    {
      desc:
        "The only chess Grandmaster of Tajikistan - GM Farrukh Amonatov (peak rating-2650 in July 2008)"
    },
    {
      desc:
        " Coach of the Youth Russian team and working with many students from Russia, India, Kazakhstan, USA and other countries. Some of his students are GM Abhimanyu Puranik, IM Raunak Sadhwani"
    },
    {
      desc:
        "GM Goryachkina (challenge for World Championship), GM Fedoseev, GM Artemiev and many such prodigies"
    },
    {
      desc:
        "Winner of many International tournaments like Agzamov Memorial, Eurasian Blitz Cup of the President of Kazakhstan, Mumbai Mayor’s Cup 2018, Moscow Open 2005 and many more"
    },
    {
      desc: "Became the Asian Under-16 champion in 1992"
    },
    {
      desc:
        "Competed in the 2005 - FIDE World Cup and played until he was defeated by Magnus Carlsen in round 2. In the 2009 - FIDE World Cup, he reached the second round and was defeated by the then winner, Boris Gelfand"
    },
    {
      desc:
        "In 2007, he qualified for the Superfinal of the Russian Chess Championship and managed to finish 10th"
    },
    {
      desc:
        "In 2008, he won the 2nd Georgy Agzamov Memorial in Tashkent, on tiebreak. He finished 2nd on tiebreak in the 4th Central Asia Chess Cup - 2015"
    }
  ];

  moro_desc = [
    {
      desc: "Peak Rating: 2788 Current Rating: 2659"
    },
    {
      desc: "He is known for his aggressive and unorthodox playing style"
    },
    {
      desc: "His peak ranking was second in the world in July 2008"
    },
    {
      desc:
        "Having been one of the most exciting and imaginative players in the world, he reached no. 2 on the official FIDE rating list and no. 1 on the live list"
    },
    {
      desc:
        "He is considered as one of the strongest chess players of his generation"
    },
    {
      desc:
        "He is a two-time World Championship candidate (2005, 2007), two-time Russian champion and has represented Russia in seven Chess Olympiads, winning numerous team and board medals"
    },
    {
      desc:
        "He was born on July 18, 1977, is a Russian chess player. He was awarded the title of Grandmaster by FIDE in 1994 (at the age of 17)"
    },
    {
      desc:
        "He is known to be an aggressive player with an unorthodox opening repertoire. He has on occasion played the Chigorin Defense (1.d4 d5 2.c4 Nc6) and the Albin Countergambit (1.d4 d5 2.c4 e5) "
    },
    {
      desc: `He is also well known for preferring complicated positions. Due to his risky and spectacular style which produces relatively few draws, Morozevich is popular among chess fans. In 2007, Morozevich published, along with co-author Vladimir Barsky, a book about the Chigorin Defense, called The Chigorin Defence According to Morozevich
He is considered to be one of the best blindfold chess players in the world. He has confirmed that status in blindfold sections of Amber Melody tournaments: 2002 first 9/11, 2003 shared second 7/11, 2004 first 8½/11, 2005 shared second 6/11, 2006 first 9½/11, 2007 shared second 7/11, 2008 shared first 6/11 and in 2009 shared fourth with Anand 6½/11`
    }
  ];

  constructor(private _activated: ActivatedRoute) {}

  ngOnInit() {
    this._activated.params.subscribe(params => {
      this.product_id = Number(params.product_id);
      if (parseInt(params.product_id) === 35) {
        this.productList = this.dreamroom;
      } else if (parseInt(params.product_id) === 574) {
        this.productList = this.chessHourA;
      } else if (parseInt(params.product_id) === 573) {
        this.productList = this.chessHour;
      } else if (parseInt(params.product_id) === 680) {
        this.productList = this.super64;
      } else if (parseInt(params.product_id) === 697) {
        this.productList = this.cricket;
      } else if (parseInt(params.product_id) === 746) {
        this.productList = this.mmg;
        this.descr = this.mmg_desc;
      } else if (parseInt(params.product_id) === 778) {
        this.productList = this.moro;
        this.descr = this.moro_desc;
      } else if (parseInt(params.product_id) === 672) {
        this.productList = this.mindset;
        this.descr = this.mindset_desc;
      } else if (parseInt(params.product_id) === 787) {
        this.productList = this.chessCombo;
      } else if (parseInt(params.product_id) === 776) {
        this.productList = this.openingProgram;
        this.descr = this.openingProgram_desc;
      } else if (parseInt(params.product_id) === 807) {
        this.productList = this.chessDream;
      } else if (parseInt(params.product_id) === 810) {
        this.productList = this.beauty;
        this.descr = this.beauty_desc;
      }
    });
  }
}
