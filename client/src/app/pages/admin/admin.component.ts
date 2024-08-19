import { Component } from '@angular/core';
import { ApiService } from '../../lib/services/api.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  constructor(private apiService: ApiService) {
    this.apiService.getEmails().subscribe((response) => {
      console.log('All emails: ', response);
    });
  }
}
