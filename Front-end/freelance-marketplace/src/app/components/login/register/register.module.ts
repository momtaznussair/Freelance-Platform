import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes=[
  {path : 'main' , component : SignupComponent},
  {path : '' , component : SignupComponent},
]

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule , RouterModule.forChild(routes)
  ],
  exports : [
    SignupComponent
  ]
})
export class RegisterModule { }
