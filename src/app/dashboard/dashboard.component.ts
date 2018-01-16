import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  trafficSources = [
    {
      text: 'Direct',
      numbers: '1200',
      chart: ''
    },
    {
      text: 'Refer',
      numbers: '1150',
      chart: ''
    },
    {
      text: 'Social',
      numbers: '980',
      chart: ''
    },
    {
      text: 'Search',
      numbers: '720',
      chart: ''
    },
    {
      text: 'Internal',
      numbers: '60',
      chart: ''
    }  
  ];
 }