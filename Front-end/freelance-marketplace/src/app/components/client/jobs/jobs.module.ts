import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyjobsComponent } from './myjobs/myjobs.component';
import { AllJobPostsComponent } from './all-job-posts/all-job-posts.component';
import { AllContractsComponent } from './all-contracts/all-contracts.component';
import { BringYourOwnTalentComponent } from './bring-your-own-talent/bring-your-own-talent.component';
import { PostAJobComponent } from './post-a-job/post-a-job.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { JobDetailsComponent } from './myjobs/job-details/job-details.component';
import { ProposalsComponent } from './proposals/proposals.component';
// import { SharedModul } from '../shared/shared.module';



const routes : Routes = [
  // {path : 'myjobs' , component : MyJobsComponent},
  {path : 'myjobs' , component : MyjobsComponent},
  {path : 'postjob' , component : PostAJobComponent},
  {path : 'jobposts' , component : AllJobPostsComponent},
  {path : 'bringyouralltalent' , component : BringYourOwnTalentComponent},
  {path : 'contracts' , component : AllContractsComponent},
  {path : 'job/details' , component : JobDetailsComponent},
  {path : 'job/details/:id' , component : JobDetailsComponent},
  {path : 'proposals' , component : ProposalsComponent},
  {path : '' , component : MyjobsComponent},
]

@NgModule({
  declarations: [
    MyjobsComponent,
    AllJobPostsComponent,
    AllContractsComponent,
    BringYourOwnTalentComponent,
    PostAJobComponent,
    JobDetailsComponent,
    ProposalsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),LayoutModule
  ],
  exports : [
    AllContractsComponent , AllJobPostsComponent , BringYourOwnTalentComponent,
    PostAJobComponent,MyjobsComponent
  ]
})
export class JobsModule { }
