import { SharedModule } from './shared-module/shared-module.module';
import { NgModule } from '@angular/core';

import { SideMenuModule } from './side-menu/side-menu.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    SideMenuModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
