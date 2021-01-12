import { Injectable } from "@angular/core";

@Injectable()
export class ExampleService {
  exampleList = [
    {
      episode: 1,
      id: 1,
      level: 1,
      heading: `c6 square on the board.`,
      detail: ``,
      config: {
        position: "trash",
        orientation: true,
      },
    },
    {
      episode: 1,
      id: 2,
      level: 1,
      heading: `e4 square on the board.`,
      detail: ``,
      config: {
        position: "trash",
        orientation: true,
      },
    },
    {
      episode: 1,
      id: 3,
      level: 1,
      heading: `e6 square on the board.`,
      detail: ``,
      config: {
        position: "trash",
        orientation: true,
      },
    },
    {
      episode: 1,
      id: 4,
      level: 1,
      heading: `b3 square on the board.`,
      detail: ``,
      config: {
        position: "trash",
        orientation: true,
      },
    },
    {
      episode: 1,
      id: 5,
      level: 1,
      heading: `h3 square on the board.`,
      detail: ``,
      config: {
        position: "trash",
        orientation: true,
      },
    },

    {
      episode: 1,
      id: 6,
      level: 1,
      heading: `The king side files.`,
      detail: ``,
      config: {
        position: "trash",
        orientation: true,
      },
    },

    {
      episode: 1,
      id: 7,
      level: 1,
      heading: `The queen sides files.`,
      detail: ``,
      config: {
        position: "trash",
        orientation: true,
      },
    },

    {
      episode: 1,
      id: 8,
      level: 1,
      heading: `The 3rd rank.`,
      detail: ``,
      config: {
        position: "trash",
        orientation: true,
      },
    },
    {
      episode: 1,
      id: 9,
      level: 1,
      heading: `The 6th rank.`,
      detail: ``,
      config: {
        position: "trash",
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 1,
      level: 1,
      heading: `King at its best can cover 8 squares at a given time. King in the center is considered a good tool in the endgames.`,
      question_type: "example",
      answer: "",
      message: `No, A queen cannot jump over our own material`,
      detail: ``,
      config: {
        position: "8/8/8/8/4K3/8/8/8 w - - 0 1",
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 2,
      level: 1,
      heading: `Here the king is around the center but can again move to 8 different squares.`,
      question_type: "example",
      answer: "",
      message: `Yes, A knight can jump over opponent material`,
      detail: ``,
      config: {
        position: "8/8/3k4/8/8/8/8/8 w - - 0 1",
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 3,
      level: 1,
      heading: `King in the corner has minimal squares to move. Here it can go to only 3 squares.`,
      question_type: "example",
      answer: "",
      message: `No, Both Kings can never come close to each other`,
      detail: ``,
      config: {
        position: "7k/8/8/8/8/8/8/8 w - - 0 1",
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 4,
      level: 1,
      heading: `This is an initial position of the knight. It can move to 3 different squares.`,
      question_type: "example",
      answer: "",
      message: ``,
      detail: ``,
      config: {
        position: "8/8/8/8/8/8/8/6N1 w - - 0 1",
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 5,
      level: 1,
      heading: `Like every other piece, knight plays best in the center. However, a knight, like king can also cover maximum 8 squares at a given time.`,
      question_type: "example",
      answer: "",
      message: ``,
      detail: ``,
      config: {
        position: "8/8/8/8/4N3/8/8/8 w - - 0 1",
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 6,
      level: 1,
      heading: `Knight is worst placed in the corner. It can only go to 2 squares.`,
      question_type: "example",
      answer: "",
      message: `No, The bishop can move only in one set of coloured squares. Here, the bishop can only move in light squares.`,
      detail: ``,
      config: {
        position: "8/8/8/8/8/8/8/n7 w - - 0 1",
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 7,
      level: 1,
      heading: `Knight can go to 4 squares from here.`,
      question_type: "example",
      answer: "",
      message: `Yes, A bishop can go forward or backward on the same colour`,
      detail: ``,
      config: {
        position: "8/8/8/7n/8/8/8/8 w - - 0 1",
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 8,
      level: 1,
      heading: `The white and black knight here cover different squares.
      {Point to be noted: Knight from a light square can move only to a dark square and knight from a dark square can move only to a light square.}`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/4n3/4N3/8/8/8 w - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 9,
      level: 1,
      heading: `Bishop from its initial square can cover as many as 7 squares.`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/8/8/8/8/5B2 w - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 10,
      level: 1,
      heading: `Bishop can cover 13 squares from the center of the board.`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/8/3B4/8/8/8 b - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 11,
      level: 1,
      heading: `Bishop from any square covers a minimum of 7 squares.`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/8/b7/8/8/8 w - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 12,
      level: 1,
      heading: `Rook at its initial position has control of 14 squares.`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/8/8/8/8/R7 w - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 13,
      level: 1,
      heading: `However the fact is, rook can go to only 14 squares no matter where it is positioned on the chess board.`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/8/4R3/8/8/8 w - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 14,
      level: 1,
      heading: `Rook on the seventh rank is considered a deadly weapon. Still goes to 14 squares.`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/8/8/8/7r/8 w - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 15,
      level: 1,
      heading: `Queen has the widest range among all pieces. It’s basically rook + bishop(s) combined. It can move like a bishop as well as rook from any given position.`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/8/8/8/8/3Q4 b - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 16,
      level: 1,
      heading: `The minimum reach of the queen is 21 squares from any given square on the board.`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `7Q/8/8/8/8/8/8/8 b - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 2,
      id: 17,
      level: 1,
      heading: `When in the center queen can control up to 27 squares.`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/8/4q3/8/8/8 w - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 3,
      id: 1,
      level: 1,
      heading: `A pawn from its initial position can move two squares or one square.`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/8/8/8/3P4/8 w - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 3,
      id: 2,
      level: 1,
      heading: `Pawn that has left its initial position cannot move two squares anymore      `,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/8/8/7P/8/8 w - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 3,
      id: 3,
      level: 1,
      heading: `The pawn captures diagonally`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/8/3p1p2/4P3/8/8 w - - 0 11`,
        orientation: true,
      },
    },
    {
      episode: 3,
      id: 4,
      level: 1,
      heading: `The pawn when it moves to the eighth rank can promote to a piece of your choice. This piece can be Q, R, B, or N .... A pawn cannot remain a pawn on eighth rank and it cannot be promoted to a K `,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/2P5/8/8/8/8/8/8 w - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 3,
      id: 5,
      level: 1,
      heading: `Here is another special power of the pawn. Let's assume black just played his pawn from d7 to d5. White can capture it by playing 'exd6' This is called 'En-Passant'`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/3pP3/8/8/8/8 w - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 3,
      id: 6,
      level: 1,
      heading: `The possible moves for black in this position`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/8/2p5/1P1N4/8/8 w - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 4,
      id: 1,
      level: 1,
      heading: `The King and rook have a special move too! From their initial position they can move simultaneously. This process is called 'Castling' Here is an example of King side Castling O-O The Castling changes the position of both king and rook. The King goes to 'g1' from 'e1' and the rook goes to 'f1' from 'h1' square
      `,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/8/8/8/8/4K2R w - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 4,
      id: 2,
      level: 1,
      heading: `The other type of castling is on the queen side. Here the King goes to 'c1' and rook comes to 'd1'`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `8/8/8/8/8/8/8/R3K3 w - - 0 1`,
        orientation: true,
      },
    },
    {
      episode: 4,
      id: 3,
      level: 1,
      heading: `Black can castle this position`,
      question_type: "example",
      answer: "",
      message: "",
      detail: ``,
      config: {
        position: `4k2r/8/8/8/8/8/8/8 w - - 0 1 `,
        orientation: true,
      },
    },
  ];

  constructor() {}

  getBeginnerExampleList(episodeid: any) {
    return this.exampleList.filter(
      (p: any) => parseInt(p.episode) === parseInt(episodeid)
    );
  }

  getExampleListById(episodeid: any, id: any) {
    return this.exampleList.filter(
      (p: any) =>
        parseInt(p.id) === parseInt(id) &&
        parseInt(p.episode) === parseInt(episodeid)
    )[0];
  }
}
