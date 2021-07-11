import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';
import { FindWorkComponent } from './find-work/find-work.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStatsComponent } from './my-stats/my-stats.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProfileComponent } from './profile/profile.component';

const routes : Routes = [
  {path : 'stats' , component : MyStatsComponent},
  {path : 'saved-jobs' , component : SavedJobsComponent},
  {path : 'work' , component : FindWorkComponent},
  {path : 'profile' , component : ProfileComponent},
  {path : 'proposals' , component : ProposalsComponent},
  {path:'', component:FindWorkComponent}
]

@NgModule({
  declarations: [
    MyStatsComponent,
    FindWorkComponent,
    SavedJobsComponent,
    ProposalsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ],
  exports : [MyStatsComponent]
})
export class FindWorkModule {}
