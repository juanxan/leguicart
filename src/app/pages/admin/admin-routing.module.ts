import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarAdminComponent } from './car-admin/car-admin.component';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path:'', component: AdminComponent,
    children:[
      { path:'dashboard', component: DashboardComponent},
      { path:'cars', component: CarAdminComponent},
      { path:'category', component: CategoryComponent},
      { path:'**', redirectTo:'login'},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
