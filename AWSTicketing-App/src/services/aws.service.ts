import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/models/ticket';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  api: string = "https://f9uhzvsvzi.execute-api.us-east-1.amazonaws.com/dev";
  // api: string = "https://iicb3ls7xc.execute-api.us-east-1.amazonaws.com/dev";


  constructor(public http: HttpClient) { }

  getTicket(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.api + "/api/get-ticket");
  };

  insertTicket(ticket: Ticket): Observable<any>{
    const body = JSON.stringify(ticket);

    return this.http.post<any>(this.api + "/api/insert-ticket", body);
  }

  updateTicket(ticket: Ticket): Observable<any>{
    // TODO: Impostare i controlli su ID.
    // FIX: Caccia al BUG.
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    const body = JSON.stringify({id: ticket.id, description: ticket.description});

    return this.http.put(this.api + "/api/update-ticket", body, httpOptions);
  }

  deleteTicket(ticket: Ticket): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        id: ticket.id
      })
    }

    return this.http.delete(this.api + "/api/delete-ticket", httpOptions);
  }
}
