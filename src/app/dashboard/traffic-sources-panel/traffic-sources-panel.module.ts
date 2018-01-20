import { SharedModule } from '../../shared-module/shared-module.module';
import { NgModule } from '@angular/core';

import { TrafficSourcesPanelComponent } from './traffic-sources-panel.component';


@NgModule({
  declarations: [
    TrafficSourcesPanelComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [ TrafficSourcesPanelComponent ]
})
export class TrafficSourcesModule { }