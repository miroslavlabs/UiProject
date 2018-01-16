import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PanelMenuModule, PanelModule } from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChartModule} from 'primeng/primeng';

import { EarningChartComponent } from './earning-chart-panel.component';


@NgModule({
  declarations: [
    EarningChartComponent
  ],
  imports: [
    BrowserModule,
    PanelMenuModule,
    PanelModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ChartModule
  ],
  exports: [ EarningChartComponent ]
})
export class EarningChartModule { }
