import { Component } from '@angular/core';
import { BodyComponent } from './body/body.component';
import {HeaderComponent} from "./components/header/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BodyComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  ngOnInit():void {
  }


}
