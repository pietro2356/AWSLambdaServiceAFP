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


  ngOnInit(): void {
  }

}
