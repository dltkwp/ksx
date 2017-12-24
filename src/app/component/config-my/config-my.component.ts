import { Component, OnInit } from '@angular/core';
import { Menus } from '../../interface/menus.interface';

@Component({
  selector: 'app-config-my',
  templateUrl: './config-my.component.html',
  styles: []
})
export class ConfigMyComponent implements OnInit {
  public menus: Menus;
  constructor() { }

  ngOnInit() {
    this.menus = {
      parentKey: 'config',
      childrenKey: 'my'
    };
  }

}
