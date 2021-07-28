import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MyReportsComponent } from './my-reports/my-reports.component';

const routes : Routes = [
  {path : 'overview' , component : OverviewComponent},
  {path : 'my-reports' , component : MyReportsComponent}
]

@NgModule({
  declarations: [
    OverviewComponent,
    MyReportsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class ReportsModule { }
