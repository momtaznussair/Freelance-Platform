import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routes For Portfolio
const routes : Routes = [
  {path:'show/:id' , component:ShowComponent},
  {path:'edit/:id' , component:EditComponent},
]

@NgModule({
  declarations: [
    ShowComponent,
    EditComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule
  ]
})

export class PortfolioModule { }
