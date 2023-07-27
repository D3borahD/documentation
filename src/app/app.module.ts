import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {RouterOutlet} from "@angular/router";
import { AngularComponent } from './components/angular/angular.component';
import {AppRoutingModule} from "./app-routing.module";
import { GithubComponent } from './components/github/github.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IntoductionComponent } from './components/angular/components/intoduction/intoduction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AngularComponent,
    GithubComponent,
    IntoductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
