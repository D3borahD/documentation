import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss']
})
export class AlgorithmsComponent {

  constructor(private router: Router) {}

  ngOnInit():void {
    console.log('this route : ', this.router.url)
  }
}
