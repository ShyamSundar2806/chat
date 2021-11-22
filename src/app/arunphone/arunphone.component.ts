import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-arunphone',
  templateUrl: './arunphone.component.html',
  styleUrls: ['./arunphone.component.css']
})
export class ArunphoneComponent implements OnInit,OnDestroy {

  senderName: any;
  c1toc2:any
  c2lastseen:any;
  c1lastseen:any;
  habibdp: any;
  constructor(private c2:ChatService) {
    this.senderName="Muthu";
    this.c1toc2=c2.c1toc2chat;
   }

  ngOnInit(): void {
    this.c1lastseen=this.c2.c1Lastseen;
    this.habibdp=this.c2.habibdp;
  }
  
  sent(textmsg:any){
    let msgObj = {
      senderName: "shyam",
      msg: textmsg,
      time:new Date()
     
      
    }
    this.c1toc2.push(msgObj);
    this.c2.c1toc2chat(this.c1toc2)
    
  }
  ngOnDestroy(){
    this.c2lastseen=new Date;
    this.c2.cuslstsee(this.c2lastseen)
  }
}
