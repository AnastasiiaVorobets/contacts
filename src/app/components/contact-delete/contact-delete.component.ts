import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.scss']
})
export class ContactDeleteComponent {
  @Input() contactId!: number;
  @Output() contactDeleted: EventEmitter<void> = new EventEmitter<void>();

  constructor(private contactService: ContactService) {}

  deleteContact(): void {
    this.contactService.deleteContact(this.contactId).subscribe(() => {
      this.contactDeleted.emit();
    });
  }
}
