import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PanelMenuModule, MenuModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';

import { UserModule } from './user-component/user-component.module';
import { SideMenuComponent } from './side-menu.component';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    PanelMenuModule,
    MenuModule,
    FormsModule,
    UserModule
  ],
  exports: [ SideMenuComponent ],
  providers: []
})
export class SideMenuModule { 
}