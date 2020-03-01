import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GlobalConstants } from '../../../_service/globalconstants.service'
import { Event } from '../../../_interface/event'

@Component({
  selector: 'app-view-event-list',
  templateUrl: './view-event-list.component.html',
  styleUrls: ['./view-event-list.component.sass']
})
export class ViewEventListComponent implements OnInit {
  @Input() searchTextEvent: string;
  @Output('editEvent') editEventEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output('changeSearchText') changeSearchText: EventEmitter<string> = new EventEmitter<string>();

  public eventList: Array<Event> = GlobalConstants.eventList;


  constructor() { }

  ngOnInit() {
  }


  onClickPlusButton() {
    this.editEventEvent.emit(0);
  }

  onEditEvent(id) {
    console.log('Eventlist Click Event: ',id)
    this.editEventEvent.emit(id);
  }
}
