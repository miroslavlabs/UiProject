import { Component } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
    selector: 'marketing-campaign-panel',
    styleUrls: ['/marketing-campaign-panel.component.scss'],
    templateUrl: './marketing-campaign-panel.component.html'
})
export class MarketingCampaignPanelComponent {
    data: any;
    options: any;

    ngOnInit() {
        this.data = {
            labels: ['Research', 'Information', 'Product Design', 'Packaging'],
            datasets: [
                {
                    data: [180, 120, 90, 60],
                    backgroundColor: [
                        "#85c875",
                        "#0bc4df",
                        "#1e75eb",
                        "#f1a80a"
                    ],
                    borderWidth: [0, 0, 0, 0]
                }]
        };

        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
            },
            cutoutPercentage: 70
        };
    }
}