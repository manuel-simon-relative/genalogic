import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { TemplateMenuComponent } from './_template/template-menu/template-menu.component';
import { TemplatePersonSelComponent } from './_template/template-person-sel/template-person-sel.component';
import { TemplatePersonLinkedComponent } from './_template/template-person-linked/template-person-linked.component';
import { TemplateEventComponent } from './_template/template-event/template-event.component';
import { TemplateFooterComponent } from './_template/template-footer/template-footer.component';
import { TemplatePersonDetailsComponent } from './_template/template-person-details/template-person-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateHeaderComponent,
    TemplateMenuComponent,
    TemplatePersonSelComponent,
    TemplatePersonLinkedComponent,
    TemplateEventComponent,
    TemplateFooterComponent,
    TemplatePersonDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
