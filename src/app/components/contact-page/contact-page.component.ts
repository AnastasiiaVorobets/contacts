import { Component } from '@angular/core';
import { Contact } from '../../types/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  contacts: Contact[] = [];
  filteredContacts: Contact[] = [];
  showForm: boolean = false;
  selectedContact: Contact | null = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getContactsFromService();
  }

  getContactsFromService(): void {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts || [];
      this.filteredContacts = this.contacts;
    });
  }

  saveContact(contact: Contact): void {
    this.contactService.addContact(contact).subscribe(() => {
      this.getContactsFromService();
      this.toggleFormVisibility();
    });
  }

  toggleFormVisibility(): void {
    this.showForm = !this.showForm;
  }

  onSearch(query: string): void {
    this.filteredContacts = this.contacts.filter(contact =>
      contact.firstName.toLowerCase().includes(query.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(query.toLowerCase())
    );
  }

  saveContactChanges(updatedContact: Contact): void {
    this.contactService.updateContact(updatedContact).subscribe(() => {
      this.getContactsFromService();
      this.selectedContact = null;
    });
  }

  cancelEdit(): void {
    this.selectedContact = null;
  }

  cancelAdd(): void {
    this.toggleFormVisibility();
  }
}
