import {Component, input, InputSignal} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ITitle} from "@app/shared/models/ITitle";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    RouterOutlet,
    NgOptimizedImage
  ],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {

  titleModel: InputSignal<ITitle>  = input.required();

}
