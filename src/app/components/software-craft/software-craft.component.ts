import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {PairProgrammingComponent} from "@app/components/software-craft/pair-programming/pair-programming.component";

@Component({
  selector: 'app-software-craft',
  standalone: true,
  imports: [
    RouterOutlet,
    PairProgrammingComponent
  ],
  templateUrl: './software-craft.component.html',
  styleUrl: './software-craft.component.scss'
})
export class SoftwareCraftComponent {

}
