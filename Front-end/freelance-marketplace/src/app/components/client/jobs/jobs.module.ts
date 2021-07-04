import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyjobsComponent } from './myjobs/myjobs.component';
import { AllJobPostsComponent } from './all-job-posts/all-job-posts.component';
import { AllContractsComponent } from './all-contracts/all-contracts.component';
import { BringYourOwnTalentComponent } from './bring-your-own-talent/bring-your-own-talent.component';
import { PostAJobComponent } from './post-a-job/post-a-job.component';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  // {path : 'myjobs' , component : MyJobsComponent},
  {path : 'myjobs' , component : MyjobsComponent},
  {path : 'postjob' , component : PostAJobComponent},
  {path : 'jobposts' , component : AllJobPostsComponent},
  {path : 'bringyouralltalent' , component : BringYourOwnTalentComponent},
  {path : 'contracts' , component : AllContractsComponent},
  {path : '' , component : MyjobsComponent},
]

@NgModule({
  declarations: [
    MyjobsComponent,
    AllJobPostsComponent,
    AllContractsComponent,
    BringYourOwnTalentComponent,
    PostAJobComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports : [
    AllContractsComponent , AllJobPostsComponent , BringYourOwnTalentComponent,
    PostAJobComponent,MyjobsComponent
  ]
})
export class JobsModule { }
