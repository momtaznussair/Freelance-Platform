import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavComponent } from './header/nav/nav.component';

const routes: Routes = [

];

@NgModule({
  declarations: [

    FooterComponent,NavComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),  NgxPaginationModule,
  ],
  exports : [FooterComponent,NavComponent]
})
export class SharedModule { }
