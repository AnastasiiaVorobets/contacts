import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from '../types/contact';
import { contactsData } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsKey = 'contacts';

  constructor() {
    this.initializeContacts();
  }

  private initializeContacts(): void {
    const contactsStr = localStorage.getItem(this.contactsKey);
    if (!contactsStr) {
      localStorage.setItem(this.contactsKey, JSON.stringify(contactsData));
    }
  }

  private getContactsFromStorage(): Contact[] {
    const contactsStr = localStorage.getItem(this.contactsKey);
    return contactsStr ? JSON.parse(contactsStr) : [];
  }

  public getContacts(): Observable<Contact[]> {
    return of(this.getContactsFromStorage());
  }

  public getContactById(id: number): Observable<Contact | undefined> {
    return this.getContacts().pipe(
      map(contacts => contacts.find(c => c.id === id))
    );
  }

  public addContact(contact: Contact): Observable<Contact[]> {
    const contacts = this.getContactsFromStorage();
    contacts.push(contact);
    localStorage.setItem(this.contactsKey, JSON.stringify(contacts));
    return of(contacts);
  }

  public updateContact(updatedContact: Contact): Observable<Contact[]> {
    const contacts = this.getContactsFromStorage();
    const index = contacts.findIndex(c => c.id === updatedContact.id);
    if (index !== -1) {
      contacts[index] = updatedContact;
      localStorage.setItem(this.contactsKey, JSON.stringify(contacts));
    }
    return of(contacts);
  }

  public deleteContact(contactId: number): Observable<Contact[]> {
    const contacts = this.getContactsFromStorage();
    const index = contacts.findIndex(c => c.id === contactId);
    if (index !== -1) {
      contacts.splice(index, 1);
      localStorage.setItem(this.contactsKey, JSON.stringify(contacts));
    }
    return of(contacts);
  }
}
