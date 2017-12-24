import { Component, OnInit, Input  } from '@angular/core';
import { Menus } from '../../interface/menus.interface';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styles: []
})
export class MenusComponent implements OnInit {
  @Input() menus: Menus;
  constructor() { }

  ngOnInit() {

  }

}
