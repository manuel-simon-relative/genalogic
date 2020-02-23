import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../../_interface/event';

@Component({
  selector: 'app-template-event',
  templateUrl: './template-event.component.html',
  styleUrls: ['./template-event.component.sass']
})
export class TemplateEventComponent implements OnInit {
 @Input('pLifeEvent$') lifeEvent$ : Event;
 @Output('showSelectedPerson') showSelectedPersonEvent: EventEmitter<any> = new EventEmitter<any>();
 
  constructor() {
    
   }

  ngOnInit() {
    
  }

  onShowSelectedPerson($event) {
    this.showSelectedPersonEvent.emit($event)
  }

}
