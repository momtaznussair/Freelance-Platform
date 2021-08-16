import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { searchFilter } from 'src/app/pipes/search-filter.pipe';

const routes: Routes = [

];

@NgModule({
  declarations: [

    FooterComponent,searchFilter
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),  NgxPaginationModule,
  ],
  exports : [FooterComponent,searchFilter]
})
export class SharedGlobalModule { }
