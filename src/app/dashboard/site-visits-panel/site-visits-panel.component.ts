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
                    borderColor: '#00cccc'
                },
                {
                    data: [1800, 4800, 4000, 1900, 8600, 2700, 9000, 2800, 4800],
                    fill: false,
                    label: 'Old Visitors',
                    borderColor: '#f1a80a'
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
            height: 245,
            legend: {
                display: true,
                fill: true,
                labels:{
                    boxWidth: 20
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