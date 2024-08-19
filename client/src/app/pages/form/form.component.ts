import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from '../../lib/components/custom-button/custom-button.component';
import { CustomTextFieldComponent } from '../../lib/components/custom-text-field/custom-text-field.component';
import { ApiService } from '../../lib/services/api.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterOutlet, CustomTextFieldComponent, CustomButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
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
