import {Component, Input, OnInit} from '@angular/core';
import {NgForOf, TitleCasePipe} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  imports: [
    NgForOf,
    RouterLink,
    RouterLinkActive,
    TitleCasePipe
  ],
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit{

  public items!: string[]

  // data depuis BODY
  @Input() currentPath!: string

  ngOnInit(): void{

   // console.log('current path : ', this.currentPath)

    if(this.currentPath === 'angular'){
      this.items  = [
        'introduction',
        'component',
        'template',
        'directives',
        'pipes',
        'services',
        'routing',
        'observables',
        'exercices'
      ]
    } else if (this.currentPath === 'github'){
      this.items  = [
        'github page',
      ]
    } else  if (this.currentPath === 'algorithmique'){
      this.items  = [
        'chapitre 1 : Le rôle de l\'algorithmiques',
      ]
    }

  }
}
