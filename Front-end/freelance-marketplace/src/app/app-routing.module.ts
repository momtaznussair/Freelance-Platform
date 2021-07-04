import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'freelancer',
    loadChildren: () => import('./components/freelancer/freelancer.module').then(m => m.FreelancerModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./components/client/client.module').then(m => m.ClientModule)
  },
  {
    path: '',
    loadChildren: () => import('./components/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
