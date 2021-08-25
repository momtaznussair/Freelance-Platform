import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AuthGuard } from 'src/app/guards/auth.guard';
import { FreelancerAuthorization } from 'src/app/guards/freelancer-authorization.guard';
import { LayoutModule } from '../../layout/layout.module';

const routes : Routes=[
  {path : 'main' , component : ConnectionTypeComponent},
  {path : 'register' , component : SignupComponent},
  {path : 'category' , component : CategoryComponent, canActivate:[AuthGuard]},
  {path : 'overview' , component : OverviewComponent, canActivate:[AuthGuard]},
  {path : 'skills' , component : ExpertiseComponent, canActivate:[AuthGuard]},
  {path : 'experience-level' , component : ExpertlevelComponent, canActivate:[AuthGuard]},
  {path : 'education' , component : EductionComponent, canActivate:[AuthGuard , FreelancerAuthorization]},
  {path : 'lang' , component : LanguagesComponent, canActivate:[AuthGuard]},
  {path : 'hourly-rate' , component : HourlyrateComponent, canActivate:[]},
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
    CommonModule , RouterModule.forChild(routes),FormsModule,ReactiveFormsModule,LayoutModule
    
  ],
  exports : [
    SignupComponent , SidebarComponent
  ]
})
export class RegisterModule { }
