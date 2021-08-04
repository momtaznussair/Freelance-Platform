import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BillingMethodsComponent } from './billing-methods/billing-methods.component';
import { MembershipComponent } from './membership/membership.component';
import { ConnectedServicesComponent } from './connected-services/connected-services.component';
import { MembersPermissionsComponent } from './members-permissions/members-permissions.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { NotificationComponent } from './notification/notification.component';
import { SecurityComponent } from './security/security.component';
import { TaxInformationComponent } from './tax-information/tax-information.component';
import { TeamsComponent } from './teams/teams.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes : Routes = [
  {path : 'info' , component : MyInfoComponent},
  {path : 'payments/deposit-methods' , component :BillingMethodsComponent},
  {path : 'account-security/password-and-security' , component : SecurityComponent},
  {path : 'plans/index' , component : MembershipComponent},
  {path : 'teams' , component : TeamsComponent},
  {path : 'notification-settings' , component : NotificationComponent},
  {path : 'members/active' , component : MembersPermissionsComponent},
  {path : 'payments/tax-info' , component : TaxInformationComponent},
  {path : '' , component : MyInfoComponent}
]

@NgModule({
  declarations: [
    MyInfoComponent,
    BillingMethodsComponent,
    SecurityComponent,
    MembershipComponent,
    TeamsComponent,
    NotificationComponent,
    MembersPermissionsComponent,
    TaxInformationComponent,
    ConnectedServicesComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),ReactiveFormsModule,FormsModule
  ],
  exports : [
    SidebarComponent
  ]
})
export class ClientSettingModule { }
