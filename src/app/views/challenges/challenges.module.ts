import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { CommonModule } from "@angular/common";

import { ChallengesComponent } from "./challenges.component";
import { ChallengesRoutingModule } from "./challenges-routing.module";

@NgModule({
  imports: [
    FormsModule,
    ChallengesRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    ButtonsModule.forRoot(),
  ],
  declarations: [ChallengesComponent],
})
export class DashboardModule {}
