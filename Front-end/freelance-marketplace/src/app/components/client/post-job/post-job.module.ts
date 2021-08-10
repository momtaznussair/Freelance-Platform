import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartComponent } from './getting-start/getting-start.component';
import { AsideComponent } from './shared/aside/aside.component';
import { TitleComponent } from './title/title.component';
import { DescriptionComponent } from './description/description.component';
import { DetailsComponent } from './details/details.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { VisibilityComponent } from './visibility/visibility.component';
import { BudgetComponent } from './budget/budget.component';
import { ReviewComponent } from './review/review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes : Routes = [
  {path:"getting-start" , component: GettingStartComponent},
  {path:"title" , component:TitleComponent},
  {path:"description" , component:DescriptionComponent},
  {path:"details" , component:DetailsComponent},
  {path:"expertise",component:ExpertiseComponent},
  {path:"visibility",component:VisibilityComponent},
  {path:"budget",component:BudgetComponent},
  {path:"review",component:ReviewComponent},
  {path:"" , component:GettingStartComponent}
];



@NgModule({
  declarations: [
    GettingStartComponent,
    AsideComponent,
    DetailsComponent,
    ExpertiseComponent,
    VisibilityComponent,
    BudgetComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule

  ]
})
export class PostJobModule { }
