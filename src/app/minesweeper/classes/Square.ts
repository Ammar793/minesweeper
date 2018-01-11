/**
 * Created by Ammar Raufi on 1/6/2018.
 */
export class Square{

  viewClass: string;
  neighborCount: number;
  minePresent: boolean;
  clicked:boolean;
  marked:boolean;

  constructor(viewClass: string, neighborCount:number, minePresent: boolean, clicked:boolean,marked:boolean){
    this.viewClass = viewClass;
    this.neighborCount = neighborCount;
    this.minePresent= minePresent;
    this.clicked=clicked;
    this.marked = marked;
  }
}
