import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  Arun:boolean=false;
  Habib:boolean=false;
  arundp:any;
  habibdp:any
 
  profiledp:any;
  
  constructor(private chat:ChatService) { }

  ngOnInit(): void {
    this.arundp=this.chat.arundp;
    this.habibdp=this.chat.habibdp;
  }
  arun(){
    this.Habib=false;
    this.Arun=true;
    this.profiledp=this.habibdp
  }
  habib(){
    this.Habib=true;
    this.Arun=false;
    this.profiledp=this.arundp;
  }

}
