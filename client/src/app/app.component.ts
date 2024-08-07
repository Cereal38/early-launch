import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomTextFieldComponent } from './lib/components/custom-text-field/custom-text-field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomTextFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client';
}
