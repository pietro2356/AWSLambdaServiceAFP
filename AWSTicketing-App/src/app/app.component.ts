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
  ticketList: Ticket[] = [];


  constructor(public aws: AwsService){}

  ngOnInit(){
    
  }
}
