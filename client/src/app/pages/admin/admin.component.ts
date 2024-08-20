import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Email } from '../../lib/interfaces/email.interface';
import { ApiService } from '../../lib/services/api.service';
import { EmailListItemComponent } from './components/email-list-item/email-list-item.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NgFor, EmailListItemComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  emails: Email[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getEmails().subscribe((response) => {
      this.emails = response;
    });
  }
}
