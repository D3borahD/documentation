import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-algorithms',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './algorithms.component.html',
})
export class AlgorithmsComponent {

  constructor(private router: Router) {}

  ngOnInit():void {
    console.log('this route : ', this.router.url)
  }
}
