import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [],
  template: ` <p>custom-button works!</p> `, // TODO: Use templateUrl
  styleUrl: './custom-button.component.css',
})
export class CustomButtonComponent {}
