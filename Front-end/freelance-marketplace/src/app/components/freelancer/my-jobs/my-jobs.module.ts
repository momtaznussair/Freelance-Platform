import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { MyContractsComponent } from './my-contracts/my-contracts.component';
import { WorkDiaryComponent } from './work-diary/work-diary.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes : Routes = [
  {path : 'jobs' , component : MyJobsComponent},
  {path : 'contracts' , component : MyContractsComponent},
  {path : 'workdiary' , component : WorkDiaryComponent}
]


@NgModule({
  declarations: [
    MyJobsComponent,
    MyContractsComponent,
    WorkDiaryComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class MyJobsModule { }
