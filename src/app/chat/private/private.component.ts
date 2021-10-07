import { Component, OnInit } from '@angular/core';
import { IBaseMessage } from 'ogre-router/dist/tsc/models/ogre';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/shared/services/message.service';
import { OgreService } from 'src/app/shared/services/ogre.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.less']
})
export class PrivateComponent implements OnInit {

  targetUser: { id: string; alias: string; } | undefined = undefined;
  displayedMessages: IBaseMessage[] = [];

  messagesSubscription: Subscription | undefined;

  constructor(
    private ogreService: OgreService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.ogreService.onTargetUserUpdated().subscribe(targetUser => {
      this.targetUser = targetUser;
      if (this.targetUser) {
        this.displayedMessages = this.messageService.getMessagesById(this.targetUser.id);
        if (this.messagesSubscription) this.messagesSubscription.unsubscribe();
        this.messagesSubscription = this.messageService.onMessageById(this.targetUser.id).subscribe(message => {
          this.displayedMessages.push(message);
        });
      }
    });
  }

  sendMessage(messageBox: HTMLTextAreaElement): void {
    this.ogreService.sendMessage(messageBox.value);
    messageBox.value = '';
  }

}
