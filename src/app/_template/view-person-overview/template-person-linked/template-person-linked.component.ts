import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { Person } from '../../../_interface/person';

@Component({
  selector: 'app-template-person-linked',
  templateUrl: './template-person-linked.component.html',
  styleUrls: ['./template-person-linked.component.sass']
})
export class TemplatePersonLinkedComponent implements OnInit, OnChanges {
  @Input() person$ : Person;
  @Output('changeSelectedPerson') changeSelectedPersonEvent: EventEmitter<string> = new EventEmitter<string>();
  public birthDateString: string = ""
  public deathDateString: string = ""
  public showBirthDate: Boolean = true
  public showDeathDate: Boolean = true

  constructor() { }

  ngOnChanges(){
  }

  ngOnInit() {
  this.birthDateString = this.dateToString(this.person$, "b");
  this.deathDateString = this.dateToString(this.person$, "d");
  if (this.birthDateString == "") { this.showBirthDate = false }
  if (this.deathDateString == "") { this.showDeathDate = false }
    
    if (this.person$.imageSrc == "") {
      console.log('kein Bild vorhanden');
      if (this.person$.male) {
        this.person$.imageSrc = "../../../assets/pics/jpg/placeholderMan.jpg";
      } else {
        this.person$.imageSrc = "../../../assets/pics/jpg/placeholderWoman.jpg";
      }
    }
  }

  public clickChangeSelectedPerson(selected: any) {
    if (selected != 0) {
      this.changeSelectedPersonEvent.emit(selected);
    }
  }

  public dateToString(p: Person, date: String):string {
    var datestring = "";
    var germanMonth: Array<string> = ['Januar','Februar','März','April','Mai', 'Juni', 'Juli', 'August','September', 'Oktober', 'November', 'Dezember'];
    //Geburtsdatum bauen
    var day:string;
    var month:string;
    
    if (date === "b") {
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
  if (date === "d") {
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
}
