import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'signup',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {path: 'login' , component:LoginComponent},
  {path: '' , component:LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports : [
    LoginComponent
  ]
})
export class LoginModule { }
