import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { Email } from '../../../../lib/interfaces/email.interface';
import { ApiService } from '../../../../lib/services/api.service';

@Component({
  selector: 'app-email-list-item',
  standalone: true,
  imports: [HlmButtonDirective],
  templateUrl: './email-list-item.component.html',
  styleUrl: './email-list-item.component.css',
})
export class EmailListItemComponent {
  constructor(private apiService: ApiService) {}

  @Input() email!: Email;
  @Output() emailDeleted = new EventEmitter<number>();

  handleDelete() {
    this.apiService.deleteEmail(this.email.id).subscribe((response) => {
      // Inform parent that this email has been deleted
      this.emailDeleted.emit(this.email.id);
    });
  }
}
