import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/models/ticket';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  api: string = "https://f9uhzvsvzi.execute-api.us-east-1.amazonaws.com/dev";


  constructor(public http: HttpClient) { }

  getTicket(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.api + "/api/get-ticket");
  };

  insertTicket(ticket: Ticket): Observable<any>{
    const body = JSON.stringify(ticket);

    return this.http.post<any>(this.api + "/api/insert-ticket", body);
  }

  updateTicket(id: number, desc: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    const body = JSON.stringify({id: id, description: desc});

    return this.http.put(this.api + "/api/update-ticket", body, httpOptions);
  }

  deleteTicket(id: number): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        id: id
      })
    }
    console.log(httpOptions);

    return this.http.delete(this.api + "/api/delete-ticket", httpOptions);
  }
}
