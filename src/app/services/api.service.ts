import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class APIService {
  constructor() {}
  // ['active', 'inactive', 'completed', 'canceled']
  private data: any = [
    {
      startDate: "21/03/2021",
      endDate: "20/04/2021",
      name: "Cycle twice a week",
      status: "active",
      location: "Germany: Walldorf",
    },
    {
      startDate: "21/03/2021",
      endDate: "20/04/2021",
      name: "Go by public transport 3 times a week",
      status: "active",
      location: "Germany: Munich",
    },
    {
      startDate: "21/03/2021",
      endDate: "20/04/2021",
      name: "E-bike 3 times a week",
      status: "completed",
      location: "Germany: Berlin",
    },
    {
      startDate: "21/03/2021",
      endDate: "20/04/2021",
      name: "Decrease your CO2 by 3 months time",
      status: "completed",
      location: "Germany: Frankfurt",
    },
    {
      startDate: "21/03/2021",
      endDate: "20/04/2021",
      name: "Decrease your CO2 by 10% in a month",
      status: "canceled",
      location: "Germany: Hamburg",
    },
  ];

  getTableData() {
    return this.data;
  }
}
