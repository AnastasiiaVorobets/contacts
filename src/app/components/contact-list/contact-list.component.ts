import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../types/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  filteredContacts: Contact[] = [];
  showForm: boolean = false;
  selectedContact: Contact | null = null;

  constructor(private contactService: ContactService, private router: Router) {}

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

  viewContactDetails(contactId: number): void {
    this.router.navigate(['/contact', contactId]);
  }

  handleContactDeleted(): void {
    this.getContactsFromService();
  }

  openEditForm(contact: Contact): void {
    this.selectedContact = contact;
  }

  saveChanges(updatedContact: Contact): void {
    this.contactService.updateContact(updatedContact).subscribe(() => {
      this.getContactsFromService();
      this.selectedContact = null;
    });
  }

  cancelEdit(): void {
    this.selectedContact = null;
  }
}
