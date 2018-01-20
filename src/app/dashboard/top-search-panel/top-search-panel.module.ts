import { SharedModule } from '../../shared-module/shared-module.module';
import { NgModule } from '@angular/core';
import { GMapModule } from 'primeng/primeng';

import { TopSearchComponent } from './top-search-panel.component';


@NgModule({
  declarations: [
    TopSearchComponent
  ],
  imports: [
    SharedModule,
    GMapModule
  ],
  exports: [ TopSearchComponent ]
})
export class TopSearchModule { }