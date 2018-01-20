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

        var dougnutMiddleLableDisplayFunction = function() {
            var chartInstance = this.chart.chart.chart;
            var width = chartInstance.width;
            var height = chartInstance.height;

            chartInstance.ctx.font = '900 60px Lato';
            chartInstance.ctx.textBaseline = 'middle';            
            chartInstance.ctx.fillStyle = '#343a41';

            var text = "MC";              
            var textX = Math.round((width - chartInstance.ctx.measureText(text).width) / 2);
            var textY = (height + chartInstance.controller.legend.height) / 2;

            chartInstance.ctx.fillText(text, textX, textY);
        };

        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
            },
            cutoutPercentage: 70,
            animation: {
                duration: 100,
                onComplete: dougnutMiddleLableDisplayFunction,
                onProgress: dougnutMiddleLableDisplayFunction
            }
        }
    }
}