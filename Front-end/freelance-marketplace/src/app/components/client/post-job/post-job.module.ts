import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AsideComponent } from './shared/aside/aside.component';
import { TitleComponent } from './title/title.component';
import { DescriptionComponent } from './description/description.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { BudgetComponent } from './budget/budget.component';
import { ReviewComponent } from './review/review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes : Routes = [
  {path:"title" , component:TitleComponent},
  {path:"description" , component:DescriptionComponent},
  {path:"expertise",component:ExpertiseComponent},
  {path:"budget",component:BudgetComponent},
  {path:"review",component:ReviewComponent},
  {path:"" , component:TitleComponent}
];



@NgModule({
  declarations: [
    AsideComponent,
    ExpertiseComponent,
    BudgetComponent,
    ReviewComponent,
    TitleComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule

  ]
})
export class PostJobModule { }
