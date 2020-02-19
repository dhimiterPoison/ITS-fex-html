import { Component, OnInit } from '@angular/core';
import { ToDoListProxyService } from '../to-do-list-proxy.service';
import { ToDoItem } from '../models/ToDoItem';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.sass']
})
export class ListPageComponent implements OnInit {

  public list: ToDoItem[] = [];

  constructor(private proxy: ToDoListProxyService) { }

  ngOnInit(): void {
    this.proxy.getList().subscribe(data => {
      this.list = data;
    });
  }

}
