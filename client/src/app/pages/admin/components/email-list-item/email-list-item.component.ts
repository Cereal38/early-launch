import { Component, Input } from '@angular/core';
import { Email } from '../../../../lib/interfaces/email.interface';
import { ApiService } from '../../../../lib/services/api.service';

@Component({
  selector: 'app-email-list-item',
  standalone: true,
  imports: [],
  templateUrl: './email-list-item.component.html',
  styleUrl: './email-list-item.component.css',
})
export class EmailListItemComponent {
  constructor(private apiService: ApiService) {}

  @Input() email!: Email;

  handleDelete() {
    this.apiService.deleteEmail(this.email.id).subscribe((response) => {
      console.log(`${this.email.address} deleted`);
    });
  }
}
