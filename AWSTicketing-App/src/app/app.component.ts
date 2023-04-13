import { Component } from '@angular/core';
import { Ticket } from 'src/models/ticket';
import { AwsService } from 'src/services/aws.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AWSTicketing-App';

  constructor(public aws: AwsService){}

  ngOnInit(){
    this.executeGet();
  }

  executeGet(){
    console.log("GET");

    const ticketList: Ticket[] = [];

    const tmp = this.aws.getTicket().forEach(item => {
      // console.log(item);
      item.forEach((tk: Ticket) => {
        ticketList.push(tk);
      });

      console.log(ticketList);

    });
  }

  executeInsert(){
    console.log("INSERT");

    const ticket = {
      "username": String(Math.ceil(Math.random() * (9999 - 0) + 0)),
      "ip_caller": "10.10.23.231",
      "ip_server": "10.10.35.45",
      "url_path_server": "/adt/login",
      "patient": "0010002",
      "hospital": "CAVALESE",
      "department": "PS",
      "description": "Macchinario di imaging non funzionante",
      "valid": 0
    }

    const res = this.aws.insertTicket(ticket).subscribe((res) =>{
      console.log(res);

    });
  }

  executeUpdate(){
    console.log("UPDATE");

    const res = this.aws.updateTicket(10, "Ciao sono la descrizione").subscribe((res) =>{
      console.log(res);
    });
  }

  executeDelete(){
    console.log("DELETE");

    const res = this.aws.deleteTicket(12).subscribe((res) => {
      console.log(res);

    });
  }

}
