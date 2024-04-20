import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../types/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[] = [];
  selectedContact: Contact | null = null;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.getContactsFromService();
  }

  getContactsFromService(): void {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts || [];
      this.contacts = this.contacts;
    });
  }

  openEditForm(contact: Contact): void {
    this.selectedContact = contact;
  }

  viewContactDetails(contactId: number): void {
    this.router.navigate(['/contact', contactId]);
  }

  deleteContact(contactId: number): void {
    this.contactService.deleteContact(contactId).subscribe(() => {
      this.getContactsFromService();
    });
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
