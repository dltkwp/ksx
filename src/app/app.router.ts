import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AuthorizationComponent } from './component/authorization/authorization.component';

import { ConfigLevelComponent } from './component/config-level/config-level.component';
import { ConfigCategoryComponent } from './component/config-category/config-category.component';
import { ConfigMyComponent } from './component/config-my/config-my.component';

import { DistributorOrderComponent } from './component/distributor-order/distributor-order.component';
import { DistributorCustomerComponent } from './component/distributor-customer/distributor-customer.component';
import { DistributorGoodsComponent } from './component/distributor-goods/distributor-goods.component';

export const ROUTES: Routes = [
  { path: '', component: AuthorizationComponent },
  { path: 'v_login', component: AuthorizationComponent }

  ,
  { path: 'config/v_level', component: ConfigLevelComponent },
  { path: 'config/v_category', component: ConfigCategoryComponent },
  { path: 'config/v_my', component: ConfigMyComponent },

  { path: 'distributor/v_order', component: DistributorOrderComponent },
  { path: 'distributor/v_customer', component: DistributorCustomerComponent },
  { path: 'distributor/v_goods', component: DistributorGoodsComponent },
];
