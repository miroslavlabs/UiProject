import { SharedModule } from '../../shared-module/shared-module.module';
import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/primeng';
import { BreadcrumbModule } from 'primeng/primeng';

import { TopToolsComponent } from './top-tools.component';


@NgModule({
  declarations: [
    TopToolsComponent
  ],
  imports: [
    SharedModule,
    BreadcrumbModule,
    DropdownModule
  ],
  exports: [ TopToolsComponent ]
})
export class TopToolsModule { }