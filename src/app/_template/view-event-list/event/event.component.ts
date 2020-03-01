import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Event } from '../../../_interface/event';
import { Person } from '../../../_interface/person';
import { GlobalConstants } from '../../../_service/globalconstants.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent implements OnInit {
  @Input('pLifeEvent$') lifeEvent$ : Event;
  @Output('EditEvent') EditEventEvent: EventEmitter<number> = new EventEmitter<number>()
  public germanMonth: Array<String> = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  public selectedMonth : String;
  public personsOfEvent: Array<Person> = new Array<Person>()

  constructor() { }

  ngOnInit() {
    this.selectedMonth = this.germanMonth[this.lifeEvent$.datum.getMonth()];

    //Liste an Personen zu diesem Event erstellen

    for ( var r of GlobalConstants.relEventPerson) {
      if(r.idEvent == this.lifeEvent$.id) {
        for (var p of GlobalConstants.personList) {
          if (p.id == r.idPerson) {
            this.personsOfEvent.push(p);
          }
        }
      }
    }
   
  }
  onEditEventButton(id:number) {
    this.EditEventEvent.emit(id);
    console.log('click Edit ',this.lifeEvent$.id )
  }

}
