import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AngularComponent} from "./components/angular/angular.component";
import {GithubComponent} from "./components/github/github.component";

const routes: Routes = [

  // TODO : upgrade path architecture

  { path: '', component: AngularComponent},
  { path: 'angular', component: AngularComponent},
  { path: 'github', component: GithubComponent}
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
