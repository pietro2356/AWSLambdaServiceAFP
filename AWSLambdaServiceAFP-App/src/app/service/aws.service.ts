import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Ticket } from '../model/Ticket';
// import { Ticket } from '../model/Ticket';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  endPoint: string = environment.endpoint;
  api: string = environment.api;
  get: string = environment.getFN;

  constructor(public http: HttpClient) { }

  getTicket(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.endPoint + this.api + this.get);
  }
}
