import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'login', component: LoginAdminComponent},
      { path:'dashboard', component: DashboardComponent},
      { path:'**', redirectTo:'login'},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class AdminRoutingModule { }
