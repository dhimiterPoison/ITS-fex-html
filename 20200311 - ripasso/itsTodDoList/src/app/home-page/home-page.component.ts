import { Component, OnInit } from '@angular/core';
import { ProxyApiService } from '../proxy-api.service';
import { ToDoItem } from '../models/ToDoItem';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  list: ToDoItem[] = [];

  constructor(private api: ProxyApiService) { }

  ngOnInit(): void {
    this.api.getAll().subscribe(data => {
      this.list = data;
    });
  }

}
