import { Component } from '@angular/core';
import { HlmButtonDirective } from '../../lib/spartan-ng/ui-button-helm/src/lib/hlm-button.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HlmButtonDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
