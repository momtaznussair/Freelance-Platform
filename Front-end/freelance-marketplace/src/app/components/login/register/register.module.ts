import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes : Routes=[
  {path : 'main' , component : SignupComponent},
  {path : '' , component : SignupComponent},
]

@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    CommonModule , RouterModule.forChild(routes),FormsModule,ReactiveFormsModule
  ],
  exports : [
    SignupComponent
  ]
})
export class RegisterModule { }
