import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  newUrl:string = ""
  getPath(menuValue:string) {
    this.newUrl = menuValue
    this.newItemEvent.emit(menuValue);
    console.log('je suis une url du header : ', this.newItemEvent)
  }
}
