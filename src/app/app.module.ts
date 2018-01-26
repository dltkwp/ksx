import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule  } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';

import { ROUTES } from './app.router';
import { AuthorizationComponent } from './component/authorization/authorization.component';
import { MenusComponent } from './component/menus/menus.component';
import { OrderComponent } from './component/order/order.component';
import { ConfigMyComponent } from './component/config-my/config-my.component';
import { UserCardComponent } from './component/user-card/user-card.component';
import { DistributorOrderComponent } from './component/distributor-order/distributor-order.component';
import { DistributorCustomerComponent } from './component/distributor-customer/distributor-customer.component';
import { DistributorGoodsComponent } from './component/distributor-goods/distributor-goods.component';
import { SupplierOrderComponent } from './component/supplier-order/supplier-order.component';
import { SupplierDistributorComponent } from './component/supplier-distributor/supplier-distributor.component';
import { SupplierGoodsComponent } from './component/supplier-goods/supplier-goods.component';
import { SupplierGoodsCategoryComponent } from './component/supplier-goods-category/supplier-goods-category.component';
import { SupplierDistributorLevelComponent } from './component/supplier-distributor-level/supplier-distributor-level.component';
import { RegistComponent } from './component/regist/regist.component';
import { PageComponent } from './component/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    MenusComponent,
    OrderComponent,
    ConfigMyComponent,
    UserCardComponent,
    DistributorOrderComponent,
    DistributorCustomerComponent,
    DistributorGoodsComponent,
    SupplierOrderComponent,
    SupplierDistributorComponent,
    SupplierGoodsComponent,
    SupplierGoodsCategoryComponent,
    SupplierDistributorLevelComponent,
    RegistComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
