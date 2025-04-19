import {Component, Input, OnInit} from '@angular/core';
import {NgForOf, TitleCasePipe} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit{

  ngOnInit(): void{}
}
