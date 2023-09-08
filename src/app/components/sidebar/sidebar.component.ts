import {Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit{

  public items!: string[]


  ngOnInit(): void{

    this.items  = [
      'introduction',
      'component',
      'template',
      'directives',
      'pipes',
      'services',
      'routing',
      'exercices'
    ]

  }



}
