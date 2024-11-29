import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatMessage } from '../types/car';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private hubConnection!: signalR.HubConnection;
  private messageSource = new BehaviorSubject<ChatMessage>({ user: '', message: '', read: false });
  message$ = this.messageSource.asObservable();
  private messages: ChatMessage[] = [];

  constructor() {
    this.startConnection();
  }

  private startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5131/chathub')
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('SignalR connection established.');
        this.addMessageListener();
      })
      .catch(err => {
        console.error('Error while starting connection: ', err);
      });
  }

  private addMessageListener() {
    this.hubConnection.on('ReceiveMessage', (user: string, message: string, read: boolean) => {
      const newMessage: ChatMessage = { user, message, read };
      this.messages.push(newMessage);
      this.messageSource.next(newMessage);
    });

    this.hubConnection.on('MessageSeen', (user: string, message: string) => {
      const msgIndex = this.messages.findIndex(msg => msg.user === user && msg.message === message);
      if (msgIndex > -1) {
        this.messages[msgIndex].read = true;
        this.messageSource.next(this.messages[msgIndex]);
      }
    });
  }

  sendMessage(user: string, message: string) {
    if (this.hubConnection.state === signalR.HubConnectionState.Connected) {
      this.hubConnection.invoke('SendMessage', user, message)
        .catch(err => console.error('Error while sending message: ', err));
    } else {
      console.error('Cannot send data if the connection is not in the "Connected" state.');
    }
  }

  markMessageAsRead(user: string, message: string) {
    if (this.hubConnection.state === signalR.HubConnectionState.Connected) {
      this.hubConnection.invoke('MessageSeen', user, message)
        .catch(err => console.error('Error while marking message as read: ', err));
    } else {
      console.error('Cannot mark message as read if the connection is not in the "Connected" state.');
    }
  }
}
