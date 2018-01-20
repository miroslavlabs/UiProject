import { SharedModule } from '../../shared-module/shared-module.module';
import { NgModule } from '@angular/core';

import { MarketingCampaignPanelComponent } from './marketing-campaign-panel.component';


@NgModule({
  declarations: [
    MarketingCampaignPanelComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [ MarketingCampaignPanelComponent ]
})
export class MarketingCampaignPanelModule { }
