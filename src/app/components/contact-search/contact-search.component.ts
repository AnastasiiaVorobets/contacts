import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss']
})
export class ContactSearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.search.emit(query);
  }
}
