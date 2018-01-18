import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'top-tools',
  templateUrl: './top-tools.component.html',
  styleUrls: ['./top-tools.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopToolsComponent implements OnInit { 
    private items: MenuItem[];
    reportingPeriod: SelectItem[];

    ngOnInit() {
        this.items = [
            {label:'Dashboard'},
            {label:'Home'},
            {label:'All Site View'}
        ];

        this.reportingPeriod = [];
        this.reportingPeriod.push({ label: "Last 30 Day's", value: { id: 1, name: "Last 30 Day's", code: "30"}});
        this.reportingPeriod.push({ label: "Last 15 Day's", value: { id: 2, name: "Last 15 Day's", code: "15"}});
        this.reportingPeriod.push({ label: "Last 3 Months's", value: { id: 3, name: "Last 3 Months's", code: "3M"}});
    }
}