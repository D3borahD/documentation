import {Component, EventEmitter, model, OnChanges, OnInit, output, Output} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {ITitle} from "@app/shared/models/ITitle";

@Component({
  selector: 'app-angular',
  standalone: true,
  templateUrl: './angular.component.html',
  imports: [
    RouterOutlet,

  ],
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  public routerUrl:string = this.router.url

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('je suis angular component path : ' + this.routerUrl)
  }

}
