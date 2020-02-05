import { Component } from '@angular/core';
import * as _ from 'underscore';
import { HttpClient } from '@angular/common/http';
import { SwapiPeopleResponse, SwapiPerson } from 'src/models/swapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'its-app';
  message = '';
  list: SwapiPerson[] = [];
  listFiltered: SwapiPerson[] = [];

  constructor(private http: HttpClient) {
  }

  getData = () => {
    this.list = [];
    this.message = 'in caricamento...';
    this.http
        .get<SwapiPeopleResponse>('https://swapi.co/api/people/')
        .subscribe(data => {
          this.list = data.results;
          this.listFiltered = data.results;
          this.message = '';
        });
  }


  applyFilter = () => {
    // var list = ['ciao', 'its', 'andrea'];
    // // var result = _.find(list, x => x === 'its');
    // var result = _.find(list, function (x) { return x === 'its'; });
    // var sortedList = _.sortBy(list, x => x);

    var items: BasketItem[] = [];
    items.push(new BasketItem('apple', 5));
    items.push(new BasketItem('orange', 10));
    items.push(new BasketItem('apple', 2));

    var sorted = _.sortBy(items, x => {
      return x.quantity;
    });

  }

}


class BasketItem {
  constructor(public name: string, public quantity: number) {
  }
}