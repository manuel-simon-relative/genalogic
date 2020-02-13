import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../../_service/globalconstants.service'
import { Event } from '../../../_interface/event'

@Component({
  selector: 'app-view-event-list',
  templateUrl: './view-event-list.component.html',
  styleUrls: ['./view-event-list.component.sass']
})
export class ViewEventListComponent implements OnInit {
public eventList: Array<Event> = GlobalConstants.eventList;
  constructor() { }

  ngOnInit() {
  }

}
