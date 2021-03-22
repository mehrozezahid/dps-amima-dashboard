import { Component } from "@angular/core";
import { navItems } from "../../_nav";

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
  styleUrls: ["./default-layout.component.scss"],
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public selectedTab = TABS.OVERVIEW;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  get TABS() {
    return TABS;
  }

  selectTab(tab: TABS) {
    this.selectedTab = tab;
  }
}

export enum TABS {
  OVERVIEW = "overview",
  CHALLENGES = "challenges",
  SETTINGS = "settings",
}
