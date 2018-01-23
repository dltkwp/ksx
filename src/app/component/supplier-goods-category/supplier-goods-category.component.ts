import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Menus } from '../../interface/menus.interface';
import { SupplierCategory } from '../../class/SupplierCategory';
@Component({
  selector: 'app-supplier-goods-category',
  templateUrl: './supplier-goods-category.component.html',
  styles: []
})
export class SupplierGoodsCategoryComponent implements OnInit {
  public menus: Menus;
  public categoryList: Array<SupplierCategory>;

  public categoryName: String;
  public loading: Boolean;
  public index: Number;

  constructor(private http: Http,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.menus = {
      parentKey: 'supplier',
      childrenKey: 'supplierGoodsCategory'
    };
    this.queryCategoryList();
    this.categoryName = '';
    this.loading = false;
  }

  showSaveModal() {
    this.categoryName = '';
    $("#divCategorySaveModal").modal("show");
  }
  saveCategoryName(category: SupplierCategory) {
    const name = $.trim(category.categoryName);
    if (name == "") {
      this.toastr.warning('名称不可为空.', '提示');
      return false;
    }
    const token = localStorage.getItem('ksx-token-c');
    if (token) {
      const heder = new Headers();
      heder.append('Authorization', token);
      this.loading = true;
      this.http.post('http://39.106.65.215:8081/EasyTime/categories', {
        categoriesName: name
      }, {
          headers: heder
        })
        .toPromise()
        .then(reponse => {
          const res = reponse.json();
          switch (res.code) {
            case 200: {
              $("#divCategorySaveModal").modal("hide");
              this.toastr.error('操作成功.', '提示');
              this.queryCategoryList();
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
    const cur = this.categoryList[_index];
    if (cur) {
      this.categoryName = cur.categoriesName;
      $("#divCategoryEditModal").modal("show");
    }
  }
  editCategoryName(category: SupplierCategory) {
    const name = $.trim(category.categoryName);
    if (name == "") {
      this.toastr.warning('名称不可为空.', '提示');
      return false;
    }
    const token = localStorage.getItem('ksx-token-c');
    if (token) {
      const heder = new Headers();
      heder.append('Authorization', token);
      this.loading = true;
      const cur = this.categoryList[this.index];
      if (cur) {
        this.http.put('http://39.106.65.215:8081/EasyTime/categories', {
          id: cur.id,
          categoriesName: name
        }, {
            headers: heder
          })
          .toPromise()
          .then(reponse => {
            const res = reponse.json();
            switch (res.code) {
              case 200: {
                $("#divCategoryEditModal").modal("hide");
                this.toastr.error('操作成功.', '提示');
                this.queryCategoryList();
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
  deleteCategoryName() {
    const token = localStorage.getItem('ksx-token-c');
    if (token) {
      const heder = new Headers();
      heder.append('Authorization', token);
      this.loading = true;
      const cur = this.categoryList[this.index];
      if (cur) {
        this.http.delete('http://39.106.65.215:8081/EasyTime/categories/' + cur.id, {
          headers: heder
        })
          .toPromise()
          .then(reponse => {
            const res = reponse.json();
            switch (res.code) {
              case 200: {
                $("#divDeleteConfirm").modal("hide");
                this.toastr.error('操作成功.', '提示');
                this.queryCategoryList();
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
          this.categoryList = respnse.json();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

}
