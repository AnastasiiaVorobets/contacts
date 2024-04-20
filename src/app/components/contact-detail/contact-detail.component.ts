import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../types/contact';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact | undefined;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getContact();
  }

  getContact(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contactService.getContactById(id)
      .subscribe(contact => this.contact = contact);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
