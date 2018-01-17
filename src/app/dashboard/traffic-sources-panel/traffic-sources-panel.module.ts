import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';

import { TrafficSourcesPanelComponent } from './traffic-sources-panel.component';


@NgModule({
  declarations: [
    TrafficSourcesPanelComponent
  ],
  imports: [
    BrowserModule,
    PanelModule,
    DataListModule
  ],
  exports: [ TrafficSourcesPanelComponent ]
})
export class TrafficSourcesModule { }