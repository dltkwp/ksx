import { Component, OnInit } from '@angular/core';

import { Menus } from '../../interface/menus.interface';

@Component({
  selector: 'app-distributor-goods',
  templateUrl: './distributor-goods.component.html',
  styles: []
})
export class DistributorGoodsComponent implements OnInit {
  public menus: Menus;

  constructor() { }

  ngOnInit() {
    this.menus = {
      parentKey: 'distributor',
      childrenKey: 'distributorGoods'
    };
  }

}
