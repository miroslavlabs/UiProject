import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PanelMenuModule, PanelModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/primeng';

import { SiteVisitPanelComponent } from './site-visits-panel.component';


@NgModule({
  declarations: [
    SiteVisitPanelComponent
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
  exports: [ SiteVisitPanelComponent ]
})
export class SiteVisitPanelModule { }
