import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  exports: [
    BreadCrumbsComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
