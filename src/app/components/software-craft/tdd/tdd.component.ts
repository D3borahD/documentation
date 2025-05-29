import { Component } from '@angular/core';
import {CalloutSectionComponent} from "@app/shared/callout-section/callout-section.component";

@Component({
  selector: 'app-tdd',
  standalone: true,
  imports: [
    CalloutSectionComponent
  ],
  templateUrl: './tdd.component.html',
  styleUrl: './tdd.component.scss'
})
export class TddComponent {

}
