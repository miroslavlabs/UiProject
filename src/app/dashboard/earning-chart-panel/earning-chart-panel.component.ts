import { Component } from '@angular/core';

@Component({
    selector: 'earning-chart',
    styleUrls: ['/earning-chart-panel.component.scss'],
    templateUrl: './earning-chart-panel.component.html'
})
export class EarningChartComponent {
    data: any;
    options: any;
    earningDataItems: any;

    ngOnInit() {
        this.data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    data: [1000, 2200, 3600, 2200, 2600, 2500, 2000, 1500, 1000, 1200, 1000, 600],
                    fill: true,
                    borderColor: '#85c875',
                    backgroundColor: '#85c875',
                    pointRadius: 0
                },
                {
                    data: [1800, 4800, 4000, 1900, 8600, 2700, 9000, 2800, 4800, 4000, 1900, 8600, 2700, 9000],
                    fill: true,
                    borderColor: '#f1a80a',
                    backgroundColor: '#f1a80a',
                    pointRadius: 0,
                },
                {
                    data: [800, 4800, 4000, 1900, 7600, 2700, 9000, 2800, 10800, 4000, 2900, 8600, 5700, 9000],
                    fill: true,
                    borderColor: '#1e75eb',
                    backgroundColor: '#1e75eb',
                    pointRadius: 0
                },
                {
                    data: [800, 4800, 4000, 1900, 8600, 3700, 8000, 7800, 4800, 4000, 8900, 8600, 2700, 3200],
                    fill: true,
                    borderColor: '#0bc4df',
                    backgroundColor: '#0bc4df',
                    pointRadius: 0
                }
            ]
        };

        this.earningDataItems = [
            {
                label: 'Revenue',
                value: '$13,234'
            },
            {
                label: 'Order',
                value: '2,35,090'
            },
            {
                label: 'Tax',
                value: '$1,34,900'
            },
            {
                label: 'Shipment',
                value: '$1,134'
            }
        ];

        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            height: 245,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        borderDash: [2, 2]
                    }
                }],
                yAxes: [{
                    gridLines: {
                        borderDash: [2, 2]
                    },
                    ticks: {
                        min: 0,
                        max: 20000,
                        stepSize: 5000
                    }
                }]
            }
        };
    }
}