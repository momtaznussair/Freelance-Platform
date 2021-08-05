import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BillingMethodComponent } from './billing-method/billing-method.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MembershipComponent } from './membership/membership.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { TaxInformationComponent } from './tax-information/tax-information.component';
import { GetPaidComponent } from './get-paid/get-paid.component';
import { PassowrdSecurityComponent } from './passowrd-security/passowrd-security.component';
import { CreatClientAccountComponent } from './contact-info/creat-client-account/creat-client-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes : Routes = [
  {path : 'settings/deposit-method' , component :BillingMethodComponent},
  {path : 'settings/membership' , component :MembershipComponent},
  {path : 'settings/info' , component : ContactInfoComponent},
  {path : 'settings/tax-info' , component : TaxInformationComponent}, 
  {path : 'settings/get-paid' , component : GetPaidComponent},
  {path : 'settings/security' , component : PassowrdSecurityComponent},
  {path : 'client-account' , component : CreatClientAccountComponent},
]


@NgModule({
  declarations: [
    SidebarComponent,
    BillingMethodComponent,
    MembershipComponent,
    ContactInfoComponent,
    TaxInformationComponent,
    GetPaidComponent,
    PassowrdSecurityComponent,
    CreatClientAccountComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),ReactiveFormsModule,FormsModule
  ],
  exports : [
    SidebarComponent
  ]
})
export class FreelancerSettingModule { }
