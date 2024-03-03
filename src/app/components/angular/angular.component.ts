import { Component, EventEmitter, Output} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-angular',
  standalone: true,
  templateUrl: './angular.component.html',
  imports: [
    RouterOutlet
  ],
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {

  public routerUrl:string = this.router.url


  constructor(private router: Router) {}

  ngOnInit():void {
    console.log('this route :  ANGULAR COMPONENT', this.router.url)
  }



}
