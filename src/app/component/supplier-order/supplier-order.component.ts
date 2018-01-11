import { Component, OnInit } from '@angular/core';

import { Menus } from '../../interface/menus.interface';

@Component({
  selector: 'app-supplier-order',
  templateUrl: './supplier-order.component.html',
  styles: []
})
export class SupplierOrderComponent implements OnInit {
  public menus: Menus;
  constructor() { }

  ngOnInit() {
    this.menus = {
      parentKey: 'supplier',
      childrenKey: 'supplierOrder'
    };
  }

}
