import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css',
})
export class CustomButtonComponent {
  constructor(private apiService: ApiService) {}

  onClick() {
    this.apiService.getHello().subscribe((response) => {
      console.log('TEST API FETCH', response);
    });
  }
}
