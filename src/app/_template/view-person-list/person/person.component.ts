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
    this.gebDateString = this.dateToString(this.pPerson$, "g");
    this.sterbDateString = this.dateToString(this.pPerson$, "s");
    

  }


  public dateToString(p: Person, date: String):string {
    var datestring = "";
    var germanMonth: Array<string> = ['Januar','Februar','März','April','Mai', 'Juni', 'Juli', 'August','September', 'Oktober', 'November', 'Dezember'];
    //Geburtsdatum bauen
    var day:string;
    var month:string;
    
    if (date === "g") {
      if (p.birthYear != undefined) {
        var year:string = p.birthYear.toString();
        if (p.birthMonth != undefined) {
          if (p.birthDay != undefined) {
            if (p.birthDay < 10) {
              day = '0' + p.birthDay;
            } else {
              day = p.birthDay.toString();
            }
            if ((p.birthMonth) < 10) {
              month = '0' + (p.birthMonth.toString());
            } else {
              month = "" + (p.birthMonth.toString());
            }
            datestring = day + '.' + month + '.' +year;
          } else {
            month = germanMonth[p.birthMonth-1];
            datestring = month + ' ' + year
          }
        } else {
        datestring = year;   
        }     
      }
  }
  if (date === "s") {
    if (p.deathYear != undefined) {
      var year:string = p.deathYear.toString();
      if (p.deathMonth != undefined) {
        if (p.deathDay != undefined) {
          if (p.deathDay < 10) {
            day = '0' + p.deathDay;
          } else {
            day = p.deathDay.toString();
          }
          if ((p.deathMonth) < 10) {
            month = '0' + (p.deathMonth.toString());
          } else {
            month = "" + (p.deathMonth.toString());
          }
          datestring = day + '.' + month + '.' +year;
        } else {
          month = germanMonth[p.deathMonth-1];
          datestring = month + ' ' + year
        }
      } else {
      datestring = year;   
      }     
    }
}

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
