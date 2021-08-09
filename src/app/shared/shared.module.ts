import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    BreadCrumbsComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadCrumbsComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
