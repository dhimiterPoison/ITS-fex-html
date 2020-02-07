import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercitazione con componenti';
  list: string[] = [];

  add = (text: string) => {
    if (text)
      this.list.push(text);
  }

  delete = (text: string) => {
    let index = this.list.indexOf(text);
    this.list.splice(index, 1);
  }

}
