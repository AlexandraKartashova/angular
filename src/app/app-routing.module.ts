import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './login/main/main.component';
import { AuthService } from './core/service/auth.service'

const routes: Routes = [{
  path: 'login', 
  component: LoginComponent  
},
{
  path: "",
  redirectTo: "/login",
  pathMatch: "full"
},
{
  path: 'main',
  component: MainComponent,
  canActivate: [AuthService]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

