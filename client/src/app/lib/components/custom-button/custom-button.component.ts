import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() handleClick = new EventEmitter<string>();

  click() {
    // this.apiService.postEmail('blabla@gmail.com').subscribe((response) => {
    //   console.log('POST EMAIL', response);
    // });

    this.handleClick.emit();
  }
}
