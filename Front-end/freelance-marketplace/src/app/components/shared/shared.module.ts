import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer/footer.component';

const routes: Routes = [

];

@NgModule({
  declarations: [

    FooterComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports : [FooterComponent]
})
export class SharedModule { }
