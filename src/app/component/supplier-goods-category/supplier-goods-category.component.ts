import { Component, OnInit } from '@angular/core';
import { Menus } from '../../interface/menus.interface';

@Component({
  selector: 'app-supplier-goods-category',
  templateUrl: './supplier-goods-category.component.html',
  styles: []
})
export class SupplierGoodsCategoryComponent implements OnInit {
  public menus: Menus;

  constructor() { }

  ngOnInit() {
    this.menus = {
      parentKey: 'supplier',
      childrenKey: 'supplierGoodsCategory'
    };
  }

}
