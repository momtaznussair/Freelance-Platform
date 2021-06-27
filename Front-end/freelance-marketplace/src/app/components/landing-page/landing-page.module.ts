import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JoinWorldComponent } from './join-world/join-world.component';
import { ForClientComponent } from './for-client/for-client.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path : 'main' , component : MainComponent},
  {path : '' , component : MainComponent},
];

@NgModule({
  declarations: [
    JoinWorldComponent,
    ForClientComponent,
    MainComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [JoinWorldComponent , ForClientComponent]
})
export class LandingPageModule { }
