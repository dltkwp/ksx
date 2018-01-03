import { Component, OnInit } from '@angular/core';

import { Menus } from '../../interface/menus.interface';

@Component({
  selector: 'app-distributor-customer',
  templateUrl: './distributor-customer.component.html',
  styles: []
})
export class DistributorCustomerComponent implements OnInit {

  public menus: Menus;

  constructor() { }

  ngOnInit() {
    this.menus = {
      parentKey: 'distributor',
      childrenKey: 'distributorCustomer'
    };
  }

}
