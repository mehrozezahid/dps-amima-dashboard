import { Component, OnInit } from "@angular/core";
import { APIService } from "../../services/api.service";

@Component({
  templateUrl: "challenges.component.html",
  styleUrls: ["challenges.component.scss"],
})
export class ChallengesComponent implements OnInit {
  data: any = [];
  constructor(private apiService: APIService) {}
  ngOnInit() {
    this.data = this.apiService.getTableData();
  }
}
