import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Ogre, User } from 'ogre-router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  ogre: Ogre;
  userList: string[] = [];
  myId = '';
  messages: string[] = [];

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.ogre = new Ogre();
    this.myId = this.ogre.user.id;

    this.ogre.messages.subscribe((message: any) => {
      return this.messages.push(message);
    });

    this.ogre.observePeerList().subscribe(list => {
      this.userList = list;
    });
  }

  selectTargetUser(user: string) {
    this.ogre.selectTargetPeer(user);
  }

  sendMessage(messageBox: HTMLTextAreaElement) {
    const message = `${new Date()}: ${messageBox.value}`;
    this.ogre.sendMessage(message);
    messageBox.value = '';
  }

  lightTheme() {
    this.renderer.addClass(document.body, 'parfay-light-theme');
    this.renderer.removeClass(document.body, 'parfay-dark-theme');
  }

  darkTheme() {
    this.renderer.addClass(document.body, 'parfay-dark-theme');
    this.renderer.removeClass(document.body, 'parfay-light-theme');
  }

}
