import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ROUTES } from './app.router';
import { AuthorizationComponent } from './component/authorization/authorization.component';
import { MenusComponent } from './component/menus/menus.component';
import { OrderComponent } from './component/order/order.component';
import { ConfigLevelComponent } from './component/config-level/config-level.component';
import { ConfigCategoryComponent } from './component/config-category/config-category.component';
import { ConfigMyComponent } from './component/config-my/config-my.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    MenusComponent,
    OrderComponent,
    ConfigLevelComponent,
    ConfigCategoryComponent,
    ConfigMyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
