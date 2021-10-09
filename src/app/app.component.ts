import { Component, OnInit, Renderer2 } from '@angular/core';
import { Ogre, User } from 'ogre-router';
import { IBaseMessage } from 'ogre-router/dist/tsc/models/ogre';
import { OgreService } from './shared/services/ogre.service';
import { SettingsService } from './shared/services/settings.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  ogre: Ogre;
  userList: { id: string; alias: string; }[] = [];
  myUser: User;

  constructor(
    private ogreService: OgreService,
    private settingsService: SettingsService
  ) {}

  async ngOnInit(): Promise<void> {

    this.ogreService.onPeerlistUpdated().subscribe(peerList => {
      this.userList = peerList;
    });
    this.myUser = await this.ogreService.getUser();
  }

  selectTargetUser(user: { id: string, alias: string}): void {
    this.ogreService.selectTargetPeer(user);
  }

  // sendMessage(messageBox: HTMLTextAreaElement): void {
  //   this.ogre.sendMessage(messageBox.value);
  //   messageBox.value = '';
  // }

}
