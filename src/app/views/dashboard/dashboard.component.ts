import { Component, OnInit } from "@angular/core";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";

@Component({
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  // co2Chart
  public co2ChartElements = 27;
  public co2ChartData1: Array<number> = [];
  public co2ChartData2: Array<number> = [];
  public co2ChartData3: Array<number> = [];

  public co2ChartData: Array<any> = [
    {
      data: this.co2ChartData1,
      label: "CO2 emmission",
    },
    {
      data: this.co2ChartData2,
      label: "CO2 quarter target",
    },
  ];
  /* tslint:disable:max-line-length */
  public co2LabelsX: Array<any> = ["1 Feb", "14 Feb", "28 Feb", "7 Mar"];
  public co2LabelsY: Array<any> = ["1 tonne", "2 tonne", "3 tonne", "4 tonne"];
  /* tslint:enable:max-line-length */
  public co2ChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: "index",
      position: "nearest",
      callbacks: {
        labelColor: function (tooltipItem, chart) {
          return {
            backgroundColor:
              chart.data.datasets[tooltipItem.datasetIndex].borderColor,
          };
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
          ticks: {
            callback: function (value: any) {
              return value;
            },
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (value: any) {
              return value;
            },
          },
        },
      ],
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    legend: {
      display: false,
    },
  };
  public co2ChartColours: Array<any> = [
    {
      // brandInfo
      backgroundColor: hexToRgba("#0076B7", 30),
      borderColor: "#0076B7",
      pointHoverBackgroundColor: "#fff",
    },
    {
      // brandSuccess
      backgroundColor: "transparent",
      borderColor: getStyle("--success"),
      pointHoverBackgroundColor: "#fff",
    },
  ];
  public co2ChartLegend = false;
  public co2ChartType = "line";

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // activeUsersChart active users
  public activeUsersChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public activeUsersChartLabels: string[] = [
    "1 Feb",
    "14 Feb",
    "28 Feb",
    "7 Mar",
  ];
  public activeUsersChartType = "bar";
  public activeUsersChartLegend = true;
  public activeUsersChartColours: Array<any> = [
    {
      // brandInfo
      backgroundColor: "#0076B7",
      pointHoverBackgroundColor: "#fff",
    },
  ];

  public activeUsersChartData: any[] = [
    {
      data: [
        65,
        59,
        80,
        81,
        56,
        55,
        40,
        65,
        59,
        80,
        81,
        56,
        55,
        40,
        65,
        59,
        80,
        81,
        56,
        55,
        40,
      ],
      label: "Number of active users a day",
    },
  ];

  // Pie
  public pieChartLabels: string[] = [
    "Combustion cars",
    "Walking",
    "Bicycle",
    "Other",
    "Hybrid car",
    "Public transport",
  ];
  public pieChartData: number[] = [40.17, 4, 3, 17.25, 8.65, 26.97];
  public pieChartType = "pie";
  public pieChartColours: Array<any> = [
    {
      backgroundColor: [
        "#0076B7",
        "#C4C4C4",
        "#3A177F",
        "#98C1D9",
        "#00C898",
        "#18297F",
      ],
    },
  ];

  // registered Users Chart active users
  public registeredUsersChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public registeredUsersChartLabels: string[] = [
    "1 Feb",
    "14 Feb",
    "28 Feb",
    "7 Mar",
  ];
  public registeredUsersChartType = "bar";
  public registeredUsersChartLegend = true;
  public registeredUsersChartColours: Array<any> = [
    {
      // brandInfo
      backgroundColor: "#0076B7",
      pointHoverBackgroundColor: "#fff",
    },
  ];

  public registeredUsersChartData: any[] = [
    {
      data: [
        65,
        59,
        80,
        81,
        56,
        55,
        40,
        65,
        59,
        80,
        81,
        56,
        55,
        40,
        65,
        59,
        80,
        81,
        56,
        55,
        40,
      ],
      label: "Number of registered users a day",
    },
  ];

  // chart events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit(): void {
    // generate random values for co2Chart
    for (let i = 0; i <= this.co2ChartElements; i++) {
      this.co2ChartData1.push(this.random(50, 200));
      this.co2ChartData2.push(this.random(80, 100));
      this.co2ChartData3.push(65);
    }
  }
}
