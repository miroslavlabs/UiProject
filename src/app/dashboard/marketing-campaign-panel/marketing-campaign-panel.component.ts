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

        var dougnutMiddleLableDisplayFunction = function(chart) {
            var width = this.width;
            var height = this.height;

            var textSize = 60;
            this.ctx.font = `900 ${textSize}px Lato`;
            this.ctx.textBaseline = 'middle';            
            this.ctx.fillStyle = '#343a41';

            var text = "MC";              
            var textX = Math.round((width - this.ctx.measureText(text).width) / 2);
            var textY = (height + this.controller.legend.height) / 2;

            this.ctx.fillText(text, textX, textY);
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
            }, 
            tooltip : {
                mode: 'average'
            }
        }
    }
}