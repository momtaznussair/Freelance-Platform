import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [

];

@NgModule({
  declarations: [

    FooterComponent,
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),  NgxPaginationModule
  ],
  exports : [FooterComponent]
})
export class SharedModule { }
