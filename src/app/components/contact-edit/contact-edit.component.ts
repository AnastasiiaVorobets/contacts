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

  saveChanges() {
    this.save.emit(this.editedContact);
  }

  cancelEdit() {
    this.cancel.emit();
  }
}
