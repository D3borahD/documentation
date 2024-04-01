import { Component } from '@angular/core';
import { BodyComponent } from './body/body.component';
import {HeaderComponent} from "./components/header/header.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BodyComponent,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public url: string='angular'
  ngOnInit():void {
  }


}
