import { SharedModule } from '../../shared-module/shared-module.module';
import { NgModule } from '@angular/core';
import { DataTableModule } from 'primeng/primeng';

import { RecentOrderComponent } from './recent-order-panel.component';

@NgModule({
  declarations: [
    RecentOrderComponent
  ],
  imports: [
    SharedModule,
    DataTableModule
  ],
  exports: [ RecentOrderComponent ]
})
export class RecentOrderModule { }