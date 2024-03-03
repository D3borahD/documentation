import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Chap1Component} from "./chap1/chap1.component";

@Component({
  selector: 'app-algorithms',
  standalone: true,
  imports: [
   // Chap1Component
  ],
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss']
})
export class AlgorithmsComponent {

  constructor(private router: Router) {}

  ngOnInit():void {
    console.log('this route : ', this.router.url)
  }
}
