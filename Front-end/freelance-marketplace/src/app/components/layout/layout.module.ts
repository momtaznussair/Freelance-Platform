import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { NavComponent } from '../shared/header/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { searchFilter } from 'src/app/pipes/search-filter.pipe';

const routes : Routes =[

]
@NgModule({
  declarations: [
    searchFilter
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,
  ],
  exports : [
  searchFilter
  ],
})
export class LayoutModule { }
