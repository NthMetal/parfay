import { Component, OnInit, Renderer2 } from '@angular/core';
import { Ogre, User } from 'ogre-router';
import { IBaseMessage } from 'ogre-router/dist/tsc/models/ogre';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  ogre: Ogre;
  userList: { id: string; alias: string; }[] = [];
  myUser: User;
  recievedMessages: {
    [userId: string]: IBaseMessage[]
  } = {}
  displayedMessages: IBaseMessage[] = [];

  constructor(private renderer: Renderer2) {}

  async ngOnInit(): Promise<void> {
    this.ogre = new Ogre();
    await this.ogre.gotUser();
    this.myUser = this.ogre.user;

    this.ogre.messages.subscribe((message: IBaseMessage) => {
      if (this.recievedMessages[message.source]) {
        this.recievedMessages[message.source].push(message);
      } else {
        this.recievedMessages[message.source] = [message];
      }
    });

    this.ogre.observePeerList().subscribe(list => {
      this.userList = list;
    });
  }

  selectTargetUser(user: { id: string, alias: string}): void {
    if (this.recievedMessages[user.id]) {
      this.displayedMessages = this.recievedMessages[user.id];
    } else {
      this.recievedMessages[user.id] = [];
      this.displayedMessages = [];
    }
    this.ogre.selectTargetPeer(user);
  }

  sendMessage(messageBox: HTMLTextAreaElement): void {
    this.ogre.sendMessage(messageBox.value);
    messageBox.value = '';
  }

  lightTheme(): void {
    this.renderer.addClass(document.body, 'parfay-light-theme');
    this.renderer.removeClass(document.body, 'parfay-dark-theme');
  }

  darkTheme(): void {
    this.renderer.addClass(document.body, 'parfay-dark-theme');
    this.renderer.removeClass(document.body, 'parfay-light-theme');
  }

}
