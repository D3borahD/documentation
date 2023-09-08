import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal_documentation';
   parentData: string = 'angular';

  constructor(private router:Router) {
  }

  ngOnInit():void {
    console.log('this url : ', this.router.url)
  }
}
