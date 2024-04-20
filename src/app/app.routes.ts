import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: ContactPageComponent },
  { path: 'contact/:id', component: ContactDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
