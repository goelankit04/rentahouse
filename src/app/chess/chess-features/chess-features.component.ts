import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: "app-chess-features",
  templateUrl: "./chess-features.component.html"
})
export class ChessFeaturesComponent implements OnInit {
  @HostBinding("class") chessFeaturesComponentClass = "app-chess-features";
  currentFeature: any;

  features: Array<any> = [
    {
      id: 1,
      isPatience: true,
      heading: 'Develop Patience',
      width: '40%',
      description:
      `Chess inculcates the virtues of patience and strategic thought as it trains one to think beyond losing
       the battle to win the war. A seemingly strong move, wrongly timed, can backfire. A patient player knows
       how to bide his time and maximize his gains without being carried away. A patient man is also a resilient
       man, a key strength to being successful in the game of life.`
    },
    {
      id: 2,
      heading: 'Sharpen Your Memory',
      isMemory: true,
      width: '48%',
      description:
      `Good chess players learn to remember their moves from historical games and use those in future games.
       Cognitive abilities of chess players are very high as they use pattern recognition to recollect the moves
       made in the past. Successful players quite often develop a vivid eidetic memory that makes them remember
       moves, the game(s) in which they were used, the tournament, the year of competition and the players involved.`
    },
    {
      id: 3,
      heading: 'Learn to Visualize',
      isVisual: true,
      width: '39%',
      description:
      `Chess and visualization go hand-in-hand. It's fairly well established that logical and strategic thinkers
       make good chess players and vice-versa. It’s not just about one move but involves "seeing" 20 moves ahead.
       Strong chess players can sense where the next move would lead to, they use this to improvise during a game,
       breaking conventional gameplay on-the-go and surprising opponents with an unexpected move.`
    },
    {
      id: 4,
      heading: 'Cultivate Presence of Mind',
      isPresence: true,
      width: '39%',
      description: `Presence of Mind includes a keen observation skill and ability to multitask to "gather" all
       that's happening around. In chess, as in life, success comes from knowing the change and quickly adapting
       to it. The pre-meditated approach doesn't work when the opponent switches tactics, and that is where being
       preemptive is an advantage. It may sound quite normal, but being in the moment is an attained skill that can
       be worked upon and sharpened. It also entails being calm and composed in a stressful situation, and hence is
       closely associated with good concentration.`
    },
    {
      id: 5,
      heading: 'Strengthen Concentration',
      isConcentration: true,
      width: '40%',
      description:
      `In this modern world laced with constant distractions, the ability to focus is a profoundly valuable skill.
       With chess, concentration levels of players evolve as a lapse in concentration can be quite brutal. Playing
       for hours and thinking through multiple decision trees helps chess players develop strong concentration skills.`
    }
  ];

  constructor() {}

  ngOnInit() {
    this.currentFeature = this.features.filter(feature => feature.id === 1)[0];
  }

  mouseEnter(id: number) {
    this.currentFeature = this.features.filter(feature => feature.id === id)[0];
  }

  mouseLeave() {
    // this.currentFeature = this.features.filter((feature) => feature.id === id)[0];
  }
}
