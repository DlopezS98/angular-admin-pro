import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsOneComponent } from './graphics-one/graphics-one.component';
import { AccountSettingsComponent } from './account-setting/account-settings.component';

const routes: Routes = [
  { path: 'dashboard', 
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graphics-one', component: GraphicsOneComponent },
      { path: 'settings', component: AccountSettingsComponent },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
