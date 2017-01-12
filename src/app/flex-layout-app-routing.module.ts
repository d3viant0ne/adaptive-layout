import { ResponsiveComponent } from './features/responsive/responsive.component';
import { StaticComponent } from './features/static/static.component';
import { DashboardComponent } from './features/dashboard.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

export const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'static',
    component: StaticComponent
  },
  {
    path: 'responsive',
    component: ResponsiveComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class FlexLayoutAppRoutingModule { }
