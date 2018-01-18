import { Component, ViewEncapsulation} from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'recent-order-panel',
  templateUrl: './recent-order-panel.component.html',
  styleUrls: ['./recent-order-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecentOrderComponent { 
  recentOrders: any;
  cols: any;

  ngOnInit() {
    this.cols = [
      { field: 'image', header: 'IMAGE' },
      { field: 'productName', header: 'PRODUCT NAME' },
      { field: 'productCode', header: 'PRODUCT CODE' },
      { field: 'status', header: 'STATUS' },
      { field: 'date', header: 'PURCHASED ON' },
      { field: 'price', header: 'PRICE' },
      { field: 'quantity', header: 'QUANTITY' },
      { field: 'trackingN', header: 'TRACKING NO#' }
    ];

    this.recentOrders = [
      {
        image: '',
        productName: 'Leisure Suit Casual',
        productCode: '3BSD59',
        status: 'Paid',
        date:'27 Sep 2015',
        price: '$99.00',
        quantity: '2',
        trackingN: '#BG6R9853LP'
      },
      {
        image: '',
        productName: 'Cotton Fleece Casual',
        productCode: '3BH87G',
        status: 'Pending',
        date:'08 Sep 2015',
        price: '$99.00',
        quantity: '2',
        trackingN: '#368QRM83B'
      },
      {
        image: '',
        productName: 'Formal Slim Fit Casual',
        productCode: '4D3GHT',
        status: 'Paid',
        date:'25 Aug 2015',
        price: '$99.00',
        quantity: '2',
        trackingN: '#AXZ6F58T3V'
      },
      {
        image: '',
        productName: 'Velvet Patchwork Casual',
        productCode: '5D4H3G',
        status: 'Failed',
        date:'27 Sep 2015',
        price: '$99.00',
        quantity: '2',
        trackingN: '#SD89HK561'
      }
    ];
  }
}