import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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

  displayedColumns = ['id', 'username', 'patient', 'hospital', 'department', 'description', 'edit', 'delete'];

  dataSource: any;
  selectedTicket?: Ticket;

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
      this.dataSource = new MatTableDataSource(tmp);
    });

    console.log("tmp", tmp);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editTicket(ticket: Ticket){
    console.log("vuoi modificare il Ticket: ", ticket);
  }

  deleteTicket(ticket: Ticket){
    console.log("vuoi eliminare il Ticket: ", ticket);
  }

}
