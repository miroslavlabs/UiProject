import { Component } from '@angular/core';

@Component({
  selector: 'statistic-container',
  templateUrl: './statistic-container.component.html',
  styleUrls: ['./statistic-container.component.scss']
})
export class StatisticContainerComponent {
    statisticSources = [
        {
            icon: 'fa-users',
            title: 'Visitors',
            arrow: 'true',
            value: '125 K',
            percent: '[+0.50%]'
        },
        {
            icon: 'fa-dot-circle-o',
            title: 'New Order',
            arrow: 'false',
            value: '28 K'
        },
        {
            icon: 'fa-usd',
            title: 'Sales',
            arrow: 'false',
            value: '25 K'
        },
        {
            icon: 'fa-rocket',
            title: 'Shipping',
            arrow: 'false',
            value: '12 K'
        }
      ];
 } 