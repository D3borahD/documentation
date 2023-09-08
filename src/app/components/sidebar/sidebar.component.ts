import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit{

  public items!: string[]
  @Input() parentData!: string
  @Input() currentPath!: string

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
