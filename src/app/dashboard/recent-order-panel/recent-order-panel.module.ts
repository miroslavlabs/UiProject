import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PanelMenuModule, PanelModule } from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


import { RecentOrderComponent } from './recent-order-panel.component';


@NgModule({
  declarations: [
    RecentOrderComponent
  ],
  imports: [
    BrowserModule,
    PanelMenuModule,
    PanelModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [ RecentOrderComponent ]
})
export class RecentOrderModule { }