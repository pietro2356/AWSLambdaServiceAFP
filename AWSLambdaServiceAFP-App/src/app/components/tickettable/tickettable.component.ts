import { Component } from '@angular/core';
import { Ticket } from 'src/app/model/Ticket';
import { AwsService } from 'src/app/service/aws.service';

@Component({
  selector: 'app-tickettable',
  templateUrl: './tickettable.component.html',
  styleUrls: ['./tickettable.component.css'],
})
export class TickettableComponent {
  title = 'AWSLambdaServiceAFP-App';
  ticket: Ticket[] = [];

  displayedColumns = ['id', 'username', 'patient', 'hospital', 'department', 'description'];

  constructor(private aws: AwsService) {}

  ngOnInit(): void {
    this.execGet();
  }
  // TODO: Aggiornare tabella

  execGet() {

    let tmp: Ticket[] = [];
    const data = this.aws.getTicket().forEach((item) => {
      console.log(item);
      console.table(item);

      item.forEach((el: Ticket) => {
        tmp.push(el);
      });

      console.log(this.ticket);

      this.ticket = tmp;
    });

    console.log("tmp", tmp);

  }
}
