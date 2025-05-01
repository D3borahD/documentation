import { Routes } from '@angular/router';
import {AngularComponent} from "./components/angular/angular.component";
import {
  AngularIntroductionComponent
} from "./components/angular/components/angular-introduction/angular-introduction.component";
import {ComponentComponent} from "./components/angular/components/component/component.component";
import {TemplatesComponent} from "./components/angular/components/templates/templates.component";
import {DirectivesComponent} from "./components/angular/components/directives/directives.component";
import {PipesComponent} from "./components/angular/components/pipes/pipes.component";
import {ServicesComponent} from "./components/angular/components/services/services.component";
import {RoutingComponent} from "./components/angular/components/routing/routing.component";
import {ObservablesComponent} from "./components/angular/components/observables/observables.component";
import {AngularExercicesComponent} from "./components/angular/components/angular-exercices/angular-exercices.component";
import {GithubComponent} from "./components/github/github.component";
import {AlgorithmsComponent} from "./components/algorithms/algorithms.component";
import {Chap1Component} from "./components/algorithms/chap1/chap1.component";
import {EnglishComponent} from "./components/english/english.component";
import {TutorialComponent} from "@app/components/angular/components/tutorial/tutorial.component";

export const routes: Routes = [
  {
    path: '',
    component: AngularComponent
  },
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch:'full'
  },
  {
    path: 'angular',
    component: AngularComponent,
    children:[
      {
        path: '',
        redirectTo: 'introduction',
        pathMatch:'full'
      },
      {
        path: 'introduction',
        title: 'Introduction',
        component: AngularIntroductionComponent
      },
      {
        path: 'tutorial',
        title: 'Tutorial',
        component: TutorialComponent
      },
      {
        path: 'component',
        title: 'Component',
        component: ComponentComponent
      },
      {
        path: 'template',
        title: 'Template',
        component: TemplatesComponent
      },
      {
        path: 'directives',
        title: 'Directives',
        component: DirectivesComponent
      },
      {
        path: 'pipes',
        title: 'Pipes',
        component: PipesComponent
      },
      {
        path: 'services',
        title: 'Services',
        component: ServicesComponent
      },
      {
        path: 'routing',
        component: RoutingComponent
      },
      {
        path: 'observables',
        title: 'Observables',
        component: ObservablesComponent
      },
      {
        path: 'exercices',
        title: 'Exercices',
        component: AngularExercicesComponent
      },
    ]
  },
  {
    path: 'github',
    title: 'Github',
    component: GithubComponent
  },
  {
    path: 'algorithms',
    title: 'Algorithms',
    component: AlgorithmsComponent,
    children:[
      {
        path: '',
        redirectTo: 'chap1',
        pathMatch:'full'
      },
      {
        path: 'chap1',
        component: Chap1Component
      },
    ]
  },
  {
    path: 'english',
    title: 'English',
    component: EnglishComponent
  },
];
