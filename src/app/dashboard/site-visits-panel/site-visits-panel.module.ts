import { SharedModule } from '../../shared-module/shared-module.module';
import { NgModule } from '@angular/core';

import { SiteVisitPanelComponent } from './site-visits-panel.component';


@NgModule({
  declarations: [
    SiteVisitPanelComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [ SiteVisitPanelComponent ]
})
export class SiteVisitPanelModule { }
