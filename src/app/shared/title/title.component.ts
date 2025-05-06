import {Component, EventEmitter, input, Input, InputSignal, Output} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ITitle} from "@app/shared/models/ITitle";

@Component({
  selector: 'app-title',
  standalone: true,
    imports: [
        RouterOutlet
    ],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {

  titleModel: InputSignal<ITitle>  = input.required();



}
