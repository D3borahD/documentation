import { Component, EventEmitter, Output} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {TitleComponent} from "@app/shared/title/title.component";

@Component({
  selector: 'app-angular',
  standalone: true,
  templateUrl: './angular.component.html',
  imports: [
    RouterOutlet,
    TitleComponent
  ],
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {

  public title: string = 'Angular';

  public routerUrl:string = this.router.url


  constructor(private router: Router) {}

  ngOnInit():void {
    console.log('this route :  ANGULAR COMPONENT', this.router.url)
  }



}
