import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ItemService} from './items/shared/item.service';
import {HttpClientModule} from '@angular/common/http';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemCreateComponent } from './items/item-create/item-create.component';
import { ItemtypeListComponent } from './itemTypes/itemtype-list/itemtype-list.component';
import {ItemtypeService} from './itemTypes/shared/itemtype.service';
import { ItemtypeCreateComponent } from './itemTypes/itemtype-create/itemtype-create.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: 'item/:id',
    component: ItemDetailComponent},
  {
    path: 'items',
    component: ItemListComponent,
    data: { title: 'Item List' }
  },
  {
  path: 'items/create',
  component: ItemCreateComponent,
  },
  { path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  },
  {
    path: 'itemtype/create',
    component: ItemtypeCreateComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemCreateComponent,
    ItemtypeListComponent,
    ItemtypeCreateComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [ItemService, ItemtypeService],
  bootstrap: [AppComponent],
})
export class AppModule { }
