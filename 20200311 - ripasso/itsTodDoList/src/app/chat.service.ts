// package npm: https://www.npmjs.com/package/@aspnet/signalr

import { Injectable, EventEmitter } from '@angular/core';
import * as SignalR from '@aspnet/signalr';
import { Message } from './models/Message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private connection: SignalR.HubConnection;

  public messageReceived = new EventEmitter<Message>();

  constructor() {
    this.connection = new SignalR.HubConnectionBuilder()
      .withUrl('https://its-chat.azurewebsites.net/chatHub')
      .build();
    this.connect();

  }

  private connect() {
    this.connection.on('ReceiveMessage', (user: string, message: string) => {
      this.messageReceived.emit(new Message(user, message));
    });
    this.connection.start().catch(err => console.log(err));
  }

  public send = (user: string, message: string) => {
    return this.connection.invoke('SendMessage', user, message);
  }

}
