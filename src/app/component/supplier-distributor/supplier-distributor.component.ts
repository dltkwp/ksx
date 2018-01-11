import { Component, OnInit } from '@angular/core';
import { Menus } from '../../interface/menus.interface';

@Component({
  selector: 'app-supplier-distributor',
  templateUrl: './supplier-distributor.component.html',
  styles: []
})
export class SupplierDistributorComponent implements OnInit {
  public menus: Menus;

  constructor() { }

  ngOnInit() {
  this.menus = {
    parentKey: 'supplier',
    childrenKey: 'supplierManager'
  };
  }

}
