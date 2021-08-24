import { FilterJobsComponent } from './filter-jobs/filter-jobs.component';
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
  {path : 'work/details/:id' , component : JobDetailsComponent},
  {path : 'stats' , component : MyStatsComponent},
  {path : 'saved-jobs' , component : SavedJobsComponent},
  {path : 'profile' , component : ProfileComponent},
  {path : 'profile/portofolio', component:PortofolioComponent},
  {path : 'proposals' , component : ProposalsComponent},
  {path : 'submit-proposal' , component :SubmitProposalComponent},
  {path : 'submit-proposal/:id' , component :SubmitProposalComponent},
  {path : 'work/details/:id' , component :JobDetailsComponent},
  {path : 'filter-jobs' , component :FilterJobsComponent},
<<<<<<< HEAD
  // {path : 'filter' , component :FilterJobsComponent},
  {path:'', component:FindWorkComponent},

  {
    path: 'portfolios',
    loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
  }

=======
  {path : 'filter-jobs/:query' , component :FilterJobsComponent},
  // {path : 'filter' , component :FilterJobsComponent},
  {path:'', component:FindWorkComponent},
>>>>>>> b0581348d7c38f224886b6ba0e47f64cabb2ce79
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
    PortofolioComponent,
    FilterJobsComponent,
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,NgxPaginationModule,FormsModule,ReactiveFormsModule
  ],
  exports : [MyStatsComponent]
})
export class FindWorkModule {}
