import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first/first.component';
import { ExpertiseComponent } from './Expertise/expertise/expertise.component';
import { ExpertlevelComponent } from './Expertlevel/expertlevel/expertlevel.component';
import { EductionComponent } from './Eduction/eduction/eduction.component';
import { EmpolymentComponent } from './Employment/empolyment/empolyment.component';
import { LanguagesComponent } from './languages/languages/languages.component';
import { HourlyrateComponent } from './hourlyrate/hourlyrate/hourlyrate.component';
import { LocationComponent } from './location/location/location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const routes : Routes=[
  {path : 'main' , component : SignupComponent},
  {path : '' , component : SignupComponent},
]

@NgModule({
  declarations: [
    SignupComponent,
    FirstComponent,
    ExpertiseComponent,
    ExpertlevelComponent,
    EductionComponent,
    EmpolymentComponent,
    LanguagesComponent,
    HourlyrateComponent,
    LocationComponent,
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
