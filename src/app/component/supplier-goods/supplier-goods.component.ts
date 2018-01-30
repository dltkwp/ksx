import { Component, OnInit, TemplateRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Menus } from '../../interface/menus.interface';
import { Page } from '../../interface/page.interface';
import { SupplierGoodsRearch } from '../../interface/supplier.goods.rearch.interface';
import { SupplierCategory } from '../../class/SupplierCategory';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

const PageList: Page[] = [
  { id: 1, name: 'zhangzhang', age: 20 },
  { id: 2, name: 'xiaoxiao', age: 24 },
  { id: 3, name: 'yuyu', age: 19 },
  { id: 4, name: 'zhangxiao', age: 20 },
  { id: 5, name: 'Smite', age: 50 },
  { id: 6, name: 'Datu', age: 34 },
  { id: 7, name: 'DUDU', age: 29 },
  { id: 8, name: 'YOUYOU', age: 30 },
  { id: 9, name: 'xinzhang', age: 20 },
  { id: 10, name: 'Amada', age: 24 },
  { id: 11, name: 'Adaer', age: 19 },
  { id: 12, name: 'hele', age: 20 },
  { id: 13, name: 'Datu', age: 34 },
  { id: 14, name: 'DUDU', age: 29 },
  { id: 15, name: 'YOUYOU', age: 30 },
  { id: 16, name: 'xinzhang', age: 20 },
  { id: 17, name: 'Amada', age: 24 },
  { id: 18, name: 'Adaer', age: 19 },
  { id: 19, name: 'hele', age: 20 },
  { id: 20, name: 'Datu', age: 34 },
  { id: 21, name: 'DUDU', age: 29 },
  { id: 22, name: 'YOUYOU', age: 30 },
  { id: 23, name: 'xinzhang', age: 20 },
  { id: 24, name: 'Amada', age: 24 },
  { id: 25, name: 'Adaer', age: 19 },
  { id: 26, name: 'hele', age: 20 },
  { id: 27, name: 'YOUYOU', age: 30 },
  { id: 28, name: 'xinzhang', age: 20 },
  { id: 29, name: 'Amada', age: 24 },
  { id: 30, name: 'Adaer', age: 19 },
  { id: 31, name: 'hele', age: 20 },
  { id: 32, name: 'YOUYOU', age: 30 },
  { id: 33, name: 'xinzhang', age: 20 },
  { id: 34, name: 'Amada', age: 24 },
  { id: 35, name: 'Adaer', age: 19 },
  { id: 36, name: 'hele', age: 20 },
  { id: 37, name: 'YOUYOU', age: 30 },
  { id: 38, name: 'xinzhang', age: 20 },
  { id: 39, name: 'Amada', age: 24 },
  { id: 40, name: 'Adaer', age: 19 },
  { id: 41, name: 'hele', age: 20 },
  { id: 42, name: 'hele', age: 20 },
  { id: 43, name: 'YOUYOU', age: 30 },
  { id: 44, name: 'xinzhang', age: 20 },
  { id: 45, name: 'Amada', age: 24 },
  { id: 46, name: 'Adaer', age: 19 },
  { id: 47, name: 'hele', age: 20 },
];

@Component({
  selector: 'app-supplier-goods',
  templateUrl: './supplier-goods.component.html',
  styles: []
})
export class SupplierGoodsComponent implements OnInit {
  public menus: Menus;
  public rearch: SupplierGoodsRearch;
  public categoryList: Array<SupplierCategory>;
  public curCategory: SupplierCategory;
  public showEmpty: Boolean;

  page = PageList;
  public totalNum = this.page.length;  // 总数据条数
  public pageSize = 15; // 每页数条数
  public pageData = this.pageSize;  // 每页数据
  public totalPage = Math.floor((this.totalNum - 1) / this.pageData) + 1; // 总页数
  public curPage = 1; // 当前页码

  constructor(private http: Http,
    private toastr: ToastrService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.menus = {
      parentKey: 'supplier',
      childrenKey: 'supplierGoods'
    };
    this.curCategory = null;
    this.queryCategoryList();
  }

  getPageData(pageNo) {
    const self = this;
    self.curPage = pageNo;
    this.pageSize = this.pageData * pageNo;
  }

  categoryChange() {
    console.log(this.curCategory);
  }

  queryCategoryList() {
    const token = localStorage.getItem('ksx-token-c');
    if (token) {
      const heder = new Headers();
      heder.append('Authorization', token);
      this.http.get('http://39.106.65.215:8081/EasyTime/categories', {
        headers: heder
      })
        .toPromise()
        .then(respnse => {
          let tempArr = [];
          tempArr.push({
            id: '',
            categoriesName: '全部'
          });
          tempArr = tempArr.concat(respnse.json());
          this.categoryList = tempArr;
          this.curCategory = tempArr[0];
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
