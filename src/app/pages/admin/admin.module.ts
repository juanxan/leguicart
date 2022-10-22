import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { CarAdminComponent } from './car-admin/car-admin.component';
import { CarDetAdminComponent } from './car-det-admin/car-det-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuAdminComponent } from 'src/app/components/menu-admin/menu-admin.component';
import { SearchAdminComponent } from 'src/app/components/search-admin/search-admin.component';


@NgModule({
  declarations: [
    LoginAdminComponent,
    CarDetAdminComponent,
    CarAdminComponent,
    DashboardComponent,
    MenuAdminComponent,
    SearchAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
