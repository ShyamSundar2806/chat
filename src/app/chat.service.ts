import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  c1toc2chat:any
  c2Lastseen:any;
  c1Lastseen:any;
  habibdp="../../assets/shyam.jpeg"
  arundp="../../assets/muthu.jpg"
    constructor() { 
      this.c1toc2chat=[];
    }
  
  
    customer2agent(array:any){
      this.c1toc2chat=array
    }
    cuslstsee(time:any){
      this.c2Lastseen=time;
    }
    agelastsee(time:any){
      this.c1Lastseen=time;
    }
}
