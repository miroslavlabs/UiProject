import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PanelMenuModule, PanelModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';


@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      PanelMenuModule,
      PanelModule,
      BrowserAnimationsModule,
      ChartModule,
      DataListModule
    ],
    exports: [
      CommonModule,
      BrowserModule,
      PanelMenuModule,
      PanelModule,
      BrowserAnimationsModule,
      ChartModule,
      DataListModule
    ]
  })
  export class SharedModule {}