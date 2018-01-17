import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StatisticContainerComponent } from './statistic-container.component';

@NgModule({
  declarations: [
    StatisticContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [ StatisticContainerComponent ]
})
export class StatisticContainerModule { }