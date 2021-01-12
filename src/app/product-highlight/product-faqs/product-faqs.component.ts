import { Component, OnInit, HostBinding } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { events } from "../../amplitude/events";
import { AmplitudeService } from "../../amplitude/amplitude.service";

@Component({
  selector: "app-product-faqs",
  templateUrl: "./product-faqs.component.html",
  styleUrls: ["./product-faqs.component.scss"]
})
export class ProductFaqsComponent implements OnInit {
  @HostBinding("class") ProductFaqsComponentClass = "app-product-faqs";
  product_type: any;
  product_id: any;
  productList: any;
  dreamroom = [
    {
      question:
        "Do I need to install a special software or have a DVD player to use Dream Room?",
      answer:
        "No, all you need is good quality internet and a laptop/mobile device."
    },
    {
      question: "Is the fee mentioned on website annual?",
      answer:
        "No, the fee is for lifetime access. Which means, you only pay once and can use the content for lifetime."
    },
    {
      question: "Can the videos of Dream Room be downloaded?",
      answer:
        "We are sorry, we do not allow downloading the videos and have put up a multi-layered security cover to prevent the same."
    },
    {
      question: "Who is the main mentor in Dream Room?",
      answer:
        "GM RB Ramesh is the chief mentor of Dream Room, however many of his GM and IM prodigies are also featured in the course for vaster learning experience."
    },
    {
      question:
        "In total,  how many hours do I obtain when I subscribe to Dream Room?",
      answer:
        "You get a total of over 70 hours of content which includes 40+ hours of cinematic recordings and 30+ hours of recorded LIVE sessions by GM RB Ramesh."
    }
  ];

  chessHour = [
    {
      question:
        "Do I need to install a special software to use ChessHour LIVE program?",
      answer:
        "No, all you need is good quality internet and a laptop/mobile device. You will require to install a small app called Zoom Meetings to access the LIVE sessions. "
    },
    {
      question: "Is the fee mentioned on website annual?",
      answer:
        "Yes, the fee mentioned is for annual subscription of the ChessHour LIVE and gives you access to 365 days of LIVE GM coaching. "
    },
    {
      question: "Can the videos of ChessHour LIVE be downloaded?",
      answer:
        "We are sorry, we do not allow downloading the videos and have put up a multi-layered security cover to prevent the same. "
    },
    {
      question: "Who are the mentors and coaches in the ChessHour LIVE?",
      answer:
        "We have a battery of more than 10 Grandmasters in this program. Some of them are GM Farrukh Amonatov, GM Michal Krasenkow, GM Maxim Turov, GM Alex Yermolinsky, GM Marian Petrov, GM Nikola Nestorovic, GM Krasimir Ivanov Rusev, GM Andres Felipe, GM Konstantin Landa & many more. "
    },
    {
      question: "Is there an option to choose from multiple timings?",
      answer:
        "Yes, you can choose from the 2 available options - Morning or Evening (IST) as per the time that fits your schedule best. "
    },
    {
      question: "What happens if I miss a LIVE session?",
      answer:
        "No worries, we provide you with 1-year access to recordings of all sessions so that you may watch those at a later time as well. "
    }
  ];

  super64 = [
    {
      question: "Is the program open for all?",
      answer:
        "The Super64 Program is an exclusive program which is only open for 64 students, those too, who qualify for the program through a screening process."
    },
    {
      question: "Is the fee mentioned on website annual?",
      answer:
        "Yes, the Super64 program’s fee is annual and one can reserve a spot by paying a booking amount mentioned on the website."
    },
    {
      question: "Who are the coaches in Super64?",
      answer:
        "Super64, as the name suggests is a super program, which has only GMs, IMs, FMs, FSTs, and FTs as coaches."
    },
    {
      question: "Is this program a 1-1 coaching module?",
      answer: "It is a very healthy mix of both 1-1 and group sessions."
    },
    {
      question: "What happens if I miss a group session?",
      answer:
        "You get access to the recording of all the sessions in your nurtr account for watching those at a later stage too. "
    }
  ];

  cricket = [
    {
      question: "Is the program open for all?",
      answer:
        "Yes this is a power-packed program for anyone wishing to step up the skills in cricket."
    },
    {
      question: "Is the fee mentioned on website annual?",
      answer:
        "Yes, the program’s fee is annual and includes 2 hours of recorded content and 4 hours of LIVE interactions."
    },
    {
      question: "Who are the coaches in the program?",
      answer: "Guru Gary is himself the coach featured in the program"
    },
    {
      question: "Are the live interactions in the program 1-1?",
      answer:
        "No, those are group sessions but are interactive to enable conversation and doubt clearance."
    },
    {
      question: "What happens if I miss a group session?",
      answer:
        "You get access to the recording of all the sessions in your nurtr account for watching those at a later stage too. "
    }
  ];

