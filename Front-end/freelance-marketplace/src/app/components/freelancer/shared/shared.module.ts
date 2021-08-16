import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './header/nav/nav.component';
import { NgxPaginationModule } from 'ngx-pagination';


const routes : Routes =[

]

@NgModule({
  declarations: [
    NavComponent,
    
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes), NgxPaginationModule,
  ],
  exports : [
    NavComponent,
  ]
})
export class SharedModule { }
