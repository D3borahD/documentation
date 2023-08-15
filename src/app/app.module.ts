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
import { AngularIntroductionComponent } from './components/angular/components/angular-introduction/angular-introduction.component';
import { ComponentComponent } from './components/angular/components/component/component.component';
import { AngularExercicesComponent } from './components/angular/components/angular-exercices/angular-exercices.component';
import {TemplatesComponent} from "./components/angular/components/templates/templates.component";
import { AlgorithmsComponent } from './components/algorithms/algorithms.component';
import { Chap1Component } from './components/algorithms/chap1/chap1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AngularComponent,
    GithubComponent,
    AngularIntroductionComponent,
    ComponentComponent,
    AngularExercicesComponent,
    TemplatesComponent,
    AlgorithmsComponent,
    Chap1Component
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
