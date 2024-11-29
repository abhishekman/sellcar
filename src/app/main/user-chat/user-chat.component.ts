import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../Service/chat.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrl: './user-chat.component.css'
})
export class UserChatComponent implements OnInit {

  user = 'User';
  message = '';
  messages: { user: string, message: string, read: boolean }[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.message$.subscribe(msg => {
      if (msg.user && msg.message) {
        this.messages.push(msg);
      }
    });
  }

  sendMessage(): void {
    if (this.message.trim()) {
      this.chatService.sendMessage(this.user, this.message);
      this.message = '';
    }
  }

  markMessageAsRead(msg: { user: string, message: string }): void {
    this.chatService.markMessageAsRead(msg.user, msg.message);
  }
}
