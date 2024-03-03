import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AngularComponent} from "./components/angular/angular.component";
import {GithubComponent} from "./components/github/github.component";
import {AlgorithmsComponent} from "./components/algorithms/algorithms.component";
import {AngularIntroductionComponent
} from "./components/angular/components/angular-introduction/angular-introduction.component";
import {ComponentComponent} from "./components/angular/components/component/component.component";
import {TemplatesComponent} from "./components/angular/components/templates/templates.component";
import {AngularExercicesComponent} from "./components/angular/components/angular-exercices/angular-exercices.component";
import {DirectivesComponent} from "./components/angular/components/directives/directives.component";
import {PipesComponent} from "./components/angular/components/pipes/pipes.component";
import {ServicesComponent} from "./components/angular/components/services/services.component";
import {RoutingComponent} from "./components/angular/components/routing/routing.component";
import { ObservablesComponent } from "./components/angular/components/observables/observables.component";

/*const routes: Routes = [
  { path: '', component: AngularComponent},

  { path: 'angular', component: AngularComponent,
    children:[
      {path: '', redirectTo: 'introduction', pathMatch:'full'},
      {path: 'introduction', component: AngularIntroductionComponent },
      {path: 'component', component: ComponentComponent },
      {path: 'template', component: TemplatesComponent },
      {path: 'directives', component: DirectivesComponent },
      {path: 'pipes', component: PipesComponent },
      {path: 'services', component: ServicesComponent },
      {path: 'routing', component: RoutingComponent },
      {path: 'observables', component: ObservablesComponent },
      {path: 'exercices', component: AngularExercicesComponent },
    ]
  },

  { path: 'github', component: GithubComponent},

  { path: 'algorithms', component: AlgorithmsComponent},
]
@NgModule(
  {
    imports:[
      RouterModule.forRoot(routes)
    ],
    exports:[
      RouterModule
    ]
  }
)
export class AppRoutingModule {}*/
