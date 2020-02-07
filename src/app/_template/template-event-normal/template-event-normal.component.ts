import { Component, OnInit, Input} from '@angular/core';
import { Event } from '../../_interface/event';

@Component({
  selector: 'app-template-event-normal',
  templateUrl: './template-event-normal.component.html',
  styleUrls: ['./template-event-normal.component.sass']
})
export class TemplateEventNormalComponent implements OnInit {
  @Input('pLifeEvent$') lifeEvent$ : Event;
 
  public germanMonth: Array<String> = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  public selectedMonth : String;

  constructor() { 

  }

  ngOnInit() {
    console.log(this.lifeEvent$);
    this.selectedMonth = this.germanMonth[this.lifeEvent$.datum.getMonth()];
    console.log(this.selectedMonth);
  }

}
