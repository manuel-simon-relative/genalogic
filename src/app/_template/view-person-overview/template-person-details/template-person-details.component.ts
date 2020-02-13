import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { Person } from '../../../_interface/person';

@Component({
  selector: 'app-template-person-details',
  templateUrl: './template-person-details.component.html',
  styleUrls: ['./template-person-details.component.sass']
})
export class TemplatePersonDetailsComponent implements OnInit, OnChanges {

  @Input() person$ : Person;

  constructor() {
    
   }

   ngOnChanges() {
   }

  ngOnInit() {

    if (this.person$.imageSrc == "") {
      console.log('kein Bild vorhanden');
      if (this.person$.sex == "m") {
        this.person$.imageSrc = "../../../assets/pics/jpg/placeholderMan.jpg";
      } else {
        this.person$.imageSrc = "../../../assets/pics/jpg/placeholderWoman.jpg";
      }
    }

  }

}
