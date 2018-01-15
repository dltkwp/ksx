import { Component, OnInit } from '@angular/core';

import { Menus } from '../../interface/menus.interface';
import { SupplierOrder, SupplierOrderRearch } from '../../class/SupplierOrder';

@Component({
  selector: 'app-supplier-order',
  templateUrl: './supplier-order.component.html',
  styles: []
})
export class SupplierOrderComponent implements OnInit {
  public menus: Menus;
  private supplierOrder: SupplierOrder;
  private searchMode: SupplierOrderRearch;
  private list: Array<SupplierOrder>;

  constructor() { }

  ngOnInit() {
    this.menus = {
      parentKey: 'supplier',
      childrenKey: 'supplierOrder'
    };
    this.list = [];
    this.searchMode = {
       time: '',
       payType: '',
       status: '',
       content: '',
       receiver: '',
       supplier: ''
    };
  }

  search() {

  }

  btnClick() {
    
  }

}
