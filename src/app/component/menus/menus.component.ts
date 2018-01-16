import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Menus } from '../../interface/menus.interface';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styles: []
})
export class MenusComponent implements OnInit {
  @Input() menus: Menus;
  constructor(private http: Http) { }

  ngOnInit() {
    this.getLoginUser();
  }

  getLoginUser() {

    this.http.get('http://113.235.125.190:8081/user', {})
      .toPromise()
      .then(reponse => {
        const res = reponse.json();
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
