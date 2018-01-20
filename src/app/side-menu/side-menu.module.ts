import { SharedModule } from './../shared-module/shared-module.module';
import { NgModule } from '@angular/core';;

import { UserModule } from './user-component/user-component.module';
import { SideMenuComponent } from './side-menu.component';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    SharedModule,
    UserModule
  ],
  exports: [ SideMenuComponent ],
  providers: []
})
export class SideMenuModule { 
}