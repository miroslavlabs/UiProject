import { SharedModule } from '../../shared-module/shared-module.module';
import { NgModule } from '@angular/core';

import { UserComponent } from './user-component.component';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [ UserComponent ],
  providers: []
})
export class UserModule { 
}