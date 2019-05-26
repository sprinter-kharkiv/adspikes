import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective, Label, Color } from "ng2-charts";
import { ChartDataSets, ChartOptions } from 'chart.js';

import * as pluginAnnotations from 'chartjs-plugin-annotation';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public chartColors = {
    violet: '#c34ed5',
    orange: '#f28634',
    lightGreen: '#54f26c',
    green: '#26c59f',
    blue: '#4294fa',
    red: '#df5a5a',
    axis: 'rgba(151, 151, 151, 0.2)',
    label: '#646e7a',
  };

  // SOCIAL ENGAGEMENT
  public socialEngagementChartLegend = true;
  public socialEngagementChartType = 'line';
  public socialEngagementChartData: ChartDataSets[] = [
    { data: [0, 59, 80, 81, 56, 55, 40], label: 'Likes', fill: false, pointRadius: 0 },
    { data: [0, 48, 40, 19, 86, 27, 90], label: 'Shares', fill: false, pointRadius: 0 },
    { data: [0, 50, 50, 90, 60, 50, 50], label: 'Comments', fill: false, pointRadius: 0 }
  ];
  public socialEngagementChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  public socialEngagementChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
      }],
      yAxes: [
        {
          gridLines: {
            color: this.chartColors.axis,
          },
          ticks: {
            fontColor: this.chartColors.label,
          }
        },
      ]
    },
    plugins: {
      datalabels: {
        display: false,
      },
    },
  };
  public socialEngagementChartColors: Color[] = [
    {
      borderColor: this.chartColors.orange,
    },
    {
      borderColor: this.chartColors.blue,
    },
    {
      borderColor: this.chartColors.lightGreen,
    }
  ];

  // AD REACH
  public adReachChartLegend = false;
  public adReachChartType = 'line';
  public adReachChartData: ChartDataSets[] = [
    { data: [0, 30, 30, 80, 50, 70, 40], label: 'Ad Reach', fill: false, lineTension: 0, pointRadius: 3 },
  ];
  public adReachChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public adReachChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
      }],
      yAxes: [
        {
          gridLines: {
            color: this.chartColors.axis,
          },
          ticks: {
            fontColor: this.chartColors.label,
          }
        },
      ]
    },
    plugins: {
      datalabels: {
        display: false,
      },
    },
  };
  public adReachChartColors: Color[] = [
    {
      borderColor: this.chartColors.violet,
      pointBackgroundColor: this.chartColors.violet,
      pointBorderColor: this.chartColors.violet,
    }
  ];

  // WEEK TREND
  public weekTrendChartLegend = false;
  public weekTrendChartType = 'bar';
  public weekTrendChartData: ChartDataSets[] = [
    { data: [90, 70, 60, 80, 60, 70, 40], label: 'Week Trend' },
  ];
  public weekTrendChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public weekTrendChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
      }],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
            fontColor: this.chartColors.label,
          }
        },
      ]
    },
    plugins: {
      datalabels: {
        display: false,
      },
    },
  };
  public weekTrendChartColors: Color[] = [
    {
      backgroundColor: this.chartColors.green,
    }
  ];


  // COUNTRY
  public countryChartLegend = true;
  public countryChartType = 'pie';
  public countryChartData: ChartDataSets[] = [
    { data: [29, 18, 25, 25 ] },
  ];
  public countryChartLabels: Label[] = ['Unated States', 'Canada', 'Unated Kingdom', 'Australia'];
  public countryChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    },
    plugins: {
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold',
          size: 16,
        },
        formatter: (value, ctx) => {
          const dataValue = ctx.chart.data.datasets[0].data[ctx.dataIndex] + ' %';
          return dataValue;
        },
      },
    },
  };
  public countryChartPlugins = [pluginDataLabels];
  public countryChartColors: Color[] = [
    {
      backgroundColor: [
          this.chartColors.violet,
          this.chartColors.red,
          this.chartColors.orange,
          this.chartColors.blue,
        ]
    }
  ];

  pageTitle = 'Ad Details';
  item = {
    itemLogo: 'assets/images/opteo-logo.jpg',
    title: 'Opteo - Adding a long name here that goes on 2 rows. Add more text here.',
    text: '“I can&apos;t live without it anymore. It saves time and money and ensures better overall performance! I can&apos;t live without it anymore. It saves time and money It saves time and money ',
    promoImg: 'assets/images/promo-img.jpg',
    imgDescription: '',
    promoLink: 'OPTEO.COM',
    promoText: 'Opteo, the smarter way to manage AdWords accounts.',
    media: {
      likes: 6428932,
      shared: 128422,
      comments: 32221
    }
  };

  landingPages = [
    {
      id: 1234,
      url: 'https://opteo.com/pricing',
      previewImg: 'assets/images/placeholder_landing.jpg',
      hits: 67987979,
      daysRunning: 7879798,
      firstSeen: '30.05.19',
      lastSeen: '30.05.19',
    },{
      id: 567,
      url: 'https://opteo.com/pricing',
      previewImg: 'assets/images/placeholder_landing.jpg',
      hits: 67987979,
      daysRunning: 7879798,
      firstSeen: '30.05.19',
      lastSeen: '30.05.19',
    },{
      id: 890,
      url: 'https://opteo.com/pricing',
      previewImg: 'assets/images/placeholder_landing.jpg',
      hits: 67987979,
      daysRunning: 7879798,
      firstSeen: '30.05.19',
      lastSeen: '30.05.19',
    },
  ];

  activePage = this.landingPages[0];

  constructor(  ) { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
