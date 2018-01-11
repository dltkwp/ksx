import { Component, OnInit } from '@angular/core';
import { Menus } from '../../interface/menus.interface';

@Component({
  selector: 'app-supplier-goods',
  templateUrl: './supplier-goods.component.html',
  styles: []
})
export class SupplierGoodsComponent implements OnInit {
  public menus: Menus;
  constructor() { }

  ngOnInit() {
    this.menus = {
      parentKey: 'supplier',
      childrenKey: 'supplierGoods'
    };
  }

}
