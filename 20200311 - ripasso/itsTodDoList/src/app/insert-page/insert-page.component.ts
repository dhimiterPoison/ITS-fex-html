import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../models/ToDoItem';
import { ProxyApiService } from '../proxy-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-page',
  templateUrl: './insert-page.component.html',
  styleUrls: ['./insert-page.component.css']
})
export class InsertPageComponent implements OnInit {

  item: ToDoItem = new ToDoItem();

  constructor(private api: ProxyApiService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save = () => {
    this.item.status = 'created';
    this.item.assignedTo = 'Andrea';
    this.item.createdDate = new Date().getTime();

    this.api.insert(this.item).subscribe(_ => {
      this.router.navigate(['/']);
    });
  }
}
