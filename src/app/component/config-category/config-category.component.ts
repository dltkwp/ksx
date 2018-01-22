import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Menus } from '../../interface/menus.interface';

@Component({
  selector: 'app-config-category',
  templateUrl: './config-category.component.html',
  styles: []
})
export class ConfigCategoryComponent implements OnInit {
  public menus: Menus;
  // public categoryList: Array<DistributorCategory>;
  constructor(private http: Http,
    private toastr: ToastrService) { }

  ngOnInit() {
    console.log('dddddddddddddddddd');
    // this.queryCategoryList();
  }
  // queryCategoryList() {
  //   const token = localStorage.getItem('ksx-token-c');
  //   if (token) {
  //     const heder = new Headers();
  //     heder.append('Authorization', token);
  //     this.http.put('http://113.235.119.27:8081/categories',
  //       { headers: heder })
  //       .toPromise()
  //       .then(reponse => {
  //         const res = reponse.json();
  //         switch (res.code) {
  //           case 200: {
  //             this.categoryList = res;
  //           } break;
  //           default: {
  //             this.toastr.error(res.msg, '提示');
  //           }
  //         }
  //       })
  //       .catch((error) => {
  //         this.toastr.error(error.messsage, '提示');
  //       });
  //   }
  // }

}
