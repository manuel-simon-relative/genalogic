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
  public birthDateString: string = ""
  public showBirthDate: boolean = true;
  public deathDateString: string = ""
  public showDeathDate: boolean = true;
  public hasPartner : Boolean = false


  constructor() {
    
   }

   ngOnChanges() {
    this.birthDateString = "";
    this.deathDateString = "";
    this.birthDateString = this.dateToString(this.person$, "b");
    this.deathDateString = this.dateToString(this.person$, "d");
    if (this.deathDateString == "") { this.showDeathDate = false } else { this.showDeathDate = true}
    if (this.birthDateString == "") { this.showBirthDate = false } else { this.showBirthDate = true}
    
    
    if (this.person$.imageSrc == undefined) {
      //console.log('kein Bild vorhanden');
      if (this.person$.male) {
        this.person$.imageSrc = "../../../assets/pics/jpg/placeholderMan.jpg";
      } else {
        this.person$.imageSrc = "../../../assets/pics/jpg/placeholderWoman.jpg";
      }
    }
    if (this.person$.partnerId == 0)  {
      this.hasPartner = false
      //console.log(this.hasPartner)
    } else {
      this.hasPartner = true
      //console.log(this.hasPartner)
    }
  }



  ngOnInit() {
    

  }
  public dateToString(p: Person, date: String):string {
    console.log(p)
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
            //console.log('Tag, monat und Jahr gefunden')
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
            console.log(datestring)
          } else {
            //console.log ('nur Monat und Jahr da')
            month = germanMonth[p.birthMonth-1];
            datestring = month + ' ' + year
          }
        } else {
        datestring = year;   
        }     
      }
      console.log('Geburtsdatum ist: ' + datestring)
  }
  if (date === "d") {
    if (p.deathYear != undefined) {
      var year:string = p.deathYear.toString();
      if (p.deathMonth != undefined) {
        if (p.deathDay != undefined) {
          //console.log('Tag, monat und Jahr gefunden')
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
          //console.log ('nur Monat und Jahr da')
          month = germanMonth[p.deathMonth-1];
          datestring = month + ' ' + year
        }
      } else {
      datestring = year;   
      }     
    }
    console.log('Sterbedatum ist: ' + datestring)
}

    return datestring
  }

  onClickPartner(partnername) {
    console.log(partnername)
    if (this.person$.partnerId != 0) {
      this.showNewPersonEvent.emit(this.person$.partnerId);
    }
  }

}
