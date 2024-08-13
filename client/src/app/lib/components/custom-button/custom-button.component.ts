import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css',
})
export class CustomButtonComponent {
  @Output() handleClick = new EventEmitter<string>();

  click() {
    this.handleClick.emit();
  }
}
