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
import { SharedModule } from '../shared/shared.module';

const routes : Routes = [
  {path : 'deposit-method' , component :BillingMethodComponent},
  {path : 'membership' , component :MembershipComponent},
  {path : 'info' , component : ContactInfoComponent},
  {path : 'tax-info' , component : TaxInformationComponent},
  {path : 'get-paid' , component : GetPaidComponent},
  {path : 'security' , component : PassowrdSecurityComponent},
  {path : 'client-account' , component : CreatClientAccountComponent},
  {path : '' , component : ContactInfoComponent},
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
    CommonModule,RouterModule.forChild(routes),ReactiveFormsModule,FormsModule,SharedModule
  ],
  exports : [
    SidebarComponent
  ]
})
export class FreelancerSettingModule { }
