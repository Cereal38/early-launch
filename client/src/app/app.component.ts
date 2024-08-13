import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from './lib/components/custom-button/custom-button.component';
import { CustomTextFieldComponent } from './lib/components/custom-text-field/custom-text-field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomTextFieldComponent, CustomButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client';
  email = '';

  setEmail(value: string) {
    this.email = value;
  }

  handleSubmit(data: string) {
    console.log('BTN CLICK', this.email);
  }
}
