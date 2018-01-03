import { Component, OnInit } from '@angular/core';


import { Menus } from '../../interface/menus.interface';

@Component({
  selector: 'app-distributor-order',
  templateUrl: './distributor-order.component.html',
  styles: []
})
export class DistributorOrderComponent implements OnInit {
  public menus: Menus;
  constructor() { }

  ngOnInit() {
    this.menus = {
      parentKey: 'distributor',
      childrenKey: 'distributorOrder'
    };
  }

}
