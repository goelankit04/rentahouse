import { Injectable } from '@angular/core';

@Injectable()
export class StarroomDataService {

  user_level: number;
  episodesPerPage = 10;

  episodeList = [
    {
      id: 1,
      name: 'The Introduction',
      additionalText: 'Introduction',
      length: '8',
      views: '18,200',
      likes: '96',
      status: true
    },
    {
      id: 2,
      name: 'Setting up a chess board',
      additionalText: 'Setting up a chess board - Getting ready',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 3,
      name: 'How to move the pieces',
      additionalText: 'How to move the pieces - Marching towards the opponent',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 4,
      name: 'About Pawns',
      additionalText: 'About Pawns - the little ones',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 5,
      name: 'Castling',
      additionalText: 'Castling - Is this about a castle?',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 6,
      name: 'Writing a scoresheet and operating chess clock',
      additionalText: 'Writing a scoresheet and operating chess clock - creating a proof',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 7,
      name: '3 stages of a game',
      additionalText: '3 stages of a game',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 8,
      name: 'Attack',
      additionalText: 'Attack - the real fight',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 9,
      name: 'Check',
      additionalText: 'Check - Questioning the king directly',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 10,
      name: 'Respond to attack by defence',
      additionalText: 'Respond to attack by defence - counter fight',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 11,
      name: 'Capturing',
      additionalText: 'Capturing - Killing',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 12,
      name: 'Checkmate and stalemate',
      additionalText: 'Checkmate and stalemate',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 13,
      name: 'Checkmate - by Queen, 2 rooks, 1 rook',
      additionalText: 'Checkmate - by Queen, 2 rooks, 1 rook - death of the king and the kingdom or The final frontier',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 14,
      name: 'Checkmate - by coordination of different pieces',
      additionalText: 'Checkmate - by coordination of different pieces',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 15,
      name: 'Draw - 5 situations',
      additionalText: 'Draw - The white flag. Let us stop fighting',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 16,
      name: 'Forcing moves',
      additionalText: 'Forcing moves - Do what I want',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 17,
      name: 'Gaining material',
      additionalText: 'Gaining material',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 18,
      name: 'Tactical Theme - Double attack',
      additionalText: 'Tactical Theme - Double attack',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 19,
      name: 'Tactical Theme - Discovered attack and Discovered check',
      additionalText: 'Tactical Theme - Discovered attack and Discovered check - The surprise element',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 20,
      name: 'Tactical Theme - Pin',
      additionalText: 'Tactical Theme - Pin - Is this a safety pin?',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 21,
      name: 'Tactical Theme - Skewer',
      additionalText: 'Tactical Theme - Skewer - May this be for cooking?',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 22,
      name: 'Tactical Theme - Decoy & Deflection',
      additionalText: 'Tactical Theme - Decoy & Deflection',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 23,
      name: 'Tactical Theme - Clearance',
      additionalText: 'Tactical Theme - Clearance - Any traffic to be cleared?',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 24,
      name: 'Tactical Theme - Fork',
      additionalText: 'Tactical Theme - Fork - sure not for noodles.',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 25,
      name: 'Tactical Theme - Piece Overloading',
      additionalText: 'Tactical Theme - Piece Overloading - Is there a donkey that is overloaded in chess other rook and knight?',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 26,
      name: 'Tactical Theme - Backrank Mate',
      additionalText: 'Tactical Theme - Backrank Mate - 1st and last rank I know. Backrank?',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 27,
      name: 'Thematic sacrifice - Bh7',
      additionalText: 'Thematic sacrifice - Bh7 sacrifice for better.',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 28,
      name: 'Thematic sacrifice - Nf7',
      additionalText: 'Thematic sacrifice - Nf7',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 29,
      name: 'Thematic sacrifice - Ne6',
      additionalText: 'Thematic sacrifice - Ne6',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 30,
      name: 'Thematic sacrifice - Bh6',
      additionalText: 'Thematic sacrifice - Bh6',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 31,
      name: 'Attack on uncastled king',
      additionalText: 'Attack on uncastled king',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 32,
      name: 'Attack on castled king',
      additionalText: 'Attack on castled king - is the King really safe?',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 33,
      name: 'Opening principles',
      additionalText: 'Opening principles - Basic discipline',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 34,
      name: 'Punishing when breaking opening principles',
      additionalText: 'Punishing when breaking opening principles',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    },
    {
      id: 35,
      name: 'End game',
      additionalText: 'End game - Less pieces more spaces in the board',
      length: '8',
      views: '18,200',
      likes: '96',
      status: false
    }
  ];

  constructor() { }

  // episodeList related functions

  getEpisodeList(): Array<any> {
    return this.episodeList;
  }

  getEpisodeById(id: number): any {
    return this.episodeList.filter((episode) => episode.id === id)[0];
  }

  getEpisodeByPage(pageNumber: number): any {
    let firstEpisodeIndex = this.episodesPerPage * (pageNumber - 1);
    const episodeChunk = [];

    for (let i = 0; i < this.episodesPerPage; i++) {
      if (firstEpisodeIndex !== this.episodeList.length) {
        episodeChunk[i] = this.episodeList[firstEpisodeIndex++];
      } else {
        break;
      }
    }
    return episodeChunk;
  }

  getNumberOfPages(): number {
    return Math.ceil(this.episodeList.length / this.episodesPerPage);
  }

  setLevel(level_id: number) {
    this.user_level = level_id;
  }

  getLevel(): number {
    return this.user_level;
  }
}
