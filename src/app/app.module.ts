import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadCrumbsComponent } from './shared/components/bread-crumbs/bread-crumbs.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    SignUpComponent,
    DashboardComponent,
    BreadCrumbsComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
