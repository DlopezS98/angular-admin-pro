import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicsOneComponent } from './graphics-one/graphics-one.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    ProgressComponent,
    DashboardComponent,
    GraphicsOneComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  exports: [
    ProgressComponent,
    DashboardComponent,
    GraphicsOneComponent,
    PagesComponent
  ]
})
export class PagesModule { }
