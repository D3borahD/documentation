import {Component, Input, OnInit} from '@angular/core';
import {SidebarComponent} from "../shared/sidebar/sidebar.component";
import {Router, RouterOutlet} from "@angular/router";
import {TitleComponent} from "@app/shared/title/title.component";
import {ITitle} from "@app/shared/models/ITitle";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-body',
  standalone: true,
  templateUrl: './body.component.html',
  imports: [
    SidebarComponent,
    RouterOutlet,
    TitleComponent,
    FormsModule
  ],
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  public titleModel: ITitle = {
    title : 'Angular',
    imgUrl : 'assets/angular.png',
    alt: 'logo Angular'
  };

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('je suis le chemin body:' + this.router.url);
  }

  // à dynamiser
  // data vers sidebar
  public url: string='angular'
  @Input() currentPath!: string

}
