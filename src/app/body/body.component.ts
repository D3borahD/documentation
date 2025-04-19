import { Component, Input, OnInit } from '@angular/core';
import {SidebarComponent} from "../components/sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-body',
  standalone: true,
  templateUrl: './body.component.html',
  imports: [
    SidebarComponent,
    RouterOutlet
  ],
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit{

  // à dynamiser
  // data vers sidebar
  public url: string='angular'

  @Input() currentPath!: string
  ngOnInit():void {
  }
}
