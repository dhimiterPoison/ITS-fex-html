import { Component, OnInit } from '@angular/core';
import { ProxyApiService } from '../proxy-api.service';
import { ToDoItem } from '../models/ToDoItem';
import { ChatService } from '../chat.service';
import { Message } from '../models/Message';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  list: ToDoItem[] = [];
  messages: Message[] = [];

  constructor(private api: ProxyApiService,
              private chatHub: ChatService) { }

  ngOnInit(): void {
    this.api.getAll().subscribe(data => {
      this.list = data;
    });

    this.chatHub.messageReceived.subscribe((message) => {
      this.messages.push(message);
    });
  }


  dummy = () => {
    // localStorage
    localStorage.setItem('key', 'valore che volete salvare');
    let x = localStorage.getItem('key');
    // rimuovo una precisa chiave
    localStorage.removeItem('key');
    // svuoto il localstorage
    localStorage.clear();

    // sessionStorage
    sessionStorage.setItem('user', 'Andrea Dottor');
    let obj = {};
    sessionStorage.setItem('complex', JSON.stringify(obj));


  }

}
