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
    // const documentElements = {
    //   sendMessageInput: document.querySelector('#sendMessageInput') as any,
    //   sendMessageButton: document.querySelector('#sendMessageButton') as any,
    //   messagesInfo: document.querySelector('#messagesInfo') as any,
    //   peerList: document.querySelector('#peerList') as any,
    //   userInfo: document.querySelector('#userInfo') as any,
    // }

    // const documentActions = {
    //   addNewMessage: (newMessage: string | number) => {
    //     const oldTextContext = documentElements.messagesInfo.textContent;
    //     documentElements.messagesInfo.textContent = oldTextContext + newMessage + '\n';
    //   },
    //   updatePeerList: (updatedList: any[]) => {
    //     const buttonHTML = (buttonId: any) => `<button id="${buttonId}">${buttonId}</button>`
    //     console.log('updating peer list with ', updatedList);
    //     documentElements.peerList.innerHTML = updatedList.map((peer: any) => buttonHTML(peer)).join('\n');
    //     updatedList.forEach((button: string) => {
    //       document.querySelector(`#${button}`)!.addEventListener('click', event => {
    //         ogre.selectTargetPeer(button);
    //       });
    //     });
    //   },
    //   updateUser: (userId: any) => {
    //     documentElements.userInfo.textContent = `Connected as: ${userId}`
    //   }
    // }

    // documentElements.sendMessageButton.addEventListener('click', (event: any) => {
    //   console.log('sending...', documentElements.sendMessageInput.value)
    //   const message = `${new Date()}: ${documentElements.sendMessageInput.value}`;
    //   ogre.sendMessage(message);
    // });

    // documentActions.updateUser(ogre.user.id);

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