  mmg = [
    {
      question:
        "Do I need to install a special software to use the Mastering Middle Games program?",
      answer:
        "No, all you need is good quality internet and a laptop/mobile device. You will require to install a small app called Zoom Meetings to access the LIVE sessions."
    },
    {
      question: "Is the fee mentioned on website annual?",
      answer:
        "Yes, the fee mentioned is for annual subscription of the Mastering Middle Games and gives you access to 52 weekly sessions by GM Farrukh Amonatov."
    },
    {
      question: "Can the videos of Mastering Middle Games be downloaded?",
      answer:
        "We are sorry, we do not allow downloading the videos and have put up a multi-layered security cover to prevent the same. "
    },
    {
      question:
        "What will be the schedule of the Mastering Middle Games program?",
      answer:
        "The LIVE session will be scheduled every Sunday, 6:00 PM - 7:30 PM (IST)"
    },
    {
      question: "What happens if I miss a LIVE session?",
      answer:
        "No worries, we provide you with 1-year access to recordings of all sessions so that you may watch those at a later time as well."
    }
  ];

  moro = [
    {
      question:
        "Do I need to install a special software to access the The Legend of Moro Program?",
      answer:
        "No, all you need is good quality internet and a laptop/mobile device. You will require to install a small application called Zoom Meetings to access the LIVE sessions."
    },
    {
      question: "Is the fee mentioned on the website for the entire program?",
      answer:
        "Yes, the fee mentioned will give you access to entire 100 hours LIVE session program with GM Alexander Morozevich"
    },
    {
      question: "Can the videos of  The Legend of Moro Program be downloaded?",
      answer:
        "We are sorry, we do not allow downloading the videos and have put up a multi-layered security cover to prevent the same."
    },
    {
      question: "What happens if I miss a LIVE session?",
      answer:
        "No worries, we provide you with 1-year access to recordings of all sessions so that you may watch those at a later time as well."
    }
  ];

  middle = [
    {
      question:
        "Do I need to install a special software to use the The Grand Master Mindset program?",
      answer:
        "No, all you need is good quality internet and a laptop/mobile device. You will require to install a small app called Zoom Meetings to access the LIVE sessions. "
    },
    {
      question: "Is the fee mentioned on the website for the entire program?",
      answer:
        "Yes, the fee mentioned will give you access to entire 100 hours LIVE session program with GM Marian Petrov"
    },
    {
      question: "Can the videos of The Grand Master Mindset be downloaded?",
      answer:
        "We are sorry, we do not allow downloading the videos and have put up a multi-layered security cover to prevent the same."
    },
    {
      question:
        "What will be the schedule of the The Grand Master Mindset program?",
      answer:
        "The recorded episodes of the program will get added to your account immediately once you enroll for the program. The LIVE sessions are scheduled every Thursday, 6:00 PM - 7:00 PM (IST)"
    },
    {
      question: "What happens if I miss a LIVE session?",
      answer:
        "No worries, we provide you with 1-year access to recordings of all sessions so that you may watch those at a later time as well."
    }
  ];

  openingProgram = [
    {
      question:
        "Do I need to install a special software to use the Advanced GM Opening Preparation Program?",
      answer:
        "No, all you need is good quality internet and a laptop/mobile device. You will require to install a small app called Zoom Meetings to access the LIVE sessions."
    },
    {
      question: "Is the fee mentioned on the website annual?",
      answer:
        "Yes, the fee mentioned is for annual subscription of the Advanced GM Opening Preparation Program and gives you access to 52 weekly sessions by GM Boris Avrukh."
    },
    {
      question:
        "Can the videos of Advanced GM Opening Preparation Program be downloaded?",
      answer:
        "We are sorry, we do not allow downloading the videos and have put up a multi-layered security cover to prevent the same."
    },
    {
      question:
        "What will be the schedule of the Advanced GM Opening Preparation Program?",
      answer:
        "The LIVE session will be scheduled on the same day every week. The course will be launched in April 2020."
    },
    {
      question: "What happens if I miss a LIVE session?",
      answer:
        "No worries, we provide you with 1-year access to recordings of all sessions so that you may watch those at a later time as well."
    }
  ];

  beauty = [
    {
      question:
        "Do I need to install special software to attend the Beauty of the Beast camp?",
      answer:
        "No, all you need is good quality internet and a laptop/mobile device. You will require to install a small app called Zoom Meetings to access the LIVE sessions."
    },
    {
      question: "Is the fee mentioned on the website for both days?",
      answer:
        "Yes, the fee mentioned is for both days and gives you access to 3 hours of the session each day i.e. on 11th & 12th April by GM Adhiban Baskaran. "
    },
    {
      question: "Can the videos of Beauty of the Beast camp be downloaded?",
      answer:
        "We are sorry, we do not allow downloading the videos and have put up a multi-layered security cover to prevent the same."
    },
    {
      question: "What happens if I miss a LIVE session?",
      answer:
        "No worries, we provide you with 1-year access to recordings of all sessions so that you may watch those at a later time as well."
    },
    {
      question: "Can I interact with GM Adhiban during the camp?",
      answer:
        "Yes, like all our camps this is also a highly interactive and engaging camp where the mentor(Adhiban in this case) would give interesting problems and ask all the mentee questions to keep them engaged throughout the session."
    }
  ];

