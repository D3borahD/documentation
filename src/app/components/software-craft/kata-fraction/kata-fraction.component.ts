import { Component } from '@angular/core';
import {CalloutSectionComponent} from "@app/shared/callout-section/callout-section.component";

@Component({
  selector: 'app-kata-fraction',
  standalone: true,
  imports: [
    CalloutSectionComponent
  ],
  templateUrl: './kata-fraction.component.html',
  styleUrl: './kata-fraction.component.scss'
})
export class KataFractionComponent {

}
