import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path:'', 
  children:[
    { 
      path:'admin',
      component: LoginAdminComponent
    },
    { 
      path:'login',
      component: LoginComponent
    },
    { 
      path:'**',
      redirectTo:'login'
    },
  ]
}];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
