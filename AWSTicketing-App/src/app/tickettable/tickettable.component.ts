import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ticket } from 'src/models/ticket';
import { AwsService } from 'src/services/aws.service';

@Component({
  selector: 'app-tickettable',
  templateUrl: './tickettable.component.html',
  styleUrls: ['./tickettable.component.css']
})
export class TickettableComponent {
  displayedColumns: string[] = ['id', 'username', 'patient'];
  dataSource: any;
  selectedTicket?: Ticket;

  ticket: Ticket[] = [];

  // displayedColumns = ['id', 'username', 'patient', 'hospital', 'department', 'description', 'edit', 'delete'];


  constructor(public aws: AwsService){}

  ngOnInit(){
    this.executeGet();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  executeGet(){
    const res = this.aws.getTicket().subscribe((item: Ticket[]) => {
      // this.ticketList = item;
      this.dataSource = new MatTableDataSource(item);
    });
  }

  executeInsert(){
    const ticket = {
      "username": String(Math.ceil(Math.random() * (9999 - 0) + 0)),
      "ip_caller": "10.10.23.231",
      "ip_server": "10.10.35.45",
      "url_path_server": "/adt/login",
      "patient": "0010002",
      "hospital": "CAVALESE",
      "department": "PRONTO SOCCORSO",
      "description": "Macchinario di imaging non funzionante",
      "valid": 0
    }

    const insert = this.aws.insertTicket(ticket).subscribe(item => {
      console.log(item);
      this.executeGet();
    });
  }

  executeUpdate(){
    const res = this.aws.updateTicket(36, "CIAO SONO STATA MODIFICATA").subscribe(item => {
      console.log(item);
      this.executeGet();
    });
  }

  executeDelete(){
    const res = this.aws.deleteTicket(46).subscribe(item => {
      console.log(item);
      this.executeGet();
    })
  }
}
