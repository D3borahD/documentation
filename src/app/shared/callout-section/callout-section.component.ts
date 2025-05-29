import {Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'app-callout-section',
  standalone: true,
  imports: [],
  templateUrl: './callout-section.component.html',
  styleUrl: './callout-section.component.scss'
})
export class CalloutSectionComponent {
  public title :InputSignal<string> = input('mon titre');
}
