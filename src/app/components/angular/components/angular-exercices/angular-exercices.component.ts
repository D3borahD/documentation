import { Component } from '@angular/core';
import {CalloutSectionComponent} from "@app/shared/callout-section/callout-section.component";

@Component({
  selector: 'app-angular-exercices',
  templateUrl: './angular-exercices.component.html',
  standalone: true,
  imports: [
    CalloutSectionComponent
  ]
})
export class AngularExercicesComponent {

}
