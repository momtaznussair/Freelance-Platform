import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStatsComponent } from './my-stats/my-stats.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes : Routes = [
  {path : 'stats' , component : MyStatsComponent}
]

@NgModule({
  declarations: [
    MyStatsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ],
  exports : [MyStatsComponent]
})
export class FindWorkModule { }
