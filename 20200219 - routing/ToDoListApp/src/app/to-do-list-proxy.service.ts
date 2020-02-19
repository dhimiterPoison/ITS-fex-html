import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from './models/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class ToDoListProxyService {

  constructor(private http: HttpClient) { }

  insert = (item: ToDoItem) => {
    return this.http.post('http://localhost:3000/items', item);
  }

  getList = () => {
    return this.http.get<ToDoItem[]>('http://localhost:3000/items');
  }

  getDetails = (id: number) => {
    return this.http.get<ToDoItem>('http://localhost:3000/items/' + id);
  }
}
