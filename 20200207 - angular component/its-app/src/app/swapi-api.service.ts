import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleResponse } from './swapi-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiApiService {

  constructor(private http: HttpClient) { }

  getPeople = (): Observable<PeopleResponse> => {
    return this.http.get<PeopleResponse>('https://swapi.co/api/people');
  }

  getPerson = (id: number) => {
    return this.http.get('https://swapi.co/api/people/' + id);
  }

}
