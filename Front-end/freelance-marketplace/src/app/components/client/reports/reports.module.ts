import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialsComponent } from './financials/financials/financials.component';
import { MoreReportsComponent } from './more-reports/more-reports.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path : 'financials' , component : FinancialsComponent},
  {path : 'morereports' , component : MoreReportsComponent},
  {path : '' , component : MoreReportsComponent},
]

@NgModule({
  declarations: [


    FinancialsComponent,
        MoreReportsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports : [
    FinancialsComponent,
    MoreReportsComponent
  ]
})
export class ReportsModule { }
