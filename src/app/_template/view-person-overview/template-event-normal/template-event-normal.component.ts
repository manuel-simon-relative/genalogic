import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Event } from '../../../_interface/event';
import { Person } from '../../../_interface/person';
import { GlobalConstants } from '../../../_service/globalconstants.service'; 

@Component({
  selector: 'app-template-event-normal',
  templateUrl: './template-event-normal.component.html',
  styleUrls: ['./template-event-normal.component.sass']
})
export class TemplateEventNormalComponent implements OnInit {
  @Input('pLifeEvent$') lifeEvent$ : Event;
  @Output('showSelectedPerson') showSelectedPersonEvent: EventEmitter<any> = new EventEmitter<any>();
 
  public germanMonth: Array<String> = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  public selectedMonth : String;
  public personsOfEvent: Array<Person> = new Array<Person>()

  constructor() { 

  }

  ngOnInit() {
    //deutschen Monat finden
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

  showSelectedPerson(personId: number) {
    this.showSelectedPersonEvent.emit(personId)
  }

}
