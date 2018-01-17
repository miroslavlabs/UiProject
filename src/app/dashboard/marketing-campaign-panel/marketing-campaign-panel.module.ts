import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PanelMenuModule, PanelModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/primeng';

import { MarketingCampaignPanelComponent } from './marketing-campaign-panel.component';


@NgModule({
  declarations: [
    MarketingCampaignPanelComponent
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
  exports: [ MarketingCampaignPanelComponent ]
})
export class MarketingCampaignPanelModule { }
