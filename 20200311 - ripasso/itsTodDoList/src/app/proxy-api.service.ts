import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from './models/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class ProxyApiService {

  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  insert = (item: ToDoItem) => {
    return this.http.post(this.apiUrl + 'items', item);
  }

  getAll = () => {
    return this.http.get<ToDoItem[]>(this.apiUrl + 'items');
  }

  getById = (id: number) => {
    return this.http.get<ToDoItem>(this.apiUrl + 'items/' + id);
  }

}
