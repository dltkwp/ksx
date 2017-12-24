import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { AuthorizationComponent } from './component/authorization/authorization.component';


export const ROUTES: Routes = [
  { path: '', component: AuthorizationComponent },
  { path: 'v_login', component: AuthorizationComponent }
];
