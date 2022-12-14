import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './pages/auth/login-admin/login-admin.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'', 
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
