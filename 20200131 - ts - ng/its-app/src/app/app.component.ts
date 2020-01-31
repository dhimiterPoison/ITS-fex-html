import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'its-app';
  list: string[] = [];
  list2: Item[] = [];

  resetTitle = () => {
    this.title = '';
  }
}


class Item {
  constructor(public type: string,
              public quantity: number) {
    }
}