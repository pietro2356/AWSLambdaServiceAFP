import { Component } from '@angular/core';
import { AwsService } from './service/aws.service';
import { Ticket } from './model/Ticket';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AWSLambdaServiceAFP-App';
  ticket: Ticket[] = [];

  constructor(private aws: AwsService){}

  ngOnInit(): void {
  }

  execGet(){
    const data = this.aws.getTicket().forEach(item => {
      console.log(item);
      console.table(item);

      item.forEach((el: Ticket) => {
        this.ticket.push(el);
      })

      console.log(this.ticket);

    });



    // TODO: Put data into ticket
  }
}
