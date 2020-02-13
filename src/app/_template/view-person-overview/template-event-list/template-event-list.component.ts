import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Event } from '../../../_interface/event';
import { GlobalConstants } from '../../../_service/globalconstants.service';
import { Glob } from 'glob';

@Component({
  selector: 'app-template-event-list',
  templateUrl: './template-event-list.component.html',
  styleUrls: ['./template-event-list.component.sass']
})
export class TemplateEventListComponent implements OnInit,  OnChanges{
 public $lifeEvents: Array<Event> = [];
 @Input() selectedPersonId : any;


  constructor() { 
    
  }

  ngOnInit() {
    
  }

  public compareEvents(event1: Event, event2: Event): number {
    if (event1.datum > event2.datum) {
      return 1;
    } else return -1
  };
ngOnChanges(){
  this.$lifeEvents = []
  for (var forEventId of GlobalConstants.relEventPerson) {
    if (this.selectedPersonId == forEventId.idPerson) {
      for (var forEvent of GlobalConstants.eventList) {
        if (forEventId.idEvent == forEvent.id) {
          this.$lifeEvents.push(forEvent);
        }
      }
    }
  }
  this.$lifeEvents.sort(this.compareEvents);
}

}

