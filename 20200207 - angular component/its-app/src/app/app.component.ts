import { Component } from '@angular/core';
import { SwapiApiService } from './swapi-api.service';
import { SwPerson } from './swapi-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercitazione con componenti';
  list: string[] = [];
  swList: SwPerson[] = [];

  constructor(private swapi: SwapiApiService) {
    swapi.getPeople().subscribe((data) => {
      this.swList = data.results;
    });
  }

  add = (text: string) => {
    if (text)
      this.list.push(text);
  }

  delete = (text: string) => {
    let index = this.list.indexOf(text);
    this.list.splice(index, 1);
  }

}
