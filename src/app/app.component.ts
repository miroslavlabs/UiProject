import { Component } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hideShowSideMenu() {
    $('.side-menu-container').toggleClass('hide');
    $('.user-component-container').toggleClass('display');
    $('.dashboard').toggleClass('expand');
    $('.hide-show-button i').toggleClass('fa-indent');
    $('.hide-show-button').toggleClass('place-button');
  }

  title = 'app';
}
