import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class APIService {
  constructor() {}
  // ['active', 'inactive', 'completed', 'canceled']
  private data: any = [
    {
      startDate: "2021-03-21T20:05:40.852Z",
      endDate: "2021-04-20T19:05:40.852Z",
      name: "Cycle twice a week",
      status: "active",
      location: "Germany: Walldorf",
    },
    {
      startDate: "2021-03-21T20:05:40.852Z",
      endDate: "2021-04-20T19:05:40.852Z",
      name: "Go by public transport 3 times a week",
      status: "active",
      location: "Germany: Munich",
    },
    {
      startDate: "2021-03-21T20:05:40.852Z",
      endDate: "2021-04-20T19:05:40.852Z",
      name: "E-bike 3 times a week",
      status: "completed",
      location: "Germany: Berlin",
    },
    {
      startDate: "2021-03-21T20:05:40.852Z",
      endDate: "2021-04-20T19:05:40.852Z",
      name: "Decrease your CO2 by 3 months time",
      status: "completed",
      location: "Germany: Frankfurt",
    },
    {
      startDate: "2021-03-21T20:05:40.852Z",
      endDate: "2021-04-20T19:05:40.852Z",
      name: "Decrease your CO2 by 10% in a month",
      status: "canceled",
      location: "Germany: Hamburg",
    },
  ];

  getTableData() {
    return this.data;
  }
}
