import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from './header/nav/nav.component';

const routes : Routes =[

]


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports : [
    NavComponent
  ],
})
export class LayoutModule { }
