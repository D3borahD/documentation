import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {RouterOutlet} from "@angular/router";
import { AngularComponent } from './components/angular/angular.component';
import {AppRoutingModule} from "./app-routing.module";
import { GithubComponent } from './components/github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AngularComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
