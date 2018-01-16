import { Component, ViewEncapsulation } from '@angular/core';
import { Menubar, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideMenuComponent {
  generalMenuItems: MenuItem[];
  elementsMenuItems: MenuItem[];
  
      ngOnInit() {
        this.generalMenuItems = [{
          label: 'Dashboard', 
          icon: 'fa-tachometer',
          items: [
              {label: 'Dashboard 1', icon: 'fa-circle-o'},
              {label: 'Dashboard 2', icon: 'fa-circle-o'},
              {label: 'Comming Soon', icon: 'fa-circle-o'},
          ]
        },
        {
          label: 'Layouts', 
          icon: 'fa-desktop',
          items: [
              {label: 'Layouts 1', icon: 'fa-circle-o'},
              {label: 'Layouts 2', icon: 'fa-circle-o'},
              {label: 'Comming Soon', icon: 'fa-circle-o'},
          ]
        },
        {
          label: 'Pages', 
          icon: 'fa-folder',
          items: [
              {label: 'Pages 1', icon: 'fa-circle-o'},
              {label: 'Pages 2', icon: 'fa-circle-o'},
              {label: 'Comming Soon', icon: 'fa-circle-o'},
          ]
        }
      ];

      this.elementsMenuItems =[{
        label: 'Invoice',
        icon: 'fa-dollar'
      },
      {
        label: 'Chart',
        icon: 'fa-area-chart'
      },
      {
        label: 'Snippets',
        icon: 'fa-code'
      },
      {
        label: 'UI Widgets',
        icon: 'fa-gavel'
      },
      {
        label: 'Forms',
        icon: 'fa-pencil'
      },
      {
        label: 'Components',
        icon: 'fa-cubes'
      },
      {
        label: 'Plugin',
        icon: 'fa-puzzle-piece'
      },
      {
        label: 'Emails',
        icon: 'fa-envelope'
      }];
  }
}