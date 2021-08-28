import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { NavComponent } from '../shared/header/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { searchFilter } from 'src/app/pipes/search-filter.pipe';
import { filterJobs } from 'src/app/pipes/filter-jobs.pipe';
// import { NavComponent } from './header/nav/nav.component';
// import { ClientnavComponent } from './header/clientnav/clientnav.component';

const routes : Routes =[

]


@NgModule({
  declarations: [
    searchFilter, filterJobs,
  
    // ClientnavComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports : [
  searchFilter, filterJobs
  ],
})
export class LayoutModule { }
