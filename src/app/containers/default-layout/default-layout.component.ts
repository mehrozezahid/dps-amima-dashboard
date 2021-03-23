import { Component } from '@angular/core';
import { navItems } from '../../_nav';
import * as toastr from 'toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public selectedTab = TABS.OVERVIEW;

  constructor() {
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  get TABS() {
    return TABS;
  }

  selectTab(tab: TABS) {
    this.selectedTab = tab;
    if (tab === TABS.SETTINGS) {
      this.showToastr();
    }
  }

  showToastr() {
    toastr.warning('This feature is under development. Check back soon!', 'Sorry!', {timeOut: 5000,
      positionClass: 'toast-top-right', closeButton: true, showMethod: 'show', hideMethod: 'hide'});
  }
}

export enum TABS {
  OVERVIEW = 'overview',
  CHALLENGES = 'challenges',
  SETTINGS = 'settings',
}
