import { Component } from '@angular/core';
import {CalloutSectionComponent} from "@app/shared/callout-section/callout-section.component";

@Component({
  selector: 'app-pair-programming',
  standalone: true,
    imports: [
        CalloutSectionComponent
    ],
  templateUrl: './pair-programming.component.html',
})
export class PairProgrammingComponent {

}
