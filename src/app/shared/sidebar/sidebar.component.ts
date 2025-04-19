import {Component, Input, OnInit} from '@angular/core';
import {NgClass, NgForOf, TitleCasePipe} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ILinkMenu} from "@app/shared/sidebar/models/linkMenu";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass,
  ],
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit{

  public isActive = false;
  public baseColor = 'white'
  public subMenusColor = 'submenu'

  public menu:ILinkMenu[]=
    [
    {
      id: 0,
      path:'angular',
      title : 'Angular',
      color: 'pink-purple-txt',
      isOpen: false,
      chapter:[
        {
          path:'angular/introduction',
          title : 'introduction',
          color: 'pink-purple-txt'},
        {
          path:'angular/component',
          title : 'component',
          color: 'pink-purple-txt'},
        {
          path:'angular/template',
          title : 'template',
          color: 'pink-purple-txt'},
        {
          path:'angular/directives',
          title : 'directives',
          color: 'pink-purple-txt'},
        {
          path:'angular/pipes',
          title : 'pipes',
          color: 'pink-purple-txt'},
        {
          path:'angular/services',
          title : 'services',
          color: 'pink-purple-txt'},
        {
          path:'angular/routing',
          title : 'routing',
          color: 'pink-purple-txt'},
        {
          path:'angular/observables',
          title : 'observables',
          color: 'pink-purple-txt'},
        {
          path:'angular/exercices',
          title : 'exercices',
          color: 'pink-purple-txt'},
      ]
    },
    {id: 1,
      path:'cSharp',
      title : 'C#',
      color: 'blue-purple-txt',
      isOpen: false,
      chapter:[
        /*{
          path:'introduction',
          title : 'introduction',
          color: 'blue-purple-txt'},*/
      ]},
    {
      id: 2,
      path:'github',
      title : 'Github',
      color: 'blue-purple-txt',
      isOpen: false,
      chapter:[
       /* {
          path:'introduction',
          title : 'introduction',
          color: 'blue-purple-txt"'},*/
      ]},
    {
      id: 3,
      path:'algorithms',
      title : 'Algorithme',
      color: 'blue-green-txt',
      isOpen: false,
      chapter:[
       /* {
          path:'introduction',
          title : 'introduction',
          color: 'blue-green-txt'},*/
      ]},
    {
      id: 4,
      path:'software',
      title : 'Software Craft',
      color: 'blue-purple-txt',
      isOpen: false,
      chapter:[
       /* {
          path:'introduction',
          title : 'introduction',
          color: 'blue-purple-txt'},*/
      ]},
    {
      id: 5,
      path:'english',
      title : 'English',
      color: 'blue-green-txt',
      isOpen: false,
      chapter:[
       /* {
          path:'introduction',
          title : 'introduction',
          color: 'blue-green-txt'},*/
      ]},
  ]

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
