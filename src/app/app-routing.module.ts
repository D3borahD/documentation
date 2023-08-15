import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AngularComponent} from "./components/angular/angular.component";
import {GithubComponent} from "./components/github/github.component";
import {AlgorithmsComponent} from "./components/algorithms/algorithms.component";

const routes: Routes = [

  // TODO : upgrade path architecture

  { path: '', component: AngularComponent},
  { path: 'angular', component: AngularComponent},
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
