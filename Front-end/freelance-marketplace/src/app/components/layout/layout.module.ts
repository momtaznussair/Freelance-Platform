import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from './header/nav/nav.component';
// import { ClientnavComponent } from './header/clientnav/clientnav.component';

const routes : Routes =[

]


@NgModule({
  declarations: [
    NavComponent,
    // ClientnavComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports : [
    NavComponent
  ],
})
export class LayoutModule { }
