import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from './header/nav/mainNav.component';
import { FormsModule } from '@angular/forms';

const routes : Routes =[

]


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule
  ],
  exports : [
    NavComponent
  ],
})
export class LayoutModule { }
