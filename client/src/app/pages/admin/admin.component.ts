import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../lib/services/api.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NgFor],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  emails = [];

  constructor(private apiService: ApiService) {
    this.apiService.getEmails().subscribe((response) => {
      console.log('All emails: ', response.emails);
      this.emails = response.emails;
    });
  }
}
