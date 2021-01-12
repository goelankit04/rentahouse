import { Injectable } from '@angular/core';

@Injectable()
export class PuzzleService {

  puzzleList = [
    {
      episode: 1,
      id: 1,
      level: 1,
      heading: `Identify the 4 central squares on the chess board.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: true
      }
    },
    {
      episode: 1,
      id: 2,
      level: 1,
      heading: `Identify the square d6 on the board.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: true
      }
    },
    {
      episode: 1,
      id: 3,
      level: 1,
      heading: `Identify the square d6 on the board.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: false
      }
    },
    {
      episode: 1,
      id: 4,
      level: 1,
      heading: `Identify the square b3 on the board.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: true
      }
    },
    {
      episode: 1,
      id: 5,
      level: 1,
      heading: `Identify the square b3 on the board.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: false
      }
    },
    {
      episode: 1,
      id: 6,
      level: 1,
      heading: `Identify the square g4 on the board.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: true
      }
    },
    {
      episode: 1,
      id: 7,
      level: 1,
      heading: `Identify the square g4 on the board.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: false
      }
    },
    {
      episode: 1,
      id: 8,
      level: 1,
      heading: `Identify the square a8 on the board.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: true
      }
    },
    {
      episode: 1,
      id: 9,
      level: 1,
      heading: `Identify the square a8 on the board.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: false
      }
    },
    {
      episode: 1,
      id: 10,
      level: 1,
      heading: `Identify the square f6.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: true
      }
    },
    {
      episode: 1,
      id: 11,
      level: 1,
      heading: `Identify the square f6.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: false
      }
    },
    {
      episode: 1,
      id: 12,
      level: 1,
      heading: `Identify the central files.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: true
      }
    },
    {
      episode: 1,
      id: 13,
      level: 1,
      heading: `Identify the central files.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: false
      }
    },
    {
      episode: 1,
      id: 14,
      level: 1,
      heading: `Identify the King side files.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: true
      }
    },
    {
      episode: 1,
      id: 15,
      level: 1,
      heading: `Identify the King side files.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: false
      }
    },
    {
      episode: 1,
      id: 16,
      level: 1,
      heading: `Identify the Queen sides files.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: true
      }
    },
    {
      episode: 1,
      id: 17,
      level: 1,
      heading: `Identify the Queen sides files.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: false
      }
    },
    {
      episode: 1,
      id: 18,
      level: 1,
      heading: `Identify the 6th rank.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: true
      }
    },
    {
      episode: 1,
      id: 19,
      level: 1,
      heading: `Identify the 6th rank.`,
      detail: ``,
      config: {
        position: 'trash',
        orientation: false
      },
    },
    {
      episode: 2,
      id: 1,
      level: 1,
      heading: `Question: Can white queen capture black pawn on e5?`,
      question_type: 'boolean',
      answer: 'no',
      message: `No, A queen cannot jump over our own material`,
      detail: ``,
      config: {
        position: '6k1/5q2/8/4p3/4P3/8/4Q3/6K1 w - - 0 1',
        orientation: false
      },
    },
    {
      episode: 2,
      id: 2,
      level: 1,
      heading: `Question: Can white knight capture black pawn on b6?`,
      question_type: 'boolean',
      answer: 'yes',
      message: `Yes, A knight can jump over opponent material`,
      detail: ``,
      config: {
        position: '8/6k1/1pp5/2p5/2N5/8/6K1/8 w - - 0 1',
        orientation: false
      },
    },
    {
      episode: 2,
      id: 3,
      level: 1,
      heading: `Question: Can white king move to f6 square?`,
      question_type: 'boolean',
      answer: 'no',
      message: `No, Both Kings can never come close to each other`,
      detail: ``,
      config: {
        position: '8/5k2/8/5K2/8/8/8/8 w - - 0 1',
        orientation: false
      },
    },
    {
      episode: 2,
      id: 4,
      level: 1,
      heading: `Question: Can white king move to square f4?`,
      question_type: 'boolean',
      answer: 'no',
      message: `No, The King cannot go to a square that is under control by an opponent piece or pawn`,
      detail: ``,
      config: {
        position: '8/1k6/8/6p1/8/4K3/8/8 w - - 0 1',
        orientation: false
      },
    },
    {
      episode: 2,
      id: 5,
      level: 1,
      heading: `Question: Can white rook move to square g4?`,
      question_type: 'boolean',
      answer: 'no',
      message: `No, The Rook cannot jump over other pieces or pawns`,
      detail: ``,
      config: {
        position: '8/6k1/8/8/1p1R1P2/8/6K1/8 w - - 0 1',
        orientation: false
      },
    },
    {
      episode: 2,
      id: 6,
      level: 1,
      heading: `Question: Can the bishop give a check to black king?`,
      question_type: 'boolean',
      answer: 'no',
      message: `No, The bishop can move only in one set of coloured squares. Here, the bishop can only move in light squares.`,
      detail: ``,
      config: {
        position: '8/6k1/8/8/8/3B4/6K1/8 w - - 0 1',
        orientation: false
      },
    },
    {
      episode: 2,
      id: 7,
      level: 1,
      heading: `Question: Can the black bishop go to b8 square in this position?`,
      question_type: 'boolean',
      answer: 'yes',
      message: `Yes, A bishop can go forward or backward on the same colour`,
      detail: ``,
      config: {
        position: '8/8/4k3/4b3/8/4K3/8/8 b - - 0 1',
        orientation: false
      },
    },
    {
      episode: 2,
      id: 8,
      level: 1,
      heading: `Question: Can the black knight go to a black square in this position?`,
      question_type: 'boolean',
      answer: 'no',
      message: ` A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move`,
      detail: ``,
      config: {
        position: `8/1k6/8/8/3n2K1/8/8/8 b - - 0 1`,
        orientation: true
      },
    },
    {
      episode: 1,
      id: 1,
      level: 2,
      heading: `White to move and win.`,
      question_type: 'puzzle',
      answer: 'no',
      message: ` A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move`,
      detail: ``,
      config: {
        position: `3r2k1/pb1N1p1p/1p2p1pQ/q2n4/1b1P4/1Br5/P2B1PPP/R3R1K1 w - - 0 23`,
        orientation: true,
        draggable: true
      },
    },
    {
      episode: 1,
      id: 2,
      level: 2,
      heading: `White to move and win.`,
      question_type: 'puzzle',
      answer: 'no',
      message: ` A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move`,
      detail: ``,
      config: {
        position: `5rk1/r3nppp/p2N4/8/1Q6/8/PPP3Pq/1K1RR3 w - - 0 24`,
        orientation: true,
        draggable: true
      },
    },
    {
      episode: 1,
      id: 3,
      level: 2,
      heading: `Black to move and win.`,
      question_type: 'puzzle',
      answer: 'no',
      message: ` A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move`,
      detail: ``,
      config: {
        position: `2r2rk1/p4ppp/4pb2/2q5/1p2PP2/5Q2/PPPRN1PP/2K1R3 b - - 0 1`,
        orientation: false,
        draggable: true
      },
    },
    {
      episode: 1,
      id: 4,
      level: 2,
      heading: `White to move and win.`,
      question_type: 'puzzle',
      answer: 'no',
      message: ` A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move`,
      detail: ``,
      config: {
        position: `rn4k1/p1p1Qrp1/3P2pp/3P4/4Np2/7q/PP5P/R1B1K2R w - - 0 24`,
        orientation: true,
        draggable: true
      },
    },
    {
      episode: 1,
      id: 5,
      level: 2,
      heading: `White to move and win.`,
      question_type: 'puzzle',
      answer: 'no',
      message: ` A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move`,
      detail: ``,
      config: {
        position: `2r1k3/1p1bppb1/p2p1np1/q3n1P1/3NP3/2N1BP2/PPPQB3/1K1R3r w - - 0 1`,
        orientation: true,
        draggable: true
      },
    },
    {
      episode: 2,
      id: 1,
      level: 2,
      heading: `White to move and win.`,
      question_type: 'puzzle',
      answer: 'no',
      message: ` A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move`,
      detail: ``,
      config: {
        position: `1r5k/6np/p2p1rpB/1pq1b3/2p1B1PQ/8/PP2RP1P/4R1K1 w - - 0 28`,
        orientation: true,
        draggable: true
      },
    },
    {
      episode: 2,
      id: 2,
      level: 2,
      heading: `White to move and win.`,
      question_type: 'puzzle',
      answer: 'no',
      message: ` A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move`,
      detail: ``,
      config: {
        position: `2b5/pp2kpR1/2p4p/r2n3P/4NP2/P2P1B2/4PK2/8 w - - 0 34`,
        orientation: true,
        draggable: true
      },
    },
    {
      episode: 2,
      id: 3,
      level: 2,
      heading: `White to move and win.`,
      question_type: 'puzzle',
      answer: 'no',
      message: ` A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move`,
      detail: ``,
      config: {
        position: `1k3r2/2n3p1/p1pNn3/1p3Pb1/1P6/1P5P/1K1B4/2RB4 w - - 0 49`,
        orientation: true,
        draggable: true
      },
    },
    {
      episode: 2,
      id: 4,
      level: 2,
      heading: `Black to move and win.`,
      question_type: 'puzzle',
      answer: 'no',
      message: ` A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move`,
      detail: ``,
      config: {
        position: `5r1k/2p3b1/4b1pp/R3p3/4P3/2PQ2N1/1r2BqPP/R6K b - - 0 34`,
        orientation: true,
        draggable: true
      },
    },{
      episode: 4,
      id: 1,
      level: 1,
      heading: `Can Black do Queen side castle ?`,
      question_type: 'boolean',
      answer: 'yes',
      message: ` A Knight can go from white to black or black to white square only. So it cannot go to a black square in this move`,
      detail: ``,
      config: {
        position: `r3k3/8/8/8/8/8/8/8 w - - 0 1`,
        orientation: false,
        draggable: false
      },
    },
    {
      episode: 4,
      id: 2,
      level: 1,
      heading: `White can castle on King side?`,
      question_type: 'boolean',
      answer: 'yes',
      message: `on the Queenside. With Bb5 present for black, white cannot castle on the Kingside`,
      detail: ``,
      config: {
        position: `8/3k4/8/1b6/8/8/8/R3K2R w KQ - 0 1`,
        orientation: false,
        draggable: false
      },
    },
    {
      episode: 4,
      id: 3,
      level: 1,
      heading: `White can castle on Queen side?`,
      question_type: 'boolean',
      answer: 'no',
      message: `Bf4 prevents white from castling on the queenside`,
      detail: ``,
      config: {
        position: `8/8/4k3/8/5b2/8/8/R3K2R w KQ - 0 1`,
        orientation: false,
        draggable: false
      },
    },
    {
      episode: 4,
      id: 4,
      level: 1,
      heading: `White can castle on Queen side?`,
      question_type: 'boolean',
      answer: 'no',
      message: `Nf3 controls d1 square so white cannot castle on the queenside. Even though the Rh1 is under attack, white can still legally castle on the Kingside`,
      detail: ``,
      config: {
        position: `8/8/4k3/8/8/8/5n2/R3K2R w KQ - 0 1`,
        orientation: false,
        draggable: false
      },
    },
    {
      episode: 4,
      id: 5,
      level: 1,
      heading: `Can white castle on the Queenside?`,
      question_type: 'boolean',
      answer: 'yes',
      message: `Yes, even though the Ra1 is under attack, he can still castle on the Queenside`,
      detail: ``,
      config: {
        position: `8/8/4kb2/8/8/8/8/R3K2R w KQ - 0 1`,
        orientation: false,
        draggable: false
      },
    },

    {
      episode: 4,
      id: 6,
      level: 1,
      heading: `Can white castle on the King side?`,
      question_type: 'boolean',
      answer: 'no',
      message: `He cannot, since the square g1 is
      under pawn control, the King cannot really go to that square and complete the
      castling process`,
      detail: ``,
      config: {
        position: `4k3/8/8/8/8/8/7p/4K2R w K - 0 1`,
        orientation: false,
        draggable: false
      },
    },
    {
      episode: 4,
      id: 7,
      level: 1,
      heading: `Can white castle on the King side?`,
      question_type: 'boolean',
      answer: 'no',
      message: `No. Since the square
      g1 is under control by black's Rook, he cannot castle on the King side.`,
      detail: ``,
      config: {
        position: `4k1r1/8/8/8/8/8/8/R3K2R w KQ - 0 1`,
        orientation: false,
        draggable: false
      },
    },
    {
      episode: 4,
      id: 8,
      level: 1,
      heading: ` Can white castle on the Queen side?`,
      question_type: 'boolean',
      answer: 'no',
      message: `No. Since the square
      d1 is under control by black Knight, he cannot cross over that square with his
      King and castle on the queenside`,
      detail: ``,
      config: {
        position: `4k3/8/8/8/8/2n5/8/R3K2R w KQ - 0 1`,
        orientation: false,
        draggable: false
      },
    },
    {
      episode: 4,
      id: 9,
      level: 1,
      heading: ` Can white castle on the Queen side?`,
      question_type: 'boolean',
      answer: 'no',
      message: `No. Since Nb3 is
      controlling the c1 square, he cannot castle on the queen side`,
      detail: ``,
      config: {
        position: `4k3/8/8/8/8/1n6/8/R3K2R w KQ - 0 1`,
        orientation: false,
        draggable: false
      },
    },
    {
      episode: 4,
      id: 10,
      level: 1,
      heading: ` Can white castle on the Queen side?`,
      question_type: 'boolean',
      answer: 'no',
      message: `No. Since pawn on
      c2 controls the d1 square, the King cannot cross over to the Queenside for
      castling`,
      detail: ``,
      config: {
        position: `4k3/8/8/8/8/8/2p5/R3K2R w KQ - 0 1`,
        orientation: false,
        draggable: false
      },
    }
    ,
    {
      episode: 3,
      id: 1,
      level: 1,
      heading: `White has just played e2 pawn to e4,Can black do enpassant here?`,
      question_type: 'boolean',
      answer: 'yes',
      message: ``,
      detail: ``,
      config: {
        position: `48/8/8/8/3pP3/8/8/8 w - - 0 1`,
        orientation: false,
        draggable: false
      },
    } ,
    {
      episode: 3,
      id: 2,
      level: 1,
      heading: `Black has just moved the pawn from g7 to g5. Can White do an enpassant here?`,
      question_type: 'boolean',
      answer: 'yes',
      message: ``,
      detail: ``,
      config: {
        position: `5r1k/1n5p/3P1p2/r1pRpPp1/1p2N1P1/8/PP2B2P/1K6 w - - 0 31`,
        orientation: false,
        draggable: false
      },
    },
    {
      episode: 3,
      id: 3,
      level: 1,
      heading: `Black has just moved the pawn from f7 to f5. Can White do an enpassant
      here?`,
      question_type: 'boolean',
      answer: 'yes',
      message: ``,
      detail: ``,
      config: {
        position: `2r1k2r/1q1pb1p1/p3p3/1p2Pp1p/4NPn1/P2Q4/1PPB2PP/R4R1K w k f6 0 18`,
        orientation: false,
        draggable: false
      },
    },

    {
      episode: 3,
      id: 4,
      level: 1,
      heading: `White just played f2 to f4. Can black do an enpassant here?`,
      question_type: 'boolean',
      answer: 'yes',
      message: ``,
      detail: ``,
      config: {
        position: `r3r1k1/ppqn1ppp/8/n1pP1b2/2P1pP2/P3P2P/BB1N2P1/R2Q1RK1 b - f3 0 17`,
        orientation: false,
        draggable: false
      },
    },
    {
      episode: 3,
      id: 5,
      level: 1,
      heading: `Black just played f7 to f5, can white do an enpassant?`,
      question_type: 'boolean',
      answer: 'yes',
      message: ``,
      detail: ``,
      config: {
        position: `3r2k1/2pqn1p1/p3r2p/1p2Pp2/3P4/4B2P/PPQ2PP1/3RR1K1 w - f6 0 29`,
        orientation: true,
        draggable: false
      },
    },
    {
      episode: 3,
      id: 6,
      level: 1,
      heading: `Black just played b5, can white do an enpassant?`,
      question_type: 'boolean',
      answer: 'yes',
      message: ``,
      detail: ``,
      config: {
        position: `1r3rk1/2n1qpb1/p2p1npp/PppP4/R1P1pN1P/1P2P3/1B1QBPP1/4K2R w K b6 0 19`,
        orientation: false,
        draggable: false
      },
    },
    {
      episode: 3,
      id: 7,
      level: 1,
      heading: `White just played f3 to f4, can black do an enpassant?`,
      question_type: 'boolean',
      answer: 'no',
      message: `No. Only when the pawn moves from second rank to 4th rank can an enpassant be made and that too on the same move`,
      detail: ``,
      config: {
        position: `3r4/pb5p/1p6/1Pppkpp1/P3pP2/4P1PP/2P1B3/3R1K2 b - - 0 28`,
        orientation: false,
        draggable: false
      },
    } ,
    {
      episode: 3,
      id: 8,
      level: 1,
      heading: `Black has just played a7 to a5, Can white do an enpassant?`,
      question_type: 'boolean',
      answer: 'yes',
      message: ``,
      detail: ``,
      config: {
        position: `r1bq1rk1/7p/1p1p4/pPpPb3/5pB1/R7/1P3PPP/2BQR1K1 w - a6 0 20`,
        orientation: false,
        draggable: false
      }
    },
    {
      episode: 7,
      id: 1,
      level: 1,
      heading: `Black to move`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Attack the bishop on h4`,
      config: {
        position: `rnbqk2r/ppp2pp1/5n1p/3p4/1b1P3B/2N1P3/PP3PPP/R2QKBNR b KQkq - 0 7`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 7,
      id: 2,
      level: 1,
      heading: `White to move`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Attack the f7 pawn`,
      config: {
        position: `2kr2r1/pp3p2/8/n1pPB1p1/1b2p3/2NbP3/PP2NPP1/2KR3R w - - 0 20`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 7,
      id: 3,
      level: 1,
      heading: `Black to move`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Attack the white Queen`,
      config: {
        position: `r3nrk1/p1q1p1bp/P1p3p1/3P2P1/2QP2b1/2N1BN2/1PP2P2/R3K2R b KQ - 0 20`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 7,
      id: 4,
      level: 1,
      heading: `Black to move`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Attack the white Queen`,
      config: {
        position: `r4rk1/pp1bpp1p/6p1/q1nP4/5B1P/2b1PN2/P3BPP1/2RQ2KR b - - 0 14`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 7,
      id: 5,
      level: 1,
      heading: `White to move`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Attack the black Rook`,
      config: {
        position: `1qrr2k1/1p3pbp/1Pnpp1p1/pB6/4P3/PP2BPP1/2R2QKP/3R4 w - - 0 27`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 7,
      id: 6,
      level: 1,
      heading: `White to move`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Attack the black Queen`,
      config: {
        position: `2r3k1/1r3pbp/QPq3p1/P7/2p2B2/5PP1/4R1KP/3R4 w - - 0 41`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 7,
      id: 7,
      level: 1,
      heading: `White to move`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Attack the black Queen`,
      config: {
        position: `r1b1r1k1/1ppp1ppp/p1n3n1/4P2q/4R3/B1QB1N2/P4PPP/3R2K1 w - - 0 17`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 7,
      id: 8,
      level: 1,
      heading: `White to move`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Attack the black Queen`,
      config: {
        position: `r4k1r/pp3ppp/1bp5/3qN3/3P4/8/P1P2PPP/R2QR1K1 w - - 0 15`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 7,
      id: 9,
      level: 1,
      heading: `White to play`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Attack the black Queen`,
      config: {
        position: `r1b2r1k/pp1p1p1p/n1pN4/b3P1pn/2BP1p1q/2PN4/PP2Q1PP/R1B2RK1 w - - 0 15`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 7,
      id: 10,
      level: 1,
      heading: `White to play`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Attack the black Bishop`,
      config: {
        position: `rnb1k2r/ppppqppp/5n2/8/1bBPPp2/5N2/PPP1Q1PP/RNB1K2R w KQkq - 0 7`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 7,
      id: 11,
      level: 1,
      heading: `White to play`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Attack the black Knight`,
      config: {
        position: `rnb1k2r/ppppqppp/5n2/b7/2BPPp2/2P2N2/PP2Q1PP/RNB1K2R w KQkq - 0 8`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 7,
      id: 12,
      level: 1,
      heading: `White to play`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Attack the black Knight`,
      config: {
        position: `rnb2rk1/ppppqppp/8/b3P2n/2BP1p2/2P2N2/PP2Q1PP/RNB2RK1 w - - 0 10`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 8,
      id: 1,
      level: 1,
      heading: `White to give a check`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Attack the black Knight`,
      config: {
        position: `r1bqk2r/pp3p2/7p/n1pP2p1/1b2p3/1QN1P1B1/PP3PPP/R3K1NR w KQkq - 0 13`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 8,
      id: 2,
      level: 1,
      heading: `Black to play`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Black to give a check`,
      config: {
        position: `2kr4/pp1r1p1R/1n1P3R/6p1/1bp1p3/1PNbP1B1/P3NPP1/2K5 b - - 0 25`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 8,
      id: 3,
      level: 1,
      heading: `White to play`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `White to give a check by capturing material`,
      config: {
        position: `r3nrk1/p1q1p1bp/P1pp2p1/6P1/2pPP1b1/2N1BN2/1PP1QP2/R3K2R w KQ - 0 19`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 8,
      id: 4,
      level: 1,
      heading: `White to play`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `White to give a check black King`,
      config: {
        position: `r1bq1rk1/ppp3pp/2np1b2/4pp2/2PP4/1P4P1/PB1QPPBP/R3NRK1 w - - 0 12`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 8,
      id: 5,
      level: 1,
      heading: `Black to play`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Black to give a check by winning material`,
      config: {
        position: `r1b2rk1/pp1nppbp/6p1/q1PP4/5B2/2P1PN2/P3BPPP/2RQK2R b K - 0 11`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 8,
      id: 6,
      level: 1,
      heading: `Black to play`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Black to give a check with black Knight`,
      config: {
        position: `8/4n3/2k5/8/8/4K3/8/8 b - - 0 1`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 8,
      id: 7,
      level: 1,
      heading: `White to play`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Give all possible check to black King with the Rook`,
      config: {
        position: `8/2k5/8/8/8/8/6K1/4R3 w - - 0 1`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 8,
      id: 8,
      level: 1,
      heading: `White to play`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `Give a check to black King with pawns`,
      config: {
        position: `8/8/5k2/8/4P1P1/8/3K4/8 w - - 0 1`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 8,
      id: 9,
      level: 1,
      heading: `White to play`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `White to give a check to black King`,
      config: {
        position: `8/8/8/2k5/8/8/5N1K/8 w - - 0 1`,
        orientation: true,
        draggable: true
      }
    },
    {
      episode: 8,
      id: 10,
      level: 1,
      heading: `White to play`,
      question_type: 'puzzle',
      answer: 'yes',
      message: ``,
      detail: `White to give a check to black King without loosing material`,
      config: {
        position: `8/8/8/8/6k1/8/1K6/5B2 w - - 0 1`,
        orientation: true,
        draggable: true
      }
    }

  ];

  constructor() {
  }

  getPuzzleList(level: any, episodeid: any) {
    return this.puzzleList.filter((p: any) => parseInt(p.episode) === parseInt(episodeid) && parseInt(p.level) === parseInt(level));
  }

  getPuzzleById(level: any, episodeid: any, id: any) {
    return this.puzzleList.filter((p: any) => parseInt(p.level) === parseInt(level) && parseInt(p.id) === parseInt(id) && parseInt(p.episode) === parseInt(episodeid))[0];
  }

}
