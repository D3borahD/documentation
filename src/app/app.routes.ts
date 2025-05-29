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
import {SoftwareCraftComponent} from "@app/components/software-craft/software-craft.component";
import {
  IntroductionSoftwareCraftComponent
} from "@app/components/software-craft/introduction-software-craft/introduction-software-craft.component";
import {GithubPageComponent} from "@app/components/github/github-page/github-page.component";
import {TddComponent} from "@app/components/software-craft/tdd/tdd.component";
import {CleanCodeComponent} from "@app/components/software-craft/clean-code/clean-code.component";
import {PairProgrammingComponent} from "@app/components/software-craft/pair-programming/pair-programming.component";
import {RefactoringComponent} from "@app/components/software-craft/refactoring/refactoring.component";
import {BddComponent} from "@app/components/software-craft/bdd/bdd.component";
import {LegacyCodeComponent} from "@app/components/software-craft/legacy-code/legacy-code.component";

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
        component: AngularIntroductionComponent
      },
      {
        path: 'tutorial',
        component: TutorialComponent
      },
      {
        path: 'component',
        component: ComponentComponent
      },
      {
        path: 'template',
        component: TemplatesComponent
      },
      {
        path: 'directives',
        component: DirectivesComponent
      },
      {
        path: 'pipes',
        component: PipesComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'routing',
        component: RoutingComponent
      },
      {
        path: 'observables',
        component: ObservablesComponent
      },
      {
        path: 'exercices',
        component: AngularExercicesComponent
      },
    ]
  },
  {
    path: 'github',
    component: GithubComponent,
    children:[
      {
        path: '',
        redirectTo: 'introduction',
        pathMatch:'full'
      },
      {
        path: 'introduction',
        component: GithubPageComponent
      }
    ]

  },
  {
    path: 'algorithms',
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
    component: EnglishComponent
  },
  {
    path: 'softwareCraft',
    component: SoftwareCraftComponent,
    children:[
      {
        path: '',
        redirectTo: 'introduction',
        pathMatch:'full'
      },
      {
        path: 'introduction',
        component: IntroductionSoftwareCraftComponent
      },
      {
        path: 'tdd',
        component: TddComponent
      },
      {
        path: 'clean-code',
        component: CleanCodeComponent
      },
      {
        path: 'bdd',
        component: BddComponent
      },
      {
        path: 'pair-programming',
        component: PairProgrammingComponent
      },
      {
        path: 'refactoring',
        component: RefactoringComponent
      },
      {
        path: 'legacy-code',
        component: LegacyCodeComponent
      },
    ]
  },
];
