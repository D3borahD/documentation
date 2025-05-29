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
    component: GithubComponent,
    children:[
      {
        path: '',
        redirectTo: 'introduction',
        pathMatch:'full'
      },
      {
        path: 'introduction',
        title: 'Introduction',
        component: GithubPageComponent
      }
    ]

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
  {
    path: 'softwareCraft',
    title: 'Software Craft',
    component: SoftwareCraftComponent,
    children:[
      {
        path: '',
        redirectTo: 'introduction',
        pathMatch:'full'
      },
      {
        path: 'introduction',
        title: 'Introduction',
        component: IntroductionSoftwareCraftComponent
      },
      {
        path: 'tdd',
        title: 'TDD',
        component: TddComponent
      },
      {
        path: 'clean-code',
        title: 'Clean code',
        component: CleanCodeComponent
      },
      {
        path: 'bdd',
        title: 'BDD',
        component: BddComponent
      },
      {
        path: 'pair-programming',
        title: 'Pair programming',
        component: PairProgrammingComponent
      },
      {
        path: 'refactoring',
        title: 'Refactoring',
        component: RefactoringComponent
      },
      {
        path: 'legacy-code',
        title: 'Code legacy',
        component: LegacyCodeComponent
      },
    ]
  },
];
