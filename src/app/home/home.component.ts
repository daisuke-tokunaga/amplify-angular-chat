import { Component, ViewChild, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
// import { IonContent, Platform } from '@ionic/angular';
import { APIService } from '../../app/API.service';
import { v4 as uuid } from 'uuid';
import { Message } from '../interface/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // @ViewChild(IonContent, { static: false }) content: IonContent;

  chatMessage: any;
  currentEmail: any;
  //臨時any
  messages: any;

  constructor(
    private apiService: APIService,
    private sessionService: SessionService,
  ) {
    this.initializeApp();
  }

  // 初期読み込み
  ngOnInit() {
    this.sessionService.fetchCurrentUser().subscribe((email: string) => {
      this.currentEmail = email;
      console.log("email",this.currentEmail)
      if(this.messages !== null) {
        this.apiService.ListMessages().then(data => {
          console.log("return data",data)
          this.messages = data.items;
        });
      }
    });
  }

　// ログアウトボタンのクリック時
  onSignOut() {
    this.sessionService.signout();
  }

  sendChatMessage() {
    const inputMessage = this.chatMessage;
    const contentMessage = {
      id: `${uuid()}`,
      email: this.currentEmail,
      content: inputMessage
    };
    this.apiService.CreateMessage(contentMessage).then();
  }

  initializeApp() {
    this.apiService.OnCreateMessageListener.subscribe((evt: any) => {
      this.messages.push(evt.value.data.onCreateMessage);
    });
  }
}
