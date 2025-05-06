import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  styleUrls: ['./github.component.scss']
})
export class GithubComponent {

  constructor(private router: Router) {}

  public routerUrl:string = this.router.url

  ngOnInit():void {
    console.log('this route : ', this.router.url)
  }
}
