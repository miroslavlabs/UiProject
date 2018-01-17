import { Component } from '@angular/core';

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
                    ]
                }]
        };

        this.options = {
            responsive: true,
            legend: {
                display: true,
            }
        };
    }
}