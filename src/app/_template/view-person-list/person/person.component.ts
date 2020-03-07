import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/_interface/person';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {

  @Input() pPerson$ : Person;
  @Output('showPerson') showPersonEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output('editPerson') editPersonEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output('deletePerson') deletePersonEvent: EventEmitter<number> = new EventEmitter<number>();

  

  public gebDateString: string = ""
  public sterbDateString: string = ""

  constructor() { }

  ngOnInit() {
    if (this.pPerson$.gebDatum != null ) {this.gebDateString = this.dateToString(this.pPerson$.gebDatum);}
    if (this.pPerson$.sterbDatum != null ) {this.sterbDateString = this.dateToString(this.pPerson$.sterbDatum);}
    
    

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

  public clickEditPerson(personId:number) {
    this.editPersonEvent.emit(personId)
  }

  public clickDeletePerson(personId:number) {
    this.deletePersonEvent.emit(personId)
  }

}
