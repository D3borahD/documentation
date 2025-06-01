import { Component } from '@angular/core';
import {CalloutSectionComponent} from "@app/shared/callout-section/callout-section.component";
import {CodeSectionComponent} from "@app/shared/code-section/code-section.component";

@Component({
  selector: 'app-legacy-code',
  standalone: true,
  imports: [
    CalloutSectionComponent,
    CodeSectionComponent
  ],
  templateUrl: './legacy-code.component.html',
  styleUrls: ['./legacy-code.component.scss']
})
export class LegacyCodeComponent {

}
