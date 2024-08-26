import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Email } from '../../lib/interfaces/email.interface';
import { ApiService } from '../../lib/services/api.service';
import { HlmCheckboxComponent } from '../../lib/spartan-ng/ui-checkbox-helm/src/lib/hlm-checkbox.component';
import { HlmCaptionComponent } from '../../lib/spartan-ng/ui-table-helm/src/lib/hlm-caption.component';
import { HlmTableComponent } from '../../lib/spartan-ng/ui-table-helm/src/lib/hlm-table.component';
import { HlmTdComponent } from '../../lib/spartan-ng/ui-table-helm/src/lib/hlm-td.component';
import { HlmThComponent } from '../../lib/spartan-ng/ui-table-helm/src/lib/hlm-th.component';
import { HlmTrowComponent } from '../../lib/spartan-ng/ui-table-helm/src/lib/hlm-trow.component';
import { EmailListItemComponent } from './components/email-list-item/email-list-item.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    NgFor,
    EmailListItemComponent,
    HlmTableComponent,
    HlmCaptionComponent,
    HlmTrowComponent,
    HlmThComponent,
    HlmTdComponent,
    HlmCheckboxComponent,
  ],
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

  // When user delete an email, remove it from the list
  removeEmail(id: number) {
    this.emails = this.emails.filter((email) => email.id !== id);
  }
}
