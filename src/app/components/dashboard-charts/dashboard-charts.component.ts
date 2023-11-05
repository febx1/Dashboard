import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexStroke, ApexTheme, ApexTooltip, ApexXAxis, ChartComponent } from 'ng-apexcharts';

export type AreaChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;

};
export type ColumnChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

export type DonutChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  labels: any;
  colors:any;
};

@Component({
  selector: 'app-dashboard-charts',
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['./dashboard-charts.component.scss']
})
export class DashboardChartsComponent {
  public areaChartOptions: Partial<AreaChartOptions>;
  public columnChartOptions: Partial<ColumnChartOptions>;
  public donutChartOptions: Partial<DonutChartOptions>;

  constructor() {
    this.areaChartOptions = {
      series: [
        {
          color: '#6980e6',

          name: "Week 1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          type: 'currency',
          color: '#6980e6',

          name: "Week 2",
          data: [11, 35, 30, 45, 34, 52, 88]
        }
      ],
      chart: {
        stacked: true,
        height: 250,
        type: "area",
        toolbar: { show: false }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: 'category',
        categories: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ]
      },
      tooltip: {
        y: {
          formatter: (val, opt) => '$' + val
        }
      }
    };
    this.columnChartOptions = {
      series: [
        {
          color: '#4f6de2',
          name: "Income",
          data: [44, 55, 41, 67, 22, 43, 58, 70, 60, 30, 11, 70]
        },
        {
          color: '#c1cffe',
          name: "Borrow",
          data: [13, 23, 20, 8, 13, 27, 15, 78, 60, 58, 32, 11]
        },

      ],
      chart: {
        type: "bar",
        height: 250,
        stacked: true,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          columnWidth: 5,
          horizontal: false,
        },
      }, dataLabels: { enabled: false },
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ]
      },
      legend: {
        position: "right",
        offsetY: 40, horizontalAlign: 'right'
      },
      fill: {
        opacity: 1
      }
    };
    this.donutChartOptions = {
      series: [50, 30, 20],
      chart: {
        type: "donut", height: 250,
      }, plotOptions: {

        pie: { donut: { labels: { show: true, total: { show: true, showAlways: true, label: 'Popular Items' } }, }, },
      },
      labels: ["Men", "Electronics", "Women"],
      colors:["#3e5cd1","#6984ef","#90a6fd"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}

