import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ChallengesComponent } from "./challenges.component";

const routes: Routes = [
  {
    path: "",
    component: ChallengesComponent,
    data: {
      title: "Challenges",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class ChallengesRoutingModule {}
