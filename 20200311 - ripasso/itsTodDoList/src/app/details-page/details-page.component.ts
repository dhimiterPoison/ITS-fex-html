import { Component, OnInit } from '@angular/core';
import { ProxyApiService } from '../proxy-api.service';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from '../models/ToDoItem';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  item: ToDoItem = new ToDoItem();

  constructor(private api: ProxyApiService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');

      this.api.getById(parseInt(id)).subscribe(data => {
        this.item = data;
      });

    });
  }

}
