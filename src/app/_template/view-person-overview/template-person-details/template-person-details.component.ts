import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { Person } from '../../../_interface/person';

@Component({
  selector: 'app-template-person-details',
  templateUrl: './template-person-details.component.html',
  styleUrls: ['./template-person-details.component.sass']
})
export class TemplatePersonDetailsComponent implements OnInit, OnChanges {

  @Input() person$ : Person;
  public gebDateString: string = ""
  public sterbDateSTring: string = ""

  constructor() {
    
   }

   ngOnChanges() {
   }

  ngOnInit() {
    if (typeof(this.person$.gebDatum) != "undefined") {this.gebDateString = this.dateToString(this.person$.gebDatum);}
    if (typeof(this.person$.sterbDatum) != "undefined") {this.sterbDateSTring = this.dateToString(this.person$.sterbDatum);}
    
    if (this.person$.imageSrc == "") {
      console.log('kein Bild vorhanden');
      if (this.person$.sex == "m") {
        this.person$.imageSrc = "../../../assets/pics/jpg/placeholderMan.jpg";
      } else {
        this.person$.imageSrc = "../../../assets/pics/jpg/placeholderWoman.jpg";
      }
    }

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

}
