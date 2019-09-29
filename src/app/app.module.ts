import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { TemplatePersonLinkedComponent } from './_template/template-person-linked/template-person-linked.component';
import { TemplateEventComponent } from './_template/template-event/template-event.component';
import { TemplateFooterComponent } from './_template/template-footer/template-footer.component';
import { TemplatePersonDetailsComponent } from './_template/template-person-details/template-person-details.component';
import { TemplatePersonshowerComponent } from './_template/template-personshower/template-personshower.component';
import { TemplateEventFormComponent } from './_template/template-event-form/template-event-form.component';
import { TemplateEventListComponent } from './_template/template-event-list/template-event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateHeaderComponent,
    TemplatePersonLinkedComponent,
    TemplateEventComponent,
    TemplateFooterComponent,
    TemplatePersonDetailsComponent,
    TemplatePersonshowerComponent,
    TemplateEventFormComponent,
    TemplateEventListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
