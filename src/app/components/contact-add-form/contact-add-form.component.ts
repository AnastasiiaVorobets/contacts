import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../types/contact';
import { noWhitespaceValidator } from '../../helpers/validator';

@Component({
  selector: 'app-contact-add-form',
  templateUrl: './contact-add-form.component.html',
  styleUrls: ['./contact-add-form.component.scss']
})
export class ContactAddFormComponent {
  @Output() save: EventEmitter<Contact> = new EventEmitter<Contact>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, noWhitespaceValidator]],
      lastName: ['', [Validators.required, noWhitespaceValidator]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/), noWhitespaceValidator]],
      email: ['', [Validators.required, Validators.email, noWhitespaceValidator]],
      birthDate: ['', Validators.required],
      address: ['', [Validators.required, noWhitespaceValidator]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const {
        firstName,
        lastName,
        phoneNumber,
        email,
        birthDate,
        address
      } = this.contactForm.value;

      const newContact: Contact = {
        id: Math.floor(Math.random() * 1000),
        firstName,
        lastName,
        phoneNumber,
        email,
        birthDate,
        address
      };

      this.save.emit(newContact);
      this.contactForm.reset();
    }
  }

  cancelAdd() {
    this.cancel.emit();
  }
}
