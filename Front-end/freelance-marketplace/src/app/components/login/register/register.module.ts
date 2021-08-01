import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ExpertiseComponent } from './Expertise/expertise/expertise.component';
import { ExpertlevelComponent } from './Expertlevel/expertlevel/expertlevel.component';
import { EductionComponent } from './Eduction/eduction/eduction.component';
import { EmpolymentComponent } from './Employment/empolyment/empolyment.component';
import { LanguagesComponent } from './languages/languages/languages.component';
import { HourlyrateComponent } from './hourlyrate/hourlyrate/hourlyrate.component';
import { LocationComponent } from './location/location/location.component';
import { CategoryComponent } from './category/category/category.component';
import { ConnectionTypeComponent } from './connection-type/connection-type/connection-type.component';
import { OverviewComponent } from './overview/overview.component';



const routes : Routes=[
  {path : 'main' , component : ConnectionTypeComponent},
  {path : 'signup' , component : SignupComponent},
  {path : 'category' , component : CategoryComponent},
  {path : 'overview' , component : OverviewComponent},
  {path : 'expertise' , component : ExpertiseComponent},
  {path : 'expertise-level' , component : ExpertlevelComponent},
  {path : 'education' , component : EductionComponent},
  {path : 'lang' , component : LanguagesComponent},
  {path : 'hourly-rate' , component : HourlyrateComponent},
  {path : 'location' , component : LocationComponent},
  {path : '' , component : ConnectionTypeComponent},
]

@NgModule({
  declarations: [
    SignupComponent,
    SidebarComponent,
    ExpertiseComponent,
    ExpertlevelComponent,
    EductionComponent,
    EmpolymentComponent,
    LanguagesComponent,
    HourlyrateComponent,
    LocationComponent,
    SidebarComponent,
    LocationComponent,
    CategoryComponent,
    ConnectionTypeComponent,
    OverviewComponent,

  ],
  imports: [
    CommonModule , RouterModule.forChild(routes),FormsModule,ReactiveFormsModule
  ],
  exports : [
    SignupComponent , SidebarComponent
  ]
})
export class RegisterModule { }
