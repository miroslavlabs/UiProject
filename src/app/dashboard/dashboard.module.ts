import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/primeng';

import { StatisticContainerModule } from './statistic-container/statistic-container.module';
import { EarningChartModule } from './earning-chart-panel/earning-chart-panel.module';
import { TopSearchModule } from './top-search-panel/top-search-panel.module';
import { TrafficSourcesModule } from './traffic-sources-panel/traffic-sources-panel.module';
import { RecentOrderModule } from './recent-order-panel/recent-order-panel.module';
import { SiteVisitPanelModule } from './site-visits-panel/site-visits-panel.module';
import { MarketingCampaignPanelModule } from './marketing-campaign-panel/marketing-campaign-panel.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    PanelModule,
    StatisticContainerModule,
    EarningChartModule,
    TopSearchModule,
    TrafficSourcesModule,
    RecentOrderModule,
    SiteVisitPanelModule,
    MarketingCampaignPanelModule
  ],
  exports: [ DashboardComponent ]
})
export class DashboardModule { }
