import { SharedModule } from '../../shared-module/shared-module.module';
import { NgModule } from '@angular/core';

import { StatisticContainerComponent } from './statistic-container.component';

@NgModule({
  declarations: [
    StatisticContainerComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [ StatisticContainerComponent ]
})
export class StatisticContainerModule { }