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
    this.http.get('http://39.106.65.215:8081/EasyTime/user', {
      headers: {
        'Authorization': localStorage.getItem('ksx-token-c')
      }
    })
      .toPromise()
      .then(reponse => {
        const res = reponse.json();
        localStorage.setItem('BaseUserInfo', res);
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
