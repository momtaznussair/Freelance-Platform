import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NavComponent } from './header/nav/nav.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClientnavComponent} from './clientnav.component';


const routes : Routes =[

]

@NgModule({
  declarations: [
   ClientnavComponent , 
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes), NgxPaginationModule
  ],
  exports : [
    ClientnavComponent,
  ]
})
export class LayoutModule { }
