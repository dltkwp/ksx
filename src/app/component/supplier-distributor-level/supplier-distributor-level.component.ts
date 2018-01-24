import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Menus } from '../../interface/menus.interface';
import { SupplierLevel } from '../../interface/supplier.level.interface';

@Component({
  selector: 'app-supplier-distributor-level',
  templateUrl: './supplier-distributor-level.component.html',
  styles: []
})
export class SupplierDistributorLevelComponent implements OnInit {
  public menus: Menus;
  public loading: Boolean;
  public index: Number;
  public levelList: Array<SupplierLevel>;
  public level: SupplierLevel;
  public pricePattern = /^\d+(.\d{1,2})?$/;
  public showEmpty: Boolean;

  constructor(private http: Http,
    private toastr: ToastrService) { }

  discountCheck(discount) {
    let res = true;
    if (!/^(\d+\.\d{1,1}|\d+)$/.test(discount)) {
      this.toastr.warning('请输入1-10的数,可以保留1位小数', '提示');
      res = false;
    }
    if (parseInt(discount, 10) > 10) {
      this.toastr.warning('折扣不可大于10', '提示');
      res = false;
    }
    return res;
  }

  ngOnInit() {
    this.menus = {
      parentKey: 'supplier',
      childrenKey: 'supplierLevel'
    };
    this.level = {
      levelName: '',
      discount: '',
      price: '',
      id: ''
    };
    this.query();
    this.loading = false;
    this.showEmpty = false;
  }

  showSaveModal() {
    this.level = {
      levelName: '',
      discount: '',
      price: '',
      id: ''
    };
    $("#divLevelSaveModal").modal("show");
  }
  save(level: SupplierLevel) {
    const levelName = $.trim(level.levelName);
    const discount = $.trim(level.discount);
    const price = $.trim(level.price);
    if (name === '') {
      this.toastr.warning('名称不可为空.', '提示');
      return false;
    }
    if (!this.discountCheck(discount)) {
      return false;
    }
    if (!this.pricePattern.test(price)) {
      this.toastr.warning('价格格式不正确.', '提示');
      return false;
    }

    const token = localStorage.getItem('ksx-token-c');
    if (token) {
      const heder = new Headers();
      heder.append('Authorization', token);
      this.loading = true;
      this.http.post('http://39.106.65.215:8081/EasyTime/level', {
        levelName: name,
        discount: discount,
        price: price
      }, {
          headers: heder
        })
        .toPromise()
        .then(reponse => {
          const res = reponse.json();
          switch (res.code) {
            case 200: {
              $("#divLevelSaveModal").modal("hide");
              this.toastr.error('操作成功.', '提示');
              this.query();
            } break;
            default: {
              this.toastr.error(res.msg, '提示');
            }
          }
          this.loading = false;
        })
        .catch((error) => {
          this.toastr.error(error.message);
          this.loading = false;
        });
    }
  }

  showEditModal(_index) {
    this.index = _index;
    const cur = this.levelList[_index];
    if (cur) {
      this.level = cur;
      $("#divLevelEditModal").modal("show");
    }
  }
  edit(level: SupplierLevel) {
    const levelName = $.trim(level.levelName);
    const discount = $.trim(level.discount);
    const price = $.trim(level.price);
    if (name === '') {
      this.toastr.warning('名称不可为空.', '提示');
      return false;
    }
    if (!this.discountCheck(discount)) {
      return false;
    }
    if (!this.pricePattern.test(price)) {
      this.toastr.warning('价格格式不正确.', '提示');
      return false;
    }
    const token = localStorage.getItem('ksx-token-c');
    if (token) {
      const heder = new Headers();
      heder.append('Authorization', token);
      this.loading = true;
      const cur = this.levelList[(this.index + '')];
      if (cur) {
        this.http.put('http://39.106.65.215:8081/EasyTime/level', {
          id: cur.id,
          levelName: name,
          discount: discount,
          price: price
        }, {
            headers: heder
          })
          .toPromise()
          .then(reponse => {
            const res = reponse.json();
            switch (res.code) {
              case 200: {
                $("#divLevelEditModal").modal("hide");
                this.toastr.error('操作成功.', '提示');
                this.query();
              } break;
              default: {
                this.toastr.error(res.msg, '提示');
              }
            }
            this.loading = false;
          })
          .catch((error) => {
            this.toastr.error(error.message);
            this.loading = false;
          });
      }
    }
  }

  showDeleteConfirm(_index) {
    this.index = _index;
    $("#divDeleteConfirm").modal("show");
  }
  delete() {
    const token = localStorage.getItem('ksx-token-c');
    if (token) {
      const heder = new Headers();
      heder.append('Authorization', token);
      this.loading = true;
      const cur = this.levelList[ this.index + '' ];
      if (cur) {
        this.http.delete('http://39.106.65.215:8081/EasyTime/level/' + cur.id, {
          headers: heder
        })
          .toPromise()
          .then(reponse => {
            const res = reponse.json();
            switch (res.code) {
              case 200: {
                $("#divDeleteConfirm").modal("hide");
                this.toastr.error('操作成功.', '提示');
                this.query();
              } break;
              default: {
                this.toastr.error(res.msg, '提示');
              }
            }
            this.loading = false;
          })
          .catch((error) => {
            this.toastr.error(error.message);
            this.loading = false;
          });
      }
    }
  }

  query() {
    const token = localStorage.getItem('ksx-token-c');
    if (token) {
      const heder = new Headers();
      heder.append('Authorization', token);
      this.http.get('http://39.106.65.215:8081/EasyTime/levels', {
        headers: heder
      })
        .toPromise()
        .then(respnse => {
          this.levelList = respnse.json();
          this.showEmpty = this.levelList.length > 0;
        })
        .catch((error) => {
          this.showEmpty = true;
          console.error(error);
        });
    }
  }



}
