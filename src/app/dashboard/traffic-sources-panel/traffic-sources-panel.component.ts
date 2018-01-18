import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'traffic-sources-panel',
  templateUrl: './traffic-sources-panel.component.html',
  styleUrls: ['./traffic-sources-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrafficSourcesPanelComponent {
  trafficSources: any;
  chartOptions: any;

  ngOnInit() {
    this.trafficSources = [
      {
        text: 'Direct',
        numbers: '1200',
        chart: {
          labels: ['','','','','','','',''],
          datasets: [
            {
              data: [0, 5, 0, 4, 10, 8, 6, 12, 9],
              fill: true,
              borderColor: '#3366ff',
              borderWidth: 1,
              backgroundColor: '#bdceff',
              pointRadius: 0,
              lineTension: 0 //Straight 
            }]
        }
      },
      {
        text: 'Refer',
        numbers: '1150',
        chart: {
          labels: ['','','','','','','',''],
          datasets: [
            {
              data: [0, 5, 0, 4, 10, 8, 6, 12, 9],
              fill: true,
              borderColor: '#00cccc',
              borderWidth: 1,
              backgroundColor: '#adefef',
              pointRadius: 0,
              lineTension: 0 //Straight 
            }]
        }
      },
      {
        text: 'Social',
        numbers: '980',
        chart: {
          labels: ['','','','','','','',''],
          datasets: [
            {
              data: [0, 5, 0, 4, 10, 8, 6, 12, 9],
              fill: true,
              borderColor: '#f1a80a',
              borderWidth: 1,
              backgroundColor: '#fae3b0',
              pointRadius: 0,
              lineTension: 0 //Straight 
            }]
        }
      },
      {
        text: 'Search',
        numbers: '720',
        chart: {
          labels: ['','','','','','','',''],
          datasets: [
            {
              data: [0, 5, 0, 4, 10, 8, 6, 12, 9],
              fill: true,
              borderColor: '#85c875',
              borderWidth: 1,
              backgroundColor: '#d8edd3',
              pointRadius: 0,
              lineTension: 0 //Straight 
            }]
        }
      },
      {
        text: 'Internal',
        numbers: '60',
        chart: {
          labels: ['','','','','','','',''],
          datasets: [
            {
              data: [0, 5, 0, 4, 10, 8, 6, 12, 9],
              fill: true,
              borderColor: '#ff6633',
              borderWidth: 1,
              backgroundColor: '#ffcebd',
              pointRadius: 0,
              lineTension: 0 //Straight 
            }]
        }
      }
    ];

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
            drawBorder: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false
          }
        }]
      }
    };
  }
}