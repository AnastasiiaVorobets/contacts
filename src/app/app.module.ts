import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactSearchComponent } from './components/contact-search/contact-search.component';
import { ContactAddFormComponent } from './components/contact-add-form/contact-add-form.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactSearchComponent,
    ContactAddFormComponent,
    ContactEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
