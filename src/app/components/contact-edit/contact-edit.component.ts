import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../types/contact';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent {
  @Input() editedContact!: Contact;
  @Output() save: EventEmitter<Contact> = new EventEmitter<Contact>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  isValidEmail(email: string): boolean {
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
  }

  isValidPhoneNumber(phoneNumber: string): boolean {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  }

  saveChanges() {
    if (this.isValidEmail(this.editedContact.email) && this.isValidPhoneNumber(this.editedContact.phoneNumber)) {
      this.save.emit(this.editedContact);
    }
  }

  cancelEdit() {
    this.cancel.emit();
  }
}
