import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AngularComponent} from "./components/angular/angular.component";
import {GithubComponent} from "./components/github/github.component";
import {AlgorithmsComponent} from "./components/algorithms/algorithms.component";
import {
  AngularIntroductionComponent
} from "./components/angular/components/angular-introduction/angular-introduction.component";
import {ComponentComponent} from "./components/angular/components/component/component.component";

const routes: Routes = [

  // TODO : upgrade path architecture

  { path: '', component: AngularComponent},
  { path: 'angular', component: AngularComponent,
    children:[
      {path: 'introduction', component: AngularIntroductionComponent },
      {path: 'component', component: ComponentComponent, }
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
export class AppRoutingModule {

}
