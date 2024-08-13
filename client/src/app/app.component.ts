import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from './lib/components/custom-button/custom-button.component';
import { CustomTextFieldComponent } from './lib/components/custom-text-field/custom-text-field.component';
import { ApiService } from './lib/services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomTextFieldComponent, CustomButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private apiService: ApiService) {}

  title = 'client';
  email = '';

  setEmail(value: string) {
    this.email = value;
  }

  handleSubmit() {
    this.apiService.postEmail(this.email).subscribe((response) => {
      console.log('POST EMAIL', response);
    });
  }
}
