import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lucideAlertTriangle } from '@ng-icons/lucide';
import { provideIcons } from '@spartan-ng/ui-icon-helm';
import { CustomButtonComponent } from '../../lib/components/custom-button/custom-button.component';
import { CustomTextFieldComponent } from '../../lib/components/custom-text-field/custom-text-field.component';
import { ApiService } from '../../lib/services/api.service';
import { HlmAlertIconDirective } from '../../lib/spartan-ng/ui-alert-helm/src/lib/hlm-alert-icon.directive';
import { HlmAlertDirective } from '../../lib/spartan-ng/ui-alert-helm/src/lib/hlm-alert.directive';
import { HlmIconComponent } from '../../lib/spartan-ng/ui-icon-helm/src/lib/hlm-icon.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomTextFieldComponent,
    CustomButtonComponent,
    HlmAlertDirective,
    HlmAlertDirective,
    HlmAlertIconDirective,
    HlmIconComponent,
  ],
  providers: [
    provideIcons({
      lucideAlertTriangle,
    }),
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor(private apiService: ApiService) {}

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
