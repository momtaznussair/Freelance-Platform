import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJobsModule } from './my-jobs/my-jobs.module';
import { RouterModule, Routes } from '@angular/router';
import { FindWorkModule } from './find-work/find-work.module';
import { ReportsModule } from './reports/reports.module';
import { SharedModule } from './shared/shared.module';
import { FreelancerSettingModule } from './freelncer-setting/freelancer-setting.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';


const routes : Routes = [
  {
    path: 'myjobs',
    loadChildren: () => import('./my-jobs/my-jobs.module').then(m => m.MyJobsModule)
  },
  {
    path: 'work',
    loadChildren: () => import('./find-work/find-work.module').then(m => m.FindWorkModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./freelncer-setting/freelancer-setting.module').then(m => m.FreelancerSettingModule)
  }


]

@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,MyJobsModule,RouterModule.forChild(routes),SharedModule,FormsModule,LayoutModule
  ],
  exports : [
    MyJobsModule,FindWorkModule,ReportsModule,FreelancerSettingModule
  ]
})
export class FreelancerModule { }
``