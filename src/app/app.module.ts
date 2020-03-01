import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { TemplatePersonLinkedComponent } from './_template/view-person-overview/template-person-linked/template-person-linked.component';
import { TemplateEventComponent } from './_template/view-person-overview/template-event/template-event.component';
import { TemplateFooterComponent } from './_template/template-footer/template-footer.component';
import { TemplatePersonDetailsComponent } from './_template/view-person-overview/template-person-details/template-person-details.component';
import { TemplatePersonshowerComponent } from './_template/view-person-overview/template-personshower/template-personshower.component';
import { TemplateEventListComponent } from './_template/view-person-overview/template-event-list/template-event-list.component';
import { TemplateEventNormalComponent } from './_template/view-person-overview/template-event-normal/template-event-normal.component';
import { TemplateEventPicComponent } from './_template/view-person-overview/template-event-pic/template-event-pic.component';
import { TemplateEventPicsComponent } from './_template/view-person-overview/template-event-pics/template-event-pics.component';
import { ViewPersonListComponent } from './_template/view-person-list/view-person-list/view-person-list.component';
import { PersonComponent } from './_template/view-person-list/person/person.component';
import { ViewPersonOverviewComponent } from './_template/view-person-overview/view-person-overview/view-person-overview.component';
import { ViewEventListComponent } from './_template/view-event-list/view-event-list/view-event-list.component';
import { EventComponent } from './_template/view-event-list/event/event.component';
import { EditorPersonComponent } from './_template/overlay-editor-person/editor-person/editor-person.component';
import { EditorEventComponent } from './_template/overlay-editor-event/editor-event/editor-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TemplateHeaderComponent,
    TemplatePersonLinkedComponent,
    TemplateEventComponent,
    TemplateFooterComponent,
    TemplatePersonDetailsComponent,
    TemplatePersonshowerComponent,
    TemplateEventListComponent,
    TemplateEventNormalComponent,
    TemplateEventPicComponent,
    TemplateEventPicsComponent,
    ViewPersonListComponent,
    PersonComponent,
    ViewPersonOverviewComponent,
    ViewEventListComponent,
    EventComponent,
    EditorPersonComponent,
    EditorEventComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
