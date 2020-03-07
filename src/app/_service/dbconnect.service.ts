import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../_interface/person';
import { Event } from '../_interface/event';
import { RelPersonPerson } from '../_interface/rel-person-person';
import { RelEventPerson } from '../_interface/rel-event-person';


@Injectable({
  providedIn: 'root'
})
export class DbConnectService {

  private serverUrl = 'http://localhost:3000';

  constructor(
    private _http: HttpClient
  ) { 
  }
//----------------------------------- GET -----------------------------
  //Get Person
  public getPerson(): Observable<Person[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get<Person[]>(`${this.serverUrl}/Person`, httpOptions);
  }

  //Get Event
  public getEvent(): Observable<Event[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get<Event[]>(`${this.serverUrl}/Event`, httpOptions);
  }

  //Get Person
  public getRelPersonPerson(): Observable<RelPersonPerson[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get<RelPersonPerson[]>(`${this.serverUrl}/RelPersonPerson`, httpOptions);
  }

  //Get Person
  public getRelEventPerson(): Observable<RelEventPerson[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get<RelEventPerson[]>(`${this.serverUrl}/RelEventPerson`, httpOptions);
  }
  //.----------------------------------------GET Ende -----------------------------
  //----------------------------------------- POST ---------------------------------
  //Post Person
  public postPerson(object: Person): Observable<Person> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.post<Person>(`${this.serverUrl}/Person`, object, httpOptions);
  }
  //Post Event
  public postEvent(object: Event): Observable<Event> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.post<Event>(`${this.serverUrl}/Event`, object, httpOptions);
  }
  //Post RelPersonPerson
  public postRelPersonPerson(object: RelPersonPerson): Observable<RelPersonPerson> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.post<RelPersonPerson>(`${this.serverUrl}/RelPersonPerson`, object, httpOptions);
  }
  //Post RelEventPerson
  public postRelEventPerson(object: RelEventPerson): Observable<RelEventPerson> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.post<RelEventPerson>(`${this.serverUrl}/RelEventPerson`, object, httpOptions);
  }
  //--------------------POST Ende---------------------
  //--------------------DELETE-----------------------
  public deletePerson(object: Person) : Observable<Person> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
      return this._http.delete<Person>(`${this.serverUrl}/Person/${object.id}`, httpOptions);
  }
  public deleteEvent(object: Event) : Observable<Event> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
      return this._http.delete<Event>(`${this.serverUrl}/Event/${object.id}`, httpOptions);
  }
  public deleteRelPersonPerson(object: RelPersonPerson) : Observable<RelPersonPerson> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
      return this._http.delete<RelPersonPerson>(`${this.serverUrl}/RelPersonPerson/${object.id}`, httpOptions);
  }
  public deleteRelEventPerson(object: RelEventPerson) : Observable<RelEventPerson> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
      return this._http.delete<RelEventPerson>(`${this.serverUrl}/RelEventPerson/${object.id}`, httpOptions);
  }
  //----------------------------DELETE Ende-------------------
  //---------------------------PUT---------------------------
  public putPerson(object: Person): Observable<Person> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.put<Person>(`${this.serverUrl}/Person/${object.id}`, object, httpOptions);
  }
  public putEvent(object: Event): Observable<Event> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.put<Event>(`${this.serverUrl}/Event/${object.id}`, object, httpOptions);
  }
}
