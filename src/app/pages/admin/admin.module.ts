import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';

import { CarAdminComponent } from './car-admin/car-admin.component';
import { CarDetAdminComponent } from './car-det-admin/car-det-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuAdminComponent } from 'src/app/components/menu-admin/menu-admin.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    CarDetAdminComponent,
    CarAdminComponent,
    DashboardComponent,
    MenuAdminComponent,
    AdminComponent,
    ProfileComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AdminModule { }
