import {Component, EventEmitter, model, OnChanges, OnInit, output, Output} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {ITitle} from "@app/shared/models/ITitle";

@Component({
  selector: 'app-angular',
  standalone: true,
  templateUrl: './angular.component.html',
  imports: [
    RouterOutlet
  ],
})
export class AngularComponent implements OnInit {
  public routerUrl:string = this.router.url
  public title:string = 'Angular'

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('je suis angular component path : ' + this.routerUrl)
  }

}
