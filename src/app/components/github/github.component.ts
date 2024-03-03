import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  standalone: true,
  styleUrls: ['./github.component.scss']
})
export class GithubComponent {

  constructor(private router: Router) {}

  public routerUrl:string = this.router.url

  ngOnInit():void {
    console.log('this route : ', this.router.url)
  }
}
