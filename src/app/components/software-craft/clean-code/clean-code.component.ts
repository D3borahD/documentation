import { Component } from '@angular/core';
import {CalloutSectionComponent} from "@app/shared/callout-section/callout-section.component";

@Component({
  selector: 'app-clean-code',
  standalone: true,
  imports: [
    CalloutSectionComponent
  ],
  templateUrl: './clean-code.component.html',
})
export class CleanCodeComponent {

}
