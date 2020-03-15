import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { Person } from '../../../_interface/person';

@Component({
  selector: 'app-template-person-details',
  templateUrl: './template-person-details.component.html',
  styleUrls: ['./template-person-details.component.sass']
})
export class TemplatePersonDetailsComponent implements OnInit, OnChanges {

  @Input() person$ : Person;
  @Output('changeSelectedPerson') showNewPersonEvent: EventEmitter<number> = new EventEmitter<number>();
  public gebDateString: string = ""
  public sterbDateString: string = ""

  constructor() {
    
   }

   ngOnChanges() {
    this.gebDateString = "";
    this.sterbDateString = "";
    this.gebDateString = this.dateToString(this.person$, "g");
    this.sterbDateString = this.dateToString(this.person$, "s");

    
    
    if (this.person$.imageSrc == undefined) {
      console.log('kein Bild vorhanden');
      if (this.person$.male) {
        this.person$.imageSrc = "../../../assets/pics/jpg/placeholderMan.jpg";
      } else {
        this.person$.imageSrc = "../../../assets/pics/jpg/placeholderWoman.jpg";
      }
    }
   }

  ngOnInit() {
    

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
            console.log('Tag, monat und Jahr gefunden')
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
            console.log(datestring)
          } else {
            console.log ('nur Monat und Jahr da')
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
          console.log('Tag, monat und Jahr gefunden')
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
          console.log(datestring)
        } else {
          console.log ('nur Monat und Jahr da')
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

  onClickPartner() {
    if (this.person$.partnerId != 0) {
      this.showNewPersonEvent.emit(this.person$.partnerId);
    }
  }

}
