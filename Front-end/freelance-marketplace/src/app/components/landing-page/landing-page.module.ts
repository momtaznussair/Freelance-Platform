import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JoinWorldComponent } from './join-world/join-world.component';
import { ForClientComponent } from './for-client/for-client.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { HireAProComponent } from './hire-a-pro/hire-a-pro.component';
import { MyProposalComponent } from './my-proposal/my-proposal.component';
import { WeareComponent } from './weare/weare/weare.component';
import { TopskillComponent } from './topskill/topskill/topskill.component';

const routes: Routes = [
  {path : 'main' , component : MainComponent},
  {path : '' , component : MainComponent},
];

@NgModule({
  declarations: [
    JoinWorldComponent,
    ForClientComponent,
    MainComponent,
    HireAProComponent,
    MyProposalComponent,
    WeareComponent,
    TopskillComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ],
  exports: [JoinWorldComponent , ForClientComponent , HireAProComponent]
})
export class LandingPageModule { }
