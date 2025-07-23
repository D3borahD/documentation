import { Component } from '@angular/core';
import {CalloutSectionComponent} from "@app/shared/callout-section/callout-section.component";

@Component({
  selector: 'app-architecture',
  standalone: true,
  imports: [
    CalloutSectionComponent
  ],
  templateUrl: './architecture.component.html',
  styleUrl: './architecture.component.scss'
})
export class ArchitectureComponent {

}
