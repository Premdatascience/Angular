import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { authGuard } from '../app/AuthGuard/auth.guard';
import { roleGuard } from './AuthGuard/role.guard';
import { FormComponent } from './crud-form/form/form.component';
const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: "register", component: RegisterFormComponent },


 //rolebased authentication 
  // {
  //   path: "home", component: SidenavbarComponent,
  //   canActivate: [authGuard,roleGuard],
  //   data:{
  //     role:"0"
  //   }
  // },

  //simple authentication 

  {
    path: "home", component: SidenavbarComponent,
    canActivate: [authGuard],
  
  },
  {
    path: "form", component: FormComponent,
    canActivate: [authGuard],
  
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
