import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LandingNavComponent } from './header/nav/landingNav.component';

const routes: Routes = [

];

@NgModule({
  declarations: [

    FooterComponent,LandingNavComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),  NgxPaginationModule,
  ],
  exports : [FooterComponent,LandingNavComponent]
})
export class SharedModule { }
