import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';
import { FindWorkComponent } from './find-work/find-work.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStatsComponent } from './my-stats/my-stats.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProfileComponent } from './profile/profile.component';
import { JobDetailsComponent } from './find-work/job-details/job-details.component';
import { SubmitProposalComponent } from './find-work/job-details/submit-proposal/submit-proposal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortofolioComponent } from './profile/portfolio/portofolio.component';

const routes : Routes = [
  {path : 'work' , component : FindWorkComponent},
  {path : 'work/details' , component : JobDetailsComponent},
  {path : 'stats' , component : MyStatsComponent},
  {path : 'saved-jobs' , component : SavedJobsComponent},
  {path : 'profile' , component : ProfileComponent},
  {path : 'proposals' , component : ProposalsComponent},
  {path : 'submit-proposal' , component :SubmitProposalComponent},
  {path:'', component:FindWorkComponent}
]

@NgModule({
  declarations: [
    MyStatsComponent,
    FindWorkComponent,
    SavedJobsComponent,
    ProposalsComponent,
    ProfileComponent,
    JobDetailsComponent,
    SubmitProposalComponent,
    PortofolioComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgxPaginationModule,FormsModule,ReactiveFormsModule
  ],
  exports : [MyStatsComponent]
})
export class FindWorkModule {}
