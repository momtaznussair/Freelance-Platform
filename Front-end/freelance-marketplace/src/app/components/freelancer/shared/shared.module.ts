import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './header/nav/nav.component';
import { searchFilter } from 'src/app/pipes/search-filter.pipe';

const routes : Routes =[

]

@NgModule({
  declarations: [
    NavComponent,searchFilter
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports : [
    NavComponent,searchFilter
  ]
})
export class SharedModule { }
