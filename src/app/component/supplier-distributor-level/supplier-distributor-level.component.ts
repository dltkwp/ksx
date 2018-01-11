import { Component, OnInit } from '@angular/core';
import { Menus } from '../../interface/menus.interface';

@Component({
  selector: 'app-supplier-distributor-level',
  templateUrl: './supplier-distributor-level.component.html',
  styles: []
})
export class SupplierDistributorLevelComponent implements OnInit {
  public menus: Menus;
  constructor() { }

  ngOnInit() {
    this.menus = {
      parentKey: 'supplier',
      childrenKey: 'supplierLevel'
    };
  }

}
