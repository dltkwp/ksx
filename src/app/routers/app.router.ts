import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthService } from '../service/auth.service';

const routes: Routes = [
  { path: '/', canActivate: [AuthService], pathMatch: 'full' },
  { path: '/index', pathMatch: 'full' }
];

// 将路由配置导出为 appRouting 以供调用, 子模块中的路由使用 forChild 而不是 forRoot
export const appRouting = RouterModule.forRoot(routes);
