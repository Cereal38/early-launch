import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { lucideTrash2 } from '@ng-icons/lucide';
import { provideIcons } from '@spartan-ng/ui-icon-helm';
import { Email } from '../../lib/interfaces/email.interface';
import { ApiService } from '../../lib/services/api.service';
import { HlmButtonDirective } from '../../lib/spartan-ng/ui-button-helm/src/lib/hlm-button.directive';
import { HlmIconComponent } from '../../lib/spartan-ng/ui-icon-helm/src/lib/hlm-icon.component';
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
    HlmButtonDirective,
    HlmIconComponent,
  ],
  providers: [provideIcons({ lucideTrash2 })],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  emails: Email[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getEmails().subscribe((response) => {
      // Format date
      const rawEmails = response;
      this.emails = rawEmails.map((email: Email) => {
        email.date = email.date.slice(0, 10);
        return email;
      });
    });
  }

  removeEmail(id: number) {
    // When user delete an email, also remove it from the list
    this.apiService.deleteEmail(id).subscribe((response) => {
      this.emails = this.emails.filter((email) => email.id !== id);
    });
  }
}
