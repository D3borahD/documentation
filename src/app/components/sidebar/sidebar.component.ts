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

  ngOnChanges(){
    console.log('current path : ', this.currentPath)
    if(this.currentPath === 'Angular'){
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
    } else if (this.currentPath === 'Github'){
      this.items  = [
        'github page',
      ]
    } else  if (this.currentPath === 'Algorithmique'){
      this.items  = [
        'chapitre 1 : Le rôle de l\'algorithmiques',
      ]
    }
    else  if (this.currentPath === 'CSharp'){
      this.items  = [
        'csharp menu',
      ]
    }
    else  if (this.currentPath === 'English'){
      this.items  = [
        'anglais menu',
      ]
    }

  }

  ngOnInit(): void{

    console.log('current path : ', this.currentPath)

    }

  getPath(angular: string) {
    
  }
}
