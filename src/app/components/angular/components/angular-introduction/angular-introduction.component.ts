import { Component } from '@angular/core';
import {CalloutSectionComponent} from "@app/shared/callout-section/callout-section.component";

@Component({
  selector: 'app-introduction',
  templateUrl: './angular-introduction.component.html',
  standalone: true,
  imports: [
    CalloutSectionComponent
  ]
})
export class AngularIntroductionComponent {
}
