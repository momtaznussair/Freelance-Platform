import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class SharedModule { }
