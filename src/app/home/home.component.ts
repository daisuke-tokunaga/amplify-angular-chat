import { Component, ViewChild, OnInit } from '@angular/core';
// import { SessionService } from '../service/session.service';
// import { IonContent, Platform } from '@ionic/angular';
import { APIService } from '../../app/API.service';
// import { v4 as uuid } from 'uuid';
// import { Message, responseCreateMessageListener } from '../interface/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
  }

  // @ViewChild(IonContent, { static: false }) content: IonContent;

//   chatMessage: any;
//   currentEmail: string | undefined;
//   messages: Message[] | undefined;   // 投稿されたメッセージを格納する変数

//   constructor(
//     // private sessionService: SessionService,
//     private apiService: APIService,
//     private platform: Platform,
//   ) {
//     this.initializeApp();
//   }

//   // 初期読み込み
//   ngOnInit() {
//     this.sessionService.fetchCurrentUser().subscribe((email: string) => {
//       this.currentEmail = email;
//       this.apiService.ListMessages().then(data => {
//         this.messages = data.items;
//       });
//     });
//   }

// 　// ログアウトボタンのクリック時
//   onSignOut() {
//     this.sessionService.signout();
//   }

//   sendChatMessage() {
//     const inputMessage = this.chatMessage;
//     const contentMessage = {
//       id: `${uuid()}`,
//       email: this.currentEmail,
//       content: inputMessage
//     };
//     this.apiService.CreateMessage(contentMessage).then();
//   }

//   initializeApp() {
//     this.platform.ready().then(() => {
//       this.apiService.OnCreateMessageListener.subscribe((evt: any) => {
//         this.messages.push(evt.value.data.onCreateMessage);
//       });
//     });
//   }
}
