import { Component, OnInit } from '@angular/core';
import { Event } from '../../_interface/event';

@Component({
  selector: 'app-template-event-list',
  templateUrl: './template-event-list.component.html',
  styleUrls: ['./template-event-list.component.sass']
})
export class TemplateEventListComponent implements OnInit {
 public $lifeEvents: Array<Event> = [];


  constructor() { 
    this.$lifeEvents = [
      {
        id: 1,
        datum : new Date("1998-06-13"),
        label: 'Mein erstes Lebensereignis',
        kind: 0
      },
      {
        id: 2,
        datum : new Date("2001-04-01"),
        label: 'ein weiteres tolles Ereignis',
        kind: 0
      }
    ]
  }

  ngOnInit() {
  }

}
