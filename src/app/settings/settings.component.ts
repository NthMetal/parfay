import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../shared/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    console.log('settings component initialized');
  }

  lightTheme(): void {
    this.settingsService.lightTheme();
  }

  darkTheme(): void {
    this.settingsService.darkTheme();
  }

}
