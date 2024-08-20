import { Component, Input } from '@angular/core';
import { Email } from '../../../../lib/interfaces/email.interface';

@Component({
  selector: 'app-email-list-item',
  standalone: true,
  imports: [],
  templateUrl: './email-list-item.component.html',
  styleUrl: './email-list-item.component.css',
})
export class EmailListItemComponent {
  @Input() email!: Email;
}
