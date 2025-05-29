import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ILinkMenu} from "@app/shared/sidebar/models/linkMenu";
import {TitleCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    TitleCasePipe,
    FormsModule,
  ],
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit{

  public menu:ILinkMenu[]=
    [
    {
      id: 0,
      path:'angular',
      title : 'Angular',
      isOpen: false,
      chapter:[
        {
          path:'angular/introduction',
          title : 'introduction'},
        {
          path:'angular/tutorial',
          title : 'tutorial'},
        {
          path:'angular/component',
          title : 'component'},
        {
          path:'angular/template',
          title : 'template'},
        {
          path:'angular/directives',
          title : 'directives'},
        {
          path:'angular/pipes',
          title : 'pipes'},
        {
          path:'angular/services',
          title : 'services'},
        {
          path:'angular/routing',
          title : 'routing'},
        {
          path:'angular/observables',
          title : 'observables'},
        {
          path:'angular/exercices',
          title : 'exercices'},
      ]
    },
    {id: 1,
      path:'cSharp',
      title : 'C#',
      isOpen: false,
      chapter:[
        /*{
          path:'introduction',
          title : 'introduction'},*/
      ]},
    {
      id: 2,
      path:'github',
      title : 'Github',
      isOpen: false,
      chapter:[
       /* {
          path:'introduction',
          title : 'introduction'},*/
      ]},
    {
      id: 3,
      path:'algorithms',
      title : 'Algorithme',
      isOpen: false,
      chapter:[
       /* {
          path:'introduction',
          title : 'introduction'},*/
      ]},
    {
      id: 4,
      path:'softwareCraft',
      title : 'Software Craft',
      isOpen: false,
      chapter:[
        {
          path:'softwareCraft/introduction',
          title : 'introduction'},
        {
          path:'softwareCraft/tdd',
          title : 'TDD'},
        {
          path:'softwareCraft/clean-code',
          title : 'Clean Code'},
        {
          path:'softwareCraft/bdd',
          title : 'BDD'},
        {
          path:'softwareCraft/pair-programming',
          title : 'Pair Programming'},
        {
          path:'softwareCraft/refactoring',
          title : 'Refactoring'},
        {
          path:'softwareCraft/legacy-code',
          title : 'Code legacy'},
      ]},
    {
      id: 5,
      path:'english',
      title : 'English',
      isOpen: false,
      chapter:[
       /* {
          path:'introduction',
          title : 'introduction'},*/
      ]},
  ]
  currentPath= '';

  ngOnInit(): void{}

  toggleSubmenu(index: number): void {
    this.menu.forEach((item, i) => {
      if (i === index) {
        item.isOpen = !item.isOpen;
      } else {
        item.isOpen = false;
      }
    });
  }
}
