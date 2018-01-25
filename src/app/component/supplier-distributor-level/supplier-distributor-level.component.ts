import { Component, OnInit, TemplateRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Menus } from '../../interface/menus.interface';
import { SupplierLevel } from '../../interface/supplier.level.interface';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

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
  public modalRef: BsModalRef;

  constructor(private http: Http,
    private toastr: ToastrService,
    private modalService: BsModalService) { }

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

  showSaveModal(template: TemplateRef<any>) {
    this.level = {
      levelName: '',
      discount: '',
      price: '',
      id: ''
    };
    this.modalRef = this.modalService.show(template);
  }
  save(level: SupplierLevel) {
    const levelName = level.levelName.trim();
    const discount = level.discount.trim();
    const price = level.price.trim();
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
              this.modalRef.hide();
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

  showEditModal(_index, template: TemplateRef<any>) {
    this.index = _index;
    const cur = this.levelList[_index];
    if (cur) {
      this.level = cur;
      this.modalRef = this.modalService.show(template);
    }
  }
  edit(level: SupplierLevel) {
    const levelName = level.levelName.trim();
    const discount = level.discount.trim();
    const price = level.price.trim();
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
                this.modalRef.hide();
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

  showDeleteConfirm(_index, template: TemplateRef<any>) {
    this.index = _index;
    this.modalRef = this.modalService.show(template);
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
                this.modalRef.hide();
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
