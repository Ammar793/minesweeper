import {Square} from "./Square";
/**
 * Created by Ammar Raufi on 1/7/2018.
 */
export class Board{

  squares: Square[][];
  squaresRemaining: number;
  length:number;
  height:number;
  numberOfMines:number;

  constructor(squares: Square[][], squaresRemaining: number,length:number,height:number,numberOfMines:number){
    this.squares = squares;
    this.squaresRemaining = squaresRemaining;
    this.height = height;
    this.length = length;
    this.numberOfMines = numberOfMines;
  }
}