  chessDream = [
    {
      question: "Who can benefit from beginner subscription?",
      answer:
        "Anyone who wishes to learn chess right from scratch to an intermediate level player."
    },
    {
      question: "Is there any minimum age required to enroll for the course?",
      answer:
        "No, chess as a game has no age limit. You can start as early as a 4-year old or even if you are 80+ years old"
    },
    {
      question:
        "Do I need to install a special software or have a DVD player to use Dream Room?",
      answer:
        "No, all you need is good quality internet and a laptop/mobile device."
    },
    {
      question: "Is the fee mentioned on the website annual?",
      answer:
        "No, the fee is for lifetime access. Which means, you only pay once and can use the content for lifetime."
    },
    {
      question: "Can the videos of Dream Room be downloaded?",
      answer:
        "We are sorry, we do not allow downloading the videos and have put up a multi-layered security cover to prevent the same."
    },
    {
      question: "Who is the main mentor in Dream Room?",
      answer: `GM RB Ramesh is the chief mentor of Dream Room, however many of his GM and IM prodigies are also featured in the course for an enhanced learning experience.`
    },
    {
      question:
        "In total,  how many hours do I obtain when I subscribe to Chess Dream Room (Beginner Subscription)?",
      answer:
        "You get a total of over 5 hours of content which includes 39 episodes by GM RB Ramesh."
    }
  ];

  chessCombo = [
    {
      question:
        "Do I need to install a special software to access the programs of Chess 635 combo?",
      answer:
        "No, all you need is good quality internet and a laptop/mobile device. You will require to install a small app called Zoom Meetings to access the LIVE sessions."
    },
    {
      question: "Is the fee mentioned on the website for the entire program?",
      answer:
        "Yes, the fee mentioned will give you access to all the 5 programs listed in the combo offering."
    },
    {
      question:
        "I have already enrolled for some of the courses offered in the combo, do I need to pay full fees of the combo?",
      answer:
        "No, if you have already enrolled for one or more programs included in Chess 635 combo you can go for the upgrade option. To know about your upgrade option connect with us at +91 8287409916 via call or whatsapp."
    },
    {
      question: "Can the videos of this program be downloaded?",
      answer:
        "We are sorry, we do not allow downloading the videos and have put up a multi-layered security cover to prevent the same."
    },
    {
      question: "Does this combo include both the ChessHour Series A & B?",
      answer:
        "No, you can choose one of the batches from Series A: 7 - 8 PM (IST) or Series B: 6 - 7 AM (IST) as per your time preference."
    },
    {
      question:
        "What will be the schedule of the different programs listed in this combo?",
      answer: `The schedule will be as follows:<br>

'Mastering Middle Games' 52-Week Program <br>
Starting 16th February 2020, every Sunday, 6 - 7:30 PM (IST)<br><br>


The Grand Master Mindset<br>
Starting 20th February 2020, every Thursday, 6 - 7 PM (IST)<br><br>

CHESSHOUR Annual Subscription - Series A or B<br>
Daily 1-hour classes with GM coaches 
Series A:
Monday - Friday: 7 - 8 PM (IST)
Saturday: 6 - 7 PM (IST)
Sunday: 5 - 6 PM (IST)<br><br>

Series B:<br>
Monday - Sunday: 6 - 7 AM (IST)<br><br>

Advanced GM Opening Preparation Program<br>
To be disclosed<br><br>

The Legend of ''Moro"<br>
To be disclosed<br></br>
`
    },
    {
      question: "What happens if I miss a LIVE session?",
      answer:
        "No worries, we provide you with 1-year access to recordings of all sessions so that you may watch those at a later time as well."
    }
  ];

  constructor(
    private _activated: ActivatedRoute,
    private _amps: AmplitudeService
  ) {}

  ngOnInit() {
    this._activated.params.subscribe(params => {
      // console.log(params, "PARAMS");
      if (params.product_id == 35) {
        this.productList = this.dreamroom;
      } else if (params.product_id == 574) {
        this.productList = this.chessHour;
      } else if (params.product_id == 680) {
        this.productList = this.super64;
      } else if (params.product_id == 573) {
        this.productList = this.chessHour;
      } else if (params.product_id == 697) {
        this.productList = this.cricket;
      } else if (params.product_id == 746) {
        this.productList = this.mmg;
      } else if (params.product_id == 778) {
        this.productList = this.moro;
      } else if (params.product_id == 672) {
        this.productList = this.middle;
      } else if (params.product_id == 787) {
        this.productList = this.chessCombo;
      } else if (params.product_id == 776) {
        this.productList = this.openingProgram;
      } else if (params.product_id == 807) {
        this.productList = this.chessDream;
      } else if (params.product_id == 810) {
        this.productList = this.beauty;
      }
    });
  }

  callUs() {
    this._amps.setAmplitudeEvents(events.event_30, {
      success: "yes",
      product_id: this.product_id
    });
  }

  clickQuestion(question) {
    this._amps.setAmplitudeEvents(events.event_31, {
      product_id: this.product_id,
      question: question
    });
  }
}
