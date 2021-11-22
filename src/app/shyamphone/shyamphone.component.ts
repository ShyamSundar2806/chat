import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-shyamphone',
  templateUrl: './shyamphone.component.html',
  styleUrls: ['./shyamphone.component.css']
})
export class ShyamphoneComponent implements OnInit,OnDestroy {

  senderName: string;
  c1toc2:any;
  c1lastseen:any
  c2lastseen:any
  arundp: any;


  constructor(private c1:ChatService) {
    this.senderName="shyam";
    this.c1toc2=c1.c1toc2chat;
    console.log(this.c1toc2);
   }

  ngOnInit(): void {
      this.c1lastseen=this.c1.c2Lastseen;
      this.arundp=this.c1.arundp;
  }
  
  sent(textmsg:any){
    let msgObj = {
      senderName: "Muthu",
      msg: textmsg,
      time:new Date()

    }

    this.c1toc2.push(msgObj);
    this.c1.c1toc2chat(this.c1toc2)
    
  }
  ngOnDestroy(){
    this.c2lastseen=new Date;
    this.c1.agelastsee(this.c2lastseen)

  }

}
