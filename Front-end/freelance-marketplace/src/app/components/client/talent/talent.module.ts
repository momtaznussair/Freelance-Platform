import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHiresComponent } from './my-hires/my-hires.component';
import { SavedTalentComponent } from './saved-talent/saved-talent.component';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {path : 'myhires' , component : MyHiresComponent},
  {path : 'savedtalent' , component : SavedTalentComponent},
  {path : '' , component : MyHiresComponent},
]

@NgModule({
  declarations: [
    MyHiresComponent,
    SavedTalentComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports : [
    MyHiresComponent,
    SavedTalentComponent
  ]
})
export class TalentModule { }
