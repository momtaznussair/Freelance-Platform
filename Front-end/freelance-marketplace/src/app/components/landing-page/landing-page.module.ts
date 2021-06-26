import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JoinWorldComponent } from './join-world/join-world.component';
import { ForClientComponent } from './for-client/for-client.component';

const routes: Routes = [

];

@NgModule({
  declarations: [
    JoinWorldComponent,
    ForClientComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [JoinWorldComponent , ForClientComponent]
})
export class LandingPageModule { }
