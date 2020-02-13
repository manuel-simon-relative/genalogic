import { Component, OnInit, Input} from '@angular/core';
import { Event } from '../../../_interface/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent implements OnInit {
  @Input('pLifeEvent$') lifeEvent$ : Event;
  public germanMonth: Array<String> = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  public selectedMonth : String;
  constructor() { }

  ngOnInit() {
    this.selectedMonth = this.germanMonth[this.lifeEvent$.datum.getMonth()];
   
  }

}
