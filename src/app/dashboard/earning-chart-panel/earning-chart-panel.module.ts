import { SharedModule } from '../../shared-module/shared-module.module';
import { NgModule } from '@angular/core';

import { EarningChartComponent } from './earning-chart-panel.component';


@NgModule({
  declarations: [
    EarningChartComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [ EarningChartComponent ]
})
export class EarningChartModule { }
