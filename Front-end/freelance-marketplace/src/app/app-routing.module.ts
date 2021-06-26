import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // example for how to use sub routes by lazy load syntax
  {
    path: 'landing-page',
    loadChildren: () => import('./components/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
