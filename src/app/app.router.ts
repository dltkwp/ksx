import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AuthorizationComponent } from './component/authorization/authorization.component';

import { ConfigLevelComponent } from './component/config-level/config-level.component';
import { ConfigCategoryComponent } from './component/config-category/config-category.component';
import { ConfigMyComponent } from './component/config-my/config-my.component';


export const ROUTES: Routes = [
  { path: '', component: AuthorizationComponent },
  { path: 'v_login', component: AuthorizationComponent }

  ,
  { path: 'config/v_level', component: ConfigLevelComponent },
  { path: 'config/v_category', component: ConfigCategoryComponent },
  { path: 'config/v_my', component: ConfigMyComponent }
];
