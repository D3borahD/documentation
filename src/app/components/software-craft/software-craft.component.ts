import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {PartOneComponent} from "@app/components/software-craft/part-one/part-one.component";

@Component({
  selector: 'app-software-craft',
  standalone: true,
  imports: [
    RouterOutlet,
    PartOneComponent
  ],
  templateUrl: './software-craft.component.html',
  styleUrl: './software-craft.component.scss'
})
export class SoftwareCraftComponent {

}
