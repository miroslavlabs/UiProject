import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}    from '@angular/forms';
import {DropdownModule} from 'primeng/primeng';
import { BreadcrumbModule } from 'primeng/primeng';

import { TopToolsComponent } from './top-tools.component';


@NgModule({
  declarations: [
    TopToolsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BreadcrumbModule,
    DropdownModule
  ],
  exports: [ TopToolsComponent ]
})
export class TopToolsModule { }