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
  emails: any = [];

  constructor(private apiService: ApiService) {
    this.apiService.getEmails().subscribe((response) => {
      this.emails = response;
    });
  }
}
