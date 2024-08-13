import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-text-field',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-text-field.component.html',
  styleUrl: './custom-text-field.component.css',
})
export class CustomTextFieldComponent {
  text = '';

  @Output() handleChange = new EventEmitter<string>();

  setText() {
    this.handleChange.emit(this.text);
  }
}
