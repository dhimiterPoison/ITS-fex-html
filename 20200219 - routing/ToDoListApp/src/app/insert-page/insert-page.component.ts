import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../models/ToDoItem';
import { ToDoListProxyService } from '../to-do-list-proxy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-page',
  templateUrl: './insert-page.component.html',
  styleUrls: ['./insert-page.component.sass']
})
export class InsertPageComponent implements OnInit {

  item = new ToDoItem();

  constructor(
    private proxy: ToDoListProxyService,
    private router: Router) { }

  ngOnInit(): void {
  }

  save = () => {
    this.item.status = 'created';
    this.item.createdDate = new Date().getTime();

    this.proxy.insert(this.item).subscribe(_ => {
      this.router.navigate(['/items']);
    });

  }

}
