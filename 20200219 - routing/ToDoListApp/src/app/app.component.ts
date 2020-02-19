import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

/*
  ng generate component HomePage
  ng generate component ListPage
  ng generate component DetailsPage
  ng generate component InsertPage
  ng generate service ToDoListProxy
*/

  title = 'ToDoListApp';
}
