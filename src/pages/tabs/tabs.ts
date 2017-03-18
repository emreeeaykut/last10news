import { Component } from '@angular/core';


import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { RedditsPage } from '../reddits/reddits';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RedditsPage;
  tab2Root: any = SettingsPage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
