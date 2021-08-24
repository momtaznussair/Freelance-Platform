import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { NavComponent } from './header/nav/nav.component';
=======
// import { NavComponent } from '../shared/header/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { searchFilter } from 'src/app/pipes/search-filter.pipe';
import { filterJobs } from 'src/app/pipes/filter-jobs';
>>>>>>> b0581348d7c38f224886b6ba0e47f64cabb2ce79

const routes : Routes =[

]


@NgModule({
  declarations: [
<<<<<<< HEAD
    NavComponent
=======
    searchFilter, filterJobs,
>>>>>>> b0581348d7c38f224886b6ba0e47f64cabb2ce79
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports : [
<<<<<<< HEAD
    NavComponent
=======
  searchFilter, filterJobs
>>>>>>> b0581348d7c38f224886b6ba0e47f64cabb2ce79
  ],
})
export class LayoutModule { }
