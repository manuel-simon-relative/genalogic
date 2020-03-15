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
      if (p.gYear != undefined) {
        var year:string = p.gYear.toString();
        if (p.gMonth != undefined) {
          if (p.gDay != undefined) {
            if (p.gDay < 10) {
              day = '0' + p.gDay;
            } else {
              day = p.gDay.toString();
            }
            if ((p.gMonth) < 10) {
              month = '0' + (p.gMonth.toString());
            } else {
              month = "" + (p.gMonth.toString());
            }
            datestring = day + '.' + month + '.' +year;
          } else {
            month = germanMonth[p.gMonth-1];
            datestring = month + ' ' + year
          }
        } else {
        datestring = year;   
        }     
      }
  }
  if (date === "s") {
    if (p.sYear != undefined) {
      var year:string = p.sYear.toString();
      if (p.sMonth != undefined) {
        if (p.sDay != undefined) {
          if (p.sDay < 10) {
            day = '0' + p.sDay;
          } else {
            day = p.sDay.toString();
          }
          if ((p.sMonth) < 10) {
            month = '0' + (p.sMonth.toString());
          } else {
            month = "" + (p.sMonth.toString());
          }
          datestring = day + '.' + month + '.' +year;
        } else {
          month = germanMonth[p.sMonth-1];
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
