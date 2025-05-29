import { Component } from '@angular/core';
import {CalloutSectionComponent} from "@app/shared/callout-section/callout-section.component";


@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  standalone: true,
  imports: [
    CalloutSectionComponent
  ]
})
export class ComponentComponent {


}
