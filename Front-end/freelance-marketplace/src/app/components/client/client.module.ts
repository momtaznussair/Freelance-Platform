import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobsModule } from './jobs/jobs.module';
import { TalentModule } from './talent/talent.module';
import { ReportsModule } from '../client/reports/reports.module';
import { MessagesModule } from './messages/messages.module';
import { ClientSettingModule } from './client-setting/client-setting.module';
import { MainComponent } from './main/main.component';


const routes : Routes = [
  {path : 'main' ,component : MainComponent},
  {path : '' , component : MainComponent},
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)
  },
  {
    path: 'talent',
    loadChildren: () => import('./talent/talent.module').then(m => m.TalentModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./client-setting/client-setting.module').then(m => m.ClientSettingModule)
  }
]

@NgModule({
  declarations: [


    MainComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports : [
    JobsModule, TalentModule , ReportsModule,MessagesModule,ClientSettingModule
  ]
})
export class ClientModule { }
