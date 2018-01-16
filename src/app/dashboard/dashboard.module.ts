import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';

import { EarningChartModule } from './earning-chart-panel/earning-chart-panel.module';
import { TopSearchModule } from './top-search-panel/top-search-panel.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    PanelModule,
    DataListModule,
    EarningChartModule,
    TopSearchModule
  ],
  exports: [ DashboardComponent ]
})
export class DashboardModule { }
