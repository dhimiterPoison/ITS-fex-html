import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoListProxyService } from '../to-do-list-proxy.service';
import { ToDoItem } from '../models/ToDoItem';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.sass']
})
export class DetailsPageComponent implements OnInit {

  id: number = 0;
  item: ToDoItem;

  constructor(
    private route: ActivatedRoute,
    private proxy: ToDoListProxyService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      let x = param.get('id');
      this.id = parseInt(x);

      this.proxy.getDetails(this.id).subscribe(data => {
        this.item = data;
      });

    });

  }

}
