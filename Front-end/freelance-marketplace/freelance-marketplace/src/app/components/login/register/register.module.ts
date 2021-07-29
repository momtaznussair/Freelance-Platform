import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const routes : Routes=[
  {path : 'main' , component : SignupComponent},
  {path : '' , component : SignupComponent},
]

@NgModule({
  declarations: [
    SignupComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule , RouterModule.forChild(routes),FormsModule,ReactiveFormsModule
  ],
  exports : [
    SignupComponent , SidebarComponent
  ]
})
export class RegisterModule { }
