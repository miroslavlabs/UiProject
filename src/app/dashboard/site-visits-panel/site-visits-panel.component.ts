import { Component } from '@angular/core';

@Component({
    selector: 'site-visits-panel',
    styleUrls: ['/site-visits-panel.component.scss'],
    templateUrl: './site-visits-panel.component.html'
})
export class SiteVisitPanelComponent {
    data: any;
    options: any;
    siteVisitDataItems: any;

    ngOnInit() {
        this.data = {
            labels: ['', '', '', '', '', '', ''],
            datasets: [
                {
                    data: [1000, 2200, 3600, 2200, 2600, 2500, 2000],
                    fill: false,
                    label: 'New Visitors',
                    backgroundColor: '#00cccc',
                    borderColor: '#00cccc',
                    pointBorderColor: "#fff",
                    pointBackgroundColor: '#00cccc',
                    pointHoverBorderColor: "#fff",
                    pointHoverBackgroundColor: '#00cccc',
                    lineTension: 0, //Straight Lines
                    borderWidth: 4,
                    pointRadius: 8,
                    pointBorderWidth: 3,
                    pointHoverRadius: 8,
                    pointHoverBorderWidth: 3
                },
                {
                    data: [1800, 4800, 4000, 1900, 8600, 2700, 9000, 2800, 4800],
                    fill: false,
                    label: 'Old Visitors',
                    backgroundColor: '#f1a80a',
                    borderColor: '#f1a80a',
                    pointBorderColor: "#fff",
                    pointBackgroundColor: '#f1a80a',
                    pointHoverBorderColor: "#fff",
                    pointHoverBackgroundColor: '#f1a80a',
                    lineTension: 0, //Straight lines
                    borderWidth: 4,
                    pointRadius: 8,
                    pointBorderWidth: 3,
                    pointHoverRadius: 8,
                    pointHoverBorderWidth: 3
                }
            ]
        };

        this.siteVisitDataItems = [
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
            legend: {
                display: true,
                position: 'top',
                fullWidth: true,
                labels:{
                    boxWidth: 25,
                    fontSize: 14,
                    fontColor: '#777',
                    fontStyle: 'bold'
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        borderDash: [2, 2]
                    }
                }],
                yAxes: [{
                    display: false
                }]
            }
        };
    }
}