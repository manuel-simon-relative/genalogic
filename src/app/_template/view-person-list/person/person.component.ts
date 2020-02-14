import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/_interface/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {

  @Input() pPerson$ : Person;
  @Output('showPerson') showPersonEvent: EventEmitter<number> = new EventEmitter<number>();

  public gebDateString: string = ""
  public sterbDateSTring: string = ""

  constructor() { }

  ngOnInit() {
    if (typeof(this.pPerson$.gebDatum) != "undefined") {this.gebDateString = this.dateToString(this.pPerson$.gebDatum);}
    if (typeof(this.pPerson$.sterbDatum) != "undefined") {this.sterbDateSTring = this.dateToString(this.pPerson$.sterbDatum);}
    

  }

  public dateToString(datum: Date):string {
    var datestring = "";
    //Geburtsdatum bauen
    var day:string;
    var month:string;
    var year:string = datum.getFullYear().toString();
    if (datum.getDate() < 10) {
      day = '0' + datum.getDate();
    } else {
      day = datum.getDate().toString();
    }
    if ((datum.getMonth()+1) < 10) {
      month = '0' + (datum.getMonth()+1);
    } else {
      month = "" + (datum.getMonth()+1);
    }
    datestring = day + '.' + month + '.' +year;


    return datestring
  }

  public clickShowPerson(personId:number) {
    this.showPersonEvent.emit(personId);
  }

}
