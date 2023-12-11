import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiEventService {
  private apiUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getEventById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addEvent(eventData: any): Observable<any> {
    return this.http.post(this.apiUrl, eventData);
  }

  updateEvent(id: number, eventData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, eventData);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
