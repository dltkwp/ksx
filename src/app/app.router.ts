import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AuthorizationComponent } from './component/authorization/authorization.component';
import { RegistComponent } from './component/regist/regist.component';

import { ConfigLevelComponent } from './component/config-level/config-level.component';
import { ConfigCategoryComponent } from './component/config-category/config-category.component';
import { ConfigMyComponent } from './component/config-my/config-my.component';

import { DistributorOrderComponent } from './component/distributor-order/distributor-order.component';
import { DistributorCustomerComponent } from './component/distributor-customer/distributor-customer.component';
import { DistributorGoodsComponent } from './component/distributor-goods/distributor-goods.component';


// 供应商 路由
import { SupplierGoodsCategoryComponent } from './component/supplier-goods-category/supplier-goods-category.component';
import { SupplierDistributorLevelComponent } from './component/supplier-distributor-level/supplier-distributor-level.component';
import { SupplierGoodsComponent } from './component/supplier-goods/supplier-goods.component';
import { SupplierDistributorComponent } from './component/supplier-distributor/supplier-distributor.component';
import { SupplierOrderComponent } from './component/supplier-order/supplier-order.component';

export const ROUTES: Routes = [
  { path: '', component: AuthorizationComponent },
  { path: 'v_login', component: AuthorizationComponent },
  { path: 'v_regist', component: RegistComponent },

  { path: 'config/v_level', component: ConfigLevelComponent },
  { path: 'config/v_category', component: ConfigCategoryComponent },
  { path: 'config/v_my', component: ConfigMyComponent },

  { path: 'distributor/v_order', component: DistributorOrderComponent },
  { path: 'distributor/v_customer', component: DistributorCustomerComponent },
  { path: 'distributor/v_goods', component: DistributorGoodsComponent },

  { path: 'supplier/v_order', component: SupplierOrderComponent },
  { path: 'supplier/v_distributor', component: SupplierDistributorComponent },
  { path: 'supplier/v_goods', component: SupplierGoodsComponent },
  { path: 'supplier/v_level', component: SupplierDistributorLevelComponent },
  { path: 'supplier/v_category', component: SupplierGoodsCategoryComponent },

];
